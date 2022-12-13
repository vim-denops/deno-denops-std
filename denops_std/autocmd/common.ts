import { Denops } from "https://deno.land/x/denops_core@v3.3.0/mod.ts";
import { AutocmdEvent } from "./types.ts";

type CommonOptions = {
  group?: string;
};

export type DefineOptions = CommonOptions & {
  once?: boolean;
  nested?: boolean;
};

export type RemoveOptions = CommonOptions;

export type ListOptions = CommonOptions;

export type EmitOptions = CommonOptions & {
  nomodeline?: boolean;
};

export async function define(
  denops: Denops,
  event: AutocmdEvent | AutocmdEvent[],
  pat: string | string[],
  cmd: string,
  options: DefineOptions = {},
): Promise<void> {
  const expr = buildDefineExpr(event, pat, cmd, options);
  await denops.cmd(expr);
}

export async function remove(
  denops: Denops,
  event?: "*" | AutocmdEvent | AutocmdEvent[],
  pat?: string | string[],
  options: RemoveOptions = {},
): Promise<void> {
  const expr = buildRemoveExpr(event, pat, options);
  await denops.cmd(expr);
}

export async function list(
  denops: Denops,
  event?: "*" | AutocmdEvent | AutocmdEvent[],
  pat?: string | string[],
  options: ListOptions = {},
): Promise<unknown> {
  const terms = ["au"];
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
  const expr = terms.join(" ");
  return await denops.call("execute", expr);
}

export async function emit(
  denops: Denops,
  event: AutocmdEvent | AutocmdEvent[],
  fname?: string,
  options: EmitOptions = {},
): Promise<unknown> {
  const terms = ["do"];
  if (options.nomodeline) {
    terms.push("<nomodeline>");
  }
  if (options.group) {
    terms.push(options.group);
  }
  if (Array.isArray(event)) {
    terms.push(event.join(","));
  } else {
    terms.push(event);
  }
  if (fname) {
    terms.push(fname);
  }
  const expr = terms.join(" ");
  return await denops.cmd(expr);
}

export async function emitAll(
  denops: Denops,
  event: AutocmdEvent | AutocmdEvent[],
  fname?: string,
  options: EmitOptions = {},
): Promise<unknown> {
  const terms = ["doautoa"];
  if (options.nomodeline) {
    terms.push("<nomodeline>");
  }
  if (options.group) {
    terms.push(options.group);
  }
  if (Array.isArray(event)) {
    terms.push(event.join(","));
  } else {
    terms.push(event);
  }
  if (fname) {
    terms.push(fname);
  }
  const expr = terms.join(" ");
  return await denops.cmd(expr);
}

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
