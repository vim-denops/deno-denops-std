/**
 * A module to provide `denops.batch()` helper functions
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { accumulate, batch, collect } from "jsr:@denops/std/batch";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Call multiple denops functions sequentially in a single RPC call
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
 *
 *   // Automatically batch multiple denops calls while writing regular async code
 *   // In this example, only 3 RPC calls are made:
 *   // 1. fn.getline, 2. batched fn.matchstr calls, 3. batched fn.len calls
 *   const results2 = await accumulate(denops, async (denops) => {
 *     const lines = await fn.getline(denops, 1, "$");
 *     return await Promise.all(lines.map(async (line, index) => {
 *       const keyword = await fn.matchstr(denops, line, "\\k\\+");
 *       const len = await fn.len(denops, keyword);
 *       return {
 *         lnum: index + 1,
 *         keyword,
 *         len,
 *       };
 *     }));
 *   });
 *   // results2 contains an array of objects with lnum, keyword, and len
 * }
 * ```
 *
 * @module
 */
export * from "./accumulate.ts";
export * from "./batch.ts";
export * from "./collect.ts";
export * from "./error.ts";
