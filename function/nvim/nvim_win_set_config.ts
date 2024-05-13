import type { Denops } from "https://deno.land/x/denops_core@v6.0.6/mod.ts";

import type { NvimOpenWinConfig } from "./nvim_open_win.ts";

/**
 * Configures window layout. Currently only for floating and external windows
 * (including changing a split window to those layouts).
 *
 * When reconfiguring a floating window, absent option keys will not be
 * changed. `row`/`col` and `relative` must be reconfigured together.
 *
 * Parameters:
 *   - **{window}**  Window handle, or 0 for current window
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
