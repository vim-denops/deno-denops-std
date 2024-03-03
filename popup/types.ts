/**
 * Window layout relative to
 * - "editor" The global editor grid
 * - "cursor" Cursor position in current window.
 */
export type Relative = "editor" | "cursor";

/**
 * Corner of the popup to place at (row,col):
 * - "NW" northwest (top left)
 * - "NE" northeast (top right)
 * - "SW" southwest (bottom left)
 * - "SE" southeast (bottom right)
 */
export type Anchor = "NW" | "NE" | "SW" | "SE";

/**
 * Border style of the popup:
 *
 * - "single" Single line border
 * - "double" Double line border
 * - "rounded" Rounded border
 * - [topleft, top, topright, right, botright, bottom, botleft, left] array for Custom border style
 *
 * Custom border style:
 *
 * Each character in the list is used for the corresponding position.
 * -  "topleft" top left corner
 * -  "top" top side
 * -  "topright" top right corner
 * -  "right" right side
 * -  "botright" bottom right corner
 * -  "bottom" bottom side
 * -  "botleft" bottom left corner
 * -  "left" left side
 * An empty string can be used to turn off a specific border, for instance, ["", "", "", ">", "", "", "", "<" ]
 * will only make vertical borders but not horizontal ones.
 */
export type Border =
  | "single"
  | "double"
  | "rounded"
  | readonly [
    topleft: string,
    top: string,
    topright: string,
    right: string,
    botright: string,
    bottom: string,
    botleft: string,
    left: string,
  ];

/**
 * Highlighting of the popup:
 * - "normal" Normal highlight group
 * - "border" Border highlight group
 */
export type Highlight = {
  normal?: string;
  border?: string;
};

export type OpenOptions = {
  /**
   * Buffer number to display in the popup window.
   * If not specified, a new buffer is created.
   */
  bufnr?: number;

  /**
   * Disable automatic redraw after the popup is created.
   *
   * In vim, manual redraw is required after creating a popup window if this option is set to true.
   *
   * ```typescript
   * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
   * import * as popup from "https://deno.land/x/denops_std@$MODULE_VERSION/popup/mod.ts";
   *
   * export async function main(denops: Denops): Promise<void> {
   *   const popupWindow = await popup.open(denops, {
   *     relative: "editor",
   *     width: 20,
   *     height: 20,
   *     row: 1,
   *     col: 1,
   *   });
   *   await denops.redraw();   // This line is required for Vim
   *
   *   await popupWindow.close();
   *   await denops.redraw();   // This line is required for Vim
   * }
   * ```
   */
  noRedraw?: boolean;

  /**
   * Window layout relative to
   * - "editor" The global editor grid
   * - "cursor" Cursor position in current window.
   */
  relative: Relative;

  /**
   * Corner of the popup to place at (row,col):
   * - "NW" northwest (top left)
   * - "NE" northeast (top right)
   * - "SW" southwest (bottom left)
   * - "SE" southeast (bottom right)
   */
  anchor?: Anchor;

  /**
   * Window width (in character cells). Minimum of 1.
   */
  width: number;

  /**
   * Window height (in character cells). Minimum of 1.
   */
  height: number;

  /**
   * Row position in units of "screen cell height".
   */
  row: number;

  /**
   * Column position in units of "screen cell width".
   */
  col: number;

  /**
   * Priority for the popup.
   */
  zindex?: number;

  /**
   * Border style of the popup:
   *
   * - "single" Single line border
   * - "double" Double line border
   * - "rounded" Rounded border
   * - [topleft, top, topright, right, botright, bottom, botleft, left] array for Custom border style
   *
   * Custom border style:
   *
   * Each character in the list is used for the corresponding position.
   * -  "topleft" top left corner
   * -  "top" top side
   * -  "topright" top right corner
   * -  "right" right side
   * -  "botright" bottom right corner
   * -  "bottom" bottom side
   * -  "botleft" bottom left corner
   * -  "left" left side
   * An empty string can be used to turn off a specific border, for instance, ["", "", "", ">", "", "", "", "<" ]
   * will only make vertical borders but not horizontal ones.
   */
  border?: Border;

  /**
   * Text to be displayed above the first item in the
   * popup, on top of any border.
   * This option requires `border` to be set.
   */
  title?: string;

  /**
   * Highlighting of the popup:
   * - "normal" Normal highlight group
   * - "border" Border highlight group
   */
  highlight?: Highlight;
};

export type PopupWindow = {
  /**
   * Buffer number of the popup window.
   */
  readonly bufnr: number;

  /**
   * Window ID of the popup window.
   */
  readonly winid: number;

  /**
   * Close the popup window.
   */
  readonly close: () => Promise<void>;

  [Symbol.asyncDispose]: () => Promise<void>;
};
