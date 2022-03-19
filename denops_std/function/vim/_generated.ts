// NOTE: This file is generated. Do NOT modify it manually.
// deno-lint-ignore-file camelcase
import { Denops } from "../../deps.ts";

/**
 * Return the current text in the balloon.  Only for the string,
 * not used for the List.
 */
export function balloon_gettext(denops: Denops): Promise<unknown>;
export function balloon_gettext(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("balloon_gettext", ...args);
}

/**
 * Show {expr} inside the balloon.  For the GUI {expr} is used as
 * a string.  For a terminal {expr} can be a list, which contains
 * the lines of the balloon.  If {expr} is not a list it will be
 * split with |balloon_split()|.
 * If {expr} is an empty string any existing balloon is removed.
 * Example:
 * 	func GetBalloonContent()
 * 	   " ... initiate getting the content
 * 	   return ''
 * 	endfunc
 * 	set balloonexpr=GetBalloonContent()
 * 	func BalloonCallback(result)
 * 	  call balloon_show(a:result)
 * 	endfunc
 * Can also be used as a |method|:
 * 	GetText()->balloon_show()
 * The intended use is that fetching the content of the balloon
 * is initiated from 'balloonexpr'.  It will invoke an
 * asynchronous method, in which a callback invokes
 * balloon_show().  The 'balloonexpr' itself can return an
 * empty string or a placeholder.
 * When showing a balloon is not possible nothing happens, no
 * error message.
 * {only available when compiled with the |+balloon_eval| or
 * |+balloon_eval_term| feature}
 */
export function balloon_show(denops: Denops, expr: unknown): Promise<unknown>;
export function balloon_show(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("balloon_show", ...args);
}

/**
 * Split {msg} into lines to be displayed in a balloon.  The
 * splits are made for the current window size and optimize to
 * show debugger output.
 * Returns a |List| with the split lines.
 * Can also be used as a |method|:
 * 	GetText()->balloon_split()->balloon_show()
 * {only available when compiled with the |+balloon_eval_term|
 * feature}
 */
export function balloon_split(denops: Denops, msg: unknown): Promise<unknown>;
export function balloon_split(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("balloon_split", ...args);
}

/** */
export function buffer_exists(denops: Denops): Promise<unknown>;
export function buffer_exists(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("buffer_exists", ...args);
}

/**
 * Obsolete name: buffer_name().
 */
export function buffer_name(denops: Denops): Promise<unknown>;
export function buffer_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("buffer_name", ...args);
}

/**
 * Obsolete name for bufnr("$"): last_buffer_nr().
 */
export function buffer_number(denops: Denops): Promise<unknown>;
export function buffer_number(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("buffer_number", ...args);
}

/** */
export function last_buffer_nr(denops: Denops): Promise<unknown>;
export function last_buffer_nr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("last_buffer_nr", ...args);
}

/**
 * Return the character class of the first character in {string}.
 * The character class is one of:
 * 	0	blank
 * 	1	punctuation
 * 	2	word character
 * 	3	emoji
 * 	other	specific Unicode class
 * The class is used in patterns and word motions.
 */
export function charclass(denops: Denops, string: unknown): Promise<unknown>;
export function charclass(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("charclass", ...args);
}

/**
 * Same as |col()| but returns the character index of the column
 * position given with {expr} instead of the byte position.
 * Example:
 * With the cursor on '세' in line 5 with text "여보세요":
 * 	charcol('.')		returns 3
 * 	col('.')		returns 7
 * Can also be used as a |method|:
 * 	GetPos()->col()
 */
export function charcol(denops: Denops, expr: unknown): Promise<unknown>;
export function charcol(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("charcol", ...args);
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
 * Output {expr} as-is, including unprintable characters.  This
 * can be used to output a terminal code. For example, to disable
 * modifyOtherKeys:
 * 	call echoraw(&t_TE)
 * and to enable it again:
 * 	call echoraw(&t_TI)
 * Use with care, you can mess up the terminal this way.
 */
export function echoraw(denops: Denops, expr: unknown): Promise<unknown>;
export function echoraw(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("echoraw", ...args);
}

/**
 * Like |extend()| but instead of adding items to {expr1} a new
 * List or Dictionary is created and returned.  {expr1} remains
 * unchanged.  Items can still be changed by {expr2}, if you
 * don't want that use |deepcopy()| first.
 */
export function extendnew(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
  expr3?: unknown,
): Promise<unknown>;
export function extendnew(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("extendnew", ...args);
}

/**
 * Obsolete name: file_readable().
 */
export function file_readable(denops: Denops): Promise<unknown>;
export function file_readable(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("file_readable", ...args);
}

/**
 * Like |flatten()| but first make a copy of {list}.
 */
export function flattennew(
  denops: Denops,
  list: unknown,
  maxdepth?: unknown,
): Promise<unknown>;
export function flattennew(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("flattennew", ...args);
}

/**
 * Get the full command name from a short abbreviated command
 * name; see |20.2| for details on command abbreviations.
 * {name} may start with a `:` and can include a [range], these
 * are skipped and not returned.
 * Returns an empty string if a command doesn't exist or if it's
 * ambiguous (for user-defined functions).
 * For example `fullcommand('s')`, `fullcommand('sub')`,
 * `fullcommand(':%substitute')` all return "substitute".
 * Can also be used as a |method|:
 * 	GetName()->fullcommand()
 */
export function fullcommand(denops: Denops, name: unknown): Promise<unknown>;
export function fullcommand(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("fullcommand", ...args);
}

/**
 * Get the position for {expr}. Same as |getpos()| but the column
 * number in the returned List is a character index instead of
 * a byte index.
 * If |getpos()| returns a very large column number, such as
 * 2147483647, then getcharpos() will return the character index
 * of the last character.
 * Example:
 * With the cursor on '세' in line 5 with text "여보세요":
 * 	getcharpos('.')		returns [0, 5, 3, 0]
 * 	getpos('.')		returns [0, 5, 7, 0]
 * Can also be used as a |method|:
 * 	GetMark()->getcharpos()
 */
export function getcharpos(denops: Denops, expr: unknown): Promise<unknown>;
export function getcharpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcharpos", ...args);
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
 * Same as |getcurpos()| but the column number in the returned
 * List is a character index instead of a byte index.
 * Example:
 * With the cursor on '보' in line 3 with text "여보세요":
 * 	getcursorcharpos()	returns [0, 3, 2, 0, 3]
 * 	getcurpos()		returns [0, 3, 4, 0, 3]
 * Can also be used as a |method|:
 * 	GetWinid()->getcursorcharpos()
 */
export function getcursorcharpos(
  denops: Denops,
  winid?: unknown,
): Promise<unknown>;
export function getcursorcharpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getcursorcharpos", ...args);
}

/**
 * The result is a Number, which is |TRUE| when the IME status is
 * active.
 * See 'imstatusfunc'.
 */
export function getimstatus(denops: Denops): Promise<unknown>;
export function getimstatus(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getimstatus", ...args);
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
 * length of the text in bytes.
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
 * Returns detailed information about register {regname} as a
 * Dictionary with the following entries:
 * 	regcontents	List of lines contained in register
 * 			{regname}, like
 * 			|getreg|({regname}, 1, 1).
 * 	regtype		the type of register {regname}, as in
 * 			|getregtype()|.
 * 	isunnamed	Boolean flag, v:true if this register
 * 			is currently pointed to by the unnamed
 * 			register.
 * 	points_to	for the unnamed register, gives the
 * 			single letter name of the register
 * 			currently pointed to (see |quotequote|).
 * 			For example, after deleting a line
 * 			with `dd`, this field will be "1",
 * 			which is the register that got the
 * 			deleted text.
 * If {regname} is invalid or not set, an empty Dictionary
 * will be returned.
 * If {regname} is not specified, |v:register| is used.
 * The returned Dictionary can be passed to |setreg()|.
 * In |Vim9-script| {regname} must be one character.
 * Can also be used as a |method|:
 * 	GetRegname()->getreginfo()
 */
export function getreginfo(denops: Denops, regname?: unknown): Promise<unknown>;
export function getreginfo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getreginfo", ...args);
}

