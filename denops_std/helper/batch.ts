import {
  Context,
  Denops,
  Dispatcher,
  Meta,
} from "../vendor/https/deno.land/x/denops_core/mod.ts";

class BatchHelper implements Denops {
  #denops: Denops;
  #calls: [string, ...unknown[]][];

  constructor(denops: Denops) {
    this.#denops = denops;
    this.#calls = [];
  }

  static getCalls(helper: BatchHelper): [string, ...unknown[]][] {
    return helper.#calls;
  }

  get name(): string {
    return this.#denops.name;
  }

  get meta(): Meta {
    return this.#denops.meta;
  }

  get dispatcher(): Dispatcher {
    return this.#denops.dispatcher;
  }

  set dispatcher(dispatcher: Dispatcher) {
    this.#denops.dispatcher = dispatcher;
  }

  call(fn: string, ...args: unknown[]): Promise<unknown> {
    this.#calls.push([fn, ...args]);
    return Promise.resolve();
  }

  batch(..._calls: [string, ...unknown[]][]): Promise<unknown[]> {
    throw new Error(
      "The 'batch' method is not available on BatchDenops instance.",
    );
  }

  cmd(cmd: string, ctx: Context = {}): Promise<void> {
    this.call("denops#api#cmd", cmd, ctx);
    return Promise.resolve();
  }

  eval(expr: string, ctx: Context = {}): Promise<unknown> {
    this.call("denops#api#eval", expr, ctx);
    return Promise.resolve();
  }

  dispatch(name: string, fn: string, ...args: unknown[]): Promise<unknown> {
    return this.#denops.dispatch(name, fn, ...args);
  }
}

/**
 * Call denops functions sequentially without redraw and return the results.
 *
 * It is a wrapper function of `denops.batch()` to allow users to use `function`
 * modules, `denops.cmd()`, `denops.eval()`, or whatever things which assume a
 * `denops` instance.
 */
export async function batch(
  denops: Denops,
  main: (helper: BatchHelper) => Promise<void> | void,
): Promise<unknown[]> {
  const helper = new BatchHelper(denops);
  await main(helper);
  const calls = BatchHelper.getCalls(helper);
  return await denops.batch(...calls);
}

export type { BatchHelper };
