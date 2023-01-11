import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";
import type { Position, ScreenPos } from "./types.ts";

/**
 * The result is a Number, which is the byte index of the column
 * position given with {expr}.  The accepted positions are:
 *     .	    the cursor position
 *     $	    the end of the cursor line (the result is the
 * 	    number of bytes in the cursor line plus one)
 *     'x	    position of mark x (if the mark is not set, 0 is
 * 	    returned)
 *     v       In Visual mode: the start of the Visual area (the
 * 	    cursor is the end).  When not in Visual mode
 * 	    returns the cursor position.  Differs from |'<| in
 * 	    that it's updated right away.
 * Additionally {expr} can be [lnum, col]: a |List| with the line
 * and column number. Most useful when the column is "$", to get
 * the last column of a specific line.  When "lnum" or "col" is
 * out of range then col() returns zero.
 * To get the line number use |line()|.  To get both use
 * |getpos()|.
 * For the screen column position use |virtcol()|.
 * Note that only marks in the current file can be used.
 * Examples:
 * 	col(".")		column of cursor
 * 	col("$")		length of cursor line plus one
 * 	col("'t")		column of mark t
 * 	col("'" . markname)	column of mark markname
 * The first column is 1.  0 is returned for an error.
 * For an uppercase mark the column may actually be in another
 * buffer.
 * For the cursor position, when 'virtualedit' is active, the
 * column is one higher if the cursor is after the end of the
 * line.  This can be used to obtain the column in Insert mode:
 * 	:imap <F2> <C-O>:let save_ve = &ve<CR
 * 		\<C-O>:set ve=all<CR
 * 		\<C-O>:echo col(".") . "\n" <Bar
 * 		\let &ve = save_ve<CR
 * 	GetPos()->col()
 */
export async function col(
  denops: Denops,
  expr:
    | string
    | [number | string, number | string],
): Promise<number> {
  return await denops.call("col", expr) as number;
}

/**
 * The result is a Number, which is the screen column of the file
 * position given with {expr}.  That is, the last screen position
 * occupied by the character at that position, when the screen
 * would be of unlimited width.  When there is a <Tab> at the
 * position, the returned Number will be the column at the end of
 * the <Tab>.  For example, for a <Tab> in column 1, with 'ts'
 * set to 8, it returns 8. |conceal| is ignored.
 * For the byte position use |col()|.
 * For the use of {expr} see |col()|.
 * When 'virtualedit' is used {expr} can be [lnum, col, off], where
 * "off" is the offset in screen columns from the start of the
 * character.  E.g., a position within a <Tab> or after the last
 * character.  When "off" is omitted zero is used.
 * When Virtual editing is active in the current mode, a position
 * beyond the end of the line can be returned. |'virtualedit'|
 * The accepted positions are:
 *     .	    the cursor position
 *     $	    the end of the cursor line (the result is the
 * 	    number of displayed characters in the cursor line
 * 	    plus one)
 *     'x	    position of mark x (if the mark is not set, 0 is
 * 	    returned)
 *     v       In Visual mode: the start of the Visual area (the
 * 	    cursor is the end).  When not in Visual mode
 * 	    returns the cursor position.  Differs from |'<| in
 * 	    that it's updated right away.
 * Note that only marks in the current file can be used.
 * Examples:
 *   virtcol(".")	   with text "foo^Lbar", with cursor on the "^L", returns 5
 *   virtcol("$")	   with text "foo^Lbar", returns 9
 *   virtcol("'t")    with text "	  there", with 't at 'h', returns 6
 * The first column is 1.  0 is returned for an error.
 * A more advanced example that echoes the maximum length of
 * all lines:
 *     echo max(map(range(1, line('$')), "virtcol([v:val, '$'])"))
 * Can also be used as a |method|:
 * 	GetPos()->virtcol()
 */
export async function virtcol(
  denops: Denops,
  expr:
    | string
    | [
      lnum: number | string,
      col: number | string,
      off?: number,
    ],
): Promise<number> {
  return await denops.call("virtcol", expr) as number;
}

/**
 * The result is a Number, which is the line number of the file
 * position given with {expr}.  The accepted positions are:
 *     .	    the cursor position
 *     $	    the last line in the current buffer
 *     'x	    position of mark x (if the mark is not set, 0 is
 * 	    returned)
 *     w0	    first line visible in current window (one if the
 * 	    display isn't updated, e.g. in silent Ex mode)
 *     w$	    last line visible in current window (this is one
 * 	    less than "w0" if no lines are visible)
 *     v	    In Visual mode: the start of the Visual area (the
 * 	    cursor is the end).  When not in Visual mode
 * 	    returns the cursor position.  Differs from |'<| in
 * 	    that it's updated right away.
 * Note that a mark in another file can be used.  The line number
 * then applies to another buffer.
 * To get the column number use |col()|.  To get both use
 * |getpos()|.
 * Examples:
 * 	line(".")		line number of the cursor
 * 	line("'t")		line number of mark t
 * 	line("'" . marker)	line number of mark marker
 * To jump to the last known position when opening a file see
 * |last-position-jump|.
 * Can also be used as a |method|:
 * 	GetValue()->line()
 */
