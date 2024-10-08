// NOTE: This file is generated. Do NOT modify it manually.
import type {
  BufferLocalOption,
  GlobalOption,
  GlobalOrWindowLocalOption,
  WindowLocalOption,
} from "../types.ts";
import { BooleanOption, NumberOption, StringOption } from "../_utils.ts";

/**
 * `channel` connected to the buffer, or 0 if no channel is connected.
 * In a `:terminal` buffer this is the terminal channel.
 * Read-only.
 *
 * (default 0)
 */
export const channel: BufferLocalOption<number> = new NumberOption("channel");

/**
 * When nonempty, shows the effects of `:substitute`, `:smagic`,
 * `:snomagic` and user commands with the `:command-preview` flag as you
 * type.
 *
 * Possible values:
 *         nosplit Shows the effects of a command incrementally in the
 *                 buffer.
 *         split   Like "nosplit", but also shows partial off-screen
 *                 results in a preview window.
 *
 * If the preview for built-in commands is too slow (exceeds
 * 'redrawtime') then 'inccommand' is automatically disabled until
 * `Command-line-mode` is done.
 *
 * (default "nosplit")
 */
export const inccommand: GlobalOption<string> = new StringOption("inccommand");

/**
 * This option controls the number of lines / columns to scroll by when
 * scrolling with a mouse wheel (`scroll-mouse-wheel`). The option is
 * a comma-separated list. Each part consists of a direction and a count
 * as follows:
 *         direction:count,direction:count
 * Direction is one of either "hor" or "ver". "hor" controls horizontal
 * scrolling and "ver" controls vertical scrolling. Count sets the amount
 * to scroll by for the given direction, it should be a non negative
 * integer. Each direction should be set at most once. If a direction
 * is omitted, a default value is used (6 for horizontal scrolling and 3
 * for vertical scrolling). You can disable mouse scrolling by using
 * a count of 0.
 *
 * Example:
 *
 *     set mousescroll=ver:5,hor:2
 *
 * Will make Nvim scroll 5 lines at a time when scrolling vertically, and
 * scroll 2 columns at a time when scrolling horizontally.
 *
 * (default "ver:3,hor:6")
 */
export const mousescroll: GlobalOption<string> = new StringOption(
  "mousescroll",
);

/**
 * Enables pseudo-transparency for the `popup-menu`. Valid values are in
 * the range of 0 for fully opaque popupmenu (disabled) to 100 for fully
 * transparent background. Values between 0-30 are typically most useful.
 *
 * It is possible to override the level for individual highlights within
 * the popupmenu using `highlight-blend`. For instance, to enable
 * transparency but force the current selected element to be fully opaque:
 *
 *     set pumblend=15
 *     hi PmenuSel blend=0
 *
 * UI-dependent. Works best with RGB colors. 'termguicolors'
 *
 * (default 0)
 */
export const pumblend: GlobalOption<number> = new NumberOption("pumblend");

/**
 * Flags to change the way redrawing works, for debugging purposes.
 * Most useful with 'writedelay' set to some reasonable value.
 * Supports the following flags:
 *     compositor  Indicate each redraw event handled by the compositor
 *                 by briefly flashing the redrawn regions in colors
 *                 indicating the redraw type. These are the highlight
 *                 groups used (and their default colors):
 *         RedrawDebugNormal   gui=reverse   normal redraw passed through
 *         RedrawDebugClear    guibg=Yellow  clear event passed through
 *         RedrawDebugComposed guibg=Green   redraw event modified by the
 *                                           compositor (due to
 *                                           overlapping grids, etc)
 *         RedrawDebugRecompose guibg=Red    redraw generated by the
 *                                           compositor itself, due to a
 *                                           grid being moved or deleted.
 *     line        introduce a delay after each line drawn on the screen.
 *                 When using the TUI or another single-grid UI, "compositor"
 *                 gives more information and should be preferred (every
 *                 line is processed as a separate event by the compositor)
 *     flush       introduce a delay after each "flush" event.
 *     nothrottle  Turn off throttling of the message grid. This is an
 *                 optimization that joins many small scrolls to one
 *                 larger scroll when drawing the message area (with
 *                 'display' msgsep flag active).
 *     invalid     Enable stricter checking (abort) of inconsistencies
 *                 of the internal screen state. This is mostly
 *                 useful when running nvim inside a debugger (and
 *                 the test suite).
 *     nodelta     Send all internally redrawn cells to the UI, even if
 *                 they are unchanged from the already displayed state.
 *
 * (default "")
 */