/**
 * Translate {text} if possible.
 * This is mainly for use in the distributed Vim scripts.  When
 * generating message translations the {text} is extracted by
 * xgettext, the translator can add the translated message in the
 * .po file and Vim will lookup the translation when gettext() is
 * called.
 * For {text} double quoted strings are preferred, because
 * xgettext does not understand escaping in single quoted
 * strings.
 */
export function gettext(denops: Denops, text: unknown): Promise<unknown>;
export function gettext(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("gettext", ...args);
}

/**
 * Can also be used as a |method|:
 * 	GetName()->hlexists()
 */
export function highlight_exists(denops: Denops): Promise<unknown>;
export function highlight_exists(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("highlight_exists", ...args);
}

/**
 * Obsolete name: highlightID().
 * Can also be used as a |method|:
 * 	GetName()->hlID()
 */
export function highlightID(denops: Denops): Promise<unknown>;
export function highlightID(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("highlightID", ...args);
}

/**
 * Like |input()|, but when the GUI is running and text dialogs
 * are supported, a dialog window pops up to input the text.
 * Example:
 *    :let n = inputdialog("value for shiftwidth", shiftwidth())
 *    :if n != ""
 *    :  let &sw = n
 *    :endif
 * When the dialog is cancelled {cancelreturn} is returned.  When
 * omitted an empty string is returned.
 * Hitting <Enter> works like pressing the OK button.  Hitting
 * <Esc> works like pressing the Cancel button.
 * NOTE: Command-line completion is not supported.
 * Can also be used as a |method|:
 * 	GetPrompt()->inputdialog()
 */
export function inputdialog(
  denops: Denops,
  prompt: unknown,
  text?: unknown,
  cancelreturn?: unknown,
): Promise<unknown>;
export function inputdialog(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("inputdialog", ...args);
}

/**
 * This is similar to |json_decode()| with these differences:
 * - Object key names do not have to be in quotes.
 * - Strings can be in single quotes.
 * - Empty items in an array (between two commas) are allowed and
 *   result in v:none items.
 * Can also be used as a |method|:
 * 	ReadObject()->js_decode()
 */
export function js_decode(denops: Denops, string: unknown): Promise<unknown>;
export function js_decode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("js_decode", ...args);
}

/**
 * This is similar to |json_encode()| with these differences:
 * - Object key names are not in quotes.
 * - v:none items in an array result in an empty item between
 *   commas.
 * For example, the Vim object:
 * 	[1,v:none,{"one":1},v:none] ~
 * Will be encoded as:
 * 	[1,,{one:1},,] ~
 * While json_encode() would produce:
 * 	[1,null,{"one":1},null] ~
 * This encoding is valid for JavaScript. It is more efficient
 * than JSON, especially when using an array with optional items.
 * Can also be used as a |method|:
 * 	GetObject()->js_encode()
 */
export function js_encode(denops: Denops, expr: unknown): Promise<unknown>;
export function js_encode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("js_encode", ...args);
}

/**
 * Add a callback function that will be invoked when changes have
 * been made to buffer {buf}.
 * {buf} refers to a buffer name or number. For the accepted
 * values, see |bufname()|.  When {buf} is omitted the current
 * buffer is used.
 * Returns a unique ID that can be passed to |listener_remove()|.
 * The {callback} is invoked with five arguments:
 *     a:bufnr	the buffer that was changed
 *     a:start	first changed line number
 *     a:end	first line number below the change
 *     a:added	number of lines added, negative if lines were
 * 		deleted
 *     a:changes	a List of items with details about the changes
 * Example:
 * 	    func Listener(bufnr, start, end, added, changes)
 * 	      echo 'lines ' .. a:start .. ' until ' .. a:end .. ' changed'
 * 	    endfunc
 * 	    call listener_add('Listener', bufnr)
 * The List cannot be changed.  Each item in a:changes is a
 * dictionary with these entries:
 *     lnum	the first line number of the change
 *     end		the first line below the change
 *     added	number of lines added; negative if lines were
 * 		deleted
 *     col		first column in "lnum" that was affected by
 * 		the change; one if unknown or the whole line
 * 		was affected; this is a byte index, first
 * 		character has a value of one.
 * When lines are inserted the values are:
 *     lnum	line above which the new line is added
 *     end		equal to "lnum"
 *     added	number of lines inserted
 *     col		1
 * When lines are deleted the values are:
 *     lnum	the first deleted line
 *     end		the line below the first deleted line, before
 * 		the deletion was done
 *     added	negative, number of lines deleted
 *     col		1
 * When lines are changed:
 *     lnum	the first changed line
 *     end		the line below the last changed line
 *     added	0
 *     col		first column with a change or 1
 * The entries are in the order the changes were made, thus the
 * most recent change is at the end.  The line numbers are valid
 * when the callback is invoked, but later changes may make them
 * invalid, thus keeping a copy for later might not work.
 * The {callback} is invoked just before the screen is updated,
 * when |listener_flush()| is called or when a change is being
 * made that changes the line count in a way it causes a line
 * number in the list of changes to become invalid.
 * The {callback} is invoked with the text locked, see
 * |textlock|.  If you do need to make changes to the buffer, use
 * a timer to do this later |timer_start()|.
 * The {callback} is not invoked when the buffer is first loaded.
 * Use the |BufReadPost| autocmd event to handle the initial text
 * of a buffer.
 * The {callback} is also not invoked when the buffer is
 * unloaded, use the |BufUnload| autocmd event for that.
 * Can also be used as a |method|, the base is passed as the
 * second argument:
 * 	GetBuffer()->listener_add(callback)
 */
export function listener_add(
  denops: Denops,
  callback: unknown,
  buf?: unknown,
): Promise<unknown>;
export function listener_add(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_add", ...args);
}

/**
 * Invoke listener callbacks for buffer {buf}.  If there are no
 * pending changes then no callbacks are invoked.
 * {buf} refers to a buffer name or number. For the accepted
 * values, see |bufname()|.  When {buf} is omitted the current
 * buffer is used.
 * Can also be used as a |method|:
 * 	GetBuffer()->listener_flush()
 */
export function listener_flush(denops: Denops, buf?: unknown): Promise<unknown>;
export function listener_flush(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_flush", ...args);
}

/**
 * Remove a listener previously added with listener_add().
 * Returns FALSE when {id} could not be found, TRUE when {id} was
 * removed.
 * Can also be used as a |method|:
 * 	GetListenerId()->listener_remove()
 */
export function listener_remove(denops: Denops, id: unknown): Promise<unknown>;
export function listener_remove(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_remove", ...args);
}

/**
 * Evaluate Lua expression {expr} and return its result converted
 * to Vim data structures. Second {expr} may hold additional
 * argument accessible as _A inside first {expr}.
 * Strings are returned as they are.
 * Boolean objects are converted to numbers.
 * Numbers are converted to |Float| values if vim was compiled
 * with |+float| and to numbers otherwise.
 * Dictionaries and lists obtained by vim.eval() are returned
 * as-is.
 * Other objects are returned as zero without any errors.
 * See |lua-luaeval| for more details.
 * Can also be used as a |method|:
 * 	GetExpr()->luaeval()
 * {only available when compiled with the |+lua| feature}
 */
export function luaeval(
  denops: Denops,
  expr1: unknown,
  expr2?: unknown,
): Promise<unknown>;
export function luaeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("luaeval", ...args);
}

/**
 * Like |map()| but instead of replacing items in {expr1} a new
 * List or Dictionary is created and returned.  {expr1} remains
 * unchanged.  Items can still be changed by {expr2}, if you
 * don't want that use |deepcopy()| first.
 */
