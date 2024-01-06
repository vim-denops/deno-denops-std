import { Denops } from "https://deno.land/x/denops_core@v6.0.5/mod.ts";
import {
  AutocmdEvent,
  DefineOptions,
  EmitOptions,
  ListOptions,
  RemoveOptions,
} from "./types.ts";
import { buildDefineExpr, buildRemoveExpr } from "./utils.ts";

/**
 * Define an autocmd
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as autocmd from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
 * import { Denops } from "../mod.ts";
 * import * as autocmd from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
 * import { Denops } from "../mod.ts";
 * import * as autocmd from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
  return await denops.call("execute", expr);
}

/**
 * Emit an autocmd in a buffer
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as autocmd from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
 * import { Denops } from "../mod.ts";
 * import * as autocmd from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