export const redrawdebug: GlobalOption<string> = new StringOption(
  "redrawdebug",
);

/**
 * Maximum number of lines kept beyond the visible screen. Lines at the
 * top are deleted if new lines exceed this limit.
 * Minimum is 1, maximum is 100000.
 * Only in `terminal` buffers.
 *
 * (default 10000)
 */
export const scrollback: BufferLocalOption<number> = new NumberOption(
  "scrollback",
);

/**
 * When non-empty, the shada file is read upon startup and written
 * when exiting Vim (see `shada-file`).  The string should be a comma-
 * separated list of parameters, each consisting of a single character
 * identifying the particular parameter, followed by a number or string
 * which specifies the value of that parameter.  If a particular
 * character is left out, then the default value is used for that
 * parameter.  The following is a list of the identifying characters and
 * the effect of their value.
 * CHAR    VALUE
 *
 * !       When included, save and restore global variables that start
 *         with an uppercase letter, and don't contain a lowercase
 *         letter.  Thus "KEEPTHIS and "K_L_M" are stored, but "KeepThis"
 *         and "_K_L_M" are not.  Nested List and Dict items may not be
 *         read back correctly, you end up with an empty item.
 *
 * "       Maximum number of lines saved for each register.  Old name of
 *         the `'<'` item, with the disadvantage that you need to put a
 *         backslash before the ", otherwise it will be recognized as the
 *         start of a comment!
 *
 * %       When included, save and restore the buffer list.  If Vim is
 *         started with a file name argument, the buffer list is not
 *         restored.  If Vim is started without a file name argument, the
 *         buffer list is restored from the shada file.  Quickfix
 *         ('buftype'), unlisted ('buflisted'), unnamed and buffers on
 *         removable media (`shada-r`) are not saved.
 *         When followed by a number, the number specifies the maximum
 *         number of buffers that are stored.  Without a number all
 *         buffers are stored.
 *
 * '       Maximum number of previously edited files for which the marks
 *         are remembered.  This parameter must always be included when
 *         'shada' is non-empty.
 *         Including this item also means that the `jumplist` and the
 *         `changelist` are stored in the shada file.
 *
 * /       Maximum number of items in the search pattern history to be
 *         saved.  If non-zero, then the previous search and substitute
 *         patterns are also saved.  When not included, the value of
 *         'history' is used.
 *
 * :       Maximum number of items in the command-line history to be
 *         saved.  When not included, the value of 'history' is used.
 *
 * <       Maximum number of lines saved for each register.  If zero then
 *         registers are not saved.  When not included, all lines are
 *         saved.  '"' is the old name for this item.
 *         Also see the 's' item below: limit specified in KiB.
 *
 * @       Maximum number of items in the input-line history to be
 *         saved.  When not included, the value of 'history' is used.
 *
 * c       Dummy option, kept for compatibility reasons.  Has no actual
 *         effect: ShaDa always uses UTF-8 and 'encoding' value is fixed
 *         to UTF-8 as well.
 *
 * f       Whether file marks need to be stored.  If zero, file marks ('0
 *         to '9, 'A to 'Z) are not stored.  When not present or when
 *         non-zero, they are all stored.  '0 is used for the current
 *         cursor position (when exiting or when doing `:wshada`).
 *
 * h       Disable the effect of 'hlsearch' when loading the shada
 *         file.  When not included, it depends on whether ":nohlsearch"
 *         has been used since the last search command.
 *
 * n       Name of the shada file.  The name must immediately follow
 *         the 'n'.  Must be at the end of the option!  If the
 *         'shadafile' option is set, that file name overrides the one
 *         given here with 'shada'.  Environment variables are
 *         expanded when opening the file, not when setting the option.
 *
 * r       Removable media.  The argument is a string (up to the next
 *         ',').  This parameter can be given several times.  Each
 *         specifies the start of a path for which no marks will be
 *         stored.  This is to avoid removable media.  For Windows you
 *         could use "ra:,rb:".  You can also use it for temp files,
 *         e.g., for Unix: "r/tmp".  Case is ignored.
 *
 * s       Maximum size of an item contents in KiB.  If zero then nothing
 *         is saved.  Unlike Vim this applies to all items, except for
 *         the buffer list and header.  Full item size is off by three
 *         unsigned integers: with `s10` maximum item size may be 1 byte
 *         (type: 7-bit integer) + 9 bytes (timestamp: up to 64-bit
 *         integer) + 3 bytes (item size: up to 16-bit integer because
 *         2^8 < 10240 < 2^16) + 10240 bytes (requested maximum item
 *         contents size) = 10253 bytes.
 *
 * Example:
 *
 *     set shada='50,<1000,s100,:0,n~/nvim/shada
 *
 * '50             Marks will be remembered for the last 50 files you
 *                 edited.
 * <1000           Contents of registers (up to 1000 lines each) will be
 *                 remembered.
 * s100            Items with contents occupying more then 100 KiB are
 *                 skipped.
 * :0              Command-line history will not be saved.
 * `n~/nvim/shada`   The name of the file to use is `"~/nvim/shada"`.
 * no /            Since '/' is not specified, the default will be used,
 *                 that is, save all of the search history, and also the
 *                 previous search and substitute patterns.
 * no %            The buffer list will not be saved nor read back.
 * no h            'hlsearch' highlighting will be restored.
 *
 * When setting 'shada' from an empty value you can use `:rshada` to
 * load the contents of the file, this is not done automatically.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default for
 *  Win32:  !,'100,<50,s10,h,rA:,rB:
 *  others: !,'100,<50,s10,h)
 */
