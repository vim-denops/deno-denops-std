// NOTE: This file is generated. Do NOT modify it manually.
// deno-lint-ignore-file camelcase
import type { Denops } from "https://deno.land/x/denops_core@v3.2.2/mod.ts";

/**
 * Return the absolute value of {expr}.  When {expr} evaluates to
 * a |Float| abs() returns a |Float|.  When {expr} can be
 * converted to a |Number| abs() returns a |Number|.  Otherwise
 * abs() gives an error message and returns -1.
 * Examples:
 * 	echo abs(1.456)
 * 	1.456
 * 	echo abs(-5.456)
 * 	5.456
 * 	echo abs(-4)
 * 	4
 * Can also be used as a |method|:
 * 	Compute()->abs()
 * {only available when compiled with the |+float| feature}
 */
export function abs(denops: Denops, expr: unknown): Promise<unknown>;
export function abs(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("abs", ...args);
}

/**
 * Return the arc cosine of {expr} measured in radians, as a
 * |Float| in the range of [0, pi].
 * {expr} must evaluate to a |Float| or a |Number| in the range
 * [-1, 1].
 * Examples:
 * 	:echo acos(0)
 * 	1.570796
 * 	:echo acos(-0.5)
 * 	2.094395
 * Can also be used as a |method|:
 * 	Compute()->acos()
 * {only available when compiled with the |+float| feature}
 */
export function acos(denops: Denops, expr: unknown): Promise<unknown>;
export function acos(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("acos", ...args);
}

/**
 * Append the item {expr} to |List| or |Blob| {object}.  Returns
 * the resulting |List| or |Blob|.  Examples:
 * 	:let alist = add([1, 2, 3], item)
 * 	:call add(mylist, "woodstock")
 * Note that when {expr} is a |List| it is appended as a single
 * item.  Use |extend()| to concatenate |Lists|.
 * When {object} is a |Blob| then  {expr} must be a number.
 * Use |insert()| to add an item at another position.
 * Can also be used as a |method|:
 * 	mylist->add(val1)->add(val2)
 */
export function add(
  denops: Denops,
  object: unknown,
  expr: unknown,
): Promise<unknown>;
export function add(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("add", ...args);
}

/**
 * Bitwise AND on the two arguments.  The arguments are converted
 * to a number.  A List, Dict or Float argument causes an error.
 * Example:
 * 	:let flag = and(bits, 0x80)
 * Can also be used as a |method|:
 * 	:let flag = bits->and(0x80)
 */
export function and(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function and(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("and", ...args);
}

/**
 * When {text} is a |List|: Append each item of the |List| as a
 * text line below line {lnum} in the current buffer.
 * Otherwise append {text} as one text line below line {lnum} in
 * the current buffer.
 * Any type of item is accepted and converted to a String.
 * {lnum} can be zero to insert a line before the first one.
 * {lnum} is used like with |getline()|.
 * Returns 1 for failure ({lnum} out of range or out of memory),
 * 0 for success.  Example:
 * 	:let failed = append(line('$'), "# THE END")
 * 	:let failed = append(0, ["Chapter 1", "the beginning"])
 * Can also be used as a |method| after a List, the base is
 * passed as the second argument:
 * 	mylist->append(lnum)
 */
export function append(
  denops: Denops,
  lnum: unknown,
  text: unknown,
): Promise<unknown>;
export function append(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("append", ...args);
}

/**
 * Like |append()| but append the text in buffer {buf}.
 * This function works only for loaded buffers. First call
 * |bufload()| if needed.
 * For the use of {buf}, see |bufname()|.
 * {lnum} is used like with |append()|.  Note that using |line()|
 * would use the current buffer, not the one appending to.
 * Use "$" to append at the end of the buffer.
 * On success 0 is returned, on failure 1 is returned.
 * If {buf} is not a valid buffer or {lnum} is not valid, an
 * error message is given. Example:
 * 	:let failed = appendbufline(13, 0, "# THE START")
 * Can also be used as a |method| after a List, the base is
 * passed as the second argument:
 * 	mylist->appendbufline(buf, lnum)
 */
export function appendbufline(
  denops: Denops,
  buf: unknown,
  lnum: unknown,
  text: unknown,
): Promise<unknown>;
export function appendbufline(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("appendbufline", ...args);
}

/**
 * The result is the number of files in the argument list.  See
 * |arglist|.
 * If {winid} is not supplied, the argument list of the current
 * window is used.
 * If {winid} is -1, the global argument list is used.
 * Otherwise {winid} specifies the window of which the argument
 * list is used: either the window number or the window ID.
 * Returns -1 if the {winid} argument is invalid.
 */
export function argc(denops: Denops, winid?: unknown): Promise<unknown>;
export function argc(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("argc", ...args);
}

/**
 * The result is the current index in the argument list.  0 is
 * the first file.  argc() - 1 is the last one.  See |arglist|.
 */
export function argidx(denops: Denops): Promise<unknown>;
export function argidx(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("argidx", ...args);
}

/**
 * Return the argument list ID.  This is a number which
 * identifies the argument list being used.  Zero is used for the
 * global argument list.  See |arglist|.
 * Returns -1 if the arguments are invalid.
 * Without arguments use the current window.
 * With {winnr} only use this window in the current tab page.
 * With {winnr} and {tabnr} use the window in the specified tab
 * page.
 * {winnr} can be the window number or the |window-ID|.
 */
export function arglistid(
  denops: Denops,
  winnr?: unknown,
  tabnr?: unknown,
): Promise<unknown>;
export function arglistid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("arglistid", ...args);
}

/**
 * The result is the {nr}th file in the argument list.  See
 * |arglist|.  "argv(0)" is the first one.  Example:
 * 	:let i = 0
 * 	:while i < argc()
 * 	:  let f = escape(fnameescape(argv(i)), '.')
 * 	:  exe 'amenu Arg.' . f . ' :e ' . f . '<CR>'
 * 	:  let i = i + 1
 * 	:endwhile
 * Without the {nr} argument, or when {nr} is -1, a |List| with
 * the whole |arglist| is returned.
 * The {winid} argument specifies the window ID, see |argc()|.
 * For the Vim command line arguments see |v:argv|.
 */
export function argv(
  denops: Denops,
  nr?: unknown,
  winid?: unknown,
): Promise<unknown>;
export function argv(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("argv", ...args);
}

/**
 * Return the arc sine of {expr} measured in radians, as a |Float|
 * in the range of [-pi/2, pi/2].
 * {expr} must evaluate to a |Float| or a |Number| in the range
 * [-1, 1].
 * Examples:
 * 	:echo asin(0.8)
 * 	0.927295
 * 	:echo asin(-0.5)
 * 	-0.523599
 * Can also be used as a |method|:
 * 	Compute()->asin()
 * {only available when compiled with the |+float| feature}
 */
export function asin(denops: Denops, expr: unknown): Promise<unknown>;
export function asin(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("asin", ...args);
}

/**
 * Return the principal value of the arc tangent of {expr}, in
 * the range [-pi/2, +pi/2] radians, as a |Float|.
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo atan(100)
 * 	1.560797
 * 	:echo atan(-4.01)
 * 	-1.326405
 * Can also be used as a |method|:
 * 	Compute()->atan()
 * {only available when compiled with the |+float| feature}
 */
export function atan(denops: Denops, expr: unknown): Promise<unknown>;
export function atan(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("atan", ...args);
}

/**
 * Return the arc tangent of {expr1} / {expr2}, measured in
 * radians, as a |Float| in the range [-pi, pi].
 * {expr1} and {expr2} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo atan2(-1, 1)
 * 	-0.785398
 * 	:echo atan2(1, -1)
 * 	2.356194
 * Can also be used as a |method|:
 * 	Compute()->atan2(1)
 * {only available when compiled with the |+float| feature}
 */
export function atan2(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function atan2(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("atan2", ...args);
}

/**
 * Put up a file requester.  This only works when "has("browse")"
 * returns |TRUE| (only in some GUI versions).
 * The input fields are:
 *     {save}	when |TRUE|, select file to write
 *     {title}	title for the requester
 *     {initdir}	directory to start browsing in
 *     {default}	default file name
 * An empty string is returned when the "Cancel" button is hit,
 * something went wrong, or browsing is not possible.
 */
export function browse(
  denops: Denops,
  save: unknown,
  title: unknown,
  initdir: unknown,
  defaultValue: unknown,
): Promise<unknown>;
export function browse(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("browse", ...args);
}

/**
 * Put up a directory requester.  This only works when
 * "has("browse")" returns |TRUE| (only in some GUI versions).
 * On systems where a directory browser is not supported a file
 * browser is used.  In that case: select a file in the directory
 * to be used.
 * The input fields are:
 *     {title}	title for the requester
 *     {initdir}	directory to start browsing in
 * When the "Cancel" button is hit, something went wrong, or
 * browsing is not possible, an empty string is returned.
 */
export function browsedir(
  denops: Denops,
  title: unknown,
  initdir: unknown,
): Promise<unknown>;
export function browsedir(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("browsedir", ...args);
}

/**
 * Return byte index of the {nr}'th character in the String
 * {expr}.  Use zero for the first character, it then returns
 * zero.
 * If there are no multibyte characters the returned value is
 * equal to {nr}.
 * Composing characters are not counted separately, their byte
 * length is added to the preceding base character.  See
 * |byteidxcomp()| below for counting composing characters
 * separately.
 * Example :
 * 	echo matchstr(str, ".", byteidx(str, 3))
 * will display the fourth character.  Another way to do the
 * same:
 * 	let s = strpart(str, byteidx(str, 3))
 * 	echo strpart(s, 0, byteidx(s, 1))
 * Also see |strgetchar()| and |strcharpart()|.
 * If there are less than {nr} characters -1 is returned.
 * If there are exactly {nr} characters the length of the string
 * in bytes is returned.
 * Can also be used as a |method|:
 * 	GetName()->byteidx(idx)
 */
export function byteidx(
  denops: Denops,
  expr: unknown,
  nr: unknown,
): Promise<unknown>;
export function byteidx(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("byteidx", ...args);
}

/**
 * Like byteidx(), except that a composing character is counted
 * as a separate character.  Example:
 * 	let s = 'e' . nr2char(0x301)
 * 	echo byteidx(s, 1)
 * 	echo byteidxcomp(s, 1)
 * 	echo byteidxcomp(s, 2)
 * The first and third echo result in 3 ('e' plus composing
 * character is 3 bytes), the second echo results in 1 ('e' is
 * one byte).
 * Only works differently from byteidx() when 'encoding' is set
 * to a Unicode encoding.
 * Can also be used as a |method|:
 * 	GetName()->byteidxcomp(idx)
 */
export function byteidxcomp(
  denops: Denops,
  expr: unknown,
  nr: unknown,
): Promise<unknown>;
export function byteidxcomp(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("byteidxcomp", ...args);
}

/**
 * Call function {func} with the items in |List| {arglist} as
 * arguments.
 * {func} can either be a |Funcref| or the name of a function.
 * a:firstline and a:lastline are set to the cursor line.
 * Returns the return value of the called function.
 * {dict} is for functions with the "dict" attribute.  It will be
 * used to set the local variable "self". |Dictionary-function|
 * Can also be used as a |method|:
 * 	GetFunc()->call([arg, arg], dict)
 */
export function call(
  denops: Denops,
  func: unknown,
  arglist: unknown,
  dict?: unknown,
): Promise<unknown>;
export function call(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("call", ...args);
}

/**
 * Return the smallest integral value greater than or equal to
 * {expr} as a |Float| (round up).
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	echo ceil(1.456)
 * 	2.0
 * 	echo ceil(-5.456)
 * 	-5.0
 * 	echo ceil(4.0)
 * 	4.0
 * Can also be used as a |method|:
 * 	Compute()->ceil()
 * {only available when compiled with the |+float| feature}
 */
export function ceil(denops: Denops, expr: unknown): Promise<unknown>;
export function ceil(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ceil", ...args);
}

/**
 * Return the number of the most recent change.  This is the same
 * number as what is displayed with |:undolist| and can be used
 * with the |:undo| command.
 * When a change was made it is the number of that change.  After
 * redo it is the number of the redone change.  After undo it is
 * one less than the number of the undone change.
 */
export function changenr(denops: Denops): Promise<unknown>;
export function changenr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("changenr", ...args);
}

/**
 * Return number value of the first char in {string}.
 * Examples:
 * 	char2nr(" ")		returns 32
 * 	char2nr("ABC")		returns 65
 * When {utf8} is omitted or zero, the current 'encoding' is used.
 * Example for "utf-8":
 * 	char2nr("á")		returns 225
 * 	char2nr("á"[0])		returns 195
 * With {utf8} set to TRUE, always treat as utf-8 characters.
 * A combining character is a separate character.
 * |nr2char()| does the opposite.
 * To turn a string into a list of character numbers:
 *     let str = "ABC"
 *     let list = map(split(str, '\zs'), {_, val -> char2nr(val)})
 * Result: [65, 66, 67]
 * Can also be used as a |method|:
 * 	GetChar()->char2nr()
 */
export function char2nr(
  denops: Denops,
  string: unknown,
  utf8?: unknown,
): Promise<unknown>;
export function char2nr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("char2nr", ...args);
}

/**
 * Return the character index of the byte at {idx} in {string}.
 * The index of the first character is zero.
 * If there are no multibyte characters the returned value is
 * equal to {idx}.
 * When {countcc} is omitted or |FALSE|, then composing characters
 * are not counted separately, their byte length is
 * added to the preceding base character.
 * When {countcc} is |TRUE|, then composing characters are
 * counted as separate characters.
 * Returns -1 if the arguments are invalid or if {idx} is greater
 * than the index of the last byte in {string}.  An error is
 * given if the first argument is not a string, the second
 * argument is not a number or when the third argument is present
 * and is not zero or one.
 * See |byteidx()| and |byteidxcomp()| for getting the byte index
 * from the character index.
 * Examples:
 * 	echo charidx('áb́ć', 3)		returns 1
 * 	echo charidx('áb́ć', 6, 1)	returns 4
 * 	echo charidx('áb́ć', 16)		returns -1
 * Can also be used as a |method|:
 * 	GetName()->charidx(idx)
 */
export function charidx(
  denops: Denops,
  string: unknown,
  idx: unknown,
  countcc?: unknown,
): Promise<unknown>;
export function charidx(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("charidx", ...args);
}

/**
 * Change the current working directory to {dir}.  The scope of
 * the directory change depends on the directory of the current
 * window:
 * 	- If the current window has a window-local directory
 * 	  (|:lcd|), then changes the window local directory.
 * 	- Otherwise, if the current tabpage has a local
 * 	  directory (|:tcd|) then changes the tabpage local
 * 	  directory.
 * 	- Otherwise, changes the global directory.
 * {dir} must be a String.
 * If successful, returns the previous working directory.  Pass
 * this to another chdir() to restore the directory.
 * On failure, returns an empty string.
 * Example:
 * 	let save_dir = chdir(newdir)
 * 	if save_dir != ""
 * 	   " ... do some work
 * 	   call chdir(save_dir)
 * 	endif
 * Can also be used as a |method|:
 * 	GetDir()->chdir()
 */
export function chdir(denops: Denops, dir: unknown): Promise<unknown>;
export function chdir(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("chdir", ...args);
}

/**
 * Get the amount of indent for line {lnum} according the C
 * indenting rules, as with 'cindent'.
 * The indent is counted in spaces, the value of 'tabstop' is
 * relevant.  {lnum} is used just like in |getline()|.
 * When {lnum} is invalid or Vim was not compiled the |+cindent|
 * feature, -1 is returned.
 * See |C-indenting|.
 * Can also be used as a |method|:
 * 	GetLnum()->cindent()
 */
export function cindent(denops: Denops, lnum: unknown): Promise<unknown>;
export function cindent(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("cindent", ...args);
}

/**
 * Clears all matches previously defined for the current window
 * by |matchadd()| and the |:match| commands.
 * If {win} is specified, use the window with this number or
 * window ID instead of the current window.
 * Can also be used as a |method|:
 * 	GetWin()->clearmatches()
 */
export function clearmatches(denops: Denops, win?: unknown): Promise<unknown>;
export function clearmatches(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("clearmatches", ...args);
}

/**
 * Set the matches for Insert mode completion.
 * Can only be used in Insert mode.  You need to use a mapping
 * with CTRL-R = (see |i_CTRL-R|).  It does not work after CTRL-O
 * or with an expression mapping.
 * {startcol} is the byte offset in the line where the completed
 * text start.  The text up to the cursor is the original text
 * that will be replaced by the matches.  Use col('.') for an
 * empty string.  "col('.') - 1" will replace one character by a
 * match.
 * {matches} must be a |List|.  Each |List| item is one match.
 * See |complete-items| for the kind of items that are possible.
 * "longest" in 'completeopt' is ignored.
 * Note that the after calling this function you need to avoid
 * inserting anything that would cause completion to stop.
 * The match can be selected with CTRL-N and CTRL-P as usual with
 * Insert mode completion.  The popup menu will appear if
 * specified, see |ins-completion-menu|.
 * Example:
 * 	inoremap <F5> <C-R>=ListMonths()<CR
 * 	func! ListMonths()
 * 	  call complete(col('.'), ['January', 'February', 'March',
 * \ 'April', 'May', 'June', 'July', 'August', 'September',
 * \ 'October', 'November', 'December'])
 * 	  return ''
 * 	endfunc
 * This isn't very useful, but it shows how it works.  Note that
 * an empty string is returned to avoid a zero being inserted.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetMatches()->complete(col('.'))
 */
export function complete(
  denops: Denops,
  startcol: unknown,
  matches: unknown,
): Promise<unknown>;
export function complete(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("complete", ...args);
}

/**
 * Add {expr} to the list of matches.  Only to be used by the
 * function specified with the 'completefunc' option.
 * Returns 0 for failure (empty string or out of memory),
 * 1 when the match was added, 2 when the match was already in
 * the list.
 * See |complete-functions| for an explanation of {expr}.  It is
 * the same as one item in the list that 'omnifunc' would return.
 * Can also be used as a |method|:
 * 	GetMoreMatches()->complete_add()
 */
export function complete_add(denops: Denops, expr: unknown): Promise<unknown>;
export function complete_add(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("complete_add", ...args);
}

/**
 * Check for a key typed while looking for completion matches.
 * This is to be used when looking for matches takes some time.
 * Returns |TRUE| when searching for matches is to be aborted,
 * zero otherwise.
 * Only to be used by the function specified with the
 * 'completefunc' option.
 */
export function complete_check(denops: Denops): Promise<unknown>;
export function complete_check(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("complete_check", ...args);
}

/**
 * Returns a |Dictionary| with information about Insert mode
 * completion.  See |ins-completion|.
 * The items are:
 *    mode		Current completion mode name string.
 * 		See |complete_info_mode| for the values.
 *    pum_visible	|TRUE| if popup menu is visible.
 * 		See |pumvisible()|.
 *    items	List of completion matches.  Each item is a
 * 		dictionary containing the entries "word",
 * 		"abbr", "menu", "kind", "info" and "user_data".
 * 		See |complete-items|.
 *    selected	Selected item index.  First index is zero.
 * 		Index is -1 if no item is selected (showing
 * 		typed text only, or the last completion after
 * 		no item is selected when using the <Up> or
 * 		<Down> keys)
 *    inserted	Inserted string. [NOT IMPLEMENT YET]
 * mode values are:
 *    ""		     Not in completion mode
 *    "keyword"	     Keyword completion |i_CTRL-X_CTRL-N|
 *    "ctrl_x"	     Just pressed CTRL-X |i_CTRL-X|
 *    "whole_line"	     Whole lines |i_CTRL-X_CTRL-L|
 *    "files"	     File names |i_CTRL-X_CTRL-F|
 *    "tags"	     Tags |i_CTRL-X_CTRL-]|
 *    "path_defines"    Definition completion |i_CTRL-X_CTRL-D|
 *    "path_patterns"   Include completion |i_CTRL-X_CTRL-I|
 *    "dictionary"	     Dictionary |i_CTRL-X_CTRL-K|
 *    "thesaurus"	     Thesaurus |i_CTRL-X_CTRL-T|
 *    "cmdline"	     Vim Command line |i_CTRL-X_CTRL-V|
 *    "function"	     User defined completion |i_CTRL-X_CTRL-U|
 *    "omni"	     Omni completion |i_CTRL-X_CTRL-O|
 *    "spell"	     Spelling suggestions |i_CTRL-X_s|
 *    "eval"	     |complete()| completion
 *    "unknown"	     Other internal modes
 * If the optional {what} list argument is supplied, then only
 * the items listed in {what} are returned.  Unsupported items in
 * {what} are silently ignored.
 * To get the position and size of the popup menu, see
 * |pum_getpos()|. It's also available in |v:event| during the
 * |CompleteChanged| event.
 * Examples:
 * 	" Get all items
 * 	call complete_info()
 * 	" Get only 'mode'
 * 	call complete_info(['mode'])
 * 	" Get only 'mode' and 'pum_visible'
 * 	call complete_info(['mode', 'pum_visible'])
 * Can also be used as a |method|:
 * 	GetItems()->complete_info()
 */
export function complete_info(denops: Denops, what?: unknown): Promise<unknown>;
export function complete_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("complete_info", ...args);
}

/**
 * confirm() offers the user a dialog, from which a choice can be
 * made.  It returns the number of the choice.  For the first
 * choice this is 1.
 * Note: confirm() is only supported when compiled with dialog
 * support, see |+dialog_con| and |+dialog_gui|.
 * {msg} is displayed in a |dialog| with {choices} as the
 * alternatives.  When {choices} is missing or empty, "&OK" is
 * used (and translated).
 * {msg} is a String, use '\n' to include a newline.  Only on
 * some systems the string is wrapped when it doesn't fit.
 * {choices} is a String, with the individual choices separated
 * by '\n', e.g.
 * 	confirm("Save changes?", "&Yes\n&No\n&Cancel")
 * The letter after the '&' is the shortcut key for that choice.
 * Thus you can type 'c' to select "Cancel".  The shortcut does
 * not need to be the first letter:
 * 	confirm("file has been modified", "&Save\nSave &All")
 * For the console, the first letter of each choice is used as
 * the default shortcut key.  Case is ignored.
 * The optional {default} argument is the number of the choice
 * that is made if the user hits <CR>.  Use 1 to make the first
 * choice the default one.  Use 0 to not set a default.  If
 * {default} is omitted, 1 is used.
 * The optional {type} String argument gives the type of dialog.
 * This is only used for the icon of the GTK, Mac, Motif and
 * Win32 GUI.  It can be one of these values: "Error",
 * "Question", "Info", "Warning" or "Generic".  Only the first
 * character is relevant.  When {type} is omitted, "Generic" is
 * used.
 * If the user aborts the dialog by pressing <Esc>, CTRL-C,
 * or another valid interrupt key, confirm() returns 0.
 * An example:
 *    :let choice = confirm("What do you want?", "&Apples\n&Oranges\n&Bananas", 2)
 *    :if choice == 0
 *    :	echo "make up your mind!"
 *    :elseif choice == 3
 *    :	echo "tasteful"
 *    :else
 *    :	echo "I prefer bananas myself."
 *    :endif
 * In a GUI dialog, buttons are used.  The layout of the buttons
 * depends on the 'v' flag in 'guioptions'.  If it is included,
 * the buttons are always put vertically.  Otherwise,  confirm()
 * tries to put the buttons in one horizontal line.  If they
 * don't fit, a vertical layout is used anyway.  For some systems
 * the horizontal layout is always used.
 * Can also be used as a |method|in:
 * 	BuildMessage()->confirm("&Yes\n&No")
 */
export function confirm(
  denops: Denops,
  msg: unknown,
  choices?: unknown,
  defaultValue?: unknown,
  type?: unknown,
): Promise<unknown>;
export function confirm(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("confirm", ...args);
}

/**
 * Make a copy of {expr}.  For Numbers and Strings this isn't
 * different from using {expr} directly.
 * When {expr} is a |List| a shallow copy is created.  This means
 * that the original |List| can be changed without changing the
 * copy, and vice versa.  But the items are identical, thus
 * changing an item changes the contents of both |Lists|.
 * A |Dictionary| is copied in a similar way as a |List|.
 * Also see |deepcopy()|.
 * Can also be used as a |method|:
 * 	mylist->copy()
 */
export function copy(denops: Denops, expr: unknown): Promise<unknown>;
export function copy(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("copy", ...args);
}

/**
 * Return the cosine of {expr}, measured in radians, as a |Float|.
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo cos(100)
 * 	0.862319
 * 	:echo cos(-4.01)
 * 	-0.646043
 * Can also be used as a |method|:
 * 	Compute()->cos()
 * {only available when compiled with the |+float| feature}
 */
export function cos(denops: Denops, expr: unknown): Promise<unknown>;
export function cos(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("cos", ...args);
}

/**
 * Return the hyperbolic cosine of {expr} as a |Float| in the range
 * [1, inf].
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo cosh(0.5)
 * 	1.127626
 * 	:echo cosh(-0.5)
 * 	-1.127626
 * Can also be used as a |method|:
 * 	Compute()->cosh()
 * {only available when compiled with the |+float| feature}
 */
export function cosh(denops: Denops, expr: unknown): Promise<unknown>;
export function cosh(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("cosh", ...args);
}

/**
 * Return the number of times an item with value {expr} appears
 * in |String|, |List| or |Dictionary| {comp}.
 * If {start} is given then start with the item with this index.
 * {start} can only be used with a |List|.
 * When {ic} is given and it's |TRUE| then case is ignored.
 * When {comp} is a string then the number of not overlapping
 * occurrences of {expr} is returned. Zero is returned when
 * {expr} is an empty string.
 * Can also be used as a |method|:
 * 	mylist->count(val)
 */
export function count(
  denops: Denops,
  comp: unknown,
  expr: unknown,
  ic?: unknown,
  start?: unknown,
): Promise<unknown>;
export function count(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("count", ...args);
}

/**
 * Checks for the existence of a |cscope| connection.  If no
 * parameters are specified, then the function returns:
 * 	0, if cscope was not available (not compiled in), or
 * 	   if there are no cscope connections;
 * 	1, if there is at least one cscope connection.
 * If parameters are specified, then the value of {num}
 * determines how existence of a cscope connection is checked:
 * {num}	Description of existence check
 * -----	------------------------------
 * 0	Same as no parameters (e.g., "cscope_connection()").
 * 1	Ignore {prepend}, and use partial string matches for
 * 	{dbpath}.
 * 2	Ignore {prepend}, and use exact string matches for
 * 	{dbpath}.
 * 3	Use {prepend}, use partial string matches for both
 * 	{dbpath} and {prepend}.
 * 4	Use {prepend}, use exact string matches for both
 * 	{dbpath} and {prepend}.
 * Note: All string comparisons are case sensitive!
 * Examples.  Suppose we had the following (from ":cs show"):
 *   # pid    database name			prepend path
 *   0 27664  cscope.out				/usr/local
 * Invocation					Return Val ~
 * ----------					----------
 * cscope_connection()					1
 * cscope_connection(1, "out")				1
 * cscope_connection(2, "out")				0
 * cscope_connection(3, "out")				0
 * cscope_connection(3, "out", "local")			1
 * cscope_connection(4, "out")				0
 * cscope_connection(4, "out", "local")			0
 * cscope_connection(4, "cscope.out", "/usr/local")	1
 */
export function cscope_connection(
  denops: Denops,
  num?: unknown,
  dbpath?: unknown,
  prepend?: unknown,
): Promise<unknown>;
export function cscope_connection(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("cscope_connection", ...args);
}

/**
 * Specifically used to interrupt a program being debugged.  It
 * will cause process {pid} to get a SIGTRAP.  Behavior for other
 * processes is undefined. See |terminal-debugger|.
 * {only available on MS-Windows}
 * Can also be used as a |method|:
 * 	GetPid()->debugbreak()
 */
export function debugbreak(denops: Denops, pid: unknown): Promise<unknown>;
export function debugbreak(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("debugbreak", ...args);
}

/**
 * Make a copy of {expr}.  For Numbers and Strings this isn't
 * different from using {expr} directly.
 * When {expr} is a |List| a full copy is created.  This means
 * that the original |List| can be changed without changing the
 * copy, and vice versa.  When an item is a |List| or
 * |Dictionary|, a copy for it is made, recursively.  Thus
 * changing an item in the copy does not change the contents of
 * the original |List|.
 * A |Dictionary| is copied in a similar way as a |List|.
 * When {noref} is omitted or zero a contained |List| or
 * |Dictionary| is only copied once.  All references point to
 * this single copy.  With {noref} set to 1 every occurrence of a
 * |List| or |Dictionary| results in a new copy.  This also means
 * that a cyclic reference causes deepcopy() to fail.
 * Nesting is possible up to 100 levels.  When there is an item
 * that refers back to a higher level making a deep copy with
 * {noref} set to 1 will fail.
 * Also see |copy()|.
 * Can also be used as a |method|:
 * 	GetObject()->deepcopy()
 */
export function deepcopy(
  denops: Denops,
  expr: unknown,
  noref?: unknown,
): Promise<unknown>;
export function deepcopy(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("deepcopy", ...args);
}

/**
 * Without {flags} or with {flags} empty: Deletes the file by the
 * name {fname}.  This also works when {fname} is a symbolic link.
 * When {flags} is "d": Deletes the directory by the name
 * {fname}.  This fails when directory {fname} is not empty.
 * When {flags} is "rf": Deletes the directory by the name
 * {fname} and everything in it, recursively.  BE CAREFUL!
 * Note: on MS-Windows it is not possible to delete a directory
 * that is being used.
 * A symbolic link itself is deleted, not what it points to.
 * The result is a Number, which is 0/false if the delete
 * operation was successful and -1/true when the deletion failed
 * or partly failed.
 * Use |remove()| to delete an item from a |List|.
 * To delete a line from the buffer use |:delete| or
 * |deletebufline()|.
 * Can also be used as a |method|:
 * 	GetName()->delete()
 */
export function delete_(
  denops: Denops,
  fname: unknown,
  flags?: unknown,
): Promise<unknown>;
export function delete_(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("delete_", ...args);
}

/**
 * Delete lines {first} to {last} (inclusive) from buffer {buf}.
 * If {last} is omitted then delete line {first} only.
 * On success 0 is returned, on failure 1 is returned.
 * This function works only for loaded buffers. First call
 * |bufload()| if needed.
 * For the use of {buf}, see |bufname()| above.
 * {first} and {last} are used like with |getline()|. Note that
 * when using |line()| this refers to the current buffer. Use "$"
 * to refer to the last line in buffer {buf}.
 * Can also be used as a |method|:
 * 	GetBuffer()->deletebufline(1)
 */
export function deletebufline(
  denops: Denops,
  buf: unknown,
  first: unknown,
  last?: unknown,
): Promise<unknown>;
export function deletebufline(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("deletebufline", ...args);
}

/**
 * Returns |TRUE| when autocommands are being executed and the
 * FileType event has been triggered at least once.  Can be used
 * to avoid triggering the FileType event again in the scripts
 * that detect the file type. |FileType|
 * Returns |FALSE| when `:setf FALLBACK` was used.
 * When editing another file, the counter is reset, thus this
 * really checks if the FileType event has been triggered for the
 * current buffer.  This allows an autocommand that starts
 * editing another buffer to set 'filetype' and load a syntax
 * file.
 */
export function did_filetype(denops: Denops): Promise<unknown>;
export function did_filetype(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("did_filetype", ...args);
}

/**
 * Returns the highlight ID for diff mode at line {lnum} column
 * {col} (byte index).  When the current line does not have a
 * diff change zero is returned.
 * {lnum} is used like with |getline()|.  Thus "." is the current
 * line, "'m" mark m, etc.
 * {col} is 1 for the leftmost column, {lnum} is 1 for the first
 * line.
 * The highlight ID can be used with |synIDattr()| to obtain
 * syntax information about the highlighting.
 * Can also be used as a |method|:
 * 	GetLnum()->diff_hlID(col)
 */
export function diff_hlID(
  denops: Denops,
  lnum: unknown,
  col: unknown,
): Promise<unknown>;
export function diff_hlID(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("diff_hlID", ...args);
}

/**
 * Return the Number 1 if {expr} is empty, zero otherwise.
 * - A |List| or |Dictionary| is empty when it does not have any
 *   items.
 * - A |String| is empty when its length is zero.
 * - A |Number| and |Float| are empty when their value is zero.
 * - |v:false|, |v:none| and |v:null| are empty, |v:true| is not.
 * - A |Job| is empty when it failed to start.
 * - A |Channel| is empty when it is closed.
 * - A |Blob| is empty when its length is zero.
 * For a long |List| this is much faster than comparing the
 * length with zero.
 * Can also be used as a |method|:
 * 	mylist->empty()
 */
export function empty(denops: Denops, expr: unknown): Promise<unknown>;
export function empty(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("empty", ...args);
}

/**
 * Return all of environment variables as dictionary. You can
 * check if an environment variable exists like this:
 * 	:echo has_key(environ(), 'HOME')
 * Note that the variable name may be CamelCase; to ignore case
 * use this:
 * 	:echo index(keys(environ()), 'HOME', 0, 1) != -1
 */
export function environ(denops: Denops): Promise<unknown>;
export function environ(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("environ", ...args);
}

/**
 * Escape the characters in {chars} that occur in {string} with a
 * backslash.  Example:
 * 	:echo escape('c:\program files\vim', ' \')
 * results in:
 * 	c:\\program\ files\\vim
 * Also see |shellescape()| and |fnameescape()|.
 * Can also be used as a |method|:
 * 	GetText()->escape(' \')
 */
export function escape(
  denops: Denops,
  string: unknown,
  chars: unknown,
): Promise<unknown>;
export function escape(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("escape", ...args);
}

/**
 * Evaluate {string} and return the result.  Especially useful to
 * turn the result of |string()| back into the original value.
 * This works for Numbers, Floats, Strings, Blobs and composites
 * of them.  Also works for |Funcref|s that refer to existing
 * functions.
 * Can also be used as a |method|:
 * 	argv->join()->eval()
 */
export function eval_(denops: Denops, string: unknown): Promise<unknown>;
export function eval_(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("eval_", ...args);
}

/**
 * Returns 1 when inside an event handler.  That is that Vim got
 * interrupted while waiting for the user to type a character,
 * e.g., when dropping a file on Vim.  This means interactive
 * commands cannot be used.  Otherwise zero is returned.
 */
export function eventhandler(denops: Denops): Promise<unknown>;
export function eventhandler(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("eventhandler", ...args);
}

/**
 * This function checks if an executable with the name {expr}
 * exists.  {expr} must be the name of the program without any
 * arguments.
 * executable() uses the value of $PATH and/or the normal
 * searchpath for programs.
 * On MS-Windows the ".exe", ".bat", etc. can optionally be
 * included.  Then the extensions in $PATHEXT are tried.  Thus if
 * "foo.exe" does not exist, "foo.exe.bat" can be found.  If
 * $PATHEXT is not set then ".com;.exe;.bat;.cmd" is used.  A dot
 * by itself can be used in $PATHEXT to try using the name
 * without an extension.  When 'shell' looks like a Unix shell,
 * then the name is also tried without adding an extension.
 * On MS-Windows it only checks if the file exists and is not a
 * directory, not if it's really executable.
 * On MS-Windows an executable in the same directory as Vim is
 * always found.  Since this directory is added to $PATH it
 * should also work to execute it |win32-PATH|.
 * The result is a Number:
 * 	1	exists
 * 	0	does not exist
 * 	-1	not implemented on this system
 * |exepath()| can be used to get the full path of an executable.
 * Can also be used as a |method|:
 * 	GetCommand()->executable()
 */
export function executable(denops: Denops, expr: unknown): Promise<unknown>;
export function executable(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("executable", ...args);
}

/**
 * Execute an Ex command or commands and return the output as a
 * string.
 * {command} can be a string or a List.  In case of a List the
 * lines are executed one by one.
 * This is equivalent to:
 * 	redir => var
 * 	{command}
 * 	redir END
 * The optional {silent} argument can have these values:
 * 	""		no `:silent` used
 * 	"silent"	`:silent` used
 * 	"silent!"	`:silent!` used
 * The default is "silent".  Note that with "silent!", unlike
 * `:redir`, error messages are dropped.  When using an external
 * command the screen may be messed up, use `system()` instead.
 * It is not possible to use `:redir` anywhere in {command}.
 * To get a list of lines use |split()| on the result:
 * 	split(execute('args'), "\n")
 * To execute a command in another window than the current one
 * use `win_execute()`.
 * When used recursively the output of the recursive call is not
 * included in the output of the higher level call.
 * Can also be used as a |method|:
 * 	GetCommand()->execute()
 */
export function execute(
  denops: Denops,
  command: unknown,
  silent?: unknown,
): Promise<unknown>;
export function execute(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("execute", ...args);
}

/**
 * If {expr} is an executable and is either an absolute path, a
 * relative path or found in $PATH, return the full path.
 * Note that the current directory is used when {expr} starts
 * with "./", which may be a problem for Vim:
 * 	echo exepath(v:progpath)
 * If {expr} cannot be found in $PATH or is not executable then
 * an empty string is returned.
 * Can also be used as a |method|:
 * 	GetCommand()->exepath()
 */
export function exepath(denops: Denops, expr: unknown): Promise<unknown>;
export function exepath(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("exepath", ...args);
}