export function mapnew(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown>;
export function mapnew(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mapnew", ...args);
}

/**
 * Restore a mapping from a dictionary returned by |maparg()|.
 * {mode} and {abbr} should be the same as for the call to
 * |maparg()|.
 * {mode} is used to define the mode in which the mapping is set,
 * not the "mode" entry in {dict}.
 * Example for saving and restoring a mapping:
 * 	let save_map = maparg('K', 'n', 0, 1)
 * 	nnoremap K somethingelse
 * 	...
 * 	call mapset('n', 0, save_map)
 * Note that if you are going to replace a map in several modes,
 * e.g. with `:map!`, you need to save the mapping for all of
 * them, since they can differ.
 */
export function mapset(
  denops: Denops,
  mode: unknown,
  abbr: unknown,
  dict: unknown,
): Promise<unknown>;
export function mapset(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mapset", ...args);
}

/**
 * If {list} is a list of strings, then returns a |List| with all
 * the strings in {list} that fuzzy match {str}. The strings in
 * the returned list are sorted based on the matching score.
 * The optional {dict} argument always supports the following
 * items:
 *     matchseq	When this item is present and {str} contains
 * 		multiple words separated by white space, then
 * 		returns only matches that contain the words in
 * 		the given sequence.
 * If {list} is a list of dictionaries, then the optional {dict}
 * argument supports the following additional items:
 *     key		key of the item which is fuzzy matched against
 * 		{str}. The value of this item should be a
 * 		string.
 *     text_cb	|Funcref| that will be called for every item
 * 		in {list} to get the text for fuzzy matching.
 * 		This should accept a dictionary item as the
 * 		argument and return the text for that item to
 * 		use for fuzzy matching.
 * {str} is treated as a literal string and regular expression
 * matching is NOT supported.  The maximum supported {str} length
 * is 256.
 * When {str} has multiple words each separated by white space,
 * then the list of strings that have all the words is returned.
 * If there are no matching strings or there is an error, then an
 * empty list is returned. If length of {str} is greater than
 * 256, then returns an empty list.
 * Refer to |fuzzy-match| for more information about fuzzy
 * matching strings.
 * Example:
 *    :echo matchfuzzy(["clay", "crow"], "cay")
 * results in ["clay"].
 *    :echo getbufinfo()->map({_, v -> v.name})->matchfuzzy("ndl")
 * results in a list of buffer names fuzzy matching "ndl".
 *    :echo getbufinfo()->matchfuzzy("ndl", {'key' : 'name'})
 * results in a list of buffer information dicts with buffer
 * names fuzzy matching "ndl".
 *    :echo getbufinfo()->matchfuzzy("spl",
 * 				\ {'text_cb' : {v -> v.name}})
 * results in a list of buffer information dicts with buffer
 * names fuzzy matching "spl".
 *    :echo v:oldfiles->matchfuzzy("test")
 * results in a list of file names fuzzy matching "test".
 *    :let l = readfile("buffer.c")->matchfuzzy("str")
 * results in a list of lines in "buffer.c" fuzzy matching "str".
 *    :echo ['one two', 'two one']->matchfuzzy('two one')
 * results in ['two one', 'one two'].
 *    :echo ['one two', 'two one']->matchfuzzy('two one',
 * 				\ {'matchseq': 1})
 * results in ['two one'].
 */
export function matchfuzzy(
  denops: Denops,
  list: unknown,
  str: unknown,
  dict?: unknown,
): Promise<unknown>;
export function matchfuzzy(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("matchfuzzy", ...args);
}

/**
 * Same as |matchfuzzy()|, but returns the list of matched
 * strings, the list of character positions where characters
 * in {str} matches and a list of matching scores.  You can
 * use |byteidx()| to convert a character position to a byte
 * position.
 * If {str} matches multiple times in a string, then only the
 * positions for the best match is returned.
 * If there are no matching strings or there is an error, then a
 * list with three empty list items is returned.
 * Example:
 * 	:echo matchfuzzypos(['testing'], 'tsg')
 * results in [['testing'], [[0, 2, 6]], [99]]
 * 	:echo matchfuzzypos(['clay', 'lacy'], 'la')
 * results in [['lacy', 'clay'], [[0, 1], [1, 2]], [153, 133]]
 * 	:echo [{'text': 'hello', 'id' : 10}]->matchfuzzypos('ll', {'key' : 'text'})
 * results in [[{'id': 10, 'text': 'hello'}], [[2, 3]], [127]]
 */
export function matchfuzzypos(
  denops: Denops,
  list: unknown,
  str: unknown,
  dict?: unknown,
): Promise<unknown>;
export function matchfuzzypos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("matchfuzzypos", ...args);
}

/**
 * Return information about the specified menu {name} in
 * mode {mode}. The menu name should be specified without the
 * shortcut character ('&').
 * {mode} can be one of these strings:
 * 	"n"	Normal
 * 	"v"	Visual (including Select)
 * 	"o"	Operator-pending
 * 	"i"	Insert
 * 	"c"	Cmd-line
 * 	"s"	Select
 * 	"x"	Visual
 * 	"t"	Terminal-Job
 * 	""	Normal, Visual and Operator-pending
 * 	"!"	Insert and Cmd-line
 * When {mode} is omitted, the modes for "" are used.
 * Returns a |Dictionary| containing the following items:
 *   accel		menu item accelerator text |menu-text|
 *   display	display name (name without '&')
 *   enabled	v:true if this menu item is enabled
 * 		Refer to |:menu-enable|
 *   icon		name of the icon file (for toolbar)
 * 		|toolbar-icon|
 *   iconidx	index of a built-in icon
 *   modes		modes for which the menu is defined. In
 * 		addition to the modes mentioned above, these
 * 		characters will be used:
 * 		" "	Normal, Visual and Operator-pending
 *   name		menu item name.
 *   noremenu	v:true if the {rhs} of the menu item is not
 * 		remappable else v:false.
 *   priority	menu order priority |menu-priority|
 *   rhs		right-hand-side of the menu item. The returned
 * 		string has special characters translated like
 * 		in the output of the ":menu" command listing.
 * 		When the {rhs} of a menu item is empty, then
 * 		"<Nop>" is returned.
 *   script	v:true if script-local remapping of {rhs} is
 * 		allowed else v:false.  See |:menu-script|.
 *   shortcut	shortcut key (character after '&' in
 * 		the menu name) |menu-shortcut|
 *   silent	v:true if the menu item is created
 * 		with <silent> argument |:menu-silent|
 *   submenus	|List| containing the names of
 * 		all the submenus.  Present only if the menu
 * 		item has submenus.
 * Returns an empty dictionary if the menu item is not found.
 * Examples:
 * 	:echo menu_info('Edit.Cut')
 * 	:echo menu_info('File.Save', 'n')
 * Can also be used as a |method|:
 * 	GetMenuName()->menu_info('v')
 */
export function menu_info(
  denops: Denops,
  name: unknown,
  mode?: unknown,
): Promise<unknown>;
export function menu_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("menu_info", ...args);
}

/**
 * Evaluate MzScheme expression {expr} and return its result
 * converted to Vim data structures.
 * Numbers and strings are returned as they are.
 * Pairs (including lists and improper lists) and vectors are
 * returned as Vim |Lists|.
 * Hash tables are represented as Vim |Dictionary| type with keys
 * converted to strings.
 * All other types are converted to string with display function.
 * Examples:
 *     :mz (define l (list 1 2 3))
 *     :mz (define h (make-hash)) (hash-set! h "list" l)
 *     :echo mzeval("l")
 *     :echo mzeval("h")
 * Can also be used as a |method|:
 * 	GetExpr()->mzeval()
 * {only available when compiled with the |+mzscheme| feature}
 */
export function mzeval(denops: Denops, expr: unknown): Promise<unknown>;
export function mzeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mzeval", ...args);
}

/**
 * Return a pseudo-random Number generated with an xoshiro128**
 * algorithm using seed {expr}.  The returned number is 32 bits,
 * also on 64 bits systems, for consistency.
 * {expr} can be initialized by |srand()| and will be updated by
 * rand().  If {expr} is omitted, an internal seed value is used
 * and updated.
 * Examples:
 * 	:echo rand()
 * 	:let seed = srand()
 * 	:echo rand(seed)
 * 	:echo rand(seed) % 16  " random number 0 - 15
 */