export const shada: GlobalOption<string> = new StringOption("shada");

/**
 * When non-empty, overrides the file name used for `shada` (viminfo).
 * When equal to "NONE" no shada file will be read or written.
 * This option can be set with the `-i` command line flag.  The `--clean`
 * command line flag sets it to "NONE".
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 */
export const shadafile: GlobalOption<string> = new StringOption("shadafile");

/**
 * EXPERIMENTAL
 * When non-empty, this option determines the content of the area to the
 * side of a window, normally containing the fold, sign and number columns.
 * The format of this option is like that of 'statusline'.
 *
 * Some of the items from the 'statusline' format are different for
 * 'statuscolumn':
 *
 * %l      line number of currently drawn line
 * %r      relative line number of currently drawn line
 * %s      sign column for currently drawn line
 * %C      fold column for currently drawn line
 *
 * The 'statuscolumn' width follows that of the default columns and
 * adapts to the `'numberwidth'`, `'signcolumn'` and `'foldcolumn'` option
 * values (regardless of whether the sign and fold items are present).
 * Additionally, the 'statuscolumn' grows with the size of the evaluated
 * format string, up to a point (following the maximum size of the default
 * fold, sign and number columns). Shrinking only happens when the number
 * of lines in a buffer changes, or the 'statuscolumn' option is set.
 *
 * The `v:lnum`    variable holds the line number to be drawn.
 * The `v:relnum`  variable holds the relative line number to be drawn.
 * The `v:virtnum` variable is negative when drawing virtual lines, zero
 *               when drawing the actual buffer line, and positive when
 *               drawing the wrapped part of a buffer line.
 *
 * When using `v:relnum`, keep in mind that cursor movement by itself will
 * not cause the 'statuscolumn' to update unless `'relativenumber'` is set.
 *
 * NOTE: The %@ click execute function item is supported as well but the
 * specified function will be the same for each row in the same column.
 * It cannot be switched out through a dynamic 'statuscolumn' format, the
 * handler should be written with this in mind.
 *
 * Examples:
 *
 *     " Relative number with bar separator and click handlers:
 *     set statuscolumn=%@SignCb@%s%=%T%@NumCb@%r│%T
 *
 *     " Right aligned relative cursor line number:
 *     let &stc='%=%{v:relnum?v:relnum:v:lnum} '
 *
 *     " Line numbers in hexadecimal for non wrapped part of lines:
 *     let &stc='%=%{v:virtnum>0?"":printf("%x",v:lnum)} '
 *
 *     " Human readable line numbers with thousands separator:
 *     let &stc='%{substitute(v:lnum,"\\d\\zs\\ze\\'
 *                . '%(\\d\\d\\d\\)\\+$",",","g")}'
 *
 *     " Both relative and absolute line numbers with different
 *     " highlighting for odd and even relative numbers:
 *     let &stc='%#NonText#%{&nu?v:lnum:""}' .
 *      '%=%{&rnu&&(v:lnum%2)?"\ ".v:relnum:""}' .
 *      '%#LineNr#%{&rnu&&!(v:lnum%2)?"\ ".v:relnum:""}'
 *
 * WARNING: this expression is evaluated for each screen line so defining
 * an expensive expression can negatively affect render performance.
 *
 * (default "")
 */
