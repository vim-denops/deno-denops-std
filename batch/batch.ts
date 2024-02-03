import type { Context, Denops, Dispatcher, Meta } from "../mod.ts";

type Redraw = undefined | boolean;

class BatchHelper implements Denops {
  #denops: Denops;
  #calls: [string, ...unknown[]][];
  #redraw: Redraw;
  #closed: boolean;

  constructor(denops: Denops) {
    this.#denops = denops;
    this.#calls = [];
    this.#closed = false;
  }

  static getCalls(helper: BatchHelper): [string, ...unknown[]][] {
    return helper.#calls;
  }

  static getRedraw(helper: BatchHelper): Redraw {
    return helper.#redraw;
  }

  static close(helper: BatchHelper): void {
    helper.#closed = true;
  }

  get name(): string {
    return this.#denops.name;
  }

  get meta(): Meta {
    return this.#denops.meta;
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
    // Prefer 'force' if the method is called multiple times
    this.#redraw = !!this.#redraw || !!force;
    return Promise.resolve();
  }

  call(fn: string, ...args: unknown[]): Promise<unknown> {
    if (this.#closed) {
      return this.#denops.call(fn, ...args);
    }
    this.#calls.push([fn, ...args]);
    return Promise.resolve();
  }

  batch(...calls: [string, ...unknown[]][]): Promise<unknown[]> {
    if (this.#closed) {
      return this.#denops.batch(...calls);
    }
    this.#calls.push(...calls);
    return Promise.resolve([]);
  }

  cmd(cmd: string, ctx: Context = {}): Promise<void> {
    if (this.#closed) {
      return this.#denops.cmd(cmd, ctx);
    }
    this.call("denops#api#cmd", cmd, ctx);
    return Promise.resolve();
  }

  eval(expr: string, ctx: Context = {}): Promise<unknown> {
    if (this.#closed) {
      return this.#denops.eval(expr, ctx);
    }
    this.call("denops#api#eval", expr, ctx);
    return Promise.resolve();
  }

  dispatch(name: string, fn: string, ...args: unknown[]): Promise<unknown> {
    return this.#denops.dispatch(name, fn, ...args);
  }
}

/**
 * Call multiple denops functions sequentially without RPC overhead
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import { batch } from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await batch(denops, async (denops) => {
 *     await denops.cmd("setlocal modifiable");
 *     await denops.cmd("setlocal noswap");
 *     await denops.cmd("setlocal nobackup");
 *   });
 * }
 * ```
 *
 * The function can be nested thus users can use functions which may internally use
 * `batch()` like:
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import { batch } from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
 *
 * async function replace(denops: Denops, content: string): Promise<void> {
 *   await batch(denops, async (denops) => {
 *     await denops.cmd("setlocal modifiable");
 *     await denops.cmd("setlocal foldmethod=manual");
 *     await denops.call("setline", 1, content.split(/\r?\n/));
 *     await denops.cmd("setlocal nomodifiable");
 *     await denops.cmd("setlocal nomodified");
 *   });
 * }
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await batch(denops, async (denops) => {
 *     await denops.cmd("edit Hello");
 *     await replace(denops, "Hello Darkness My Old Friend");
 *   });
 * }
 * ```
 *
 * Note that `denops.call()`, `denops.batch()`, or `denops.eval()` always return
 * falsy value in `batch()`, indicating that you **cannot** write code like below:
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import { batch } from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await batch(denops, async (denops) => {
 *     // !!! DON'T DO THIS !!!
 *     if (await denops.eval("&verbose")) {
 *       await denops.cmd("echomsg 'VERBOSE'");
 *     }
 *     await denops.cmd("echomsg 'Hello world'");
 *   });
 * }
 * ```
 *
 * The `denops` instance passed to the `batch` block is available even outside of
 * the block. It works like a real `denops` instance, mean that you can write code
 * like:
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
 * import { batch } from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await batch(denops, async (denops) => {
 *     const id = lambda.register(denops, async () => {
 *       // This code is called outside of 'batch' block
 *       // thus the 'denops' instance works like a real one.
 *       // That's why you can write code like below
 *       if (await denops.eval("&verbose")) {
 *         await denops.cmd("echomsg 'VERBOSE'");
 *       }
 *       await denops.cmd("echomsg 'Hello world'");
 *     });
 *     await denops.cmd(
 *       `command! Test call denops#request('${denops.name}', '${id}', [])`,
 *     );
 *   });
 * }
 * ```
 *
 * Note that `denops.redraw()` is executed only once after the batch is actually
 * executed, no matter how many times it is called in the `batch()`. If the `force`
 * option is specified even once, the last call will be the one with the force
 * option specified.
 */
export async function batch(
  denops: Denops,
  executor: (helper: BatchHelper) => Promise<void>,
): Promise<void> {
  const helper = new BatchHelper(denops);
  try {
    await executor(helper);
  } finally {
    BatchHelper.close(helper);
  }
  const calls = BatchHelper.getCalls(helper);
  await denops.batch(...calls);
  const redraw = BatchHelper.getRedraw(helper);
  if (redraw != null) {
    await denops.redraw(redraw);
  }
}

export type { BatchHelper };
