import { Denops } from "../deps.ts";

export async function bufadd(denops: Denops, name: string): Promise<number> {
  const bufnr = await denops.eval("bufadd(name)", { name: name });
  return bufnr as number;
}

export async function bufexists(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.eval("bufexists(name)", { name: name }) as number;
  return result ? true : false;
}

export class BufferHelper {
  #denops: Denops;

  constructor(denops: Denops) {
    this.#denops = denops;
  }

  async bufadd(name: string): Promise<number> {
    return await bufadd(this.#denops, name);
  }

  async bufexists(name: string | number): Promise<boolean> {
    return await bufexists(this.#denops, name);
  }
}
