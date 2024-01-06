/**
 * A module to provide Vim buffer utility functions
 *
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
