import type { DocsType } from "./types.ts";

/**
 * Mapping between function name to `DocsType`.
 */
export const DOCS_OVERRIDES: Readonly<Record<string, DocsType>> = {
  has: "nvim",
};
