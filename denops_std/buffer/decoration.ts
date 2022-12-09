import type { Denops } from "https://deno.land/x/denops_core@v3.2.2/mod.ts";
import * as batch from "../batch/mod.ts";
import * as vimFn from "../function/vim/mod.ts";
import * as nvimFn from "../function/nvim/mod.ts";
import * as itertools from "https://deno.land/x/itertools@v1.1.0/mod.ts";
import { unreachable } from "https://deno.land/x/unreachable@v0.1.0/mod.ts";

const cacheKey = Symbol("denops_std/buffer/decoration/vimDecorate/rs");

export type Decoration = {
  // Line number
  line: number;
  // Column number (bytes)
  column: number;
  // Length (bytes)
  length: number;
  // Highlight name
  highlight: string;
};

/**
 * Decorate the specified buffer with decorations
 */
export function decorate(
  denops: Denops,
  bufnr: number,
  decorations: Decoration[],
): Promise<void> {
  switch (denops.meta.host) {
    case "vim":
      return vimDecorate(denops, bufnr, decorations);
    case "nvim":
      return nvimDecorate(denops, bufnr, decorations);
    default:
      unreachable(denops.meta.host);
  }
}

function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}

async function vimDecorate(
  denops: Denops,
  bufnr: number,
  decorations: Decoration[],
): Promise<void> {
  const toPropType = (n: string) => `denps_std:buffer:decoration:decorate:${n}`;
  const rs = (denops.context[cacheKey] ?? new Set()) as Set<string>;
  denops.context[cacheKey] = rs;
  const hs = uniq(decorations.map((v) => v.highlight)).filter((v) =>
    !rs.has(v)
  );
  await batch.batch(denops, async (denops) => {
    for (const highlight of hs) {
      const propType = toPropType(highlight);
      await vimFn.prop_type_add(denops, propType, {
        highlight,
        combine: false,
      });
      rs.add(highlight);
    }
  });
  for (const chunk of itertools.chunked(decorations, 1000)) {
    await batch.batch(denops, async (denops) => {
      for (const deco of chunk) {
        const propType = toPropType(deco.highlight);
        await vimFn.prop_add(denops, deco.line, deco.column, {
          bufnr,
          length: deco.length,
          type: propType,
        });
      }
    });
  }
}

async function nvimDecorate(
  denops: Denops,
  bufnr: number,
  decorations: Decoration[],
): Promise<void> {
  const ns = await nvimFn.nvim_create_namespace(
    denops,
    "denops_std:buffer:decoration:decorate",
  );
  for (const chunk of itertools.chunked(decorations, 1000)) {
    await batch.batch(denops, async (denops) => {
      for (const deco of chunk) {
        await nvimFn.nvim_buf_add_highlight(
          denops,
          bufnr,
          ns,
          deco.highlight,
          deco.line - 1,
          deco.column - 1,
          deco.column - 1 + deco.length,
        );
      }
    });
  }
}
