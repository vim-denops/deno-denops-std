/**
 * A module to provide functions of Vim native functions.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as vimFn from "jsr:@denops/std/function/vim";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // vimFn holds functions exists only in Vim
 *   console.log(vimFn.balloon_gettext(denops));
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
