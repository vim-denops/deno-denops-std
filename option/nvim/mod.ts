/**
 * A module to provide accessors of Neovim native options.
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as nvimOp from "https://deno.land/x/denops_std@$MODULE_VERSION/option/nvim/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
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
