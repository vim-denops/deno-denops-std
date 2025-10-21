import { nextTick } from "node:process";
import type { Call, Context, Denops, Dispatcher, Meta } from "@denops/core";
import { BatchError } from "@denops/core";
import { AccumulateCancelledError } from "./error.ts";

const errorProp = Symbol("AccumulateErrorResult");

type ErrorResult = {
  [errorProp]:
    | { type: "error"; message: string; cause: unknown }
    | { type: "cancel"; cause: unknown }
    | { type: "unknown"; message: string; cause: unknown };
};

class AccumulateHelper implements Denops {
  readonly #denops: Denops;
  readonly #calls: Call[] = [];
  readonly #results: unknown[] = [];
  readonly #disposer = Promise.withResolvers<void>();
  #closed = false;
  #resolvedWaiter = Promise.withResolvers<void>();

  constructor(denops: Denops) {
    this.#denops = denops;
  }

  static close(helper: AccumulateHelper): void {
    helper.#closed = true;
    helper.#disposer.promise.catch(() => {/* prevent unhandled rejection */});
    helper.#disposer.reject();
  }

  get name(): string {
    return this.#denops.name;
  }

  get meta(): Meta {
    return this.#denops.meta;
  }

  get interrupted(): AbortSignal | undefined {
    return this.#denops.interrupted;
  }

  get context(): Record<string | number | symbol, unknown> {
    return this.#denops.context;
  }

  get dispatcher(): Dispatcher {
    return this.#denops.dispatcher;
  }

  set dispatcher(dispatcher: Dispatcher) {
    this.#denops.dispatcher = dispatcher;
  }

  async redraw(force?: boolean): Promise<void> {
    return await this.#denops.redraw(force);
  }

  async call(fn: string, ...args: unknown[]): Promise<unknown> {
    this.#ensureAvailable();
    const call: Call = [fn, ...args];
    const [result] = await this.#waitResolved([call]);

    if (isErrorResult(result)) {
      const error = result[errorProp];
      if (error.type === "error") {
        throw new Error(error.message, { cause: error.cause });
      } else if (error.type === "cancel") {
        const repr = `['${fn}', ...]`;
        throw new AccumulateCancelledError(
          `Call was cancelled due to another error in parallel execution: ${repr}`,
          { calls: [call], cause: error.cause },
        );
      } else {
        throw new Error(error.message, { cause: error.cause });
      }
    }

    return result;
  }

  async batch(...calls: Call[]): Promise<unknown[]> {
    this.#ensureAvailable();
    if (calls.length === 0) {
      return [];
    }
    const results = await this.#waitResolved(calls);

    const errorIndex = results.findIndex(isErrorResult);
    if (errorIndex >= 0) {
      const { [errorProp]: error } = results[errorIndex] as ErrorResult;
      if (error.type === "error") {
        throw new BatchError(error.message, results.slice(0, errorIndex));
      } else if (error.type === "cancel") {
        const [[fn]] = calls;
        const repr = `[['${fn}', ...], ... total ${calls.length} calls]`;
        throw new AccumulateCancelledError(
          `Batch calls were cancelled due to another error in parallel execution: ${repr}`,
          { calls, cause: error.cause },
        );
      } else {
        throw new Error(error.message, { cause: error.cause });
      }
    }

    return results;
  }

  async cmd(cmd: string, ctx: Context = {}): Promise<void> {
    await this.call("denops#api#cmd", cmd, ctx);
  }

  async eval(expr: string, ctx: Context = {}): Promise<unknown> {
    return await this.call("denops#api#eval", expr, ctx);
  }

  async dispatch(
    name: string,
    fn: string,
    ...args: unknown[]
  ): Promise<unknown> {
    return await this.#denops.dispatch(name, fn, ...args);
  }

