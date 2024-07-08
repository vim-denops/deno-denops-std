import type { Context, Denops, Dispatcher, Meta } from "@denops/core";

type VimVoid<T> = T extends void ? 0 : T;

type Collect<T extends readonly unknown[] | []> = {
  -readonly [P in keyof T]: VimVoid<Awaited<T[P]>>;
};

class CollectHelper implements Denops {
  #denops: Denops;
  #calls: [string, ...unknown[]][];
  #closed: boolean;

  constructor(denops: Denops) {
    this.#denops = denops;
    this.#calls = [];
    this.#closed = false;
  }

  static getCalls(helper: CollectHelper): [string, ...unknown[]][] {
    return helper.#calls;
  }

  static close(helper: CollectHelper): void {
    helper.#closed = true;
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

  redraw(_force?: boolean): Promise<void> {
    throw new Error("The 'redraw' method is not available on CollectHelper.");
  }

  call(fn: string, ...args: unknown[]): Promise<unknown> {
    if (this.#closed) {
      throw new Error(
        "CollectHelper instance is not available outside of 'collect' block",
      );
    }
    this.#calls.push([fn, ...args]);
    return Promise.resolve();
  }

  batch(..._calls: [string, ...unknown[]][]): Promise<unknown[]> {
    throw new Error("The 'batch' method is not available on CollectHelper.");
  }

  cmd(_cmd: string, _ctx: Context = {}): Promise<void> {
    throw new Error("The 'cmd' method is not available on CollectHelper.");
  }

  eval(expr: string, ctx: Context = {}): Promise<unknown> {
    if (this.#closed) {
      throw new Error(
        "CollectHelper instance is not available outside of 'collect' block",
      );
    }
    this.call("denops#api#eval", expr, ctx);
    return Promise.resolve();
  }

  dispatch(name: string, fn: string, ...args: unknown[]): Promise<unknown> {
    return this.#denops.dispatch(name, fn, ...args);
  }
}

/**
 * Call multiple denops functions sequentially without RPC overhead and return values
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { collect } from "jsr:@denops/std/batch";
 *
 * export const main: Entrypoint = async (denops) => {
 *   const results = await collect(denops, (denops) => [
 *     denops.eval("&modifiable"),
 *     denops.eval("&modified"),
 *     denops.eval("&filetype"),
 *   ]);
 *   // results contains the value of modifiable, modified, and filetype
 * }
 * ```
 *
 * Not like `batch`, the function can NOT be nested.
 *
 * Note that `denops.call()` or `denops.eval()` always return falsy value in
 * `collect()`, indicating that you **cannot** write code like below:
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { collect } from "jsr:@denops/std/batch";
 *
 * export const main: Entrypoint = async (denops) => {
 *   const results = await collect(denops, (denops) => {
 *     // !!! DON'T DO THIS !!!
 *     (async () => {
 *       if (await denops.call("has", "nvim")) {
 *         // deno-lint-ignore no-explicit-any
 *         await (denops.call("api_info") as any).version;
 *       } else {
 *         await denops.eval("v:version");
 *       }
 *     })();
 *     return [];
 *   });
 * }
 * ```
 *
 * The `denops` instance passed to the `collect` block is NOT available outside of
 * the block. An error is thrown when `denops.call()`, `denops.cmd()`, or
 * `denops.eval()` is called.
 *
 * Note that `denops.redraw()` and `denops.cmd()` cannot be called within `collect()`.
 * If it is called, an error is raised.
 */
export async function collect<T extends readonly unknown[] | []>(
  denops: Denops,
  executor: (helper: CollectHelper) => T,
): Promise<Collect<T>> {
  const helper = new CollectHelper(denops);
  try {
    await Promise.all(executor(helper));
  } finally {
    CollectHelper.close(helper);
  }
  const calls = CollectHelper.getCalls(helper);
  const results = await denops.batch(...calls);
  return results as Collect<T>;
}
