import { Denops } from "../vendor/https/deno.land/x/denops_core/mod.ts";

export async function bufadd(
  denops: Denops,
  name: string,
): Promise<number> {
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

export async function getbufline(
  denops: Denops,
  name: string | number,
  lnum: string | number,
  end?: string | number,
): Promise<string[]> {
  return await denops.call("getbufline", name, lnum, end) as string[];
}

export async function setbufline(
  denops: Denops,
  name: string | number,
  lnum: string | number,
  text: string | string[],
): Promise<boolean> {
  const result = await denops.call("setbufline", name, lnum, text) as number;
  return !!result;
}