/**
 * Return the exponential of {expr} as a |Float| in the range
 * [0, inf].
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo exp(2)
 * 	7.389056
 * 	:echo exp(-1)
 * 	0.367879
 * Can also be used as a |method|:
 * 	Compute()->exp()
 * {only available when compiled with the |+float| feature}
 */
export function exp(denops: Denops, expr: unknown): Promise<unknown>;
export function exp(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("exp", ...args);
}

/**
 * Expand wildcards and the following special keywords in
 * {string}.  'wildignorecase' applies.
 * If {list} is given and it is |TRUE|, a List will be returned.
 * Otherwise the result is a String and when there are several
 * matches, they are separated by <NL> characters.  [Note: in
 * version 5.0 a space was used, which caused problems when a
 * file name contains a space]
 * If the expansion fails, the result is an empty string.  A name
 * for a non-existing file is not included, unless {string} does
 * not start with '%', '#' or '<', see below.
 * When {string} starts with '%', '#' or '<', the expansion is
 * done like for the |cmdline-special| variables with their
 * associated modifiers.  Here is a short overview:
 * 	%		current file name
 * 	#		alternate file name
 * 	#n		alternate file name n
 * 	<cfile>		file name under the cursor
 * 	<afile>		autocmd file name
 * 	<abuf>		autocmd buffer number (as a String!)
 * 	<amatch>	autocmd matched name
 * 	<cexpr>		C expression under the cursor
 * 	<sfile>		sourced script file or function name
 * 	<slnum>		sourced script line number or function
 * 			line number
 * 	<sflnum>	script file line number, also when in
 * 			a function
 * 	<SID>		"<SNR>123_"  where "123" is the
 * 			current script ID  |<SID>|
 * 	<stack>		call stack
 * 	<cword>		word under the cursor
 * 	<cWORD>		WORD under the cursor
 * 	<client>	the {clientid} of the last received
 * 			message |server2client()|
 * Modifiers:
 * 	:p		expand to full path
 * 	:h		head (last path component removed)
 * 	:t		tail (last path component only)
 * 	:r		root (one extension removed)
 * 	:e		extension only
 * Example:
 * 	:let &tags = expand("%:p:h") . "/tags"
 * Note that when expanding a string that starts with '%', '#' or
 * '<', any following text is ignored.  This does NOT work:
 * 	:let doesntwork = expand("%:h.bak")
 * Use this:
 * 	:let doeswork = expand("%:h") . ".bak"
 * Also note that expanding "<cfile>" and others only returns the
 * referenced file name without further expansion.  If "<cfile>"
 * is "~/.cshrc", you need to do another expand() to have the
 * "~/" expanded into the path of the home directory:
 * 	:echo expand(expand("<cfile>"))
 * There cannot be white space between the variables and the
 * following modifier.  The |fnamemodify()| function can be used
 * to modify normal file names.
 * When using '%' or '#', and the current or alternate file name
 * is not defined, an empty string is used.  Using "%:p" in a
 * buffer with no name, results in the current directory, with a
 * '/' added.
 * When {string} does not start with '%', '#' or '<', it is
 * expanded like a file name is expanded on the command line.
 * 'suffixes' and 'wildignore' are used, unless the optional
 * {nosuf} argument is given and it is |TRUE|.
 * Names for non-existing files are included.  The "**" item can
 * be used to search in a directory tree.  For example, to find
 * all "README" files in the current directory and below:
 * 	:echo expand("** /README")
 * expand() can also be used to expand variables and environment
 * variables that are only known in a shell.  But this can be
 * slow, because a shell may be used to do the expansion.  See
 * |expr-env-expand|.
 * The expanded variable is still handled like a list of file
 * names.  When an environment variable cannot be expanded, it is
 * left unchanged.  Thus ":echo expand('$FOOBAR')" results in
 * "$FOOBAR".
 * See |glob()| for finding existing files.  See |system()| for
 * getting the raw output of an external command.
 * Can also be used as a |method|:
 * 	Getpattern()->expand()
 */
export function expand(
  denops: Denops,
  string: unknown,
  nosuf?: unknown,
  list?: unknown,
): Promise<unknown>;
export function expand(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("expand", ...args);
}

/**
 * Expand special items in String {string} like what is done for
 * an Ex command such as `:edit`.  This expands special keywords,
 * like with |expand()|, and environment variables, anywhere in
 * {string}.  "~user" and "~/path" are only expanded at the
 * start.
 * Returns the expanded string.  Example:
 * 	:echo expandcmd('make %<.o')
 * Can also be used as a |method|:
 * 	GetCommand()->expandcmd()
 */
export function expandcmd(denops: Denops, string: unknown): Promise<unknown>;
export function expandcmd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("expandcmd", ...args);
}

/**
 * {expr1} and {expr2} must be both |Lists| or both
 * |Dictionaries|.
 * If they are |Lists|: Append {expr2} to {expr1}.
 * If {expr3} is given insert the items of {expr2} before the
 * item with index {expr3} in {expr1}.  When {expr3} is zero
 * insert before the first item.  When {expr3} is equal to
 * len({expr1}) then {expr2} is appended.
 * Examples:
 * 	:echo sort(extend(mylist, [7, 5]))
 * 	:call extend(mylist, [2, 3], 1)
 * When {expr1} is the same List as {expr2} then the number of
 * items copied is equal to the original length of the List.
 * E.g., when {expr3} is 1 you get N new copies of the first item
 * (where N is the original length of the List).
 * Use |add()| to concatenate one item to a list.  To concatenate
 * two lists into a new list use the + operator:
 * 	:let newlist = [1, 2, 3] + [4, 5]
 * If they are |Dictionaries|:
 * Add all entries from {expr2} to {expr1}.
 * If a key exists in both {expr1} and {expr2} then {expr3} is
 * used to decide what to do:
 * {expr3} = "keep": keep the value of {expr1}
 * {expr3} = "force": use the value of {expr2}
 * {expr3} = "error": give an error message
 * When {expr3} is omitted then "force" is assumed.
 * {expr1} is changed when {expr2} is not empty.  If necessary
 * make a copy of {expr1} first.
 * {expr2} remains unchanged.
 * When {expr1} is locked and {expr2} is not empty the operation
 * fails.
 * Returns {expr1}.
 * Can also be used as a |method|:
 * 	mylist->extend(otherlist)
 */
export function extend(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
  expr3?: unknown,
): Promise<unknown>;
export function extend(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("extend", ...args);
}

/**
 * Characters in {string} are queued for processing as if they
 * come from a mapping or were typed by the user.
 * By default the string is added to the end of the typeahead
 * buffer, thus if a mapping is still being executed the
 * characters come after them.  Use the 'i' flag to insert before
 * other characters, they will be executed next, before any
 * characters from a mapping.
 * The function does not wait for processing of keys contained in
 * {string}.
 * To include special keys into {string}, use double-quotes
 * and "\..." notation |expr-quote|. For example,
 * feedkeys("\<CR>") simulates pressing of the <Enter> key. But
 * feedkeys('\<CR>') pushes 5 characters.
 * A special code that might be useful is <Ignore>, it exits the
 * wait for a character without doing anything.
 * {mode} is a String, which can contain these character flags:
 * 'm'	Remap keys. This is default.  If {mode} is absent,
 * 	keys are remapped.
 * 'n'	Do not remap keys.
 * 't'	Handle keys as if typed; otherwise they are handled as
 * 	if coming from a mapping.  This matters for undo,
 * 	opening folds, etc.
 * 'L'	Lowlevel input.  Only works for Unix or when using the
 * 	GUI. Keys are used as if they were coming from the
 * 	terminal.  Other flags are not used.
 * 	When a CTRL-C interrupts and 't' is included it sets
 * 	the internal "got_int" flag.
 * 'i'	Insert the string instead of appending (see above).
 * 'x'	Execute commands until typeahead is empty.  This is
 * 	similar to using ":normal!".  You can call feedkeys()
 * 	several times without 'x' and then one time with 'x'
 * 	(possibly with an empty {string}) to execute all the
 * 	typeahead.  Note that when Vim ends in Insert mode it
 * 	will behave as if <Esc> is typed, to avoid getting
 * 	stuck, waiting for a character to be typed before the
 * 	script continues.
 * 	Note that if you manage to call feedkeys() while
 * 	executing commands, thus calling it recursively, then
 * 	all typeahead will be consumed by the last call.
 * '!'	When used with 'x' will not end Insert mode. Can be
 * 	used in a test when a timer is set to exit Insert mode
 * 	a little later.  Useful for testing CursorHoldI.
 * Return value is always 0.
 * Can also be used as a |method|:
 * 	GetInput()->feedkeys()
 */
export function feedkeys(
  denops: Denops,
  string: unknown,
  mode?: unknown,
): Promise<unknown>;
export function feedkeys(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("feedkeys", ...args);
}

/**
 * The result is a Number, which is |TRUE| when a file with the
 * name {file} exists, and can be read.  If {file} doesn't exist,
 * or is a directory, the result is |FALSE|.  {file} is any
 * expression, which is used as a String.
 * If you don't care about the file being readable you can use
 * |glob()|.
 * {file} is used as-is, you may want to expand wildcards first:
 * 	echo filereadable('~/.vimrc')
 * 	0
 * 	echo filereadable(expand('~/.vimrc'))
 * 	1
 * Can also be used as a |method|:
 * 	GetName()->filereadable()
 * Obsolete name: file_readable().
 */
export function filereadable(denops: Denops, file: unknown): Promise<unknown>;
export function filereadable(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("filereadable", ...args);
}

/**
 * The result is a Number, which is 1 when a file with the
 * name {file} exists, and can be written.  If {file} doesn't
 * exist, or is not writable, the result is 0.  If {file} is a
 * directory, and we can write to it, the result is 2.
 * Can also be used as a |method|:
 * 	GetName()->filewritable()
 */
export function filewritable(denops: Denops, file: unknown): Promise<unknown>;
export function filewritable(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("filewritable", ...args);
}

/**
 * {expr1} must be a |List|, |Blob| or |Dictionary|.
 * For each item in {expr1} evaluate {expr2} and when the result
 * is zero remove the item from the |List| or |Dictionary|. For a
 * |Blob| each byte is removed.
 * {expr2} must be a |string| or |Funcref|.
 * If {expr2} is a |string|, inside {expr2} |v:val| has the value
 * of the current item.  For a |Dictionary| |v:key| has the key
 * of the current item and for a |List| |v:key| has the index of
 * the current item.  For a |Blob| |v:key| has the index of the
 * current byte.
 * Examples:
 * 	call filter(mylist, 'v:val !~ "OLD"')
 * Removes the items where "OLD" appears.
 * 	call filter(mydict, 'v:key >= 8')
 * Removes the items with a key below 8.
 * 	call filter(var, 0)
 * Removes all the items, thus clears the |List| or |Dictionary|.
 * Note that {expr2} is the result of expression and is then
 * used as an expression again.  Often it is good to use a
 * |literal-string| to avoid having to double backslashes.
 * If {expr2} is a |Funcref| it must take two arguments:
 * 	1. the key or the index of the current item.
 * 	2. the value of the current item.
 * The function must return |TRUE| if the item should be kept.
 * Example that keeps the odd items of a list:
 * 	func Odd(idx, val)
 * 	  return a:idx % 2 == 1
 * 	endfunc
 * 	call filter(mylist, function('Odd'))
 * It is shorter when using a |lambda|:
 * 	call filter(myList, {idx, val -> idx * val <= 42})
 * If you do not use "val" you can leave it out:
 * 	call filter(myList, {idx -> idx % 2 == 1})
 * The operation is done in-place.  If you want a |List| or
 * |Dictionary| to remain unmodified make a copy first:
 * 	:let l = filter(copy(mylist), 'v:val =~ "KEEP"')
 * Returns {expr1}, the |List| , |Blob| or |Dictionary| that was
 * filtered.  When an error is encountered while evaluating
 * {expr2} no further items in {expr1} are processed.  When
 * {expr2} is a Funcref errors inside a function are ignored,
 * unless it was defined with the "abort" flag.
 * Can also be used as a |method|:
 * 	mylist->filter(expr2)
 */
export function filter(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function filter(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("filter", ...args);
}

/**
 * Find directory {name} in {path}.  Supports both downwards and
 * upwards recursive directory searches.  See |file-searching|
 * for the syntax of {path}.
 * Returns the path of the first found match.  When the found
 * directory is below the current directory a relative path is
 * returned.  Otherwise a full path is returned.
 * If {path} is omitted or empty then 'path' is used.
 * If the optional {count} is given, find {count}'s occurrence of
 * {name} in {path} instead of the first one.
 * When {count} is negative return all the matches in a |List|.
 * This is quite similar to the ex-command `:find`.
 * {only available when compiled with the |+file_in_path|
 * feature}
 * Can also be used as a |method|:
 * 	GetName()->finddir()
 */
export function finddir(
  denops: Denops,
  name: unknown,
  path?: unknown,
  count?: unknown,
): Promise<unknown>;
export function finddir(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("finddir", ...args);
}

/**
 * Just like |finddir()|, but find a file instead of a directory.
 * Uses 'suffixesadd'.
 * Example:
 * 	:echo findfile("tags.vim", ".;")
 * Searches from the directory of the current file upwards until
 * it finds the file "tags.vim".
 * Can also be used as a |method|:
 * 	GetName()->findfile()
 */
export function findfile(
  denops: Denops,
  name: unknown,
  path?: unknown,
  count?: unknown,
): Promise<unknown>;
export function findfile(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("findfile", ...args);
}

/**
 * Flatten {list} up to {maxdepth} levels.  Without {maxdepth}
 * the result is a |List| without nesting, as if {maxdepth} is
 * a very large number.
 * The {list} is changed in place, use |flattennew()| if you do
 * not want that.
 * In Vim9 script flatten() cannot be used, you must always use
 * |flattennew()|.
 * {maxdepth} means how deep in nested lists changes are made.
 * {list} is not modified when {maxdepth} is 0.
 * {maxdepth} must be positive number.
 * If there is an error the number zero is returned.
 * Example:
 * 	:echo flatten([1, [2, [3, 4]], 5])
 * 	[1, 2, 3, 4, 5]
 * 	:echo flatten([1, [2, [3, 4]], 5], 1)
 * 	[1, 2, [3, 4], 5]
 */
export function flatten(
  denops: Denops,
  list: unknown,
  maxdepth?: unknown,
): Promise<unknown>;
export function flatten(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("flatten", ...args);
}

/**
 * Convert {expr} to a Number by omitting the part after the
 * decimal point.
 * {expr} must evaluate to a |Float| or a Number.
 * When the value of {expr} is out of range for a |Number| the
 * result is truncated to 0x7fffffff or -0x7fffffff (or when
 * 64-bit Number support is enabled, 0x7fffffffffffffff or
 * -0x7fffffffffffffff).  NaN results in -0x80000000 (or when
 * 64-bit Number support is enabled, -0x8000000000000000).
 * Examples:
 * 	echo float2nr(3.95)
 * 	3
 * 	echo float2nr(-23.45)
 * 	-23
 * 	echo float2nr(1.0e100)
 * 	2147483647  (or 9223372036854775807)
 * 	echo float2nr(-1.0e150)
 * 	-2147483647 (or -9223372036854775807)
 * 	echo float2nr(1.0e-100)
 * 	0
 * Can also be used as a |method|:
 * 	Compute()->float2nr()
 * {only available when compiled with the |+float| feature}
 */
export function float2nr(denops: Denops, expr: unknown): Promise<unknown>;
export function float2nr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("float2nr", ...args);
}

/**
 * Return the largest integral value less than or equal to
 * {expr} as a |Float| (round down).
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	echo floor(1.856)
 * 	1.0
 * 	echo floor(-5.456)
 * 	-6.0
 * 	echo floor(4.0)
 * 	4.0
 * Can also be used as a |method|:
 * 	Compute()->floor()
 * {only available when compiled with the |+float| feature}
 */
export function floor(denops: Denops, expr: unknown): Promise<unknown>;
export function floor(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("floor", ...args);
}

/**
 * Return the remainder of {expr1} / {expr2}, even if the
 * division is not representable.  Returns {expr1} - i * {expr2}
 * for some integer i such that if {expr2} is non-zero, the
 * result has the same sign as {expr1} and magnitude less than
 * the magnitude of {expr2}.  If {expr2} is zero, the value
 * returned is zero.  The value returned is a |Float|.
 * {expr1} and {expr2} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo fmod(12.33, 1.22)
 * 	0.13
 * 	:echo fmod(-12.33, 1.22)
 * 	-0.13
 * Can also be used as a |method|:
 * 	Compute()->fmod(1.22)
 * {only available when compiled with |+float| feature}
 */
export function fmod(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function fmod(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("fmod", ...args);
}

/**
 * Escape {string} for use as file name command argument.  All
 * characters that have a special meaning, such as '%' and '|'
 * are escaped with a backslash.
 * For most systems the characters escaped are
 * " \t\n*?[{`$\\%#'\"|!<".  For systems where a backslash
 * appears in a filename, it depends on the value of 'isfname'.
 * A leading '+' and '>' is also escaped (special after |:edit|
 * and |:write|).  And a "-" by itself (special after |:cd|).
 * Example:
 * 	:let fname = '+some str%nge|name'
 * 	:exe "edit " . fnameescape(fname)
 * results in executing:
 * 	edit \+some\ str\%nge\|name
 * Can also be used as a |method|:
 * 	GetName()->fnameescape()
 */
export function fnameescape(denops: Denops, string: unknown): Promise<unknown>;
export function fnameescape(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("fnameescape", ...args);
}

/**
 * Modify file name {fname} according to {mods}.  {mods} is a
 * string of characters like it is used for file names on the
 * command line.  See |filename-modifiers|.
 * Example:
 * 	:echo fnamemodify("main.c", ":p:h")
 * results in:
 * 	/home/mool/vim/vim/src
 * If {mods} is empty then {fname} is returned.
 * Note: Environment variables don't work in {fname}, use
 * |expand()| first then.
 * Can also be used as a |method|:
 * 	GetName()->fnamemodify(':p:h')
 */
export function fnamemodify(
  denops: Denops,
  fname: unknown,
  mods: unknown,
): Promise<unknown>;
export function fnamemodify(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("fnamemodify", ...args);
}

/**
 * The result is a Number.  If the line {lnum} is in a closed
 * fold, the result is the number of the first line in that fold.
 * If the line {lnum} is not in a closed fold, -1 is returned.
 * {lnum} is used like with |getline()|.  Thus "." is the current
 * line, "'m" mark m, etc.
 * Can also be used as a |method|:
 * 	GetLnum()->foldclosed()
 */
export function foldclosed(denops: Denops, lnum: unknown): Promise<unknown>;
export function foldclosed(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("foldclosed", ...args);
}

/**
 * The result is a Number.  If the line {lnum} is in a closed
 * fold, the result is the number of the last line in that fold.
 * If the line {lnum} is not in a closed fold, -1 is returned.
 * {lnum} is used like with |getline()|.  Thus "." is the current
 * line, "'m" mark m, etc.
 * Can also be used as a |method|:
 * 	GetLnum()->foldclosedend()
 */
export function foldclosedend(denops: Denops, lnum: unknown): Promise<unknown>;
export function foldclosedend(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("foldclosedend", ...args);
}

/**
 * The result is a Number, which is the foldlevel of line {lnum}
 * in the current buffer.  For nested folds the deepest level is
 * returned.  If there is no fold at line {lnum}, zero is
 * returned.  It doesn't matter if the folds are open or closed.
 * When used while updating folds (from 'foldexpr') -1 is
 * returned for lines where folds are still to be updated and the
 * foldlevel is unknown.  As a special case the level of the
 * previous line is usually available.
 * {lnum} is used like with |getline()|.  Thus "." is the current
 * line, "'m" mark m, etc.
 * Can also be used as a |method|:
 * 	GetLnum()->foldlevel()
 */
export function foldlevel(denops: Denops, lnum: unknown): Promise<unknown>;
export function foldlevel(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("foldlevel", ...args);
}

/**
 * Returns a String, to be displayed for a closed fold.  This is
 * the default function used for the 'foldtext' option and should
 * only be called from evaluating 'foldtext'.  It uses the
 * |v:foldstart|, |v:foldend| and |v:folddashes| variables.
 * The returned string looks like this:
 * 	+-- 45 lines: abcdef
 * The number of leading dashes depends on the foldlevel.  The
 * "45" is the number of lines in the fold.  "abcdef" is the text
 * in the first non-blank line of the fold.  Leading white space,
 * "//" or "/*" and the text from the 'foldmarker' and
 * 'commentstring' options is removed.
 * When used to draw the actual foldtext, the rest of the line
 * will be filled with the fold char from the 'fillchars'
 * setting.
 * {not available when compiled without the |+folding| feature}
 */
export function foldtext(denops: Denops): Promise<unknown>;
export function foldtext(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("foldtext", ...args);
}

/**
 * Returns the text that is displayed for the closed fold at line
 * {lnum}.  Evaluates 'foldtext' in the appropriate context.
 * When there is no closed fold at {lnum} an empty string is
 * returned.
 * {lnum} is used like with |getline()|.  Thus "." is the current
 * line, "'m" mark m, etc.
 * Useful when exporting folded text, e.g., to HTML.
 * {not available when compiled without the |+folding| feature}
 * Can also be used as a |method|:
 * 	GetLnum()->foldtextresult()
 */
export function foldtextresult(denops: Denops, lnum: unknown): Promise<unknown>;
export function foldtextresult(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("foldtextresult", ...args);
}

/**
 * Move the Vim window to the foreground.  Useful when sent from
 * a client to a Vim server. |remote_send()|
 * On Win32 systems this might not work, the OS does not always
 * allow a window to bring itself to the foreground.  Use
 * |remote_foreground()| instead.
 * {only in the Win32, Athena, Motif and GTK GUI versions and the
 * Win32 console version}
 */
export function foreground(denops: Denops): Promise<unknown>;
export function foreground(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("foreground", ...args);
}

/**
 * Just like |function()|, but the returned Funcref will lookup
 * the function by reference, not by name.  This matters when the
 * function {name} is redefined later.
 * Unlike |function()|, {name} must be an existing user function.
 * Also for autoloaded functions. {name} cannot be a builtin
 * function.
 * Can also be used as a |method|:
 * 	GetFuncname()->funcref([arg])
 */
export function funcref(
  denops: Denops,
  name: unknown,
  arglist?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function funcref(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("funcref", ...args);
}

/**
 * Return a |Funcref| variable that refers to function {name}.
 * {name} can be the name of a user defined function or an
 * internal function.
 * {name} can also be a Funcref or a partial.  When it is a
 * partial the dict stored in it will be used and the {dict}
 * argument is not allowed. E.g.:
 * 	let FuncWithArg = function(dict.Func, [arg])
 * 	let Broken = function(dict.Func, [arg], dict)
 * When using the Funcref the function will be found by {name},
 * also when it was redefined later.  Use |funcref()| to keep the
 * same function.
 * When {arglist} or {dict} is present this creates a partial.
 * That means the argument list and/or the dictionary is stored in
 * the Funcref and will be used when the Funcref is called.
 * The arguments are passed to the function in front of other
 * arguments, but after any argument from |method|.  Example:
 * 	func Callback(arg1, arg2, name)
 * 	...
 * 	let Partial = function('Callback', ['one', 'two'])
 * 	...
 * 	call Partial('name')
 * Invokes the function as with:
 * 	call Callback('one', 'two', 'name')
 * With a |method|:
 * 	func Callback(one, two, three)
 * 	...
 * 	let Partial = function('Callback', ['two'])
 * 	...
 * 	eval 'one'->Partial('three')
 * Invokes the function as with:
 * 	call Callback('one', 'two', 'three')
 * The function() call can be nested to add more arguments to the
 * Funcref.  The extra arguments are appended to the list of
 * arguments.  Example:
 * 	func Callback(arg1, arg2, name)
 * 	...
 * 	let Func = function('Callback', ['one'])
 * 	let Func2 = function(Func, ['two'])
 * 	...
 * 	call Func2('name')
 * Invokes the function as with:
 * 	call Callback('one', 'two', 'name')
 * The Dictionary is only useful when calling a "dict" function.
 * In that case the {dict} is passed in as "self". Example:
 * 	function Callback() dict
 * 	   echo "called for " . self.name
 * 	endfunction
 * 	...
 * 	let context = {"name": "example"}
 * 	let Func = function('Callback', context)
 * 	...
 * 	call Func()	" will echo: called for example
 * The use of function() is not needed when there are no extra
 * arguments, these two are equivalent:
 * 	let Func = function('Callback', context)
 * 	let Func = context.Callback
 * The argument list and the Dictionary can be combined:
 * 	function Callback(arg1, count) dict
 * 	...
 * 	let context = {"name": "example"}
 * 	let Func = function('Callback', ['one'], context)
 * 	...
 * 	call Func(500)
 * Invokes the function as with:
 * 	call context.Callback('one', 500)
 * Can also be used as a |method|:
 * 	GetFuncname()->function([arg])
 */
export function function_(
  denops: Denops,
  name: unknown,
  arglist?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function function_(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("function_", ...args);
}

/**
 * Cleanup unused |Lists|, |Dictionaries|, |Channels| and |Jobs|
 * that have circular references.
 * There is hardly ever a need to invoke this function, as it is
 * automatically done when Vim runs out of memory or is waiting
 * for the user to press a key after 'updatetime'.  Items without
 * circular references are always freed when they become unused.
 * This is useful if you have deleted a very big |List| and/or
 * |Dictionary| with circular references in a script that runs
 * for a long time.
 * When the optional {atexit} argument is one, garbage
 * collection will also be done when exiting Vim, if it wasn't
 * done before.  This is useful when checking for memory leaks.
 * The garbage collection is not done immediately but only when
 * it's safe to perform.  This is when waiting for the user to
 * type a character.  To force garbage collection immediately use
 * |test_garbagecollect_now()|.
 */
export function garbagecollect(
  denops: Denops,
  atexit?: unknown,
): Promise<unknown>;
export function garbagecollect(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("garbagecollect", ...args);
}

/**
 * Get item {idx} from |List| {list}.  When this item is not
 * available return {default}.  Return zero when {default} is
 * omitted.
 * Preferably used as a |method|:
 * 	mylist->get(idx)
 */
export function get(
  denops: Denops,
  list: unknown,
  idx: unknown,
  defaultValue?: unknown,
): Promise<unknown>;
export function get(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("get", ...args);
}

/**
 * Get information about buffers as a List of Dictionaries.
 * Without an argument information about all the buffers is
 * returned.
 * When the argument is a |Dictionary| only the buffers matching
 * the specified criteria are returned.  The following keys can
 * be specified in {dict}:
 * 	buflisted	include only listed buffers.
 * 	bufloaded	include only loaded buffers.
 * 	bufmodified	include only modified buffers.
 * Otherwise, {buf} specifies a particular buffer to return
 * information for.  For the use of {buf}, see |bufname()|
 * above.  If the buffer is found the returned List has one item.
 * Otherwise the result is an empty list.
 * Each returned List item is a dictionary with the following
 * entries:
 * 	bufnr		Buffer number.
 * 	changed		TRUE if the buffer is modified.
 * 	changedtick	Number of changes made to the buffer.
 * 	hidden		TRUE if the buffer is hidden.
 * 	lastused	Timestamp in seconds, like
 * 			|localtime()|, when the buffer was
 * 			last used.
 * 			{only with the |+viminfo| feature}
 * 	listed		TRUE if the buffer is listed.
 * 	lnum		Line number used for the buffer when
 * 			opened in the current window.
 * 			Only valid if the buffer has been
 * 			displayed in the window in the past.
 * 			If you want the line number of the
 * 			last known cursor position in a given
 * 			window, use |line()|:
 * 				:echo line('.', {winid})
 * 	linecount	Number of lines in the buffer (only
 * 			valid when loaded)
 * 	loaded		TRUE if the buffer is loaded.
 * 	name		Full path to the file in the buffer.
 * 	signs		List of signs placed in the buffer.
 * 			Each list item is a dictionary with
 * 			the following fields:
 * 			    id	  sign identifier
 * 			    lnum  line number
 * 			    name  sign name
 * 	variables	A reference to the dictionary with
 * 			buffer-local variables.
 * 	windows		List of |window-ID|s that display this
 * 			buffer
 * 	popups		List of popup |window-ID|s that
 * 			display this buffer
 * Examples:
 * 	for buf in getbufinfo()
 * 	    echo buf.name
 * 	endfor
 * 	for buf in getbufinfo({'buflisted':1})
 * 	    if buf.changed
 * 		....
 * 	    endif
 * 	endfor
 * To get buffer-local options use:
 * 	getbufvar({bufnr}, '&option_name')
 * Can also be used as a |method|:
 * 	GetBufnr()->getbufinfo()
 */
export function getbufinfo(denops: Denops, buf?: unknown): Promise<unknown>;
export function getbufinfo(denops: Denops, dict?: unknown): Promise<unknown>;
export function getbufinfo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getbufinfo", ...args);
}

/**
 * The result is the value of option or local buffer variable
 * {varname} in buffer {buf}.  Note that the name without "b:"
 * must be used.
 * The {varname} argument is a string.
 * When {varname} is empty returns a |Dictionary| with all the
 * buffer-local variables.
 * When {varname} is equal to "&" returns a |Dictionary| with all
 * the buffer-local options.
 * Otherwise, when {varname} starts with "&" returns the value of
 * a buffer-local option.
 * This also works for a global or buffer-local option, but it
 * doesn't work for a global variable, window-local variable or
 * window-local option.
 * For the use of {buf}, see |bufname()| above.
 * When the buffer or variable doesn't exist {def} or an empty
 * string is returned, there is no error message.
 * Examples:
 * 	:let bufmodified = getbufvar(1, "&mod")
 * 	:echo "todo myvar = " . getbufvar("todo", "myvar")
 * Can also be used as a |method|:
 * 	GetBufnr()->getbufvar(varname)
 */
export function getbufvar(
  denops: Denops,
  buf: unknown,
  varname: unknown,
  def?: unknown,
): Promise<unknown>;
export function getbufvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getbufvar", ...args);
}

/**
 * Returns the |changelist| for the buffer {buf}. For the use
 * of {buf}, see |bufname()| above. If buffer {buf} doesn't
 * exist, an empty list is returned.
 * The returned list contains two entries: a list with the change
 * locations and the current position in the list.  Each
 * entry in the change list is a dictionary with the following
 * entries:
 * 	col		column number
 * 	coladd		column offset for 'virtualedit'
 * 	lnum		line number
 * If buffer {buf} is the current buffer, then the current
 * position refers to the position in the list. For other
 * buffers, it is set to the length of the list.
 * Can also be used as a |method|:
 * 	GetBufnr()->getchangelist()
 */
export function getchangelist(denops: Denops, buf?: unknown): Promise<unknown>;
export function getchangelist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getchangelist", ...args);
}

/**
 * Get a single character from the user or input stream.
 * If [expr] is omitted, wait until a character is available.
 * If [expr] is 0, only get a character when one is available.
 * 	Return zero otherwise.
 * If [expr] is 1, only check if a character is available, it is
 * 	not consumed.  Return zero if no character available.
 * If you prefer always getting a string use |getcharstr()|.
 * Without [expr] and when [expr] is 0 a whole character or
 * special key is returned.  If it is a single character, the
 * result is a number.  Use nr2char() to convert it to a String.
 * Otherwise a String is returned with the encoded character.
 * For a special key it's a String with a sequence of bytes
 * starting with 0x80 (decimal: 128).  This is the same value as
 * the String "\<Key>", e.g., "\<Left>".  The returned value is
 * also a String when a modifier (shift, control, alt) was used
 * that is not included in the character.
 * When [expr] is 0 and Esc is typed, there will be a short delay
 * while Vim waits to see if this is the start of an escape
 * sequence.
 * When [expr] is 1 only the first byte is returned.  For a
 * one-byte character it is the character itself as a number.
 * Use nr2char() to convert it to a String.
 * Use getcharmod() to obtain any additional modifiers.
 * When the user clicks a mouse button, the mouse event will be
 * returned.  The position can then be found in |v:mouse_col|,
 * |v:mouse_lnum|, |v:mouse_winid| and |v:mouse_win|.
 * |getmousepos()| can also be used.  Mouse move events will be
 * ignored.
 * This example positions the mouse as it would normally happen:
 * 	let c = getchar()
 * 	if c == "\<LeftMouse>" && v:mouse_win > 0
 * 	  exe v:mouse_win . "wincmd w"
 * 	  exe v:mouse_lnum
 * 	  exe "normal " . v:mouse_col . "|"
 * 	endif
 * When using bracketed paste only the first character is
 * returned, the rest of the pasted text is dropped.
 * |xterm-bracketed-paste|.
 * There is no prompt, you will somehow have to make clear to the
 * user that a character has to be typed.  The screen is not
 * redrawn, e.g. when resizing the window.  When using a popup
 * window it should work better with a |popup-filter|.
 * There is no mapping for the character.
 * Key codes are replaced, thus when the user presses the <Del
 * key you get the code for the <Del> key, not the raw character
 * sequence.  Examples:
 * 	getchar() == "\<Del>"
 * 	getchar() == "\<S-Left>"
 * This example redefines "f" to ignore case:
 * 	:nmap f :call FindChar()<CR
 * 	:function FindChar()
 * 	:  let c = nr2char(getchar())
 * 	:  while col('.') < col('$') - 1
 * 	:    normal l
 * 	:    if getline('.')[col('.') - 1] ==? c
 * 	:      break
 * 	:    endif
 * 	:  endwhile
 * 	:endfunction
 * You may also receive synthetic characters, such as
 * |<CursorHold>|. Often you will want to ignore this and get
 * another character:
 * 	:function GetKey()
 * 	:  let c = getchar()
 * 	:  while c == "\<CursorHold>"
 * 	:    let c = getchar()
 * 	:  endwhile
 * 	:  return c
 * 	:endfunction
 */
export function getchar(denops: Denops, expr?: unknown): Promise<unknown>;
export function getchar(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getchar", ...args);
}

/**
 * The result is a Number which is the state of the modifiers for
 * the last obtained character with getchar() or in another way.
 * These values are added together:
 * 	2	shift
 * 	4	control
 * 	8	alt (meta)
 * 	16	meta (when it's different from ALT)
 * 	32	mouse double click
 * 	64	mouse triple click
 * 	96	mouse quadruple click (== 32 + 64)
 * 	128	command (Macintosh only)
 * Only the modifiers that have not been included in the
 * character itself are obtained.  Thus Shift-a results in "A"
 * without a modifier.
 */
export function getcharmod(denops: Denops): Promise<unknown>;
export function getcharmod(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcharmod", ...args);
}

/**
 * Return the current character search information as a {dict}
 * with the following entries:
 *     char	character previously used for a character
 * 		search (|t|, |f|, |T|, or |F|); empty string
 * 		if no character search has been performed
 *     forward	direction of character search; 1 for forward,
 * 		0 for backward
 *     until	type of character search; 1 for a |t| or |T|
 * 		character search, 0 for an |f| or |F|
 * 		character search
 * This can be useful to always have |;| and |,| search
 * forward/backward regardless of the direction of the previous
 * character search:
 * 	:nnoremap <expr> ; getcharsearch().forward ? ';' : ','
 * 	:nnoremap <expr> , getcharsearch().forward ? ',' : ';'
 * Also see |setcharsearch()|.
 */
export function getcharsearch(denops: Denops): Promise<unknown>;
export function getcharsearch(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcharsearch", ...args);
}

/**
 * Get a single character from the user or input stream as a
 * string.
 * If [expr] is omitted, wait until a character is available.
 * If [expr] is 0 or false, only get a character when one is
 * 	available.  Return an empty string otherwise.
 * If [expr] is 1 or true, only check if a character is
 * 	available, it is not consumed.  Return an empty string
 * 	if no character is available.
 * Otherwise this works like |getchar()|, except that a number
 * result is converted to a string.
 */
export function getcharstr(denops: Denops, expr?: unknown): Promise<unknown>;
export function getcharstr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcharstr", ...args);
}

/**
 * Return the current command-line.  Only works when the command
 * line is being edited, thus requires use of |c_CTRL-\_e| or
 * |c_CTRL-R_=|.
 * Example:
 * 	:cmap <F7> <C-\>eescape(getcmdline(), ' \')<CR
 * Returns an empty string when entering a password or using
 * |inputsecret()|.
 */
export function getcmdline(denops: Denops): Promise<unknown>;
export function getcmdline(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcmdline", ...args);
}

/**
 * Return the position of the cursor in the command line as a
 * byte count.  The first column is 1.
 * Only works when editing the command line, thus requires use of
 * |c_CTRL-\_e| or |c_CTRL-R_=| or an expression mapping.
 * Returns 0 otherwise.
 * Also see |getcmdtype()|, |setcmdpos()| and |getcmdline()|.
 */
export function getcmdpos(denops: Denops): Promise<unknown>;
export function getcmdpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcmdpos", ...args);
}

/**
 * Return the current command-line type. Possible return values
 * are:
 *     :	normal Ex command
 *     >	debug mode command |debug-mode|
 *     /	forward search command
 *     ?	backward search command
 *     @	|input()| command
 *     -	|:insert| or |:append| command
 *     =	|i_CTRL-R_=|
 * Only works when editing the command line, thus requires use of
 * |c_CTRL-\_e| or |c_CTRL-R_=| or an expression mapping.
 * Returns an empty string otherwise.
 * Also see |getcmdpos()|, |setcmdpos()| and |getcmdline()|.
 */
