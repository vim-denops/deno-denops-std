import type { Denops } from "https://deno.land/x/denops_core@v5.0.0/mod.ts";
import * as batch from "../batch/mod.ts";
import * as vimFn from "../function/vim/mod.ts";
import * as nvimFn from "../function/nvim/mod.ts";
import * as itertools from "https://deno.land/x/itertools@v1.1.1/mod.ts";
import { unreachable } from "https://deno.land/x/unreachable@v0.1.0/mod.ts";

const cacheKey = "denops_std/buffer/decoration/vimDecorate/rs@1";

export interface Decoration {
  // Line number
  line: number;
  // Column number (bytes)
  column: number;
  // Length (bytes)
  length: number;
  // Highlight name
  highlight: string;
}

/**
 * Decorate the specified buffer with decorations
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { decorate, open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // ...
 *   await decorate(denops, bufnr, [
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
 *
 * It uses `prop_add_list` in Vim and `nvim_buf_add_highlight` in Neovim to
 * decorate the buffer.
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

/**
 * Undecorate the specified buffer
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { decorate, open, undecorate } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // ...
 *   await decorate(denops, bufnr, [
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
 *
 *   // Do something
 *
 *   // Ranges are 0-based and exclusive.
 *   // Remove only the first highlight.
 *   const start = 0;
 *   const end = 1;
 *   await undecorate(denops, bufnr, start, end);
 *   // Start and end are optional. Defaults are 0 and -1 (entire buffer).
 *   // await undecorate(denops, bufnr);
 * }
 * ```
 *
 * It uses `prop_add` in Vim and `nvim_buf_add_highlight` in Neovim to decorate the
 * buffer.
 */
export function undecorate(
  denops: Denops,
  bufnr: number,
  start = 0,
  end = -1,
): Promise<void> {
  switch (denops.meta.host) {
    case "vim":
      return vimUndecorate(denops, bufnr, start, end);
    case "nvim":
      return nvimUndecorate(denops, bufnr, start, end);
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
  const toPropType = (n: string) =>
    `denops_std:buffer:decoration:decorate:${n}`;
  const rs = (denops.context[cacheKey] ?? new Set()) as Set<string>;
  denops.context[cacheKey] = rs;
  const hs = uniq(decorations.map((v) => v.highlight)).filter((v) =>
    !rs.has(v)
  );
  const decoMap = new Map<string, Set<[number, number, number, number]>>();
  for (const deco of decorations) {
    const propType = toPropType(deco.highlight);
    const props = decoMap.get(propType) ?? new Set();
    props.add([deco.line, deco.column, deco.line, deco.column + deco.length]);
    decoMap.set(propType, props);
  }
  await batch.batch(denops, async (denops) => {
    for (const highlight of hs) {
      const propType = toPropType(highlight);
      await vimFn.prop_type_add(denops, propType, {
        highlight,
        combine: false,
      });
      rs.add(highlight);
    }
    for (const [type, props] of decoMap.entries()) {
      await vimFn.prop_add_list(denops, { bufnr, type }, [...props]);
    }
  });
}

async function vimUndecorate(
  denops: Denops,
  bufnr: number,
  start: number,
  end: number,
): Promise<void> {
  const propList = await vimFn.prop_list(denops, start + 1, {
    bufnr,
    end_lnum: end,
  }) as { id: string; type: string }[];
  const propIds = new Set(
    propList.filter((p) =>
      p.type.startsWith("denops_std:buffer:decoration:decorate:")
    ).map((p) => p.id),
  );
  await batch.batch(denops, async (denops) => {
    for (const propId of propIds) {
      await vimFn.prop_remove(denops, { id: propId, bufnr, all: true });
    }
  });
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

async function nvimUndecorate(
  denops: Denops,
  bufnr: number,
  start: number,
  end: number,
): Promise<void> {
  const ns = await nvimFn.nvim_create_namespace(
    denops,
    "denops_std:buffer:decoration:decorate",
  );
  await nvimFn.nvim_buf_clear_namespace(denops, bufnr, ns, start, end);
}
