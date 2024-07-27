import type { Mapping, Mode } from "./types.ts";

/**
 * Parse record displayed by Vim's `map` command and return a `Mapping` instance.
 */
export function parse(record: string): Mapping {
  const m = record.match(/^(...)(\S+)\s+(.*)$/);
  if (!m) {
    throw new Error(`Failed to parse a mapping record '${record}'`);
  }
  const mode = m[1].trim();
  const lhs = m[2];
  const mm = m[3].match(/([\*&@ ]+)(.*)/);
  const rhs = mm ? mm[2] : m[3];
  const special = mm ? mm[1].trim() : "";
  return {
    mode: mode as Mode,
    lhs,
    rhs,
    noremap: special.indexOf("*") !== -1,
    script: special.indexOf("&") !== -1,
    buffer: special.indexOf("@") !== -1,
  };
}