export function getcmdtype(denops: Denops): Promise<unknown>;
export function getcmdtype(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcmdtype", ...args);
}

/**
 * Return the current |command-line-window| type. Possible return
 * values are the same as |getcmdtype()|. Returns an empty string
 * when not in the command-line window.
 */
export function getcmdwintype(denops: Denops): Promise<unknown>;
export function getcmdwintype(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcmdwintype", ...args);
}

/**
 * Return a list of command-line completion matches. The String
 * {type} argument specifies what for.  The following completion
 * types are supported:
 * arglist		file names in argument list
 * augroup		autocmd groups
 * buffer		buffer names
 * behave		:behave suboptions
 * color		color schemes
 * command		Ex command (and arguments)
 * cmdline		|cmdline-completion| result
 * compiler	compilers
 * cscope		|:cscope| suboptions
 * diff_buffer     |:diffget| and |:diffput| completion
 * dir		directory names
 * environment	environment variable names
 * event		autocommand events
 * expression	Vim expression
 * file		file and directory names
 * file_in_path	file and directory names in |'path'|
 * filetype	filetype names |'filetype'|
 * function	function name
 * help		help subjects
 * highlight	highlight groups
 * history		:history suboptions
 * locale		locale names (as output of locale -a)
 * mapclear	buffer argument
 * mapping		mapping name
 * menu		menus
 * messages	|:messages| suboptions
 * option		options
 * packadd		optional package |pack-add| names
 * shellcmd	Shell command
 * sign		|:sign| suboptions
 * syntax		syntax file names |'syntax'|
 * syntime		|:syntime| suboptions
 * tag		tags
 * tag_listfiles	tags, file names
 * user		user names
 * var		user variables
 * If {pat} is an empty string, then all the matches are
 * returned.  Otherwise only items matching {pat} are returned.
 * See |wildcards| for the use of special characters in {pat}.
 * If the optional {filtered} flag is set to 1, then 'wildignore'
 * is applied to filter the results.  Otherwise all the matches
 * are returned. The 'wildignorecase' option always applies.
 * If {type} is "cmdline", then the |cmdline-completion| result is
 * returned.  For example, to complete the possible values after
 * a ":call" command:
 * 	echo getcompletion('call ', 'cmdline')
 * If there are no matches, an empty list is returned.  An
 * invalid value for {type} produces an error.
 * Can also be used as a |method|:
 * 	GetPattern()->getcompletion('color')
 */
export function getcompletion(
  denops: Denops,
  pat: unknown,
  type: unknown,
  filtered?: unknown,
): Promise<unknown>;
export function getcompletion(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcompletion", ...args);
}

/**
 * The result is a String, which is the name of the current
 * working directory.
 * With {winnr} return the local current directory of this window
 * in the current tab page.  {winnr} can be the window number or
 * the |window-ID|.
 * If {winnr} is -1 return the name of the global working
 * directory.  See also |haslocaldir()|.
 * With {winnr} and {tabnr} return the local current directory of
 * the window in the specified tab page. If {winnr} is -1 return
 * the working directory of the tabpage.
 * If {winnr} is zero use the current window, if {tabnr} is zero
 * use the current tabpage.
 * Without any arguments, return the working directory of the
 * current window.
 * Return an empty string if the arguments are invalid.
 * Examples:
 * 	" Get the working directory of the current window
 * 	:echo getcwd()
 * 	:echo getcwd(0)
 * 	:echo getcwd(0, 0)
 * 	" Get the working directory of window 3 in tabpage 2
 * 	:echo getcwd(3, 2)
 * 	" Get the global working directory
 * 	:echo getcwd(-1)
 * 	" Get the working directory of tabpage 3
 * 	:echo getcwd(-1, 3)
 * 	" Get the working directory of current tabpage
 * 	:echo getcwd(-1, 0)
 * Can also be used as a |method|:
 * 	GetWinnr()->getcwd()
 */
export function getcwd(
  denops: Denops,
  winnr?: unknown,
  tabnr?: unknown,
): Promise<unknown>;
export function getcwd(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getcwd", ...args);
}

/**
 * Return the value of environment variable {name}.  The {name}
 * argument is a string, without a leading '$'.  Example:
 * 	myHome = getenv('HOME')
 * When the variable does not exist |v:null| is returned.  That
 * is different from a variable set to an empty string, although
 * some systems interpret the empty value as the variable being
 * deleted.  See also |expr-env|.
 * Can also be used as a |method|:
 * 	GetVarname()->getenv()
 */
export function getenv(denops: Denops, name: unknown): Promise<unknown>;
export function getenv(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getenv", ...args);
}

/**
 * Without an argument returns the name of the normal font being
 * used.  Like what is used for the Normal highlight group
 * |hl-Normal|.
 * With an argument a check is done whether String {name} is a
 * valid font name.  If not then an empty string is returned.
 * Otherwise the actual font name is returned, or {name} if the
 * GUI does not support obtaining the real name.
 * Only works when the GUI is running, thus not in your vimrc or
 * gvimrc file.  Use the |GUIEnter| autocommand to use this
 * function just after the GUI has started.
 * Note that the GTK GUI accepts any font name, thus checking for
 * a valid name does not work.
 */
export function getfontname(denops: Denops, name?: unknown): Promise<unknown>;
export function getfontname(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getfontname", ...args);
}

/**
 * The result is a String, which is the read, write, and execute
 * permissions of the given file {fname}.
 * If {fname} does not exist or its directory cannot be read, an
 * empty string is returned.
 * The result is of the form "rwxrwxrwx", where each group of
 * "rwx" flags represent, in turn, the permissions of the owner
 * of the file, the group the file belongs to, and other users.
 * If a user does not have a given permission the flag for this
 * is replaced with the string "-".  Examples:
 * 	:echo getfperm("/etc/passwd")
 * 	:echo getfperm(expand("~/.vimrc"))
 * This will hopefully (from a security point of view) display
 * the string "rw-r--r--" or even "rw-------".
 * Can also be used as a |method|:
 * 	GetFilename()->getfperm()
 * For setting permissions use |setfperm()|.
 */
export function getfperm(denops: Denops, fname: unknown): Promise<unknown>;
export function getfperm(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getfperm", ...args);
}

/**
 * The result is a Number, which is the size in bytes of the
 * given file {fname}.
 * If {fname} is a directory, 0 is returned.
 * If the file {fname} can't be found, -1 is returned.
 * If the size of {fname} is too big to fit in a Number then -2
 * is returned.
 * Can also be used as a |method|:
 * 	GetFilename()->getfsize()
 */
export function getfsize(denops: Denops, fname: unknown): Promise<unknown>;
export function getfsize(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getfsize", ...args);
}

/**
 * The result is a Number, which is the last modification time of
 * the given file {fname}.  The value is measured as seconds
 * since 1st Jan 1970, and may be passed to strftime().  See also
 * |localtime()| and |strftime()|.
 * If the file {fname} can't be found -1 is returned.
 * Can also be used as a |method|:
 * 	GetFilename()->getftime()
 */
export function getftime(denops: Denops, fname: unknown): Promise<unknown>;
export function getftime(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getftime", ...args);
}

/**
 * The result is a String, which is a description of the kind of
 * file of the given file {fname}.
 * If {fname} does not exist an empty string is returned.
 * Here is a table over different kinds of files and their
 * results:
 * 	Normal file		"file"
 * 	Directory		"dir"
 * 	Symbolic link		"link"
 * 	Block device		"bdev"
 * 	Character device	"cdev"
 * 	Socket			"socket"
 * 	FIFO			"fifo"
 * 	All other		"other"
 * Example:
 * 	getftype("/home")
 * Note that a type such as "link" will only be returned on
 * systems that support it.  On some systems only "dir" and
 * "file" are returned.  On MS-Windows a symbolic link to a
 * directory returns "dir" instead of "link".
 * Can also be used as a |method|:
 * 	GetFilename()->getftype()
 */
export function getftype(denops: Denops, fname: unknown): Promise<unknown>;
export function getftype(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getftype", ...args);
}

/**
 * Returns the |jumplist| for the specified window.
 * Without arguments use the current window.
 * With {winnr} only use this window in the current tab page.
 * {winnr} can also be a |window-ID|.
 * With {winnr} and {tabnr} use the window in the specified tab
 * page.
 * The returned list contains two entries: a list with the jump
 * locations and the last used jump position number in the list.
 * Each entry in the jump location list is a dictionary with
 * the following entries:
 * 	bufnr		buffer number
 * 	col		column number
 * 	coladd		column offset for 'virtualedit'
 * 	filename	filename if available
 * 	lnum		line number
 * Can also be used as a |method|:
 * 	GetWinnr()->getjumplist()
 */
export function getjumplist(
  denops: Denops,
  winnr?: unknown,
  tabnr?: unknown,
): Promise<unknown>;
export function getjumplist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getjumplist", ...args);
}

/**
 * Returns a |List| with all the entries in the location list for
 * window {nr}.  {nr} can be the window number or the |window-ID|.
 * When {nr} is zero the current window is used.
 * For a location list window, the displayed location list is
 * returned.  For an invalid window number {nr}, an empty list is
 * returned. Otherwise, same as |getqflist()|.
 * If the optional {what} dictionary argument is supplied, then
 * returns the items listed in {what} as a dictionary. Refer to
 * |getqflist()| for the supported items in {what}.
 * In addition to the items supported by |getqflist()| in {what},
 * the following item is supported by |getloclist()|:
 * 	filewinid	id of the window used to display files
 * 			from the location list. This field is
 * 			applicable only when called from a
 * 			location list window. See
 * 			|location-list-file-window| for more
 * 			details.
 * Returns a |Dictionary| with default values if there is no
 * location list for the window {nr}.
 * Returns an empty Dictionary if window {nr} does not exist.
 * Examples (See also |getqflist-examples|):
 * 	:echo getloclist(3, {'all': 0})
 * 	:echo getloclist(5, {'filewinid': 0})
 */
export function getloclist(
  denops: Denops,
  nr: unknown,
  what?: unknown,
): Promise<unknown>;
export function getloclist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getloclist", ...args);
}

/**
 * Without the {buf} argument returns a |List| with information
 * about all the global marks. |mark|
 * If the optional {buf} argument is specified, returns the
 * local marks defined in buffer {buf}.  For the use of {buf},
 * see |bufname()|.
 * Each item in the returned List is a |Dict| with the following:
 *     mark   name of the mark prefixed by "'"
 *     pos	   a |List| with the position of the mark:
 * 		[bufnum, lnum, col, off]
 * 	   Refer to |getpos()| for more information.
 *     file   file name
 * Refer to |getpos()| for getting information about a specific
 * mark.
 * Can also be used as a |method|:
 * 	GetBufnr()->getmarklist()
 */
export function getmarklist(denops: Denops, buf?: unknown): Promise<unknown>;
export function getmarklist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getmarklist", ...args);
}

/**
 * Returns a |List| with all matches previously defined for the
 * current window by |matchadd()| and the |:match| commands.
 * |getmatches()| is useful in combination with |setmatches()|,
 * as |setmatches()| can restore a list of matches saved by
 * |getmatches()|.
 * If {win} is specified, use the window with this number or
 * window ID instead of the current window.
 * Example:
 * 	:echo getmatches()
 * 	[{'group': 'MyGroup1', 'pattern': 'TODO',
 * 	'priority': 10, 'id': 1}, {'group': 'MyGroup2',
 * 	'pattern': 'FIXME', 'priority': 10, 'id': 2}]
 * 	:let m = getmatches()
 * 	:call clearmatches()
 * 	:echo getmatches()
 * 	[]
 * 	:call setmatches(m)
 * 	:echo getmatches()
 * 	[{'group': 'MyGroup1', 'pattern': 'TODO',
 * 	'priority': 10, 'id': 1}, {'group': 'MyGroup2',
 * 	'pattern': 'FIXME', 'priority': 10, 'id': 2}]
 * 	:unlet m
 */
export function getmatches(denops: Denops, win?: unknown): Promise<unknown>;
export function getmatches(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getmatches", ...args);
}

/**
 * Returns a |Dictionary| with the last known position of the
 * mouse.  This can be used in a mapping for a mouse click or in
 * a filter of a popup window.  The items are:
 * 	screenrow	screen row
 * 	screencol	screen column
 * 	winid		Window ID of the click
 * 	winrow		row inside "winid"
 * 	wincol		column inside "winid"
 * 	line		text line inside "winid"
 * 	column		text column inside "winid"
 * All numbers are 1-based.
 * If not over a window, e.g. when in the command line, then only
 * "screenrow" and "screencol" are valid, the others are zero.
 * When on the status line below a window or the vertical
 * separator right of a window, the "line" and "column" values
 * are zero.
 * When the position is after the text then "column" is the
 * length of the text in bytes plus one.
 * If the mouse is over a popup window then that window is used.
 * When using |getchar()| the Vim variables |v:mouse_lnum|,
 * |v:mouse_col| and |v:mouse_winid| also provide these values.
 */
export function getmousepos(denops: Denops): Promise<unknown>;
export function getmousepos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getmousepos", ...args);
}

/**
 * Return a Number which is the process ID of the Vim process.
 * On Unix and MS-Windows this is a unique number, until Vim
 * exits.
 */
export function getpid(denops: Denops): Promise<unknown>;
export function getpid(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getpid", ...args);
}

/**
 * Returns a |List| with all the current quickfix errors.  Each
 * list item is a dictionary with these entries:
 * 	bufnr	number of buffer that has the file name, use
 * 		bufname() to get the name
 * 	module	module name
 * 	lnum	line number in the buffer (first line is 1)
 * 	end_lnum
 * 		end of line number if the item is multiline
 * 	col	column number (first column is 1)
 * 	end_col	end of column number if the item has range
 * 	vcol	|TRUE|: "col" is visual column
 * 		|FALSE|: "col" is byte index
 * 	nr	error number
 * 	pattern	search pattern used to locate the error
 * 	text	description of the error
 * 	type	type of the error, 'E', '1', etc.
 * 	valid	|TRUE|: recognized error message
 * When there is no error list or it's empty, an empty list is
 * returned. Quickfix list entries with a non-existing buffer
 * number are returned with "bufnr" set to zero (Note: some
 * functions accept buffer number zero for the alternate buffer,
 * you may need to explicitly check for zero).
 * Useful application: Find pattern matches in multiple files and
 * do something with them:
 * 	:vimgrep /theword/jg *.c
 * 	:for d in getqflist()
 * 	:   echo bufname(d.bufnr) ':' d.lnum '=' d.text
 * 	:endfor
 * If the optional {what} dictionary argument is supplied, then
 * returns only the items listed in {what} as a dictionary. The
 * following string items are supported in {what}:
 * 	changedtick	get the total number of changes made
 * 			to the list |quickfix-changedtick|
 * 	context	get the |quickfix-context|
 * 	efm	errorformat to use when parsing "lines". If
 * 		not present, then the 'errorformat' option
 * 		value is used.
 * 	id	get information for the quickfix list with
 * 		|quickfix-ID|; zero means the id for the
 * 		current list or the list specified by "nr"
 * 	idx	get information for the quickfix entry at this
 * 		index in the list specified by 'id' or 'nr'.
 * 		If set to zero, then uses the current entry.
 * 		See |quickfix-index|
 * 	items	quickfix list entries
 * 	lines	parse a list of lines using 'efm' and return
 * 		the resulting entries.  Only a |List| type is
 * 		accepted.  The current quickfix list is not
 * 		modified. See |quickfix-parse|.
 * 	nr	get information for this quickfix list; zero
 * 		means the current quickfix list and "$" means
 * 		the last quickfix list
 * 	qfbufnr number of the buffer displayed in the quickfix
 * 		window. Returns 0 if the quickfix buffer is
 * 		not present. See |quickfix-buffer|.
 * 	size	number of entries in the quickfix list
 * 	title	get the list title |quickfix-title|
 * 	winid	get the quickfix |window-ID|
 * 	all	all of the above quickfix properties
 * Non-string items in {what} are ignored. To get the value of a
 * particular item, set it to zero.
 * If "nr" is not present then the current quickfix list is used.
 * If both "nr" and a non-zero "id" are specified, then the list
 * specified by "id" is used.
 * To get the number of lists in the quickfix stack, set "nr" to
 * "$" in {what}. The "nr" value in the returned dictionary
 * contains the quickfix stack size.
 * When "lines" is specified, all the other items except "efm"
 * are ignored.  The returned dictionary contains the entry
 * "items" with the list of entries.
 * The returned dictionary contains the following entries:
 * 	changedtick	total number of changes made to the
 * 			list |quickfix-changedtick|
 * 	context	quickfix list context. See |quickfix-context|
 * 		If not present, set to "".
 * 	id	quickfix list ID |quickfix-ID|. If not
 * 		present, set to 0.
 * 	idx	index of the quickfix entry in the list. If not
 * 		present, set to 0.
 * 	items	quickfix list entries. If not present, set to
 * 		an empty list.
 * 	nr	quickfix list number. If not present, set to 0
 * 	qfbufnr	number of the buffer displayed in the quickfix
 * 		window. If not present, set to 0.
 * 	size	number of entries in the quickfix list. If not
 * 		present, set to 0.
 * 	title	quickfix list title text. If not present, set
 * 		to "".
 * 	winid	quickfix |window-ID|. If not present, set to 0
 * Examples (See also |getqflist-examples|):
 * 	:echo getqflist({'all': 1})
 * 	:echo getqflist({'nr': 2, 'title': 1})
 * 	:echo getqflist({'lines' : ["F1:10:L10"]})
 */
export function getqflist(denops: Denops, what?: unknown): Promise<unknown>;
export function getqflist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getqflist", ...args);
}

/**
 * The result is a String, which is the contents of register
 * {regname}.  Example:
 * 	:let cliptext = getreg('*')
 * When {regname} was not set the result is an empty string.
 * The {regname} argument is a string.
 * getreg('=') returns the last evaluated value of the expression
 * register.  (For use in maps.)
 * getreg('=', 1) returns the expression itself, so that it can
 * be restored with |setreg()|.  For other registers the extra
 * argument is ignored, thus you can always give it.
 * If {list} is present and |TRUE|, the result type is changed
 * to |List|. Each list item is one text line. Use it if you care
 * about zero bytes possibly present inside register: without
 * third argument both NLs and zero bytes are represented as NLs
 * (see |NL-used-for-Nul|).
 * When the register was not set an empty list is returned.
 * If {regname} is not specified, |v:register| is used.
 * In |Vim9-script| {regname} must be one character.
 * Can also be used as a |method|:
 * 	GetRegname()->getreg()
 */
export function getreg(
  denops: Denops,
  regname?: unknown,
  v1?: unknown,
  list?: unknown,
): Promise<unknown>;
export function getreg(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("getreg", ...args);
}

/**
 * The result is a String, which is type of register {regname}.
 * The value will be one of:
 *     "v"			for |characterwise| text
 *     "V"			for |linewise| text
 *     "<CTRL-V>{width}"	for |blockwise-visual| text
 *     ""			for an empty or unknown register
 * <CTRL-V> is one character with value 0x16.
 * The {regname} argument is a string.  If {regname} is not
 * specified, |v:register| is used.
 * In |Vim9-script| {regname} must be one character.
 * Can also be used as a |method|:
 * 	GetRegname()->getregtype()
 */
export function getregtype(denops: Denops, regname?: unknown): Promise<unknown>;
export function getregtype(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getregtype", ...args);
}

/**
 * If {tabnr} is not specified, then information about all the
 * tab pages is returned as a |List|. Each List item is a
 * |Dictionary|.  Otherwise, {tabnr} specifies the tab page
 * number and information about that one is returned.  If the tab
 * page does not exist an empty List is returned.
 * Each List item is a |Dictionary| with the following entries:
 * 	tabnr		tab page number.
 * 	variables	a reference to the dictionary with
 * 			tabpage-local variables
 * 	windows		List of |window-ID|s in the tab page.
 * Can also be used as a |method|:
 * 	GetTabnr()->gettabinfo()
 */
export function gettabinfo(denops: Denops, tabnr?: unknown): Promise<unknown>;
export function gettabinfo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("gettabinfo", ...args);
}

/**
 * Get the value of a tab-local variable {varname} in tab page
 * {tabnr}. |t:var|
 * Tabs are numbered starting with one.
 * The {varname} argument is a string.  When {varname} is empty a
 * dictionary with all tab-local variables is returned.
 * Note that the name without "t:" must be used.
 * When the tab or variable doesn't exist {def} or an empty
 * string is returned, there is no error message.
 * Can also be used as a |method|:
 * 	GetTabnr()->gettabvar(varname)
 */
export function gettabvar(
  denops: Denops,
  tabnr: unknown,
  varname: unknown,
  def?: unknown,
): Promise<unknown>;
export function gettabvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("gettabvar", ...args);
}

/**
 * Get the value of window-local variable {varname} in window
 * {winnr} in tab page {tabnr}.
 * The {varname} argument is a string.  When {varname} is empty a
 * dictionary with all window-local variables is returned.
 * When {varname} is equal to "&" get the values of all
 * window-local options in a |Dictionary|.
 * Otherwise, when {varname} starts with "&" get the value of a
 * window-local option.
 * Note that {varname} must be the name without "w:".
 * Tabs are numbered starting with one.  For the current tabpage
 * use |getwinvar()|.
 * {winnr} can be the window number or the |window-ID|.
 * When {winnr} is zero the current window is used.
 * This also works for a global option, buffer-local option and
 * window-local option, but it doesn't work for a global variable
 * or buffer-local variable.
 * When the tab, window or variable doesn't exist {def} or an
 * empty string is returned, there is no error message.
 * Examples:
 * 	:let list_is_on = gettabwinvar(1, 2, '&list')
 * 	:echo "myvar = " . gettabwinvar(3, 1, 'myvar')
 * To obtain all window-local variables use:
 * 	gettabwinvar({tabnr}, {winnr}, '&')
 * Can also be used as a |method|:
 * 	GetTabnr()->gettabwinvar(winnr, varname)
 */
export function gettabwinvar(
  denops: Denops,
  tabnr: unknown,
  winnr: unknown,
  varname: unknown,
  def?: unknown,
): Promise<unknown>;
export function gettabwinvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("gettabwinvar", ...args);
}

/**
 * The result is a Dict, which is the tag stack of window {winnr}.
 * {winnr} can be the window number or the |window-ID|.
 * When {winnr} is not specified, the current window is used.
 * When window {winnr} doesn't exist, an empty Dict is returned.
 * The returned dictionary contains the following entries:
 * 	curidx		Current index in the stack. When at
 * 			top of the stack, set to (length + 1).
 * 			Index of bottom of the stack is 1.
 * 	items		List of items in the stack. Each item
 * 			is a dictionary containing the
 * 			entries described below.
 * 	length		Number of entries in the stack.
 * Each item in the stack is a dictionary with the following
 * entries:
 * 	bufnr		buffer number of the current jump
 * 	from		cursor position before the tag jump.
 * 			See |getpos()| for the format of the
 * 			returned list.
 * 	matchnr		current matching tag number. Used when
 * 			multiple matching tags are found for a
 * 			name.
 * 	tagname		name of the tag
 * See |tagstack| for more information about the tag stack.
 * Can also be used as a |method|:
 * 	GetWinnr()->gettagstack()
 */
export function gettagstack(denops: Denops, winnr?: unknown): Promise<unknown>;
export function gettagstack(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("gettagstack", ...args);
}

/**
 * Returns information about windows as a |List| with Dictionaries.
 * If {winid} is given Information about the window with that ID
 * is returned, as a |List| with one item.  If the window does not
 * exist the result is an empty list.
 * Without {winid} information about all the windows in all the
 * tab pages is returned.
 * Each List item is a |Dictionary| with the following entries:
 * 	botline		last complete displayed buffer line
 * 	bufnr		number of buffer in the window
 * 	height		window height (excluding winbar)
 * 	loclist		1 if showing a location list
 * 			{only with the +quickfix feature}
 * 	quickfix	1 if quickfix or location list window
 * 			{only with the +quickfix feature}
 * 	terminal	1 if a terminal window
 * 			{only with the +terminal feature}
 * 	tabnr		tab page number
 * 	topline		first displayed buffer line
 * 	variables	a reference to the dictionary with
 * 			window-local variables
 * 	width		window width
 * 	winbar		1 if the window has a toolbar, 0
 * 			otherwise
 * 	wincol		leftmost screen column of the window;
 * 			"col" from |win_screenpos()|
 * 	winid		|window-ID|
 * 	winnr		window number
 * 	winrow		topmost screen line of the window;
 * 			"row" from |win_screenpos()|
 * Can also be used as a |method|:
 * 	GetWinnr()->getwininfo()
 */
export function getwininfo(denops: Denops, winid?: unknown): Promise<unknown>;
export function getwininfo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwininfo", ...args);
}

/**
 * The result is a |List| with two numbers, the result of
 * |getwinposx()| and |getwinposy()| combined:
 * 	[x-pos, y-pos]
 * {timeout} can be used to specify how long to wait in msec for
 * a response from the terminal.  When omitted 100 msec is used.
 * Use a longer time for a remote terminal.
 * When using a value less than 10 and no response is received
 * within that time, a previously reported position is returned,
 * if available.  This can be used to poll for the position and
 * do some work in the meantime:
 * 	while 1
 * 	  let res = getwinpos(1)
 * 	  if res[0] >= 0
 * 	    break
 * 	  endif
 * 	  " Do some work here
 * 	endwhile
 * Can also be used as a |method|:
 * 	GetTimeout()->getwinpos()
 */
export function getwinpos(denops: Denops, timeout?: unknown): Promise<unknown>;
export function getwinpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwinpos", ...args);
}

/**
 * The result is a Number, which is the X coordinate in pixels of
 * the left hand side of the GUI Vim window. Also works for an
 * xterm (uses a timeout of 100 msec).
 * The result will be -1 if the information is not available.
 * The value can be used with `:winpos`.
 */
export function getwinposx(denops: Denops): Promise<unknown>;
export function getwinposx(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwinposx", ...args);
}

/**
 * The result is a Number, which is the Y coordinate in pixels of
 * the top of the GUI Vim window.  Also works for an xterm (uses
 * a timeout of 100 msec).
 * The result will be -1 if the information is not available.
 * The value can be used with `:winpos`.
 */
export function getwinposy(denops: Denops): Promise<unknown>;
export function getwinposy(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwinposy", ...args);
}

/**
 * Like |gettabwinvar()| for the current tabpage.
 * Examples:
 * 	:let list_is_on = getwinvar(2, '&list')
 * 	:echo "myvar = " . getwinvar(1, 'myvar')
 * Can also be used as a |method|:
 * 	GetWinnr()->getwinvar(varname)
 */
export function getwinvar(
  denops: Denops,
  winnr: unknown,
  varname: unknown,
  def?: unknown,
): Promise<unknown>;
export function getwinvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getwinvar", ...args);
}

/**
 * Expand the file wildcards in {expr}.  See |wildcards| for the
 * use of special characters.
 * Unless the optional {nosuf} argument is given and is |TRUE|,
 * the 'suffixes' and 'wildignore' options apply: Names matching
 * one of the patterns in 'wildignore' will be skipped and
 * 'suffixes' affect the ordering of matches.
 * 'wildignorecase' always applies.
 * When {list} is present and it is |TRUE| the result is a |List|
 * with all matching files. The advantage of using a List is,
 * you also get filenames containing newlines correctly.
 * Otherwise the result is a String and when there are several
 * matches, they are separated by <NL> characters.
 * If the expansion fails, the result is an empty String or List.
 * You can also use |readdir()| if you need to do complicated
 * things, such as limiting the number of matches.
 * A name for a non-existing file is not included.  A symbolic
 * link is only included if it points to an existing file.
 * However, when the {alllinks} argument is present and it is
 * |TRUE| then all symbolic links are included.
 * For most systems backticks can be used to get files names from
 * any external command.  Example:
 * 	:let tagfiles = glob("`find . -name tags -print`")
 * 	:let &tags = substitute(tagfiles, "\n", ",", "g")
 * The result of the program inside the backticks should be one
 * item per line.  Spaces inside an item are allowed.
 * See |expand()| for expanding special Vim variables.  See
 * |system()| for getting the raw output of an external command.
 * Can also be used as a |method|:
 * 	GetExpr()->glob()
 */
export function glob(
  denops: Denops,
  expr: unknown,
  nosuf?: unknown,
  list?: unknown,
  alllinks?: unknown,
): Promise<unknown>;
export function glob(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("glob", ...args);
}

/**
 * Convert a file pattern, as used by glob(), into a search
 * pattern.  The result can be used to match with a string that
 * is a file name.  E.g.
 * 	if filename =~ glob2regpat('Make*.mak')
 * This is equivalent to:
 * 	if filename =~ '^Make.*\.mak$'
 * When {string} is an empty string the result is "^$", match an
 * empty string.
 * Note that the result depends on the system.  On MS-Windows
 * a backslash usually means a path separator.
 * Can also be used as a |method|:
 * 	GetExpr()->glob2regpat()
 */
export function glob2regpat(denops: Denops, string: unknown): Promise<unknown>;
export function glob2regpat(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("glob2regpat", ...args);
}

/**
 * Perform glob() for String {expr} on all directories in {path}
 * and concatenate the results.  Example:
 * 	:echo globpath(&rtp, "syntax/c.vim")
 * {path} is a comma-separated list of directory names.  Each
 * directory name is prepended to {expr} and expanded like with
 * |glob()|.  A path separator is inserted when needed.
 * To add a comma inside a directory name escape it with a
 * backslash.  Note that on MS-Windows a directory may have a
 * trailing backslash, remove it if you put a comma after it.
 * If the expansion fails for one of the directories, there is no
 * error message.
 * Unless the optional {nosuf} argument is given and is |TRUE|,
 * the 'suffixes' and 'wildignore' options apply: Names matching
 * one of the patterns in 'wildignore' will be skipped and
 * 'suffixes' affect the ordering of matches.
 * When {list} is present and it is |TRUE| the result is a |List|
 * with all matching files. The advantage of using a List is, you
 * also get filenames containing newlines correctly. Otherwise
 * the result is a String and when there are several matches,
 * they are separated by <NL> characters.  Example:
 * 	:echo globpath(&rtp, "syntax/c.vim", 0, 1)
 * {alllinks} is used as with |glob()|.
 * The "**" item can be used to search in a directory tree.
 * For example, to find all "README.txt" files in the directories
 * in 'runtimepath' and below:
 * 	:echo globpath(&rtp, "** /README.txt")
 * Upwards search and limiting the depth of "**" is not
 * supported, thus using 'path' will not always work properly.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetExpr()->globpath(&rtp)
 */
export function globpath(
  denops: Denops,
  path: unknown,
  expr: unknown,
  nosuf?: unknown,
  list?: unknown,
  alllinks?: unknown,
): Promise<unknown>;
export function globpath(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("globpath", ...args);
}

/**
 * The result is a Number, which is TRUE if |Dictionary| {dict}
 * has an entry with key {key}.  FALSE otherwise. The {key}
 * argument is a string.
 * Can also be used as a |method|:
 * 	mydict->has_key(key)
 */
export function has_key(
  denops: Denops,
  dict: unknown,
  key: unknown,
): Promise<unknown>;
export function has_key(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("has_key", ...args);
}

/**
 * The result is a Number:
 *     1   when the window has set a local directory via |:lcd|
 *     2   when the tab-page has set a local directory via |:tcd|
 *     0   otherwise.
 * Without arguments use the current window.
 * With {winnr} use this window in the current tab page.
 * With {winnr} and {tabnr} use the window in the specified tab
 * page.
 * {winnr} can be the window number or the |window-ID|.
 * If {winnr} is -1 it is ignored and only the tabpage is used.
 * Return 0 if the arguments are invalid.
 * Examples:
 * 	if haslocaldir() == 1
 * 	  " window local directory case
 * 	elseif haslocaldir() == 2
 * 	  " tab-local directory case
 * 	else
 * 	  " global directory case
 * 	endif
 * 	" current window
 * 	:echo haslocaldir()
 * 	:echo haslocaldir(0)
 * 	:echo haslocaldir(0, 0)
 * 	" window n in current tab page
 * 	:echo haslocaldir(n)
 * 	:echo haslocaldir(n, 0)
 * 	" window n in tab page m
 * 	:echo haslocaldir(n, m)
 * 	" tab page m
 * 	:echo haslocaldir(-1, m)
 * Can also be used as a |method|:
 * 	GetWinnr()->haslocaldir()
 */
export function haslocaldir(
  denops: Denops,
  winnr?: unknown,
  tabnr?: unknown,
): Promise<unknown>;
export function haslocaldir(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("haslocaldir", ...args);
}

/**
 * The result is a Number, which is TRUE if there is a mapping
 * that contains {what} in somewhere in the rhs (what it is
 * mapped to) and this mapping exists in one of the modes
 * indicated by {mode}.
 * The arguments {what} and {mode} are strings.
 * When {abbr} is there and it is |TRUE| use abbreviations
 * instead of mappings.  Don't forget to specify Insert and/or
 * Command-line mode.
 * Both the global mappings and the mappings local to the current
 * buffer are checked for a match.
 * If no matching mapping is found FALSE is returned.
 * The following characters are recognized in {mode}:
 * 	n	Normal mode
 * 	v	Visual and Select mode
 * 	x	Visual mode
 * 	s	Select mode
 * 	o	Operator-pending mode
 * 	i	Insert mode
 * 	l	Language-Argument ("r", "f", "t", etc.)
 * 	c	Command-line mode
 * When {mode} is omitted, "nvo" is used.
 * This function is useful to check if a mapping already exists
 * to a function in a Vim script.  Example:
 * 	:if !hasmapto('\ABCdoit')
 * 	:   map <Leader>d \ABCdoit
 * 	:endif
 * This installs the mapping to "\ABCdoit" only if there isn't
 * already a mapping to "\ABCdoit".
 * Can also be used as a |method|:
 * 	GetRHS()->hasmapto()
 */
export function hasmapto(
  denops: Denops,
  what: unknown,
  mode?: unknown,
  abbr?: unknown,
): Promise<unknown>;
export function hasmapto(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("hasmapto", ...args);
}

/**
 * Add the String {item} to the history {history} which can be
 * one of:
 * 	"cmd"	 or ":"	  command line history
 * 	"search" or "/"   search pattern history
 * 	"expr"	 or "="   typed expression history
 * 	"input"  or "@"	  input line history
 * 	"debug"  or ">"   debug command history
 * 	empty		  the current or last used history
 * The {history} string does not need to be the whole name, one
 * character is sufficient.
 * If {item} does already exist in the history, it will be
 * shifted to become the newest entry.
 * The result is a Number: TRUE if the operation was successful,
 * otherwise FALSE is returned.
 * Example:
 * 	:call histadd("input", strftime("%Y %b %d"))
 * 	:let date=input("Enter date: ")
 * This function is not available in the |sandbox|.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetHistory()->histadd('search')
 */
export function histadd(
  denops: Denops,
  history: unknown,
  item: unknown,
): Promise<unknown>;
export function histadd(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("histadd", ...args);
}

/**
 * Clear {history}, i.e. delete all its entries.  See |hist-names|
 * for the possible values of {history}.
 * If the parameter {item} evaluates to a String, it is used as a
 * regular expression.  All entries matching that expression will
 * be removed from the history (if there are any).
 * Upper/lowercase must match, unless "\c" is used |/\c|.
 * If {item} evaluates to a Number, it will be interpreted as
 * an index, see |:history-indexing|.  The respective entry will
 * be removed if it exists.
 * The result is TRUE for a successful operation, otherwise FALSE
 * is returned.
 * Examples:
 * Clear expression register history:
 * 	:call histdel("expr")
 * Remove all entries starting with "*" from the search history:
 * 	:call histdel("/", '^\*')
 * The following three are equivalent:
 * 	:call histdel("search", histnr("search"))
 * 	:call histdel("search", -1)
 * 	:call histdel("search", '^'.histget("search", -1).'$')
 * To delete the last search pattern and use the last-but-one for
 * the "n" command and 'hlsearch':
 * 	:call histdel("search", -1)
 * 	:let @/ = histget("search", -1)
 * Can also be used as a |method|:
 * 	GetHistory()->histdel()
 */
export function histdel(
  denops: Denops,
  history: unknown,
  item?: unknown,
): Promise<unknown>;
export function histdel(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("histdel", ...args);
}

/**
 * The result is a String, the entry with Number {index} from
 * {history}.  See |hist-names| for the possible values of
 * {history}, and |:history-indexing| for {index}.  If there is
 * no such entry, an empty String is returned.  When {index} is
 * omitted, the most recent item from the history is used.
 * Examples:
 * Redo the second last search from history.
 * 	:execute '/' . histget("search", -2)
 * Define an Ex command ":H {num}" that supports re-execution of
 * the {num}th entry from the output of |:history|.
 * 	:command -nargs=1 H execute histget("cmd", 0+<args>)
 * Can also be used as a |method|:
 * 	GetHistory()->histget()
 */
export function histget(
  denops: Denops,
  history: unknown,
  index?: unknown,
): Promise<unknown>;
export function histget(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("histget", ...args);
}

/**
 * The result is the Number of the current entry in {history}.
 * See |hist-names| for the possible values of {history}.
 * If an error occurred, -1 is returned.
 * Example:
 * 	:let inp_index = histnr("expr")
 * Can also be used as a |method|:
 * 	GetHistory()->histnr()
 */
