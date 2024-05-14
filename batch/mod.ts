/**
 * A module to provide `denops.batch()` helper functions
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import { batch, collect } from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Call multiple denops functions sequentially in a signle RPC call
 *   await batch(denops, async (denops) => {
 *     await denops.cmd("setlocal modifiable");
 *     await denops.cmd("setlocal noswap");
 *     await denops.cmd("setlocal nobackup");
 *   });
 *
 *   // Call multiple denops functions sequentially and get the return values in a single RPC call
 *   const results = await collect(denops, (denops) => [
 *     denops.eval("&modifiable"),
 *     denops.eval("&modified"),
 *     denops.eval("&filetype"),
 *   ]);
 *   // results contains the value of modifiable, modified, and filetype
 * }
 * ```
 *
 * @module
 */
export * from "./batch.ts";
export * from "./collect.ts";
