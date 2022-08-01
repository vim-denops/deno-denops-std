import type { Denops } from "https://deno.land/x/denops_core@v3.1.0/mod.ts";
import * as fn from "../../function/mod.ts";
import * as cygpath from "./cygpath.ts";

type Translator = (denops: Denops, p: string) => Promise<string>;

const nullTranslator: Translator = (_denops: Denops, p: string) =>
  Promise.resolve(p);

let impl: { to: Translator; from: Translator } | undefined;

async function ensurePrerequisites(denops: Denops): Promise<void> {
  if (impl) {
    return;
  }
  const win32unix = await fn.exists(denops, "win32unix");
  if (win32unix) {
    impl = {
      to: cygpath.to,
      from: cygpath.from,
    };
  } else {
    impl = {
      to: nullTranslator,
      from: nullTranslator,
    };
  }
}

export async function to(denops: Denops, p: string): Promise<string> {
  await ensurePrerequisites(denops);
  return await impl!.to(denops, p);
}

export async function from(denops: Denops, p: string): Promise<string> {
  await ensurePrerequisites(denops);
  return await impl!.from(denops, p);
}