export function rand(denops: Denops, expr?: unknown): Promise<unknown>;
export function rand(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("rand", ...args);
}

/**
 * Read file {fname} in binary mode and return a |Blob|.
 * When the file can't be opened an error message is given and
 * the result is an empty |Blob|.
 * Also see |readfile()| and |writefile()|.
 */
export function readblob(denops: Denops, fname: unknown): Promise<unknown>;
export function readblob(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("readblob", ...args);
}

/**
 * Extended version of |readdir()|.
 * Return a list of Dictionaries with file and directory
 * information in {directory}.
 * This is useful if you want to get the attributes of file and
 * directory at the same time as getting a list of a directory.
 * This is much faster than calling |readdir()| then calling
 * |getfperm()|, |getfsize()|, |getftime()| and |getftype()| for
 * each file and directory especially on MS-Windows.
 * The list will by default be sorted by name (case sensitive),
 * the sorting can be changed by using the optional {dict}
 * argument, see |readdir()|.
 * The Dictionary for file and directory information has the
 * following items:
 * 	group	Group name of the entry. (Only on Unix)
 * 	name	Name of the entry.
 * 	perm	Permissions of the entry. See |getfperm()|.
 * 	size	Size of the entry. See |getfsize()|.
 * 	time	Timestamp of the entry. See |getftime()|.
 * 	type	Type of the entry.
 * 		On Unix, almost same as |getftype()| except:
 * 		    Symlink to a dir	"linkd"
 * 		    Other symlink	"link"
 * 		On MS-Windows:
 * 		    Normal file		"file"
 * 		    Directory		"dir"
 * 		    Junction		"junction"
 * 		    Symlink to a dir	"linkd"
 * 		    Other symlink	"link"
 * 		    Other reparse point	"reparse"
 * 	user	User name of the entry's owner. (Only on Unix)
 * On Unix, if the entry is a symlink, the Dictionary includes
 * the information of the target (except the "type" item).
 * On MS-Windows, it includes the information of the symlink
 * itself because of performance reasons.
 * When {expr} is omitted all entries are included.
 * When {expr} is given, it is evaluated to check what to do:
 * 	If {expr} results in -1 then no further entries will
 * 	be handled.
 * 	If {expr} results in 0 then this entry will not be
 * 	added to the list.
 * 	If {expr} results in 1 then this entry will be added
 * 	to the list.
 * The entries "." and ".." are always excluded.
 * Each time {expr} is evaluated |v:val| is set to a |Dictionary|
 * of the entry.
 * When {expr} is a function the entry is passed as the argument.
 * For example, to get a list of files ending in ".txt":
 *   readdirex(dirname, {e -> e.name =~ '.txt$'})
 * For example, to get a list of all files in the current
 * directory without sorting the individual entries:
 *   readdirex(dirname, '1', #{sort: 'none'})
 * Can also be used as a |method|:
 * 	GetDirName()->readdirex()
 */
export function readdirex(
  denops: Denops,
  directory: unknown,
  expr?: unknown,
  dict?: unknown,
): Promise<unknown>;
export function readdirex(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("readdirex", ...args);
}

/**
 * {func} is called for every item in {object}, which can be a
 * |List| or a |Blob|.  {func} is called with two arguments: the
 * result so far and current item.  After processing all items
 * the result is returned.
 * {initial} is the initial result.  When omitted, the first item
 * in {object} is used and {func} is first called for the second
 * item.  If {initial} is not given and {object} is empty no
 * result can be computed, an E998 error is given.
 * Examples:
 * 	echo reduce([1, 3, 5], { acc, val -> acc + val })
 * 	echo reduce(['x', 'y'], { acc, val -> acc .. val }, 'a')
 * 	echo reduce(0z1122, { acc, val -> 2 * acc + val })
 * Can also be used as a |method|:
 * 	echo mylist->reduce({ acc, val -> acc + val }, 0)
 */
export function reduce(
  denops: Denops,
  object: unknown,
  func: unknown,
  initial?: unknown,
): Promise<unknown>;
export function reduce(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("reduce", ...args);
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
 * Specify overrides for cell widths of character ranges.  This
 * tells Vim how wide characters are, counted in screen cells.
 * This overrides 'ambiwidth'.  Example:
 *    setcellwidths([[0xad, 0xad, 1],
 *    		\ [0x2194, 0x2199, 2]])
 * The {list} argument is a list of lists with each three
 * numbers. These three numbers are [low, high, width].  "low"
 * and "high" can be the same, in which case this refers to one
 * character. Otherwise it is the range of characters from "low"
 * to "high" (inclusive).  "width" is either 1 or 2, indicating
 * the character width in screen cells.
 * An error is given if the argument is invalid, also when a
 * range overlaps with another.
 * Only characters with value 0x100 and higher can be used.
 * To clear the overrides pass an empty list:
 *    setcellwidths([]);
 * You can use the script $VIMRUNTIME/tools/emoji_list.vim to see
 * the effect for known emoji characters.
 */
export function setcellwidths(denops: Denops, list: unknown): Promise<unknown>;
export function setcellwidths(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setcellwidths", ...args);
}

/**
 * Same as |setpos()| but uses the specified column number as the
 * character index instead of the byte index in the line.
 * Example:
 * With the text "여보세요" in line 8:
 * 	call setcharpos('.', [0, 8, 4, 0])
 * positions the cursor on the fourth character '요'.
 * 	call setpos('.', [0, 8, 4, 0])
 * positions the cursor on the second character '보'.
 * Can also be used as a |method|:
 * 	GetPosition()->setcharpos('.')
 */
export function setcharpos(
  denops: Denops,
  expr: unknown,
  list: unknown,
): Promise<unknown>;
export function setcharpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setcharpos", ...args);
}

/**
 * Same as |cursor()| but uses the specified column number as the
 * character index instead of the byte index in the line.
 * Example:
 * With the text "여보세요" in line 4:
 * 	call setcursorcharpos(4, 3)
 * positions the cursor on the third character '세'.
 * 	call cursor(4, 3)
 * positions the cursor on the first character '여'.
 * Can also be used as a |method|:
 * 	GetCursorPos()->setcursorcharpos()
 */
export function setcursorcharpos(
  denops: Denops,
  lnum: unknown,
  col: unknown,
  off?: unknown,
): Promise<unknown>;
export function setcursorcharpos(
  denops: Denops,
  list: unknown,
): Promise<unknown>;
export function setcursorcharpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("setcursorcharpos", ...args);
}

/**
 * Similar to using a |slice| "expr[start : end]", but "end" is
 * used exclusive.  And for a string the indexes are used as
 * character indexes instead of byte indexes, like in
 * |vim9script|.  Also, composing characters are not counted.
 * When {end} is omitted the slice continues to the last item.
 * When {end} is -1 the last item is omitted.
 * Can also be used as a |method|:
 * 	GetList()->slice(offset)
 */
export function slice(
  denops: Denops,
  expr: unknown,
  start: unknown,
  end?: unknown,
): Promise<unknown>;
export function slice(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("slice", ...args);
}

/**
 * Stop playing all sounds.
 * {only available when compiled with the |+sound| feature}
 */
export function sound_clear(denops: Denops): Promise<unknown>;
export function sound_clear(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_clear", ...args);
}

/**
 * Play a sound identified by {name}.  Which event names are
 * supported depends on the system.  Often the XDG sound names
 * are used.  On Ubuntu they may be found in
 * /usr/share/sounds/freedesktop/stereo.  Example:
 * 	call sound_playevent('bell')
 * On MS-Windows, {name} can be SystemAsterisk, SystemDefault,
 * SystemExclamation, SystemExit, SystemHand, SystemQuestion,
 * SystemStart, SystemWelcome, etc.
 * When {callback} is specified it is invoked when the sound is
 * finished.  The first argument is the sound ID, the second
 * argument is the status:
 * 	0	sound was played to the end
 * 	1	sound was interrupted
 * 	2	error occurred after sound started
 * Example:
 *    func Callback(id, status)
 *      echomsg "sound " .. a:id .. " finished with " .. a:status
 *    endfunc
 *    call sound_playevent('bell', 'Callback')
 * MS-Windows: {callback} doesn't work for this function.
 * Returns the sound ID, which can be passed to `sound_stop()`.
 * Returns zero if the sound could not be played.
 * Can also be used as a |method|:
 * 	GetSoundName()->sound_playevent()
 * {only available when compiled with the |+sound| feature}
 */
