/**
 * This module provides the function to use Vim expressions within blocks.
 *
 * @module
 */

import type { Context, Denops, Dispatcher, Meta } from "@denops/core";
import { isString } from "@core/unknownutil/is/string";
import { isUndefined } from "@core/unknownutil/is/undefined";
import { ulid } from "@std/ulid";
import { execute } from "../helper/execute.ts";
import { stringify } from "./stringify.ts";

/**
 * Allows to use {@linkcode [eval].Expression|Expression} and {@linkcode [eval].RawString|RawString} transparently within blocks.
 *
 * ```typescript
 * import type { Denops } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { expr } from "jsr:@denops/std/eval/expression";
 * import { rawString } from "jsr:@denops/std/eval/string";
 * import { useEval } from "jsr:@denops/std/eval/use-eval";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await useEval(denops, async (denops) => {
 *     await denops.cmd('echo cword', { cword: expr`expand('<cword>')` })
 *     await fn.feedkeys(denops, rawString`\<Cmd>echo 'foo'\<CR>`)
 *   });
 * }
 * ```
 */
export async function useEval<T>(
  denops: Denops,
  executor: (helper: UseEvalHelper) => Promise<T>,
): Promise<T> {
  const helper = new UseEvalHelper(denops);
  return await executor(helper);
}

const cacheKey = "denops_std/eval/use_eval@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (isString(denops.context[cacheKey])) {
    return denops.context[cacheKey];
  }
  const suffix = ulid();
  denops.context[cacheKey] = suffix;
  const script = `
  let g:loaded_denops_std_eval_useEval_${suffix} = 1

  function DenopsStd_Eval_UseEval_Call_${suffix}(fn, args) abort
    return call(a:fn, eval(a:args))
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

function trimEndOfArgs(args: unknown[]): unknown[] {
  const last = args.findIndex(isUndefined);
  return last < 0 ? args : args.slice(0, last);
}

class UseEvalHelper implements Denops {
  #denops: Denops;

  constructor(denops: Denops) {
    this.#denops = denops;
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

  redraw(force?: boolean): Promise<void> {
    return this.#denops.redraw(force);
  }

  async call(fn: string, ...args: unknown[]): Promise<unknown> {
    const suffix = await ensurePrerequisites(this.#denops);
    return this.#denops.call(
      `DenopsStd_Eval_UseEval_Call_${suffix}`,
      fn,
      stringify(trimEndOfArgs(args)),
    );
  }

  async batch(...calls: [string, ...unknown[]][]): Promise<unknown[]> {
    const suffix = await ensurePrerequisites(this.#denops);
    const callHelper = `DenopsStd_Eval_UseEval_Call_${suffix}`;
    return await this.#denops.batch(
      ...calls.map(([fn, ...args]): [string, ...unknown[]] => [
        callHelper,
        fn,
        stringify(trimEndOfArgs(args)),
      ]),
    );
  }

  async cmd(cmd: string, ctx: Context = {}): Promise<void> {
    await this.call("denops#api#cmd", cmd, ctx);
  }

  eval(expr: string, ctx: Context = {}): Promise<unknown> {
    return this.call("denops#api#eval", expr, ctx);
  }

  dispatch(name: string, fn: string, ...args: unknown[]): Promise<unknown> {
    return this.#denops.dispatch(name, fn, ...args);
  }
}
