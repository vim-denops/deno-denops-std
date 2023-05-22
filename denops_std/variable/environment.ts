import type { Denops } from "https://deno.land/x/denops_core@v5.0.0/mod.ts";
import { Getter, Remover, Setter } from "./types.ts";

/**
 * Environment variables (`environment` or `e`)
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { environment } from "../variable/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Set environment variable
 *   await environment.set(denops, "DENOPS_HELLO", "world");
 *
 *   // Get environment variable
 *   console.log(await environment.get(denops, "DENOPS_HELLO"));
 *
 *   // Remove environment variable
 *   await environment.remove(denops, "DENOPS_HELLO");
 * }
 * ```
 */
export const environment: Getter & Setter & Remover = {
  /**
   * Get environment variable
   */
  async get<T = string>(
    denops: Denops,
    prop: string,
    defaultValue?: T,
  ): Promise<T | null> {
    const name = `\$${prop}`;
    const result = await denops.eval(`exists(n) ? ${name} : v`, {
      n: name,
      v: defaultValue ?? null,
    });
    // deno-lint-ignore no-explicit-any
    return result as any;
  },

  /**
   * Set environment variable
   */
  async set<T = string>(
    denops: Denops,
    prop: string,
    value: T,
  ): Promise<void> {
    const name = `\$${prop}`;
    await denops.cmd(`let ${name} = value`, {
      value,
    });
  },

  /**
   * Remove environment variable
   */
  async remove(
    denops: Denops,
    prop: string,
  ): Promise<void> {
    const name = `\$${prop}`;
    await denops.cmd(`unlet ${name}`);
  },
};
/** Shorthand for {@linkcode environment} */
export const e = environment;