export function sound_playevent(
  denops: Denops,
  name: unknown,
  callback?: unknown,
): Promise<unknown>;
export function sound_playevent(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_playevent", ...args);
}

/**
 * Like `sound_playevent()` but play sound file {path}.  {path}
 * must be a full path.  On Ubuntu you may find files to play
 * with this command:
 *     :!find /usr/share/sounds -type f | grep -v index.theme
 * Can also be used as a |method|:
 * 	GetSoundPath()->sound_playfile()
 * {only available when compiled with the |+sound| feature}
 */
export function sound_playfile(
  denops: Denops,
  path: unknown,
  callback?: unknown,
): Promise<unknown>;
export function sound_playfile(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_playfile", ...args);
}

/**
 * Stop playing sound {id}.  {id} must be previously returned by
 * `sound_playevent()` or `sound_playfile()`.
 * On MS-Windows, this does not work for event sound started by
 * `sound_playevent()`. To stop event sounds, use `sound_clear()`.
 * Can also be used as a |method|:
 * 	soundid->sound_stop()
 * {only available when compiled with the |+sound| feature}
 */
export function sound_stop(denops: Denops, id: unknown): Promise<unknown>;
export function sound_stop(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_stop", ...args);
}

/**
 * Initialize seed used by |rand()|:
 * - If {expr} is not given, seed values are initialized by
 *   reading from /dev/urandom, if possible, or using time(NULL)
 *   a.k.a. epoch time otherwise; this only has second accuracy.
 * - If {expr} is given it must be a Number.  It is used to
 *   initialize the seed values.  This is useful for testing or
 *   when a predictable sequence is intended.
 * Examples:
 * 	:let seed = srand()
 * 	:let seed = srand(userinput)
 * 	:echo rand(seed)
 */
export function srand(denops: Denops, expr?: unknown): Promise<unknown>;
export function srand(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("srand", ...args);
}

/**
 * Return a string which contains characters indicating the
 * current state.  Mostly useful in callbacks that want to do
 * work that may not always be safe.  Roughly this works like:
 * - callback uses state() to check if work is safe to do.
 *   Yes: then do it right away.
 *   No:  add to work queue and add a |SafeState| and/or
 *        |SafeStateAgain| autocommand (|SafeState| triggers at
 *        toplevel, |SafeStateAgain| triggers after handling
 *        messages and callbacks).
 * - When SafeState or SafeStateAgain is triggered and executes
 *   your autocommand, check with `state()` if the work can be
 *   done now, and if yes remove it from the queue and execute.
 *   Remove the autocommand if the queue is now empty.
 * Also see |mode()|.
 * When {what} is given only characters in this string will be
 * added.  E.g, this checks if the screen has scrolled:
 * 	if state('s') == ''
 * 	   " screen has not scrolled
 * These characters indicate the state, generally indicating that
 * something is busy:
 *     m	halfway a mapping, :normal command, feedkeys() or
 * 	stuffed command
 *     o	operator pending, e.g. after |d|
 *     a	Insert mode autocomplete active
 *     x	executing an autocommand
 *     w	blocked on waiting, e.g. ch_evalexpr(), ch_read() and
 * 	ch_readraw() when reading json
 *     S	not triggering SafeState or SafeStateAgain, e.g. after
 *     	|f| or a count
 *     c	callback invoked, including timer (repeats for
 * 	recursiveness up to "ccc")
 *     s	screen has scrolled for messages
 */
export function state(denops: Denops, what?: unknown): Promise<unknown>;
export function state(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("state", ...args);
}

/**
 * The result is a Number, which is the number of characters
 * in String {expr}.  Composing characters are ignored.
 * |strchars()| can count the number of characters, counting
 * composing characters separately.
 * Also see |strlen()|, |strdisplaywidth()| and |strwidth()|.
 * Can also be used as a |method|:
 * 	GetText()->strcharlen()
 */
export function strcharlen(denops: Denops, expr: unknown): Promise<unknown>;
export function strcharlen(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("strcharlen", ...args);
}

/**
 * Returns a |Dictionary| with properties of the terminal that Vim
 * detected from the response to |t_RV| request.  See
 * |v:termresponse| for the response itself.  If |v:termresponse|
 * is empty most values here will be 'u' for unknown.
 *    cursor_style		whether sending |t_RS| works  **
 *    cursor_blink_mode	whether sending |t_RC| works  **
 *    underline_rgb	whether |t_8u| works **
 *    mouse		mouse type supported
 * ** value 'u' for unknown, 'y' for yes, 'n' for no
 * If the |+termresponse| feature is missing then the result is
 * an empty dictionary.
 * If "cursor_style" is 'y' then |t_RS| will be sent to request the
 * current cursor style.
 * If "cursor_blink_mode" is 'y' then |t_RC| will be sent to
 * request the cursor blink status.
 * "cursor_style" and "cursor_blink_mode" are also set if |t_u7|
 * is not empty, Vim will detect the working of sending |t_RS|
 * and |t_RC| on startup.
 * When "underline_rgb" is not 'y', then |t_8u| will be made empty.
 * This avoids sending it to xterm, which would clear the colors.
 * For "mouse" the value 'u' is unknown
 * Also see:
 * - 'ambiwidth' - detected by using |t_u7|.
 * - |v:termstyleresp| and |v:termblinkresp| for the response to
 *   |t_RS| and |t_RC|.
 */
export function terminalprops(denops: Denops): Promise<unknown>;
export function terminalprops(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("terminalprops", ...args);
}

/**
 * Return a string representation of the type of {expr}.
 * Example:
 * 	echo typename([1, 2, 3])
 * 	list<number>
 */
export function typename(denops: Denops, expr: unknown): Promise<unknown>;
export function typename(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("typename", ...args);
}

/**
 * Attach a text property at position {lnum}, {col}.  {col} is
 * counted in bytes, use one for the first column.
 * If {lnum} is invalid an error is given.
 * If {col} is invalid an error is given.
 * {props} is a dictionary with these fields:
 *    length	length of text in bytes, can only be used
 * 		for a property that does not continue in
 * 		another line; can be zero
 *    end_lnum	line number for the end of text (inclusive)
 *    end_col	column just after the text; not used when
 * 		"length" is present; when {col} and "end_col"
 * 		are equal, and "end_lnum" is omitted or equal
 * 		to {lnum}, this is a zero-width text property
 *    bufnr	buffer to add the property to; when omitted
 * 		the current buffer is used
 *    id		user defined ID for the property; must be a
 * 		number; when omitted zero is used
 *    type		name of the text property type
 * All fields except "type" are optional.
 * It is an error when both "length" and "end_lnum" or "end_col"
 * are given.  Either use "length" or "end_col" for a property
 * within one line, or use "end_lnum" and "end_col" for a
 * property that spans more than one line.
 * When neither "length" nor "end_col" are given the property
 * will be zero-width.  That means it will move with the text, as
 * a kind of mark.  One character will be highlighted, if the
 * type specifies highlighting.
 * The property can end exactly at the last character of the
 * text, or just after it.  In the last case, if text is appended
 * to the line, the text property size will increase, also when
 * the property type does not have "end_incl" set.
 * "type" will first be looked up in the buffer the property is
 * added to. When not found, the global property types are used.
 * If not found an error is given.
 * Can also be used as a |method|:
 * 	GetLnum()->prop_add(col, props)
 */
export function prop_add(
  denops: Denops,
  lnum: unknown,
  col: unknown,
  props: unknown,
): Promise<unknown>;
export function prop_add(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("prop_add", ...args);
}

