import { parsePattern } from "./_util.ts";

export type Flags = Record<string, string | string[] | undefined>;

const longPattern = /^--([a-zA-Z0-9-]+)(?:=(.*))?/;
const shortPattern = /^-([a-zA-Z0-9])(.*)/;

/**
 * Parse string array to extract flags (-f/--flag).
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { parseFlags } from "jsr:@denops/std/argument";
 *
 * export const main: Entrypoint = async (denops) => {
 *   const args = [
 *     "++enc=sjis",
 *     "++ff=dos",
 *     "-f",
 *     "--foo=foo",
 *     "--bar=bar",
 *     "--bar=baz",
 *     "hello",
 *     "world",
 *   ];
 *   const [flags, residues] = parseFlags(args);
 *
 *   console.log(flags);
 *   // { "f": "", "foo": "foo", "bar": ["bar", "baz"] }
 *
 *   console.log(residues);
 *   // ["++enc=sjis", "++ff=dos", "hello", "world"]
 * }
 * ```
 */
export function parseFlags(args: readonly string[]): [Flags, string[]] {
  const patterns = [longPattern, shortPattern];
  const flags: Flags = {};
  const residue: string[] = [];
  loop:
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--") {
      residue.push(...args.slice(i));
      break;
    }
    for (const pattern of patterns) {
      const r = parsePattern(arg, pattern);
      if (r) {
        const [k, v] = r;
        const b = flags[k];
        if (b != undefined) {
          flags[k] = Array.isArray(b) ? [...b, v] : [b, v];
        } else {
          flags[k] = v;
        }
        continue loop;
      }
    }
    residue.push(arg);
  }
  return [flags, residue];
}

/**
 * Validate if `flags` has unknown attributes.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { parse, validateFlags } from "jsr:@denops/std/argument";
 *
 * export const main: Entrypoint = async (denops) => {
 *   const args = [
 *     "++enc=sjis",
 *     "++ff=dos",
 *     "-f",
 *     "--foo=foo",
 *     "--bar=bar",
 *     "--bar=baz",
 *     "hello",
 *     "world",
 *   ];
 *   const [_opts, flags, _residues] = parse(args);
 *
 *   validateFlags(flags, ["f", "foo", "bar"]);
 * }
 * ```
 */
export function validateFlags(
  flags: Flags,
  knownAttributes: readonly string[],
): void {
  Object.keys(flags).forEach((v) => {
    if (!knownAttributes.includes(v)) {
      if (v.length === 1) {
        throw new Error(`Unknown flag '-${v}' is specified.`);
      } else {
        throw new Error(`Unknown flag '--${v}' is specified.`);
      }
    }
  });
}

/**
 * Format `key` and `value` to construct string array.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { formatFlag } from "jsr:@denops/std/argument";
 *
 * export const main: Entrypoint = async (denops) => {
 *   console.log(formatFlag("f", ""));
 *   // "-f"
 *
 *   console.log(formatFlag("foo", "value"));
 *   // "--foo=value"
 * }
 * ```
 */
export function formatFlag(
  key: string,
  value: string | readonly string[] | undefined,
): string[] {
  if (value == undefined) {
    return [];
  }
  value = Array.isArray(value) ? value : [value];
  if (key.length === 1) {
    return value.map((v) => v ? `-${key}${v}` : `-${key}`);
  } else {
    return value.map((v) => v ? `--${key}=${v}` : `--${key}`);
  }
}

/**
 * Format `flags` to construct string array.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { formatFlags, parse } from "jsr:@denops/std/argument";
 *
 * export const main: Entrypoint = async (denops) => {
 *   const args = [
 *     "++enc=sjis",
 *     "++ff=dos",
 *     "-f",
 *     "--foo=foo",
 *     "--bar=bar",
 *     "--bar=baz",
 *     "hello",
 *     "world",
 *   ];
 *   const [_opts, flags, _residues] = parse(args);
 *
 *   console.log(formatFlags(flags));
 *   // "-f --foo=foo --bar=bar --bar=baz"
 * }
 * ```
 */
export function formatFlags(
  flags: Flags,
  includes?: readonly string[],
): string[] {
  let entries = Object.entries(flags);
  if (includes != undefined) {
    entries = entries.filter(([k, _]) => includes.includes(k));
  }
  return entries.map(([k, v]) => formatFlag(k, v)).flat();
}
