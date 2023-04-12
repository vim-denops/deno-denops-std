import { Definition, Variant } from "./types.ts";
import { createMarkdownFromHelp } from "../markdown.ts";
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
 * cursor({lnum}, {col} [, {off}])                        <- variant[0]
 * cursor({list})                                         <- variant[1]
 * 		Positions the cursor at the column ...    <- document
 * 		line {lnum}.  The first column is one...  <- document
 * ```
 *
 * {variant} may be two lines.
 *
 * ```text
 * searchpairpos({start}, {middle}, {end} [, {flags} [, {skip}
 * 				[, {stopline} [, {timeout}]]]])
 * 		Same as |searchpair()|, but returns a ...
 * ```
 *
 * {document} may start on the same line as {variant}.
 *
 * ```text
 * argidx()	The result is the current index in the ...
 * 		the first file.  argc() - 1 is the last...
 * ```
 *
 * This function parse content like above and return `Definition`.
 */
function parseBlock(fn: string, body: string): Definition | undefined {
  // Separate vars/docs blocks
  const reTags = /(?:[ \t]+\*[^*\s]+\*)+[ \t]*$/.source;
  const reArgs = /\([^()]*(?:\n[ \t][^()]*)?\)/.source;
  const reVariant = `^${fn}${reArgs}(?:${reTags})?`;
  const reVariants = `^(?:${reVariant}\\n)*${reVariant}`;
  const reVarsDocs = `(?<vars>${reVariants})(?<docs>.*)`;
  const m1 = body.match(new RegExp(reVarsDocs, "ms"));
  if (!m1) {
    return;
  }

  // Extract vars block
  const varsBlock = m1.groups!.vars
    // Remove tags after {variant} (ex. `cursor()`)
    .replaceAll(new RegExp(reTags, "gm"), "")
    // Make {variant} to single line (ex. `searchpairpos()`)
    .replaceAll(/\n[ \t]+/g, "");

  // Extract docs block
  const docsBlock = m1.groups!.docs
    // Restore indent that {document} continues on {variant} line (ex. `argidx`)
    .replace(
      /^(?=[ \t]+\S)/,
      () => varsBlock.split("\n").at(-1)!.replaceAll(/[^\t]/g, " "),
    );

  const vars = varsBlock.split("\n")
    .map(parseVariant)
    .filter(<T>(x: T): x is NonNullable<T> => !!x);
  const docs = createMarkdownFromHelp(docsBlock);

  return { fn, docs, vars };
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
  const m = variant.match(/^\w+\((.+?)\)/);
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
