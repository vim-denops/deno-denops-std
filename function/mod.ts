/**
 * A module to provide functions of Vim and Neovim native functions.
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as fn from "https://deno.land/x/denops_std@$MODULE_VERSION/function/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // fn holds functions exists in both Vim and Neovim
 *   console.log(fn.or(denops, 0, 1));
 * }
 * ```
 *
 * See [`vim/mod.ts`](./vim/mod.ts) or [`nvim/mod.ts`](nvim/mod.ts) if you need Vim or Neovim specific functions.
 *
 * @module
 */
// NOTE:
// Do NOT add modules manually to this file.
// Add modules to `_manual.ts` instead for manually written modules.
export * from "./_manual.ts";
export * from "./_generated.ts";
