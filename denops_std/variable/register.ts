import type { Denops } from "https://deno.land/x/denops_core@v3.0.2/mod.ts";
import { Getter, Setter } from "./types.ts";

/**
 * Register
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
export const r = register;
