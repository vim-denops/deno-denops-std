import type {
  Context,
  Denops,
  Dispatcher,
  Meta,
} from "https://deno.land/x/denops_core@v3.4.1/mod.ts";

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
 * Perform batch call
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
