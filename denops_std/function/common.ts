import { Denops } from "../vendor/https/deno.land/x/denops_core/mod.ts";

export async function exists(
  denops: Denops,
  name: string,
): Promise<boolean> {
  const result = await denops.call("exists", name) as number;
  return !!result;
}

export async function has(
  denops: Denops,
  name: string,
  check?: boolean,
): Promise<boolean> {
  if (check) {
    const result = await denops.call("has", name, 1) as number;
    return !!result;
  }
  const result = await denops.call("has", name) as number;
  return !!result;
}

export async function getline(
  denops: Denops,
  lnum: string | number,
): Promise<string>;
export async function getline(
  denops: Denops,
  lnum: string | number,
  end: string | number,
): Promise<string[]>;
export async function getline(
  denops: Denops,
  lnum: string | number,
  end?: string | number,
): Promise<string | string[]> {
  if (end) {
    return await denops.call("getline", lnum, end) as string[];
  }
  return await denops.call("getline", lnum) as string;
}

export async function setline(
  denops: Denops,
  lnum: string | number,
  text: string | string[],
): Promise<boolean> {
  const result = await denops.call("setline", lnum, text) as number;
  return !!result;
}
