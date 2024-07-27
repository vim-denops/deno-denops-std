/**
 * A module to provide `denops.batch()` helper functions
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { batch, collect } from "jsr:@denops/std/batch";
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
