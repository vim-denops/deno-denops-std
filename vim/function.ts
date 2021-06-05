import { Denops } from "../deps.ts";

export async function bufadd(denops: Denops, name: string): Promise<number> {
  const bufnr = await denops.call("bufadd", name);
  return bufnr as number;
}

export async function bufexists(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.call("bufexists", name) as number;
  return !!result;
}

export async function buflisted(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.call("buflisted", name) as number;
  return !!result;
}

export async function bufload(
  denops: Denops,
  name: string | number,
): Promise<void> {
  await denops.call("bufload", name);
}

export async function bufloaded(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.call("bufloaded", name) as number;
  return !!result;
}

export async function bufname(
  denops: Denops,
  name?: string | number,
): Promise<string> {
  return await denops.call("bufname", name) as string;
}

export async function bufnr(
  denops: Denops,
  name: string | number,
): Promise<number> {
  return await denops.call("bufnr", name) as number;
}

export async function bufwinid(
  denops: Denops,
  name: string | number,
): Promise<number> {
  return await denops.call("bufwinid", name) as number;
}

export async function bufwinnr(
  denops: Denops,
  name: string | number,
): Promise<number> {
  return await denops.call("bufwinnr", name) as number;
}

export class FunctionHelper {
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

  async buflisted(name: string | number): Promise<boolean> {
    return await buflisted(this.#denops, name);
  }

  async bufload(name: string | number): Promise<void> {
    await bufload(this.#denops, name);
  }

  async bufloaded(name: string | number): Promise<boolean> {
    return await bufloaded(this.#denops, name);
  }

  async bufname(name: string | number): Promise<string> {
    return await bufname(this.#denops, name);
  }

  async bufnr(name: string | number): Promise<number> {
    return await bufnr(this.#denops, name);
  }

  async bufwinid(name: string | number): Promise<number> {
    return await bufwinid(this.#denops, name);
  }

  async bufwinnr(name: string | number): Promise<number> {
    return await bufwinnr(this.#denops, name);
  }
}
