import type { AutocmdEvent, DefineOptions, RemoveOptions } from "./types.ts";

export function buildDefineExpr(
  event: AutocmdEvent | AutocmdEvent[],
  pat: string | string[],
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
    terms.push(event);
  }
  if (Array.isArray(pat)) {
    terms.push(pat.join(","));
  } else {
    terms.push(pat);
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
  event?: "*" | AutocmdEvent | AutocmdEvent[],
  pat?: string | string[],
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
      terms.push(event);
    }
    if (pat) {
      if (Array.isArray(pat)) {
        terms.push(pat.join(","));
      } else {
        terms.push(pat);
      }
    }
  }
  return terms.join(" ");
}
