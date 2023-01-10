/**
 * A module to handle Vim's command arguments.
 *
 * @module
 */
import { Opts, parseOpts } from "./opts.ts";
import { Flags, parseFlags } from "./flags.ts";

/**
 * Parse string array to extract opts, flags.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { parse } from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
export function parse(args: string[]): [Opts, Flags, string[]] {
  const [opts, intermediate] = parseOpts(args);
  const [flags, residue] = parseFlags(intermediate);
  return [opts, flags, residue];
}

export * from "./opts.ts";
export * from "./flags.ts";
