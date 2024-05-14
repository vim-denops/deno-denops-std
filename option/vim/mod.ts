/**
 * A module to provide accessors of Vim native options.
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as vimOp from "https://deno.land/x/denops_std@$MODULE_VERSION/option/vim/mod.ts";
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
