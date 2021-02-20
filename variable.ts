import { Denops } from "./deps.ts";

/**
 * Vim variable groups
 *
 * g - Global variables
 * b - Buffer local variables
 * w - Window local variables
 * t - Tab page local variables
 * v - Vim's variables
 * env - Environment variables
 *
 */
export type VariableGroups = "g" | "b" | "w" | "t" | "v" | "env";

export async function getVar<T = unknown>(
  denops: Denops,
  group: VariableGroups,
  prop: string,
): Promise<T> {
  const name = group === "env" ? `\$${prop}` : `${group}:${prop}`;
  // deno-lint-ignore no-explicit-any
  return (await denops.eval(name)) as any;
}

export async function setVar<T = unknown>(
  denops: Denops,
  group: VariableGroups,
  prop: string,
  value: T,
): Promise<void> {
  const name = group === "env" ? `\$${prop}` : `${group}:${prop}`;
  await denops.cmd(`let ${name} = value`, {
    value,
  });
}

export async function removeVar(
  denops: Denops,
  group: VariableGroups,
  prop: string,
): Promise<void> {
  const name = group === "env" ? `\$${prop}` : `${group}:${prop}`;
  await denops.cmd(`unlet ${name}`);
}

export class VariableHelper {
  #denops: Denops;
  #group: VariableGroups;

  constructor(denops: Denops, group: VariableGroups) {
    this.#denops = denops;
    this.#group = group;
  }

  async get<T = unknown>(prop: string): Promise<T> {
    return await getVar(this.#denops, this.#group, prop);
  }

  async set<T = unknown>(prop: string, value: T): Promise<void> {
    await setVar(this.#denops, this.#group, prop, value);
  }

  async remove(prop: string): Promise<void> {
    await removeVar(this.#denops, this.#group, prop);
  }
}