export function histnr(denops: Denops, history: unknown): Promise<unknown>;
export function histnr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("histnr", ...args);
}

/**
 * The result is a Number, which is TRUE if a highlight group
 * called {name} exists.  This is when the group has been
 * defined in some way.  Not necessarily when highlighting has
 * been defined for it, it may also have been used for a syntax
 * item.
 * Obsolete name: highlight_exists().
 * Can also be used as a |method|:
 * 	GetName()->hlexists()
 */
export function hlexists(denops: Denops, name: unknown): Promise<unknown>;
export function hlexists(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("hlexists", ...args);
}

/**
 * The result is a Number, which is the ID of the highlight group
 * with name {name}.  When the highlight group doesn't exist,
 * zero is returned.
 * This can be used to retrieve information about the highlight
 * group.  For example, to get the background color of the
 * "Comment" group:
 * 	:echo synIDattr(synIDtrans(hlID("Comment")), "bg")
 * Obsolete name: highlightID().
 * Can also be used as a |method|:
 * 	GetName()->hlID()
 */
export function hlID(denops: Denops, name: unknown): Promise<unknown>;
export function hlID(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("hlID", ...args);
}

/**
 * The result is a String, which is the name of the machine on
 * which Vim is currently running.  Machine names greater than
 * 256 characters long are truncated.
 */
export function hostname(denops: Denops): Promise<unknown>;
export function hostname(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("hostname", ...args);
}

/**
 * The result is a String, which is the text {string} converted
 * from encoding {from} to encoding {to}.
 * When the conversion completely fails an empty string is
 * returned.  When some characters could not be converted they
 * are replaced with "?".
 * The encoding names are whatever the iconv() library function
 * can accept, see ":!man 3 iconv".
 * Most conversions require Vim to be compiled with the |+iconv|
 * feature.  Otherwise only UTF-8 to latin1 conversion and back
 * can be done.
 * This can be used to display messages with special characters,
 * no matter what 'encoding' is set to.  Write the message in
 * UTF-8 and use:
 * 	echo iconv(utf8_str, "utf-8", &enc)
 * Note that Vim uses UTF-8 for all Unicode encodings, conversion
 * from/to UCS-2 is automatically changed to use UTF-8.  You
 * cannot use UCS-2 in a string anyway, because of the NUL bytes.
 * Can also be used as a |method|:
 * 	GetText()->iconv('latin1', 'utf-8')
 */
export function iconv(
  denops: Denops,
  string: unknown,
  from: unknown,
  to: unknown,
): Promise<unknown>;
export function iconv(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("iconv", ...args);
}

/**
 * The result is a Number, which is indent of line {lnum} in the
 * current buffer.  The indent is counted in spaces, the value
 * of 'tabstop' is relevant.  {lnum} is used just like in
 * |getline()|.
 * When {lnum} is invalid -1 is returned.
 * Can also be used as a |method|:
 * 	GetLnum()->indent()
 */
export function indent(denops: Denops, lnum: unknown): Promise<unknown>;
export function indent(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("indent", ...args);
}

/**
 * If {object} is a |List| return the lowest index where the item
 * has a value equal to {expr}.  There is no automatic
 * conversion, so the String "4" is different from the Number 4.
 * And the number 4 is different from the Float 4.0.  The value
 * of 'ignorecase' is not used here, case always matters.
 * If {object} is |Blob| return the lowest index where the byte
 * value is equal to {expr}.
 * If {start} is given then start looking at the item with index
 * {start} (may be negative for an item relative to the end).
 * When {ic} is given and it is |TRUE|, ignore case.  Otherwise
 * case must match.
 * -1 is returned when {expr} is not found in {object}.
 * Example:
 * 	:let idx = index(words, "the")
 * 	:if index(numbers, 123) >= 0
 * Can also be used as a |method|:
 * 	GetObject()->index(what)
 */
export function index(
  denops: Denops,
  object: unknown,
  expr: unknown,
  start?: unknown,
  ic?: unknown,
): Promise<unknown>;
export function index(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("index", ...args);
}

/**
 * When {object} is a |List| or a |Blob| insert {item} at the start
 * of it.
 * If {idx} is specified insert {item} before the item with index
 * {idx}.  If {idx} is zero it goes before the first item, just
 * like omitting {idx}.  A negative {idx} is also possible, see
 * |list-index|.  -1 inserts just before the last item.
 * Returns the resulting |List| or |Blob|.  Examples:
 * 	:let mylist = insert([2, 3, 5], 1)
 * 	:call insert(mylist, 4, -1)
 * 	:call insert(mylist, 6, len(mylist))
 * The last example can be done simpler with |add()|.
 * Note that when {item} is a |List| it is inserted as a single
 * item.  Use |extend()| to concatenate |Lists|.
 * Can also be used as a |method|:
 * 	mylist->insert(item)
 */
export function insert(
  denops: Denops,
  object: unknown,
  item: unknown,
  idx?: unknown,
): Promise<unknown>;
export function insert(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("insert", ...args);
}

/**
 * Interrupt script execution.  It works more or less like the
 * user typing CTRL-C, most commands won't execute and control
 * returns to the user.  This is useful to abort execution
 * from lower down, e.g. in an autocommand.  Example:
 * :function s:check_typoname(file)
 * :   if fnamemodify(a:file, ':t') == '['
 * :       echomsg 'Maybe typo'
 * :       call interrupt()
 * :   endif
 * :endfunction
 * :au BufWritePre * call s:check_typoname(expand('<amatch>'))
 */
export function interrupt(denops: Denops): Promise<unknown>;
export function interrupt(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("interrupt", ...args);
}

/**
 * Bitwise invert.  The argument is converted to a number.  A
 * List, Dict or Float argument causes an error.  Example:
 * 	:let bits = invert(bits)
 * Can also be used as a |method|:
 * 	:let bits = bits->invert()
 */
export function invert(denops: Denops, expr: unknown): Promise<unknown>;
export function invert(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("invert", ...args);
}

/**
 * The result is a Number, which is |TRUE| when a directory
 * with the name {directory} exists.  If {directory} doesn't
 * exist, or isn't a directory, the result is |FALSE|.  {directory}
 * is any expression, which is used as a String.
 * Can also be used as a |method|:
 * 	GetName()->isdirectory()
 */
export function isdirectory(
  denops: Denops,
  directory: unknown,
): Promise<unknown>;
export function isdirectory(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("isdirectory", ...args);
}

/**
 * Return 1 if {expr} is a positive infinity, or -1 a negative
 * infinity, otherwise 0.
 * 	:echo isinf(1.0 / 0.0)
 * 	1
 * 	:echo isinf(-1.0 / 0.0)
 * 	-1
 * Can also be used as a |method|:
 * 	Compute()->isinf()
 * {only available when compiled with the |+float| feature}
 */
export function isinf(denops: Denops, expr: unknown): Promise<unknown>;
export function isinf(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("isinf", ...args);
}

/**
 * The result is a Number, which is |TRUE| when {expr} is the
 * name of a locked variable.
 * The string argument {expr} must be the name of a variable,
 * |List| item or |Dictionary| entry, not the variable itself!
 * Example:
 * 	:let alist = [0, ['a', 'b'], 2, 3]
 * 	:lockvar 1 alist
 * 	:echo islocked('alist')		" 1
 * 	:echo islocked('alist[1]')	" 0
 * When {expr} is a variable that does not exist you get an error
 * message.  Use |exists()| to check for existence.
 * In Vim9 script it does not work for local variables.
 * Can also be used as a |method|:
 * 	GetName()->islocked()
 */
export function islocked(denops: Denops, expr: unknown): Promise<unknown>;
export function islocked(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("islocked", ...args);
}

/**
 * Return |TRUE| if {expr} is a float with value NaN.
 * 	echo isnan(0.0 / 0.0)
 * 	1
 * Can also be used as a |method|:
 * 	Compute()->isnan()
 * {only available when compiled with the |+float| feature}
 */
export function isnan(denops: Denops, expr: unknown): Promise<unknown>;
export function isnan(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("isnan", ...args);
}

/**
 * Return a |List| with all the key-value pairs of {dict}.  Each
 * |List| item is a list with two items: the key of a {dict}
 * entry and the value of this entry.  The |List| is in arbitrary
 * order.  Also see |keys()| and |values()|.
 * Example:
 * 	for [key, value] in items(mydict)
 * 	   echo key . ': ' . value
 * 	endfor
 * Can also be used as a |method|:
 * 	mydict->items()
 */
export function items(denops: Denops, dict: unknown): Promise<unknown>;
export function items(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("items", ...args);
}

/**
 * Join the items in {list} together into one String.
 * When {sep} is specified it is put in between the items.  If
 * {sep} is omitted a single space is used.
 * Note that {sep} is not added at the end.  You might want to
 * add it there too:
 * 	let lines = join(mylist, "\n") . "\n"
 * String items are used as-is.  |Lists| and |Dictionaries| are
 * converted into a string like with |string()|.
 * The opposite function is |split()|.
 * Can also be used as a |method|:
 * 	mylist->join()
 */
export function join(
  denops: Denops,
  list: unknown,
  sep?: unknown,
): Promise<unknown>;
export function join(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("join", ...args);
}

/**
 * This parses a JSON formatted string and returns the equivalent
 * in Vim values.  See |json_encode()| for the relation between
 * JSON and Vim values.
 * The decoding is permissive:
 * - A trailing comma in an array and object is ignored, e.g.
 *   "[1, 2, ]" is the same as "[1, 2]".
 * - Integer keys are accepted in objects, e.g. {1:2} is the
 *   same as {"1":2}.
 * - More floating point numbers are recognized, e.g. "1." for
 *   "1.0", or "001.2" for "1.2". Special floating point values
 *   "Infinity", "-Infinity" and "NaN" (capitalization ignored)
 *   are accepted.
 * - Leading zeroes in integer numbers are ignored, e.g. "012"
 *   for "12" or "-012" for "-12".
 * - Capitalization is ignored in literal names null, true or
 *   false, e.g. "NULL" for "null", "True" for "true".
 * - Control characters U+0000 through U+001F which are not
 *   escaped in strings are accepted, e.g. "	" (tab
 *   character in string) for "\t".
 * - An empty JSON expression or made of only spaces is accepted
 *   and results in v:none.
 * - Backslash in an invalid 2-character sequence escape is
 *   ignored, e.g. "\a" is decoded as "a".
 * - A correct surrogate pair in JSON strings should normally be
 *   a 12 character sequence such as "\uD834\uDD1E", but
 *   json_decode() silently accepts truncated surrogate pairs
 *   such as "\uD834" or "\uD834\u"
 * A duplicate key in an object, valid in rfc7159, is not
 * accepted by json_decode() as the result must be a valid Vim
 * type, e.g. this fails: {"a":"b", "a":"c"}
 * Can also be used as a |method|:
 * 	ReadObject()->json_decode()
 */
export function json_decode(denops: Denops, string: unknown): Promise<unknown>;
export function json_decode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("json_decode", ...args);
}

/**
 * Encode {expr} as JSON and return this as a string.
 * The encoding is specified in:
 * https://tools.ietf.org/html/rfc7159.html
 * Vim values are converted as follows:
 *    |Number|		decimal number
 *    |Float|		floating point number
 *    Float nan		"NaN"
 *    Float inf		"Infinity"
 *    Float -inf		"-Infinity"
 *    |String|		in double quotes (possibly null)
 *    |Funcref|		not possible, error
 *    |List|		as an array (possibly null); when
 * 			used recursively: []
 *    |Dict|		as an object (possibly null); when
 * 			used recursively: {}
 *    |Blob|		as an array of the individual bytes
 *    v:false		"false"
 *    v:true		"true"
 *    v:none		"null"
 *    v:null		"null"
 * Note that NaN and Infinity are passed on as values.  This is
 * missing in the JSON standard, but several implementations do
 * allow it.  If not then you will get an error.
 * Can also be used as a |method|:
 * 	GetObject()->json_encode()
 */
export function json_encode(denops: Denops, expr: unknown): Promise<unknown>;
export function json_encode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("json_encode", ...args);
}

/**
 * Return a |List| with all the keys of {dict}.  The |List| is in
 * arbitrary order.  Also see |items()| and |values()|.
 * Can also be used as a |method|:
 * 	mydict->keys()
 */
export function keys(denops: Denops, dict: unknown): Promise<unknown>;
export function keys(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("keys", ...args);
}

/**
 * When {expr} is a String or a Number the length in bytes is
 * used, as with |strlen()|.
 * When {expr} is a |List| the number of items in the |List| is
 * returned.
 * When {expr} is a |Blob| the number of bytes is returned.
 * When {expr} is a |Dictionary| the number of entries in the
 * |Dictionary| is returned.
 * Otherwise an error is given.
 * Can also be used as a |method|:
 * 	mylist->len()
 */
export function len(denops: Denops, expr: unknown): Promise<unknown>;
export function len(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("len", ...args);
}

/**
 * Call function {funcname} in the run-time library {libname}
 * with single argument {argument}.
 * This is useful to call functions in a library that you
 * especially made to be used with Vim.  Since only one argument
 * is possible, calling standard library functions is rather
 * limited.
 * The result is the String returned by the function.  If the
 * function returns NULL, this will appear as an empty string ""
 * to Vim.
 * If the function returns a number, use libcallnr()!
 * If {argument} is a number, it is passed to the function as an
 * int; if {argument} is a string, it is passed as a
 * null-terminated string.
 * This function will fail in |restricted-mode|.
 * libcall() allows you to write your own 'plug-in' extensions to
 * Vim without having to recompile the program.  It is NOT a
 * means to call system functions!  If you try to do so Vim will
 * very probably crash.
 * For Win32, the functions you write must be placed in a DLL
 * and use the normal C calling convention (NOT Pascal which is
 * used in Windows System DLLs).  The function must take exactly
 * one parameter, either a character pointer or a long integer,
 * and must return a character pointer or NULL.  The character
 * pointer returned must point to memory that will remain valid
 * after the function has returned (e.g. in static data in the
 * DLL).  If it points to allocated memory, that memory will
 * leak away.  Using a static buffer in the function should work,
 * it's then freed when the DLL is unloaded.
 * WARNING: If the function returns a non-valid pointer, Vim may
 * crash!	This also happens if the function returns a number,
 * because Vim thinks it's a pointer.
 * For Win32 systems, {libname} should be the filename of the DLL
 * without the ".DLL" suffix.  A full path is only required if
 * the DLL is not in the usual places.
 * For Unix: When compiling your own plugins, remember that the
 * object code must be compiled as position-independent ('PIC').
 * {only in Win32 and some Unix versions, when the |+libcall|
 * feature is present}
 * Examples:
 * 	:echo libcall("libc.so", "getenv", "HOME")
 * Can also be used as a |method|, the base is passed as the
 * third argument:
 * 	GetValue()->libcall("libc.so", "getenv")
 */
export function libcall(
  denops: Denops,
  libname: unknown,
  funcname: unknown,
  argument: unknown,
): Promise<unknown>;
export function libcall(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("libcall", ...args);
}

/**
 * Just like |libcall()|, but used for a function that returns an
 * int instead of a string.
 * {only in Win32 on some Unix versions, when the |+libcall|
 * feature is present}
 * Examples:
 * 	:echo libcallnr("/usr/lib/libc.so", "getpid", "")
 * 	:call libcallnr("libc.so", "printf", "Hello World!\n")
 * 	:call libcallnr("libc.so", "sleep", 10)
 * Can also be used as a |method|, the base is passed as the
 * third argument:
 * 	GetValue()->libcallnr("libc.so", "printf")
 */
export function libcallnr(
  denops: Denops,
  libname: unknown,
  funcname: unknown,
  argument: unknown,
): Promise<unknown>;
export function libcallnr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("libcallnr", ...args);
}

/**
 * Get the amount of indent for line {lnum} according the lisp
 * indenting rules, as with 'lisp'.
 * The indent is counted in spaces, the value of 'tabstop' is
 * relevant.  {lnum} is used just like in |getline()|.
 * When {lnum} is invalid or Vim was not compiled the
 * |+lispindent| feature, -1 is returned.
 * Can also be used as a |method|:
 * 	GetLnum()->lispindent()
 */
export function lispindent(denops: Denops, lnum: unknown): Promise<unknown>;
export function lispindent(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("lispindent", ...args);
}

/**
 * Convert each number in {list} to a character string can
 * concatenate them all.  Examples:
 * 	list2str([32])		returns " "
 * 	list2str([65, 66, 67])	returns "ABC"
 * The same can be done (slowly) with:
 * 	join(map(list, {nr, val -> nr2char(val)}), '')
 * |str2list()| does the opposite.
 * When {utf8} is omitted or zero, the current 'encoding' is used.
 * With {utf8} is 1, always return utf-8 characters.
 * With utf-8 composing characters work as expected:
 * 	list2str([97, 769])	returns "á"
 * Can also be used as a |method|:
 * 	GetList()->list2str()
 */
export function list2str(
  denops: Denops,
  list: unknown,
  utf8?: unknown,
): Promise<unknown>;
export function list2str(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("list2str", ...args);
}

/**
 * Return the current time, measured as seconds since 1st Jan
 * 1970.  See also |strftime()|, |strptime()| and |getftime()|.
 */
export function localtime(denops: Denops): Promise<unknown>;
export function localtime(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("localtime", ...args);
}

/**
 * Return the natural logarithm (base e) of {expr} as a |Float|.
 * {expr} must evaluate to a |Float| or a |Number| in the range
 * (0, inf].
 * Examples:
 * 	:echo log(10)
 * 	2.302585
 * 	:echo log(exp(5))
 * 	5.0
 * Can also be used as a |method|:
 * 	Compute()->log()
 * {only available when compiled with the |+float| feature}
 */
export function log(denops: Denops, expr: unknown): Promise<unknown>;
export function log(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("log", ...args);
}

/**
 * Return the logarithm of Float {expr} to base 10 as a |Float|.
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo log10(1000)
 * 	3.0
 * 	:echo log10(0.01)
 * 	-2.0
 * Can also be used as a |method|:
 * 	Compute()->log10()
 * {only available when compiled with the |+float| feature}
 */
export function log10(denops: Denops, expr: unknown): Promise<unknown>;
export function log10(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("log10", ...args);
}

/**
 * {expr1} must be a |List|, |Blob| or |Dictionary|.
 * Replace each item in {expr1} with the result of evaluating
 * {expr2}.  For a |Blob| each byte is replaced.
 * If the item type changes you may want to use |mapnew()| to
 * create a new List or Dictionary.  This is required when using
 * Vim9 script.
 * {expr2} must be a |string| or |Funcref|.
 * If {expr2} is a |string|, inside {expr2} |v:val| has the value
 * of the current item.  For a |Dictionary| |v:key| has the key
 * of the current item and for a |List| |v:key| has the index of
 * the current item.  For a |Blob| |v:key| has the index of the
 * current byte.
 * Example:
 * 	:call map(mylist, '"> " . v:val . " <"')
 * This puts "> " before and " <" after each item in "mylist".
 * Note that {expr2} is the result of an expression and is then
 * used as an expression again.  Often it is good to use a
 * |literal-string| to avoid having to double backslashes.  You
 * still have to double ' quotes
 * If {expr2} is a |Funcref| it is called with two arguments:
 * 	1. The key or the index of the current item.
 * 	2. the value of the current item.
 * The function must return the new value of the item. Example
 * that changes each value by "key-value":
 * 	func KeyValue(key, val)
 * 	  return a:key . '-' . a:val
 * 	endfunc
 * 	call map(myDict, function('KeyValue'))
 * It is shorter when using a |lambda|:
 * 	call map(myDict, {key, val -> key . '-' . val})
 * If you do not use "val" you can leave it out:
 * 	call map(myDict, {key -> 'item: ' . key})
 * If you do not use "key" you can use a short name:
 * 	call map(myDict, {_, val -> 'item: ' . val})
 * The operation is done in-place.  If you want a |List| or
 * |Dictionary| to remain unmodified make a copy first:
 * 	:let tlist = map(copy(mylist), ' v:val . "\t"')
 * Returns {expr1}, the |List|, |Blob| or |Dictionary| that was
 * filtered.  When an error is encountered while evaluating
 * {expr2} no further items in {expr1} are processed.  When
 * {expr2} is a Funcref errors inside a function are ignored,
 * unless it was defined with the "abort" flag.
 * Can also be used as a |method|:
 * 	mylist->map(expr2)
 */
export function map(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function map(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("map", ...args);
}

/**
 * When {dict} is omitted or zero: Return the rhs of mapping
 * {name} in mode {mode}.  The returned String has special
 * characters translated like in the output of the ":map" command
 * listing.
 * When there is no mapping for {name}, an empty String is
 * returned.  When the mapping for {name} is empty, then "<Nop>"
 * is returned.
 * The {name} can have special key names, like in the ":map"
 * command.
 * {mode} can be one of these strings:
 * 	"n"	Normal
 * 	"v"	Visual (including Select)
 * 	"o"	Operator-pending
 * 	"i"	Insert
 * 	"c"	Cmd-line
 * 	"s"	Select
 * 	"x"	Visual
 * 	"l"	langmap |language-mapping|
 * 	"t"	Terminal-Job
 * 	""	Normal, Visual and Operator-pending
 * When {mode} is omitted, the modes for "" are used.
 * When {abbr} is there and it is |TRUE| use abbreviations
 * instead of mappings.
 * When {dict} is there and it is |TRUE| return a dictionary
 * containing all the information of the mapping with the
 * following items:
 *   "lhs"	     The {lhs} of the mapping as it would be typed
 *   "lhsraw"   The {lhs} of the mapping as raw bytes
 *   "lhsrawalt" The {lhs} of the mapping as raw bytes, alternate
 *   	      form, only present when it differs from "lhsraw"
 *   "rhs"	     The {rhs} of the mapping as typed.
 *   "silent"   1 for a |:map-silent| mapping, else 0.
 *   "noremap"  1 if the {rhs} of the mapping is not remappable.
 *   "script"   1 if mapping was defined with <script>.
 *   "expr"     1 for an expression mapping (|:map-<expr>|).
 *   "buffer"   1 for a buffer local mapping (|:map-local|).
 *   "mode"     Modes for which the mapping is defined. In
 * 	     addition to the modes mentioned above, these
 * 	     characters will be used:
 * 	     " "     Normal, Visual and Operator-pending
 * 	     "!"     Insert and Commandline mode
 * 		     (|mapmode-ic|)
 *   "sid"	     The script local ID, used for <sid> mappings
 * 	     (|<SID>|).
 *   "lnum"     The line number in "sid", zero if unknown.
 *   "nowait"   Do not wait for other, longer mappings.
 * 	     (|:map-<nowait>|).
 * The dictionary can be used to restore a mapping with
 * |mapset()|.
 * The mappings local to the current buffer are checked first,
 * then the global mappings.
 * This function can be used to map a key even when it's already
 * mapped, and have it do the original mapping too.  Sketch:
 * 	exe 'nnoremap <Tab> ==' . maparg('<Tab>', 'n')
 * Can also be used as a |method|:
 * 	GetKey()->maparg('n')
 */
export function maparg(
  denops: Denops,
  name: unknown,
  mode?: unknown,
  abbr?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function maparg(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("maparg", ...args);
}

/**
 * Check if there is a mapping that matches with {name} in mode
 * {mode}.  See |maparg()| for {mode} and special names in
 * {name}.
 * When {abbr} is there and it is |TRUE| use abbreviations
 * instead of mappings.
 * A match happens with a mapping that starts with {name} and
 * with a mapping which is equal to the start of {name}.
 * 	matches mapping "a"	"ab"	"abc" ~
 *    mapcheck("a")	yes	yes	 yes
 *    mapcheck("abc")	yes	yes	 yes
 *    mapcheck("ax")	yes	no	 no
 *    mapcheck("b")	no	no	 no
 * The difference with maparg() is that mapcheck() finds a
 * mapping that matches with {name}, while maparg() only finds a
 * mapping for {name} exactly.
 * When there is no mapping that starts with {name}, an empty
 * String is returned.  If there is one, the RHS of that mapping
 * is returned.  If there are several mappings that start with
 * {name}, the RHS of one of them is returned.  This will be
 * "<Nop>" if the RHS is empty.
 * The mappings local to the current buffer are checked first,
 * then the global mappings.
 * This function can be used to check if a mapping can be added
 * without being ambiguous.  Example:
 * 	:if mapcheck("_vv") == ""
 * 	:   map _vv :set guifont=7x13<CR
 * 	:endif
 * This avoids adding the "_vv" mapping when there already is a
 * mapping for "_v" or for "_vvv".
 * Can also be used as a |method|:
 * 	GetKey()->mapcheck('n')
 */
export function mapcheck(
  denops: Denops,
  name: unknown,
  mode?: unknown,
  abbr?: unknown,
): Promise<unknown>;
export function mapcheck(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mapcheck", ...args);
}

/**
 * When {expr} is a |List| then this returns the index of the
 * first item where {pat} matches.  Each item is used as a
 * String, |Lists| and |Dictionaries| are used as echoed.
 * Otherwise, {expr} is used as a String.  The result is a
 * Number, which gives the index (byte offset) in {expr} where
 * {pat} matches.
 * A match at the first character or |List| item returns zero.
 * If there is no match -1 is returned.
 * For getting submatches see |matchlist()|.
 * Example:
 * 	:echo match("testing", "ing")	" results in 4
 * 	:echo match([1, 'x'], '\a')	" results in 1
 * See |string-match| for how {pat} is used.
 * Vim doesn't have a strpbrk() function.  But you can do:
 * 	:let sepidx = match(line, '[.,;: \t]')
 * Vim doesn't have a strcasestr() function.  But you can add
 * "\c" to the pattern to ignore case:
 * 	:let idx = match(haystack, '\cneedle')
 * If {start} is given, the search starts from byte index
 * {start} in a String or item {start} in a |List|.
 * The result, however, is still the index counted from the
 * first character/item.  Example:
 * 	:echo match("testing", "ing", 2)
 * result is again "4".
 * 	:echo match("testing", "ing", 4)
 * result is again "4".
 * 	:echo match("testing", "t", 2)
 * result is "3".
 * For a String, if {start} > 0 then it is like the string starts
 * {start} bytes later, thus "^" will match at {start}.  Except
 * when {count} is given, then it's like matches before the
 * {start} byte are ignored (this is a bit complicated to keep it
 * backwards compatible).
 * For a String, if {start} < 0, it will be set to 0.  For a list
 * the index is counted from the end.
 * If {start} is out of range ({start} > strlen({expr}) for a
 * String or {start} > len({expr}) for a |List|) -1 is returned.
 * When {count} is given use the {count}'th match.  When a match
 * is found in a String the search for the next one starts one
 * character further.  Thus this example results in 1:
 * 	echo match("testing", "..", 0, 2)
 * In a |List| the search continues in the next item.
 * Note that when {count} is added the way {start} works changes,
 * see above.
 * See |pattern| for the patterns that are accepted.
 * The 'ignorecase' option is used to set the ignore-caseness of
 * the pattern.  'smartcase' is NOT used.  The matching is always
 * done like 'magic' is set and 'cpoptions' is empty.
 * Note that a match at the start is preferred, thus when the
 * pattern is using "*" (any number of matches) it tends to find
 * zero matches at the start instead of a number of matches
 * further down in the text.
 * Can also be used as a |method|:
 * 	GetList()->match('word')
 */
export function match(
  denops: Denops,
  expr: unknown,
  pat: unknown,
  start?: unknown,
  count?: unknown,
): Promise<unknown>;
export function match(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("match", ...args);
}

/**
 * 	:let sepidx = match(line, '[.,;: \t]')
 * Vim doesn't have a strcasestr() function.  But you can add
 * "\c" to the pattern to ignore case:
 * 	:let idx = match(haystack, '\cneedle')
 * If {start} is given, the search starts from byte index
 * {start} in a String or item {start} in a |List|.
 * The result, however, is still the index counted from the
 * first character/item.  Example:
 * 	:echo match("testing", "ing", 2)
 * result is again "4".
 * 	:echo match("testing", "ing", 4)
 * result is again "4".
 * 	:echo match("testing", "t", 2)
 * result is "3".
 * For a String, if {start} > 0 then it is like the string starts
 * {start} bytes later, thus "^" will match at {start}.  Except
 * when {count} is given, then it's like matches before the
 * {start} byte are ignored (this is a bit complicated to keep it
 * backwards compatible).
 * For a String, if {start} < 0, it will be set to 0.  For a list
 * the index is counted from the end.
 * If {start} is out of range ({start} > strlen({expr}) for a
 * String or {start} > len({expr}) for a |List|) -1 is returned.
 * When {count} is given use the {count}'th match.  When a match
 * is found in a String the search for the next one starts one
 * character further.  Thus this example results in 1:
 * 	echo match("testing", "..", 0, 2)
 * In a |List| the search continues in the next item.
 * Note that when {count} is added the way {start} works changes,
 * see above.
 * See |pattern| for the patterns that are accepted.
 * The 'ignorecase' option is used to set the ignore-caseness of
 * the pattern.  'smartcase' is NOT used.  The matching is always
 * done like 'magic' is set and 'cpoptions' is empty.
 * Note that a match at the start is preferred, thus when the
 * pattern is using "*" (any number of matches) it tends to find
 * zero matches at the start instead of a number of matches
 * further down in the text.
 * Can also be used as a |method|:
 * 	GetList()->match('word')
 */
export function strpbrk(denops: Denops): Promise<unknown>;
export function strpbrk(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strpbrk", ...args);
}

/**
 * Vim doesn't have a strcasestr() function.  But you can add
 * "\c" to the pattern to ignore case:
 * 	:let idx = match(haystack, '\cneedle')
 * If {start} is given, the search starts from byte index
 * {start} in a String or item {start} in a |List|.
 * The result, however, is still the index counted from the
 * first character/item.  Example:
 * 	:echo match("testing", "ing", 2)
 * result is again "4".
 * 	:echo match("testing", "ing", 4)
 * result is again "4".
 * 	:echo match("testing", "t", 2)
 * result is "3".
 * For a String, if {start} > 0 then it is like the string starts
 * {start} bytes later, thus "^" will match at {start}.  Except
 * when {count} is given, then it's like matches before the
 * {start} byte are ignored (this is a bit complicated to keep it
 * backwards compatible).
 * For a String, if {start} < 0, it will be set to 0.  For a list
 * the index is counted from the end.
 * If {start} is out of range ({start} > strlen({expr}) for a
 * String or {start} > len({expr}) for a |List|) -1 is returned.
 * When {count} is given use the {count}'th match.  When a match
 * is found in a String the search for the next one starts one
 * character further.  Thus this example results in 1:
 * 	echo match("testing", "..", 0, 2)
 * In a |List| the search continues in the next item.
 * Note that when {count} is added the way {start} works changes,
 * see above.
 * See |pattern| for the patterns that are accepted.
 * The 'ignorecase' option is used to set the ignore-caseness of
 * the pattern.  'smartcase' is NOT used.  The matching is always
 * done like 'magic' is set and 'cpoptions' is empty.
 * Note that a match at the start is preferred, thus when the
 * pattern is using "*" (any number of matches) it tends to find
 * zero matches at the start instead of a number of matches
 * further down in the text.
 * Can also be used as a |method|:
 * 	GetList()->match('word')
 */
export function strcasestr(denops: Denops): Promise<unknown>;
export function strcasestr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("strcasestr", ...args);
}

/**
 * Defines a pattern to be highlighted in the current window (a
 * "match").  It will be highlighted with {group}.  Returns an
 * identification number (ID), which can be used to delete the
 * match using |matchdelete()|.  The ID is bound to the window.
 * Matching is case sensitive and magic, unless case sensitivity
 * or magicness are explicitly overridden in {pattern}.  The
 * 'magic', 'smartcase' and 'ignorecase' options are not used.
 * The "Conceal" value is special, it causes the match to be
 * concealed.
 * The optional {priority} argument assigns a priority to the
 * match.  A match with a high priority will have its
 * highlighting overrule that of a match with a lower priority.
 * A priority is specified as an integer (negative numbers are no
 * exception).  If the {priority} argument is not specified, the
 * default priority is 10.  The priority of 'hlsearch' is zero,
 * hence all matches with a priority greater than zero will
 * overrule it.  Syntax highlighting (see 'syntax') is a separate
 * mechanism, and regardless of the chosen priority a match will
 * always overrule syntax highlighting.
 * The optional {id} argument allows the request for a specific
 * match ID.  If a specified ID is already taken, an error
 * message will appear and the match will not be added.  An ID
 * is specified as a positive integer (zero excluded).  IDs 1, 2
 * and 3 are reserved for |:match|, |:2match| and |:3match|,
 * respectively.  If the {id} argument is not specified or -1,
 * |matchadd()| automatically chooses a free ID.
 * The optional {dict} argument allows for further custom
 * values. Currently this is used to specify a match specific
 * conceal character that will be shown for |hl-Conceal|
 * highlighted matches. The dict can have the following members:
 * 	conceal	    Special character to show instead of the
 * 		    match (only for |hl-Conceal| highlighted
 * 		    matches, see |:syn-cchar|)
 * 	window	    Instead of the current window use the
 * 		    window with this number or window ID.
 * The number of matches is not limited, as it is the case with
 * the |:match| commands.
 * Example:
 * 	:highlight MyGroup ctermbg=green guibg=green
 * 	:let m = matchadd("MyGroup", "TODO")
 * Deletion of the pattern:
 * 	:call matchdelete(m)
 * A list of matches defined by |matchadd()| and |:match| are
 * available from |getmatches()|.  All matches can be deleted in
 * one operation by |clearmatches()|.
 * Can also be used as a |method|:
 * 	GetGroup()->matchadd('TODO')
 */
export function matchadd(
  denops: Denops,
  group: unknown,
  pattern: unknown,
  priority?: unknown,
  id?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function matchadd(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("matchadd", ...args);
}

/**
 * Same as |matchadd()|, but requires a list of positions {pos}
 * instead of a pattern. This command is faster than |matchadd()|
 * because it does not require to handle regular expressions and
 * sets buffer line boundaries to redraw screen. It is supposed
 * to be used when fast match additions and deletions are
 * required, for example to highlight matching parentheses.
 * {pos} is a list of positions.  Each position can be one of
 * these:
 * - A number.  This whole line will be highlighted.  The first
 *   line has number 1.
 * - A list with one number, e.g., [23]. The whole line with this
 *   number will be highlighted.
 * - A list with two numbers, e.g., [23, 11]. The first number is
 *   the line number, the second one is the column number (first
 *   column is 1, the value must correspond to the byte index as
 *   |col()| would return).  The character at this position will
 *   be highlighted.
 * - A list with three numbers, e.g., [23, 11, 3]. As above, but
 *   the third number gives the length of the highlight in bytes.
 * The maximum number of positions in {pos} is 8.
 * Example:
 * 	:highlight MyGroup ctermbg=green guibg=green
 * 	:let m = matchaddpos("MyGroup", [[23, 24], 34])
 * Deletion of the pattern:
 * 	:call matchdelete(m)
 * Matches added by |matchaddpos()| are returned by
 * |getmatches()|.
 * Can also be used as a |method|:
 * 	GetGroup()->matchaddpos([23, 11])
 */
export function matchaddpos(
  denops: Denops,
  group: unknown,
  pos: unknown,
  priority?: unknown,
  id?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function matchaddpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("matchaddpos", ...args);
}

/**
 * Selects the {nr} match item, as set with a |:match|,
 * |:2match| or |:3match| command.
 * Return a |List| with two elements:
 * 	The name of the highlight group used
 * 	The pattern used.
 * When {nr} is not 1, 2 or 3 returns an empty |List|.
 * When there is no match item set returns ['', ''].
 * This is useful to save and restore a |:match|.
 * Highlighting matches using the |:match| commands are limited
 * to three matches. |matchadd()| does not have this limitation.
 * Can also be used as a |method|:
 * 	GetMatch()->matcharg()
 */
export function matcharg(denops: Denops, nr: unknown): Promise<unknown>;
export function matcharg(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("matcharg", ...args);
}

/**
 * Deletes a match with ID {id} previously defined by |matchadd()|
 * or one of the |:match| commands.  Returns 0 if successful,
 * otherwise -1.  See example for |matchadd()|.  All matches can
 * be deleted in one operation by |clearmatches()|.
 * If {win} is specified, use the window with this number or
 * window ID instead of the current window.
 * Can also be used as a |method|:
 * 	GetMatch()->matchdelete()
 */
export function matchdelete(
  denops: Denops,
  id: unknown,
  win?: unknown,
): Promise<unknown>;
export function matchdelete(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("matchdelete", ...args);
}

/**
 * Same as |match()|, but return the index of first character
 * after the match.  Example:
 * 	:echo matchend("testing", "ing")
 * results in "7".
 * Vim doesn't have a strspn() or strcspn() function, but you can
 * do it with matchend():
 * 	:let span = matchend(line, '[a-zA-Z]')
 * 	:let span = matchend(line, '[^a-zA-Z]')
 * Except that -1 is returned when there are no matches.
 * The {start}, if given, has the same meaning as for |match()|.
 * 	:echo matchend("testing", "ing", 2)
 * results in "7".
 * 	:echo matchend("testing", "ing", 5)
 * result is "-1".
 * When {expr} is a |List| the result is equal to |match()|.
 * Can also be used as a |method|:
 * 	GetText()->matchend('word')
 */
export function matchend(
  denops: Denops,
  expr: unknown,
  pat: unknown,
  start?: unknown,
  count?: unknown,
): Promise<unknown>;
export function matchend(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("matchend", ...args);
}

/**
 * do it with matchend():
 * 	:let span = matchend(line, '[a-zA-Z]')
 * 	:let span = matchend(line, '[^a-zA-Z]')
 * Except that -1 is returned when there are no matches.
 * The {start}, if given, has the same meaning as for |match()|.
 * 	:echo matchend("testing", "ing", 2)
 * results in "7".
 * 	:echo matchend("testing", "ing", 5)
 * result is "-1".
 * When {expr} is a |List| the result is equal to |match()|.
 * Can also be used as a |method|:
 * 	GetText()->matchend('word')
 */
export function strspn(denops: Denops): Promise<unknown>;
export function strspn(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strspn", ...args);
}

/**
 * do it with matchend():
 * 	:let span = matchend(line, '[a-zA-Z]')
 * 	:let span = matchend(line, '[^a-zA-Z]')
 * Except that -1 is returned when there are no matches.
 * The {start}, if given, has the same meaning as for |match()|.
 * 	:echo matchend("testing", "ing", 2)
 * results in "7".
 * 	:echo matchend("testing", "ing", 5)
 * result is "-1".
 * When {expr} is a |List| the result is equal to |match()|.
 * Can also be used as a |method|:
 * 	GetText()->matchend('word')
 */
export function strcspn(denops: Denops): Promise<unknown>;
export function strcspn(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strcspn", ...args);
}

/**
 * Same as |match()|, but return a |List|.  The first item in the
 * list is the matched string, same as what matchstr() would
 * return.  Following items are submatches, like "\1", "\2", etc.
 * in |:substitute|.  When an optional submatch didn't match an
 * empty string is used.  Example:
 * 	echo matchlist('acd', '\(a\)\?\(b\)\?\(c\)\?\(.*\)')
 * Results in: ['acd', 'a', '', 'c', 'd', '', '', '', '', '']
 * When there is no match an empty list is returned.
 * Can also be used as a |method|:
 * 	GetList()->matchlist('word')
 */
export function matchlist(
  denops: Denops,
  expr: unknown,
  pat: unknown,
  start?: unknown,
  count?: unknown,
): Promise<unknown>;
export function matchlist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("matchlist", ...args);
}

/**
 * Same as |match()|, but return the matched string.  Example:
 * 	:echo matchstr("testing", "ing")
 * results in "ing".
 * When there is no match "" is returned.
 * The {start}, if given, has the same meaning as for |match()|.
 * 	:echo matchstr("testing", "ing", 2)
 * results in "ing".
 * 	:echo matchstr("testing", "ing", 5)
 * result is "".
 * When {expr} is a |List| then the matching item is returned.
 * The type isn't changed, it's not necessarily a String.
 * Can also be used as a |method|:
 * 	GetText()->matchstr('word')
 */
export function matchstr(
  denops: Denops,
  expr: unknown,
  pat: unknown,
  start?: unknown,
  count?: unknown,
): Promise<unknown>;
export function matchstr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("matchstr", ...args);
}

