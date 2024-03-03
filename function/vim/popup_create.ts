import type { Denops } from "../../mod.ts";

/**
 * Open a popup window showing **{what}**, which is either:
 * - a buffer number
 * - a string
 * - a list of strings
 * - a list of text lines with text properties
 * When **{what}** is not a buffer number, a buffer is created with
 * 'buftype' set to "popup".  That buffer will be wiped out once
 * the popup closes.
 *
 * if **{what}** is a buffer number and loading the buffer runs into
 * an existing swap file, it is silently opened read-only, as if
 * a `SwapExists` autocommand had set `v:swapchoice` to 'o'.
 * This is because we assume the buffer is only used for viewing.
 *
 * **{options}** is a dictionary with many possible entries.
 * See `popup_create-arguments` for details.
 *
 * Returns a window-ID, which can be used with other popup
 * functions.  Use `winbufnr()` to get the number of the buffer
 * in the window:
 *
 *     let winid = popup_create('hello', {})
 *     let bufnr = winbufnr(winid)
 *     call setbufline(bufnr, 2, 'second line')
 *
 * In case of failure zero is returned.
 *
 * Can also be used as a `method`:
 *
 *     GetText()->popup_create({})
 */
export function popup_create(
  denops: Denops,
  what: PopupCreateWhat,
  options: PopupCreateOptions,
): Promise<number>;
export function popup_create(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("popup_create", ...args);
}

export interface PopupCreateOptions {
  /**
   * Screen line where to position the popup.  Can use a
   * number or "cursor", "cursor+1" or "cursor-1" to use
   * the line of the cursor and add or subtract a number of
   * lines.  If omitted or zero the popup is vertically
   * centered.  The first line is 1.
   * When using "textprop" the number is relative to the
   * text property and can be negative.
   */
  line?: number | string;

  /**
   * Screen column where to position the popup.  Can use a
   * number or "cursor" to use the column of the cursor,
   * "cursor+9" or "cursor-9" to add or subtract a number
   * of columns.  If omitted or zero the popup is
   * horizontally centered.  The first column is 1.
   * When using "textprop" the number is relative to the
   * text property and can be negative.
   */
  col?: number | string;

  /**
   * "topleft", "topright", "botleft" or "botright":
   * defines what corner of the popup "line" and "col" are
   * used for.  When not set "topleft" is used.
   * Alternatively "center" can be used to position the
   * popup in the center of the Vim window, in which case
   * "line" and "col" are ignored.
   */
  pos?: "topleft" | "topright" | "botleft" | "botright" | "center";

  /**
   * When FALSE the value of "pos" is always used.  When
   * TRUE (the default) and the popup does not fit
   * vertically and there is more space on the other side
   * then the popup is placed on the other side of the
   * position indicated by "line".
   */
  posinvert?: boolean;

  /**
   * When present the popup is positioned next to a text
   * property with this name and will move when the text
   * property moves.  Use an empty string to remove.  See
   * `popup-textprop-pos`.
   */
  textprop?: string;

  /**
   * What window to search for the text property.  When
   * omitted or invalid the current window is used.  Used
   * when "textprop" is present.
   */
  textpropwin?: number;

  /**
   * Used to identify the text property when "textprop" is
   * present. Use zero to reset.
   */
  textpropid?: number;

  /**
   * When FALSE (the default), and:
   *  - "pos" is "botleft" or "topleft", and
   *  - "wrap" is off, and
   *  - the popup would be truncated at the right edge of
   *    the screen, then
   * the popup is moved to the left so as to fit the
   * contents on the screen.  Set to TRUE to disable this.
   */
  fixed?: boolean;

  /**
   * When TRUE (the default) and the position is relative
   * to the cursor, flip to below or above the cursor to
   * avoid overlap with the |popupmenu-completion| or
   * another popup with a higher "zindex".  When there is
   * no space above/below the cursor then show the popup to
   * the side of the popup or popup menu.
   * {not implemented yet}
   */
  flip?: boolean;

  /**
   * Maximum height of the contents, excluding border and
   * padding.
   */
  maxheight?: number;

  /**
   * Minimum height of the contents, excluding border and
   * padding.
   */
  minheight?: number;

  /**
   * Maximum width of the contents, excluding border,
   * padding and scrollbar.
   */
  maxwidth?: number;

