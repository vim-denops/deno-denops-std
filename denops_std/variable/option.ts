import type { Denops } from "https://deno.land/x/denops_core@v3.2.0/mod.ts";
import { Getter, Remover, Setter } from "./types.ts";

type OptionGroup = "" | "l" | "g";

async function getOption<T = unknown>(
  denops: Denops,
  group: OptionGroup,
  prop: string,
  defaultValue?: T,
): Promise<T | null> {
  const name = `&${group}${group ? ":" : ""}${prop}`;
  const result = await denops.eval(name) || defaultValue;
  // deno-lint-ignore no-explicit-any
  return (result as any) ?? null;
}

async function setOption<T = unknown>(
  denops: Denops,
  group: OptionGroup,
  prop: string,
  value: T,
): Promise<void> {
  const name = `&${group}${group ? ":" : ""}${prop}`;
  await denops.cmd(`let ${name} = value`, {
    value,
  });
}

async function removeOption(
  denops: Denops,
  group: OptionGroup,
  prop: string,
): Promise<void> {
  const cmd = `set${group}`;
  await denops.cmd(`${cmd} ${prop}&`);
}

/**
 * Options
 */
export const options: Getter & Setter & Remover = {
  /**
   * Get option
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getOption(denops, "", prop, defaultValue);
  },

  /**
   * Set option
   */
  set<T = unknown>(
    denops: Denops,
    prop: string,
    value: T,
  ): Promise<void> {
    return setOption(denops, "", prop, value);
  },

  /**
   * Reset option
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeOption(denops, "", prop);
  },
};
export const o = options;

/**
 * Local options
 */
export const localOptions: Getter & Setter & Remover = {
  /**
   * Get option
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getOption(denops, "l", prop, defaultValue);
  },

  /**
   * Set option
   */
  set<T = unknown>(
    denops: Denops,
    prop: string,
    value: T,
  ): Promise<void> {
    return setOption(denops, "l", prop, value);
  },

  /**
   * Reset option
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeOption(denops, "l", prop);
  },
};
export const lo = localOptions;

/**
 * Global options
 */
export const globalOptions: Getter & Setter & Remover = {
  /**
   * Get option
   */
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    return getOption(denops, "g", prop, defaultValue);
  },

  /**
   * Set option
   */
  set<T = unknown>(
    denops: Denops,
    prop: string,
    value: T,
  ): Promise<void> {
    return setOption(denops, "g", prop, value);
  },

  /**
   * Reset option
   */
  remove(denops: Denops, prop: string): Promise<void> {
    return removeOption(denops, "g", prop);
  },
};
export const go = globalOptions;
