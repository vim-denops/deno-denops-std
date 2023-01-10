import type {
  Context,
  Denops,
  Dispatcher,
  Meta,
} from "https://deno.land/x/denops_core@v3.4.1/mod.ts";

class GatherHelper implements Denops {
  #denops: Denops;
  #calls: [string, ...unknown[]][];
  #closed: boolean;

  constructor(denops: Denops) {
    this.#denops = denops;
    this.#calls = [];
    this.#closed = false;
  }

  static getCalls(helper: GatherHelper): [string, ...unknown[]][] {
    return helper.#calls;
  }

  static close(helper: GatherHelper): void {
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

  redraw(_force?: boolean): Promise<void> {
    throw new Error("The 'redraw' method is not available on GatherHelper.");
  }

  call(fn: string, ...args: unknown[]): Promise<unknown> {
    if (this.#closed) {
      throw new Error(
        "GatherHelper instance is not available outside of 'gather' block",
      );
    }
    this.#calls.push([fn, ...args]);
    return Promise.resolve();
  }

  batch(..._calls: [string, ...unknown[]][]): Promise<unknown[]> {
    throw new Error("The 'batch' method is not available on GatherHelper.");
  }

  cmd(cmd: string, ctx: Context = {}): Promise<void> {
    if (this.#closed) {
      throw new Error(
        "GatherHelper instance is not available outside of 'gather' block",
      );
    }
    this.call("denops#api#cmd", cmd, ctx);
    return Promise.resolve();
  }

  eval(expr: string, ctx: Context = {}): Promise<unknown> {
    if (this.#closed) {
      throw new Error(
        "GatherHelper instance is not available outside of 'gather' block",
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
 * import { Denops } from "../mod.ts";
 * import { gather } from "./gather.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const results = await gather(denops, async (denops) => {
 *     await denops.eval("&modifiable");
 *     await denops.eval("&modified");
 *     await denops.eval("&filetype");
 *   });
 *   // results contains the value of modifiable, modified, and filetype
 * }
 * ```
 *
 * Not like `batch`, the function can NOT be nested.
 *
 * Note that `denops.call()` or `denops.eval()` always return falsy value in
 * `gather()`, indicating that you **cannot** write code like below:
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { gather } from "./gather.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const results = await gather(denops, async (denops) => {
 *     // !!! DON'T DO THIS !!!
 *     if (await denops.call("has", "nvim")) {
 *       // deno-lint-ignore no-explicit-any
 *       await (denops.call("api_info") as any).version;
 *     } else {
 *       await denops.eval("v:version");
 *     }
 *   });
 * }
 * ```
 *
 * The `denops` instance passed to the `gather` block is NOT available outside of
 * the block. An error is thrown when `denops.call()`, `denops.cmd()`, or
 * `denops.eval()` is called.
 *
 * Note that `denops.redraw()` cannot be called within `gather()`. If it is called,
 * an error is raised.
 */
export async function gather(
  denops: Denops,
  executor: (helper: GatherHelper) => Promise<void>,
): Promise<unknown[]> {
  const helper = new GatherHelper(denops);
  try {
    await executor(helper);
  } finally {
    GatherHelper.close(helper);
  }
  const calls = GatherHelper.getCalls(helper);
  return await denops.batch(...calls);
}

export type { GatherHelper };
