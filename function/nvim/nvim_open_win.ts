import type { Denops } from "../../mod.ts";

/**
 * Opens a new split window, or a floating window if `relative` is specified,
 * or an external window (managed by the UI) if `external` is specified.
 *
 * Floats are windows that are drawn above the split layout, at some anchor
 * position in some other window. Floats can be drawn internally or by
 * external GUI with the `ui-multigrid` extension. External windows are only
 * supported with multigrid GUIs, and are displayed as separate top-level
 * windows.
 *
 * For a general overview of floats, see `api-floatwin`.
 *
 * The `width` and `height` of the new window must be specified when opening
 * a floating window, but are optional for normal windows.
 *
 * If `relative` and `external` are omitted, a normal "split" window is
 * created. The `win` property determines which window will be split. If no
 * `win` is provided or `win == 0`, a window will be created adjacent to the
 * current window. If -1 is provided, a top-level split will be created.
 * `vertical` and `split` are only valid for normal windows, and are used to
 * control split direction. For `vertical`, the exact direction is determined
 * by `'splitright'` and `'splitbelow'`. Split windows cannot have
 * `bufpos`/`row`/`col`/`border`/`title`/`footer` properties.
 *
 * With relative=editor (row=0,col=0) refers to the top-left corner of the
 * screen-grid and (row=Lines-1,col=Columns-1) refers to the bottom-right
 * corner. Fractional values are allowed, but the builtin implementation
 * (used by non-multigrid UIs) will always round down to nearest integer.
 *
 * Out-of-bounds values, and configurations that make the float not fit
 * inside the main editor, are allowed. The builtin implementation truncates
 * values so floats are fully within the main screen grid. External GUIs
 * could let floats hover outside of the main window like a tooltip, but this
 * should not be used to specify arbitrary WM screen positions.
 *
 * Example (Lua): window-relative float
 *
 *     vim.api.nvim_open_win(0, false,
 *       {relative='win', row=3, col=3, width=12, height=3})
 *
 * Example (Lua): buffer-relative float (travels as buffer is scrolled)
 *
 *     vim.api.nvim_open_win(0, false,
 *       {relative='win', width=12, height=3, bufpos={100,10}})
 *
 * Example (Lua): vertical split left of the current window
 *
 *     vim.api.nvim_open_win(0, false, {
 *       split = 'left',
 *       win = 0
 *     })
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *   - **{buffer}**  Buffer to display, or 0 for current buffer
 *   - **{enter}**   Enter the window (make it the current window)
 *   - **{config}**  Map defining the window configuration. Keys:
 *               - relative: Sets the window layout to "floating", placed at
 *                 (row,col) coordinates relative to:
 *                 - "editor" The global editor grid
 *                 - "win" Window given by the `win` field, or current
 *                   window.
 *                 - "cursor" Cursor position in current window.
 *                 - "mouse" Mouse position
 *               - win: `window-ID` window to split, or relative window when
 *                 creating a float (relative="win").
 *               - anchor: Decides which corner of the float to place at
 *                 (row,col):
 *                 - "NW" northwest (default)
 *                 - "NE" northeast
 *                 - "SW" southwest
 *                 - "SE" southeast
 *               - width: Window width (in character cells). Minimum of 1.
 *               - height: Window height (in character cells). Minimum of 1.
 *               - bufpos: Places float relative to buffer text (only when
 *                 relative="win"). Takes a tuple of zero-indexed
 *                 `[line, column]`. `row` and `col` if given are applied
 *                 relative to this position, else they default to:
 *                 - `row=1` and `col=0` if `anchor` is "NW" or "NE"
 *                 - `row=0` and `col=0` if `anchor` is "SW" or "SE" (thus
 *                   like a tooltip near the buffer text).
 *               - row: Row position in units of "screen cell height", may be
 *                 fractional.
 *               - col: Column position in units of "screen cell width", may
 *                 be fractional.
 *               - focusable: Enable focus by user actions (wincmds, mouse
 *                 events). Defaults to true. Non-focusable windows can be
 *                 entered by `nvim_set_current_win()`.
 *               - external: GUI should display the window as an external
 *                 top-level window. Currently accepts no other positioning
 *                 configuration together with this.
 *               - zindex: Stacking order. floats with higher `zindex` go on
 *                 top on floats with lower indices. Must be larger than
 *                 zero. The following screen elements have hard-coded
 *                 z-indices:
 *                 - 100: insert completion popupmenu
 *                 - 200: message scrollback
 *                 - 250: cmdline completion popupmenu (when
 *                   wildoptions+=pum) The default value for floats are 50.
 *                   In general, values below 100 are recommended, unless
 *                   there is a good reason to overshadow builtin elements.
 *               - style: (optional) Configure the appearance of the window.
 *                 Currently only supports one value:
 *                 - "minimal" Nvim will display the window with many UI
 *                   options disabled. This is useful when displaying a
 *                   temporary float where the text should not be edited.
 *                   Disables 'number', 'relativenumber', 'cursorline',
 *                   'cursorcolumn', 'foldcolumn', 'spell' and 'list'
 *                   options. 'signcolumn' is changed to `auto` and
 *                   'colorcolumn' is cleared. 'statuscolumn' is changed to
 *                   empty. The end-of-buffer region is hidden by setting
 *                   `eob` flag of 'fillchars' to a space char, and clearing
 *                   the `hl-EndOfBuffer` region in 'winhighlight'.
 *               - border: Style of (optional) window border. This can either
 *                 be a string or an array. The string values are
 *                 - "none": No border (default).
 *                 - "single": A single line box.
 *                 - "double": A double line box.
 *                 - "rounded": Like "single", but with rounded corners
 *                   ("╭" etc.).
 *                 - "solid": Adds padding by a single whitespace cell.
 *                 - "shadow": A drop shadow effect by blending with the
 *                   background.
 *                 - If it is an array, it should have a length of eight or
 *                   any divisor of eight. The array will specify the eight
 *                   chars building up the border in a clockwise fashion
 *                   starting with the top-left corner. As an example, the
 *                   double box style could be specified as:
 *
 *                       [ "╔", "═" ,"╗", "║", "╝", "═", "╚", "║" ].
 *
 *                   If the number of chars are less than eight, they will be
 *                   repeated. Thus an ASCII border could be specified as
 *
 *                       [ "/", "-", \"\\\\\", "|" ],
 *
 *                   or all chars the same as
 *
 *                       [ "x" ].
 *
 *                 An empty string can be used to turn off a specific border,
 *                 for instance,
 *
 *                     [ "", "", "", ">", "", "", "", "<" ]
 *
 *                 will only make vertical borders but not horizontal ones.
 *                 By default, `FloatBorder` highlight is used, which links
 *                 to `WinSeparator` when not defined. It could also be
 *                 specified by character:
 *
 *                     [ ["+", "MyCorner"], ["x", "MyBorder"] ].
 *
 *               - title: Title (optional) in window border, string or list.
 *                 List should consist of `[text, highlight]` tuples. If
 *                 string, the default highlight group is `FloatTitle`.
 *               - title_pos: Title position. Must be set with `title`
 *                 option. Value can be one of "left", "center", or "right".
 *                 Default is `"left"`.
 *               - footer: Footer (optional) in window border, string or
 *                 list. List should consist of `[text, highlight]` tuples.
 *                 If string, the default highlight group is `FloatFooter`.
 *               - footer_pos: Footer position. Must be set with `footer`
 *                 option. Value can be one of "left", "center", or "right".
 *                 Default is `"left"`.
 *               - noautocmd: If true then all autocommands are blocked for
 *                 the duration of the call.
 *               - fixed: If true when anchor is NW or SW, the float window
 *                 would be kept fixed even if the window would be truncated.
 *               - hide: If true the floating window will be hidden.
 *               - vertical: Split vertically `:vertical`.
 *               - split: Split direction: "left", "right", "above", "below".
 *
 * Return:
 *     Window handle, or 0 on error
 */
