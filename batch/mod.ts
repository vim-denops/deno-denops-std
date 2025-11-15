/**
 * A module to provide `denops.batch()` helper functions
 *
 * ## Functions Overview
 *
 * This module provides these functions for batching RPC calls, each serving different purposes:
 *
 * ### `batch()`
 * - **Purpose**: Manual batching for side-effects only (commands, settings)
 * - **Returns**: Always returns falsy values (void/undefined)
 * - **Use case**: When you need to execute multiple commands/settings without needing return values
 * - **Nesting**: Can be nested
 * - **Best for**: Most efficient when return values aren't needed
 *
 * ### `collect()`
 * - **Purpose**: Simple parallel value collection with type-safe returns
 * - **Returns**: Array of return values with proper types
 * - **Use case**: When you need to fetch multiple fixed values at once
 * - **Nesting**: Cannot be nested
 * - **Best for**: Cleanest API for fetching multiple values in parallel
 *
 * ### `accumulate()`
 * - **Purpose**: Automatic batching for complex async flows with loops and conditions
 * - **Returns**: Whatever the executor function returns
 * - **Use case**: When you need natural async/await code with automatic RPC optimization
 * - **Nesting**: Can be nested
 * - **Best for**: Complex flows with dynamic branching, loops, or conditional logic
 *
 * ## Choosing the Right Function
 *
 * - Use `batch()` when you only need to execute commands/settings and don't need return values
 * - Use `collect()` when you need to fetch multiple known values with clean, type-safe API
 * - Use `accumulate()` when you have complex async logic with conditionals, loops, or dynamic flows
 *
 * ## Examples
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
