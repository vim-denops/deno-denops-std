import { parsePattern } from "./util.ts";

export type Opts = Record<string, string | undefined>;

/**
 * List of Vim builtin options (++opts)
 */
export const builtinOpts = [
  "ff",
  "fileformat",
  "enc",
  "encoding",
  "bin",
  "binary",
  "nobin",
  "nobinary",
  "bad",
  "edit",
];

const optPattern = /^\+\+([a-zA-Z0-9-]+)(?:=(.*))?/;

/**
 * Parse string array to extract opts (++opt).
 */
export function parseOpts(args: string[]): [Opts, string[]] {
  const opts: Opts = {};
  const residue: string[] = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--") {
      residue.push(...args.slice(i));
      break;
    }
    const r = parsePattern(arg, optPattern);
    if (r) {
      const [k, v] = r;
      if (k in opts) {
        throw new Error(
          `An option '++${k}' is specified more than twice in '${args}'`,
        );
      }
      opts[k] = v;
      continue;
    }
    residue.push(arg);
  }
  return [opts, residue];
}

/**
 * Validate if `opts` has unknown attributes.
 */
export function validateOpts(opts: Opts, knownAttributes: string[]): void {
  Object.keys(opts).forEach((v) => {
    if (!knownAttributes.includes(v)) {
      throw new Error(`Unknown option '++${v}' is specified.`);
    }
  });
}

/**
 * Format `key` and `value` to construct string array.
 */
export function formatOpt(key: string, value: string | undefined): string[] {
  if (value == undefined) {
    return [];
  }
  return value ? [`++${key}=${value}`] : [`++${key}`];
}

/**
 * Format `opts` to construct string array.
 */
export function formatOpts(opts: Opts, includes?: string[]): string[] {
  let entries = Object.entries(opts);
  if (includes != undefined) {
    entries = entries.filter(([k, _]) => includes.includes(k));
  }
  return entries.map(([k, v]) => formatOpt(k, v)).flat();
}