/**
 * Same as |matchstr()|, but return the matched string, the start
 * position and the end position of the match.  Example:
 * 	:echo matchstrpos("testing", "ing")
 * results in ["ing", 4, 7].
 * When there is no match ["", -1, -1] is returned.
 * The {start}, if given, has the same meaning as for |match()|.
 * 	:echo matchstrpos("testing", "ing", 2)
 * results in ["ing", 4, 7].
 * 	:echo matchstrpos("testing", "ing", 5)
 * result is ["", -1, -1].
 * When {expr} is a |List| then the matching item, the index
 * of first item where {pat} matches, the start position and the
 * end position of the match are returned.
 * 	:echo matchstrpos([1, '__x'], '\a')
 * result is ["x", 1, 2, 3].
 * The type isn't changed, it's not necessarily a String.
 * Can also be used as a |method|:
 * 	GetText()->matchstrpos('word')
 */
export function matchstrpos(
  denops: Denops,
  expr: unknown,
  pat: unknown,
  start?: unknown,
  count?: unknown,
): Promise<unknown>;
export function matchstrpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("matchstrpos", ...args);
}

/**
 * Return the maximum value of all items in {expr}. Example:
 * 	echo max([apples, pears, oranges])
 * {expr} can be a |List| or a |Dictionary|.  For a Dictionary,
 * it returns the maximum of all values in the Dictionary.
 * If {expr} is neither a List nor a Dictionary, or one of the
 * items in {expr} cannot be used as a Number this results in
 * an error.  An empty |List| or |Dictionary| results in zero.
 * Can also be used as a |method|:
 * 	mylist->max()
 */
export function max(denops: Denops, expr: unknown): Promise<unknown>;
export function max(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("max", ...args);
}

/**
 * 	echo min([apples, pears, oranges])
 * {expr} can be a |List| or a |Dictionary|.  For a Dictionary,
 * it returns the minimum of all values in the Dictionary.
 * If {expr} is neither a List nor a Dictionary, or one of the
 * items in {expr} cannot be used as a Number this results in
 * an error.  An empty |List| or |Dictionary| results in zero.
 * Can also be used as a |method|:
 * 	mylist->min()
 */
export function min(denops: Denops, expr: unknown): Promise<unknown>;
export function min(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("min", ...args);
}

/**
 * Create directory {name}.
 * If {path} is "p" then intermediate directories are created as
 * necessary.  Otherwise it must be "".
 * If {prot} is given it is used to set the protection bits of
 * the new directory.  The default is 0o755 (rwxr-xr-x: r/w for
 * the user, readable for others).  Use 0o700 to make it
 * unreadable for others.  This is only used for the last part of
 * {name}.  Thus if you create /tmp/foo/bar then /tmp/foo will be
 * created with 0o755.
 * Example:
 * 	:call mkdir($HOME . "/tmp/foo/bar", "p", 0o700)
 * This function is not available in the |sandbox|.
 * There is no error if the directory already exists and the "p"
 * flag is passed (since patch 8.0.1708).  However, without the
 * "p" option the call will fail.
 * The function result is a Number, which is TRUE if the call was
 * successful or FALSE if the directory creation failed or partly
 * failed.
 * Not available on all systems.  To check use:
 * 	:if exists("*mkdir")
 * Can also be used as a |method|:
 * 	GetName()->mkdir()
 */
export function mkdir(
  denops: Denops,
  name: unknown,
  path?: unknown,
  prot?: unknown,
): Promise<unknown>;
export function mkdir(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mkdir", ...args);
}

/**
 * Return the line number of the first line at or below {lnum}
 * that is not blank.  Example:
 * 	if getline(nextnonblank(1)) =~ "Java"
 * When {lnum} is invalid or there is no non-blank line at or
 * below it, zero is returned.
 * {lnum} is used like with |getline()|.
 * See also |prevnonblank()|.
 * Can also be used as a |method|:
 * 	GetLnum()->nextnonblank()
 */
export function nextnonblank(denops: Denops, lnum: unknown): Promise<unknown>;
export function nextnonblank(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nextnonblank", ...args);
}

/**
 * Return a string with a single character, which has the number
 * value {expr}.  Examples:
 * 	nr2char(64)		returns "@"
 * 	nr2char(32)		returns " "
 * When {utf8} is omitted or zero, the current 'encoding' is used.
 * Example for "utf-8":
 * 	nr2char(300)		returns I with bow character
 * With {utf8} set to 1, always return utf-8 characters.
 * Note that a NUL character in the file is specified with
 * nr2char(10), because NULs are represented with newline
 * characters.  nr2char(0) is a real NUL and terminates the
 * string, thus results in an empty string.
 * To turn a list of character numbers into a string:
 *     let list = [65, 66, 67]
 *     let str = join(map(list, {_, val -> nr2char(val)}), '')
 * Result: "ABC"
 * Can also be used as a |method|:
 * 	GetNumber()->nr2char()
 */
export function nr2char(
  denops: Denops,
  expr: unknown,
  utf8?: unknown,
): Promise<unknown>;
export function nr2char(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("nr2char", ...args);
}

/**
 * Bitwise OR on the two arguments.  The arguments are converted
 * to a number.  A List, Dict or Float argument causes an error.
 * Example:
 * 	:let bits = or(bits, 0x80)
 * Can also be used as a |method|:
 * 	:let bits = bits->or(0x80)
 */
export function or(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function or(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("or", ...args);
}

/**
 * Shorten directory names in the path {path} and return the
 * result.  The tail, the file name, is kept as-is.  The other
 * components in the path are reduced to {len} letters in length.
 * If {len} is omitted or smaller than 1 then 1 is used (single
 * letters).  Leading '~' and '.' characters are kept.  Examples:
 * 	:echo pathshorten('~/.vim/autoload/myfile.vim')
 * 	~/.v/a/myfile.vim ~
 * 	:echo pathshorten('~/.vim/autoload/myfile.vim', 2)
 * 	~/.vi/au/myfile.vim ~
 * It doesn't matter if the path exists or not.
 * Can also be used as a |method|:
 * 	GetDirectories()->pathshorten()
 */
export function pathshorten(
  denops: Denops,
  path: unknown,
  len?: unknown,
): Promise<unknown>;
export function pathshorten(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("pathshorten", ...args);
}

/**
 * Evaluate Perl expression {expr} in scalar context and return
 * its result converted to Vim data structures. If value can't be
 * converted, it is returned as a string Perl representation.
 * Note: If you want an array or hash, {expr} must return a
 * reference to it.
 * Example:
 * 	:echo perleval('[1 .. 4]')
 * 	[1, 2, 3, 4]
 * Note that in a `:def` function local variables are not visible
 * to {expr}.
 * Can also be used as a |method|:
 * 	GetExpr()->perleval()
 * {only available when compiled with the |+perl| feature}
 */
export function perleval(denops: Denops, expr: unknown): Promise<unknown>;
export function perleval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("perleval", ...args);
}

/**
 * Return the power of {x} to the exponent {y} as a |Float|.
 * {x} and {y} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo pow(3, 3)
 * 	27.0
 * 	:echo pow(2, 16)
 * 	65536.0
 * 	:echo pow(32, 0.20)
 * 	2.0
 * Can also be used as a |method|:
 * 	Compute()->pow(3)
 * {only available when compiled with the |+float| feature}
 */
export function pow(denops: Denops, x: unknown, y: unknown): Promise<unknown>;
export function pow(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("pow", ...args);
}

/**
 * Return the line number of the first line at or above {lnum}
 * that is not blank.  Example:
 * 	let ind = indent(prevnonblank(v:lnum - 1))
 * When {lnum} is invalid or there is no non-blank line at or
 * above it, zero is returned.
 * {lnum} is used like with |getline()|.
 * Also see |nextnonblank()|.
 * Can also be used as a |method|:
 * 	GetLnum()->prevnonblank()
 */
export function prevnonblank(denops: Denops, lnum: unknown): Promise<unknown>;
export function prevnonblank(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prevnonblank", ...args);
}

/**
 * Return a String with {fmt}, where "%" items are replaced by
 * the formatted form of their respective arguments.  Example:
 * 	printf("%4d: E%d %.30s", lnum, errno, msg)
 * May result in:
 * 	"  99: E42 asdfasdfasdfasdfasdfasdfasdfas" ~
 * When used as a |method| the base is passed as the second
 * argument:
 * 	Compute()->printf("result: %d")
 * Often used items are:
 *   %s	string
 *   %6S	string right-aligned in 6 display cells
 *   %6s	string right-aligned in 6 bytes
 *   %.9s	string truncated to 9 bytes
 *   %c	single byte
 *   %d	decimal number
 *   %5d	decimal number padded with spaces to 5 characters
 *   %x	hex number
 *   %04x	hex number padded with zeros to at least 4 characters
 *   %X	hex number using upper case letters
 *   %o	octal number
 *   %08b	binary number padded with zeros to at least 8 chars
 *   %f	floating point number as 12.23, inf, -inf or nan
 *   %F	floating point number as 12.23, INF, -INF or NAN
 *   %e	floating point number as 1.23e3, inf, -inf or nan
 *   %E	floating point number as 1.23E3, INF, -INF or NAN
 *   %g	floating point number, as %f or %e depending on value
 *   %G	floating point number, as %F or %E depending on value
 *   %%	the % character itself
 * Conversion specifications start with '%' and end with the
 * conversion type.  All other characters are copied unchanged to
 * the result.
 * The "%" starts a conversion specification.  The following
 * arguments appear in sequence:
 * 	%  [flags]  [field-width]  [.precision]  type
 * flags
 * 	Zero or more of the following flags:
 *     #	      The value should be converted to an "alternate
 * 	      form".  For c, d, and s conversions, this option
 * 	      has no effect.  For o conversions, the precision
 * 	      of the number is increased to force the first
 * 	      character of the output string to a zero (except
 * 	      if a zero value is printed with an explicit
 * 	      precision of zero).
 * 	      For b and B conversions, a non-zero result has
 * 	      the string "0b" (or "0B" for B conversions)
 * 	      prepended to it.
 * 	      For x and X conversions, a non-zero result has
 * 	      the string "0x" (or "0X" for X conversions)
 * 	      prepended to it.
 *     0 (zero)  Zero padding.  For all conversions the converted
 * 	      value is padded on the left with zeros rather
 * 	      than blanks.  If a precision is given with a
 * 	      numeric conversion (d, b, B, o, x, and X), the 0
 * 	      flag is ignored.
 *     -	      A negative field width flag; the converted value
 * 	      is to be left adjusted on the field boundary.
 * 	      The converted value is padded on the right with
 * 	      blanks, rather than on the left with blanks or
 * 	      zeros.  A - overrides a 0 if both are given.
 *     ' ' (space)  A blank should be left before a positive
 * 	      number produced by a signed conversion (d).
 *     +	      A sign must always be placed before a number
 * 	      produced by a signed conversion.  A + overrides
 * 	      a space if both are used.
 * field-width
 * 	An optional decimal digit string specifying a minimum
 * 	field width.  If the converted value has fewer bytes
 * 	than the field width, it will be padded with spaces on
 * 	the left (or right, if the left-adjustment flag has
 * 	been given) to fill out the field width.
 * .precision
 * 	An optional precision, in the form of a period '.'
 * 	followed by an optional digit string.  If the digit
 * 	string is omitted, the precision is taken as zero.
 * 	This gives the minimum number of digits to appear for
 * 	d, o, x, and X conversions, or the maximum number of
 * 	bytes to be printed from a string for s conversions.
 * 	For floating point it is the number of digits after
 * 	the decimal point.
 * type
 * 	A character that specifies the type of conversion to
 * 	be applied, see below.
 * A field width or precision, or both, may be indicated by an
 * asterisk '*' instead of a digit string.  In this case, a
 * Number argument supplies the field width or precision.  A
 * negative field width is treated as a left adjustment flag
 * followed by a positive field width; a negative precision is
 * treated as though it were missing.  Example:
 * 	:echo printf("%d: %.*s", nr, width, line)
 * This limits the length of the text used from "line" to
 * "width" bytes.
 * The conversion specifiers and their meanings are:
 * dbBoxX	The Number argument is converted to signed decimal
 * 	(d), unsigned binary (b and B), unsigned octal (o), or
 * 	unsigned hexadecimal (x and X) notation.  The letters
 * 	"abcdef" are used for x conversions; the letters
 * 	"ABCDEF" are used for X conversions.
 * 	The precision, if any, gives the minimum number of
 * 	digits that must appear; if the converted value
 * 	requires fewer digits, it is padded on the left with
 * 	zeros.
 * 	In no case does a non-existent or small field width
 * 	cause truncation of a numeric field; if the result of
 * 	a conversion is wider than the field width, the field
 * 	is expanded to contain the conversion result.
 * 	The 'h' modifier indicates the argument is 16 bits.
 * 	The 'l' modifier indicates the argument is 32 bits.
 * 	The 'L' modifier indicates the argument is 64 bits.
 * 	Generally, these modifiers are not useful. They are
 * 	ignored when type is known from the argument.
 * i	alias for d
 * D	alias for ld
 * U	alias for lu
 * O	alias for lo
 * c	The Number argument is converted to a byte, and the
 * 	resulting character is written.
 * s	The text of the String argument is used.  If a
 * 	precision is specified, no more bytes than the number
 * 	specified are used.
 * 	If the argument is not a String type, it is
 * 	automatically converted to text with the same format
 * 	as ":echo".
 * S	The text of the String argument is used.  If a
 * 	precision is specified, no more display cells than the
 * 	number specified are used.
 * f F	The Float argument is converted into a string of the
 * 	form 123.456.  The precision specifies the number of
 * 	digits after the decimal point.  When the precision is
 * 	zero the decimal point is omitted.  When the precision
 * 	is not specified 6 is used.  A really big number
 * 	(out of range or dividing by zero) results in "inf"
 * 	or "-inf" with %f (INF or -INF with %F).
 * 	"0.0 / 0.0" results in "nan" with %f (NAN with %F).
 * 	Example:
 * 		echo printf("%.2f", 12.115)
 * 		12.12
 * 	Note that roundoff depends on the system libraries.
 * 	Use |round()| when in doubt.
 * e E	The Float argument is converted into a string of the
 * 	form 1.234e+03 or 1.234E+03 when using 'E'.  The
 * 	precision specifies the number of digits after the
 * 	decimal point, like with 'f'.
 * g G	The Float argument is converted like with 'f' if the
 * 	value is between 0.001 (inclusive) and 10000000.0
 * 	(exclusive).  Otherwise 'e' is used for 'g' and 'E'
 * 	for 'G'.  When no precision is specified superfluous
 * 	zeroes and '+' signs are removed, except for the zero
 * 	immediately after the decimal point.  Thus 10000000.0
 * 	results in 1.0e7.
 * %	A '%' is written.  No argument is converted.  The
 * 	complete conversion specification is "%%".
 * When a Number argument is expected a String argument is also
 * accepted and automatically converted.
 * When a Float or String argument is expected a Number argument
 * is also accepted and automatically converted.
 * Any other argument type results in an error message.
 * The number of {exprN} arguments must exactly match the number
 * of "%" items.  If there are not sufficient or too many
 * arguments an error is given.  Up to 18 arguments can be used.
 */
export function printf(
  denops: Denops,
  fmt: unknown,
  expr1: unknown,
): Promise<unknown>;
export function printf(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("printf", ...args);
}

/**
 * Returns the effective prompt text for buffer {buf}.  {buf} can
 * be a buffer name or number.  See |prompt-buffer|.
 * If the buffer doesn't exist or isn't a prompt buffer, an empty
 * string is returned.
 * Can also be used as a |method|:
 * 	GetBuffer()->prompt_getprompt()
 * {only available when compiled with the |+channel| feature}
 */
export function prompt_getprompt(
  denops: Denops,
  buf: unknown,
): Promise<unknown>;
export function prompt_getprompt(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prompt_getprompt", ...args);
}

/**
 * Set prompt callback for buffer {buf} to {expr}.  When {expr}
 * is an empty string the callback is removed.  This has only
 * effect if {buf} has 'buftype' set to "prompt".
 * The callback is invoked when pressing Enter.  The current
 * buffer will always be the prompt buffer.  A new line for a
 * prompt is added before invoking the callback, thus the prompt
 * for which the callback was invoked will be in the last but one
 * line.
 * If the callback wants to add text to the buffer, it must
 * insert it above the last line, since that is where the current
 * prompt is.  This can also be done asynchronously.
 * The callback is invoked with one argument, which is the text
 * that was entered at the prompt.  This can be an empty string
 * if the user only typed Enter.
 * Example:
 *    call prompt_setcallback(bufnr(), function('s:TextEntered'))
 *    func s:TextEntered(text)
 *      if a:text == 'exit' || a:text == 'quit'
 *        stopinsert
 *        close
 *      else
 *        call append(line('$') - 1, 'Entered: "' . a:text . '"')
 *        " Reset 'modified' to allow the buffer to be closed.
 *        set nomodified
 *      endif
 *    endfunc
 * Can also be used as a |method|:
 * 	GetBuffer()->prompt_setcallback(callback)
 * {only available when compiled with the |+channel| feature}
 */
export function prompt_setcallback(
  denops: Denops,
  buf: unknown,
  expr: unknown,
): Promise<unknown>;
export function prompt_setcallback(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prompt_setcallback", ...args);
}

/**
 * Set a callback for buffer {buf} to {expr}.  When {expr} is an
 * empty string the callback is removed.  This has only effect if
 * {buf} has 'buftype' set to "prompt".
 * This callback will be invoked when pressing CTRL-C in Insert
 * mode.  Without setting a callback Vim will exit Insert mode,
 * as in any buffer.
 * Can also be used as a |method|:
 * 	GetBuffer()->prompt_setinterrupt(callback)
 * {only available when compiled with the |+channel| feature}
 */
export function prompt_setinterrupt(
  denops: Denops,
  buf: unknown,
  expr: unknown,
): Promise<unknown>;
export function prompt_setinterrupt(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prompt_setinterrupt", ...args);
}

/**
 * Set prompt for buffer {buf} to {text}.  You most likely want
 * {text} to end in a space.
 * The result is only visible if {buf} has 'buftype' set to
 * "prompt".  Example:
 * 	call prompt_setprompt(bufnr(), 'command: ')
 * Can also be used as a |method|:
 * 	GetBuffer()->prompt_setprompt('command: ')
 * {only available when compiled with the |+channel| feature}
 */
export function prompt_setprompt(
  denops: Denops,
  buf: unknown,
  text: unknown,
): Promise<unknown>;
export function prompt_setprompt(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prompt_setprompt", ...args);
}

/**
 * If the popup menu (see |ins-completion-menu|) is not visible,
 * returns an empty |Dictionary|, otherwise, returns a
 * |Dictionary| with the following keys:
 * 	height		nr of items visible
 * 	width		screen cells
 * 	row		top screen row (0 first row)
 * 	col		leftmost screen column (0 first col)
 * 	size		total nr of items
 * 	scrollbar	|TRUE| if scrollbar is visible
 * The values are the same as in |v:event| during
 * |CompleteChanged|.
 */
export function pum_getpos(denops: Denops): Promise<unknown>;
export function pum_getpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("pum_getpos", ...args);
}

/**
 * Returns non-zero when the popup menu is visible, zero
 * otherwise.  See |ins-completion-menu|.
 * This can be used to avoid some things that would remove the
 * popup menu.
 */
export function pumvisible(denops: Denops): Promise<unknown>;
export function pumvisible(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("pumvisible", ...args);
}

/**
 * Evaluate Python expression {expr} and return its result
 * converted to Vim data structures.
 * Numbers and strings are returned as they are (strings are
 * copied though, Unicode strings are additionally converted to
 * 'encoding').
 * Lists are represented as Vim |List| type.
 * Dictionaries are represented as Vim |Dictionary| type with
 * keys converted to strings.
 * Note that in a `:def` function local variables are not visible
 * to {expr}.
 * Can also be used as a |method|:
 * 	GetExpr()->py3eval()
 * {only available when compiled with the |+python3| feature}
 */
export function py3eval(denops: Denops, expr: unknown): Promise<unknown>;
export function py3eval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("py3eval", ...args);
}

/**
 * Evaluate Python expression {expr} and return its result
 * converted to Vim data structures.
 * Numbers and strings are returned as they are (strings are
 * copied though).
 * Lists are represented as Vim |List| type.
 * Dictionaries are represented as Vim |Dictionary| type,
 * non-string keys result in error.
 * Note that in a `:def` function local variables are not visible
 * to {expr}.
 * Can also be used as a |method|:
 * 	GetExpr()->pyeval()
 * {only available when compiled with the |+python| feature}
 */
export function pyeval(denops: Denops, expr: unknown): Promise<unknown>;
export function pyeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("pyeval", ...args);
}

/**
 * Evaluate Python expression {expr} and return its result
 * converted to Vim data structures.
 * Uses Python 2 or 3, see |python_x| and 'pyxversion'.
 * See also: |pyeval()|, |py3eval()|
 * Can also be used as a |method|:
 * 	GetExpr()->pyxeval()
 * {only available when compiled with the |+python| or the
 * |+python3| feature}
 */
export function pyxeval(denops: Denops, expr: unknown): Promise<unknown>;
export function pyxeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("pyxeval", ...args);
}

/**
 * Returns a |List| with Numbers:
 * - If only {expr} is specified: [0, 1, ..., {expr} - 1]
 * - If {max} is specified: [{expr}, {expr} + 1, ..., {max}]
 * - If {stride} is specified: [{expr}, {expr} + {stride}, ...,
 *   {max}] (increasing {expr} with {stride} each time, not
 *   producing a value past {max}).
 * When the maximum is one before the start the result is an
 * empty list.  When the maximum is more than one before the
 * start this is an error.
 * Examples:
 * 	range(4)		" [0, 1, 2, 3]
 * 	range(2, 4)		" [2, 3, 4]
 * 	range(2, 9, 3)		" [2, 5, 8]
 * 	range(2, -2, -1)	" [2, 1, 0, -1, -2]
 * 	range(0)		" []
 * 	range(2, 0)		" error!
 * Can also be used as a |method|:
 * 	GetExpr()->range()
 */
export function range(
  denops: Denops,
  expr: unknown,
  max?: unknown,
  stride?: unknown,
): Promise<unknown>;
export function range(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("range", ...args);
}

/**
 * Return a list with file and directory names in {directory}.
 * You can also use |glob()| if you don't need to do complicated
 * things, such as limiting the number of matches.
 * The list will be sorted (case sensitive), see the {dict}
 * argument below for changing the sort order.
 * When {expr} is omitted all entries are included.
 * When {expr} is given, it is evaluated to check what to do:
 * 	If {expr} results in -1 then no further entries will
 * 	be handled.
 * 	If {expr} results in 0 then this entry will not be
 * 	added to the list.
 * 	If {expr} results in 1 then this entry will be added
 * 	to the list.
 * The entries "." and ".." are always excluded.
 * Each time {expr} is evaluated |v:val| is set to the entry name.
 * When {expr} is a function the name is passed as the argument.
 * For example, to get a list of files ending in ".txt":
 *   readdir(dirname, {n -> n =~ '.txt$'})
 * To skip hidden and backup files:
 *   readdir(dirname, {n -> n !~ '^\.\|\~$'})
 * The optional {dict} argument allows for further custom
 * values. Currently this is used to specify if and how sorting
 * should be performed. The dict can have the following members:
 *     sort    How to sort the result returned from the system.
 * 	    Valid values are:
 * 		"none"	    do not sort (fastest method)
 * 		"case"	    sort case sensitive (byte value of
 * 			    each character, technically, using
 * 			    strcmp()) (default)
 * 		"icase"	    sort case insensitive (technically
 * 			    using strcasecmp())
 * 		"collate"   sort using the collation order
 * 			    of the "POSIX" or "C" |locale|
 * 			    (technically using strcoll())
 * 	    Other values are silently ignored.
 * For example, to get a list of all files in the current
 * directory without sorting the individual entries:
 *   readdir('.', '1', #{sort: 'none'})
 * If you want to get a directory tree:
 *   function! s:tree(dir)
 *       return {a:dir : map(readdir(a:dir),
 *       \ {_, x -> isdirectory(x) ?
 *       \		 {x : s:tree(a:dir . '/' . x)} : x})}
 *   endfunction
 *   echo s:tree(".")
 * Can also be used as a |method|:
 * 	GetDirName()->readdir()
 */
export function readdir(
  denops: Denops,
  directory: unknown,
  expr?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function readdir(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("readdir", ...args);
}

/**
 * Read file {fname} and return a |List|, each line of the file
 * as an item.  Lines are broken at NL characters.  Macintosh
 * files separated with CR will result in a single long line
 * (unless a NL appears somewhere).
 * All NUL characters are replaced with a NL character.
 * When {type} contains "b" binary mode is used:
 * - When the last line ends in a NL an extra empty list item is
 *   added.
 * - No CR characters are removed.
 * Otherwise:
 * - CR characters that appear before a NL are removed.
 * - Whether the last line ends in a NL or not does not matter.
 * - When 'encoding' is Unicode any UTF-8 byte order mark is
 *   removed from the text.
 * When {max} is given this specifies the maximum number of lines
 * to be read.  Useful if you only want to check the first ten
 * lines of a file:
 * 	:for line in readfile(fname, '', 10)
 * 	:  if line =~ 'Date' | echo line | endif
 * 	:endfor
 * When {max} is negative -{max} lines from the end of the file
 * are returned, or as many as there are.
 * When {max} is zero the result is an empty list.
 * Note that without {max} the whole file is read into memory.
 * Also note that there is no recognition of encoding.  Read a
 * file into a buffer if you need to.
 * Deprecated (use |readblob()| instead): When {type} contains
 * "B" a |Blob| is returned with the binary data of the file
 * unmodified.
 * When the file can't be opened an error message is given and
 * the result is an empty list.
 * Also see |writefile()|.
 * Can also be used as a |method|:
 * 	GetFileName()->readfile()
 */
export function readfile(
  denops: Denops,
  fname: unknown,
  type?: unknown,
  max?: unknown,
): Promise<unknown>;
export function readfile(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("readfile", ...args);
}

/**
 * Returns the single letter name of the register being executed.
 * Returns an empty string when no register is being executed.
 * See |@|.
 */
export function reg_executing(denops: Denops): Promise<unknown>;
export function reg_executing(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("reg_executing", ...args);
}

/**
 * Returns the single letter name of the register being recorded.
 * Returns an empty string when not recording.  See |q|.
 */
export function reg_recording(denops: Denops): Promise<unknown>;
export function reg_recording(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("reg_recording", ...args);
}

/**
 * Return an item that represents a time value.  The item is a
 * list with items that depend on the system.  In Vim 9 script
 * list<any> can be used.
 * The item can be passed to |reltimestr()| to convert it to a
 * string or |reltimefloat()| to convert to a Float.
 * Without an argument reltime() returns the current time.
 * With one argument is returns the time passed since the time
 * specified in the argument.
 * With two arguments it returns the time passed between {start}
 * and {end}.
 * The {start} and {end} arguments must be values returned by
 * reltime().  If there is an error zero is returned in legacy
 * script, in Vim9 script an error is given.
 * Can also be used as a |method|:
 * 	GetStart()->reltime()
 * {only available when compiled with the |+reltime| feature}
 */
export function reltime(
  denops: Denops,
  start?: unknown,
  end?: unknown,
): Promise<unknown>;
export function reltime(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("reltime", ...args);
}

/**
 * Return a Float that represents the time value of {time}.
 * Example:
 * 	let start = reltime()
 * 	call MyFunction()
 * 	let seconds = reltimefloat(reltime(start))
 * See the note of reltimestr() about overhead.
 * Also see |profiling|.
 * If there is an error 0.0 is returned in legacy script, in Vim9
 * script an error is given.
 * Can also be used as a |method|:
 * 	reltime(start)->reltimefloat()
 * {only available when compiled with the |+reltime| feature}
 */
export function reltimefloat(denops: Denops, time: unknown): Promise<unknown>;
export function reltimefloat(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("reltimefloat", ...args);
}

/**
 * Return a String that represents the time value of {time}.
 * This is the number of seconds, a dot and the number of
 * microseconds.  Example:
 * 	let start = reltime()
 * 	call MyFunction()
 * 	echo reltimestr(reltime(start))
 * Note that overhead for the commands will be added to the time.
 * The accuracy depends on the system.
 * Leading spaces are used to make the string align nicely.  You
 * can use split() to remove it.
 * 	echo split(reltimestr(reltime(start)))[0]
 * Also see |profiling|.
 * If there is an error an empty string is returned in legacy
 * script, in Vim9 script an error is given.
 * Can also be used as a |method|:
 * 	reltime(start)->reltimestr()
 * {only available when compiled with the |+reltime| feature}
 */
export function reltimestr(denops: Denops, time: unknown): Promise<unknown>;
export function reltimestr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("reltimestr", ...args);
}

/**
 * Send the {string} to {server}.  The string is sent as an
 * expression and the result is returned after evaluation.
 * The result must be a String or a |List|.  A |List| is turned
 * into a String by joining the items with a line break in
 * between (not at the end), like with join(expr, "\n").
 * If {idvar} is present and not empty, it is taken as the name
 * of a variable and a {serverid} for later use with
 * |remote_read()| is stored there.
 * If {timeout} is given the read times out after this many
 * seconds.  Otherwise a timeout of 600 seconds is used.
 * See also |clientserver| |RemoteReply|.
 * This function is not available in the |sandbox|.
 * {only available when compiled with the |+clientserver| feature}
 * Note: Any errors will cause a local error message to be issued
 * and the result will be the empty string.
 * Variables will be evaluated in the global namespace,
 * independent of a function currently being active.  Except
 * when in debug mode, then local function variables and
 * arguments can be evaluated.
 * Examples:
 * 	:echo remote_expr("gvim", "2+2")
 * 	:echo remote_expr("gvim1", "b:current_syntax")
 * Can also be used as a |method|:
 * 	ServerName()->remote_expr(expr)
 */
export function remote_expr(
  denops: Denops,
  server: unknown,
  string: unknown,
  idvar?: unknown,
  timeout?: unknown,
): Promise<unknown>;
export function remote_expr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_expr", ...args);
}

/**
 * Move the Vim server with the name {server} to the foreground.
 * The {server} argument is a string.
 * This works like:
 * 	remote_expr({server}, "foreground()")
 * Except that on Win32 systems the client does the work, to work
 * around the problem that the OS doesn't always allow the server
 * to bring itself to the foreground.
 * Note: This does not restore the window if it was minimized,
 * like foreground() does.
 * This function is not available in the |sandbox|.
 * Can also be used as a |method|:
 * 	ServerName()->remote_foreground()
 * {only in the Win32, Athena, Motif and GTK GUI versions and the
 * Win32 console version}
 */
export function remote_foreground(
  denops: Denops,
  server: unknown,
): Promise<unknown>;
export function remote_foreground(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_foreground", ...args);
}

/**
 * Returns a positive number if there are available strings
 * from {serverid}.  Copies any reply string into the variable
 * {retvar} if specified.  {retvar} must be a string with the
 * name of a variable.
 * Returns zero if none are available.
 * Returns -1 if something is wrong.
 * See also |clientserver|.
 * This function is not available in the |sandbox|.
 * {only available when compiled with the |+clientserver| feature}
 * Examples:
 * 	:let repl = ""
 * 	:echo "PEEK: ".remote_peek(id, "repl").": ".repl
 * Can also be used as a |method|:
 * 	ServerId()->remote_peek()
 */
export function remote_peek(
  denops: Denops,
  serverid: unknown,
  retvar?: unknown,
): Promise<unknown>;
export function remote_peek(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_peek", ...args);
}

/**
 * Return the oldest available reply from {serverid} and consume
 * it.  Unless a {timeout} in seconds is given, it blocks until a
 * reply is available.
 * See also |clientserver|.
 * This function is not available in the |sandbox|.
 * {only available when compiled with the |+clientserver| feature}
 * Example:
 * 	:echo remote_read(id)
 * Can also be used as a |method|:
 * 	ServerId()->remote_read()
 */
export function remote_read(
  denops: Denops,
  serverid: unknown,
  timeout: unknown,
): Promise<unknown>;
export function remote_read(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_read", ...args);
}

/**
 * Send the {string} to {server}.  The string is sent as input
 * keys and the function returns immediately.  At the Vim server
 * the keys are not mapped |:map|.
 * If {idvar} is present, it is taken as the name of a variable
 * and a {serverid} for later use with remote_read() is stored
 * there.
 * See also |clientserver| |RemoteReply|.
 * This function is not available in the |sandbox|.
 * {only available when compiled with the |+clientserver| feature}
 * Note: Any errors will be reported in the server and may mess
 * up the display.
 * Examples:
 * :echo remote_send("gvim", ":DropAndReply ".file, "serverid").
 *  \ remote_read(serverid)
 * :autocmd NONE RemoteReply *
 *  \ echo remote_read(expand("<amatch>"))
 * :echo remote_send("gvim", ":sleep 10 | echo ".
 *  \ 'server2client(expand("<client>"), "HELLO")<CR>')
 * Can also be used as a |method|:
 * 	ServerName()->remote_send(keys)
 */
export function remote_send(
  denops: Denops,
  server: unknown,
  string: unknown,
  idvar?: unknown,
): Promise<unknown>;
export function remote_send(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_send", ...args);
}

/**
 * Become the server {name}.  This fails if already running as a
 * server, when |v:servername| is not empty.
 * Can also be used as a |method|:
 * 	ServerName()->remote_startserver()
 * {only available when compiled with the |+clientserver| feature}
 */