  /**
   * Minimum width of the contents, excluding border,
   * padding and scrollbar.
   */
  minwidth?: number;

  /**
   * First buffer line to display.  When larger than one it
   * looks like the text scrolled up.  When out of range
   * the last buffer line will at the top of the window.
   * Set to zero to leave the position as set by commands.
   * Also see "scrollbar".
   */
  firstline?: number;

  /**
   * When TRUE the popup exists but is not displayed; use
   * `popup_show()` to unhide it.
   */
  hidden?: boolean;

  /**
   * When -1: display the popup on all tab pages.
   * When 0 (the default): display the popup on the current
   * tab page.
   * Otherwise the number of the tab page the popup is
   * displayed on; when invalid the popup is not created
   * and an error is given. *E997*
   */
  tabpage?: number;

  /**
   * Text to be displayed above the first item in the
   * popup, on top of any border.  If there is no top
   * border one line of padding is added to put the title
   * on.  You might want to add one or more spaces at the
   * start and end as padding.
   */
  title?: string;

  /**
   * TRUE to make the lines wrap (default TRUE).
   */
  wrap?: boolean;

  /**
   * TRUE to allow the popup to be dragged with the mouse
   * by grabbing at the border.  Has no effect if the
   * popup does not have a border. As soon as dragging
   * starts and "pos" is "center" it is changed to
   * "topleft".
   */
  drag?: boolean;

  /**
   * TRUE to allow the popup to be dragged from every
   * position.  Makes it very difficult to select text in
   * the popup.
   */
  dragall?: boolean;

  /**
   * TRUE to allow the popup to be resized with the mouse
   * by grabbing at the bottom right corner.  Has no effect
   * if the popup does not have a border.
   */
  resize?: boolean;

  /**
   * When "button" an X is displayed in the top-right, on
   * top of any border, padding or text.  When clicked on
   * the X the popup will close.  Any callback is invoked
   * with the value -2.
   * When "click" any mouse click in the popup will close
   * it.
   * When "none" (the default) mouse clicks do not close
   * the popup window.
   */
  close?: "none" | "click" | "button";

  /**
   * Highlight group name to use for the text, stored in
   * the 'wincolor' option.
   */
  highlight?: string;

  /**
   * List with numbers, defining the padding
   * above/right/below/left of the popup (similar to CSS).
   * An empty list uses a padding of 1 all around.  The
   * padding goes around the text, inside any border.
   * Padding uses the 'wincolor' highlight.
   * Example: [1, 2, 1, 3] has 1 line of padding above, 2
   * columns on the right, 1 line below and 3 columns on
   * the left.
   */
  padding?:
    | readonly []
    | readonly [above: number, right: number, below: number, left: number];

  /**
   * List with numbers, defining the border thickness
   * above/right/below/left of the popup (similar to CSS).
   * Only values of zero and non-zero are currently
   * recognized.  An empty list uses a border all around.
   */
  border?:
    | readonly []
    | readonly [above: number, right: number, below: number, left: number];

  /**
   * List of highlight group names to use for the border.
   * When one entry it is used for all borders, otherwise
   * the highlight for the top/right/bottom/left border.
   * Example: ['TopColor', 'RightColor', 'BottomColor,
   * 'LeftColor']
   */
  borderhighlight?:
    | readonly [string]
    | readonly [top: string, right: string, bottom: string, left: string];

  /**
   * List with characters, defining the character to use
   * for the top/right/bottom/left border.  Optionally
   * followed by the character to use for the
   * topleft/topright/botright/botleft corner.
   * Example: ['-', '|', '-', '|', '┌', '┐', '┘', '└']
   * When the list has one character it is used for all.
   * When the list has two characters the first is used for
   * the border lines, the second for the corners.
   * By default a double line is used all around when
   * 'encoding' is "utf-8" and 'ambiwidth' is "single",
   * otherwise ASCII characters are used.
   */
  borderchars?:
    | readonly [top: string, right: string, bottom: string, left: string]
    | readonly [
      top: string,
      right: string,
      bottom: string,
      left: string,
      topleft: string,
      topright: string,
      botright: string,
      botleft: string,
    ];

  /**
   * 1 or true: show a scrollbar when the text doesn't fit.
   * zero: do not show a scrollbar.  Default is non-zero.
   * Also see `popup-scrollbar`.
   */
  scrollbar?: 0 | 1 | true;

