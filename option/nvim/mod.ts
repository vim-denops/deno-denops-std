/**
 * A module to provide accessors of Neovim native options.
 *
 * ```typescript
 * import { Denops } from "../../mod.ts";
 * import * as nvimOp from "../../option/nvim/mod.ts";
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
