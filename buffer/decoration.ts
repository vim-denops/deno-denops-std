import type { Denops } from "@denops/core";
import * as itertools from "@lambdalisue/itertools";
import { unreachable } from "@lambdalisue/unreachable";
import { batch } from "../batch/batch.ts";
import * as vimFn from "../function/vim/mod.ts";
import * as nvimFn from "../function/nvim/mod.ts";

const cacheKey = "denops_std/buffer/decoration/vimDecorate/rs@1";

const prefix = "denops_std:buffer:decoration:decorate";

export interface Decoration {
  /**
   * Line number
   */
  line: number;
  /**
   * Column number (bytes)
   */
  column: number;
  /**
   * Length (bytes)
   */
  length: number;
  /**
   * Highlight name
   */
  highlight: string;
}

/**
 * Decorate the specified buffer with decorations
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { decorate, open } from "jsr:@denops/std/buffer";
 *
 * export const main: Entrypoint = async (denops) => {
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
  decorations: readonly Decoration[],
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
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { decorate, open, undecorate } from "jsr:@denops/std/buffer";
 *
 * export const main: Entrypoint = async (denops) => {
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

export function listDecorations(
  denops: Denops,
  bufnr: number,
): Promise<Decoration[]> {
  switch (denops.meta.host) {
    case "vim":
      return vimListDecorations(denops, bufnr);
    case "nvim":
      return nvimListDecorations(denops, bufnr);
    default:
      unreachable(denops.meta.host);
  }
}

function uniq<T>(array: readonly T[]): T[] {
  return [...new Set(array)];
}

async function vimDecorate(
  denops: Denops,
  bufnr: number,
  decorations: readonly Decoration[],
): Promise<void> {
  const toPropType = (n: string) => `${prefix}:${n}`;
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
  await batch(denops, async (denops) => {
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
    propList
      .filter((p) => p.type.startsWith(`${prefix}:`))
      .map((p) => p.id),
  );
  await batch(denops, async (denops) => {
    for (const propId of propIds) {
      await vimFn.prop_remove(denops, { id: propId, bufnr, all: true });
    }
  });
}

async function vimListDecorations(
  denops: Denops,
  bufnr: number,
): Promise<Decoration[]> {
  const props = await vimFn.prop_list(denops, 1, {
    bufnr,
    end_lnum: -1,
  }) as {
    col: number;
    end: number;
    id: number;
    length: number;
    lnum: number;
    start: number;
    type: string;
    type_bufnr: number;
  }[];
  return props
    .filter((prop) => prop.type.startsWith(`${prefix}:`))
    .map((prop) => ({
      line: prop.lnum,
      column: prop.col,
      length: prop.length,
      highlight: prop.type.split(":").pop() as string,
    }));
}

async function nvimDecorate(
  denops: Denops,
  bufnr: number,
  decorations: readonly Decoration[],
): Promise<void> {
  const ns = await nvimFn.nvim_create_namespace(denops, prefix);
  for (const chunk of itertools.chunked(decorations, 1000)) {
    await batch(denops, async (denops) => {
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
  const ns = await nvimFn.nvim_create_namespace(denops, prefix);
  await nvimFn.nvim_buf_clear_namespace(denops, bufnr, ns, start, end);
}

async function nvimListDecorations(
  denops: Denops,
  bufnr: number,
): Promise<Decoration[]> {
  const ns = await nvimFn.nvim_create_namespace(denops, prefix);
  const extmarks = await nvimFn.nvim_buf_get_extmarks(
    denops,
    bufnr,
    ns,
    0,
    -1,
    { details: true },
  ) as [
    extmark_id: number,
    row: number,
    col: number,
    {
      hl_group: string;
      hl_eol: boolean;
      end_right_gravity: boolean;
      priority: number;
      right_gravity: boolean;
      end_col: number;
      ns_id: number;
      end_row: number;
    },
  ][];
  return extmarks.map((extmark) => ({
    line: extmark[1] + 1,
    column: extmark[2] + 1,
    length: extmark[3].end_col - extmark[2],
    highlight: extmark[3].hl_group,
  }));
}
