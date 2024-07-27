/**
 * A module to provide accessors of Neovim native options.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as nvimOp from "jsr:@denops/std/option/nvim";
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