/**
 * Remove all text properties from line {lnum}.
 * When {lnum-end} is given, remove all text properties from line
 * {lnum} to {lnum-end} (inclusive).
 * When {props} contains a "bufnr" item use this buffer,
 * otherwise use the current buffer.
 * Can also be used as a |method|:
 * 	GetLnum()->prop_clear()
 */
export function prop_clear(
  denops: Denops,
  lnum: unknown,
  lnum_end?: unknown,
  props?: unknown,
): Promise<unknown>;
export function prop_clear(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_clear", ...args);
}

/**
 * Search for a text property as specified with {props}:
 *    id		property with this ID
 *    type		property with this type name
 *    both		"id" and "type" must both match
 *    bufnr	buffer to search in; when present a
 * 		start position with "lnum" and "col"
 * 		must be given; when omitted the
 * 		current buffer is used
 *    lnum		start in this line (when omitted start
 * 		at the cursor)
 *    col		start at this column (when omitted
 * 		and "lnum" is given: use column 1,
 * 		otherwise start at the cursor)
 *    skipstart	do not look for a match at the start
 * 		position
 * A property matches when either "id" or "type" matches.
 * {direction} can be "f" for forward and "b" for backward.  When
 * omitted forward search is performed.
 * If a match is found then a Dict is returned with the entries
 * as with prop_list(), and additionally an "lnum" entry.
 * If no match is found then an empty Dict is returned.
 */
export function prop_find(
  denops: Denops,
  props: unknown,
  direction?: unknown,
): Promise<unknown>;
export function prop_find(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_find", ...args);
}

/**
 * Return a List with all text properties in line {lnum}.
 * When {props} contains a "bufnr" item, use this buffer instead
 * of the current buffer.
 * The properties are ordered by starting column and priority.
 * Each property is a Dict with these entries:
 *    col		starting column
 *    length	length in bytes, one more if line break is
 * 		included
 *    id		property ID
 *    type		name of the property type, omitted if
 * 		the type was deleted
 *    start	when TRUE property starts in this line
 *    end		when TRUE property ends in this line
 * When "start" is zero the property started in a previous line,
 * the current one is a continuation.
 * When "end" is zero the property continues in the next line.
 * The line break after this line is included.
 * Can also be used as a |method|:
 * 	GetLnum()->prop_list()
 */
export function prop_list(
  denops: Denops,
  lnum: unknown,
  props?: unknown,
): Promise<unknown>;
export function prop_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_list", ...args);
}

/**
 * Remove a matching text property from line {lnum}.  When
 * {lnum-end} is given, remove matching text properties from line
 * {lnum} to {lnum-end} (inclusive).
 * When {lnum} is omitted remove matching text properties from
 * all lines (this requires going over all lines, thus will be a
 * bit slow for a buffer with many lines).
 * {props} is a dictionary with these fields:
 *    id		remove text properties with this ID
 *    type		remove text properties with this type name
 *    both		"id" and "type" must both match
 *    bufnr	use this buffer instead of the current one
 *    all		when TRUE remove all matching text properties,
 * 		not just the first one
 * A property matches when either "id" or "type" matches.
 * If buffer "bufnr" does not exist you get an error message.
 * If buffer "bufnr" is not loaded then nothing happens.
 * Returns the number of properties that were removed.
 * Can also be used as a |method|:
 * 	GetProps()->prop_remove()
 */
export function prop_remove(
  denops: Denops,
  props: unknown,
  lnum?: unknown,
  lnum_end?: unknown,
): Promise<unknown>;
export function prop_remove(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_remove", ...args);
}

/**
 * Add a text property type {name}.  If a property type with this
 * name already exists an error is given.  Nothing is returned.
 * {props} is a dictionary with these optional fields:
 *    bufnr	define the property only for this buffer; this
 * 		avoids name collisions and automatically
 * 		clears the property types when the buffer is
 * 		deleted.
 *    highlight	name of highlight group to use
 *    priority	when a character has multiple text
 * 		properties the one with the highest priority
 * 		will be used; negative values can be used, the
 * 		default priority is zero
 *    combine	when omitted or TRUE combine the highlight
 * 		with any syntax highlight; when FALSE syntax
 * 		highlight will not be used
 *    start_incl	when TRUE inserts at the start position will
 * 		be included in the text property
 *    end_incl	when TRUE inserts at the end position will be
 * 		included in the text property
 * Can also be used as a |method|:
 * 	GetPropName()->prop_type_add(props)
 */
export function prop_type_add(
  denops: Denops,
  name: unknown,
  props: unknown,
): Promise<unknown>;
export function prop_type_add(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_add", ...args);
}

/**
 * Change properties of an existing text property type.  If a
 * property with this name does not exist an error is given.
 * The {props} argument is just like |prop_type_add()|.
 * Can also be used as a |method|:
 * 	GetPropName()->prop_type_change(props)
 */
export function prop_type_change(
  denops: Denops,
  name: unknown,
  props: unknown,
): Promise<unknown>;
export function prop_type_change(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_change", ...args);
}

/**
 * Remove the text property type {name}.  When text properties
 * using the type {name} are still in place, they will not have
 * an effect and can no longer be removed by name.
 * {props} can contain a "bufnr" item.  When it is given, delete
 * a property type from this buffer instead of from the global
 * property types.
 * When text property type {name} is not found there is no error.
 * Can also be used as a |method|:
 * 	GetPropName()->prop_type_delete()
 */
export function prop_type_delete(
  denops: Denops,
  name: unknown,
  props?: unknown,
): Promise<unknown>;
export function prop_type_delete(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_delete", ...args);
}

/**
 * Returns the properties of property type {name}.  This is a
 * dictionary with the same fields as was given to
 * prop_type_add().
 * When the property type {name} does not exist, an empty
 * dictionary is returned.
 * {props} can contain a "bufnr" item.  When it is given, use
 * this buffer instead of the global property types.
 * Can also be used as a |method|:
 * 	GetPropName()->prop_type_get()
 */
export function prop_type_get(
  denops: Denops,
  name: unknown,
  props?: unknown,
): Promise<unknown>;
export function prop_type_get(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_get", ...args);
}

/**
 * Returns a list with all property type names.
 * {props} can contain a "bufnr" item.  When it is given, use
 * this buffer instead of the global property types.
 */
export function prop_type_list(
  denops: Denops,
  props?: unknown,
): Promise<unknown>;
export function prop_type_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_list", ...args);
}

/**
 * Open a new window displaying the difference between the two
 * files.  The files must have been created with
 * |term_dumpwrite()|.
 * Returns the buffer number or zero when the diff fails.
 * Also see |terminal-diff|.
 * NOTE: this does not work with double-width characters yet.
 * The top part of the buffer contains the contents of the first
 * file, the bottom part of the buffer contains the contents of
 * the second file.  The middle part shows the differences.
 * The parts are separated by a line of equals.
 * If the {options} argument is present, it must be a Dict with
 * these possible members:
 *    "term_name"	     name to use for the buffer name, instead
 * 		     of the first file name.
 *    "term_rows"	     vertical size to use for the terminal,
 * 		     instead of using 'termwinsize', but
 * 		     respecting the minimal size
 *    "term_cols"	     horizontal size to use for the terminal,
 * 		     instead of using 'termwinsize', but
 * 		     respecting the minimal size
 *    "vertical"	     split the window vertically
 *    "curwin"	     use the current window, do not split the
 * 		     window; fails if the current buffer
 * 		     cannot be |abandon|ed
 *    "bufnr"	     do not create a new buffer, use the
 * 		     existing buffer "bufnr".  This buffer
 * 		     must have been previously created with
 * 		     term_dumpdiff() or term_dumpload() and
 * 		     visible in a window.
 *    "norestore"	     do not add the terminal window to a
 * 		     session file
 * Each character in the middle part indicates a difference. If
 * there are multiple differences only the first in this list is
 * used:
 * 	X	different character
 * 	w	different width
 * 	f	different foreground color
 * 	b	different background color
 * 	a	different attribute
 * 	+	missing position in first file
 * 	-	missing position in second file
 * 	>	cursor position in first file, not in second
 * 	<	cursor position in second file, not in first
 * Using the "s" key the top and bottom parts are swapped.  This
 * makes it easy to spot a difference.
 * Can also be used as a |method|:
 * 	GetFilename()->term_dumpdiff(otherfile)
 */
