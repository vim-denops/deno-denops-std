import type { Denops } from "@denops/core";
import { execute } from "../helper/execute.ts";
import type { AutocmdEvent, DefineOptions, RemoveOptions } from "./types.ts";
import { buildDefineExpr, buildRemoveExpr } from "./_utils.ts";

export type GroupDefineOptions = Omit<DefineOptions, "group">;
export type GroupRemoveOptions = Omit<RemoveOptions, "group">;

/**
 * Create an autocmd group and define/remove autocmds in that group.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { group } from "jsr:@denops/std/autocmd";
 *
 * export const main: Entrypoint = async (denops) => {
 *   await group(denops, "my-autocmd", (helper) => {
 *     // Define new autocmd for BufEnter
 *     helper.define("BufEnter", "*", "echo 'BufEnter'");
 *
 *     // Define new autocmd for BufEnter with '++once'
 *     helper.define("BufEnter", "*", "echo 'BufEnter'", {
 *       once: true,
 *     });
 *
 *     // Define new autocmd for BufEnter with '++nested'
 *     helper.define("BufEnter", "*", "echo 'BufEnter'", {
 *       nested: true,
 *     });
 *
 *     // Define multiple autocmds
 *     helper.define(["BufEnter", "WinEnter"], "*", "echo 'Enter'");
 *
 *     // Remove BufEnter autocmd
 *     helper.remove("BufEnter", "*");
 *
 *     // Remove any autocmd in buffer
 *     helper.remove("*", "<buffer>");
 *
 *     // Remove multiple autocmds
 *     helper.remove(["BufEnter", "WinEnter"], "*");
 *   });
 * }
 * ```
 *
 * This is preferable way to define autocmd while it define autocmds in an isolated
 * autocmd group and the number of RPC calls is minimized.
 */
export async function group(
  denops: Denops,
  name: string,
  executor: (helper: GroupHelper) => void,
): Promise<void> {
  const commands: string[] = [];
  const helper = new GroupHelper(commands);
  executor(helper);
  await execute(denops, [
    `aug ${name}`,
    ...commands,
    "aug END",
  ]);
}

class GroupHelper {
  #commands: string[];

  constructor(commands: string[]) {
    this.#commands = commands;
  }

  /**
   * Define an autocmd
   */
  define(
    event: AutocmdEvent | readonly AutocmdEvent[],
    pat: string | readonly string[],
    cmd: string,
    options: GroupDefineOptions = {},
  ): void {
    this.#commands.push(buildDefineExpr(event, pat, cmd, options));
  }

  /**
   * Remove an autocmd
   */
  remove(
    event?: "*" | AutocmdEvent | readonly AutocmdEvent[],
    pat?: string | readonly string[],
    options: GroupRemoveOptions = {},
  ): void {
    this.#commands.push(buildRemoveExpr(event, pat, options));
  }
}

export type { GroupHelper };
