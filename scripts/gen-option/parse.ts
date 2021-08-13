import { Option } from "./types.ts";
import { regexIndexOf } from "./utils.ts";

/**
 * Parse Vim/Neovim help.
 *
 * It extract a option definition block like below and return
 * a list of `Definition`.
 *
 * ```
 * 					*'aleph'* *'al'* *aleph* *Aleph*
 * 'aleph' 'al'		number	(default 224)
 * 			global
 * 	The ASCII code for the first letter of the Hebrew alphabet.  The
 * 	routine that maps the keyboard in Hebrew mode, both in Insert mode
 * 	...
 * ```
 */
export function parse(content: string) {
  const options: Option[] = [];
  const optionNames = [...content.matchAll(/\*'(\w+)'\*/g)].map((m) => m[1]);
  for (const name of optionNames) {
    const pattern = new RegExp(`\n'${name}' (?:'\\w+'\\s*)*\\s+(\\w+)`);
    const m1 = content.match(pattern);
    if (!m1) {
      continue;
    }
    const type = m1[1];
    const block = extractBlock(content, m1.index || 0);

    const m2 = block.match(/\n\t\t\t(global or local|global|local)\s/);
    const scope = (m2 ? m2[1] : "global").split(" or ");

    const docs = block
      .substring(block.indexOf("\n", (m2 ? m2.index || 0 : 0) + 1))
      .split("\n")
      .map((v) => v.replace(/^\t/, ""))
      .join("\n");
    options.push({
      name,
      type,
      scope,
      docs,
    });
  }
  return options;
}

function extractBlock(content: string, index: number): string {
  const s = content.lastIndexOf("\n", index);
  const ms = regexIndexOf(content, /\n[<>\s]/, index);
  const me = regexIndexOf(content, /\n[^<>\t]/, ms);
  const e = content.lastIndexOf("\n", me);
  const block = content
    .substring(s, e)
    .replaceAll(/\*.+?\*/g, "") // Remove tags
    .replaceAll(/\s+\n/g, "\n") // Remove trailing '\s'
    .trim();
  return block;
}
