import type { Denops } from "https://deno.land/x/denops_core@v3.4.1/mod.ts";
import { execute } from "../helper/execute.ts";
import { AutocmdEvent } from "./types.ts";
import {
  buildDefineExpr,
  buildRemoveExpr,
  DefineOptions,
  RemoveOptions,
} from "./common.ts";

export type GroupDefineOptions = Omit<DefineOptions, "group">;
export type GroupRemoveOptions = Omit<RemoveOptions, "group">;

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

  define(
    event: AutocmdEvent | AutocmdEvent[],
    pat: string | string[],
    cmd: string,
    options: GroupDefineOptions = {},
  ): void {
    this.#commands.push(buildDefineExpr(event, pat, cmd, options));
  }

  remove(
    event?: "*" | AutocmdEvent | AutocmdEvent[],
    pat?: string | string[],
    options: GroupRemoveOptions = {},
  ): void {
    this.#commands.push(buildRemoveExpr(event, pat, options));
  }
}

export type { GroupHelper };