  #ensureAvailable(): void {
    if (this.#closed) {
      throw new TypeError(
        "AccumulateHelper instance is not available outside of 'accumulate' block",
      );
    }
  }

  async #waitResolved(calls: Call[]): Promise<unknown[]> {
    const start = this.#calls.length;
    this.#calls.push(...calls);
    const end = this.#calls.length;
    nextTick(() => {
      if (end === this.#calls.length) {
        this.#resolvePendingCalls();
      }
    });
    try {
      await Promise.race([
        this.#disposer.promise,
        this.#resolvedWaiter.promise,
      ]);
    } catch {
      // Rethrow the error if the disposer is rejected.
      this.#ensureAvailable();
    }
    return this.#results.slice(start, end);
  }

  async #resolvePendingCalls(): Promise<void> {
    const resultIndex = this.#results.length;
    const calls = this.#calls.slice(resultIndex);
    this.#results.length = this.#calls.length;
    const { resolve } = this.#resolvedWaiter;
    this.#resolvedWaiter = Promise.withResolvers();
    if (!this.#closed) {
      const results = await this.#resolveCalls(calls);
      this.#results.splice(resultIndex, results.length, ...results);
    }
    resolve();
  }

  async #resolveCalls(calls: Call[]): Promise<unknown[]> {
    try {
      return await this.#denops.batch(...calls);
    } catch (error: unknown) {
      if (isBatchError(error)) {
        const { results, message } = error;
        const errorResult = {
          [errorProp]: { type: "error", message, cause: error },
        };
        const cancelledResults = calls.slice(results.length + 1)
          .map(() => ({
            [errorProp]: { type: "cancel", cause: error },
          }));
        return [...results, errorResult, ...cancelledResults];
      } else {
        const message = error instanceof Error ? error.message : String(error);
        const unknownErrors = calls.map(() => ({
          [errorProp]: { type: "unknown", message, cause: error },
        }));
        return unknownErrors;
      }
    }
  }
}

function isBatchError(obj: unknown): obj is BatchError {
  return obj instanceof Error && obj.name === "BatchError";
}

function isErrorResult(obj: unknown): obj is ErrorResult {
  return obj != null && Object.hasOwn(obj, errorProp);
}

/**
 * Runs an `executor` function while automatically batching multiple RPCs.
 *
 * `accumulate()` allows you to write normal async functions while automatically
 * batching multiple RPCs that occur at the same timing (during microtask
 * processing) into a single RPC call.
 *
 * Note that RPC calls with side effects should be avoided, and if you do, the
 * order in which you call them should be carefully considered.
 *
 * @example
 * ```typescript
 * import { assertType, IsExact } from "jsr:@std/testing/types";
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { accumulate } from "jsr:@denops/std/batch";
 *
 * export const main: Entrypoint = async (denops) => {
 *   const results = await accumulate(denops, async (denops) => {
 *     const lines = await fn.getline(denops, 1, "$");
 *     return await Promise.all(lines.map(async (line, index) => {
 *       const keyword = await fn.matchstr(denops, line, "\\k\\+");
 *       const len = await fn.len(denops, keyword);
 *       return {
 *         lnum: index + 1,
 *         keyword,
 *         len,
 *       };
 *     }));
 *   });
 *
 *   assertType<
 *     IsExact<
 *       typeof results,
 *       { lnum: number; keyword: string; len: number; }[]
 *     >
 *   >(true);
 * }
 * ```
 *
 * In the case of the example, the following 3 RPCs are called.
 *
 * 1. RPC call to `getline`.
 * 2. Multiple `matchstr` calls in one RPC.
 * 3. Multiple `len` calls in one RPC.
 *
 * @remarks
 * The `denops` instance passed as the argument to the `executor` function is
 * only valid within the `accumulate()` block. Attempting to use it outside the
 * block will result in an error when calling `denops.call()`, `denops.batch()`,
 * `denops.cmd()`, or `denops.eval()`.
 */
export async function accumulate<T extends unknown>(
  denops: Denops,
  executor: (helper: Denops) => T,
): Promise<Awaited<T>> {
  const helper = new AccumulateHelper(denops);
  try {
    return await executor(helper);
  } finally {
    AccumulateHelper.close(helper);
  }
}