export function nvim_open_win(
  denops: Denops,
  buffer: number,
  enter: boolean,
  config: NvimOpenWinConfig,
): Promise<number>;
export function nvim_open_win(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_open_win", ...args);
}

export interface NvimOpenWinConfig {
  /**
   * Sets the window layout to "floating", placed at (row,col) coordinates
   * relative to:
   * - "editor" The global editor grid
   * - "win" Window given by the `win` field, or current window.
   * - "cursor" Cursor position in current window.
   * - "mouse" Mouse position
   */
  relative: "editor" | "win" | "cursor" | "mouse";

  /**
   * `window-ID` for relative="win"
   */
  win?: number;

  /**
   * Decides which corner of the float to place at (row,col):
   * - "NW" northwest (default)
   * - "NE" northeast
   * - "SW" southwest
   * - "SE" southeast
   */
  anchor?: "NW" | "NE" | "SW" | "SE";

  /**
   * Window width (in character cells). Minimum of 1.
   */
  width: number;

  /**
   * Window height (in character cells). Minimum of 1.
   */
  height: number;

  /**
   * Places float relative to buffer text (only when
   * relative="win"). Takes a tuple of zero-indexed [line,
   * column]. `row` and `col` if given are applied relative to this position, else they
   * default to:
   * - `row=1` and `col=0` if `anchor` is "NW" or "NE"
   * - `row=0` and `col=0` if `anchor` is "SW" or "SE" (thus
   *   like a tooltip near the buffer text).
   */
  bufpos?: readonly [row: number, col: number];

