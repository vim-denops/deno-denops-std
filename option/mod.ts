/**
 * A module to provide accessors of Vim and Neovim native options.
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as op from "https://deno.land/x/denops_std@$MODULE_VERSION/option/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Get value of the option.
 *   // `get` is available on any options
 *   // `getGlobal` is available on only global options
 *   // `getLocal` is available on only local options
 *   console.log(await op.autoread.get(denops));
 *   console.log(await op.autoread.getGlobal(denops));
 *   console.log(await op.autoread.getLocal(denops));
 *
 *   // Set value of the option.
 *   // `set` is available on any options
 *   // `setGlobal` is available on only global options
 *   // `setLocal` is available on only local options
 *   await op.autoread.set(denops, true);
 *   await op.autoread.setGlobal(denops, true);
 *   await op.autoread.setLocal(denops, true);
 *
 *   // Reset the option.
 *   // `reset` is available on any options
 *   // `resetGlobal` is available on only global options
 *   // `resetLocal` is available on only local options
 *   await op.autoread.reset(denops);
 *   await op.autoread.resetGlobal(denops);
 *   await op.autoread.resetLocal(denops);
 * }
 * ```
 *
 * See [`vim/mod.ts`](./vim/mod.ts) or [`nvim/mod.ts`](nvim/mod.ts) if you need Vim or Neovim specific options.
 *
 * @module
 */
// NOTE:
// Do NOT add modules manually to this file.
// Add modules to `_manual.ts` instead for manually written modules.
export * from "./_manual.ts";
export * from "./_generated.ts";