  /**
   * Highlight group name for the scrollbar. The
   * background color is what matters.  When not given then
   * PmenuSbar is used.
   */
  scrollbarhighlight?: string;

  /**
   * Highlight group name for the scrollbar thumb. The
   * background color is what matters.  When not given then
   * PmenuThumb is used.
   */
  thumbhighlight?: string;

  /**
   * Priority for the popup, default 50.  Minimum value is
   * 1, maximum value is 32000.
   */
  zindex?: number;

  /**
   * A list of lists with coordinates, defining parts of
   * the popup that are transparent.  See `popup-mask`.
   */
  mask?: unknown;

  /**
   * Time in milliseconds after which the popup will close.
   * When omitted `popup_close()` must be used.
   */
  time?: number;

  /**
   * Specifies to close the popup if the cursor moved:
   * - "any": if the cursor moved at all
   * - "word": if the cursor moved outside `<cword>`
   * - "WORD": if the cursor moved outside `<cWORD>`
   * - "expr": if the cursor moved outside `<cexpr>`
   * - [{start}, {end}]: if the cursor moved before column
   *   {start} or after {end}
   * - [{lnum}, {start}, {end}]: if the cursor moved away
   *   from line {lnum}, before column {start} or after
   *   {end}
   * - [0, 0, 0] do not close the popup when the cursor
   *   moves
   * The popup also closes if the cursor moves to another
   * line or to another window.
   */
  moved?:
    | "any"
    | "word"
    | "WORD"
    | "expr"
    | readonly [start: number, end: number]
    | readonly [lnum: number, start: number, end: number];

  /**
   * Like "moved" but referring to the mouse pointer
   * position
   */
  mousemoved?:
    | "any"
    | "word"
    | "WORD"
    | "expr"
    | readonly [start: number, end: number]
    | readonly [lnum: number, start: number, end: number];

  /**
   * TRUE:    Highlight the cursor line. Also scrolls the
   *          text to show this line (only works properly
   *          when 'wrap' is off).
   * zero:    Do not highlight the cursor line.
   * Default is zero, except for `popup_menu()`.
   */
  cursorline?: 0 | true;

  /**
   * A callback that can filter typed characters, see
   * `popup-filter`.
   *
   * **WARNING:**
   * Probably this feature doesn't work from Denops because Denops cannot pass Vim script function
   * through JSON RPC.
   */
  filter?: unknown;

  /**
   * Allow for key mapping.  When FALSE and the popup is
   * visible and has a filter callback key mapping is
   * disabled.  Default value is TRUE.
   */
  mapping?: boolean;

  /**
   * In which modes the filter is used (same flags as with
   * `hasmapto()` plus "a"):
   *   n	Normal mode
   *   v	Visual and Select mode
   *   x	Visual mode
   *   s	Select mode
   *   o	Operator-pending mode
   *   i	Insert mode
   *   l	Language-Argument ("r", "f", "t", etc.)
   *   c	Command-line mode
   *   a	all modes
   * The default value is "a".
   */
  filtermode?: string;

  /**
   * A callback that is called when the popup closes, e.g.
   * when using `popup_filter_menu()`, see `popup-callback`.
   *
   * **WARNING:**
   * Probably this feature doesn't work from Denops because Denops cannot pass Vim script function
   * through JSON RPC.
   */
  callback?: unknown;
}

/**
 * These are similar to the third argument of |prop_add()| except:
 * - "lnum" is always the current line in the list
 * - "bufnr" is always the buffer of the popup
 * - "col" is in the Dict instead of a separate argument
 */
export interface PopupProp {
  /**
   * starting column, counted in bytes, use one for the first column.
   */
  col: number;

  /**
   * length of text in bytes; can be zero
   */
  length: number;

  /**
   * line number for the end of the text
   */
  end_lnum: number;

  /**
   * column just after the text; not used when "length is present; when
   * `{col}` and "end_col  are equal, this is a zero-width text property
   */
  end_col: number;

  /**
   * user defined ID for the property; when omitted zero is used
   */
  id: number;

  /**
   * name of the text property type, as added with `prop_type_add()`
   */
  type: string;
}

export type PopupCreateWhat =
  | number
  | string
  | readonly string[]
  | { text: string; props: readonly PopupProp[] }[];