export async function line(denops: Denops, expr: string): Promise<number> {
  return await denops.call("line", expr) as number;
}

/**
 * The result is a Number, which is the virtual column of the
 * cursor in the window.  This is counting screen cells from the
 * left side of the window.  The leftmost column is one.
 */
export async function wincol(denops: Denops): Promise<number> {
  return await denops.call("wincol") as number;
}

/**
 * The result is a Number, which is the screen line of the cursor
 * in the window.  This is counting screen lines from the top of
 * the window.  The first line is one.
 * If the cursor was moved the view on the file will be updated
 * first, this may cause a scroll.
 */
export async function winline(denops: Denops): Promise<number> {
  return await denops.call("winline") as number;
}

/**
 * Positions the cursor at the column (byte count) {col} in the
 * line {lnum}.  The first column is one.
 * When there is one argument {list} this is used as a |List|
 * with two, three or four item:
 * 	[{lnum}, {col}]
 * 	[{lnum}, {col}, {off}]
 * 	[{lnum}, {col}, {off}, {curswant}]
 * This is like the return value of |getpos()| or |getcurpos()|,
 * but without the first item.
 * Does not change the jumplist.
 * If {lnum} is greater than the number of lines in the buffer,
 * the cursor will be positioned at the last line in the buffer.
 * If {lnum} is zero, the cursor will stay in the current line.
 * If {col} is greater than the number of bytes in the line,
 * the cursor will be positioned at the last character in the
 * line.
 * If {col} is zero, the cursor will stay in the current column.
 * If {curswant} is given it is used to set the preferred column
 * for vertical movement.  Otherwise {col} is used.
 * When 'virtualedit' is used {off} specifies the offset in
 * screen columns from the start of the character.  E.g., a
 * position within a <Tab> or after the last character.
 * Returns 0 when the position could be set, -1 otherwise.
 * Can also be used as a |method|:
 * 	GetCursorPos()->cursor()
 */
export async function cursor(
  denops: Denops,
  lnum: number,
  col: number,
  off?: number,
): Promise<number>;
export async function cursor(
  denops: Denops,
  list: [lnum: number, col: number, off?: number, curswant?: number],
): Promise<number>;
export async function cursor(
  denops: Denops,
  lnumOrList: number | [
    lnum: number,
    col: number,
    off?: number,
    curswant?: number,
  ],
  col?: number,
  off?: number,
): Promise<number> {
  return await denops.call("cursor", lnumOrList, col, off) as number;
}

/**
 * The result is a Dict with the screen position of the text
 * character in window {winid} at buffer line {lnum} and column
 * {col}.  {col} is a one-based byte index.
 * The Dict has these members:
 * 	row	screen row
 * 	col	first screen column
 * 	endcol	last screen column
 * 	curscol	cursor screen column
 * If the specified position is not visible, all values are zero.
 * The "endcol" value differs from "col" when the character
 * occupies more than one screen cell.  E.g. for a Tab "col" can
 * be 1 and "endcol" can be 8.
 * The "curscol" value is where the cursor would be placed.  For
 * a Tab it would be the same as "endcol", while for a double
 * width character it would be the same as "col".
 * Can also be used as a |method|:
 * 	GetWinid()->screenpos(lnum, col)
 */
export async function screenpos(
  denops: Denops,
  winid: number | string,
  lnum: number,
  col: number,
): Promise<Partial<ScreenPos>> {
  return await denops.call("screenpos", winid, lnum, col) as ScreenPos;
}

/**
 * Get the position of the cursor.  This is like getpos('.'), but
 * includes an extra item in the list:
 *     [bufnum, lnum, col, off, curswant] ~
 * The "curswant" number is the preferred column when moving the
 * cursor vertically.  Also see |getpos()|.
 * This can be used to save and restore the cursor position:
 * 	let save_cursor = getcurpos()
 * 	MoveTheCursorAround
 * 	call setpos('.', save_cursor)
 * Note that this only works within the window.  See
 * |winrestview()| for restoring more state.
 */
export async function getcurpos(
  denops: Denops,
): Promise<Position> {
  return await denops.call("getcurpos") as Position;
}

