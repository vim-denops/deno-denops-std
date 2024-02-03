/**
 * A module to provide accessors of Neovim native options.
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as nvimOp from "https://deno.land/x/denops_std@$MODULE_VERSION/option/nvim/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // nvimOp has options only exist in Neovim
 *   console.log(await nvimOp.shada.get(denops));
 * }
 * ```
 *
 * @module
 */
// NOTE:
// Do NOT add modules manually to this file.
// Add modules to `_manual.ts` instead for manually written modules.
export * from "./_manual.ts";
export * from "./_generated.ts";
