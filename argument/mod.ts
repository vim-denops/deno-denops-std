/**
 * A module to handle Vim's command arguments like the followings.
 *
 * ```
 * :MyCommand ++enc=sjis ++ff=dos -f --foo=foo --bar=bar --bar=baz hello world
 * ```
 *
 * Developers should utilize `[<f-args>]` in Vim script to acquire the arguments
 * as a string array, adhering to the standard Vim command behavior.
 *
 * For example:
 *
 * ```
 * command! -nargs=* MyCommand call denops#request("myplugin", "test", [[<f-args>]])
 * ```
 *
 * Then, developers can use this module to parse, validate, or format the arguments.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import {
 *   builtinOpts,
 *   formatFlags,
 *   formatOpts,
 *   parse,
 *   validateFlags,
 *   validateOpts,
 * } from "jsr:@denops/std/argument";
 *
 * export const main: Entrypoint = async (denops) => {
 *   denops.dispatcher = {
 *     test(args: unknown) {
 *       // Parse string array to extract `opts`, `flags`.
 *       const [opts, flags, residues] = parse(args as string[]);
 *
 *       console.log(opts);
 *       // { "enc": "sjis", "ff": "dos" }
 *       console.log(flags);
 *       // { "f": "", "foo": "foo", "bar": ["bar", "baz"] }
 *       console.log(residues);
 *       // ["hello", "world"]
 *
 *       // Validate if `opts` has unknown options
 *       validateOpts(opts, ["enc", "ff"]);
 *
 *       // Or use `builtinOpts` to validate Vim's builtin `++opts`
 *       validateOpts(opts, builtinOpts);
 *
 *       // Validate if `flags` has unknown flags
 *       validateFlags(flags, ["f", "foo", "bar"]);
 *
 *       // Reformat `opts` to string
 *       console.log(formatOpts(opts));
 *       // "++enc=sjis ++ff=dos"
 *
 *       // Reformat `flags` to string
 *       console.log(formatFlags(flags));
 *       // "-f --foo=foo --bar=bar --bar=baz"
 *     },
 *   };
 * }
 * ```
 *
 * @module
 */
import { type Opts, parseOpts } from "./opts.ts";
import { type Flags, parseFlags } from "./flags.ts";

/**
 * Parse string array to extract opts, flags.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { parse } from "jsr:@denops/std/argument";
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
 *   const [opts, flags, residues] = parse(args);
 *
 *   console.log(opts);
 *   // { "enc": "sjis", "ff": "dos" }
 *
 *   console.log(flags);
 *   // { "f": "", "foo": "foo", "bar": ["bar", "baz"] }
 *
 *   console.log(residues);
 *   // ["hello", "world"]
 * }
 * ```
 */
export function parse(args: readonly string[]): [Opts, Flags, string[]] {
  const [opts, intermediate] = parseOpts(args);
  const [flags, residue] = parseFlags(intermediate);
  return [opts, flags, residue];
}

export * from "./opts.ts";
export * from "./flags.ts";
