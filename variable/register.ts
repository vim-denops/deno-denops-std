import type { Denops } from "@denops/core";
import type { Getter, Setter } from "./types.ts";

/**
 * Register (`register` or `r`)
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { register } from "jsr:@denops/std/variable";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Set register
 *   await register.set(denops, "a", "world");
 *
 *   // Get register
 *   console.log(await register.get(denops, "a"));
 * }
 * ```
 *
 * Note that `register.get()` returns `defaultValue` when the register is falsy.
 */
export const register: Getter & Setter = {
  /**
   * Get register value
   */
  async get<T = string>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    if (prop.length >= 2) {
      throw new Error(
        "The 'prop' must be a single character which indicates register",
      );
    }
    const name = `@${prop}`;
    const result = await denops.eval(name) || defaultValue;
    // deno-lint-ignore no-explicit-any
    return result as any ?? null;
  },

  /**
   * Set register value
   */
  async set<T = string>(
    denops: Denops,
    prop: string,
    value: T,
  ): Promise<void> {
    if (prop.length >= 2) {
      throw new Error(
        "The 'prop' must be a single character which indicates register",
      );
    }
    const name = `@${prop}`;
    await denops.cmd(`let ${name} = value`, {
      value,
    });
  },
};
/** Shorthand for {@linkcode register} */
export const r = register;
