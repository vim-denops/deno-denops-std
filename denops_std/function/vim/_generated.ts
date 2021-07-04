// NOTE: This file is generated. Do NOT modify it manually.
// deno-lint-ignore-file camelcase
import { Denops } from "../../deps.ts";

/**
 * Return the current text in the balloon.  Only for the string,
 * not used for the List.
 */
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

/**
 *
 */
export function buffer_exists(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("buffer_exists", ...args);
}

/**
 * Obsolete name: buffer_name().
 */
export function buffer_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("buffer_name", ...args);
}

/**
 * Obsolete name for bufnr("$"): last_buffer_nr().
 */
export function buffer_number(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("buffer_number", ...args);
}

/**
 *
 */
export function last_buffer_nr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("last_buffer_nr", ...args);
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
 * Expand special items in {expr} like what is done for an Ex
 * command such as `:edit`.  This expands special keywords, like
 * with |expand()|, and environment variables, anywhere in
 * {expr}.  "~user" and "~/path" are only expanded at the start.
 * Returns the expanded string.  Example:
 * 	:echo expandcmd('make %<.o')
 * Can also be used as a |method|:
 * 	GetCommand()->expandcmd()
 */
export function expandcmd(denops: Denops, expr: unknown): Promise<unknown>;
export function expandcmd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("expandcmd", ...args);
}

/**
 * Obsolete name: file_readable().
 */
export function file_readable(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("file_readable", ...args);
}

/**
 * The result is a Number, which is |TRUE| when the IME status is
 * active.
 * See 'imstatusfunc'.
 */
export function getimstatus(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getimstatus", ...args);
}

/**
 * Returns a Dictionary with the last known position of the
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
 * separater right of a window, the "line" and "column" values
 * are zero.
 * When the position is after the text then "column" is the
 * length of the text in bytes.
 * If the mouse is over a popup window then that window is used.
 * When using |getchar()| the Vim variables |v:mouse_lnum|,
 * |v:mouse_col| and |v:mouse_winid| also provide these values.
 */
export function getmousepos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getmousepos", ...args);
}

/**
 * Can also be used as a |method|:
 * 	GetName()->hlexists()
 */
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
export function interrupt(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("interrupt", ...args);
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
export function listener_flush(denops: Denops, buf: unknown): Promise<unknown>;
export function listener_flush(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_flush", ...args);
}

/**
 * Remove a listener previously added with listener_add().
 * Returns zero when {id} could not be found, one when {id} was
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
 * Evaluate Perl expression {expr} in scalar context and return
 * its result converted to Vim data structures. If value can't be
 * converted, it is returned as a string Perl representation.
 * Note: If you want an array or hash, {expr} must return a
 * reference to it.
 * Example:
 * 	:echo perleval('[1 .. 4]')
 * 	[1, 2, 3, 4]
 * Can also be used as a |method|:
 * 	GetExpr()->perleval()
 * {only available when compiled with the |+perl| feature}
 */
export function perleval(denops: Denops, expr: unknown): Promise<unknown>;
export function perleval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("perleval", ...args);
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
export function pum_getpos(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("pum_getpos", ...args);
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
export function rand(denops: Denops, expr: unknown): Promise<unknown>;
export function rand(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("rand", ...args);
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
 * Can also be used as a |method|:
 * 	GetRubyExpr()->rubyeval()
 * {only available when compiled with the |+ruby| feature}
 */
export function rubyeval(denops: Denops, expr: unknown): Promise<unknown>;
export function rubyeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("rubyeval", ...args);
}

/**
 * The result is a List of Numbers.  The first number is the same
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
 * Stop playing all sounds.
 * {only available when compiled with the |+sound| feature}
 */
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
export function srand(denops: Denops, expr: unknown): Promise<unknown>;
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
 *     o	operator pending or waiting for a command argument,
 *         e.g. after |f|
 *     a	Insert mode autocomplete active
 *     x	executing an autocommand
 *     w	blocked on waiting, e.g. ch_evalexpr(), ch_read() and
 * 	ch_readraw() when reading json.
 *     S	not triggering SafeState or SafeStateAgain
 *     c	callback invoked, including timer (repeats for
 * 	recursiveness up to "ccc")
 *     s	screen has scrolled for messages
 */
export function state(denops: Denops, what: unknown): Promise<unknown>;
export function state(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("state", ...args);
}

/**
 * Return a list containing the number values which represent
 * each character in String {expr}.  Examples:
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
  expr: unknown,
  utf8?: unknown,
): Promise<unknown>;
export function str2list(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("str2list", ...args);
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
 * When window {id} does not exist then no error is given.
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
 * 	        Move the window {nr} to a new split of the window {target}.
 * This is similar to moving to {target}, creating a new window
 * using |:split| but having the same contents as window {nr}, and
 * then closing {nr}.
 * Both {nr} and {target} can be window numbers or |window-ID|s.
 * Returns zero for success, non-zero for failure.
 * {options} is a Dictionary with the following optional entries:
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
