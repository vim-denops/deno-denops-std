import { Denops } from "../vendor/https/deno.land/x/denops_core/mod.ts";

type VariableGroups = "g" | "b" | "w" | "t" | "v";

async function getVar<T = unknown>(
  denops: Denops,
  group: VariableGroups,
  prop: string,
  defaultValue?: T,
): Promise<T | null> {
  const result = await denops.eval(`get(${group}:, name, value)`, {
    name: prop,
    value: defaultValue ?? null,
  });
  // deno-lint-ignore no-explicit-any
  return result as any;
}

async function setVar<T = unknown>(
  denops: Denops,
  group: VariableGroups,
  prop: string,
  value: T,
): Promise<void> {
  const name = `${group}:${prop}`;
  await denops.cmd(`let ${name} = value`, {
    value,
  });
}

async function removeVar(
  denops: Denops,
  group: VariableGroups,
  prop: string,
): Promise<void> {
  if (group === "v") {
    throw new Error("A 'remove' is not supported for Vim variables");
  }
  const name = `${group}:${prop}`;
  await denops.cmd(`unlet ${name}`);
}

class VariableHelper {
  #group: VariableGroups;

  constructor(group: VariableGroups) {
    this.#group = group;
  }

  /**
   * Get variable
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getVar(denops, this.#group, prop, defaultValue);
  }

  /**
   * Set variable
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void> {
    return setVar(denops, this.#group, prop, value);
  }

  /**
   * Remove variable
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeVar(denops, this.#group, prop);
  }
}

/**
 * Global variables
 */
export const globals = new VariableHelper("g");
export const g = globals;

/**
 * Buffer local variables
 */
export const buffers = new VariableHelper("b");
export const b = buffers;

/**
 * Window local variables
 */
export const windows = new VariableHelper("w");
export const w = windows;

/**
 * Tabpage local variables
 */
export const tabpages = new VariableHelper("t");
export const t = tabpages;

/**
 * Vim variables
 */
export const vim = new VariableHelper("v");
export const v = vim;

export { VariableHelper };