export function remote_startserver(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function remote_startserver(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_startserver", ...args);
}

/**
 * Without {end}: Remove the item at {idx} from |List| {list} and
 * return the item.
 * With {end}: Remove items from {idx} to {end} (inclusive) and
 * return a |List| with these items.  When {idx} points to the same
 * item as {end} a list with one item is returned.  When {end}
 * points to an item before {idx} this is an error.
 * See |list-index| for possible values of {idx} and {end}.
 * Example:
 * 	:echo "last item: " . remove(mylist, -1)
 * 	:call remove(mylist, 0, 9)
 * Use |delete()| to remove a file.
 * Can also be used as a |method|:
 * 	mylist->remove(idx)
 */
export function remove(
  denops: Denops,
  list: unknown,
  idx: unknown,
  end?: unknown,
): Promise<unknown>;
export function remove(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("remove", ...args);
}

/**
 * Rename the file by the name {from} to the name {to}.  This
 * should also work to move files across file systems.  The
 * result is a Number, which is 0 if the file was renamed
 * successfully, and non-zero when the renaming failed.
 * NOTE: If {to} exists it is overwritten without warning.
 * This function is not available in the |sandbox|.
 * Can also be used as a |method|:
 * 	GetOldName()->rename(newname)
 */
export function rename(
  denops: Denops,
  from: unknown,
  to: unknown,
): Promise<unknown>;
export function rename(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("rename", ...args);
}

/**
 * Repeat {expr} {count} times and return the concatenated
 * result.  Example:
 * 	:let separator = repeat('-', 80)
 * When {count} is zero or negative the result is empty.
 * When {expr} is a |List| the result is {expr} concatenated
 * {count} times.  Example:
 * 	:let longlist = repeat(['a', 'b'], 3)
 * Results in ['a', 'b', 'a', 'b', 'a', 'b'].
 * Can also be used as a |method|:
 * 	mylist->repeat(count)
 */
export function repeat(
  denops: Denops,
  expr: unknown,
  count: unknown,
): Promise<unknown>;
export function repeat(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("repeat", ...args);
}

/**
 * On MS-Windows, when {filename} is a shortcut (a .lnk file),
 * returns the path the shortcut points to in a simplified form.
 * When {filename} is a symbolic link or junction point, return
 * the full path to the target. If the target of junction is
 * removed, return {filename}.
 * On Unix, repeat resolving symbolic links in all path
 * components of {filename} and return the simplified result.
 * To cope with link cycles, resolving of symbolic links is
 * stopped after 100 iterations.
 * On other systems, return the simplified {filename}.
 * The simplification step is done as by |simplify()|.
 * resolve() keeps a leading path component specifying the
 * current directory (provided the result is still a relative
 * path name) and also keeps a trailing path separator.
 * Can also be used as a |method|:
 * 	GetName()->resolve()
 */
export function resolve(denops: Denops, filename: unknown): Promise<unknown>;
export function resolve(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("resolve", ...args);
}

/**
 * Reverse the order of items in {object} in-place.
 * {object} can be a |List| or a |Blob|.
 * Returns {object}.
 * If you want an object to remain unmodified make a copy first:
 * 	:let revlist = reverse(copy(mylist))
 * Can also be used as a |method|:
 * 	mylist->reverse()
 */
export function reverse(denops: Denops, object: unknown): Promise<unknown>;
export function reverse(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("reverse", ...args);
}

/**
 * Round off {expr} to the nearest integral value and return it
 * as a |Float|.  If {expr} lies halfway between two integral
 * values, then use the larger one (away from zero).
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	echo round(0.456)
 * 	0.0
 * 	echo round(4.5)
 * 	5.0
 * 	echo round(-4.5)
 * 	-5.0
 * Can also be used as a |method|:
 * 	Compute()->round()
 * {only available when compiled with the |+float| feature}
 */
export function round(denops: Denops, expr: unknown): Promise<unknown>;
export function round(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("round", ...args);
}

/**
 * Evaluate Ruby expression {expr} and return its result
 * converted to Vim data structures.
 * Numbers, floats and strings are returned as they are (strings
 * are copied though).
 * Arrays are represented as Vim |List| type.
 * Hashes are represented as Vim |Dictionary| type.
 * Other objects are represented as strings resulted from their
 * "Object#to_s" method.
 * Note that in a `:def` function local variables are not visible
 * to {expr}.
 * Can also be used as a |method|:
 * 	GetRubyExpr()->rubyeval()
 * {only available when compiled with the |+ruby| feature}
 */
export function rubyeval(denops: Denops, expr: unknown): Promise<unknown>;
export function rubyeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("rubyeval", ...args);
}

/**
 * Like |screenchar()|, but return the attribute.  This is a rather
 * arbitrary number that can only be used to compare to the
 * attribute at other positions.
 * Can also be used as a |method|:
 * 	GetRow()->screenattr(col)
 */
export function screenattr(
  denops: Denops,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function screenattr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("screenattr", ...args);
}

/**
 * The result is a Number, which is the character at position
 * [row, col] on the screen.  This works for every possible
 * screen position, also status lines, window separators and the
 * command line.  The top left position is row one, column one
 * The character excludes composing characters.  For double-byte
 * encodings it may only be the first byte.
 * This is mainly to be used for testing.
 * Returns -1 when row or col is out of range.
 * Can also be used as a |method|:
 * 	GetRow()->screenchar(col)
 */
export function screenchar(
  denops: Denops,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function screenchar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("screenchar", ...args);
}

/**
 * The result is a |List| of Numbers.  The first number is the same
 * as what |screenchar()| returns.  Further numbers are
 * composing characters on top of the base character.
 * This is mainly to be used for testing.
 * Returns an empty List when row or col is out of range.
 * Can also be used as a |method|:
 * 	GetRow()->screenchars(col)
 */
export function screenchars(
  denops: Denops,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function screenchars(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("screenchars", ...args);
}

/**
 * The result is a Number, which is the current screen column of
 * the cursor. The leftmost column has number 1.
 * This function is mainly used for testing.
 * Note: Always returns the current screen column, thus if used
 * in a command (e.g. ":echo screencol()") it will return the
 * column inside the command line, which is 1 when the command is
 * executed. To get the cursor position in the file use one of
 * the following mappings:
 * 	nnoremap <expr> GG ":echom ".screencol()."\n"
 * 	nnoremap <silent> GG :echom screencol()<CR
 * 	nnoremap GG <Cmd>echom screencol()<CR
 */
export function screencol(denops: Denops): Promise<unknown>;
export function screencol(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("screencol", ...args);
}

/**
 * The result is a Number, which is the current screen row of the
 * cursor.  The top line has number one.
 * This function is mainly used for testing.
 * Alternatively you can use |winline()|.
 * Note: Same restrictions as with |screencol()|.
 */
export function screenrow(denops: Denops): Promise<unknown>;
export function screenrow(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("screenrow", ...args);
}

/**
 * The result is a String that contains the base character and
 * any composing characters at position [row, col] on the screen.
 * This is like |screenchars()| but returning a String with the
 * characters.
 * This is mainly to be used for testing.
 * Returns an empty String when row or col is out of range.
 * Can also be used as a |method|:
 * 	GetRow()->screenstring(col)
 */
export function screenstring(
  denops: Denops,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function screenstring(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("screenstring", ...args);
}

/**
 * Search for regexp pattern {pattern}.  The search starts at the
 * cursor position (you can use |cursor()| to set it).
 * When a match has been found its line number is returned.
 * If there is no match a 0 is returned and the cursor doesn't
 * move.  No error message is given.
 * {flags} is a String, which can contain these character flags:
 * 'b'	search Backward instead of forward
 * 'c'	accept a match at the Cursor position
 * 'e'	move to the End of the match
 * 'n'	do Not move the cursor
 * 'p'	return number of matching sub-Pattern (see below)
 * 's'	Set the ' mark at the previous location of the cursor
 * 'w'	Wrap around the end of the file
 * 'W'	don't Wrap around the end of the file
 * 'z'	start searching at the cursor column instead of zero
 * If neither 'w' or 'W' is given, the 'wrapscan' option applies.
 * If the 's' flag is supplied, the ' mark is set, only if the
 * cursor is moved. The 's' flag cannot be combined with the 'n'
 * flag.
 * 'ignorecase', 'smartcase' and 'magic' are used.
 * When the 'z' flag is not given, forward searching always
 * starts in column zero and then matches before the cursor are
 * skipped.  When the 'c' flag is present in 'cpo' the next
 * search starts after the match.  Without the 'c' flag the next
 * search starts one column further.  This matters for
 * overlapping matches.
 * When searching backwards and the 'z' flag is given then the
 * search starts in column zero, thus no match in the current
 * line will be found (unless wrapping around the end of the
 * file).
 * When the {stopline} argument is given then the search stops
 * after searching this line.  This is useful to restrict the
 * search to a range of lines.  Examples:
 * 	let match = search('(', 'b', line("w0"))
 * 	let end = search('END', '', line("w$"))
 * When {stopline} is used and it is not zero this also implies
 * that the search does not wrap around the end of the file.
 * A zero value is equal to not giving the argument.
 * When the {timeout} argument is given the search stops when
 * more than this many milliseconds have passed.  Thus when
 * {timeout} is 500 the search stops after half a second.
 * The value must not be negative.  A zero value is like not
 * giving the argument.
 * {only available when compiled with the |+reltime| feature}
 * If the {skip} expression is given it is evaluated with the
 * cursor positioned on the start of a match.  If it evaluates to
 * non-zero this match is skipped.  This can be used, for
 * example, to skip a match in a comment or a string.
 * {skip} can be a string, which is evaluated as an expression, a
 * function reference or a lambda.
 * When {skip} is omitted or empty, every match is accepted.
 * When evaluating {skip} causes an error the search is aborted
 * and -1 returned.
 * With the 'p' flag the returned value is one more than the
 * first sub-match in \(\).  One if none of them matched but the
 * whole pattern did match.
 * To get the column number too use |searchpos()|.
 * The cursor will be positioned at the match, unless the 'n'
 * flag is used.
 * Example (goes over all files in the argument list):
 *     :let n = 1
 *     :while n <= argc()	    " loop over all files in arglist
 *     :  exe "argument " . n
 *     :  " start at the last char in the file and wrap for the
 *     :  " first search to find match at start of file
 *     :  normal G$
 *     :  let flags = "w"
 *     :  while search("foo", flags) > 0
 *     :	 s/foo/bar/g
 *     :	 let flags = "W"
 *     :  endwhile
 *     :  update		    " write the file if modified
 *     :  let n = n + 1
 *     :endwhile
 * Example for using some flags:
 *     :echo search('\<if\|\(else\)\|\(endif\)', 'ncpe')
 * This will search for the keywords "if", "else", and "endif"
 * under or after the cursor.  Because of the 'p' flag, it
 * returns 1, 2, or 3 depending on which keyword is found, or 0
 * if the search fails.  With the cursor on the first word of the
 * line:
 *     if (foo == 0) | let foo = foo + 1 | endif ~
 * the function returns 1.  Without the 'c' flag, the function
 * finds the "endif" and returns 3.  The same thing happens
 * without the 'e' flag if the cursor is on the "f" of "if".
 * The 'n' flag tells the function not to move the cursor.
 * Can also be used as a |method|:
 * 	GetPattern()->search()
 */
export function search(
  denops: Denops,
  pattern: unknown,
  flags?: unknown,
  stopline?: unknown,
  timeout?: unknown,
  skip?: unknown,
): Promise<unknown>;
export function search(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("search", ...args);
}

/**
 * Get or update the last search count, like what is displayed
 * without the "S" flag in 'shortmess'.  This works even if
 * 'shortmess' does contain the "S" flag.
 * This returns a |Dictionary|. The dictionary is empty if the
 * previous pattern was not set and "pattern" was not specified.
 *   key		type		meaning ~
 *   current	|Number|	current position of match;
 * 				0 if the cursor position is
 * 				before the first match
 *   exact_match	|Boolean|	1 if "current" is matched on
 * 				"pos", otherwise 0
 *   total		|Number|	total count of matches found
 *   incomplete	|Number|	0: search was fully completed
 * 				1: recomputing was timed out
 * 				2: max count exceeded
 * For {options} see further down.
 * To get the last search count when |n| or |N| was pressed, call
 * this function with `recompute: 0` . This sometimes returns
 * wrong information because |n| and |N|'s maximum count is 99.
 * If it exceeded 99 the result must be max count + 1 (100). If
 * you want to get correct information, specify `recompute: 1`:
 * 	" result == maxcount + 1 (100) when many matches
 * 	let result = searchcount(#{recompute: 0})
 * 	" Below returns correct result (recompute defaults
 * 	" to 1)
 * 	let result = searchcount()
 * The function is useful to add the count to |statusline|:
 * 	function! LastSearchCount() abort
 * 	  let result = searchcount(#{recompute: 0})
 * 	  if empty(result)
 * 	    return ''
 * 	  endif
 * 	  if result.incomplete ==# 1     " timed out
 * 	    return printf(' /%s [?/??]', @/)
 * 	  elseif result.incomplete ==# 2 " max count exceeded
 * 	    if result.total > result.maxcount &&
 * 	    \  result.current > result.maxcount
 * 	      return printf(' /%s [>%d/>%d]', @/,
 * 	      \		    result.current, result.total)
 * 	    elseif result.total > result.maxcount
 * 	      return printf(' /%s [%d/>%d]', @/,
 * 	      \		    result.current, result.total)
 * 	    endif
 * 	  endif
 * 	  return printf(' /%s [%d/%d]', @/,
 * 	  \		result.current, result.total)
 * 	endfunction
 * 	let &statusline .= '%{LastSearchCount()}'
 * 	" Or if you want to show the count only when
 * 	" 'hlsearch' was on
 * 	" let &statusline .=
 * 	" \   '%{v:hlsearch ? LastSearchCount() : ""}'
 * You can also update the search count, which can be useful in a
 * |CursorMoved| or |CursorMovedI| autocommand:
 * 	autocmd CursorMoved,CursorMovedI *
 * 	  \ let s:searchcount_timer = timer_start(
 * 	  \   200, function('s:update_searchcount'))
 * 	function! s:update_searchcount(timer) abort
 * 	  if a:timer ==# s:searchcount_timer
 * 	    call searchcount(#{
 * 	    \ recompute: 1, maxcount: 0, timeout: 100})
 * 	    redrawstatus
 * 	  endif
 * 	endfunction
 * This can also be used to count matched texts with specified
 * pattern in the current buffer using "pattern":
 * 	" Count '\<foo\>' in this buffer
 * 	" (Note that it also updates search count)
 * 	let result = searchcount(#{pattern: '\<foo\>'})
 * 	" To restore old search count by old pattern,
 * 	" search again
 * 	call searchcount()
 * {options} must be a |Dictionary|. It can contain:
 *   key		type		meaning ~
 *   recompute	|Boolean|	if |TRUE|, recompute the count
 * 				like |n| or |N| was executed.
 * 				otherwise returns the last
 * 				computed result (when |n| or
 * 				|N| was used when "S" is not
 * 				in 'shortmess', or this
 * 				function was called).
 * 				(default: |TRUE|)
 *   pattern	|String|	recompute if this was given
 * 				and different with |@/|.
 * 				this works as same as the
 * 				below command is executed
 * 				before calling this function
 * 				  let @/ = pattern
 * 				(default: |@/|)
 *   timeout	|Number|	0 or negative number is no
 * 				timeout. timeout milliseconds
 * 				for recomputing the result
 * 				(default: 0)
 *   maxcount	|Number|	0 or negative number is no
 * 				limit. max count of matched
 * 				text while recomputing the
 * 				result.  if search exceeded
 * 				total count, "total" value
 * 				becomes `maxcount + 1`
 * 				(default: 99)
 *   pos		|List|		`[lnum, col, off]` value
 * 				when recomputing the result.
 * 				this changes "current" result
 * 				value. see |cursor()|,
 * 				|getpos()|
 * 				(default: cursor's position)
 */
export function searchcount(
  denops: Denops,
  options?: unknown,
): Promise<unknown>;
export function searchcount(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("searchcount", ...args);
}

/**
 * Search for the declaration of {name}.
 * With a non-zero {global} argument it works like |gD|, find
 * first match in the file.  Otherwise it works like |gd|, find
 * first match in the function.
 * With a non-zero {thisblock} argument matches in a {} block
 * that ends before the cursor position are ignored.  Avoids
 * finding variable declarations only valid in another scope.
 * Moves the cursor to the found match.
 * Returns zero for success, non-zero for failure.
 * Example:
 * 	if searchdecl('myvar') == 0
 * 	   echo getline('.')
 * 	endif
 * Can also be used as a |method|:
 * 	GetName()->searchdecl()
 */
export function searchdecl(
  denops: Denops,
  name: unknown,
  global?: unknown,
  thisblock?: unknown,
): Promise<unknown>;
export function searchdecl(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("searchdecl", ...args);
}

/**
 * Search for the match of a nested start-end pair.  This can be
 * used to find the "endif" that matches an "if", while other
 * if/endif pairs in between are ignored.
 * The search starts at the cursor.  The default is to search
 * forward, include 'b' in {flags} to search backward.
 * If a match is found, the cursor is positioned at it and the
 * line number is returned.  If no match is found 0 or -1 is
 * returned and the cursor doesn't move.  No error message is
 * given.
 * {start}, {middle} and {end} are patterns, see |pattern|.  They
 * must not contain \( \) pairs.  Use of \%( \) is allowed.  When
 * {middle} is not empty, it is found when searching from either
 * direction, but only when not in a nested start-end pair.  A
 * typical use is:
 * 	searchpair('\<if\>', '\<else\>', '\<endif\>')
 * By leaving {middle} empty the "else" is skipped.
 * {flags} 'b', 'c', 'n', 's', 'w' and 'W' are used like with
 * |search()|.  Additionally:
 * 'r'	Repeat until no more matches found; will find the
 * 	outer pair.  Implies the 'W' flag.
 * 'm'	Return number of matches instead of line number with
 * 	the match; will be > 1 when 'r' is used.
 * Note: it's nearly always a good idea to use the 'W' flag, to
 * avoid wrapping around the end of the file.
 * When a match for {start}, {middle} or {end} is found, the
 * {skip} expression is evaluated with the cursor positioned on
 * the start of the match.  It should return non-zero if this
 * match is to be skipped.  E.g., because it is inside a comment
 * or a string.
 * When {skip} is omitted or empty, every match is accepted.
 * When evaluating {skip} causes an error the search is aborted
 * and -1 returned.
 * {skip} can be a string, a lambda, a funcref or a partial.
 * Anything else makes the function fail.
 * In a `:def` function when the {skip} argument is a string
 * constant it is compiled into instructions.
 * For {stopline} and {timeout} see |search()|.
 * The value of 'ignorecase' is used.  'magic' is ignored, the
 * patterns are used like it's on.
 * The search starts exactly at the cursor.  A match with
 * {start}, {middle} or {end} at the next character, in the
 * direction of searching, is the first one found.  Example:
 * 	if 1
 * 	  if 2
 * 	  endif 2
 * 	endif 1
 * When starting at the "if 2", with the cursor on the "i", and
 * searching forwards, the "endif 2" is found.  When starting on
 * the character just before the "if 2", the "endif 1" will be
 * found.  That's because the "if 2" will be found first, and
 * then this is considered to be a nested if/endif from "if 2" to
 * "endif 2".
 * When searching backwards and {end} is more than one character,
 * it may be useful to put "\zs" at the end of the pattern, so
 * that when the cursor is inside a match with the end it finds
 * the matching start.
 * Example, to find the "endif" command in a Vim script:
 * 	:echo searchpair('\<if\>', '\<el\%[seif]\>', '\<en\%[dif]\>', 'W',
 * 	\ 'getline(".") =~ "^\\s*\""')
 * The cursor must be at or after the "if" for which a match is
 * to be found.  Note that single-quote strings are used to avoid
 * having to double the backslashes.  The skip expression only
 * catches comments at the start of a line, not after a command.
 * Also, a word "en" or "if" halfway a line is considered a
 * match.
 * Another example, to search for the matching "{" of a "}":
 * 	:echo searchpair('{', '', '}', 'bW')
 * This works when the cursor is at or before the "}" for which a
 * match is to be found.  To reject matches that syntax
 * highlighting recognized as strings:
 * 	:echo searchpair('{', '', '}', 'bW',
 * 	     \ 'synIDattr(synID(line("."), col("."), 0), "name") =~? "string"')
 */
export function searchpair(
  denops: Denops,
  start: unknown,
  middle: unknown,
  end: unknown,
  flags?: unknown,
  skip?: unknown,
  stopline?: unknown,
  timeout?: unknown,
): Promise<unknown>;
export function searchpair(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("searchpair", ...args);
}

/**
 * Same as |searchpair()|, but returns a |List| with the line and
 * column position of the match. The first element of the |List|
 * is the line number and the second element is the byte index of
 * the column position of the match.  If no match is found,
 * returns [0, 0].
 * 	:let [lnum,col] = searchpairpos('{', '', '}', 'n')
 * See |match-parens| for a bigger and more useful example.
 */
export function searchpairpos(
  denops: Denops,
  start: unknown,
  middle: unknown,
  end: unknown,
  flags?: unknown,
  skip?: unknown,
  stopline?: unknown,
  timeout?: unknown,
): Promise<unknown>;
export function searchpairpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("searchpairpos", ...args);
}

/**
 * Same as |search()|, but returns a |List| with the line and
 * column position of the match. The first element of the |List|
 * is the line number and the second element is the byte index of
 * the column position of the match. If no match is found,
 * returns [0, 0].
 * Example:
 * 	:let [lnum, col] = searchpos('mypattern', 'n')
 * When the 'p' flag is given then there is an extra item with
 * the sub-pattern match number |search()-sub-match|.  Example:
 * 	:let [lnum, col, submatch] = searchpos('\(\l\)\|\(\u\)', 'np')
 * In this example "submatch" is 2 when a lowercase letter is
 * found |/\l|, 3 when an uppercase letter is found |/\u|.
 * Can also be used as a |method|:
 * 	GetPattern()->searchpos()
 */
export function searchpos(
  denops: Denops,
  pattern: unknown,
  flags?: unknown,
  stopline?: unknown,
  timeout?: unknown,
  skip?: unknown,
): Promise<unknown>;
export function searchpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("searchpos", ...args);
}

/**
 * Send a reply string to {clientid}.  The most recent {clientid}
 * that sent a string can be retrieved with expand("<client>").
 * {only available when compiled with the |+clientserver| feature}
 * Returns zero for success, -1 for failure.
 * Note:
 * This id has to be stored before the next command can be
 * received.  I.e. before returning from the received command and
 * before calling any commands that waits for input.
 * See also |clientserver|.
 * Example:
 * 	:echo server2client(expand("<client>"), "HELLO")
 * Can also be used as a |method|:
 * 	GetClientId()->server2client(string)
 */
export function server2client(
  denops: Denops,
  clientid: unknown,
  string: unknown,
): Promise<unknown>;
export function server2client(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("server2client", ...args);
}

/**
 * Return a list of available server names, one per line.
 * When there are no servers or the information is not available
 * an empty string is returned.  See also |clientserver|.
 * {only available when compiled with the |+clientserver| feature}
 * Example:
 * 	:echo serverlist()
 */
export function serverlist(denops: Denops): Promise<unknown>;
export function serverlist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("serverlist", ...args);
}

/**
 * Set option or local variable {varname} in buffer {buf} to
 * {val}.
 * This also works for a global or local window option, but it
 * doesn't work for a global or local window variable.
 * For a local window option the global value is unchanged.
 * For the use of {buf}, see |bufname()| above.
 * The {varname} argument is a string.
 * Note that the variable name without "b:" must be used.
 * Examples:
 * 	:call setbufvar(1, "&mod", 1)
 * 	:call setbufvar("todo", "myvar", "foobar")
 * This function is not available in the |sandbox|.
 * Can also be used as a |method|, the base is passed as the
 * third argument:
 * 	GetValue()->setbufvar(buf, varname)
 */
export function setbufvar(
  denops: Denops,
  buf: unknown,
  varname: unknown,
  val: unknown,
): Promise<unknown>;
export function setbufvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setbufvar", ...args);
}

/**
 * Set the current character search information to {dict},
 * which contains one or more of the following entries:
 *     char	character which will be used for a subsequent
 * 		|,| or |;| command; an empty string clears the
 * 		character search
 *     forward	direction of character search; 1 for forward,
 * 		0 for backward
 *     until	type of character search; 1 for a |t| or |T|
 * 		character search, 0 for an |f| or |F|
 * 		character search
 * This can be useful to save/restore a user's character search
 * from a script:
 * 	:let prevsearch = getcharsearch()
 * 	:" Perform a command which clobbers user's search
 * 	:call setcharsearch(prevsearch)
 * Also see |getcharsearch()|.
 * Can also be used as a |method|:
 * 	SavedSearch()->setcharsearch()
 */
export function setcharsearch(denops: Denops, dict: unknown): Promise<unknown>;
export function setcharsearch(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setcharsearch", ...args);
}

/**
 * Set the cursor position in the command line to byte position
 * {pos}.  The first position is 1.
 * Use |getcmdpos()| to obtain the current position.
 * Only works while editing the command line, thus you must use
 * |c_CTRL-\_e|, |c_CTRL-R_=| or |c_CTRL-R_CTRL-R| with '='.  For
 * |c_CTRL-\_e| and |c_CTRL-R_CTRL-R| with '=' the position is
 * set after the command line is set to the expression.  For
 * |c_CTRL-R_=| it is set after evaluating the expression but
 * before inserting the resulting text.
 * When the number is too big the cursor is put at the end of the
 * line.  A number smaller than one has undefined results.
 * Returns FALSE when successful, TRUE when not editing the
 * command line.
 * Can also be used as a |method|:
 * 	GetPos()->setcmdpos()
 */
export function setcmdpos(denops: Denops, pos: unknown): Promise<unknown>;
export function setcmdpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setcmdpos", ...args);
}

/**
 * Set environment variable {name} to {val}.  Example:
 * 	call setenv('HOME', '/home/myhome')
 * When {val} is |v:null| the environment variable is deleted.
 * See also |expr-env|.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetPath()->setenv('PATH')
 */
export function setenv(
  denops: Denops,
  name: unknown,
  val: unknown,
): Promise<unknown>;
export function setenv(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("setenv", ...args);
}

/**
 * Set the file permissions for {fname} to {mode}.
 * {mode} must be a string with 9 characters.  It is of the form
 * "rwxrwxrwx", where each group of "rwx" flags represent, in
 * turn, the permissions of the owner of the file, the group the
 * file belongs to, and other users.  A '-' character means the
 * permission is off, any other character means on.  Multi-byte
 * characters are not supported.
 * For example "rw-r-----" means read-write for the user,
 * readable by the group, not accessible by others.  "xx-x-----"
 * would do the same thing.
 * Returns non-zero for success, zero for failure.
 * Can also be used as a |method|:
 * 	GetFilename()->setfperm(mode)
 * To read permissions see |getfperm()|.
 */
export function setfperm(
  denops: Denops,
  fname: unknown,
  mode: unknown,
): Promise<unknown>;
export function setfperm(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("setfperm", ...args);
}

/**
 * Create or replace or add to the location list for window {nr}.
 * {nr} can be the window number or the |window-ID|.
 * When {nr} is zero the current window is used.
 * For a location list window, the displayed location list is
 * modified.  For an invalid window number {nr}, -1 is returned.
 * Otherwise, same as |setqflist()|.
 * Also see |location-list|.
 * For {action} see |setqflist-action|.
 * If the optional {what} dictionary argument is supplied, then
 * only the items listed in {what} are set. Refer to |setqflist()|
 * for the list of supported keys in {what}.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetLoclist()->setloclist(winnr)
 */
export function setloclist(
  denops: Denops,
  nr: unknown,
  list: unknown,
  action?: unknown,
  what?: unknown,
): Promise<unknown>;
export function setloclist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setloclist", ...args);
}

/**
 * Restores a list of matches saved by |getmatches()| for the
 * current window.  Returns 0 if successful, otherwise -1.  All
 * current matches are cleared before the list is restored.  See
 * example for |getmatches()|.
 * If {win} is specified, use the window with this number or
 * window ID instead of the current window.
 * Can also be used as a |method|:
 * 	GetMatches()->setmatches()
 */
export function setmatches(
  denops: Denops,
  list: unknown,
  win?: unknown,
): Promise<unknown>;
export function setmatches(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setmatches", ...args);
}

/**
 * Create or replace or add to the quickfix list.
 * If the optional {what} dictionary argument is supplied, then
 * only the items listed in {what} are set. The first {list}
 * argument is ignored.  See below for the supported items in
 * {what}.
 * When {what} is not present, the items in {list} are used.  Each
 * item must be a dictionary.  Non-dictionary items in {list} are
 * ignored.  Each dictionary item can contain the following
 * entries:
 *     bufnr	buffer number; must be the number of a valid
 * 		buffer
 *     filename	name of a file; only used when "bufnr" is not
 * 		present or it is invalid.
 *     module	name of a module; if given it will be used in
 * 		quickfix error window instead of the filename.
 *     lnum	line number in the file
 *     pattern	search pattern used to locate the error
 *     col		column number
 *     vcol	when non-zero: "col" is visual column
 * 		when zero: "col" is byte index
 *     nr		error number
 *     text	description of the error
 *     type	single-character error type, 'E', 'W', etc.
 *     valid	recognized error message
 * The "col", "vcol", "nr", "type" and "text" entries are
 * optional.  Either "lnum" or "pattern" entry can be used to
 * locate a matching error line.
 * If the "filename" and "bufnr" entries are not present or
 * neither the "lnum" or "pattern" entries are present, then the
 * item will not be handled as an error line.
 * If both "pattern" and "lnum" are present then "pattern" will
 * be used.
 * If the "valid" entry is not supplied, then the valid flag is
 * set when "bufnr" is a valid buffer or "filename" exists.
 * If you supply an empty {list}, the quickfix list will be
 * cleared.
 * Note that the list is not exactly the same as what
 * |getqflist()| returns.
 * {action} values:
 * 'a'	The items from {list} are added to the existing
 * 	quickfix list. If there is no existing list, then a
 * 	new list is created.
 * 'r'	The items from the current quickfix list are replaced
 * 	with the items from {list}.  This can also be used to
 * 	clear the list:
 * 		:call setqflist([], 'r')
 * 'f'	All the quickfix lists in the quickfix stack are
 * 	freed.
 * If {action} is not present or is set to ' ', then a new list
 * is created. The new quickfix list is added after the current
 * quickfix list in the stack and all the following lists are
 * freed. To add a new quickfix list at the end of the stack,
 * set "nr" in {what} to "$".
 * The following items can be specified in dictionary {what}:
 *     context	quickfix list context. See |quickfix-context|
 *     efm		errorformat to use when parsing text from
 * 		"lines". If this is not present, then the
 * 		'errorformat' option value is used.
 * 		See |quickfix-parse|
 *     id		quickfix list identifier |quickfix-ID|
 *     idx		index of the current entry in the quickfix
 * 		list specified by 'id' or 'nr'. If set to '$',
 * 		then the last entry in the list is set as the
 * 		current entry.  See |quickfix-index|
 *     items	list of quickfix entries. Same as the {list}
 * 		argument.
 *     lines	use 'errorformat' to parse a list of lines and
 * 		add the resulting entries to the quickfix list
 * 		{nr} or {id}.  Only a |List| value is supported.
 * 		See |quickfix-parse|
 *     nr		list number in the quickfix stack; zero
 * 		means the current quickfix list and "$" means
 * 		the last quickfix list.
 *     quickfixtextfunc
 * 		function to get the text to display in the
 * 		quickfix window.  The value can be the name of
 * 		a function or a funcref or a lambda.  Refer to
 * 		|quickfix-window-function| for an explanation
 * 		of how to write the function and an example.
 *     title	quickfix list title text. See |quickfix-title|
 * Unsupported keys in {what} are ignored.
 * If the "nr" item is not present, then the current quickfix list
 * is modified. When creating a new quickfix list, "nr" can be
 * set to a value one greater than the quickfix stack size.
 * When modifying a quickfix list, to guarantee that the correct
 * list is modified, "id" should be used instead of "nr" to
 * specify the list.
 * Examples (See also |setqflist-examples|):
 *    :call setqflist([], 'r', {'title': 'My search'})
 *    :call setqflist([], 'r', {'nr': 2, 'title': 'Errors'})
 *    :call setqflist([], 'a', {'id':qfid, 'lines':["F1:10:L10"]})
 * Returns zero for success, -1 for failure.
 * This function can be used to create a quickfix list
 * independent of the 'errorformat' setting.  Use a command like
 * `:cc 1` to jump to the first position.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetErrorlist()->setqflist()
 */
export function setqflist(
  denops: Denops,
  list: unknown,
  action?: unknown,
  what?: unknown,
): Promise<unknown>;
export function setqflist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setqflist", ...args);
}

/**
 * Set the register {regname} to {value}.
 * If {regname} is "" or "@", the unnamed register '"' is used.
 * The {regname} argument is a string.  In |Vim9-script|
 * {regname} must be one character.
 * {value} may be any value returned by |getreg()| or
 * |getreginfo()|, including a |List| or |Dict|.
 * If {options} contains "a" or {regname} is upper case,
 * then the value is appended.
 * {options} can also contain a register type specification:
 *     "c" or "v"	      |characterwise| mode
 *     "l" or "V"	      |linewise| mode
 *     "b" or "<CTRL-V>" |blockwise-visual| mode
 * If a number immediately follows "b" or "<CTRL-V>" then this is
 * used as the width of the selection - if it is not specified
 * then the width of the block is set to the number of characters
 * in the longest line (counting a <Tab> as 1 character).
 * If {options} contains no register settings, then the default
 * is to use character mode unless {value} ends in a <NL> for
 * string {value} and linewise mode for list {value}. Blockwise
 * mode is never selected automatically.
 * Returns zero for success, non-zero for failure.
 * Note: you may not use |List| containing more than one item to
 *       set search and expression registers. Lists containing no
 *       items act like empty strings.
 * Examples:
 * 	:call setreg(v:register, @*)
 * 	:call setreg('*', @%, 'ac')
 * 	:call setreg('a', "1\n2\n3", 'b5')
 * 	:call setreg('"', { 'points_to': 'a'})
 * This example shows using the functions to save and restore a
 * register:
 * 	:let var_a = getreginfo()
 * 	:call setreg('a', var_a)
 * or:
 * 	:let var_a = getreg('a', 1, 1)
 * 	:let var_amode = getregtype('a')
 * 	    ....
 * 	:call setreg('a', var_a, var_amode)
 * Note: you may not reliably restore register value
 * without using the third argument to |getreg()| as without it
 * newlines are represented as newlines AND Nul bytes are
 * represented as newlines as well, see |NL-used-for-Nul|.
 * You can also change the type of a register by appending
 * nothing:
 * 	:call setreg('a', '', 'al')
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetText()->setreg('a')
 */
export function setreg(
  denops: Denops,
  regname: unknown,
  value: unknown,
  options?: unknown,
): Promise<unknown>;
export function setreg(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("setreg", ...args);
}

/**
 * Set tab-local variable {varname} to {val} in tab page {tabnr}.
 * |t:var|
 * The {varname} argument is a string.
 * Note that autocommands are blocked, side effects may not be
 * triggered, e.g. when setting 'filetype'.
 * Note that the variable name without "t:" must be used.
 * Tabs are numbered starting with one.
 * This function is not available in the |sandbox|.
 * Can also be used as a |method|, the base is passed as the
 * third argument:
 * 	GetValue()->settabvar(tab, name)
 */
export function settabvar(
  denops: Denops,
  tabnr: unknown,
  varname: unknown,
  val: unknown,
): Promise<unknown>;
export function settabvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("settabvar", ...args);
}

/**
 * Set option or local variable {varname} in window {winnr} to
 * {val}.
 * Tabs are numbered starting with one.  For the current tabpage
 * use |setwinvar()|.
 * {winnr} can be the window number or the |window-ID|.
 * When {winnr} is zero the current window is used.
 * Note that autocommands are blocked, side effects may not be
 * triggered, e.g. when setting 'filetype' or 'syntax'.
 * This also works for a global or local buffer option, but it
 * doesn't work for a global or local buffer variable.
 * For a local buffer option the global value is unchanged.
 * Note that the variable name without "w:" must be used.
 * Examples:
 * 	:call settabwinvar(1, 1, "&list", 0)
 * 	:call settabwinvar(3, 2, "myvar", "foobar")
 * This function is not available in the |sandbox|.
 * Can also be used as a |method|, the base is passed as the
 * fourth argument:
 * 	GetValue()->settabvar(tab, winnr, name)
 */
export function settabwinvar(
  denops: Denops,
  tabnr: unknown,
  winnr: unknown,
  varname: unknown,
  val: unknown,
): Promise<unknown>;
export function settabwinvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("settabwinvar", ...args);
}

/**
 * Modify the tag stack of the window {nr} using {dict}.
 * {nr} can be the window number or the |window-ID|.
 * For a list of supported items in {dict}, refer to
 * |gettagstack()|. "curidx" takes effect before changing the tag
 * stack.
 * How the tag stack is modified depends on the {action}
 * argument:
 * - If {action} is not present or is set to 'r', then the tag
 *   stack is replaced.
 * - If {action} is set to 'a', then new entries from {dict} are
 *   pushed (added) onto the tag stack.
 * - If {action} is set to 't', then all the entries from the
 *   current entry in the tag stack or "curidx" in {dict} are
 *   removed and then new entries are pushed to the stack.
 * The current index is set to one after the length of the tag
 * stack after the modification.
 * Returns zero for success, -1 for failure.
 * Examples (for more examples see |tagstack-examples|):
 *     Empty the tag stack of window 3:
 * 	call settagstack(3, {'items' : []})
 *     Save and restore the tag stack:
 * 	let stack = gettagstack(1003)
 * 	" do something else
 * 	call settagstack(1003, stack)
 * 	unlet stack
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetStack()->settagstack(winnr)
 */