export const statuscolumn: WindowLocalOption<string> = new StringOption(
  "statuscolumn",
);

/**
 * A comma-separated list of options for specifying control characters
 * to be removed from the text pasted into the terminal window. The
 * supported values are:
 *
 *    BS       Backspace
 *
 *    HT       TAB
 *
 *    FF       Form feed
 *
 *    ESC      Escape
 *
 *    DEL      DEL
 *
 *    C0       Other control characters, excluding Line feed and
 *             Carriage return < ' '
 *
 *    C1       Control characters 0x80...0x9F
 *
 * (default "BS,HT,ESC,DEL")
 */
export const termpastefilter: GlobalOption<string> = new StringOption(
  "termpastefilter",
);

/**
 * If the host terminal supports it, buffer all screen updates
 * made during a redraw cycle so that each screen is displayed in
 * the terminal all at once. This can prevent tearing or flickering
 * when the terminal updates faster than Nvim can redraw.
 *
 * (default on)
 */
export const termsync: GlobalOption<boolean> = new BooleanOption("termsync");

/**
 * When non-empty, this option enables the window bar and determines its
 * contents. The window bar is a bar that's shown at the top of every
 * window with it enabled. The value of 'winbar' is evaluated like with
 * 'statusline'.
 *
 * When changing something that is used in 'winbar' that does not trigger
 * it to be updated, use `:redrawstatus`.
 *
 * Floating windows do not use the global value of 'winbar'. The
 * window-local value of 'winbar' must be set for a floating window to
 * have a window bar.
 *
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * (default "")
 */
export const winbar: GlobalOrWindowLocalOption<string> = new StringOption(
  "winbar",
);

/**
 * Enables pseudo-transparency for a floating window. Valid values are in
 * the range of 0 for fully opaque window (disabled) to 100 for fully
 * transparent background. Values between 0-30 are typically most useful.
 *
 * UI-dependent. Works best with RGB colors. 'termguicolors'
 *
 * (default 0)
 */
export const winblend: WindowLocalOption<number> = new NumberOption("winblend");

/**
 * Window-local highlights.  Comma-delimited list of highlight
 * `group-name` pairs "**{hl-from}**:**{hl-to}**,..." where each **{hl-from}** is
 * a `highlight-groups` item to be overridden by **{hl-to}** group in
 * the window.
 *
 * Note: highlight namespaces take precedence over 'winhighlight'.
 * See `nvim_win_set_hl_ns()` and `nvim_set_hl()`.
 *
 * Highlights of vertical separators are determined by the window to the
 * left of the separator.  The 'tabline' highlight of a tabpage is
 * decided by the last-focused window of the tabpage.  Highlights of
 * the popupmenu are determined by the current window.  Highlights in the
 * message area cannot be overridden.
 *
 * Example: show a different color for non-current windows:
 *
 *     set winhighlight=Normal:MyNormal,NormalNC:MyNormalNC
 *
 * (default "")
 */
export const winhighlight: WindowLocalOption<string> = new StringOption(
  "winhighlight",
);
