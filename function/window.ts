import type { Denops } from "../mod.ts";

export interface WinInfo {
  /**
   * last complete displayed buffer line
   */
  botline: number;
  /**
   * number of buffer in the window
   */
  bufnr: number;
  /**
   * window height (excluding winbar)
   */
  height: number;
  /**
   * 1 if showing a location list
   */
  loclist: number;
  /**
   * 1 if quickfix or location list window
   */
  quickfix: number;
  /**
   * 1 if a terminal window
   */
  terminal: number;
  /**
   * tab page number
   */
  tabnr: number;
  /**
   * first displayed buffer line
   */
  topline: number;
  /**
   * a reference to the dictionary with window-local variables
   */
  variables: Record<string, unknown>;
  /**
   * window width
   */
  width: number;
  /**
   * 1 if the window has a toolbar, 0 otherwise
   */
  winbar: number;
  /**
   * leftmost screen column of the window; "col" from `win_screenpos()`
   */
  wincol: number;
  /**
   * number of columns occupied by any 'foldcolumn', 'signcolumn' and line number in front of the text
   */
  textoff: number;
  /**
   * `window-ID`
   */
  winid: number;
  /**
   * window number
   */
  winnr: number;
  /**
   * topmost screen line of the window; "row" from `win_screenpos()`
   */
  winrow: number;
}

/**
 * Returns information about windows as a `List` with Dictionaries.
 *
 * If **{winid}** is given Information about the window with that ID
 * is returned, as a `List` with one item.  If the window does not
 * exist the result is an empty list.
 *
 * Without **{winid}** information about all the windows in all the
 * tab pages is returned.
 *
 * Each List item is a `Dictionary` with the following entries:
 *         botline         last complete displayed buffer line
 *         bufnr           number of buffer in the window
 *         height          window height (excluding winbar)
 *         leftcol         first column displayed; only used when
 *                         'wrap' is off
 *         loclist         1 if showing a location list
 *                         *only with the +quickfix feature*
 *         quickfix        1 if quickfix or location list window
 *                         *only with the +quickfix feature*
 *         terminal        1 if a terminal window
 *                         *only with the +terminal feature*
 *         tabnr           tab page number
 *         topline         first displayed buffer line
 *         variables       a reference to the dictionary with
 *                         window-local variables
 *         width           window width
 *         winbar          1 if the window has a toolbar, 0
 *                         otherwise
 *         wincol          leftmost screen column of the window;
 *                         "col" from `win_screenpos()`
 *         textoff         number of columns occupied by any
 *                         'foldcolumn', 'signcolumn' and line
 *                         number in front of the text
 *         winid           `window-ID`
 *         winnr           window number
 *         winrow          topmost screen line of the window;
 *                         "row" from `win_screenpos()`
 *
 * Can also be used as a `method`:
 *
 *     GetWinnr()->getwininfo()
 *
 * Return type: list<dict<any>>
 */
export function getwininfo(denops: Denops, winid?: number): Promise<WinInfo[]>;
export function getwininfo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwininfo", ...args);
}

/**
 * The result is a `List` with two numbers, the result of
 * `getwinposx()` and `getwinposy()` combined:
 *         [x-pos, y-pos]
 * **{timeout}** can be used to specify how long to wait in msec for
 * a response from the terminal.  When omitted 100 msec is used.
 * Use a longer time for a remote terminal.
 * When using a value less than 10 and no response is received
 * within that time, a previously reported position is returned,
 * if available.  This can be used to poll for the position and
 * do some work in the meantime:
 *
 *     while 1
 *       let res = getwinpos(1)
 *       if res[0] >= 0
 *         break
 *       endif
 *       " Do some work here
 *     endwhile
 *
 * Can also be used as a `method`:
 *
 *     GetTimeout()->getwinpos()
 *
 * Return type: list<number>
 */
export function getwinpos(
  denops: Denops,
  timeout?: number,
): Promise<[x: number, y: number]>;
export function getwinpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwinpos", ...args);
}