export function settagstack(
  denops: Denops,
  nr: unknown,
  dict: unknown,
  action?: unknown,
): Promise<unknown>;
export function settagstack(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("settagstack", ...args);
}

/**
 * Like |settabwinvar()| for the current tab page.
 * Examples:
 * 	:call setwinvar(1, "&list", 0)
 * 	:call setwinvar(2, "myvar", "foobar")
 * Can also be used as a |method|, the base is passed as the
 * third argument:
 * 	GetValue()->setwinvar(winnr, name)
 */
export function setwinvar(
  denops: Denops,
  winnr: unknown,
  varname: unknown,
  val: unknown,
): Promise<unknown>;
export function setwinvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setwinvar", ...args);
}

/**
 * Returns a String with 64 hex characters, which is the SHA256
 * checksum of {string}.
 * Can also be used as a |method|:
 * 	GetText()->sha256()
 * {only available when compiled with the |+cryptv| feature}
 */
export function sha256(denops: Denops, string: unknown): Promise<unknown>;
export function sha256(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("sha256", ...args);
}

/**
 * Escape {string} for use as a shell command argument.
 * When the 'shell' contains powershell (MS-Windows) or pwsh
 * (MS-Windows, Linux, and MacOS) then it will enclose {string}
 * in single quotes and will double up all internal single
 * quotes.
 * On MS-Windows, when 'shellslash' is not set, it will enclose
 * {string} in double quotes and double all double quotes within
 * {string}.
 * Otherwise it will enclose {string} in single quotes and
 * replace all "'" with "'\''".
 * When the {special} argument is present and it's a non-zero
 * Number or a non-empty String (|non-zero-arg|), then special
 * items such as "!", "%", "#" and "<cword>" will be preceded by
 * a backslash.  This backslash will be removed again by the |:!|
 * command.
 * The "!" character will be escaped (again with a |non-zero-arg|
 * {special}) when 'shell' contains "csh" in the tail.  That is
 * because for csh and tcsh "!" is used for history replacement
 * even when inside single quotes.
 * With a |non-zero-arg| {special} the <NL> character is also
 * escaped.  When 'shell' containing "csh" in the tail it's
 * escaped a second time.
 * The "\" character will be escaped when 'shell' contains "fish"
 * in the tail. That is because for fish "\" is used as an escape
 * character inside single quotes.
 * Example of use with a |:!| command:
 *     :exe '!dir ' . shellescape(expand('<cfile>'), 1)
 * This results in a directory listing for the file under the
 * cursor.  Example of use with |system()|:
 *     :call system("chmod +w -- " . shellescape(expand("%")))
 * See also |::S|.
 * Can also be used as a |method|:
 * 	GetCommand()->shellescape()
 */
export function shellescape(
  denops: Denops,
  string: unknown,
  special?: unknown,
): Promise<unknown>;
export function shellescape(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("shellescape", ...args);
}

/**
 * Returns the effective value of 'shiftwidth'. This is the
 * 'shiftwidth' value unless it is zero, in which case it is the
 * 'tabstop' value.  This function was introduced with patch
 * 7.3.694 in 2012, everybody should have it by now (however it
 * did not allow for the optional {col} argument until 8.1.542).
 * When there is one argument {col} this is used as column number
 * for which to return the 'shiftwidth' value. This matters for the
 * 'vartabstop' feature. If the 'vartabstop' setting is enabled and
 * no {col} argument is given, column 1 will be assumed.
 * Can also be used as a |method|:
 * 	GetColumn()->shiftwidth()
 */
export function shiftwidth(denops: Denops, col?: unknown): Promise<unknown>;
export function shiftwidth(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("shiftwidth", ...args);
}

/**
 * Simplify the file name as much as possible without changing
 * the meaning.  Shortcuts (on MS-Windows) or symbolic links (on
 * Unix) are not resolved.  If the first path component in
 * {filename} designates the current directory, this will be
 * valid for the result as well.  A trailing path separator is
 * not removed either. On Unix "//path" is unchanged, but
 * "///path" is simplified to "/path" (this follows the Posix
 * standard).
 * Example:
 * 	simplify("./dir/.././/file/") == "./file/"
 * Note: The combination "dir/.." is only removed if "dir" is
 * a searchable directory or does not exist.  On Unix, it is also
 * removed when "dir" is a symbolic link within the same
 * directory.  In order to resolve all the involved symbolic
 * links before simplifying the path name, use |resolve()|.
 * Can also be used as a |method|:
 * 	GetName()->simplify()
 */
export function simplify(denops: Denops, filename: unknown): Promise<unknown>;
export function simplify(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("simplify", ...args);
}

/**
 * Return the sine of {expr}, measured in radians, as a |Float|.
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo sin(100)
 * 	-0.506366
 * 	:echo sin(-4.01)
 * 	0.763301
 * Can also be used as a |method|:
 * 	Compute()->sin()
 * {only available when compiled with the |+float| feature}
 */
export function sin(denops: Denops, expr: unknown): Promise<unknown>;
export function sin(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("sin", ...args);
}

/**
 * Return the hyperbolic sine of {expr} as a |Float| in the range
 * [-inf, inf].
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo sinh(0.5)
 * 	0.521095
 * 	:echo sinh(-0.9)
 * 	-1.026517
 * Can also be used as a |method|:
 * 	Compute()->sinh()
 * {only available when compiled with the |+float| feature}
 */
export function sinh(denops: Denops, expr: unknown): Promise<unknown>;
export function sinh(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("sinh", ...args);
}

/**
 * Sort the items in {list} in-place.  Returns {list}.
 * If you want a list to remain unmodified make a copy first:
 * 	:let sortedlist = sort(copy(mylist))
 * When {func} is omitted, is empty or zero, then sort() uses the
 * string representation of each item to sort on.  Numbers sort
 * after Strings, |Lists| after Numbers.  For sorting text in the
 * current buffer use |:sort|.
 * When {func} is given and it is '1' or 'i' then case is
 * ignored.
 * When {func} is given and it is 'l' then the current collation
 * locale is used for ordering. Implementation details: strcoll()
 * is used to compare strings. See |:language| check or set the
 * collation locale. |v:collate| can also be used to check the
 * current locale. Sorting using the locale typically ignores
 * case. Example:
 * 	" ö is sorted similarly to o with English locale.
 * 	:language collate en_US.UTF8
 * 	:echo sort(['n', 'o', 'O', 'ö', 'p', 'z'], 'l')
 * 	['n', 'o', 'O', 'ö', 'p', 'z'] ~
 * 	" ö is sorted after z with Swedish locale.
 * 	:language collate sv_SE.UTF8
 * 	:echo sort(['n', 'o', 'O', 'ö', 'p', 'z'], 'l')
 * 	['n', 'o', 'O', 'p', 'z', 'ö'] ~
 * This does not work properly on Mac.
 * When {func} is given and it is 'n' then all items will be
 * sorted numerical (Implementation detail: this uses the
 * strtod() function to parse numbers, Strings, Lists, Dicts and
 * Funcrefs will be considered as being 0).
 * When {func} is given and it is 'N' then all items will be
 * sorted numerical. This is like 'n' but a string containing
 * digits will be used as the number they represent.
 * When {func} is given and it is 'f' then all items will be
 * sorted numerical. All values must be a Number or a Float.
 * When {func} is a |Funcref| or a function name, this function
 * is called to compare items.  The function is invoked with two
 * items as argument and must return zero if they are equal, 1 or
 * bigger if the first one sorts after the second one, -1 or
 * smaller if the first one sorts before the second one.
 * {dict} is for functions with the "dict" attribute.  It will be
 * used to set the local variable "self". |Dictionary-function|
 * The sort is stable, items which compare equal (as number or as
 * string) will keep their relative position. E.g., when sorting
 * on numbers, text strings will sort next to each other, in the
 * same order as they were originally.
 * Can also be used as a |method|:
 * 	mylist->sort()
 * Also see |uniq()|.
 * Example:
 * 	func MyCompare(i1, i2)
 * 	   return a:i1 == a:i2 ? 0 : a:i1 > a:i2 ? 1 : -1
 * 	endfunc
 * 	eval mylist->sort("MyCompare")
 * A shorter compare version for this specific simple case, which
 * ignores overflow:
 * 	func MyCompare(i1, i2)
 * 	   return a:i1 - a:i2
 * 	endfunc
 * For a simple expression you can use a lambda:
 * 	eval mylist->sort({i1, i2 -> i1 - i2})
 */
export function sort(
  denops: Denops,
  list: unknown,
  func?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function sort(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("sort", ...args);
}

/**
 * Return the sound-folded equivalent of {word}.  Uses the first
 * language in 'spelllang' for the current window that supports
 * soundfolding.  'spell' must be set.  When no sound folding is
 * possible the {word} is returned unmodified.
 * This can be used for making spelling suggestions.  Note that
 * the method can be quite slow.
 * Can also be used as a |method|:
 * 	GetWord()->soundfold()
 */
export function soundfold(denops: Denops, word: unknown): Promise<unknown>;
export function soundfold(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("soundfold", ...args);
}

/**
 * Without argument: The result is the badly spelled word under
 * or after the cursor.  The cursor is moved to the start of the
 * bad word.  When no bad word is found in the cursor line the
 * result is an empty string and the cursor doesn't move.
 * With argument: The result is the first word in {sentence} that
 * is badly spelled.  If there are no spelling mistakes the
 * result is an empty string.
 * The return value is a list with two items:
 * - The badly spelled word or an empty string.
 * - The type of the spelling error:
 * 	"bad"		spelling mistake
 * 	"rare"		rare word
 * 	"local"		word only valid in another region
 * 	"caps"		word should start with Capital
 * Example:
 * 	echo spellbadword("the quik brown fox")
 * 	['quik', 'bad'] ~
 * The spelling information for the current window and the value
 * of 'spelllang' are used.
 * Can also be used as a |method|:
 * 	GetText()->spellbadword()
 */
export function spellbadword(
  denops: Denops,
  sentence?: unknown,
): Promise<unknown>;
export function spellbadword(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("spellbadword", ...args);
}

/**
 * Return a |List| with spelling suggestions to replace {word}.
 * When {max} is given up to this number of suggestions are
 * returned.  Otherwise up to 25 suggestions are returned.
 * When the {capital} argument is given and it's non-zero only
 * suggestions with a leading capital will be given.  Use this
 * after a match with 'spellcapcheck'.
 * {word} can be a badly spelled word followed by other text.
 * This allows for joining two words that were split.  The
 * suggestions also include the following text, thus you can
 * replace a line.
 * {word} may also be a good word.  Similar words will then be
 * returned.  {word} itself is not included in the suggestions,
 * although it may appear capitalized.
 * The spelling information for the current window is used.  The
 * values of 'spelllang' and 'spellsuggest' are used.
 * Can also be used as a |method|:
 * 	GetWord()->spellsuggest()
 */
export function spellsuggest(
  denops: Denops,
  word: unknown,
  max?: unknown,
  capital?: unknown,
): Promise<unknown>;
export function spellsuggest(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("spellsuggest", ...args);
}

/**
 * Make a |List| out of {string}.  When {pattern} is omitted or
 * empty each white-separated sequence of characters becomes an
 * item.
 * Otherwise the string is split where {pattern} matches,
 * removing the matched characters. 'ignorecase' is not used
 * here, add \c to ignore case. |/\c|
 * When the first or last item is empty it is omitted, unless the
 * {keepempty} argument is given and it's non-zero.
 * Other empty items are kept when {pattern} matches at least one
 * character or when {keepempty} is non-zero.
 * Example:
 * 	:let words = split(getline('.'), '\W\+')
 * To split a string in individual characters:
 * 	:for c in split(mystring, '\zs')
 * If you want to keep the separator you can also use '\zs' at
 * the end of the pattern:
 * 	:echo split('abc:def:ghi', ':\zs')
 * 	['abc:', 'def:', 'ghi'] ~
 * Splitting a table where the first element can be empty:
 * 	:let items = split(line, ':', 1)
 * The opposite function is |join()|.
 * Can also be used as a |method|:
 * 	GetString()->split()
 */
export function split(
  denops: Denops,
  string: unknown,
  pattern?: unknown,
  keepempty?: unknown,
): Promise<unknown>;
export function split(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("split", ...args);
}

/**
 * Return the non-negative square root of Float {expr} as a
 * |Float|.
 * {expr} must evaluate to a |Float| or a |Number|.  When {expr}
 * is negative the result is NaN (Not a Number).
 * Examples:
 * 	:echo sqrt(100)
 * 	10.0
 * 	:echo sqrt(-4.01)
 * 	nan
 * "nan" may be different, it depends on system libraries.
 * Can also be used as a |method|:
 * 	Compute()->sqrt()
 * {only available when compiled with the |+float| feature}
 */
export function sqrt(denops: Denops, expr: unknown): Promise<unknown>;
export function sqrt(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("sqrt", ...args);
}

/**
 * Convert String {string} to a Float.  This mostly works the
 * same as when using a floating point number in an expression,
 * see |floating-point-format|.  But it's a bit more permissive.
 * E.g., "1e40" is accepted, while in an expression you need to
 * write "1.0e40".  The hexadecimal form "0x123" is also
 * accepted, but not others, like binary or octal.
 * When {quoted} is present and non-zero then embedded single
 * quotes before the dot are ignored, thus "1'000.0" is a
 * thousand.
 * Text after the number is silently ignored.
 * The decimal point is always '.', no matter what the locale is
 * set to.  A comma ends the number: "12,345.67" is converted to
 * 12.0.  You can strip out thousands separators with
 * |substitute()|:
 * 	let f = str2float(substitute(text, ',', '', 'g'))
 * Can also be used as a |method|:
 * 	let f = text->substitute(',', '', 'g')->str2float()
 * {only available when compiled with the |+float| feature}
 */
export function str2float(
  denops: Denops,
  string: unknown,
  quoted?: unknown,
): Promise<unknown>;
export function str2float(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("str2float", ...args);
}

/**
 * Return a list containing the number values which represent
 * each character in String {string}.  Examples:
 * 	str2list(" ")		returns [32]
 * 	str2list("ABC")		returns [65, 66, 67]
 * |list2str()| does the opposite.
 * When {utf8} is omitted or zero, the current 'encoding' is used.
 * With {utf8} set to 1, always treat the String as utf-8
 * characters.  With utf-8 composing characters are handled
 * properly:
 * 	str2list("á")		returns [97, 769]
 * Can also be used as a |method|:
 * 	GetString()->str2list()
 */
export function str2list(
  denops: Denops,
  string: unknown,
  utf8?: unknown,
): Promise<unknown>;
export function str2list(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("str2list", ...args);
}

/**
 * Convert string {string} to a number.
 * {base} is the conversion base, it can be 2, 8, 10 or 16.
 * When {quoted} is present and non-zero then embedded single
 * quotes are ignored, thus "1'000'000" is a million.
 * When {base} is omitted base 10 is used.  This also means that
 * a leading zero doesn't cause octal conversion to be used, as
 * with the default String to Number conversion.  Example:
 * 	let nr = str2nr('0123')
 * When {base} is 16 a leading "0x" or "0X" is ignored.  With a
 * different base the result will be zero.  Similarly, when
 * {base} is 8 a leading "0", "0o" or "0O" is ignored, and when
 * {base} is 2 a leading "0b" or "0B" is ignored.
 * Text after the number is silently ignored.
 * Can also be used as a |method|:
 * 	GetText()->str2nr()
 */
export function str2nr(
  denops: Denops,
  string: unknown,
  base?: unknown,
  quoted?: unknown,
): Promise<unknown>;
export function str2nr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("str2nr", ...args);
}

/**
 * Like |strpart()| but using character index and length instead
 * of byte index and length.
 * When {skipcc} is omitted or zero, composing characters are
 * counted separately.
 * When {skipcc} set to 1, Composing characters are ignored,
 * similar to  |slice()|.
 * When a character index is used where a character does not
 * exist it is omitted and counted as one character.  For
 * example:
 * 	strcharpart('abc', -1, 2)
 * results in 'a'.
 * Can also be used as a |method|:
 * 	GetText()->strcharpart(5)
 */
export function strcharpart(
  denops: Denops,
  src: unknown,
  start: unknown,
  len?: unknown,
  skipcc?: unknown,
): Promise<unknown>;
export function strcharpart(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("strcharpart", ...args);
}

/**
 * The result is a Number, which is the number of characters
 * in String {string}.
 * When {skipcc} is omitted or zero, composing characters are
 * counted separately.
 * When {skipcc} set to 1, Composing characters are ignored.
 * |strcharlen()| always does this.
 * Also see |strlen()|, |strdisplaywidth()| and |strwidth()|.
 * {skipcc} is only available after 7.4.755.  For backward
 * compatibility, you can define a wrapper function:
 *     if has("patch-7.4.755")
 *       function s:strchars(str, skipcc)
 * 	return strchars(a:str, a:skipcc)
 *       endfunction
 *     else
 *       function s:strchars(str, skipcc)
 * 	if a:skipcc
 * 	  return strlen(substitute(a:str, ".", "x", "g"))
 * 	else
 * 	  return strchars(a:str)
 * 	endif
 *       endfunction
 *     endif
 * Can also be used as a |method|:
 * 	GetText()->strchars()
 */
export function strchars(
  denops: Denops,
  string: unknown,
  skipcc?: unknown,
): Promise<unknown>;
export function strchars(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strchars", ...args);
}

/**
 * The result is a Number, which is the number of display cells
 * String {string} occupies on the screen when it starts at {col}
 * (first column is zero).  When {col} is omitted zero is used.
 * Otherwise it is the screen column where to start.  This
 * matters for Tab characters.
 * The option settings of the current window are used.  This
 * matters for anything that's displayed differently, such as
 * 'tabstop' and 'display'.
 * When {string} contains characters with East Asian Width Class
 * Ambiguous, this function's return value depends on 'ambiwidth'.
 * Also see |strlen()|, |strwidth()| and |strchars()|.
 * Can also be used as a |method|:
 * 	GetText()->strdisplaywidth()
 */
export function strdisplaywidth(
  denops: Denops,
  string: unknown,
  col?: unknown,
): Promise<unknown>;
export function strdisplaywidth(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("strdisplaywidth", ...args);
}

/**
 * The result is a String, which is a formatted date and time, as
 * specified by the {format} string.  The given {time} is used,
 * or the current time if no time is given.  The accepted
 * {format} depends on your system, thus this is not portable!
 * See the manual page of the C function strftime() for the
 * format.  The maximum length of the result is 80 characters.
 * See also |localtime()|, |getftime()| and |strptime()|.
 * The language can be changed with the |:language| command.
 * Examples:
 *   :echo strftime("%c")		   Sun Apr 27 11:49:23 1997
 *   :echo strftime("%Y %b %d %X")	   1997 Apr 27 11:53:25
 *   :echo strftime("%y%m%d %T")	   970427 11:53:55
 *   :echo strftime("%H:%M")	   11:55
 *   :echo strftime("%c", getftime("file.c"))
 * 				   Show mod time of file.c.
 * Not available on all systems.  To check use:
 * 	:if exists("*strftime")
 * Can also be used as a |method|:
 * 	GetFormat()->strftime()
 */
export function strftime(
  denops: Denops,
  format: unknown,
  time?: unknown,
): Promise<unknown>;
export function strftime(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strftime", ...args);
}

/**
 * Get character {index} from {str}.  This uses a character
 * index, not a byte index.  Composing characters are considered
 * separate characters here.
 * Also see |strcharpart()| and |strchars()|.
 * Can also be used as a |method|:
 * 	GetText()->strgetchar(5)
 */
export function strgetchar(
  denops: Denops,
  str: unknown,
  index: unknown,
): Promise<unknown>;
export function strgetchar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("strgetchar", ...args);
}

/**
 * The result is a Number, which gives the byte index in
 * {haystack} of the first occurrence of the String {needle}.
 * If {start} is specified, the search starts at index {start}.
 * This can be used to find a second match:
 * 	:let colon1 = stridx(line, ":")
 * 	:let colon2 = stridx(line, ":", colon1 + 1)
 * The search is done case-sensitive.
 * For pattern searches use |match()|.
 * -1 is returned if the {needle} does not occur in {haystack}.
 * See also |strridx()|.
 * Examples:
 *   :echo stridx("An Example", "Example")	     3
 *   :echo stridx("Starting point", "Start")    0
 *   :echo stridx("Starting point", "start")   -1
 * stridx() works similar to the C function strstr().  When used
 * with a single character it works similar to strchr().
 * Can also be used as a |method|:
 * 	GetHaystack()->stridx(needle)
 */
export function stridx(
  denops: Denops,
  haystack: unknown,
  needle: unknown,
  start?: unknown,
): Promise<unknown>;
export function stridx(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("stridx", ...args);
}

/**
 * stridx() works similar to the C function strstr().  When used
 * with a single character it works similar to strchr().
 * Can also be used as a |method|:
 * 	GetHaystack()->stridx(needle)
 */
export function strstr(denops: Denops): Promise<unknown>;
export function strstr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strstr", ...args);
}

/**
 * stridx() works similar to the C function strstr().  When used
 * with a single character it works similar to strchr().
 * Can also be used as a |method|:
 * 	GetHaystack()->stridx(needle)
 */
export function strchr(denops: Denops): Promise<unknown>;
export function strchr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strchr", ...args);
}

/**
 * Return {expr} converted to a String.  If {expr} is a Number,
 * Float, String, Blob or a composition of them, then the result
 * can be parsed back with |eval()|.
 * 	{expr} type	result ~
 * 	String		'string' (single quotes are doubled)
 * 	Number		123
 * 	Float		123.123456 or 1.123456e8
 * 	Funcref		function('name')
 * 	Blob		0z00112233.44556677.8899
 * 	List		[item, item]
 * 	Dictionary	{key: value, key: value}
 * When a |List| or |Dictionary| has a recursive reference it is
 * replaced by "[...]" or "{...}".  Using eval() on the result
 * will then fail.
 * Can also be used as a |method|:
 * 	mylist->string()
 * Also see |strtrans()|.
 */
export function string(denops: Denops, expr: unknown): Promise<unknown>;
export function string(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("string", ...args);
}

/**
 * The result is a Number, which is the length of the String
 * {string} in bytes.
 * If the argument is a Number it is first converted to a String.
 * For other types an error is given.
 * If you want to count the number of multibyte characters use
 * |strchars()|.
 * Also see |len()|, |strdisplaywidth()| and |strwidth()|.
 * Can also be used as a |method|:
 * 	GetString()->strlen()
 */
export function strlen(denops: Denops, string: unknown): Promise<unknown>;
export function strlen(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strlen", ...args);
}

/**
 * The result is a String, which is part of {src}, starting from
 * byte {start}, with the byte length {len}.
 * When {chars} is present and TRUE then {len} is the number of
 * characters positions (composing characters are not counted
 * separately, thus "1" means one base character and any
 * following composing characters).
 * To count {start} as characters instead of bytes use
 * |strcharpart()|.
 * When bytes are selected which do not exist, this doesn't
 * result in an error, the bytes are simply omitted.
 * If {len} is missing, the copy continues from {start} till the
 * end of the {src}.
 * 	strpart("abcdefg", 3, 2)    == "de"
 * 	strpart("abcdefg", -2, 4)   == "ab"
 * 	strpart("abcdefg", 5, 4)    == "fg"
 * 	strpart("abcdefg", 3)	    == "defg"
 * Note: To get the first character, {start} must be 0.  For
 * example, to get the character under the cursor:
 * 	strpart(getline("."), col(".") - 1, 1, v:true)
 * Can also be used as a |method|:
 * 	GetText()->strpart(5)
 */
export function strpart(
  denops: Denops,
  src: unknown,
  start: unknown,
  len?: unknown,
  chars?: unknown,
): Promise<unknown>;
export function strpart(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strpart", ...args);
}

/**
 * The result is a Number, which is a unix timestamp representing
 * the date and time in {timestring}, which is expected to match
 * the format specified in {format}.
 * The accepted {format} depends on your system, thus this is not
 * portable!  See the manual page of the C function strptime()
 * for the format.  Especially avoid "%c".  The value of $TZ also
 * matters.
 * If the {timestring} cannot be parsed with {format} zero is
 * returned.  If you do not know the format of {timestring} you
 * can try different {format} values until you get a non-zero
 * result.
 * See also |strftime()|.
 * Examples:
 *   :echo strptime("%Y %b %d %X", "1997 Apr 27 11:49:23")
 *   862156163
 *   :echo strftime("%c", strptime("%y%m%d %T", "970427 11:53:55"))
 *   Sun Apr 27 11:53:55 1997
 *   :echo strftime("%c", strptime("%Y%m%d%H%M%S", "19970427115355") + 3600)
 *   Sun Apr 27 12:53:55 1997
 * Not available on all systems.  To check use:
 * 	:if exists("*strptime")
 */
export function strptime(
  denops: Denops,
  format: unknown,
  timestring: unknown,
): Promise<unknown>;
export function strptime(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strptime", ...args);
}

/**
 * The result is a Number, which gives the byte index in
 * {haystack} of the last occurrence of the String {needle}.
 * When {start} is specified, matches beyond this index are
 * ignored.  This can be used to find a match before a previous
 * match:
 * 	:let lastcomma = strridx(line, ",")
 * 	:let comma2 = strridx(line, ",", lastcomma - 1)
 * The search is done case-sensitive.
 * For pattern searches use |match()|.
 * -1 is returned if the {needle} does not occur in {haystack}.
 * If the {needle} is empty the length of {haystack} is returned.
 * See also |stridx()|.  Examples:
 *   :echo strridx("an angry armadillo", "an")	     3
 * When used with a single character it works similar to the C
 * function strrchr().
 * Can also be used as a |method|:
 * 	GetHaystack()->strridx(needle)
 */
export function strridx(
  denops: Denops,
  haystack: unknown,
  needle: unknown,
  start?: unknown,
): Promise<unknown>;
export function strridx(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strridx", ...args);
}

/**
 * When used with a single character it works similar to the C
 * function strrchr().
 * Can also be used as a |method|:
 * 	GetHaystack()->strridx(needle)
 */
export function strrchr(denops: Denops): Promise<unknown>;
export function strrchr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strrchr", ...args);
}

/**
 * The result is a String, which is {string} with all unprintable
 * characters translated into printable characters |'isprint'|.
 * Like they are shown in a window.  Example:
 * 	echo strtrans(@a)
 * This displays a newline in register a as "^@" instead of
 * starting a new line.
 * Can also be used as a |method|:
 * 	GetString()->strtrans()
 */
export function strtrans(denops: Denops, string: unknown): Promise<unknown>;
export function strtrans(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strtrans", ...args);
}

/**
 * The result is a Number, which is the number of display cells
 * String {string} occupies.  A Tab character is counted as one
 * cell, alternatively use |strdisplaywidth()|.
 * When {string} contains characters with East Asian Width Class
 * Ambiguous, this function's return value depends on 'ambiwidth'.
 * Also see |strlen()|, |strdisplaywidth()| and |strchars()|.
 * Can also be used as a |method|:
 * 	GetString()->strwidth()
 */
export function strwidth(denops: Denops, string: unknown): Promise<unknown>;
export function strwidth(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("strwidth", ...args);
}

/**
 * Only for an expression in a |:substitute| command or
 * substitute() function.
 * Returns the {nr}'th submatch of the matched text.  When {nr}
 * is 0 the whole matched text is returned.
 * Note that a NL in the string can stand for a line break of a
 * multi-line match or a NUL character in the text.
 * Also see |sub-replace-expression|.
 * If {list} is present and non-zero then submatch() returns
 * a list of strings, similar to |getline()| with two arguments.
 * NL characters in the text represent NUL characters in the
 * text.
 * Only returns more than one item for |:substitute|, inside
 * |substitute()| this list will always contain one or zero
 * items, since there are no real line breaks.
 * When substitute() is used recursively only the submatches in
 * the current (deepest) call can be obtained.
 * Examples:
 * 	:s/\d\+/\=submatch(0) + 1/
 * 	:echo substitute(text, '\d\+', '\=submatch(0) + 1', '')
 * This finds the first number in the line and adds one to it.
 * A line break is included as a newline character.
 * Can also be used as a |method|:
 * 	GetNr()->submatch()
 */
export function submatch(
  denops: Denops,
  nr: unknown,
  list?: unknown,
): Promise<unknown>;
export function submatch(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("submatch", ...args);
}

/**
 * The result is a String, which is a copy of {string}, in which
 * the first match of {pat} is replaced with {sub}.
 * When {flags} is "g", all matches of {pat} in {string} are
 * replaced.  Otherwise {flags} should be "".
 * This works like the ":substitute" command (without any flags).
 * But the matching with {pat} is always done like the 'magic'
 * option is set and 'cpoptions' is empty (to make scripts
 * portable).  'ignorecase' is still relevant, use |/\c| or |/\C|
 * if you want to ignore or match case and ignore 'ignorecase'.
 * 'smartcase' is not used.  See |string-match| for how {pat} is
 * used.
 * A "~" in {sub} is not replaced with the previous {sub}.
 * Note that some codes in {sub} have a special meaning
 * |sub-replace-special|.  For example, to replace something with
 * "\n" (two characters), use "\\\\n" or '\\n'.
 * When {pat} does not match in {string}, {string} is returned
 * unmodified.
 * Example:
 *    :let &path = substitute(&path, ",\\=[^,]*$", "", "")
 * This removes the last component of the 'path' option.
 *    :echo substitute("testing", ".*", "\\U\\0", "")
 * results in "TESTING".
 * When {sub} starts with "\=", the remainder is interpreted as
 * an expression. See |sub-replace-expression|.  Example:
 *    :echo substitute(s, '%\(\x\x\)',
 * 	   \ '\=nr2char("0x" . submatch(1))', 'g')
 * When {sub} is a Funcref that function is called, with one
 * optional argument.  Example:
 *    :echo substitute(s, '%\(\x\x\)', SubNr, 'g')
 * The optional argument is a list which contains the whole
 * matched string and up to nine submatches, like what
 * |submatch()| returns.  Example:
 *    :echo substitute(s, '%\(\x\x\)', {m -> '0x' . m[1]}, 'g')
 * Can also be used as a |method|:
 * 	GetString()->substitute(pat, sub, flags)
 */
export function substitute(
  denops: Denops,
  string: unknown,
  pat: unknown,
  sub: unknown,
  flags: unknown,
): Promise<unknown>;
export function substitute(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("substitute", ...args);
}

/**
 * The result is a dictionary, which holds information about the
 * swapfile {fname}. The available fields are:
 * 	version Vim version
 * 	user	user name
 * 	host	host name
 * 	fname	original file name
 * 	pid	PID of the Vim process that created the swap
 * 		file
 * 	mtime	last modification time in seconds
 * 	inode	Optional: INODE number of the file
 * 	dirty	1 if file was modified, 0 if not
 * Note that "user" and "host" are truncated to at most 39 bytes.
 * In case of failure an "error" item is added with the reason:
 * 	Cannot open file: file not found or in accessible
 * 	Cannot read file: cannot read first block
 * 	Not a swap file: does not contain correct block ID
 * 	Magic number mismatch: Info in first block is invalid
 * Can also be used as a |method|:
 * 	GetFilename()->swapinfo()
 */
export function swapinfo(denops: Denops, fname: unknown): Promise<unknown>;
export function swapinfo(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("swapinfo", ...args);
}

/**
 * The result is the swap file path of the buffer {expr}.
 * For the use of {buf}, see |bufname()| above.
 * If buffer {buf} is the current buffer, the result is equal to
 * |:swapname| (unless there is no swap file).
 * If buffer {buf} has no swap file, returns an empty string.
 * Can also be used as a |method|:
 * 	GetBufname()->swapname()
 */
export function swapname(denops: Denops, buf: unknown): Promise<unknown>;
export function swapname(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("swapname", ...args);
}

/**
 * The result is a Number, which is the syntax ID at the position
 * {lnum} and {col} in the current window.
 * The syntax ID can be used with |synIDattr()| and
 * |synIDtrans()| to obtain syntax information about text.
 * {col} is 1 for the leftmost column, {lnum} is 1 for the first
 * line.  'synmaxcol' applies, in a longer line zero is returned.
 * Note that when the position is after the last character,
 * that's where the cursor can be in Insert mode, synID() returns
 * zero.  {lnum} is used like with |getline()|.
 * When {trans} is |TRUE|, transparent items are reduced to the
 * item that they reveal.  This is useful when wanting to know
 * the effective color.  When {trans} is |FALSE|, the transparent
 * item is returned.  This is useful when wanting to know which
 * syntax item is effective (e.g. inside parens).
 * Warning: This function can be very slow.  Best speed is
 * obtained by going through the file in forward direction.
 * Example (echoes the name of the syntax item under the cursor):
 * 	:echo synIDattr(synID(line("."), col("."), 1), "name")
 */
export function synID(
  denops: Denops,
  lnum: unknown,
  col: unknown,
  trans: unknown,
): Promise<unknown>;
export function synID(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("synID", ...args);
}

/**
 * The result is a String, which is the {what} attribute of
 * syntax ID {synID}.  This can be used to obtain information
 * about a syntax item.
 * {mode} can be "gui", "cterm" or "term", to get the attributes
 * for that mode.  When {mode} is omitted, or an invalid value is
 * used, the attributes for the currently active highlighting are
 * used (GUI, cterm or term).
 * Use synIDtrans() to follow linked highlight groups.
 * {what}		result
 * "name"		the name of the syntax item
 * "fg"		foreground color (GUI: color name used to set
 * 		the color, cterm: color number as a string,
 * 		term: empty string)
 * "bg"		background color (as with "fg")
 * "font"		font name (only available in the GUI)
 * 		|highlight-font|
 * "sp"		special color for the GUI (as with "fg")
 * 		|highlight-guisp|
 * "ul"		underline color for cterm: number as a string
 * "fg#"		like "fg", but for the GUI and the GUI is
 * 		running the name in "#RRGGBB" form
 * "bg#"		like "fg#" for "bg"
 * "sp#"		like "fg#" for "sp"
 * "bold"		"1" if bold
 * "italic"	"1" if italic
 * "reverse"	"1" if reverse
 * "inverse"	"1" if inverse (= reverse)
 * "standout"	"1" if standout
 * "underline"	"1" if underlined
 * "undercurl"	"1" if undercurled
 * "strike"	"1" if strikethrough
 * Example (echoes the color of the syntax item under the
 * cursor):
 * 	:echo synIDattr(synIDtrans(synID(line("."), col("."), 1)), "fg")
 * Can also be used as a |method|:
 * 	:echo synID(line("."), col("."), 1)->synIDtrans()->synIDattr("fg")
 */
export function synIDattr(
  denops: Denops,
  synID: unknown,
  what: unknown,
  mode?: unknown,
): Promise<unknown>;
export function synIDattr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("synIDattr", ...args);
}

/**
 * The result is a Number, which is the translated syntax ID of
 * {synID}.  This is the syntax group ID of what is being used to
 * highlight the character.  Highlight links given with
 * ":highlight link" are followed.
 * Can also be used as a |method|:
 * 	:echo synID(line("."), col("."), 1)->synIDtrans()->synIDattr("fg")
 */
export function synIDtrans(denops: Denops, synID: unknown): Promise<unknown>;
export function synIDtrans(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("synIDtrans", ...args);
}

/**
 * The result is a |List| with currently three items:
 * 1. The first item in the list is 0 if the character at the
 *    position {lnum} and {col} is not part of a concealable
 *    region, 1 if it is.  {lnum} is used like with |getline()|.
 * 2. The second item in the list is a string. If the first item
 *    is 1, the second item contains the text which will be
 *    displayed in place of the concealed text, depending on the
 *    current setting of 'conceallevel' and 'listchars'.
 * 3. The third and final item in the list is a number
 *    representing the specific syntax region matched in the
 *    line. When the character is not concealed the value is
 *    zero. This allows detection of the beginning of a new
 *    concealable region if there are two consecutive regions
 *    with the same replacement character.  For an example, if
 *    the text is "123456" and both "23" and "45" are concealed
 *    and replaced by the character "X", then:
 * 	call			returns ~
 * 	synconcealed(lnum, 1)   [0, '', 0]
 * 	synconcealed(lnum, 2)   [1, 'X', 1]
 * 	synconcealed(lnum, 3)   [1, 'X', 1]
 * 	synconcealed(lnum, 4)   [1, 'X', 2]
 * 	synconcealed(lnum, 5)   [1, 'X', 2]
 * 	synconcealed(lnum, 6)   [0, '', 0]
 */
export function synconcealed(
  denops: Denops,
  lnum: unknown,
  col: unknown,
): Promise<unknown>;
export function synconcealed(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("synconcealed", ...args);
}

/**
 * Return a |List|, which is the stack of syntax items at the
 * position {lnum} and {col} in the current window.  {lnum} is
 * used like with |getline()|.  Each item in the List is an ID
 * like what |synID()| returns.
 * The first item in the List is the outer region, following are
 * items contained in that one.  The last one is what |synID()|
 * returns, unless not the whole item is highlighted or it is a
 * transparent item.
 * This function is useful for debugging a syntax file.
 * Example that shows the syntax stack under the cursor:
 * 	for id in synstack(line("."), col("."))
 * 	   echo synIDattr(id, "name")
 * 	endfor
 * When the position specified with {lnum} and {col} is invalid
 * nothing is returned.  The position just after the last
 * character in a line and the first column in an empty line are
 * valid positions.
 */
