import type { Denops } from "https://deno.land/x/denops_core@v3.0.1/mod.ts";
import {
  assertNumber,
  assertString,
} from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";
import * as fn from "../function/mod.ts";
import * as anonymous from "../anonymous/mod.ts";
import * as helper from "../helper/mod.ts";

export type CustomCompletion = (
  arglead: string,
  cmdline: string,
  cursorpos: number,
) => string[] | Promise<string[]>;

export type InputOptions = {
  prompt?: string;
  text?: string;
  completion?:
    | fn.BuiltinCompletion
    | (string & { _?: never })
    | CustomCompletion;
  // Guard `input` by `inputsave` and `inputrestore`
  inputsave?: boolean;
};

/**
 * Open a prompt to get user input.
 *
 * It is a wrapper function of Vim/Neovim's native `input()` function.
 * This version has the following advantages
 *
 * - Developers can use TypeScript custom completion function
 * - It returns `null` instead when user cancelled by <Esc> or <C-c>
 * - It automatically guard input when `inputsave` option is specified
 */
export async function input(
  denops: Denops,
  options: InputOptions = {},
): Promise<string | null> {
  await helper.load(denops, new URL("./input.vim", import.meta.url));
  const completion = options.completion ?? null;
  if (completion && typeof completion !== "string") {
    const [id] = anonymous.add(denops, async (arglead, cmdline, cursorpos) => {
      assertString(arglead);
      assertString(cmdline);
      assertNumber(cursorpos);
      return await completion(arglead, cmdline, cursorpos);
    });
    try {
      return await denops.call(
        "DenopsStdHelperInput",
        options.prompt ?? "",
        options.text ?? "",
        { plugin: denops.name, id },
        options.inputsave ?? false,
      ) as Promise<string | null>;
    } finally {
      anonymous.remove(denops, id);
    }
  }
  if (completion && !fn.isValidBuiltinCompletion(completion)) {
    if (
      !completion.startsWith("custom,") && !completion.startsWith("customlist,")
    ) {
      throw new Error(`Invalid completion '${completion}' specified.`);
    }
  }
  return denops.call(
    "DenopsStdHelperInput",
    options.prompt ?? "",
    options.text ?? "",
    completion,
    options.inputsave ?? false,
  ) as Promise<string | null>;
}
