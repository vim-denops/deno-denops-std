/**
 * A module to provide Vim buffer utility functions
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as fn from "https://deno.land/x/denops_std@$MODULE_VERSION/function/mod.ts";
 * import * as buffer from "https://deno.land/x/denops_std@$MODULE_VERSION/buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Open `README.md`
 *   // Same as `:edit README.md`
 *   await buffer.open(denops, "README.md");
 *
 *   // Open `LICENSE` with given options
 *   // Same as `:keepjumps keepalt edit ++enc=sjis ++ff=dos LICENSE`
 *   await buffer.open(denops, "LICENSE", {
 *     mods: "keepjumps keepalt",
 *     cmdarg: "++enc=sjis ++ff=dos",
 *   });
 *
 *   const bufnr = await fn.bufnr(denops);
 *
 *   // Append the content under the cursor position of the `bufnr` buffer
 *   await buffer.append(denops, bufnr, ["Hello", "World"]);
 *
 *   // Set the content of the `bufnr` buffer
 *   await buffer.replace(denops, bufnr, ["Hello", "World"]);
 *
 *   // Concrete the buffer.
 *   // - The `buftype` option become "nofile"
 *   // - The `swapfile` become disabled
 *   // - The `modifiable` become disabled
 *   // - The content of the buffer is restored on `BufReadCmd` synchronously
 *   await buffer.concrete(denops, bufnr);
 *
 *   // Decorate the specified buffer with decorations
 *   await buffer.decorate(denops, bufnr, [
 *     {
 *       line: 1,
 *       column: 1,
 *       length: 10,
 *       highlight: "Special",
 *     },
 *     {
 *       line: 2,
 *       column: 2,
 *       length: 3,
 *       highlight: "Comment",
 *     },
 *   ]);
 * }
 * ```
 * @module
 */
export * from "./buffer.ts";
export * from "./decoration.ts";
export {
  assertFileFormat,
  ensureFileFormat,
  isFileFormat,
  maybeFileFormat,
} from "./fileformat.ts";
export type { FileFormat } from "./fileformat.ts";