/**
 * Get the position for {expr}.  For possible values of {expr}
 * see |line()|.  For getting the cursor position see
 * |getcurpos()|.
 * The result is a |List| with four numbers:
 *     [bufnum, lnum, col, off]
 * "bufnum" is zero, unless a mark like '0 or 'A is used, then it
 * is the buffer number of the mark.
 * "lnum" and "col" are the position in the buffer.  The first
 * column is 1.
 * The "off" number is zero, unless 'virtualedit' is used.  Then
 * it is the offset in screen columns from the start of the
 * character.  E.g., a position within a <Tab> or after the last
 * character.
 * Note that for '< and '> Visual mode matters: when it is "V"
 * (visual line mode) the column of '< is zero and the column of
 * '> is a large number.
 * This can be used to save and restore the position of a mark:
 * 	let save_a_mark = getpos("'a")
 * 	...
 * 	call setpos("'a", save_a_mark)
 * Also see |getcurpos()| and |setpos()|.
 * Can also be used as a |method|:
 * 	GetMark()->getpos()
 */
export async function getpos(denops: Denops, expr: string): Promise<Position> {
  return await denops.call("getpos", expr) as Position;
}

/**
 * Set the position for {expr}.  Possible values:
 * 	.	the cursor
 * 	'x	mark x
 * {list} must be a |List| with four or five numbers:
 *     [bufnum, lnum, col, off]
 *     [bufnum, lnum, col, off, curswant]
 * "bufnum" is the buffer number.  Zero can be used for the
 * current buffer.  When setting an uppercase mark "bufnum" is
 * used for the mark position.  For other marks it specifies the
 * buffer to set the mark in.  You can use the |bufnr()| function
 * to turn a file name into a buffer number.
 * For setting the cursor and the ' mark "bufnum" is ignored,
 * since these are associated with a window, not a buffer.
 * Does not change the jumplist.
 * "lnum" and "col" are the position in the buffer.  The first
 * column is 1.  Use a zero "lnum" to delete a mark.  If "col" is
 * smaller than 1 then 1 is used.
 * The "off" number is only used when 'virtualedit' is set. Then
 * it is the offset in screen columns from the start of the
 * character.  E.g., a position within a <Tab> or after the last
 * character.
 * The "curswant" number is only used when setting the cursor
 * position.  It sets the preferred column for when moving the
 * cursor vertically.  When the "curswant" number is missing the
 * preferred column is not set.  When it is present and setting a
 * mark position it is not used.
 * Note that for '< and '> changing the line number may result in
 * the marks to be effectively be swapped, so that '< is always
 * before '>.
 * Returns 0 when the position could be set, -1 otherwise.
 * An error message is given if {expr} is invalid.
 * Also see |getpos()| and |getcurpos()|.
 * This does not restore the preferred column for moving
 * vertically; if you set the cursor position with this, |j| and
 * |k| motions will jump to previous columns!  Use |cursor()| to
 * also set the preferred column.  Also see the "curswant" key in
 * |winrestview()|.
 * Can also be used as a |method|:
 * 	GetPosition()->setpos('.')
 */
export async function setpos(
  denops: Denops,
  expr: string,
  list: Position,
): Promise<number> {
  return await denops.call("setpos", expr, list) as number;
}

/**
 * Return the line number that contains the character at byte
 * count {byte} in the current buffer.  This includes the
 * end-of-line character, depending on the 'fileformat' option
 * for the current buffer.  The first character has byte count
 * one.
 * Also see |line2byte()|, |go| and |:goto|.
 * Can also be used as a |method|:
 * 	GetOffset()->byte2line()
 * {not available when compiled without the |+byte_offset|
 * feature}
 */
export async function byte2line(denops: Denops, byte: number): Promise<number> {
  return await denops.call("byte2line", byte) as number;
}

/**
 * Return the byte count from the start of the buffer for line
 * {lnum}.  This includes the end-of-line character, depending on
 * the 'fileformat' option for the current buffer.  The first
 * line returns 1. 'encoding' matters, 'fileencoding' is ignored.
 * This can also be used to get the byte count for the line just
 * below the last line:
 * 	line2byte(line("$") + 1)
 * This is the buffer size plus one.  If 'fileencoding' is empty
 * it is the file size plus one.
 * When {lnum} is invalid, or the |+byte_offset| feature has been
 * disabled at compile time, -1 is returned.
 * Also see |byte2line()|, |go| and |:goto|.
 * Can also be used as a |method|:
 * 	GetLnum()->line2byte()
 */
export async function line2byte(denops: Denops, lnum: number): Promise<number> {
  return await denops.call("line2byte", lnum) as number;
}

/**
 * Returns the number of filler lines above line {lnum}.
 * These are the lines that were inserted at this point in
 * another diff'ed window.  These filler lines are shown in the
 * display but don't exist in the buffer.
 * {lnum} is used like with |getline()|.  Thus "." is the current
 * line, "'m" mark m, etc.
 * Returns 0 if the current window is not in diff mode.
 * Can also be used as a |method|:
 * 	GetLnum()->diff_filler()
 */
// deno-lint-ignore camelcase
export async function diff_filler(
  denops: Denops,
  lnum: number | string,
): Promise<number> {
  return await denops.call("diff_filler", lnum) as number;
}
