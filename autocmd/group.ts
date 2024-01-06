import type { Denops } from "https://deno.land/x/denops_core@v6.0.2/mod.ts";
import { execute } from "../helper/execute.ts";
import { AutocmdEvent, DefineOptions, RemoveOptions } from "./types.ts";
import { buildDefineExpr, buildRemoveExpr } from "./utils.ts";

export type GroupDefineOptions = Omit<DefineOptions, "group">;
export type GroupRemoveOptions = Omit<RemoveOptions, "group">;

/**
 * Create an autocmd group and define/remove autocmds in that group.
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { group } from "./group.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
    event: AutocmdEvent | AutocmdEvent[],
    pat: string | string[],
    cmd: string,
    options: GroupDefineOptions = {},
  ): void {
    this.#commands.push(buildDefineExpr(event, pat, cmd, options));
  }

  /**
   * Remove an autocmd
   */
  remove(
    event?: "*" | AutocmdEvent | AutocmdEvent[],
    pat?: string | string[],
    options: GroupRemoveOptions = {},
  ): void {
    this.#commands.push(buildRemoveExpr(event, pat, options));
  }
}

export type { GroupHelper };
