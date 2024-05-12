/**
 * A module to provide functions of Vim and Neovim native functions.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
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
