import type { AutocmdEvent, DefineOptions, RemoveOptions } from "./types.ts";

export function buildDefineExpr(
  event: AutocmdEvent | readonly AutocmdEvent[],
  pat: string | readonly string[],
  cmd: string,
  options: DefineOptions = {},
): string {
  const terms = ["au"];
  if (options.group) {
    terms.push(options.group);
  }
  if (Array.isArray(event)) {
    terms.push(event.join(","));
  } else {
    terms.push(event as AutocmdEvent);
  }
  if (Array.isArray(pat)) {
    terms.push(pat.join(","));
  } else {
    terms.push(pat as string);
  }
  if (options.once) {
    terms.push("++once");
  }
  if (options.nested) {
    terms.push("++nested");
  }
  terms.push(cmd);
  return terms.join(" ");
}

export function buildRemoveExpr(
  event?: "*" | AutocmdEvent | readonly AutocmdEvent[],
  pat?: string | readonly string[],
  options: RemoveOptions = {},
): string {
  const terms = ["au!"];
  if (options.group) {
    terms.push(options.group);
  }
  if (event) {
    if (Array.isArray(event)) {
      terms.push(event.join(","));
    } else {
      terms.push(event as AutocmdEvent);
    }
    if (pat) {
      if (Array.isArray(pat)) {
        terms.push(pat.join(","));
      } else {
        terms.push(pat as string);
      }
    }
  }
  return terms.join(" ");
}
