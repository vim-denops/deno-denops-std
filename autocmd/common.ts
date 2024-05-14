import type { Denops } from "../mod.ts";
import {
  AutocmdEvent,
  DefineOptions,
  EmitOptions,
  ListOptions,
  RemoveOptions,
} from "./types.ts";
import { buildDefineExpr, buildRemoveExpr } from "./_utils.ts";

/**
 * Define an autocmd
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as autocmd from "https://deno.land/x/denops_std@$MODULE_VERSION/autocmd/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Define new autocmd for BufEnter
 *   await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'");
 *
 *   // Define new autocmd for BufEnter in 'MyGroup'
 *   await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'", {
 *     group: "MyGroup",
 *   });
 *
 *   // Define new autocmd for BufEnter with '++once'
 *   await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'", {
 *     once: true,
 *   });
 *
 *   // Define new autocmd for BufEnter with '++nested'
 *   await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'", {
 *     nested: true,
 *   });
 *
 *   // Define multiple autocmds
 *   await autocmd.define(denops, ["BufEnter", "WinEnter"], "*", "echo 'Enter'");
 * }
 * ```
 */
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

/**
 * Remove an autocmd
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as autocmd from "https://deno.land/x/denops_std@$MODULE_VERSION/autocmd/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Remove BufEnter autocmd
 *   await autocmd.remove(denops, "BufEnter", "*");
 *
 *   // Remove any autocmd in buffer
 *   await autocmd.remove(denops, "*", "<buffer>");
 *
 *   // Remove BufEnter autocmd in 'MyGroup'
 *   await autocmd.remove(denops, "BufEnter", "*", {
 *     group: "MyGroup",
 *   });
 *
 *   // Remove multiple autocmds
 *   await autocmd.remove(denops, ["BufEnter", "WinEnter"], "*");
 * }
 * ```
 */
export async function remove(
  denops: Denops,
  event?: "*" | AutocmdEvent | AutocmdEvent[],
  pat?: string | string[],
  options: RemoveOptions = {},
): Promise<void> {
  const expr = buildRemoveExpr(event, pat, options);
  await denops.cmd(expr);
}

/**
 * List defined autocmds
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as autocmd from "https://deno.land/x/denops_std@$MODULE_VERSION/autocmd/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // List all autocmd
 *   console.log(await autocmd.list(denops));
 *
 *   // List all BufEnter autocmd
 *   console.log(await autocmd.list(denops, "BufEnter"));
 *
 *   // List all BufEnter autocmd in buffer
 *   console.log(await autocmd.list(denops, "BufEnter", "<buffer>"));
 *
 *   // List multiple autocmds
 *   console.log(await autocmd.list(denops, ["BufEnter", "WinEnter"]));
 * }
 * ```
 */
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
  return await denops.call("execute", `0verbose ${expr}`);
}

/**
 * Emit an autocmd in a buffer
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as autocmd from "https://deno.land/x/denops_std@$MODULE_VERSION/autocmd/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Emit an autocmd in a current buffer
 *   await autocmd.emit(denops, "BufEnter");
 *
 *   // Emit multiple autocmds in a current buffer
 *   await autocmd.emit(denops, ["BufEnter", "WinEnter"]);
 *
 *   // Emit an autocmd in a buffer 'Hello'
 *   await autocmd.emit(denops, "BufEnter", "Hello");
 * }
 * ```
 */
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

/**
 * Emit an autocmd in all buffers
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as autocmd from "https://deno.land/x/denops_std@$MODULE_VERSION/autocmd/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Emit an autocmd in all buffers
 *   await autocmd.emitAll(denops, "BufEnter");
 *
 *   // Emit multiple autocmds in all buffers
 *   await autocmd.emitAll(denops, ["BufEnter", "WinEnter"]);
 *
 *   // Emit an autocmd in all buffers match with 'Hello'
 *   await autocmd.emitAll(denops, "BufEnter", "Hello");
 * }
 * ```
 */
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
