import type { Denops } from "../../mod.ts";
import type { NvimOpenWinConfig } from "./nvim_open_win.ts";

/**
 * Gets window configuration.
 *
 * The returned value may be given to `nvim_open_win()`.
 *
 * `relative` is empty for normal windows.
 *
 * Attributes:
 *     Since: 0.4.0
 *
 * Parameters:
 *   - **{window}**  `window-ID`, or 0 for current window
 *
 * Return:
 *     Map defining the window configuration, see `nvim_open_win()`
 */
export function nvim_win_get_config(
  denops: Denops,
  window: number,
): Promise<NvimGetConfigResult>;
export function nvim_win_get_config(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_config", ...args);
}

export interface NvimGetConfigResult
  extends Omit<NvimOpenWinConfig, "relative"> {
  /**
   * Sets the window layout to "floating", placed at (row,col) coordinates
   * relative to:
   * - "" Normal window
   * - "editor" The global editor grid
   * - "win" Window given by the `win` field, or current window.
   * - "cursor" Cursor position in current window.
   * - "mouse" Mouse position
   */
  relative: "" | "editor" | "win" | "cursor" | "mouse";
}
