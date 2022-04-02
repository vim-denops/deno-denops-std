import type {
  Context,
  Denops,
  Dispatcher,
  Meta,
} from "https://deno.land/x/denops_core@v3.0.0/mod.ts";

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

  get dispatcher(): Dispatcher {
    return this.#denops.dispatcher;
  }

  set dispatcher(dispatcher: Dispatcher) {
    this.#denops.dispatcher = dispatcher;
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
 * Perform gather call
 */
export async function gather(
  denops: Denops,
  main: (helper: GatherHelper) => Promise<void>,
): Promise<unknown[]> {
  const helper = new GatherHelper(denops);
  try {
    await main(helper);
  } finally {
    GatherHelper.close(helper);
  }
  const calls = GatherHelper.getCalls(helper);
  return await denops.batch(...calls);
}

export type { GatherHelper };
