import type { Denops } from "https://deno.land/x/denops_core@v3.3.0/mod.ts";
import { Getter, Remover, Setter } from "./types.ts";

type VariableGroup = "g" | "b" | "w" | "t" | "v";

async function getVar<T = unknown>(
  denops: Denops,
  group: VariableGroup,
  prop: string,
  defaultValue?: T,
): Promise<T | null> {
  const name = `${group}:${prop}`;
  const result = await denops.eval(`exists(n) ? ${name} : v`, {
    n: name,
    v: defaultValue ?? null,
  });
  // deno-lint-ignore no-explicit-any
  return result as any;
}

async function setVar<T = unknown>(
  denops: Denops,
  group: VariableGroup,
  prop: string,
  value: T,
): Promise<void> {
  const name = `${group}:${prop}`;
  await denops.cmd(`let ${name} = v`, {
    v: value,
  });
}

async function removeVar(
  denops: Denops,
  group: VariableGroup,
  prop: string,
): Promise<void> {
  const name = `${group}:${prop}`;
  await denops.cmd(`unlet ${name}`);
}

/**
 * Global variables
 */
export const globals: Getter & Setter & Remover = {
  /**
   * Get variable
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getVar(denops, "g", prop, defaultValue);
  },

  /**
   * Set variable
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void> {
    return setVar(denops, "g", prop, value);
  },

  /**
   * Remove variable
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeVar(denops, "g", prop);
  },
};
export const g = globals;

/**
 * Buffer local variables
 */
export const buffers: Getter & Setter & Remover = {
  /**
   * Get variable
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getVar(denops, "b", prop, defaultValue);
  },

  /**
   * Set variable
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void> {
    return setVar(denops, "b", prop, value);
  },

  /**
   * Remove variable
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeVar(denops, "b", prop);
  },
};
export const b = buffers;

/**
 * Window local variables
 */
export const windows: Getter & Setter & Remover = {
  /**
   * Get variable
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getVar(denops, "w", prop, defaultValue);
  },

  /**
   * Set variable
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void> {
    return setVar(denops, "w", prop, value);
  },

  /**
   * Remove variable
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeVar(denops, "w", prop);
  },
};
export const w = windows;

/**
 * Tabpage local variables
 */
export const tabpages: Getter & Setter & Remover = {
  /**
   * Get variable
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getVar(denops, "t", prop, defaultValue);
  },

  /**
   * Set variable
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void> {
    return setVar(denops, "t", prop, value);
  },

  /**
   * Remove variable
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeVar(denops, "t", prop);
  },
};
export const t = tabpages;

/**
 * Vim variables
 */
export const vim: Getter & Setter = {
  /**
   * Get variable
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getVar(denops, "v", prop, defaultValue);
  },

  /**
   * Set variable
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void> {
    return setVar(denops, "v", prop, value);
  },
};
export const v = vim;
