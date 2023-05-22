import type { Denops } from "https://deno.land/x/denops_core@v5.0.0/mod.ts";
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
 * Global variables (`globals` or `g`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { globals } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set global variable
 *   await globals.set(denops, "hello", "world");
 *
 *   // Get global variable
 *   console.log(await globals.get(denops, "hello"));
 *
 *   // Remove global variable
 *   await globals.remove(denops, "hello");
 * }
 * ```
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
/** Shorthand for {@linkcode globals} */
export const g = globals;

/**
 * Buffer local variables (`buffers` or `b`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { buffers } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set buffer variable
 *   await buffers.set(denops, "hello", "world");
 *
 *   // Get buffer variable
 *   console.log(await buffers.get(denops, "hello"));
 *
 *   // Remove buffer variable
 *   await buffers.remove(denops, "hello");
 * }
 * ```
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
/** Shorthand for {@linkcode buffers} */
export const b = buffers;

/**
 * Window local variables (`windows` or `w`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { windows } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set window variable
 *   await windows.set(denops, "hello", "world");
 *
 *   // Get window variable
 *   console.log(await windows.get(denops, "hello"));
 *
 *   // Remove window variable
 *   await windows.remove(denops, "hello");
 * }
 * ```
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
/** Shorthand for {@linkcode windows} */
export const w = windows;

/**
 * Tabpage local variables (`tabpages` or `t`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { tabpages } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set tabpage variable
 *   await tabpages.set(denops, "hello", "world");
 *
 *   // Get tabpage variable
 *   console.log(await tabpages.get(denops, "hello"));
 *
 *   // Remove tabpage variable
 *   await tabpages.remove(denops, "hello");
 * }
 * ```
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
/** Shorthand for {@linkcode tabpages} */
export const t = tabpages;

/**
 * Vim variables (`vim` or `v`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { vim } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set vim variable
 *   await vim.set(denops, "version", "world");
 *
 *   // Get vim variable
 *   console.log(await vim.get(denops, "version"));
 * }
 * ```
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
/** Shorthand for {@linkcode vim} */
export const v = vim;
