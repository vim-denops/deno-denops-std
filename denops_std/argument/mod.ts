import { Opts, parseOpts } from "./opts.ts";
import { Flags, parseFlags } from "./flags.ts";

export function parse(args: string[]): [Opts, Flags, string[]] {
  const [opts, intermediate] = parseOpts(args);
  const [flags, residue] = parseFlags(intermediate);
  return [opts, flags, residue];
}

export * from "./opts.ts";
export * from "./flags.ts";
