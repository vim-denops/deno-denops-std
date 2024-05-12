/**
 * A module to provide accessors of Vim native options.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as vimOp from "jsr:@denops/std/option/vim";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // vimOp has options only exist in Vim
 *   console.log(await vimOp.compatible.get(denops));
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
