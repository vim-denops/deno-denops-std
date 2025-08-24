import type { Denops } from "@denops/core";

import type { NvimOpenWinConfig } from "./nvim_open_win.ts";

/**
 * Configures window layout. Cannot be used to move the last window in a
 * tabpage to a different one.
 *
 * When reconfiguring a window, absent option keys will not be changed.
 * `row`/`col` and `relative` must be reconfigured together.
 *
 * Attributes:
 *     Since: 0.4.0
 *
 * Parameters:
 *   - **{window}**  `window-ID`, or 0 for current window
 *   - **{config}**  Map defining the window configuration, see `nvim_open_win()`
 *
 * See also:
 *   - `nvim_open_win()`
 */
export function nvim_win_set_config(
  denops: Denops,
  window: number,
  config: Partial<NvimOpenWinConfig>,
): Promise<void>;
export function nvim_win_set_config(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_config", ...args);
}