  /**
   * Row position in units of "screen cell height", may be
   * fractional.
   */
  row: number;

  /**
   * Column position in units of "screen cell width", may
   * be fractional.
   */
  col: number;

  /**
   * Enable focus by user actions (wincmds, mouse
   * events). Defaults to true. Non-focusable windows can be
   * entered by `nvim_set_current_win()`.
   */
  focusable?: boolean;

  /**
   * GUI should display the window as an external
   * top-level window. Currently accepts no other positioning
   * configuration together with this.
   */
  external?: boolean;

  /**
   * Stacking order. floats with higher `zindex` go on top on floats with lower indices. Must be larger
   * than zero. The following screen elements have hard-coded
   * z-indices:
   * - 100: insert completion popupmenu
   * - 200: message scrollback
   * - 250: cmdline completion popupmenu (when
   *   wildoptions+=pum) The default value for floats are 50.
   *   In general, values below 100 are recommended, unless
   *   there is a good reason to overshadow builtin elements.
   */
  zindex?: number;

  /**
   * Configure the appearance of the window. Currently
   * only takes one non-empty value:
   * - "minimal" Nvim will display the window with many UI
   *   options disabled. This is useful when displaying a
   *   temporary float where the text should not be edited.
   *   Disables 'number', 'relativenumber', 'cursorline',
   *   'cursorcolumn', 'foldcolumn', 'spell' and 'list'
   *   options. 'signcolumn' is changed to `auto` and
   *   'colorcolumn' is cleared. 'statuscolumn' is changed to
   *   empty. The end-of-buffer region is hidden by setting
   *   `eob` flag of 'fillchars' to a space char, and clearing
   *   the `hl-EndOfBuffer` region in 'winhighlight'.
   */
  style?: "minimal";

  /**
   * Style of (optional) window border. This can either
   * be a string or an array. The string values are
   * - "none": No border (default).
   * - "single": A single line box.
   * - "double": A double line box.
   * - "rounded": Like "single", but with rounded corners ("╭"
   *   etc.).
   * - "solid": Adds padding by a single whitespace cell.
   * - "shadow": A drop shadow effect by blending with the
   *   background.
   * - If it is an array, it should have a length of eight or
   *   any divisor of eight. The array will specifify the eight
   *   chars building up the border in a clockwise fashion
   *   starting with the top-left corner. As an example, the
   *   double box style could be specified as [ "╔", "═" ,"╗",
   *   "║", "╝", "═", "╚", "║" ]. If the number of chars are
   *   less than eight, they will be repeated. Thus an ASCII
   *   border could be specified as [ "/", "-", "\\", "|" ], or
   *   all chars the same as [ "x" ]. An empty string can be
   *   used to turn off a specific border, for instance, [ "",
   *   "", "", ">", "", "", "", `"<"` ] will only make vertical
   *   borders but not horizontal ones. By default,
   *   `FloatBorder` highlight is used, which links to
   *   `WinSeparator` when not defined. It could also be
   *   specified by character: [ ["+", "MyCorner"], ["x",
   *   "MyBorder"] ].
   */
  border?:
    | "none"
    | "single"
    | "double"
    | "rounded"
    | "solid"
    | "shadow"
    | BorderArray;

  /**
   * Title (optional) in window border, String or list.
   * List is [text, highlight] tuples. if is string the default
   * highlight group is `FloatTitle`.
   */
  title?: string | readonly [text: string, highlight: string];

  /**
   * Title position must set with title option.
   * value can be of `left` `center` `right` default is left.
   */
  title_pos?: "left" | "center" | "right";

  /**
   * If true then no buffer-related autocommand
   * events such as `BufEnter`, `BufLeave` or `BufWinEnter` may
   * fire from calling this function.
   */
  noautocmd?: boolean;
}

type BorderArray =
  | readonly [string]
  | readonly [string, string]
  | readonly [string, string, string, string]
  | readonly [
    topleft: string,
    top: string,
    topright: string,
    right: string,
    botright: string,
    bottom: string,
    botleft: string,
    left: string,
  ]
  | readonly [readonly [string, string]]
  | readonly [readonly [string, string], readonly [string, string]]
  | readonly [
    readonly [string, string],
    readonly [string, string],
    readonly [string, string],
    readonly [string, string],
  ]
  | readonly [
    readonly [topleft: string, highlight: string],
    readonly [top: string, highlight: string],
    readonly [topright: string, highlight: string],
    readonly [right: string, highlight: string],
    readonly [botright: string, highlight: string],
    readonly [bottom: string, highlight: string],
    readonly [botleft: string, highlight: string],
    readonly [left: string, highlight: string],
  ];
