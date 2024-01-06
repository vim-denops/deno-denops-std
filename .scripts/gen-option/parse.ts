import { isOptionType, type Option, type OptionType } from "./types.ts";
import { createMarkdownFromHelp } from "../markdown.ts";
import { regexIndexOf, trimLines } from "../utils.ts";

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
 * 			{only available when compiled with the |+rightleft|
 * 			feature}
 * 	The ASCII code for the first letter of the Hebrew alphabet.  The
 * 	routine that maps the keyboard in Hebrew mode, both in Insert mode
 * 	...
 * ```
 */
export function parse(content: string) {
  // Remove modeline
  content = content.replace(/\n vim:[^\n]*\s*$/, "");

  const options: Option[] = [];
  const succeeds = new Set<number>();
  const errors: Array<{ name: string; start: number }> = [];
  let last = -1;
  for (const match of content.matchAll(/\*'(\w+)'\*/g)) {
    const name = match[1];
    const index = match.index!;
    if (index < last) {
      // It is contained previous block
      continue;
    }
    const { block, start, end } = extractBlock(content, index);
    const option = parseBlock(name, block);
    if (option) {
      options.push(option);
      succeeds.add(start);
      last = end;
    } else {
      errors.push({ name, start });
    }
  }

  if (errors.length) {
    for (const { name, start } of errors) {
      if (!succeeds.has(start)) {
        const line = content.substring(0, start + 1).split("\n").length;
        console.error(
          `Failed to parse option definition for ${name} at line ${line}`,
        );
      }
    }
  }

  return options;
}

function extractBlock(content: string, index: number): {
  block: string;
  start: number;
  end: number;
} {
  const s = content.lastIndexOf("\n", index);
  const ms = regexIndexOf(content, /\n[^<>\s]|$/, s);
  const me = regexIndexOf(content, /\n[^<>\s]|$/, ms + 1);
  const e = content.lastIndexOf("\n", me);
  const block = content
    .substring(s, e)
    .replace(/(\n<?)(?:\s+\*\S+?\*)+\s*$/, "$1") // Remove next block tag
    .trimEnd();
  return { block, start: s, end: s + block.length };
}

/**
 * Parse option definition block.
 *
 * A option definition block is constrcuted with following parts
 *
 * - {name}      : Required.
 * - {type}      : Required. But some have fallbacks.
 * - {scope}     : Optional. If not present, assume "global".
 * - {defaults}  : Optional. Appended to {document}.
 * - {attention} : Optional. Appended to {document}.
 * - {document}  : Optional.
 *
 * ```text
 *  name                 type     defaults
 *  ~~~~~               ~~~~~~  ~~~~~~~~~~~~~
 * 'aleph' 'al'		number	(default 224)      *E123*
 * 			global                             <- scope
 * 			{only available when compiled ...  <- attention
 * 			feature}                               :
 * 	The ASCII code for the first letter of the ...     <- document
 * 	routine that maps the keyboard in Hebrew mode ...      :
 * ```
 */
function parseBlock(name: string, body: string): Option | undefined {
  // Extract definition line
  const reTags = /(?:[ \t]+\*[^*\s]+\*)+[ \t]*$/.source;
  const reShortNames = /(?:[ \t]+'\w+')*/.source;
  const reType = /[ \t]+(?<type>\w+)/.source;
  const reDefaults = /[ \t]+(?<defaults>\(.*?(?:\n\t{3,}[ \t].*?)*?\))/.source;
  const reDefinition =
    `^'${name}'${reShortNames}(?:${reType}(?:${reDefaults})?)?(?:${reTags})?$`;
  const m1 = body.match(new RegExp(reDefinition, "dm"));
  const type = m1?.groups!.type ?? fallbackTypes[name];
  if (!m1 || !isOptionType(type)) {
    // {name} not found, or {type} is invalid
    return;
  }
  const defaults = m1.groups!.defaults?.replaceAll(/^\s+/gm, " ").trim();
  body = trimLines(body.substring(m1.indices![0][1])) + "\n";

  // Extract {scope}
  const m2 = body.match(/^\t{3,}(global or local|global|local)(?:[ \t].*)?\n/d);
  const scope = (
    m2?.[1].split(" or ") ?? ["global"]
  ) as Array<"global" | "local">;
  body = trimLines(body.substring(m2?.indices![0][1] ?? 0)) + "\n";

  // Extract {attention}
  const m3 = body.match(/^\t{3,}(\{(?:Vi[: ]|not|only)[^{}]*\})\s*?\n/d);
  const attention = m3?.[1].replaceAll(/\s+/g, " ").trim();
  body = trimLines(body.substring(m3?.indices![0][1] ?? 0)) + "\n";

  // Append {defaults} and {attention} to {document}
  body += `\n\n${defaults ?? ""}\n\n${attention ?? ""}`;

  const docs = createMarkdownFromHelp(body);

  return { name, type, scope, docs };
}
