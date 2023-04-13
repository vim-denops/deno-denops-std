import { Definition, Variant } from "./types.ts";
import { Counter, regexIndexOf } from "../utils.ts";

/**
 * Parse Vim/Neovim help.
 *
 * It extract a function definition block like below and return
 * a list of `Definition`.
 *
 * ```text
 * cursor({lnum}, {col} [, {off}])                    *cursor()*
 * cursor({list})
 * 		Positions the cursor at the column ...
 * 		line {lnum}.  The first column is one...
 * ```
 */
export function parse(content: string): Definition[] {
  // Remove modeline
  content = content.replace(/\n vim:[^\n]*\s*$/, "");

  const definitions: Definition[] = [];
  let last = -1;
  for (const match of content.matchAll(/\*(\w+?)\(\)\*/g)) {
    const fn = match[1];
    const index = match.index!;
    if (index < last) {
      // It is contained previous block
      continue;
    }
    const { block, start, end } = extractBlock(content, index);
    const definition = parseBlock(fn, block);
    if (definition) {
      definitions.push(definition);
      last = end;
    } else {
      const line = content.substring(0, start + 1).split("\n").length;
      console.error(
        `Failed to parse function definition for ${fn} at line ${line}`,
      );
    }
  }
  return definitions;
}

function extractBlock(content: string, index: number): {
  block: string;
  start: number;
  end: number;
} {
  const s = content.lastIndexOf("\n", index);
  const ms = regexIndexOf(content, /\n[<>\s]|$/, index);
  const me = regexIndexOf(content, /\n[^<>\s]|$/, ms);
  const e = content.lastIndexOf("\n", me);
  const block = content
    .substring(s, e)
    .replace(/\n<?(?:\s+\*\S+?\*)+\s*$/, "") // Remove next block tag
    .trimEnd();
  return { block, start: s, end: s + block.length };
}

/**
 * Parse function definition block.
 *
 * A function definition block is constrcuted with following parts
 *
 * ```text
 * cursor({lnum}, {col} [, {off}])                        <- variant
 * cursor({list})                                         <- variant
 * 		Positions the cursor at the column ...    <- document
 * 		line {lnum}.  The first column is one...  <- document
 * ```
 *
 * This function parse content like above and return `Definition`.
 */
function parseBlock(fn: string, body: string): Definition {
  // Remove tags
  body = body.replaceAll(/\*\S+?\*/g, "");
  // Remove trailing spaces
  body = body.split("\n").map((v) => v.trimEnd()).join("\n");

  // Remove '\n' in {variant} to make {variant} single line (ex. `searchpairpos`)
  body = body.replaceAll(new RegExp(`^(${fn}\\([^)]*?)\\n\\t*`, "gm"), "$1");
  // Append ')' for an invalid {variant}. (ex. `win_id2tabwin` in Neovim)
  body = body.replaceAll(new RegExp(`^(${fn}\\([^)]*?)\\t+`, "gm"), "$1)\t");
  // Insert '\n' between {variant} and {document} (ex. `argidx`)
  body = body.replaceAll(new RegExp(`^(${fn}\\(.*?\\))\\t`, "gm"), "$1\n\t\t");

  // Remove leading '>' or trailing '<' which is used to define code block in help
  body = body.replaceAll(/\n<|>\n/g, "\n");

  // Split body into vars/docs
  const vars: Variant[] = [];
  const docs: string[] = [];
  body.split("\n").forEach((line) => {
    if (/^\s/.test(line)) {
      docs.push(line.replace(/^\t\t/, ""));
    } else {
      const variant = parseVariant(line);
      if (variant) {
        vars.push(variant);
      }
    }
  });
  return {
    fn,
    docs: docs.join("\n"),
    vars,
  };
}

/**
 * Parse variant.
 *
 * A variant is constructed with following parts
 *
 * ```text
 *   fn            args
 * ~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~
 * cursor({lnum}, {col} [, {off}])
 *              |       |
 *              |       +- optional marker
 *              +- separator
 * ```
 *
 * This function parse content like above and return `Variant`.
 */
function parseVariant(variant: string): Variant | undefined {
  // Extract {args} part from {variant}
  const m = variant.match(new RegExp(`^\\w+\\(\(.+?\)\\)`));
  if (!m) {
    // The {variant} does not have {args}, probabliy it's not variant (ex. `strstr`)
    return undefined;
  }
  let optional = m[1].startsWith("[");
  const counter = new Counter();
  const args = m[1].split(",").map((t) => {
    const name = t.replaceAll(/[{}\[\]\s]/g, "");
    const spread = name.endsWith("...");
    const arg = {
      name: name.replace("...", "").replace(/^(\d+)$/, "v$1"),
      spread,
      optional,
    };
    if (t.endsWith("[")) {
      optional = true;
    }
    counter.count(name);
    return arg;
  }).filter((arg) => arg.name);
  const indexer = new Counter();
  const uniqueArgs = args.map(({ name, spread, optional }) => {
    if (counter.get(name) > 1) {
      const index = indexer.count(name);
      name = `${name}${index}`;
    }
    return { name, spread, optional };
  });
  return uniqueArgs;
}