export function term_dumpdiff(
  denops: Denops,
  filename1: unknown,
  filename2: unknown,
  options?: unknown,
): Promise<unknown>;
export function term_dumpdiff(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_dumpdiff", ...args);
}

/**
 * Open a new window displaying the contents of {filename}
 * The file must have been created with |term_dumpwrite()|.
 * Returns the buffer number or zero when it fails.
 * Also see |terminal-diff|.
 * For {options} see |term_dumpdiff()|.
 * Can also be used as a |method|:
 * 	GetFilename()->term_dumpload()
 */
export function term_dumpload(
  denops: Denops,
  filename: unknown,
  options?: unknown,
): Promise<unknown>;
export function term_dumpload(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_dumpload", ...args);
}

/**
 * Dump the contents of the terminal screen of {buf} in the file
 * {filename}.  This uses a format that can be used with
 * |term_dumpload()| and |term_dumpdiff()|.
 * If the job in the terminal already finished an error is given:
 * If {filename} already exists an error is given:
 * Also see |terminal-diff|.
 * {options} is a dictionary with these optional entries:
 * 	"rows"		maximum number of rows to dump
 * 	"columns"	maximum number of columns to dump
 * Can also be used as a |method|, the base is used for the file
 * name:
 * 	GetFilename()->term_dumpwrite(bufnr)
 */
export function term_dumpwrite(
  denops: Denops,
  buf: unknown,
  filename: unknown,
  options?: unknown,
): Promise<unknown>;
export function term_dumpwrite(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_dumpwrite", ...args);
}

/**
 * Returns 1 if the terminal of {buf} is using the alternate
 * screen.
 * {buf} is used as with |term_getsize()|.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getaltscreen()
 */
export function term_getaltscreen(
  denops: Denops,
  buf: unknown,
): Promise<unknown>;
export function term_getaltscreen(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getaltscreen", ...args);
}

/**
 * Get the ANSI color palette in use by terminal {buf}.
 * Returns a List of length 16 where each element is a String
 * representing a color in hexadecimal "#rrggbb" format.
 * Also see |term_setansicolors()| and |g:terminal_ansi_colors|.
 * If neither was used returns the default colors.
 * {buf} is used as with |term_getsize()|.  If the buffer does not
 * exist or is not a terminal window, an empty list is returned.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getansicolors()
 * {only available when compiled with GUI enabled and/or the
 * |+termguicolors| feature}
 */
export function term_getansicolors(
  denops: Denops,
  buf: unknown,
): Promise<unknown>;
export function term_getansicolors(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getansicolors", ...args);
}

/**
 * Given {attr}, a value returned by term_scrape() in the "attr"
 * item, return whether {what} is on.  {what} can be one of:
 * 	bold
 * 	italic
 * 	underline
 * 	strike
 * 	reverse
 * Can also be used as a |method|:
 * 	GetAttr()->term_getattr()
 */
export function term_getattr(
  denops: Denops,
  attr: unknown,
  what: unknown,
): Promise<unknown>;
export function term_getattr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getattr", ...args);
}

/**
 * Get the cursor position of terminal {buf}. Returns a list with
 * two numbers and a dictionary: [row, col, dict].
 * "row" and "col" are one based, the first screen cell is row
 * 1, column 1.  This is the cursor position of the terminal
 * itself, not of the Vim window.
 * "dict" can have these members:
 *    "visible"	one when the cursor is visible, zero when it
 * 		is hidden.
 *    "blink"	one when the cursor is blinking, zero when it
 * 		is not blinking.
 *    "shape"	1 for a block cursor, 2 for underline and 3
 * 		for a vertical bar.
 *    "color"	color of the cursor, e.g. "green"
 * {buf} must be the buffer number of a terminal window. If the
 * buffer does not exist or is not a terminal window, an empty
 * list is returned.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getcursor()
 */
export function term_getcursor(denops: Denops, buf: unknown): Promise<unknown>;
export function term_getcursor(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getcursor", ...args);
}

/**
 * Get the Job associated with terminal window {buf}.
 * {buf} is used as with |term_getsize()|.
 * Returns |v:null| when there is no job.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getjob()
 */
export function term_getjob(denops: Denops, buf: unknown): Promise<unknown>;
export function term_getjob(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getjob", ...args);
}

/**
 * Get a line of text from the terminal window of {buf}.
 * {buf} is used as with |term_getsize()|.
 * The first line has {row} one.  When {row} is "." the cursor
 * line is used.  When {row} is invalid an empty string is
 * returned.
 * To get attributes of each character use |term_scrape()|.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getline(row)
 */
export function term_getline(
  denops: Denops,
  buf: unknown,
  row: unknown,
): Promise<unknown>;
export function term_getline(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getline", ...args);
}

/**
 * Return the number of lines that scrolled to above the top of
 * terminal {buf}.  This is the offset between the row number
 * used for |term_getline()| and |getline()|, so that:
 * 	term_getline(buf, N)
 * is equal to:
 * 	getline(N + term_getscrolled(buf))
 * (if that line exists).
 * {buf} is used as with |term_getsize()|.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getscrolled()
 */
export function term_getscrolled(
  denops: Denops,
  buf: unknown,
): Promise<unknown>;
export function term_getscrolled(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getscrolled", ...args);
}

/**
 * Get the size of terminal {buf}. Returns a list with two
 * numbers: [rows, cols].  This is the size of the terminal, not
 * the window containing the terminal.
 * {buf} must be the buffer number of a terminal window.  Use an
 * empty string for the current buffer.  If the buffer does not
 * exist or is not a terminal window, an empty list is returned.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getsize()
 */
export function term_getsize(denops: Denops, buf: unknown): Promise<unknown>;
export function term_getsize(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getsize", ...args);
}

/**
 * Get the status of terminal {buf}. This returns a String with
 * a comma separated list of these items:
 * 	running		job is running
 * 	finished	job has finished
 * 	normal		in Terminal-Normal mode
 * One of "running" or "finished" is always present.
 * {buf} must be the buffer number of a terminal window. If the
 * buffer does not exist or is not a terminal window, an empty
 * string is returned.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_getstatus()
 */
export function term_getstatus(denops: Denops, buf: unknown): Promise<unknown>;
export function term_getstatus(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getstatus", ...args);
}

/**
 * Get the title of terminal {buf}. This is the title that the
 * job in the terminal has set.
 * {buf} must be the buffer number of a terminal window. If the
 * buffer does not exist or is not a terminal window, an empty
 * string is returned.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_gettitle()
 */
export function term_gettitle(denops: Denops, buf: unknown): Promise<unknown>;
export function term_gettitle(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_gettitle", ...args);
}

/**
 * Get the name of the controlling terminal associated with
 * terminal window {buf}.  {buf} is used as with |term_getsize()|.
 * When {input} is omitted or 0, return the name for writing
 * (stdout). When {input} is 1 return the name for reading
 * (stdin). On UNIX, both return same name.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_gettty()
 */
export function term_gettty(
  denops: Denops,
  buf: unknown,
  input?: unknown,
): Promise<unknown>;
export function term_gettty(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_gettty", ...args);
}

/**
 * Return a list with the buffer numbers of all buffers for
 * terminal windows.
 */
export function term_list(denops: Denops): Promise<unknown>;
export function term_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_list", ...args);
}

/**
 * Get the contents of {row} of terminal screen of {buf}.
 * For {buf} see |term_getsize()|.
 * The first line has {row} one.  When {row} is "." the cursor
 * line is used.  When {row} is invalid an empty string is
 * returned.
 * Return a List containing a Dict for each screen cell:
 *     "chars"	character(s) at the cell
 *     "fg"	foreground color as #rrggbb
 *     "bg"	background color as #rrggbb
 *     "attr"	attributes of the cell, use |term_getattr()|
 * 		to get the individual flags
 *     "width"	cell width: 1 or 2
 * For a double-width cell there is one item, thus the list can
 * be shorter than the width of the terminal.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_scrape(row)
 */
