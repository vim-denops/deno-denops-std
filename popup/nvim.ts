import type { Denops } from "@denops/core";
import { ulid } from "@std/ulid";
import * as nvimFn from "../function/nvim/mod.ts";
import { execute } from "../helper/execute.ts";

import type { Border, OpenOptions } from "./types.ts";

const cacheKey = "denops_std/popup/nvim.ts@2";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (typeof denops.context[cacheKey] === "string") {
    return denops.context[cacheKey];
  }
  const suffix = ulid();
  denops.context[cacheKey] = suffix;
  const script = `
  function! DenopsStdPopupNvimOpenPopup_${suffix}(bufnr, config, winhighlight) abort
    let winid = nvim_open_win(a:bufnr, v:false, a:config)
    if a:winhighlight isnot v:null
      call nvim_win_set_option(winid, 'winhighlight', a:winhighlight)
    endif
    return winid
  endfunction
  function! DenopsStdPopupNvimWinSetConfig_${suffix}(winid, config, winhighlight) abort
    call nvim_win_set_config(a:winid, a:config)
    if a:winhighlight isnot v:null
      call nvim_win_set_option(winid, 'winhighlight', a:winhighlight)
    endif
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

export async function openPopup(
  denops: Denops,
  bufnr: number,
  options: Omit<OpenOptions, "bufnr" | "noRedraw">,
): Promise<number> {
  const suffix = await ensurePrerequisites(denops);
  const nvimOpenWinConfig = toNvimOpenWinConfig(options);
  const winhighlight = toNvimWinhighlight(options.highlight);
  return await denops.call(
    `DenopsStdPopupNvimOpenPopup_${suffix}`,
    bufnr,
    nvimOpenWinConfig,
    winhighlight,
  ) as number;
}

export async function configPopup(
  denops: Denops,
  winid: number,
  options: Partial<Omit<OpenOptions, "bufnr" | "noRedraw">>,
): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  const nvimWinSetConfig = toNvimWinSetConfig(options);
  const winhighlight = toNvimWinhighlight(options.highlight);
  await denops.call(
    `DenopsStdPopupNvimWinSetConfig_${suffix}`,
    winid,
    nvimWinSetConfig,
    winhighlight,
  );
}

export async function closePopup(denops: Denops, winid: number): Promise<void> {
  await nvimFn.nvim_win_close(denops, winid, true);
}

function toNvimOpenWinConfig(
  options: Omit<OpenOptions, "bufnr" | "noRedraw">,
): nvimFn.NvimOpenWinConfig {
  return toNvimWinSetConfig(options) as nvimFn.NvimOpenWinConfig;
}

function toNvimWinSetConfig(
  options: Partial<Omit<OpenOptions, "bufnr" | "noRedraw">>,
): Partial<nvimFn.NvimOpenWinConfig> {
  const v: Partial<nvimFn.NvimOpenWinConfig> = {
    relative: options.relative,
    anchor: options.anchor,
    width: options.width,
    height: options.height,
    col: options.col,
    row: options.row,
    focusable: false, // To keep consistent with the behavior of Vim's `popup_create()`
    zindex: options.zindex,
    border: options.border ? toNvimBorder(options.border) : undefined,
    title: options.title,
  };
  return Object.fromEntries(
    Object
      .entries(v)
      .filter(([, v]) => v != undefined),
  ) as Partial<nvimFn.NvimOpenWinConfig>;
}

function toNvimBorder(
  border: Border,
): nvimFn.NvimOpenWinConfig["border"] {
  if (typeof border === "string") {
    return border;
  }
  const [lt, t, rt, r, rb, b, lb, l] = border;
  return [lt, t, rt, r, rb, b, lb, l];
}

function toNvimWinhighlight(
  highlight: OpenOptions["highlight"],
): string | null {
  if (!highlight) {
    return null;
  }
  const {
    normal = "FloatNormal",
    border = "FloatBorder",
  } = highlight;
  if (normal && border) {
    return `Normal:${normal},FloatBorder:${border}`;
  } else if (normal) {
    return `Normal:${normal}`;
  } else if (border) {
    return `FloatBorder:${border}`;
  }
  return null;
}
