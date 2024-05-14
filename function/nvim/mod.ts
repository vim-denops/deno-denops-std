/**
 * A module to provide functions of Neovim native functions.
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as nvimFn from "https://deno.land/x/denops_std@$MODULE_VERSION/function/nvim/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // nvimFn holds functions exists only in Neovim
 *   console.log(nvimFn.api_info(denops));
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