export function term_scrape(
  denops: Denops,
  buf: unknown,
  row: unknown,
): Promise<unknown>;
export function term_scrape(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_scrape", ...args);
}

/**
 * Send keystrokes {keys} to terminal {buf}.
 * {buf} is used as with |term_getsize()|.
 * {keys} are translated as key sequences. For example, "\<c-x>"
 * means the character CTRL-X.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_sendkeys(keys)
 */
export function term_sendkeys(
  denops: Denops,
  buf: unknown,
  keys: unknown,
): Promise<unknown>;
export function term_sendkeys(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_sendkeys", ...args);
}

/**
 * Set the function name prefix to be used for the |terminal-api|
 * function in terminal {buf}.  For example:
 *     :call term_setapi(buf, "Myapi_")
 *     :call term_setapi(buf, "")
 * The default is "Tapi_".  When {expr} is an empty string then
 * no |terminal-api| function can be used for {buf}.
 * When used as a method the base is used for {buf}:
 * 	GetBufnr()->term_setapi({expr})
 */
export function term_setapi(
  denops: Denops,
  buf: unknown,
  expr: unknown,
): Promise<unknown>;
export function term_setapi(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setapi", ...args);
}

/**
 * Set the ANSI color palette used by terminal {buf}.
 * {colors} must be a List of 16 valid color names or hexadecimal
 * color codes, like those accepted by |highlight-guifg|.
 * Also see |term_getansicolors()| and |g:terminal_ansi_colors|.
 * The colors normally are:
 * 	0    black
 * 	1    dark red
 * 	2    dark green
 * 	3    brown
 * 	4    dark blue
 * 	5    dark magenta
 * 	6    dark cyan
 * 	7    light grey
 * 	8    dark grey
 * 	9    red
 * 	10   green
 * 	11   yellow
 * 	12   blue
 * 	13   magenta
 * 	14   cyan
 * 	15   white
 * These colors are used in the GUI and in the terminal when
 * 'termguicolors' is set.  When not using GUI colors (GUI mode
 * or 'termguicolors'), the terminal window always uses the 16
 * ANSI colors of the underlying terminal.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_setansicolors(colors)
 * {only available with GUI enabled and/or the |+termguicolors|
 * feature}
 */
export function term_setansicolors(
  denops: Denops,
  buf: unknown,
  colors: unknown,
): Promise<unknown>;
export function term_setansicolors(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setansicolors", ...args);
}

/**
 * When exiting Vim or trying to close the terminal window in
 * another way, {how} defines whether the job in the terminal can
 * be stopped.
 * When {how} is empty (the default), the job will not be
 * stopped, trying to exit will result in |E947|.
 * Otherwise, {how} specifies what signal to send to the job.
 * See |job_stop()| for the values.
 * After sending the signal Vim will wait for up to a second to
 * check that the job actually stopped.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_setkill(how)
 */
export function term_setkill(
  denops: Denops,
  buf: unknown,
  how: unknown,
): Promise<unknown>;
export function term_setkill(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setkill", ...args);
}

/**
 * Set the command to write in a session file to restore the job
 * in this terminal.  The line written in the session file is:
 * 	terminal ++curwin ++cols=%d ++rows=%d {command}
 * Make sure to escape the command properly.
 * Use an empty {command} to run 'shell'.
 * Use "NONE" to not restore this window.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_setrestore(command)
 */
export function term_setrestore(
  denops: Denops,
  buf: unknown,
  command: unknown,
): Promise<unknown>;
export function term_setrestore(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setrestore", ...args);
}

/**
 * Set the size of terminal {buf}. The size of the window
 * containing the terminal will also be adjusted, if possible.
 * If {rows} or {cols} is zero or negative, that dimension is not
 * changed.
 * {buf} must be the buffer number of a terminal window.  Use an
 * empty string for the current buffer.  If the buffer does not
 * exist or is not a terminal window, an error is given.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_setsize(rows, cols)
 */
export function term_setsize(
  denops: Denops,
  buf: unknown,
  rows: unknown,
  cols: unknown,
): Promise<unknown>;
export function term_setsize(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setsize", ...args);
}

/**
 * Open a terminal window and run {cmd} in it.
 * {cmd} can be a string or a List, like with |job_start()|. The
 * string "NONE" can be used to open a terminal window without
 * starting a job, the pty of the terminal can be used by a
 * command like gdb.
 * Returns the buffer number of the terminal window.  If {cmd}
 * cannot be executed the window does open and shows an error
 * message.
 * If opening the window fails zero is returned.
 * {options} are similar to what is used for |job_start()|, see
 * |job-options|.  However, not all options can be used.  These
 * are supported:
 *    all timeout options
 *    "stoponexit", "cwd", "env"
 *    "callback", "out_cb", "err_cb", "exit_cb", "close_cb"
 *    "in_io", "in_top", "in_bot", "in_name", "in_buf"
 *    "out_io", "out_name", "out_buf", "out_modifiable", "out_msg"
 *    "err_io", "err_name", "err_buf", "err_modifiable", "err_msg"
 * However, at least one of stdin, stdout or stderr must be
 * connected to the terminal.  When I/O is connected to the
 * terminal then the callback function for that part is not used.
 * There are extra options:
 *    "term_name"	     name to use for the buffer name, instead
 * 		     of the command name.
 *    "term_rows"	     vertical size to use for the terminal,
 * 		     instead of using 'termwinsize'
 *    "term_cols"	     horizontal size to use for the terminal,
 * 		     instead of using 'termwinsize'
 *    "vertical"	     split the window vertically; note that
 * 		     other window position can be defined with
 * 		     command modifiers, such as |:belowright|.
 *    "curwin"	     use the current window, do not split the
 * 		     window; fails if the current buffer
 * 		     cannot be |abandon|ed
 *    "hidden"	     do not open a window
 *    "norestore"	     do not add the terminal window to a
 * 		     session file
 *    "term_kill"	     what to do when trying to close the
 * 		     terminal window, see |term_setkill()|
 *    "term_finish"     What to do when the job is finished:
 * 			"close": close any windows
 * 			"open": open window if needed
 * 		     Note that "open" can be interruptive.
 * 		     See |term++close| and |term++open|.
 *    "term_opencmd"    command to use for opening the window when
 * 		     "open" is used for "term_finish"; must
 * 		     have "%d" where the buffer number goes,
 * 		     e.g. "10split|buffer %d"; when not
 * 		     specified "botright sbuf %d" is used
 *    "term_highlight"  highlight group to use instead of
 * 		     "Terminal"
 *    "eof_chars"	     Text to send after all buffer lines were
 * 		     written to the terminal.  When not set
 * 		     CTRL-D is used on MS-Windows. For Python
 * 		     use CTRL-Z or "exit()". For a shell use
 * 		     "exit".  A CR is always added.
 *    "ansi_colors"     A list of 16 color names or hex codes
 * 		     defining the ANSI palette used in GUI
 * 		     color modes.  See |g:terminal_ansi_colors|.
 *    "tty_type"	     (MS-Windows only): Specify which pty to
 * 		     use.  See 'termwintype' for the values.
 *    "term_api"	     function name prefix for the
 * 		     |terminal-api| function.  See
 * 		     |term_setapi()|.
 * Can also be used as a |method|:
 * 	GetCommand()->term_start()
 */
export function term_start(
  denops: Denops,
  cmd: unknown,
  options?: unknown,
): Promise<unknown>;
export function term_start(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_start", ...args);
}

/**
 * Wait for pending updates of {buf} to be handled.
 * {buf} is used as with |term_getsize()|.
 * {time} is how long to wait for updates to arrive in msec.  If
 * not set then 10 msec will be used.
 * Can also be used as a |method|:
 * 	GetBufnr()->term_wait()
 */
export function term_wait(
  denops: Denops,
  buf: unknown,
  time?: unknown,
): Promise<unknown>;
export function term_wait(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_wait", ...args);
}