export function synstack(
  denops: Denops,
  lnum: unknown,
  col: unknown,
): Promise<unknown>;
export function synstack(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("synstack", ...args);
}

/**
 * Get the output of the shell command {expr} as a string.  See
 * |systemlist()| to get the output as a |List|.
 * When {input} is given and is a string this string is written
 * to a file and passed as stdin to the command.  The string is
 * written as-is, you need to take care of using the correct line
 * separators yourself.
 * If {input} is given and is a |List| it is written to the file
 * in a way |writefile()| does with {binary} set to "b" (i.e.
 * with a newline between each list item with newlines inside
 * list items converted to NULs).
 * When {input} is given and is a number that is a valid id for
 * an existing buffer then the content of the buffer is written
 * to the file line by line, each line terminated by a NL and
 * NULs characters where the text has a NL.
 * Pipes are not used, the 'shelltemp' option is not used.
 * When prepended by |:silent| the terminal will not be set to
 * cooked mode.  This is meant to be used for commands that do
 * not need the user to type.  It avoids stray characters showing
 * up on the screen which require |CTRL-L| to remove.
 * 	:silent let f = system('ls *.vim')
 * Note: Use |shellescape()| or |::S| with |expand()| or
 * |fnamemodify()| to escape special characters in a command
 * argument.  Newlines in {expr} may cause the command to fail.
 * The characters in 'shellquote' and 'shellxquote' may also
 * cause trouble.
 * This is not to be used for interactive commands.
 * The result is a String.  Example:
 *     :let files = system("ls " .  shellescape(expand('%:h')))
 *     :let files = system('ls ' . expand('%:h:S'))
 * To make the result more system-independent, the shell output
 * is filtered to replace <CR> with <NL> for Macintosh, and
 * <CR><NL> with <NL> for DOS-like systems.
 * To avoid the string being truncated at a NUL, all NUL
 * characters are replaced with SOH (0x01).
 * The command executed is constructed using several options:
 * 	'shell' 'shellcmdflag' 'shellxquote' {expr} 'shellredir' {tmp} 'shellxquote'
 * ({tmp} is an automatically generated file name).
 * For Unix, braces are put around {expr} to allow for
 * concatenated commands.
 * The command will be executed in "cooked" mode, so that a
 * CTRL-C will interrupt the command (on Unix at least).
 * The resulting error code can be found in |v:shell_error|.
 * This function will fail in |restricted-mode|.
 * Note that any wrong value in the options mentioned above may
 * make the function fail.  It has also been reported to fail
 * when using a security agent application.
 * Unlike ":!cmd" there is no automatic check for changed files.
 * Use |:checktime| to force a check.
 * Can also be used as a |method|:
 * 	:echo GetCmd()->system()
 */
export function system(
  denops: Denops,
  expr: unknown,
  input?: unknown,
): Promise<unknown>;
export function system(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("system", ...args);
}

/**
 * Same as |system()|, but returns a |List| with lines (parts of
 * output separated by NL) with NULs transformed into NLs. Output
 * is the same as |readfile()| will output with {binary} argument
 * set to "b", except that there is no extra empty item when the
 * result ends in a NL.
 * Note that on MS-Windows you may get trailing CR characters.
 * To see the difference between "echo hello" and "echo -n hello"
 * use |system()| and |split()|:
 * 	echo system('echo hello')->split('\n', 1)
 * Returns an empty string on error.
 * Can also be used as a |method|:
 * 	:echo GetCmd()->systemlist()
 */
export function systemlist(
  denops: Denops,
  expr: unknown,
  input?: unknown,
): Promise<unknown>;
export function systemlist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("systemlist", ...args);
}

/**
 * The result is a |List|, where each item is the number of the
 * buffer associated with each window in the current tab page.
 * {arg} specifies the number of the tab page to be used. When
 * omitted the current tab page is used.
 * When {arg} is invalid the number zero is returned.
 * To get a list of all buffers in all tabs use this:
 * 	let buflist = []
 * 	for i in range(tabpagenr('$'))
 * 	   call extend(buflist, tabpagebuflist(i + 1))
 * 	endfor
 * Note that a buffer may appear in more than one window.
 * Can also be used as a |method|:
 * 	GetTabpage()->tabpagebuflist()
 */
export function tabpagebuflist(denops: Denops, arg?: unknown): Promise<unknown>;
export function tabpagebuflist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("tabpagebuflist", ...args);
}

/**
 * The result is a Number, which is the number of the current
 * tab page.  The first tab page has number 1.
 * The optional argument {arg} supports the following values:
 * 	$	the number of the last tab page (the tab page
 * 		count).
 * 	#	the number of the last accessed tab page
 * 		(where |g<Tab>| goes to). if there is no
 * 		previous tab page 0 is returned.
 * The number can be used with the |:tab| command.
 */
export function tabpagenr(denops: Denops, arg?: unknown): Promise<unknown>;
export function tabpagenr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("tabpagenr", ...args);
}

/**
 * Like |winnr()| but for tab page {tabarg}.
 * {tabarg} specifies the number of tab page to be used.
 * {arg} is used like with |winnr()|:
 * - When omitted the current window number is returned.  This is
 *   the window which will be used when going to this tab page.
 * - When "$" the number of windows is returned.
 * - When "#" the previous window nr is returned.
 * Useful examples:
 *     tabpagewinnr(1)	    " current window of tab page 1
 *     tabpagewinnr(4, '$')    " number of windows in tab page 4
 * When {tabarg} is invalid zero is returned.
 * Can also be used as a |method|:
 * 	GetTabpage()->tabpagewinnr()
 */
export function tabpagewinnr(
  denops: Denops,
  tabarg: unknown,
  arg?: unknown,
): Promise<unknown>;
export function tabpagewinnr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("tabpagewinnr", ...args);
}

/**
 * Returns a |List| with the file names used to search for tags
 * for the current buffer.  This is the 'tags' option expanded.
 */
export function tagfiles(denops: Denops): Promise<unknown>;
export function tagfiles(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("tagfiles", ...args);
}

/**
 * Returns a |List| of tags matching the regular expression {expr}.
 * If {filename} is passed it is used to prioritize the results
 * in the same way that |:tselect| does. See |tag-priority|.
 * {filename} should be the full path of the file.
 * Each list item is a dictionary with at least the following
 * entries:
 * 	name		Name of the tag.
 * 	filename	Name of the file where the tag is
 * 			defined.  It is either relative to the
 * 			current directory or a full path.
 * 	cmd		Ex command used to locate the tag in
 * 			the file.
 * 	kind		Type of the tag.  The value for this
 * 			entry depends on the language specific
 * 			kind values.  Only available when
 * 			using a tags file generated by
 * 			Exuberant ctags or hdrtag.
 * 	static		A file specific tag.  Refer to
 * 			|static-tag| for more information.
 * More entries may be present, depending on the content of the
 * tags file: access, implementation, inherits and signature.
 * Refer to the ctags documentation for information about these
 * fields.  For C code the fields "struct", "class" and "enum"
 * may appear, they give the name of the entity the tag is
 * contained in.
 * The ex-command "cmd" can be either an ex search pattern, a
 * line number or a line number followed by a byte number.
 * If there are no matching tags, then an empty list is returned.
 * To get an exact tag match, the anchors '^' and '$' should be
 * used in {expr}.  This also make the function work faster.
 * Refer to |tag-regexp| for more information about the tag
 * search regular expression pattern.
 * Refer to |'tags'| for information about how the tags file is
 * located by Vim. Refer to |tags-file-format| for the format of
 * the tags file generated by the different ctags tools.
 * Can also be used as a |method|:
 * 	GetTagpattern()->taglist()
 */
export function taglist(
  denops: Denops,
  expr: unknown,
  filename?: unknown,
): Promise<unknown>;
export function taglist(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("taglist", ...args);
}

/**
 * Return the tangent of {expr}, measured in radians, as a |Float|
 * in the range [-inf, inf].
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo tan(10)
 * 	0.648361
 * 	:echo tan(-4.01)
 * 	-1.181502
 * Can also be used as a |method|:
 * 	Compute()->tan()
 * {only available when compiled with the |+float| feature}
 */
export function tan(denops: Denops, expr: unknown): Promise<unknown>;
export function tan(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("tan", ...args);
}

/**
 * Return the hyperbolic tangent of {expr} as a |Float| in the
 * range [-1, 1].
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	:echo tanh(0.5)
 * 	0.462117
 * 	:echo tanh(-1)
 * 	-0.761594
 * Can also be used as a |method|:
 * 	Compute()->tanh()
 * {only available when compiled with the |+float| feature}
 */
export function tanh(denops: Denops, expr: unknown): Promise<unknown>;
export function tanh(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("tanh", ...args);
}

/**
 * The result is a String, which is the name of a file that
 * doesn't exist.  It can be used for a temporary file.  The name
 * is different for at least 26 consecutive calls.  Example:
 * 	:let tmpfile = tempname()
 * 	:exe "redir > " . tmpfile
 * For Unix, the file will be in a private directory |tempfile|.
 * For MS-Windows forward slashes are used when the 'shellslash'
 * option is set, or when 'shellcmdflag' starts with '-' and
 * 'shell' does not contain powershell or pwsh.
 */
export function tempname(denops: Denops): Promise<unknown>;
export function tempname(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("tempname", ...args);
}

/**
 * Return a list with information about timers.
 * When {id} is given only information about this timer is
 * returned.  When timer {id} does not exist an empty list is
 * returned.
 * When {id} is omitted information about all timers is returned.
 * For each timer the information is stored in a |Dictionary| with
 * these items:
 *     "id"	    the timer ID
 *     "time"	    time the timer was started with
 *     "remaining"	    time until the timer fires
 *     "repeat"	    number of times the timer will still fire;
 * 		    -1 means forever
 *     "callback"	    the callback
 *     "paused"	    1 if the timer is paused, 0 otherwise
 * Can also be used as a |method|:
 * 	GetTimer()->timer_info()
 * {only available when compiled with the |+timers| feature}
 */
export function timer_info(denops: Denops, id?: unknown): Promise<unknown>;
export function timer_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("timer_info", ...args);
}

/**
 * Pause or unpause a timer.  A paused timer does not invoke its
 * callback when its time expires.  Unpausing a timer may cause
 * the callback to be invoked almost immediately if enough time
 * has passed.
 * Pausing a timer is useful to avoid the callback to be called
 * for a short time.
 * If {paused} evaluates to a non-zero Number or a non-empty
 * String, then the timer is paused, otherwise it is unpaused.
 * See |non-zero-arg|.
 * Can also be used as a |method|:
 * 	GetTimer()->timer_pause(1)
 * {only available when compiled with the |+timers| feature}
 */
export function timer_pause(
  denops: Denops,
  timer: unknown,
  paused: unknown,
): Promise<unknown>;
export function timer_pause(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("timer_pause", ...args);
}

/**
 * Create a timer and return the timer ID.
 * {time} is the waiting time in milliseconds. This is the
 * minimum time before invoking the callback.  When the system is
 * busy or Vim is not waiting for input the time will be longer.
 * {callback} is the function to call.  It can be the name of a
 * function or a |Funcref|.  It is called with one argument, which
 * is the timer ID.  The callback is only invoked when Vim is
 * waiting for input.
 * If you want to show a message look at |popup_notification()|
 * to avoid interfering with what the user is doing.
 * {options} is a dictionary.  Supported entries:
 *    "repeat"	Number of times to repeat calling the
 * 		callback.  -1 means forever.  When not present
 * 		the callback will be called once.
 * 		If the timer causes an error three times in a
 * 		row the repeat is cancelled.  This avoids that
 * 		Vim becomes unusable because of all the error
 * 		messages.
 * Example:
 * 	func MyHandler(timer)
 * 	  echo 'Handler called'
 * 	endfunc
 * 	let timer = timer_start(500, 'MyHandler',
 * 		\ {'repeat': 3})
 * This will invoke MyHandler() three times at 500 msec
 * intervals.
 * Can also be used as a |method|:
 * 	GetMsec()->timer_start(callback)
 * Not available in the |sandbox|.
 * {only available when compiled with the |+timers| feature}
 */
export function timer_start(
  denops: Denops,
  time: unknown,
  callback: unknown,
  options?: unknown,
): Promise<unknown>;
export function timer_start(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("timer_start", ...args);
}

/**
 * Stop a timer.  The timer callback will no longer be invoked.
 * {timer} is an ID returned by timer_start(), thus it must be a
 * Number.  If {timer} does not exist there is no error.
 * Can also be used as a |method|:
 * 	GetTimer()->timer_stop()
 * {only available when compiled with the |+timers| feature}
 */
export function timer_stop(denops: Denops, timer: unknown): Promise<unknown>;
export function timer_stop(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("timer_stop", ...args);
}

/**
 * Stop all timers.  The timer callbacks will no longer be
 * invoked.  Useful if a timer is misbehaving.  If there are no
 * timers there is no error.
 * {only available when compiled with the |+timers| feature}
 */
export function timer_stopall(denops: Denops): Promise<unknown>;
export function timer_stopall(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("timer_stopall", ...args);
}

/**
 * The result is a copy of the String given, with all uppercase
 * characters turned into lowercase (just like applying |gu| to
 * the string).
 * Can also be used as a |method|:
 * 	GetText()->tolower()
 */
export function tolower(denops: Denops, expr: unknown): Promise<unknown>;
export function tolower(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("tolower", ...args);
}

/**
 * The result is a copy of the String given, with all lowercase
 * characters turned into uppercase (just like applying |gU| to
 * the string).
 * Can also be used as a |method|:
 * 	GetText()->toupper()
 */
export function toupper(denops: Denops, expr: unknown): Promise<unknown>;
export function toupper(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("toupper", ...args);
}

/**
 * The result is a copy of the {src} string with all characters
 * which appear in {fromstr} replaced by the character in that
 * position in the {tostr} string.  Thus the first character in
 * {fromstr} is translated into the first character in {tostr}
 * and so on.  Exactly like the unix "tr" command.
 * This code also deals with multibyte characters properly.
 * Examples:
 * 	echo tr("hello there", "ht", "HT")
 * returns "Hello THere"
 * 	echo tr("<blob>", "<>", "{}")
 * returns "{blob}"
 * Can also be used as a |method|:
 * 	GetText()->tr(from, to)
 */
export function tr(
  denops: Denops,
  src: unknown,
  fromstr: unknown,
  tostr: unknown,
): Promise<unknown>;
export function tr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("tr", ...args);
}

/**
 * Return {text} as a String where any character in {mask} is
 * removed from the beginning and/or end of {text}.
 * If {mask} is not given, {mask} is all characters up to 0x20,
 * which includes Tab, space, NL and CR, plus the non-breaking
 * space character 0xa0.
 * The optional {dir} argument specifies where to remove the
 * characters:
 * 	0	remove from the beginning and end of {text}
 * 	1	remove only at the beginning of {text}
 * 	2	remove only at the end of {text}
 * When omitted both ends are trimmed.
 * This function deals with multibyte characters properly.
 * Examples:
 * 	echo trim("   some text ")
 * returns "some text"
 * 	echo trim("  \r\t\t\r RESERVE \t\n\x0B\xA0") . "_TAIL"
 * returns "RESERVE_TAIL"
 * 	echo trim("rm<Xrm<>X>rrm", "rm<>")
 * returns "Xrm<>X" (characters in the middle are not removed)
 * 	echo trim("  vim  ", " ", 2)
 * returns "  vim"
 * Can also be used as a |method|:
 * 	GetText()->trim()
 */
export function trim(
  denops: Denops,
  text: unknown,
  mask?: unknown,
  dir?: unknown,
): Promise<unknown>;
export function trim(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("trim", ...args);
}

/**
 * Return the largest integral value with magnitude less than or
 * equal to {expr} as a |Float| (truncate towards zero).
 * {expr} must evaluate to a |Float| or a |Number|.
 * Examples:
 * 	echo trunc(1.456)
 * 	1.0
 * 	echo trunc(-5.456)
 * 	-5.0
 * 	echo trunc(4.0)
 * 	4.0
 * Can also be used as a |method|:
 * 	Compute()->trunc()
 * {only available when compiled with the |+float| feature}
 */
export function trunc(denops: Denops, expr: unknown): Promise<unknown>;
export function trunc(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("trunc", ...args);
}

/**
 * The result is a Number representing the type of {expr}.
 * Instead of using the number directly, it is better to use the
 * v:t_ variable that has the value:
 * 	Number:	    0  |v:t_number|
 * 	String:	    1  |v:t_string|
 * 	Funcref:    2  |v:t_func|
 * 	List:	    3  |v:t_list|
 * 	Dictionary: 4  |v:t_dict|
 * 	Float:	    5  |v:t_float|
 * 	Boolean:    6  |v:t_bool| (v:false and v:true)
 * 	None:	    7  |v:t_none| (v:null and v:none)
 * 	Job:	    8  |v:t_job|
 * 	Channel:    9  |v:t_channel|
 * 	Blob:	   10  |v:t_blob|
 * For backward compatibility, this method can be used:
 * 	:if type(myvar) == type(0)
 * 	:if type(myvar) == type("")
 * 	:if type(myvar) == type(function("tr"))
 * 	:if type(myvar) == type([])
 * 	:if type(myvar) == type({})
 * 	:if type(myvar) == type(0.0)
 * 	:if type(myvar) == type(v:false)
 * 	:if type(myvar) == type(v:none)
 * To check if the v:t_ variables exist use this:
 * 	:if exists('v:t_number')
 * Can also be used as a |method|:
 * 	mylist->type()
 */
export function type(denops: Denops, expr: unknown): Promise<unknown>;
export function type(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("type", ...args);
}

/**
 * Return the name of the undo file that would be used for a file
 * with name {name} when writing.  This uses the 'undodir'
 * option, finding directories that exist.  It does not check if
 * the undo file exists.
 * {name} is always expanded to the full path, since that is what
 * is used internally.
 * If {name} is empty undofile() returns an empty string, since a
 * buffer without a file name will not write an undo file.
 * Useful in combination with |:wundo| and |:rundo|.
 * When compiled without the |+persistent_undo| option this always
 * returns an empty string.
 * Can also be used as a |method|:
 * 	GetFilename()->undofile()
 */
export function undofile(denops: Denops, name: unknown): Promise<unknown>;
export function undofile(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("undofile", ...args);
}

/**
 * Return the current state of the undo tree in a dictionary with
 * the following items:
 *   "seq_last"	The highest undo sequence number used.
 *   "seq_cur"	The sequence number of the current position in
 * 		the undo tree.  This differs from "seq_last"
 * 		when some changes were undone.
 *   "time_cur"	Time last used for |:earlier| and related
 * 		commands.  Use |strftime()| to convert to
 * 		something readable.
 *   "save_last"	Number of the last file write.  Zero when no
 * 		write yet.
 *   "save_cur"	Number of the current position in the undo
 * 		tree.
 *   "synced"	Non-zero when the last undo block was synced.
 * 		This happens when waiting from input from the
 * 		user.  See |undo-blocks|.
 *   "entries"	A list of dictionaries with information about
 * 		undo blocks.
 * The first item in the "entries" list is the oldest undo item.
 * Each List item is a |Dictionary| with these items:
 *   "seq"		Undo sequence number.  Same as what appears in
 * 		|:undolist|.
 *   "time"	Timestamp when the change happened.  Use
 * 		|strftime()| to convert to something readable.
 *   "newhead"	Only appears in the item that is the last one
 * 		that was added.  This marks the last change
 * 		and where further changes will be added.
 *   "curhead"	Only appears in the item that is the last one
 * 		that was undone.  This marks the current
 * 		position in the undo tree, the block that will
 * 		be used by a redo command.  When nothing was
 * 		undone after the last change this item will
 * 		not appear anywhere.
 *   "save"	Only appears on the last block before a file
 * 		write.  The number is the write count.  The
 * 		first write has number 1, the last one the
 * 		"save_last" mentioned above.
 *   "alt"		Alternate entry.  This is again a List of undo
 * 		blocks.  Each item may again have an "alt"
 * 		item.
 */
export function undotree(denops: Denops): Promise<unknown>;
export function undotree(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("undotree", ...args);
}

/**
 * Remove second and succeeding copies of repeated adjacent
 * {list} items in-place.  Returns {list}.  If you want a list
 * to remain unmodified make a copy first:
 * 	:let newlist = uniq(copy(mylist))
 * The default compare function uses the string representation of
 * each item.  For the use of {func} and {dict} see |sort()|.
 * Can also be used as a |method|:
 * 	mylist->uniq()
 */
export function uniq(
  denops: Denops,
  list: unknown,
  func?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function uniq(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("uniq", ...args);
}

/**
 * Return a |List| with all the values of {dict}.  The |List| is
 * in arbitrary order.  Also see |items()| and |keys()|.
 * Can also be used as a |method|:
 * 	mydict->values()
 */
export function values(denops: Denops, dict: unknown): Promise<unknown>;
export function values(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("values", ...args);
}

/**
 * The result is a String, which describes the last Visual mode
 * used in the current buffer.  Initially it returns an empty
 * string, but once Visual mode has been used, it returns "v",
 * "V", or "<CTRL-V>" (a single CTRL-V character) for
 * character-wise, line-wise, or block-wise Visual mode
 * respectively.
 * Example:
 * 	:exe "normal " . visualmode()
 * This enters the same Visual mode as before.  It is also useful
 * in scripts if you wish to act differently depending on the
 * Visual mode that was used.
 * If Visual mode is active, use |mode()| to get the Visual mode
 * (e.g., in a |:vmap|).
 * If {expr} is supplied and it evaluates to a non-zero Number or
 * a non-empty String, then the Visual mode will be cleared and
 * the old value is returned.  See |non-zero-arg|.
 */
export function visualmode(denops: Denops, expr?: unknown): Promise<unknown>;
export function visualmode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("visualmode", ...args);
}

/**
 * Returns |TRUE| when the wildmenu is active and |FALSE|
 * otherwise.  See 'wildmenu' and 'wildmode'.
 * This can be used in mappings to handle the 'wildcharm' option
 * gracefully. (Makes only sense with |mapmode-c| mappings).
 * For example to make <c-j> work like <down> in wildmode, use:
 *     :cnoremap <expr> <C-j> wildmenumode() ? "\<Down>\<Tab>" : "\<c-j>"
 * (Note, this needs the 'wildcharm' option set appropriately).
 */
export function wildmenumode(denops: Denops): Promise<unknown>;
export function wildmenumode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("wildmenumode", ...args);
}

/**
 * Like `execute()` but in the context of window {id}.
 * The window will temporarily be made the current window,
 * without triggering autocommands.  When executing {command}
 * autocommands will be triggered, this may have unexpected side
 * effects.  Use |:noautocmd| if needed.
 * Example:
 * 	call win_execute(winid, 'set syntax=python')
 * Doing the same with `setwinvar()` would not trigger
 * autocommands and not actually show syntax highlighting.
 * Not all commands are allowed in popup windows.
 * When window {id} does not exist then no error is given and
 * an empty string is returned.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetCommand()->win_execute(winid)
 */
export function win_execute(
  denops: Denops,
  id: unknown,
  command: unknown,
  silent?: unknown,
): Promise<unknown>;
export function win_execute(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_execute", ...args);
}

/**
 * Returns a |List| with |window-ID|s for windows that contain
 * buffer {bufnr}.  When there is none the list is empty.
 * Can also be used as a |method|:
 * 	GetBufnr()->win_findbuf()
 */
export function win_findbuf(denops: Denops, bufnr: unknown): Promise<unknown>;
export function win_findbuf(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_findbuf", ...args);
}

/**
 * Get the |window-ID| for the specified window.
 * When {win} is missing use the current window.
 * With {win} this is the window number.  The top window has
 * number 1.
 * Without {tab} use the current tab, otherwise the tab with
 * number {tab}.  The first tab has number one.
 * Return zero if the window cannot be found.
 * Can also be used as a |method|:
 * 	GetWinnr()->win_getid()
 */
export function win_getid(
  denops: Denops,
  win?: unknown,
  tab?: unknown,
): Promise<unknown>;
export function win_getid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_getid", ...args);
}

/**
 * Return the type of the window:
 * 	"autocmd"	autocommand window. Temporary window
 * 			used to execute autocommands.
 * 	"command"	command-line window |cmdwin|
 * 	(empty)		normal window
 * 	"loclist"	|location-list-window|
 * 	"popup"		popup window |popup|
 * 	"preview"	preview window |preview-window|
 * 	"quickfix"	|quickfix-window|
 * 	"unknown"	window {nr} not found
 * When {nr} is omitted return the type of the current window.
 * When {nr} is given return the type of this window by number or
 * |window-ID|.
 * Also see the 'buftype' option.  When running a terminal in a
 * popup window then 'buftype' is "terminal" and win_gettype()
 * returns "popup".
 */
export function win_gettype(denops: Denops, nr?: unknown): Promise<unknown>;
export function win_gettype(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_gettype", ...args);
}

/**
 * Go to window with ID {expr}.  This may also change the current
 * tabpage.
 * Return TRUE if successful, FALSE if the window cannot be found.
 * Can also be used as a |method|:
 * 	GetWinid()->win_gotoid()
 */
export function win_gotoid(denops: Denops, expr: unknown): Promise<unknown>;
export function win_gotoid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_gotoid", ...args);
}

/**
 * Return a list with the tab number and window number of window
 * with ID {expr}: [tabnr, winnr].
 * Return [0, 0] if the window cannot be found.
 * Can also be used as a |method|:
 * 	GetWinid()->win_id2tabwin()
 */
export function win_id2tabwin(denops: Denops, expr: unknown): Promise<unknown>;
export function win_id2tabwin(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_id2tabwin", ...args);
}

/**
 * Return the window number of window with ID {expr}.
 * Return 0 if the window cannot be found in the current tabpage.
 * Can also be used as a |method|:
 * 	GetWinid()->win_id2win()
 */
export function win_id2win(denops: Denops, expr: unknown): Promise<unknown>;
export function win_id2win(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_id2win", ...args);
}

/**
 * Return the screen position of window {nr} as a list with two
 * numbers: [row, col].  The first window always has position
 * [1, 1], unless there is a tabline, then it is [2, 1].
 * {nr} can be the window number or the |window-ID|.  Use zero
 * for the current window.
 * Returns [0, 0] if the window cannot be found in the current
 * tabpage.
 * Can also be used as a |method|:
 * 	GetWinid()->win_screenpos()
 */
export function win_screenpos(denops: Denops, nr: unknown): Promise<unknown>;
export function win_screenpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_screenpos", ...args);
}

/**
 * Move the window {nr} to a new split of the window {target}.
 * This is similar to moving to {target}, creating a new window
 * using |:split| but having the same contents as window {nr}, and
 * then closing {nr}.
 * Both {nr} and {target} can be window numbers or |window-ID|s.
 * Both must be in the current tab page.
 * Returns zero for success, non-zero for failure.
 * {options} is a |Dictionary| with the following optional entries:
 *   "vertical"	When TRUE, the split is created vertically,
 * 		like with |:vsplit|.
 *   "rightbelow"	When TRUE, the split is made below or to the
 * 		right (if vertical).  When FALSE, it is done
 * 		above or to the left (if vertical).  When not
 * 		present, the values of 'splitbelow' and
 * 		'splitright' are used.
 * Can also be used as a |method|:
 * 	GetWinid()->win_splitmove(target)
 */
export function win_splitmove(
  denops: Denops,
  nr: unknown,
  target: unknown,
  options?: unknown,
): Promise<unknown>;
export function win_splitmove(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("win_splitmove", ...args);
}

/**
 * The result is a Number, which is the number of the buffer
 * associated with window {nr}.  {nr} can be the window number or
 * the |window-ID|.
 * When {nr} is zero, the number of the buffer in the current
 * window is returned.
 * When window {nr} doesn't exist, -1 is returned.
 * Example:
 *   :echo "The file in the current window is " . bufname(winbufnr(0))
 * Can also be used as a |method|:
 * 	FindWindow()->winbufnr()->bufname()
 */
export function winbufnr(denops: Denops, nr: unknown): Promise<unknown>;
export function winbufnr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("winbufnr", ...args);
}

/**
 * The result is a String.  For MS-Windows it indicates the OS
 * version.  E.g, Windows 10 is "10.0", Windows 8 is "6.2",
 * Windows XP is "5.1".  For non-MS-Windows systems the result is
 * an empty string.
 */
export function windowsversion(denops: Denops): Promise<unknown>;
export function windowsversion(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("windowsversion", ...args);
}

/**
 * The result is a Number, which is the height of window {nr}.
 * {nr} can be the window number or the |window-ID|.
 * When {nr} is zero, the height of the current window is
 * returned.  When window {nr} doesn't exist, -1 is returned.
 * An existing window always has a height of zero or more.
 * This excludes any window toolbar line.
 * Examples:
 *   :echo "The current window has " . winheight(0) . " lines."
 * Can also be used as a |method|:
 * 	GetWinid()->winheight()
 */
export function winheight(denops: Denops, nr: unknown): Promise<unknown>;
export function winheight(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("winheight", ...args);
}

/**
 * The result is a nested List containing the layout of windows
 * in a tabpage.
 * Without {tabnr} use the current tabpage, otherwise the tabpage
 * with number {tabnr}. If the tabpage {tabnr} is not found,
 * returns an empty list.
 * For a leaf window, it returns:
 * 	['leaf', {winid}]
 * For horizontally split windows, which form a column, it
 * returns:
 * 	['col', [{nested list of windows}]]
 * For vertically split windows, which form a row, it returns:
 * 	['row', [{nested list of windows}]]
 * Example:
 * 	" Only one window in the tab page
 * 	:echo winlayout()
 * 	['leaf', 1000]
 * 	" Two horizontally split windows
 * 	:echo winlayout()
 * 	['col', [['leaf', 1000], ['leaf', 1001]]]
 * 	" The second tab page, with three horizontally split
 * 	" windows, with two vertically split windows in the
 * 	" middle window
 * 	:echo winlayout(2)
 * 	['col', [['leaf', 1002], ['row', [['leaf', 1003],
 * 			    ['leaf', 1001]]], ['leaf', 1000]]]
 * Can also be used as a |method|:
 * 	GetTabnr()->winlayout()
 */
export function winlayout(denops: Denops, tabnr?: unknown): Promise<unknown>;
export function winlayout(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("winlayout", ...args);
}

/**
 * The result is a Number, which is the number of the current
 * window.  The top window has number 1.
 * Returns zero for a popup window.
 * The optional argument {arg} supports the following values:
 * 	$	the number of the last window (the window
 * 		count).
 * 	#	the number of the last accessed window (where
 * 		|CTRL-W_p| goes to).  If there is no previous
 * 		window or it is in another tab page 0 is
 * 		returned.
 * 	{N}j	the number of the Nth window below the
 * 		current window (where |CTRL-W_j| goes to).
 * 	{N}k	the number of the Nth window above the current
 * 		window (where |CTRL-W_k| goes to).
 * 	{N}h	the number of the Nth window left of the
 * 		current window (where |CTRL-W_h| goes to).
 * 	{N}l	the number of the Nth window right of the
 * 		current window (where |CTRL-W_l| goes to).
 * The number can be used with |CTRL-W_w| and ":wincmd w"
 * |:wincmd|.
 * Also see |tabpagewinnr()| and |win_getid()|.
 * Examples:
 * 	let window_count = winnr('$')
 * 	let prev_window = winnr('#')
 * 	let wnum = winnr('3k')
 * Can also be used as a |method|:
 * 	GetWinval()->winnr()
 */
export function winnr(denops: Denops, arg?: unknown): Promise<unknown>;
export function winnr(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("winnr", ...args);
}

/**
 * Returns a sequence of |:resize| commands that should restore
 * the current window sizes.  Only works properly when no windows
 * are opened or closed and the current window and tab page is
 * unchanged.
 * Example:
 * 	:let cmd = winrestcmd()
 * 	:call MessWithWindowSizes()
 * 	:exe cmd
 */
export function winrestcmd(denops: Denops): Promise<unknown>;
export function winrestcmd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("winrestcmd", ...args);
}

/**
 * Uses the |Dictionary| returned by |winsaveview()| to restore
 * the view of the current window.
 * Note: The {dict} does not have to contain all values, that are
 * returned by |winsaveview()|. If values are missing, those
 * settings won't be restored. So you can use:
 *     :call winrestview({'curswant': 4})
 * This will only set the curswant value (the column the cursor
 * wants to move on vertical movements) of the cursor to column 5
 * (yes, that is 5), while all other settings will remain the
 * same. This is useful, if you set the cursor position manually.
 * If you have changed the values the result is unpredictable.
 * If the window size changed the result won't be the same.
 * Can also be used as a |method|:
 * 	GetView()->winrestview()
 */
export function winrestview(denops: Denops, dict: unknown): Promise<unknown>;
export function winrestview(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("winrestview", ...args);
}

/**
 * Returns a |Dictionary| that contains information to restore
 * the view of the current window.  Use |winrestview()| to
 * restore the view.
 * This is useful if you have a mapping that jumps around in the
 * buffer and you want to go back to the original view.
 * This does not save fold information.  Use the 'foldenable'
 * option to temporarily switch off folding, so that folds are
 * not opened when moving around. This may have side effects.
 * The return value includes:
 * 	lnum		cursor line number
 * 	col		cursor column (Note: the first column
 * 			zero, as opposed to what getpos()
 * 			returns)
 * 	coladd		cursor column offset for 'virtualedit'
 * 	curswant	column for vertical movement
 * 	topline		first line in the window
 * 	topfill		filler lines, only in diff mode
 * 	leftcol		first column displayed; only used when
 * 			'wrap' is off
 * 	skipcol		columns skipped
 * Note that no option values are saved.
 */
export function winsaveview(denops: Denops): Promise<unknown>;
export function winsaveview(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("winsaveview", ...args);
}

/**
 * The result is a Number, which is the width of window {nr}.
 * {nr} can be the window number or the |window-ID|.
 * When {nr} is zero, the width of the current window is
 * returned.  When window {nr} doesn't exist, -1 is returned.
 * An existing window always has a width of zero or more.
 * Examples:
 *   :echo "The current window has " . winwidth(0) . " columns."
 *   :if winwidth(0) <= 50
 *   :  50 wincmd |
 *   :endif
 * For getting the terminal or screen size, see the 'columns'
 * option.
 * Can also be used as a |method|:
 * 	GetWinid()->winwidth()
 */
export function winwidth(denops: Denops, nr: unknown): Promise<unknown>;
export function winwidth(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("winwidth", ...args);
}

/**
 * The result is a dictionary of byte/chars/word statistics for
 * the current buffer.  This is the same info as provided by
 * |g_CTRL-G|
 * The return value includes:
 * 	bytes		Number of bytes in the buffer
 * 	chars		Number of chars in the buffer
 * 	words		Number of words in the buffer
 * 	cursor_bytes    Number of bytes before cursor position
 * 			(not in Visual mode)
 * 	cursor_chars    Number of chars before cursor position
 * 			(not in Visual mode)
 * 	cursor_words    Number of words before cursor position
 * 			(not in Visual mode)
 * 	visual_bytes    Number of bytes visually selected
 * 			(only in Visual mode)
 * 	visual_chars    Number of chars visually selected
 * 			(only in Visual mode)
 * 	visual_words    Number of words visually selected
 * 			(only in Visual mode)
 */
export function wordcount(denops: Denops): Promise<unknown>;
export function wordcount(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("wordcount", ...args);
}

/**
 * When {object} is a |List| write it to file {fname}.  Each list
 * item is separated with a NL.  Each list item must be a String
 * or Number.
 * When {flags} contains "b" then binary mode is used: There will
 * not be a NL after the last list item.  An empty item at the
 * end does cause the last line in the file to end in a NL.
 * When {object} is a |Blob| write the bytes to file {fname}
 * unmodified.
 * When {flags} contains "a" then append mode is used, lines are
 * appended to the file:
 * 	:call writefile(["foo"], "event.log", "a")
 * 	:call writefile(["bar"], "event.log", "a")
 * When {flags} contains "s" then fsync() is called after writing
 * the file.  This flushes the file to disk, if possible.  This
 * takes more time but avoids losing the file if the system
 * crashes.
 * When {flags} does not contain "S" or "s" then fsync() is
 * called if the 'fsync' option is set.
 * When {flags} contains "S" then fsync() is not called, even
 * when 'fsync' is set.
 * All NL characters are replaced with a NUL character.
 * Inserting CR characters needs to be done before passing {list}
 * to writefile().
 * An existing file is overwritten, if possible.
 * When the write fails -1 is returned, otherwise 0.  There is an
 * error message if the file can't be created or when writing
 * fails.
 * Also see |readfile()|.
 * To copy a file byte for byte:
 * 	:let fl = readfile("foo", "b")
 * 	:call writefile(fl, "foocopy", "b")
 * Can also be used as a |method|:
 * 	GetText()->writefile("thefile")
 */
export function writefile(
  denops: Denops,
  object: unknown,
  fname: unknown,
  flags?: unknown,
): Promise<unknown>;
export function writefile(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("writefile", ...args);
}

/**
 * Bitwise XOR on the two arguments.  The arguments are converted
 * to a number.  A List, Dict or Float argument causes an error.
 * Example:
 * 	:let bits = xor(bits, 0x80)
 * Can also be used as a |method|:
 * 	:let bits = bits->xor(0x80)
 */
export function xor(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function xor(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("xor", ...args);
}
