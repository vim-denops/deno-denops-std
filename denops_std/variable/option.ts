import type { Denops } from "https://deno.land/x/denops_core@v3.4.2/mod.ts";
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
 * Options (`options` or `o`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { options } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set option
 *   await options.set(denops, "filetype", "world");
 *
 *   // Get option
 *   console.log(await options.get(denops, "filetype"));
 *
 *   // Reset option
 *   await options.remove(denops, "filetype");
 * }
 * ```
 *
 * Note that `options.get()` returns `defaultValue` when the option is falsy.
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
 * Local options (`localOptions` or `lo`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { localOptions } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set option
 *   await localOptions.set(denops, "filetype", "world");
 *
 *   // Get option
 *   console.log(await localOptions.get(denops, "filetype"));
 *
 *   // Reset option
 *   await localOptions.remove(denops, "filetype");
 * }
 * ```
 *
 * Note that `localOptions.get()` returns `defaultValue` when the option is falsy.
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
 * Global options (`globalOptions` or `go`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { globalOptions } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set option
 *   await globalOptions.set(denops, "filetype", "world");
 *
 *   // Get option
 *   console.log(await globalOptions.get(denops, "filetype"));
 *
 *   // Reset option
 *   await globalOptions.remove(denops, "filetype");
 * }
 * ```
 *
 * Note that `globalOption.get()` returns `defaultValue` when the option is falsy.
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
