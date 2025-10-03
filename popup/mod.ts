/**
 * A module to provide compatibility layer for popup window in Vim and Neovim.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as buffer from "jsr:@denops/std/buffer";
 * import * as fn from "jsr:@denops/std/function";
 * import * as popup from "jsr:@denops/std/popup";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Create a new buffer
 *   const bufnr = await fn.bufadd(denops, "");
 *   await fn.bufload(denops, bufnr);
 *
 *   // Write some text to the buffer
 *   await buffer.replace(denops, bufnr, ["Hello, world!"]);
 *
 *   // Open a popup window showing the buffer
 *   const popupWindow = await popup.open(denops, {
 *     bufnr,
 *     relative: "editor",
 *     width: 20,
 *     height: 20,
 *     row: 1,
 *     col: 1,
 *   });
 *
 *   // Config a popup window
 *   await popup.config(denops, popupWindow.winid, {
 *     title: "Hello, world!",
 *   });
 *
 *   // Wait 3 seconds
 *   await new Promise((resolve) => setTimeout(resolve, 3000));
 *
 *   // Close the popup window
 *   await popupWindow.close();
 * }
 * ```
 *
 * Or with `await using` statement:
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as buffer from "jsr:@denops/std/buffer";
 * import * as fn from "jsr:@denops/std/function";
 * import * as popup from "jsr:@denops/std/popup";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Create a new buffer
 *   const bufnr = await fn.bufadd(denops, "");
 *   await fn.bufload(denops, bufnr);
 *
 *   // Write some text to the buffer
 *   await buffer.replace(denops, bufnr, ["Hello, world!"]);
 *
 *   // Open a popup window showing the buffer
 *   await using popupWindow = await popup.open(denops, {
 *     bufnr,
 *     relative: "editor",
 *     width: 20,
 *     height: 20,
 *     row: 1,
 *     col: 1,
 *   });
 *
 *   // Wait 3 seconds
 *   await new Promise((resolve) => setTimeout(resolve, 3000));
 *
 *   // The popup window is automatically closed, due to `await using` statement
 * }
 * ```
 *
 * Note that this module does NOT work with `batch.collect()`.
 *
 * @module
 */

import type { Denops } from "@denops/core";
import * as fn from "../function/mod.ts";

import type { OpenOptions, PopupWindow } from "./types.ts";
import {
  closePopup as closePopupVim,
  configPopup as configPopupVim,
  openPopup as openPopupVim,
} from "./vim.ts";
import {
  closePopup as closePopupNvim,
  configPopup as configPopupNvim,
  openPopup as openPopupNvim,
} from "./nvim.ts";

/**
 * Open a popup window showing the buffer in Vim/Neovim compatible way.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as popup from "jsr:@denops/std/popup";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Open a popup window
 *   const popupWindow = await popup.open(denops, {
 *     relative: "editor",
 *     width: 20,
 *     height: 20,
 *     row: 1,
 *     col: 1,
 *   });
 *
 *   // Do something with the popup window...
 *
 *   // Close the popup window manually
 *   await popupWindow.close();
 * }
 * ```
 *
 * Or with `await using` statement:
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as popup from "jsr:@denops/std/popup";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Open a popup window with `await using` statement
 *   await using popupWindow = await popup.open(denops, {
 *     relative: "editor",
 *     width: 20,
 *     height: 20,
 *     row: 1,
 *     col: 1,
 *   });
 *
 *   // Do something with the popup window...
 *
 *   // The popup window is automatically closed, due to `await using` statement
 * }
 * ```
 *
 * Note that this function does NOT work in `batch.collect()`.
 */
export async function open(
  denops: Denops,
  options: OpenOptions,
): Promise<PopupWindow> {
  if (options.title && !options.border) {
    // Vim allows `title` without `border`, but Neovim does not.
    // so we throw an error here to keep consistent behavior.
    throw new Error("title requires border to be set");
  }
  const open = denops.meta.host === "vim" ? openPopupVim : openPopupNvim;
  const close = denops.meta.host === "vim" ? closePopupVim : closePopupNvim;
  const bufnr = options.bufnr ?? await fn.bufadd(denops, "");
  const winid = await open(denops, bufnr, options);
  if (!options.noRedraw) {
    await denops.redraw();
  }
  return {
    bufnr,
    winid,
    close: async () => {
      await close(denops, winid);
      if (!options.noRedraw) {
        await denops.redraw();
      }
    },
    [Symbol.asyncDispose]: async () => {
      try {
        await close(denops, winid);
        await denops.redraw();
      } catch {
        // Fail silently
      }
    },
  };
}

/**
 * Close a popup window by its window ID.
 *
 * This function closes a popup window in both Vim and Neovim using the
 * appropriate platform-specific method. After closing, it automatically
 * triggers a redraw to ensure the UI is updated.
 *
 * @param denops - The Denops instance
 * @param winid - The window ID of the popup window to close
 *
 * @example
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as popup from "jsr:@denops/std/popup";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Open a popup window
 *   const popupWindow = await popup.open(denops, {
 *     relative: "editor",
 *     width: 20,
 *     height: 20,
 *     row: 1,
 *     col: 1,
 *   });
 *
 *   // Do something with the popup window...
 *
 *   // Close the popup window using the standalone close function
 *   await popup.close(denops, popupWindow.winid);
 * }
 * ```
 *
 * Note that this function does NOT work in `batch.collect()`.
 */
export async function close(
  denops: Denops,
  winid: number,
): Promise<void> {
  const close = denops.meta.host === "vim" ? closePopupVim : closePopupNvim;
  await close(denops, winid);
  await denops.redraw();
}

/**
 * Config a popup window in Vim/Neovim compatible way.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as popup from "jsr:@denops/std/popup";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Open a popup window
 *   await using popupWindow = await popup.open(denops, {
 *     relative: "editor",
 *     width: 20,
 *     height: 20,
 *     row: 1,
 *     col: 1,
 *   });
 *
 *   // Config a popup window
 *   await popup.config(denops, popupWindow.winid, {
 *     title: "Hello, world!",
 *   });
 * }
 * ```
 *
 * Note that this function does NOT work in `batch.collect()`.
 */
export async function config(
  denops: Denops,
  winid: number,
  options: Partial<Omit<OpenOptions, "bufnr">>,
): Promise<void> {
  const config = denops.meta.host === "vim" ? configPopupVim : configPopupNvim;
  await config(denops, winid, options);
  if (!options.noRedraw) {
    await denops.redraw();
  }
}

export type { OpenOptions, PopupWindow } from "./types.ts";
