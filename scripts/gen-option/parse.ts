import { isOptionType, type Option, type OptionType } from "./types.ts";
import { regexIndexOf } from "../utils.ts";

const fallbackTypes: Record<string, OptionType> = {
  "encoding": "string", // not defined type in nvim 0.8.0
};

/**
 * Parse Vim/Neovim help.
 *
 * It extract a option definition block like below and return
 * a list of `Option`.
 *
 * ```text
 * 					*'aleph'* *'al'* *aleph* *Aleph*
 * 'aleph' 'al'		number	(default 224)
 * 			global
 * 	The ASCII code for the first letter of the Hebrew alphabet.  The
 * 	routine that maps the keyboard in Hebrew mode, both in Insert mode
 * 	...
 * ```
 */
export function parse(content: string) {
  // Remove modeline
  content = content.replace(/\n vim:[^\n]*\s*$/, "");

  const options: Option[] = [];
  for (const match of content.matchAll(/\*'(\w+)'\*/g)) {
    const name = match[1];
    const block = extractBlock(content, match.index ?? 0);
    const option = parseBlock(name, block);
    if (option) {
      options.push(option);
    }
  }
  return options;
}

function extractBlock(content: string, index: number): string {
  const s = content.lastIndexOf("\n", index);
  const ms = regexIndexOf(content, /\n[^<>\s]|$/, s);
  const me = regexIndexOf(content, /\n[^<>\s]|$/, ms + 1);
  const e = content.lastIndexOf("\n", me);
  const block = content
    .substring(s, e)
    .replace(/(\n<?)(?:\s+\*\S+?\*)+\s*$/, "$1") // Remove next block tag
    .trimEnd();
  return block;
}

function parseBlock(name: string, body: string): Option | undefined {
  const m1 = body.match(
    new RegExp(`^'${name}'(?:\\s+'\\w+')*\\s+(\\w+)\\s`, "m"),
  );
  const type = m1?.[1] ?? fallbackTypes[name];
  if (!isOptionType(type)) {
    return;
  }

  const m2 = body.match(/\n\t{3,}(global or local|global|local)(?:\s|$)/);
  const scope = (m2?.[1].split(" or ") ?? ["global"]) as Array<
    "global" | "local"
  >;

  const s = regexIndexOf(body, /\n|$/, (m2?.index ?? m1?.index ?? 0) + 1);
  body = body.substring(s);

  // Remove tags
  body = body.replaceAll(/\*\S+?\*/g, "");
  // Remove trailing spaces
  body = body.split("\n").map((v) => v.trimEnd()).join("\n");
  // Remove indent
  body = body.split("\n").map((v) => v.replace(/^\t/, "")).join("\n");

  const docs = body;
  return { name, type, scope, docs };
}
