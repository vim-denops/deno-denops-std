// NOTE: This file is generated. Do NOT modify it manually.
// deno-lint-ignore-file camelcase
import type { Denops } from "https://deno.land/x/denops_core@v6.0.5/mod.ts";

/**
 * Adds a List of autocmds and autocmd groups.
 *
 * The **{acmds}** argument is a List where each item is a Dict with
 * the following optional items:
 *     bufnr       buffer number to add a buffer-local autocmd.
 *                 If this item is specified, then the "pattern"
 *                 item is ignored.
 *     cmd         Ex command to execute for this autocmd event
 *     event       autocmd event name. Refer to `autocmd-events`.
 *                 This can be either a String with a single
 *                 event name or a List of event names.
 *     group       autocmd group name. Refer to `autocmd-groups`.
 *                 If this group doesn't exist then it is
 *                 created.  If not specified or empty, then the
 *                 default group is used.
 *     nested      boolean flag, set to v:true to add a nested
 *                 autocmd.  Refer to `autocmd-nested`.
 *     once        boolean flag, set to v:true to add an autocmd
 *                 which executes only once. Refer to
 *                 `autocmd-once`.
 *     pattern     autocmd pattern string. Refer to
 *                 `autocmd-patterns`.  If "bufnr" item is
 *                 present, then this item is ignored.  This can
 *                 be a String with a single pattern or a List of
 *                 patterns.
 *     replace     boolean flag, set to v:true to remove all the
 *                 commands associated with the specified autocmd
 *                 event and group and add the **{cmd}**.  This is
 *                 useful to avoid adding the same command
 *                 multiple times for an autocmd event in a group.
 *
 * Returns v:true on success and v:false on failure.
 * Examples:
 *
 *     " Create a buffer-local autocmd for buffer 5
 *     let acmd = {}
 *     let acmd.group = 'MyGroup'
 *     let acmd.event = 'BufEnter'
 *     let acmd.bufnr = 5
 *     let acmd.cmd = 'call BufEnterFunc()'
 *     call autocmd_add([acmd])
 *
 * Can also be used as a `method`:
 *
 *     GetAutocmdList()->autocmd_add()
 */
export function autocmd_add(denops: Denops, acmds: unknown): Promise<boolean>;
export function autocmd_add(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("autocmd_add", ...args);
}

/**
 * Deletes a List of autocmds and autocmd groups.
 *
 * The **{acmds}** argument is a List where each item is a Dict with
 * the following optional items:
 *     bufnr       buffer number to delete a buffer-local autocmd.
 *                 If this item is specified, then the "pattern"
 *                 item is ignored.
 *     cmd         Ex command for this autocmd event
 *     event       autocmd event name. Refer to `autocmd-events`.
 *                 If '*' then all the autocmd events in this
 *                 group are deleted.
 *     group       autocmd group name. Refer to `autocmd-groups`.
 *                 If not specified or empty, then the default
 *                 group is used.
 *     nested      set to v:true for a nested autocmd.
 *                 Refer to `autocmd-nested`.
 *     once        set to v:true for an autocmd which executes
 *                 only once. Refer to `autocmd-once`.
 *     pattern     autocmd pattern string. Refer to
 *                 `autocmd-patterns`.  If "bufnr" item is
 *                 present, then this item is ignored.
 *
 * If only **{group}** is specified in a **{acmds}** entry and **{event}**,
 * **{pattern}** and **{cmd}** are not specified, then that autocmd group
 * is deleted.
 *
 * Returns `v:true` on success and `v:false` on failure.
 * Examples:
 *
 *     " :autocmd! BufLeave *.vim
 *     let acmd = #{event: 'BufLeave', pattern: '*.vim'}
 *     call autocmd_delete([acmd]})
 *     " :autocmd! MyGroup1 BufLeave
 *     let acmd = #{group: 'MyGroup1', event: 'BufLeave'}
 *     call autocmd_delete([acmd])
 *     " :autocmd! MyGroup2 BufEnter *.c
 *     let acmd = #{group: 'MyGroup2', event: 'BufEnter',
 *                                     \ pattern: '*.c'}
 *     " :autocmd! MyGroup2 * *.c
 *     let acmd = #{group: 'MyGroup2', event: '*',
 *                                     \ pattern: '*.c'}
 *     call autocmd_delete([acmd])
 *     " :autocmd! MyGroup3
 *     let acmd = #{group: 'MyGroup3'}
 *     call autocmd_delete([acmd])
 *
 * Can also be used as a `method`:
 *
 *     GetAutocmdList()->autocmd_delete()
 */
export function autocmd_delete(
  denops: Denops,
  acmds: unknown,
): Promise<boolean>;
export function autocmd_delete(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("autocmd_delete", ...args);
}

/**
 * Returns a `List` of autocmds. If **{opts}** is not supplied, then
 * returns the autocmds for all the events in all the groups.
 *
 * The optional **{opts}** Dict argument supports the following
 * items:
 *     group       Autocmd group name. If specified, returns only
 *                 the autocmds defined in this group. If the
 *                 specified group doesn't exist, results in an
 *                 error message.  If set to an empty string,
 *                 then the default autocmd group is used.
 *     event       Autocmd event name. If specified, returns only
 *                 the autocmds defined for this event.  If set
 *                 to "*", then returns autocmds for all the
 *                 events.  If the specified event doesn't exist,
 *                 results in an error message.
 *     pattern     Autocmd pattern. If specified, returns only
 *                 the autocmds defined for this pattern.
 * A combination of the above three times can be supplied in
 * **{opts}**.
 *
 * Each Dict in the returned List contains the following items:
 *     bufnr       For buffer-local autocmds, buffer number where
 *                 the autocmd is defined.
 *     cmd         Command executed for this autocmd.
 *     event       Autocmd event name.
 *     group       Autocmd group name.
 *     nested      Boolean flag, set to v:true for a nested
 *                 autocmd. See `autocmd-nested`.
 *     once        Boolean flag, set to v:true, if the autocmd
 *                 will be executed only once. See `autocmd-once`.
 *     pattern     Autocmd pattern.  For a buffer-local
 *                 autocmd, this will be of the form `"<buffer=n>"`.
 * If there are multiple commands for an autocmd event in a
 * group, then separate items are returned for each command.
 *
 * Returns an empty List if an autocmd with the specified group
 * or event or pattern is not found.
 *
 * Examples:
 *
 *     " :autocmd MyGroup
 *     echo autocmd_get(#{group: 'Mygroup'})
 *     " :autocmd G BufUnload
 *     echo autocmd_get(#{group: 'G', event: 'BufUnload'})
 *     " :autocmd G * *.ts
 *     let acmd = #{group: 'G', event: '*', pattern: '*.ts'}
 *     echo autocmd_get(acmd)
 *     " :autocmd Syntax
 *     echo autocmd_get(#{event: 'Syntax'})
 *     " :autocmd G BufEnter *.ts
 *     let acmd = #{group: 'G', event: 'BufEnter',
 *                                     \ pattern: '*.ts'}
 *     echo autocmd_get(acmd)
 *
 * Can also be used as a `method`:
 *
 *     Getopts()->autocmd_get()
 */
export function autocmd_get(denops: Denops, opts?: unknown): Promise<unknown[]>;
export function autocmd_get(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("autocmd_get", ...args);
}

/**
 * Return the current text in the balloon.  Only for the string,
 * not used for the List.  Returns an empty string if balloon
 * is not present.
 */
export function balloon_gettext(denops: Denops): Promise<string>;
export function balloon_gettext(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("balloon_gettext", ...args);
}

/**
 * Show **{expr}** inside the balloon.  For the GUI **{expr}** is used as
 * a string.  For a terminal **{expr}** can be a list, which contains
 * the lines of the balloon.  If **{expr}** is not a list it will be
 * split with `balloon_split()`.
 * If **{expr}** is an empty string any existing balloon is removed.
 *
 * Example:
 *
 *     func GetBalloonContent()
 *        " ... initiate getting the content
 *        return ''
 *     endfunc
 *     set balloonexpr=GetBalloonContent()
 *
 *     func BalloonCallback(result)
 *       call balloon_show(a:result)
 *     endfunc
 *
 * Can also be used as a `method`:
 *
 *     GetText()->balloon_show()
 *
 * The intended use is that fetching the content of the balloon
 * is initiated from 'balloonexpr'.  It will invoke an
 * asynchronous method, in which a callback invokes
 * balloon_show().  The 'balloonexpr' itself can return an
 * empty string or a placeholder, e.g. "loading...".
 *
 * When showing a balloon is not possible then nothing happens,
 * no error message is given.
 * *only available when compiled with the `+balloon_eval` or
 * `+balloon_eval_term` feature*
 */
export function balloon_show(denops: Denops, expr: unknown): Promise<void>;
export function balloon_show(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("balloon_show", ...args);
}

/**
 * Split String **{msg}** into lines to be displayed in a balloon.
 * The splits are made for the current window size and optimize
 * to show debugger output.
 * Returns a `List` with the split lines.  Returns an empty List
 * on error.
 * Can also be used as a `method`:
 *
 *     GetText()->balloon_split()->balloon_show()
 *
 * *only available when compiled with the `+balloon_eval_term`
 * feature*
 */
export function balloon_split(denops: Denops, msg: unknown): Promise<unknown[]>;
export function balloon_split(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("balloon_split", ...args);
}

/**
 * Checks for the existence of a `cscope` connection.  If no
 * parameters are specified, then the function returns:
 *         0, if cscope was not available (not compiled in), or
 *            if there are no cscope connections;
 *         1, if there is at least one cscope connection.
 *
 * If parameters are specified, then the value of **{num}**
 * determines how existence of a cscope connection is checked:
 *
 * **{num}**   Description of existence check
 * -----   ------------------------------
 * 0       Same as no parameters (e.g., "cscope_connection()").
 * 1       Ignore **{prepend}**, and use partial string matches for
 *         **{dbpath}**.
 * 2       Ignore **{prepend}**, and use exact string matches for
 *         **{dbpath}**.
 * 3       Use **{prepend}**, use partial string matches for both
 *         **{dbpath}** and **{prepend}**.
 * 4       Use **{prepend}**, use exact string matches for both
 *         **{dbpath}** and **{prepend}**.
 *
 * Note: All string comparisons are case sensitive!
 *
 * Examples.  Suppose we had the following (from ":cs show"):
 *
 *     # pid    database name                        prepend path
 *     0 27664  cscope.out                           /usr/local
 *
 * Invocation                                      Return Val
 * ----------                                      ----------
 *
 *     cscope_connection()                                     1
 *     cscope_connection(1, "out")                             1
 *     cscope_connection(2, "out")                             0
 *     cscope_connection(3, "out")                             0
 *     cscope_connection(3, "out", "local")                    1
 *     cscope_connection(4, "out")                             0
 *     cscope_connection(4, "out", "local")                    0
 *     cscope_connection(4, "cscope.out", "/usr/local")        1
 */
export function cscope_connection(
  denops: Denops,
  num?: unknown,
  dbpath?: unknown,
  prepend?: unknown,
): Promise<number>;
export function cscope_connection(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("cscope_connection", ...args);
}

/**
 * Output **{string}** as-is, including unprintable characters.
 * This can be used to output a terminal code. For example, to
 * disable modifyOtherKeys:
 *
 *     call echoraw(&t_TE)
 *
 * and to enable it again:
 *
 *     call echoraw(&t_TI)
 *
 * Use with care, you can mess up the terminal this way.
 */
export function echoraw(denops: Denops, string: unknown): Promise<void>;
export function echoraw(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("echoraw", ...args);
}

/**
 * Produce an error with number 418, needed for implementation of
 * RFC 2324.
 * If **{expr}** is present and it is TRUE error 503 is given,
 * indicating that coffee is temporarily not available.
 * If **{expr}** is present it must be a String.
 */
export function err_teapot(denops: Denops, expr?: unknown): Promise<void>;
export function err_teapot(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("err_teapot", ...args);
}

/**
 * Like `exists()` but evaluated at compile time.  This is useful
 * to skip a block where a function is used that would otherwise
 * give an error:
 *
 *     if exists_compiled('*ThatFunction')
 *        ThatFunction('works')
 *     endif
 *
 * If `exists()` were used then a compilation error would be
 * given if ThatFunction() is not defined.
 *
 * **{expr}** must be a literal string.
 * Can only be used in a `:def` function.
 * This does not work to check for arguments or local variables.
 */
export function exists_compiled(denops: Denops, expr: unknown): Promise<number>;
export function exists_compiled(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("exists_compiled", ...args);
}

/**
 * Move the Vim window to the foreground.  Useful when sent from
 * a client to a Vim server. `remote_send()`
 * On Win32 systems this might not work, the OS does not always
 * allow a window to bring itself to the foreground.  Use
 * `remote_foreground()` instead.
 * *only in the Win32, Motif and GTK GUI versions and the
 * Win32 console version*
 */
export function foreground(denops: Denops): Promise<number>;
export function foreground(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("foreground", ...args);
}

/**
 * The result is a Number, which is `TRUE` when the IME status is
 * active and `FALSE` otherwise.
 * See 'imstatusfunc'.
 */
export function getimstatus(denops: Denops): Promise<number>;
export function getimstatus(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getimstatus", ...args);
}

/**
 * Returns the name of the currently showing mouse pointer.
 * When the `+mouseshape` feature is not supported or the shape
 * is unknown an empty string is returned.
 * This function is mainly intended for testing.
 */
export function getmouseshape(denops: Denops): Promise<string>;
export function getmouseshape(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("getmouseshape", ...args);
}

/**
 * Returns a List of all the highlight group attributes.  If the
 * optional **{name}** is specified, then returns a List with only
 * the attributes of the specified highlight group.  Returns an
 * empty List if the highlight group **{name}** is not present.
 *
 * If the optional **{resolve}** argument is set to v:true and the
 * highlight group **{name}** is linked to another group, then the
 * link is resolved recursively and the attributes of the
 * resolved highlight group are returned.
 *
 * Each entry in the returned List is a Dictionary with the
 * following items:
 *         cleared boolean flag, set to v:true if the highlight
 *                 group attributes are cleared or not yet
 *                 specified.  See `highlight-clear`.
 *         cterm   cterm attributes. See `highlight-cterm`.
 *         ctermbg cterm background color.
 *                 See `highlight-ctermbg`.
 *         ctermfg cterm foreground color.
 *                 See `highlight-ctermfg`.
 *         ctermul cterm underline color.  See `highlight-ctermul`.
 *         default boolean flag, set to v:true if the highlight
 *                 group link is a default link. See
 *                 `highlight-default`.
 *         font    highlight group font.  See `highlight-font`.
 *         gui     gui attributes. See `highlight-gui`.
 *         guibg   gui background color.  See `highlight-guibg`.
 *         guifg   gui foreground color.  See `highlight-guifg`.
 *         guisp   gui special color.  See `highlight-guisp`.
 *         id      highlight group ID.
 *         linksto linked highlight group name.
 *                 See `:highlight-link`.
 *         name    highlight group name. See `group-name`.
 *         start   start terminal keycode.  See `highlight-start`.
 *         stop    stop terminal keycode.  See `highlight-stop`.
 *         term    term attributes.  See `highlight-term`.
 *
 * The 'term', 'cterm' and 'gui' items in the above Dictionary
 * have a dictionary value with the following optional boolean
 * items: 'bold', 'standout', 'underline', 'undercurl', 'italic',
 * 'reverse', 'inverse' and 'strikethrough'.
 *
 * Example(s):
 *
 *     :echo hlget()
 *     :echo hlget('ModeMsg')
 *     :echo hlget('Number', v:true)
 *
 * Can also be used as a `method`:
 *
 *     GetName()->hlget()
 */
export function hlget(
  denops: Denops,
  name?: unknown,
  resolve?: unknown,
): Promise<unknown[]>;
export function hlget(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("hlget", ...args);
}

/**
 * Creates or modifies the attributes of a List of highlight
 * groups.  Each item in **{list}** is a dictionary containing the
 * attributes of a highlight group. See `hlget()` for the list of
 * supported items in this dictionary.
 *
 * In addition to the items described in `hlget()`, the following
 * additional items are supported in the dictionary:
 *
 *         force           boolean flag to force the creation of
 *                         a link for an existing highlight group
 *                         with attributes.
 *
 * The highlight group is identified using the 'name' item and
 * the 'id' item (if supplied) is ignored.  If a highlight group
 * with a specified name doesn't exist, then it is created.
 * Otherwise the attributes of an existing highlight group are
 * modified.
 *
 * If an empty dictionary value is used for the 'term' or 'cterm'
 * or 'gui' entries, then the corresponding attributes are
 * cleared.  If the 'cleared' item is set to v:true, then all the
 * attributes of the highlight group are cleared.
 *
 * The 'linksto' item can be used to link a highlight group to
 * another highlight group.  See `:highlight-link`.
 *
 * Returns zero for success, -1 for failure.
 *
 * Example(s):
 *
 *     " add bold attribute to the Visual highlight group
 *     :call hlset([#{name: 'Visual',
 *                     \ term: #{reverse: 1 , bold: 1}}])
 *     :call hlset([#{name: 'Type', guifg: 'DarkGreen'}])
 *     :let l = hlget()
 *     :call hlset(l)
 *     " clear the Search highlight group
 *     :call hlset([#{name: 'Search', cleared: v:true}])
 *     " clear the 'term' attributes for a highlight group
 *     :call hlset([#{name: 'Title', term: {}}])
 *     " create the MyHlg group linking it to DiffAdd
 *     :call hlset([#{name: 'MyHlg', linksto: 'DiffAdd'}])
 *     " remove the MyHlg group link
 *     :call hlset([#{name: 'MyHlg', linksto: 'NONE'}])
 *     " clear the attributes and a link
 *     :call hlset([#{name: 'MyHlg', cleared: v:true,
 *                     \ linksto: 'NONE'}])
 *
 * Can also be used as a `method`:
 *
 *     GetAttrList()->hlset()
 */
export function hlset(denops: Denops, list: unknown): Promise<number>;
export function hlset(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("hlset", ...args);
}

/**
 * Like `input()`, but when the GUI is running and text dialogs
 * are supported, a dialog window pops up to input the text.
 * Example:
 *
 *     :let n = inputdialog("value for shiftwidth", shiftwidth())
 *     :if n != ""
 *     :  let &sw = n
 *     :endif
 *
 * When the dialog is cancelled **{cancelreturn}** is returned.  When
 * omitted an empty string is returned.
 * Hitting `<Enter>` works like pressing the OK button.  Hitting
 * `<Esc>` works like pressing the Cancel button.
 * NOTE: Command-line completion is not supported.
 *
 * Can also be used as a `method`:
 *
 *     GetPrompt()->inputdialog()
 */
export function inputdialog(
  denops: Denops,
  prompt: unknown,
  text?: unknown,
  cancelreturn?: unknown,
): Promise<string>;
export function inputdialog(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("inputdialog", ...args);
}

/**
 * The result is a Number, which is `TRUE` when the **{object}**
 * argument is a direct or indirect instance of a `Class`,
 * `Interface`, or class `:type` alias specified by **{class}**.
 * If **{class}** is varargs, the function returns `TRUE` when
 * **{object}** is an instance of any of the specified classes.
 * Example:
 *
 *     instanceof(animal, Dog, Cat)
 *
 * Can also be used as a `method`:
 *
 *     myobj->instanceof(mytype)
 */
export function instanceof_(
  denops: Denops,
  object: unknown,
  class_: unknown,
): Promise<number>;
export function instanceof_(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("instanceof_", ...args);
}

/**
 * The result is a Number, which is `TRUE` when **{path}** is an
 * absolute path.
 * On Unix, a path is considered absolute when it starts with '/'.
 * On MS-Windows, it is considered absolute when it starts with an
 * optional drive prefix and is followed by a '\' or '/'. UNC paths
 * are always absolute.
 * Example:
 *
 *     echo isabsolutepath('/usr/share/')      " 1
 *     echo isabsolutepath('./foobar')         " 0
 *     echo isabsolutepath('C:\Windows')       " 1
 *     echo isabsolutepath('foobar')           " 0
 *     echo isabsolutepath('\\remote\file')    " 1
 *
 * Can also be used as a `method`:
 *
 *     GetName()->isabsolutepath()
 */
export function isabsolutepath(denops: Denops, path: unknown): Promise<number>;
export function isabsolutepath(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("isabsolutepath", ...args);
}

/**
 * This is similar to `json_decode()` with these differences:
 * - Object key names do not have to be in quotes.
 * - Strings can be in single quotes.
 * - Empty items in an array (between two commas) are allowed and
 *   result in v:none items.
 *
 * Can also be used as a `method`:
 *
 *     ReadObject()->js_decode()
 */
export function js_decode(denops: Denops, string: unknown): Promise<unknown>;
export function js_decode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("js_decode", ...args);
}

/**
 * This is similar to `json_encode()` with these differences:
 * - Object key names are not in quotes.
 * - v:none items in an array result in an empty item between
 *   commas.
 * For example, the Vim object:
 *         [1,v:none,**{"one":1}**,v:none]
 * Will be encoded as:
 *         [1,,**{one:1}**,,]
 * While json_encode() would produce:
 *         [1,null,**{"one":1}**,null]
 * This encoding is valid for JavaScript. It is more efficient
 * than JSON, especially when using an array with optional items.
 *
 * Can also be used as a `method`:
 *
 *     GetObject()->js_encode()
 */
export function js_encode(denops: Denops, expr: unknown): Promise<string>;
export function js_encode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("js_encode", ...args);
}

/**
 * Add a callback function that will be invoked when changes have
 * been made to buffer **{buf}**.
 * **{buf}** refers to a buffer name or number. For the accepted
 * values, see `bufname()`.  When **{buf}** is omitted the current
 * buffer is used.
 * Returns a unique ID that can be passed to `listener_remove()`.
 *
 * The **{callback}** is invoked with five arguments:
 *     bufnr       the buffer that was changed
 *     start       first changed line number
 *     end         first line number below the change
 *     added       number of lines added, negative if lines were
 *                 deleted
 *     changes     a List of items with details about the changes
 *
 * Example:
 *
 *     func Listener(bufnr, start, end, added, changes)
 *       echo 'lines ' .. a:start .. ' until ' .. a:end .. ' changed'
 *     endfunc
 *     call listener_add('Listener', bufnr)
 *
 * The List cannot be changed.  Each item in "changes" is a
 * dictionary with these entries:
 *     lnum        the first line number of the change
 *     end         the first line below the change
 *     added       number of lines added; negative if lines were
 *                 deleted
 *     col         first column in "lnum" that was affected by
 *                 the change; one if unknown or the whole line
 *                 was affected; this is a byte index, first
 *                 character has a value of one.
 * When lines are inserted (not when a line is split, e.g. by
 * typing CR in Insert mode) the values are:
 *     lnum        line above which the new line is added
 *     end         equal to "lnum"
 *     added       number of lines inserted
 *     col         1
 * When lines are deleted the values are:
 *     lnum        the first deleted line
 *     end         the line below the first deleted line, before
 *                 the deletion was done
 *     added       negative, number of lines deleted
 *     col         1
 * When lines are changed:
 *     lnum        the first changed line
 *     end         the line below the last changed line
 *     added       0
 *     col         first column with a change or 1
 *
 * The entries are in the order the changes were made, thus the
 * most recent change is at the end.  The line numbers are valid
 * when the callback is invoked, but later changes may make them
 * invalid, thus keeping a copy for later might not work.
 *
 * The **{callback}** is invoked just before the screen is updated,
 * when `listener_flush()` is called or when a change is being
 * made that changes the line count in a way it causes a line
 * number in the list of changes to become invalid.
 *
 * The **{callback}** is invoked with the text locked, see
 * `textlock`.  If you do need to make changes to the buffer, use
 * a timer to do this later `timer_start()`.
 *
 * The **{callback}** is not invoked when the buffer is first loaded.
 * Use the `BufReadPost` autocmd event to handle the initial text
 * of a buffer.
 * The **{callback}** is also not invoked when the buffer is
 * unloaded, use the `BufUnload` autocmd event for that.
 *
 * Returns zero if **{callback}** or **{buf}** is invalid.
 *
 * Can also be used as a `method`, the base is passed as the
 * second argument:
 *
 *     GetBuffer()->listener_add(callback)
 */
export function listener_add(
  denops: Denops,
  callback: unknown,
  buf?: unknown,
): Promise<number>;
export function listener_add(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_add", ...args);
}

/**
 * Invoke listener callbacks for buffer **{buf}**.  If there are no
 * pending changes then no callbacks are invoked.
 *
 * **{buf}** refers to a buffer name or number. For the accepted
 * values, see `bufname()`.  When **{buf}** is omitted the current
 * buffer is used.
 *
 * Can also be used as a `method`:
 *
 *     GetBuffer()->listener_flush()
 */
export function listener_flush(denops: Denops, buf?: unknown): Promise<void>;
export function listener_flush(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_flush", ...args);
}

/**
 * Remove a listener previously added with listener_add().
 * Returns FALSE when **{id}** could not be found, TRUE when **{id}** was
 * removed.
 *
 * Can also be used as a `method`:
 *
 *     GetListenerId()->listener_remove()
 */
export function listener_remove(denops: Denops, id: unknown): Promise<void>;
export function listener_remove(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("listener_remove", ...args);
}

/**
 * Evaluate Lua expression **{expr}** and return its result converted
 * to Vim data structures. Second **{expr}** may hold additional
 * argument accessible as _A inside first **{expr}**.
 * Strings are returned as they are.
 * Boolean objects are converted to numbers.
 * Numbers are converted to `Float` values.
 * Dictionaries and lists obtained by vim.eval() are returned
 * as-is.
 * Other objects are returned as zero without any errors.
 * See `lua-luaeval` for more details.
 * Note that in a `:def` function local variables are not visible
 * to **{expr}**.
 *
 * Can also be used as a `method`:
 *
 *     GetExpr()->luaeval()
 *
 * *only available when compiled with the `+lua` feature*
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
 * Returns a `List` of all mappings.  Each List item is a `Dict`,
 * the same as what is returned by `maparg()`, see
 * `mapping-dict`.  When **{abbr}** is there and it is `TRUE` use
 * abbreviations instead of mappings.
 *
 * Example to show all mappings with 'MultiMatch' in rhs:
 *
 *     vim9script
 *     echo maplist()->filter(
 *             (_, m) => match(m.rhs, 'MultiMatch') >= 0)
 *
 * It can be tricky to find mappings for particular `:map-modes`.
 * `mapping-dict`'s "mode_bits" can simplify this. For example,
 * the mode_bits for Normal, Insert or Command-line modes are
 * 0x19. To find all the mappings available in those modes you
 * can do:
 *
 *     vim9script
 *     var saved_maps = []
 *     for m in maplist()
 *         if and(m.mode_bits, 0x19) != 0
 *             saved_maps->add(m)
 *         endif
 *     endfor
 *     echo saved_maps->mapnew((_, m) => m.lhs)
 *
 * The values of the mode_bits are defined in Vim's src/vim.h
 * file and they can be discovered at runtime using
 * `:map-commands` and "maplist()". Example:
 *
 *     vim9script
 *     omap xyzzy <Nop>
 *     var op_bit = maplist()->filter(
 *         (_, m) => m.lhs == 'xyzzy')[0].mode_bits
 *     ounmap xyzzy
 *     echo printf("Operator-pending mode bit: 0x%x", op_bit)
 */
export function maplist(denops: Denops, abbr?: unknown): Promise<unknown[]>;
export function maplist(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("maplist", ...args);
}

/**
 * Like `map()` but instead of replacing items in **{expr1}** a new
 * List or Dictionary is created and returned.  **{expr1}** remains
 * unchanged.  Items can still be changed by **{expr2}**, if you
 * don't want that use `deepcopy()` first.
 */
export function mapnew(
  denops: Denops,
  expr1: unknown,
  expr2: unknown,
): Promise<unknown[] | Record<string, unknown> | unknown | string>;
export function mapnew(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mapnew", ...args);
}

/**
 * Evaluate MzScheme expression **{expr}** and return its result
 * converted to Vim data structures.
 * Numbers and strings are returned as they are.
 * Pairs (including lists and improper lists) and vectors are
 * returned as Vim `Lists`.
 * Hash tables are represented as Vim `Dictionary` type with keys
 * converted to strings.
 * All other types are converted to string with display function.
 * Examples:
 *
 *     :mz (define l (list 1 2 3))
 *     :mz (define h (make-hash)) (hash-set! h "list" l)
 *     :echo mzeval("l")
 *     :echo mzeval("h")
 *
 * Note that in a `:def` function local variables are not visible
 * to **{expr}**.
 *
 * Can also be used as a `method`:
 *
 *     GetExpr()->mzeval()
 *
 * *only available when compiled with the `+mzscheme` feature*
 */
export function mzeval(denops: Denops, expr: unknown): Promise<unknown>;
export function mzeval(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("mzeval", ...args);
}

/**
 * Extended version of `readdir()`.
 * Return a list of Dictionaries with file and directory
 * information in **{directory}**.
 * This is useful if you want to get the attributes of file and
 * directory at the same time as getting a list of a directory.
 * This is much faster than calling `readdir()` then calling
 * `getfperm()`, `getfsize()`, `getftime()` and `getftype()` for
 * each file and directory especially on MS-Windows.
 * The list will by default be sorted by name (case sensitive),
 * the sorting can be changed by using the optional **{dict}**
 * argument, see `readdir()`.
 *
 * The Dictionary for file and directory information has the
 * following items:
 *         group   Group name of the entry. (Only on Unix)
 *         name    Name of the entry.
 *         perm    Permissions of the entry. See `getfperm()`.
 *         size    Size of the entry. See `getfsize()`.
 *         time    Timestamp of the entry. See `getftime()`.
 *         type    Type of the entry.
 *                 On Unix, almost same as `getftype()` except:
 *                     Symlink to a dir    "linkd"
 *                     Other symlink       "link"
 *                 On MS-Windows:
 *                     Normal file         "file"
 *                     Directory           "dir"
 *                     Junction            "junction"
 *                     Symlink to a dir    "linkd"
 *                     Other symlink       "link"
 *                     Other reparse point "reparse"
 *         user    User name of the entry's owner. (Only on Unix)
 * On Unix, if the entry is a symlink, the Dictionary includes
 * the information of the target (except the "type" item).
 * On MS-Windows, it includes the information of the symlink
 * itself because of performance reasons.
 *
 * When **{expr}** is omitted all entries are included.
 * When **{expr}** is given, it is evaluated to check what to do:
 *         If **{expr}** results in -1 then no further entries will
 *         be handled.
 *         If **{expr}** results in 0 then this entry will not be
 *         added to the list.
 *         If **{expr}** results in 1 then this entry will be added
 *         to the list.
 * The entries "." and ".." are always excluded.
 * Each time **{expr}** is evaluated `v:val` is set to a `Dictionary`
 * of the entry.
 * When **{expr}** is a function the entry is passed as the argument.
 * For example, to get a list of files ending in ".txt":
 *
 *     readdirex(dirname, {e -> e.name =~ '.txt$'})
 *
 * For example, to get a list of all files in the current
 * directory without sorting the individual entries:
 *
 *     readdirex(dirname, '1', #{sort: 'none'})
 *
 * Can also be used as a `method`:
 *
 *     GetDirName()->readdirex()
 */
export function readdirex(
  denops: Denops,
  directory: unknown,
  expr?: unknown,
  dict?: unknown,
): Promise<unknown[]>;
export function readdirex(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("readdirex", ...args);
}

/**
 * Send the **{string}** to **{server}**.  The **{server}** argument is a
 * string, also see `{server}`.
 *
 * The string is sent as an expression and the result is returned
 * after evaluation.  The result must be a String or a `List`.  A
 * `List` is turned into a String by joining the items with a
 * line break in between (not at the end), like with join(expr,
 * "\n").
 *
 * If **{idvar}** is present and not empty, it is taken as the name
 * of a variable and a **{serverid}** for later use with
 * `remote_read()` is stored there.
 *
 * If **{timeout}** is given the read times out after this many
 * seconds.  Otherwise a timeout of 600 seconds is used.
 *
 * See also `clientserver` `RemoteReply`.
 * This function is not available in the `sandbox`.
 * *only available when compiled with the `+clientserver` feature*
 * Note: Any errors will cause a local error message to be issued
 * and the result will be the empty string.
 *
 * Variables will be evaluated in the global namespace,
 * independent of a function currently being active.  Except
 * when in debug mode, then local function variables and
 * arguments can be evaluated.
 *
 * Examples:
 *
 *     :echo remote_expr("gvim", "2+2")
 *     :echo remote_expr("gvim1", "b:current_syntax")
 *
 * Can also be used as a `method`:
 *
 *     ServerName()->remote_expr(expr)
 */
export function remote_expr(
  denops: Denops,
  server: unknown,
  string: unknown,
  idvar?: unknown,
  timeout?: unknown,
): Promise<string>;
export function remote_expr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_expr", ...args);
}

/**
 * Move the Vim server with the name **{server}** to the foreground.
 * The **{server}** argument is a string, also see `{server}`.
 * This works like:
 *
 *     remote_expr({server}, "foreground()")
 *
 * Except that on Win32 systems the client does the work, to work
 * around the problem that the OS doesn't always allow the server
 * to bring itself to the foreground.
 * Note: This does not restore the window if it was minimized,
 * like foreground() does.
 * This function is not available in the `sandbox`.
 *
 * Can also be used as a `method`:
 *
 *     ServerName()->remote_foreground()
 *
 * *only in the Win32, Motif and GTK GUI versions and the
 * Win32 console version*
 */
export function remote_foreground(
  denops: Denops,
  server: unknown,
): Promise<number>;
export function remote_foreground(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_foreground", ...args);
}

/**
 * Returns a positive number if there are available strings
 * from **{serverid}**.  Copies any reply string into the variable
 * **{retvar}** if specified.  **{retvar}** must be a string with the
 * name of a variable.
 * Returns zero if none are available.
 * Returns -1 if something is wrong.
 * See also `clientserver`.
 * This function is not available in the `sandbox`.
 * *only available when compiled with the `+clientserver` feature*
 * Examples:
 *
 *     :let repl = ""
 *     :echo "PEEK: " .. remote_peek(id, "repl") .. ": " .. repl
 *
 * Can also be used as a `method`:
 *
 *     ServerId()->remote_peek()
 */
export function remote_peek(
  denops: Denops,
  serverid: unknown,
  retvar?: unknown,
): Promise<number>;
export function remote_peek(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_peek", ...args);
}

/**
 * Return the oldest available reply from **{serverid}** and consume
 * it.  Unless a **{timeout}** in seconds is given, it blocks until a
 * reply is available.  Returns an empty string, if a reply is
 * not available or on error.
 * See also `clientserver`.
 * This function is not available in the `sandbox`.
 * *only available when compiled with the `+clientserver` feature*
 * Example:
 *
 *     :echo remote_read(id)
 *
 * Can also be used as a `method`:
 *
 *     ServerId()->remote_read()
 */
export function remote_read(
  denops: Denops,
  serverid: unknown,
  timeout: unknown,
): Promise<string>;
export function remote_read(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_read", ...args);
}

/**
 * Send the **{string}** to **{server}**.  The **{server}** argument is a
 * string, also see `{server}`.
 *
 * The string is sent as input keys and the function returns
 * immediately.  At the Vim server the keys are not mapped
 * `:map`.
 *
 * If **{idvar}** is present, it is taken as the name of a variable
 * and a **{serverid}** for later use with remote_read() is stored
 * there.
 *
 * See also `clientserver` `RemoteReply`.
 * This function is not available in the `sandbox`.
 * *only available when compiled with the `+clientserver` feature*
 *
 * Note: Any errors will be reported in the server and may mess
 * up the display.
 * Examples:
 *
 *     :echo remote_send("gvim", ":DropAndReply " .. file, "serverid") ..
 *      \ remote_read(serverid)
 *
 *     :autocmd NONE RemoteReply *
 *      \ echo remote_read(expand("<amatch>"))
 *     :echo remote_send("gvim", ":sleep 10 | echo " ..
 *      \ 'server2client(expand("<client>"), "HELLO")<CR>')
 *
 * Can also be used as a `method`:
 *
 *     ServerName()->remote_send(keys)
 */
export function remote_send(
  denops: Denops,
  server: unknown,
  string: unknown,
  idvar?: unknown,
): Promise<string>;
export function remote_send(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_send", ...args);
}

/**
 * Become the server **{name}**.  **{name}** must be a non-empty string.
 * This fails if already running as a server, when `v:servername`
 * is not empty.
 *
 * Can also be used as a `method`:
 *
 *     ServerName()->remote_startserver()
 *
 * *only available when compiled with the `+clientserver` feature*
 */
export function remote_startserver(
  denops: Denops,
  name: unknown,
): Promise<void>;
export function remote_startserver(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("remote_startserver", ...args);
}

/**
 * Send a reply string to **{clientid}**.  The most recent **{clientid}**
 * that sent a string can be retrieved with expand(`"<client>"`).
 * *only available when compiled with the `+clientserver` feature*
 * Returns zero for success, -1 for failure.
 * Note:
 * This id has to be stored before the next command can be
 * received.  I.e. before returning from the received command and
 * before calling any commands that waits for input.
 * See also `clientserver`.
 * Example:
 *
 *     :echo server2client(expand("<client>"), "HELLO")
 *
 * Can also be used as a `method`:
 *
 *     GetClientId()->server2client(string)
 */
export function server2client(
  denops: Denops,
  clientid: unknown,
  string: unknown,
): Promise<number>;
export function server2client(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("server2client", ...args);
}

/**
 * Similar to using a `slice` "expr[start : end]", but "end" is
 * used exclusive.  And for a string the indexes are used as
 * character indexes instead of byte indexes, like in
 * `vim9script`.  Also, composing characters are not counted.
 * When **{end}** is omitted the slice continues to the last item.
 * When **{end}** is -1 the last item is omitted.
 * Returns an empty value if **{start}** or **{end}** are invalid.
 *
 * Can also be used as a `method`:
 *
 *     GetList()->slice(offset)
 */
export function slice(
  denops: Denops,
  expr: unknown,
  start: unknown,
  end?: unknown,
): Promise<string | unknown[] | unknown>;
export function slice(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("slice", ...args);
}

/**
 * Stop playing all sounds.
 *
 * On some Linux systems you may need the libcanberra-pulse
 * package, otherwise sound may not stop.
 *
 * *only available when compiled with the `+sound` feature*
 */
export function sound_clear(denops: Denops): Promise<void>;
export function sound_clear(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_clear", ...args);
}

/**
 * Play a sound identified by **{name}**.  Which event names are
 * supported depends on the system.  Often the XDG sound names
 * are used.  On Ubuntu they may be found in
 * /usr/share/sounds/freedesktop/stereo.  Example:
 *
 *     call sound_playevent('bell')
 *
 * On MS-Windows, **{name}** can be SystemAsterisk, SystemDefault,
 * SystemExclamation, SystemExit, SystemHand, SystemQuestion,
 * SystemStart, SystemWelcome, etc.
 * On macOS, **{name}** refers to files located in
 * /System/Library/Sounds (e.g. "Tink").  It will also work for
 * custom installed sounds in folders like `~/Library/Sounds`.
 *
 * When **{callback}** is specified it is invoked when the sound is
 * finished.  The first argument is the sound ID, the second
 * argument is the status:
 *         0       sound was played to the end
 *         1       sound was interrupted
 *         2       error occurred after sound started
 * Example:
 *
 *     func Callback(id, status)
 *       echomsg "sound " .. a:id .. " finished with " .. a:status
 *     endfunc
 *     call sound_playevent('bell', 'Callback')
 *
 * MS-Windows: **{callback}** doesn't work for this function.
 *
 * Returns the sound ID, which can be passed to `sound_stop()`.
 * Returns zero if the sound could not be played.
 *
 * Can also be used as a `method`:
 *
 *     GetSoundName()->sound_playevent()
 *
 * *only available when compiled with the `+sound` feature*
 */
export function sound_playevent(
  denops: Denops,
  name: unknown,
  callback?: unknown,
): Promise<number>;
export function sound_playevent(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_playevent", ...args);
}

/**
 * Like `sound_playevent()` but play sound file **{path}**.  **{path}**
 * must be a full path.  On Ubuntu you may find files to play
 * with this command:
 *
 *     :!find /usr/share/sounds -type f | grep -v index.theme
 *
 * Can also be used as a `method`:
 *
 *     GetSoundPath()->sound_playfile()
 *
 * *only available when compiled with the `+sound` feature*
 */
export function sound_playfile(
  denops: Denops,
  path: unknown,
  callback?: unknown,
): Promise<number>;
export function sound_playfile(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_playfile", ...args);
}

/**
 * Stop playing sound **{id}**.  **{id}** must be previously returned by
 * `sound_playevent()` or `sound_playfile()`.
 *
 * On some Linux systems you may need the libcanberra-pulse
 * package, otherwise sound may not stop.
 *
 * On MS-Windows, this does not work for event sound started by
 * `sound_playevent()`. To stop event sounds, use `sound_clear()`.
 *
 * Can also be used as a `method`:
 *
 *     soundid->sound_stop()
 *
 * *only available when compiled with the `+sound` feature*
 */
export function sound_stop(denops: Denops, id: unknown): Promise<void>;
export function sound_stop(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sound_stop", ...args);
}

/**
 * Return a string which contains characters indicating the
 * current state.  Mostly useful in callbacks that want to do
 * work that may not always be safe.  Roughly this works like:
 * - callback uses state() to check if work is safe to do.
 *   Yes: then do it right away.
 *   No:  add to work queue and add a `SafeState` and/or
 *        `SafeStateAgain` autocommand (`SafeState` triggers at
 *        toplevel, `SafeStateAgain` triggers after handling
 *        messages and callbacks).
 * - When SafeState or SafeStateAgain is triggered and executes
 *   your autocommand, check with `state()` if the work can be
 *   done now, and if yes remove it from the queue and execute.
 *   Remove the autocommand if the queue is now empty.
 * Also see `mode()`.
 *
 * When **{what}** is given only characters in this string will be
 * added.  E.g, this checks if the screen has scrolled:
 *
 *     if state('s') == ''
 *        " screen has not scrolled
 *
 * These characters indicate the state, generally indicating that
 * something is busy:
 *     m   halfway a mapping, :normal command, feedkeys() or
 *         stuffed command
 *     o   operator pending, e.g. after `d`
 *     a   Insert mode autocomplete active
 *     x   executing an autocommand
 *     w   blocked on waiting, e.g. ch_evalexpr(), ch_read() and
 *         ch_readraw() when reading json
 *     S   not triggering SafeState or SafeStateAgain, e.g. after
 *         `f` or a count
 *     c   callback invoked, including timer (repeats for
 *         recursiveness up to "ccc")
 *     s   screen has scrolled for messages
 */
export function state(denops: Denops, what?: unknown): Promise<string>;
export function state(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("state", ...args);
}

/**
 * The result is a Number, which is the number of UTF-16 code
 * units in String **{string}** (after converting it to UTF-16).
 *
 * When **{countcc}** is TRUE, composing characters are counted
 * separately.
 * When **{countcc}** is omitted or FALSE, composing characters are
 * ignored.
 *
 * Returns zero on error.
 *
 * Also see `strlen()` and `strcharlen()`.
 * Examples:
 *
 *     echo strutf16len('a')               returns 1
 *     echo strutf16len('©')               returns 1
 *     echo strutf16len('😊')               returns 2
 *     echo strutf16len('ą́')             returns 1
 *     echo strutf16len('ą́', v:true)     returns 3
 *
 * Can also be used as a `method`:
 *
 *     GetText()->strutf16len()
 */
export function strutf16len(
  denops: Denops,
  string: unknown,
  countcc?: unknown,
): Promise<number>;
export function strutf16len(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("strutf16len", ...args);
}

/**
 * Returns a list of swap file names, like what "vim -r" shows.
 * See the `-r` command argument.  The 'directory' option is used
 * for the directories to inspect.  If you only want to get a
 * list of swap files in the current directory then temporarily
 * set 'directory' to a dot:
 *
 *     let save_dir = &directory
 *     let &directory = '.'
 *     let swapfiles = swapfilelist()
 *     let &directory = save_dir
 */
export function swapfilelist(denops: Denops): Promise<unknown[]>;
export function swapfilelist(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("swapfilelist", ...args);
}

/**
 * Returns a `Dictionary` with properties of the terminal that Vim
 * detected from the response to `t_RV` request.  See
 * `v:termresponse` for the response itself.  If `v:termresponse`
 * is empty most values here will be 'u' for unknown.
 *    cursor_style         whether sending `t_RS` works  **
 *    cursor_blink_mode    whether sending `t_RC` works  **
 *    underline_rgb        whether `t_8u` works **
 *    mouse                mouse type supported
 *    kitty                whether Kitty terminal was detected
 *
 * ** value 'u' for unknown, 'y' for yes, 'n' for no
 *
 * If the `+termresponse` feature is missing then the result is
 * an empty dictionary.
 *
 * If "cursor_style" is 'y' then `t_RS` will be sent to request the
 * current cursor style.
 * If "cursor_blink_mode" is 'y' then `t_RC` will be sent to
 * request the cursor blink status.
 * "cursor_style" and "cursor_blink_mode" are also set if `t_u7`
 * is not empty, Vim will detect the working of sending `t_RS`
 * and `t_RC` on startup.
 *
 * When "underline_rgb" is not 'y', then `t_8u` will be made empty.
 * This avoids sending it to xterm, which would clear the colors.
 *
 * For "mouse" the value 'u' is unknown
 *
 * Also see:
 * - 'ambiwidth' - detected by using `t_u7`.
 * - `v:termstyleresp` and `v:termblinkresp` for the response to
 *   `t_RS` and `t_RC`.
 */
export function terminalprops(denops: Denops): Promise<Record<string, unknown>>;
export function terminalprops(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("terminalprops", ...args);
}

/**
 * Return a string representation of the type of **{expr}**.
 * Example:
 *
 *     echo typename([1, 2, 3])
 *
 *         list<number>
 */
export function typename(denops: Denops, expr: unknown): Promise<string>;
export function typename(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("typename", ...args);
}

/**
 * Same as `charidx()` but returns the UTF-16 code unit index of
 * the byte at **{idx}** in **{string}** (after converting it to UTF-16).
 *
 * When **{charidx}** is present and TRUE, **{idx}** is used as the
 * character index in the String **{string}** instead of as the byte
 * index.
 * An **{idx}** in the middle of a UTF-8 sequence is rounded
 * downwards to the beginning of that sequence.
 *
 * Returns -1 if the arguments are invalid or if there are less
 * than **{idx}** bytes in **{string}**. If there are exactly **{idx}** bytes
 * the length of the string in UTF-16 code units is returned.
 *
 * See `byteidx()` and `byteidxcomp()` for getting the byte index
 * from the UTF-16 index and `charidx()` for getting the
 * character index from the UTF-16 index.
 * Refer to `string-offset-encoding` for more information.
 * Examples:
 *
 *     echo utf16idx('a😊😊', 3) returns 2
 *     echo utf16idx('a😊😊', 7) returns 4
 *     echo utf16idx('a😊😊', 1, 0, 1)   returns 2
 *     echo utf16idx('a😊😊', 2, 0, 1)   returns 4
 *     echo utf16idx('aą́c', 6)               returns 2
 *     echo utf16idx('aą́c', 6, 1)    returns 4
 *     echo utf16idx('a😊😊', 9) returns -1
 *
 * Can also be used as a `method`:
 *
 *     GetName()->utf16idx(idx)
 */
export function utf16idx(
  denops: Denops,
  string: unknown,
  idx: unknown,
  countcc?: unknown,
  charidx?: unknown,
): Promise<number>;
export function utf16idx(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("utf16idx", ...args);
}

/**
 * Return non-zero when there is something to read from **{handle}**.
 * **{handle}** can be a Channel or a Job that has a Channel.
 *
 * This is useful to read from a channel at a convenient time,
 * e.g. from a timer.
 *
 * Note that messages are dropped when the channel does not have
 * a callback.  Add a close callback to avoid that.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_canread()
 */
export function ch_canread(denops: Denops, handle: unknown): Promise<number>;
export function ch_canread(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_canread", ...args);
}

/**
 * Close **{handle}**.  See `channel-close`.
 * **{handle}** can be a Channel or a Job that has a Channel.
 * A close callback is not invoked.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_close()
 */
export function ch_close(denops: Denops, handle: unknown): Promise<void>;
export function ch_close(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ch_close", ...args);
}

/**
 * Close the "in" part of **{handle}**.  See `channel-close-in`.
 * **{handle}** can be a Channel or a Job that has a Channel.
 * A close callback is not invoked.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_close_in()
 */
export function ch_close_in(denops: Denops, handle: unknown): Promise<void>;
export function ch_close_in(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_close_in", ...args);
}

/**
 * Send **{expr}** over **{handle}**.  The **{expr}** is encoded
 * according to the type of channel.  The function cannot be used
 * with a raw channel.  See `channel-use`.
 * **{handle}** can be a Channel or a Job that has a Channel.
 * When using the "lsp" channel mode, **{expr}** must be a `Dict`.
 *
 * **{options}** must be a Dictionary.  It must not have a "callback"
 * entry.  It can have a "timeout" entry to specify the timeout
 * for this specific request.
 *
 * ch_evalexpr() waits for a response and returns the decoded
 * expression.  When there is an error or timeout it returns an
 * empty `String` or, when using the "lsp" channel mode, returns an
 * empty `Dict`.
 *
 * Note that while waiting for the response, Vim handles other
 * messages.  You need to make sure this doesn't cause trouble.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_evalexpr(expr)
 */
export function ch_evalexpr(
  denops: Denops,
  handle: unknown,
  expr: unknown,
  options?: unknown,
): Promise<unknown>;
export function ch_evalexpr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_evalexpr", ...args);
}

/**
 * Send **{string}** over **{handle}**.
 * **{handle}** can be a Channel or a Job that has a Channel.
 *
 * Works like `ch_evalexpr()`, but does not encode the request or
 * decode the response.  The caller is responsible for the
 * correct contents.  Also does not add a newline for a channel
 * in NL mode, the caller must do that.  The NL in the response
 * is removed.
 * Note that Vim does not know when the text received on a raw
 * channel is complete, it may only return the first part and you
 * need to use `ch_readraw()` to fetch the rest.
 * See `channel-use`.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_evalraw(rawstring)
 */
export function ch_evalraw(
  denops: Denops,
  handle: unknown,
  string: unknown,
  options?: unknown,
): Promise<unknown>;
export function ch_evalraw(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_evalraw", ...args);
}

/**
 * Get the buffer number that **{handle}** is using for String **{what}**.
 * **{handle}** can be a Channel or a Job that has a Channel.
 * **{what}** can be "err" for stderr, "out" for stdout or empty for
 * socket output.
 * Returns -1 when there is no buffer.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_getbufnr(what)
 */
export function ch_getbufnr(
  denops: Denops,
  handle: unknown,
  what: unknown,
): Promise<number>;
export function ch_getbufnr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_getbufnr", ...args);
}

/**
 * Get the Job associated with **{channel}**.
 * If there is no job calling `job_status()` on the returned Job
 * will result in "fail".
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_getjob()
 */
export function ch_getjob(denops: Denops, channel: unknown): Promise<unknown>;
export function ch_getjob(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_getjob", ...args);
}

/**
 * Returns a Dictionary with information about **{handle}**.  The
 * items are:
 *    "id"           number of the channel
 *    "status"       "open", "buffered" or "closed", like
 *                   ch_status()
 * When opened with ch_open():
 *    "hostname"     the hostname of the address
 *    "port"         the port of the address
 *    "path"         the path of the Unix-domain socket
 *    "sock_status"  "open" or "closed"
 *    "sock_mode"    "NL", "RAW", "JSON" or "JS"
 *    "sock_io"      "socket"
 *    "sock_timeout" timeout in msec
 *
 * Note that "path" is only present for Unix-domain sockets, for
 * regular ones "hostname" and "port" are present instead.
 *
 * When opened with job_start():
 *    "out_status"   "open", "buffered" or "closed"
 *    "out_mode"     "NL", "RAW", "JSON" or "JS"
 *    "out_io"       "null", "pipe", "file" or "buffer"
 *    "out_timeout"  timeout in msec
 *    "err_status"   "open", "buffered" or "closed"
 *    "err_mode"     "NL", "RAW", "JSON" or "JS"
 *    "err_io"       "out", "null", "pipe", "file" or "buffer"
 *    "err_timeout"  timeout in msec
 *    "in_status"    "open" or "closed"
 *    "in_mode"      "NL", "RAW", "JSON", "JS" or "LSP"
 *    "in_io"        "null", "pipe", "file" or "buffer"
 *    "in_timeout"   timeout in msec
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_info()
 */
export function ch_info(denops: Denops, handle: unknown): Promise<string>;
export function ch_info(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ch_info", ...args);
}

/**
 * Write String **{msg}** in the channel log file, if it was opened
 * with `ch_logfile()`.
 * The text "ch_log():" is prepended to the message to make clear
 * it came from this function call and make it easier to find in
 * the log file.
 * When **{handle}** is passed the channel number is used for the
 * message.
 * **{handle}** can be a Channel or a Job that has a Channel.  The
 * Channel must be open for the channel number to be used.
 *
 * Can also be used as a `method`:
 *
 *     'did something'->ch_log()
 */
export function ch_log(
  denops: Denops,
  msg: unknown,
  handle?: unknown,
): Promise<void>;
export function ch_log(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ch_log", ...args);
}

/**
 * Start logging channel activity to **{fname}**.
 * When **{fname}** is an empty string: stop logging.
 *
 * When **{mode}** is omitted or contains "a" or is "o" then append
 * to the file.
 * When **{mode}** contains "w" and not "a" start with an empty file.
 * When **{mode}** contains "o" then log all terminal output.
 * Otherwise only some interesting terminal output is logged.
 *
 * Use `ch_log()` to write log messages.  The file is flushed
 * after every message, on Unix you can use "tail -f" to see what
 * is going on in real time.
 *
 * To enable the log very early, to see what is received from a
 * terminal during startup, use `--log` (this uses mode "ao"):
 *
 *     vim --log logfile
 *
 * This function is not available in the `sandbox`.
 * NOTE: the channel communication is stored in the file, be
 * aware that this may contain confidential and privacy sensitive
 * information, e.g. a password you type in a terminal window.
 *
 * Can also be used as a `method`:
 *
 *     'logfile'->ch_logfile('w')
 */
export function ch_logfile(
  denops: Denops,
  fname: unknown,
  mode?: unknown,
): Promise<void>;
export function ch_logfile(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_logfile", ...args);
}

/**
 * Open a channel to **{address}**.  See `channel`.
 * Returns a Channel.  Use `ch_status()` to check for failure.
 *
 * **{address}** is a String, see `channel-address` for the possible
 * accepted forms.
 *
 * If **{options}** is given it must be a `Dictionary`.
 * See `channel-open-options`.
 *
 * Can also be used as a `method`:
 *
 *     GetAddress()->ch_open()
 */
export function ch_open(
  denops: Denops,
  address: unknown,
  options?: unknown,
): Promise<unknown>;
export function ch_open(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ch_open", ...args);
}

/**
 * Read from **{handle}** and return the received message.
 * **{handle}** can be a Channel or a Job that has a Channel.
 * For a NL channel this waits for a NL to arrive, except when
 * there is nothing more to read (channel was closed).
 * See `channel-more`.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_read()
 */
export function ch_read(
  denops: Denops,
  handle: unknown,
  options?: unknown,
): Promise<string>;
export function ch_read(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ch_read", ...args);
}

/**
 * Like ch_read() but reads binary data and returns a `Blob`.
 * See `channel-more`.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_readblob()
 */
export function ch_readblob(
  denops: Denops,
  handle: unknown,
  options?: unknown,
): Promise<unknown>;
export function ch_readblob(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_readblob", ...args);
}

/**
 * Like ch_read() but for a JS and JSON channel does not decode
 * the message.  For a NL channel it does not block waiting for
 * the NL to arrive, but otherwise works like ch_read().
 * See `channel-more`.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_readraw()
 */
export function ch_readraw(
  denops: Denops,
  handle: unknown,
  options?: unknown,
): Promise<string>;
export function ch_readraw(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_readraw", ...args);
}

/**
 * Send **{expr}** over **{handle}**.  The **{expr}** is encoded
 * according to the type of channel.  The function cannot be used
 * with a raw channel.
 * See `channel-use`.
 * **{handle}** can be a Channel or a Job that has a Channel.
 * When using the "lsp" channel mode, **{expr}** must be a `Dict`.
 *
 * If the channel mode is "lsp", then returns a Dict. Otherwise
 * returns an empty String.  If the "callback" item is present in
 * **{options}**, then the returned Dict contains the ID of the
 * request message.  The ID can be used to send a cancellation
 * request to the LSP server (if needed).  Returns an empty Dict
 * on error.
 *
 * If a response message is not expected for **{expr}**, then don't
 * specify the "callback" item in **{options}**.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_sendexpr(expr)
 */
export function ch_sendexpr(
  denops: Denops,
  handle: unknown,
  expr: unknown,
  options?: unknown,
): Promise<unknown>;
export function ch_sendexpr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_sendexpr", ...args);
}

/**
 * Send `String` or `Blob` **{expr}** over **{handle}**.
 * Works like `ch_sendexpr()`, but does not encode the request or
 * decode the response.  The caller is responsible for the
 * correct contents.  Also does not add a newline for a channel
 * in NL mode, the caller must do that.  The NL in the response
 * is removed.
 * See `channel-use`.
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_sendraw(rawexpr)
 */
export function ch_sendraw(
  denops: Denops,
  handle: unknown,
  expr: unknown,
  options?: unknown,
): Promise<unknown>;
export function ch_sendraw(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_sendraw", ...args);
}

/**
 * Set options on **{handle}**:
 *         "callback"      the channel callback
 *         "timeout"       default read timeout in msec
 *         "mode"          mode for the whole channel
 * See `ch_open()` for more explanation.
 * **{handle}** can be a Channel or a Job that has a Channel.
 *
 * Note that changing the mode may cause queued messages to be
 * lost.
 *
 * These options cannot be changed:
 *         "waittime"      only applies to `ch_open()`
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_setoptions(options)
 */
export function ch_setoptions(
  denops: Denops,
  handle: unknown,
  options: unknown,
): Promise<void>;
export function ch_setoptions(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_setoptions", ...args);
}

/**
 * Return the status of **{handle}**:
 *         "fail"          failed to open the channel
 *         "open"          channel can be used
 *         "buffered"      channel can be read, not written to
 *         "closed"        channel can not be used
 * **{handle}** can be a Channel or a Job that has a Channel.
 * "buffered" is used when the channel was closed but there is
 * still data that can be obtained with `ch_read()`.
 *
 * If **{options}** is given it can contain a "part" entry to specify
 * the part of the channel to return the status for: "out" or
 * "err".  For example, to get the error status:
 *
 *     ch_status(job, {"part": "err"})
 *
 * Can also be used as a `method`:
 *
 *     GetChannel()->ch_status()
 */
export function ch_status(
  denops: Denops,
  handle: unknown,
  options?: unknown,
): Promise<string>;
export function ch_status(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("ch_status", ...args);
}

/**
 * Get the channel handle that **{job}** is using.
 * To check if the job has no channel:
 *
 *     if string(job_getchannel(job)) == 'channel fail'
 *
 * Can also be used as a `method`:
 *
 *     GetJob()->job_getchannel()
 */
export function job_getchannel(denops: Denops, job: unknown): Promise<unknown>;
export function job_getchannel(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("job_getchannel", ...args);
}

/**
 * Returns a Dictionary with information about **{job}**:
 *    "status"     what `job_status()` returns
 *    "channel"    what `job_getchannel()` returns
 *    "cmd"        List of command arguments used to start the job
 *    "process"    process ID
 *    "tty_in"     terminal input name, empty when none
 *    "tty_out"    terminal output name, empty when none
 *    "exitval"    only valid when "status" is "dead"
 *    "exit_cb"    function to be called on exit
 *    "stoponexit" `job-stoponexit`
 *
 *    Only in Unix:
 *    "termsig"    the signal which terminated the process
 *                 (See `job_stop()` for the values)
 *                 only valid when "status" is "dead"
 *
 *    Only in MS-Windows:
 *    "tty_type"   Type of virtual console in use.
 *                 Values are "winpty" or "conpty".
 *                 See 'termwintype'.
 *
 * Without any arguments, returns a List with all Job objects.
 *
 * Can also be used as a `method`:
 *
 *     GetJob()->job_info()
 */
export function job_info(
  denops: Denops,
  job?: unknown,
): Promise<Record<string, unknown>>;
export function job_info(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("job_info", ...args);
}

/**
 * Change options for **{job}**.  Supported are:
 *    "stoponexit" `job-stoponexit`
 *    "exit_cb"    `job-exit_cb`
 *
 * Can also be used as a `method`:
 *
 *     GetJob()->job_setoptions(options)
 */
export function job_setoptions(
  denops: Denops,
  job: unknown,
  options: unknown,
): Promise<void>;
export function job_setoptions(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("job_setoptions", ...args);
}

/**
 * Start a job and return a Job object.  Unlike `system()` and
 * `:!cmd` this does not wait for the job to finish.
 * To start a job in a terminal window see `term_start()`.
 *
 * If the job fails to start then `job_status()` on the returned
 * Job object results in "fail" and none of the callbacks will be
 * invoked.
 *
 * **{command}** can be a String.  This works best on MS-Windows.  On
 * Unix it is split up in white-separated parts to be passed to
 * execvp().  Arguments in double quotes can contain white space.
 *
 * **{command}** can be a List, where the first item is the executable
 * and further items are the arguments.  All items are converted
 * to String.  This works best on Unix.
 *
 * On MS-Windows, job_start() makes a GUI application hidden. If
 * you want to show it, use `:!start` instead.
 *
 * The command is executed directly, not through a shell, the
 * 'shell' option is not used.  To use the shell:
 *
 *     let job = job_start(["/bin/sh", "-c", "echo hello"])
 *
 * Or:
 *
 *     let job = job_start('/bin/sh -c "echo hello"')
 *
 * Note that this will start two processes, the shell and the
 * command it executes.  If you don't want this use the "exec"
 * shell command.
 *
 * On Unix $PATH is used to search for the executable only when
 * the command does not contain a slash.
 *
 * The job will use the same terminal as Vim.  If it reads from
 * stdin the job and Vim will be fighting over input, that
 * doesn't work.  Redirect stdin and stdout to avoid problems:
 *
 *     let job = job_start(['sh', '-c', "myserver </dev/null >/dev/null"])
 *
 * The returned Job object can be used to get the status with
 * `job_status()` and stop the job with `job_stop()`.
 *
 * Note that the job object will be deleted if there are no
 * references to it.  This closes the stdin and stderr, which may
 * cause the job to fail with an error.  To avoid this keep a
 * reference to the job.  Thus instead of:
 *
 *     call job_start('my-command')
 *
 * use:
 *
 *     let myjob = job_start('my-command')
 *
 * and unlet "myjob" once the job is not needed or is past the
 * point where it would fail (e.g. when it prints a message on
 * startup).  Keep in mind that variables local to a function
 * will cease to exist if the function returns.  Use a
 * script-local variable if needed:
 *
 *     let s:myjob = job_start('my-command')
 *
 * **{options}** must be a Dictionary.  It can contain many optional
 * items, see `job-options`.
 *
 * Can also be used as a `method`:
 *
 *     BuildCommand()->job_start()
 */
export function job_start(
  denops: Denops,
  command: unknown,
  options?: unknown,
): Promise<unknown>;
export function job_start(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("job_start", ...args);
}

/**
 * Returns a String with the status of **{job}**:
 *         "run"   job is running
 *         "fail"  job failed to start
 *         "dead"  job died or was stopped after running
 *
 * On Unix a non-existing command results in "dead" instead of
 * "fail", because a fork happens before the failure can be
 * detected.
 *
 * If in Vim9 script a variable is declared with type "job" but
 * never assigned to, passing that variable to job_status()
 * returns "fail".
 *
 * If an exit callback was set with the "exit_cb" option and the
 * job is now detected to be "dead" the callback will be invoked.
 *
 * For more information see `job_info()`.
 *
 * Can also be used as a `method`:
 *
 *     GetJob()->job_status()
 */
export function job_status(denops: Denops, job: unknown): Promise<string>;
export function job_status(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("job_status", ...args);
}

/**
 * Stop the **{job}**.  This can also be used to signal the job.
 *
 * When **{how}** is omitted or is "term" the job will be terminated.
 * For Unix SIGTERM is sent.  On MS-Windows the job will be
 * terminated forcedly (there is no "gentle" way).
 * This goes to the process group, thus children may also be
 * affected.
 *
 * Effect for Unix:
 *         "term"   SIGTERM (default)
 *         "hup"    SIGHUP
 *         "quit"   SIGQUIT
 *         "int"    SIGINT
 *         "kill"   SIGKILL (strongest way to stop)
 *         number   signal with that number
 *
 * Effect for MS-Windows:
 *         "term"   terminate process forcedly (default)
 *         "hup"    CTRL_BREAK
 *         "quit"   CTRL_BREAK
 *         "int"    CTRL_C
 *         "kill"   terminate process forcedly
 *         Others   CTRL_BREAK
 *
 * On Unix the signal is sent to the process group.  This means
 * that when the job is "sh -c command" it affects both the shell
 * and the command.
 *
 * The result is a Number: 1 if the operation could be executed,
 * 0 if "how" is not supported on the system.
 * Note that even when the operation was executed, whether the
 * job was actually stopped needs to be checked with
 * `job_status()`.
 *
 * If the status of the job is "dead", the signal will not be
 * sent.  This is to avoid to stop the wrong job (esp. on Unix,
 * where process numbers are recycled).
 *
 * When using "kill" Vim will assume the job will die and close
 * the channel.
 *
 * Can also be used as a `method`:
 *
 *     GetJob()->job_stop()
 */
export function job_stop(
  denops: Denops,
  job: unknown,
  how?: unknown,
): Promise<number>;
export function job_stop(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("job_stop", ...args);
}

/**
 * Open a new window displaying the difference between the two
 * files.  The files must have been created with
 * `term_dumpwrite()`.
 * Returns the buffer number or zero when the diff fails.
 * Also see `terminal-diff`.
 * NOTE: this does not work with double-width characters yet.
 *
 * The top part of the buffer contains the contents of the first
 * file, the bottom part of the buffer contains the contents of
 * the second file.  The middle part shows the differences.
 * The parts are separated by a line of equals.
 *
 * If the **{options}** argument is present, it must be a Dict with
 * these possible members:
 *    "term_name"       name to use for the buffer name, instead
 *                      of the first file name.
 *    "term_rows"       vertical size to use for the terminal,
 *                      instead of using 'termwinsize', but
 *                      respecting the minimal size
 *    "term_cols"       horizontal size to use for the terminal,
 *                      instead of using 'termwinsize', but
 *                      respecting the minimal size
 *    "vertical"        split the window vertically
 *    "curwin"          use the current window, do not split the
 *                      window; fails if the current buffer
 *                      cannot be `abandon`ed
 *    "bufnr"           do not create a new buffer, use the
 *                      existing buffer "bufnr".  This buffer
 *                      must have been previously created with
 *                      term_dumpdiff() or term_dumpload() and
 *                      visible in a window.
 *    "norestore"       do not add the terminal window to a
 *                      session file
 *
 * Each character in the middle part indicates a difference. If
 * there are multiple differences only the first in this list is
 * used:
 *         X       different character
 *         w       different width
 *         f       different foreground color
 *         b       different background color
 *         a       different attribute
 *         +       missing position in first file
 *         -       missing position in second file
 *         >       cursor position in first file, not in second
 *         <       cursor position in second file, not in first
 *
 * Using the "s" key the top and bottom parts are swapped.  This
 * makes it easy to spot a difference.
 *
 * Can also be used as a `method`:
 *
 *     GetFilename()->term_dumpdiff(otherfile)
 */
export function term_dumpdiff(
  denops: Denops,
  filename1: unknown,
  filename2: unknown,
  options?: unknown,
): Promise<number>;
export function term_dumpdiff(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_dumpdiff", ...args);
}

/**
 * Open a new window displaying the contents of **{filename}**
 * The file must have been created with `term_dumpwrite()`.
 * Returns the buffer number or zero when it fails.
 * Also see `terminal-diff`.
 *
 * For **{options}** see `term_dumpdiff()`.
 *
 * Can also be used as a `method`:
 *
 *     GetFilename()->term_dumpload()
 */
export function term_dumpload(
  denops: Denops,
  filename: unknown,
  options?: unknown,
): Promise<number>;
export function term_dumpload(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_dumpload", ...args);
}

/**
 * Dump the contents of the terminal screen of **{buf}** in the file
 * **{filename}**.  This uses a format that can be used with
 * `term_dumpload()` and `term_dumpdiff()`.
 * If the job in the terminal already finished an error is given:
 *
 * If **{filename}** already exists an error is given:
 * Also see `terminal-diff`.
 *
 * **{options}** is a dictionary with these optional entries:
 *         "rows"          maximum number of rows to dump
 *         "columns"       maximum number of columns to dump
 *
 * Can also be used as a `method`, the base is used for the file
 * name:
 *
 *     GetFilename()->term_dumpwrite(bufnr)
 */
export function term_dumpwrite(
  denops: Denops,
  buf: unknown,
  filename: unknown,
  options?: unknown,
): Promise<void>;
export function term_dumpwrite(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_dumpwrite", ...args);
}

/**
 * Returns 1 if the terminal of **{buf}** is using the alternate
 * screen.
 * **{buf}** is used as with `term_getsize()`.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getaltscreen()
 */
export function term_getaltscreen(
  denops: Denops,
  buf: unknown,
): Promise<number>;
export function term_getaltscreen(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getaltscreen", ...args);
}

/**
 * Get the ANSI color palette in use by terminal **{buf}**.
 * Returns a List of length 16 where each element is a String
 * representing a color in hexadecimal "#rrggbb" format.
 * Also see `term_setansicolors()` and `g:terminal_ansi_colors`.
 * If neither was used returns the default colors.
 *
 * **{buf}** is used as with `term_getsize()`.  If the buffer does not
 * exist or is not a terminal window, an empty list is returned.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getansicolors()
 *
 * *only available when compiled with GUI enabled and/or the
 * `+termguicolors` feature*
 */
export function term_getansicolors(
  denops: Denops,
  buf: unknown,
): Promise<unknown[]>;
export function term_getansicolors(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getansicolors", ...args);
}

/**
 * Given **{attr}**, a value returned by term_scrape() in the "attr"
 * item, return whether **{what}** is on.  **{what}** can be one of:
 *         bold
 *         italic
 *         underline
 *         strike
 *         reverse
 *
 * Can also be used as a `method`:
 *
 *     GetAttr()->term_getattr()
 */
export function term_getattr(
  denops: Denops,
  attr: unknown,
  what: unknown,
): Promise<number>;
export function term_getattr(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getattr", ...args);
}

/**
 * Get the cursor position of terminal **{buf}**. Returns a list with
 * two numbers and a dictionary: [row, col, dict].
 *
 * "row" and "col" are one based, the first screen cell is row
 * 1, column 1.  This is the cursor position of the terminal
 * itself, not of the Vim window.
 *
 * "dict" can have these members:
 *    "visible"    one when the cursor is visible, zero when it
 *                 is hidden.
 *    "blink"      one when the cursor is blinking, zero when it
 *                 is not blinking.
 *    "shape"      1 for a block cursor, 2 for underline and 3
 *                 for a vertical bar.
 *    "color"      color of the cursor, e.g. "green"
 *
 * **{buf}** must be the buffer number of a terminal window. If the
 * buffer does not exist or is not a terminal window, an empty
 * list is returned.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getcursor()
 */
export function term_getcursor(
  denops: Denops,
  buf: unknown,
): Promise<unknown[]>;
export function term_getcursor(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getcursor", ...args);
}

/**
 * Get the Job associated with terminal window **{buf}**.
 * **{buf}** is used as with `term_getsize()`.
 * Returns `v:null` when there is no job.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getjob()
 */
export function term_getjob(denops: Denops, buf: unknown): Promise<unknown>;
export function term_getjob(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getjob", ...args);
}

/**
 * Get a line of text from the terminal window of **{buf}**.
 * **{buf}** is used as with `term_getsize()`.
 *
 * The first line has **{row}** one.  When **{row}** is "." the cursor
 * line is used.  When **{row}** is invalid an empty string is
 * returned.
 *
 * To get attributes of each character use `term_scrape()`.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getline(row)
 */
export function term_getline(
  denops: Denops,
  buf: unknown,
  row: unknown,
): Promise<string>;
export function term_getline(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getline", ...args);
}

/**
 * Return the number of lines that scrolled to above the top of
 * terminal **{buf}**.  This is the offset between the row number
 * used for `term_getline()` and `getline()`, so that:
 *
 *     term_getline(buf, N)
 *
 * is equal to:
 *
 *     getline(N + term_getscrolled(buf))
 *
 * (if that line exists).
 *
 * **{buf}** is used as with `term_getsize()`.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getscrolled()
 */
export function term_getscrolled(denops: Denops, buf: unknown): Promise<number>;
export function term_getscrolled(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getscrolled", ...args);
}

/**
 * Get the size of terminal **{buf}**. Returns a list with two
 * numbers: [rows, cols].  This is the size of the terminal, not
 * the window containing the terminal.
 *
 * **{buf}** must be the buffer number of a terminal window.  Use an
 * empty string for the current buffer.  If the buffer does not
 * exist or is not a terminal window, an empty list is returned.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getsize()
 */
export function term_getsize(denops: Denops, buf: unknown): Promise<unknown[]>;
export function term_getsize(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getsize", ...args);
}

/**
 * Get the status of terminal **{buf}**. This returns a String with
 * a comma-separated list of these items:
 *         running         job is running
 *         finished        job has finished
 *         normal          in Terminal-Normal mode
 * One of "running" or "finished" is always present.
 *
 * **{buf}** must be the buffer number of a terminal window. If the
 * buffer does not exist or is not a terminal window, an empty
 * string is returned.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_getstatus()
 */
export function term_getstatus(denops: Denops, buf: unknown): Promise<string>;
export function term_getstatus(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_getstatus", ...args);
}

/**
 * Get the title of terminal **{buf}**. This is the title that the
 * job in the terminal has set.
 *
 * **{buf}** must be the buffer number of a terminal window. If the
 * buffer does not exist or is not a terminal window, an empty
 * string is returned.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_gettitle()
 */
export function term_gettitle(denops: Denops, buf: unknown): Promise<string>;
export function term_gettitle(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_gettitle", ...args);
}

/**
 * Get the name of the controlling terminal associated with
 * terminal window **{buf}**.  **{buf}** is used as with `term_getsize()`.
 *
 * When **{input}** is omitted or 0, return the name for writing
 * (stdout). When **{input}** is 1 return the name for reading
 * (stdin). On UNIX, both return same name.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_gettty()
 */
export function term_gettty(
  denops: Denops,
  buf: unknown,
  input?: unknown,
): Promise<string>;
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
export function term_list(denops: Denops): Promise<unknown[]>;
export function term_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_list", ...args);
}

/**
 * Get the contents of **{row}** of terminal screen of **{buf}**.
 * For **{buf}** see `term_getsize()`.
 *
 * The first line has **{row}** one.  When **{row}** is "." the cursor
 * line is used.  When **{row}** is invalid an empty string is
 * returned.
 *
 * Return a List containing a Dict for each screen cell:
 *     "chars"     character(s) at the cell
 *     "fg"        foreground color as #rrggbb
 *     "bg"        background color as #rrggbb
 *     "attr"      attributes of the cell, use `term_getattr()`
 *                 to get the individual flags
 *     "width"     cell width: 1 or 2
 * For a double-width cell there is one item, thus the list can
 * be shorter than the width of the terminal.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_scrape(row)
 */
export function term_scrape(
  denops: Denops,
  buf: unknown,
  row: unknown,
): Promise<unknown[]>;
export function term_scrape(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_scrape", ...args);
}

/**
 * Send keystrokes **{keys}** to terminal **{buf}**.
 * **{buf}** is used as with `term_getsize()`.
 *
 * **{keys}** are translated as key sequences. For example, `"\<c-x>"`
 * means the character CTRL-X.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_sendkeys(keys)
 */
export function term_sendkeys(
  denops: Denops,
  buf: unknown,
  keys: unknown,
): Promise<void>;
export function term_sendkeys(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_sendkeys", ...args);
}

/**
 * Set the ANSI color palette used by terminal **{buf}**.
 * **{colors}** must be a List of 16 valid color names or hexadecimal
 * color codes, like those accepted by `highlight-guifg`.
 * Also see `term_getansicolors()` and `g:terminal_ansi_colors`.
 *
 * The colors normally are:
 *         0    black
 *         1    dark red
 *         2    dark green
 *         3    brown
 *         4    dark blue
 *         5    dark magenta
 *         6    dark cyan
 *         7    light grey
 *         8    dark grey
 *         9    red
 *         10   green
 *         11   yellow
 *         12   blue
 *         13   magenta
 *         14   cyan
 *         15   white
 *
 * These colors are used in the GUI and in the terminal when
 * 'termguicolors' is set.  When not using GUI colors (GUI mode
 * or 'termguicolors'), the terminal window always uses the 16
 * ANSI colors of the underlying terminal.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_setansicolors(colors)
 *
 * *only available with GUI enabled and/or the `+termguicolors`
 * feature*
 */
export function term_setansicolors(
  denops: Denops,
  buf: unknown,
  colors: unknown,
): Promise<void>;
export function term_setansicolors(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setansicolors", ...args);
}

/**
 * Set the function name prefix to be used for the `terminal-api`
 * function in terminal **{buf}**.  For example:
 *
 *     :call term_setapi(buf, "Myapi_")
 *     :call term_setapi(buf, "")
 *
 * The default is "Tapi_".  When **{expr}** is an empty string then
 * no `terminal-api` function can be used for **{buf}**.
 *
 * When used as a method the base is used for **{buf}**:
 *
 *     GetBufnr()->term_setapi({expr})
 */
export function term_setapi(
  denops: Denops,
  buf: unknown,
  expr: unknown,
): Promise<void>;
export function term_setapi(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setapi", ...args);
}

/**
 * When exiting Vim or trying to close the terminal window in
 * another way, **{how}** defines whether the job in the terminal can
 * be stopped.
 * When **{how}** is empty (the default), the job will not be
 * stopped, trying to exit will result in `E947`.
 * Otherwise, **{how}** specifies what signal to send to the job.
 * See `job_stop()` for the values.
 *
 * After sending the signal Vim will wait for up to a second to
 * check that the job actually stopped.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_setkill(how)
 */
export function term_setkill(
  denops: Denops,
  buf: unknown,
  how: unknown,
): Promise<void>;
export function term_setkill(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setkill", ...args);
}

/**
 * Set the command to write in a session file to restore the job
 * in this terminal.  The line written in the session file is:
 *
 *     terminal ++curwin ++cols=%d ++rows=%d {command}
 *
 * Make sure to escape the command properly.
 *
 * Use an empty **{command}** to run 'shell'.
 * Use "NONE" to not restore this window.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_setrestore(command)
 */
export function term_setrestore(
  denops: Denops,
  buf: unknown,
  command: unknown,
): Promise<void>;
export function term_setrestore(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setrestore", ...args);
}

/**
 * Set the size of terminal **{buf}**. The size of the window
 * containing the terminal will also be adjusted, if possible.
 * If **{rows}** or **{cols}** is zero or negative, that dimension is not
 * changed.
 *
 * **{buf}** must be the buffer number of a terminal window.  Use an
 * empty string for the current buffer.  If the buffer does not
 * exist or is not a terminal window, an error is given.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_setsize(rows, cols)
 */
export function term_setsize(
  denops: Denops,
  buf: unknown,
  rows: unknown,
  cols: unknown,
): Promise<void>;
export function term_setsize(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_setsize", ...args);
}

/**
 * Open a terminal window and run **{cmd}** in it.
 *
 * **{cmd}** can be a string or a List, like with `job_start()`. The
 * string "NONE" can be used to open a terminal window without
 * starting a job, the pty of the terminal can be used by a
 * command like gdb.
 *
 * Returns the buffer number of the terminal window.  If **{cmd}**
 * cannot be executed the window does open and shows an error
 * message.
 * If opening the window fails zero is returned.
 *
 * **{options}** are similar to what is used for `job_start()`, see
 * `job-options`.  However, not all options can be used.  These
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
 *
 * There are extra options:
 *    "term_name"       name to use for the buffer name, instead
 *                      of the command name.
 *    "term_rows"       vertical size to use for the terminal,
 *                      instead of using 'termwinsize'; valid
 *                      range is from zero to 1000
 *    "term_cols"       horizontal size to use for the terminal,
 *                      instead of using 'termwinsize'
 *    "vertical"        split the window vertically; note that
 *                      other window position can be defined with
 *                      command modifiers, such as `:belowright`.
 *    "curwin"          use the current window, do not split the
 *                      window; fails if the current buffer
 *                      cannot be `abandon`ed
 *    "hidden"          do not open a window
 *    "norestore"       do not add the terminal window to a
 *                      session file
 *    "term_kill"       what to do when trying to close the
 *                      terminal window, see `term_setkill()`
 *    "term_finish"     What to do when the job is finished:
 *                         "close": close any windows
 *                         "open": open window if needed
 *                      Note that "open" can be interruptive.
 *                      See `term++close` and `term++open`.
 *    "term_opencmd"    command to use for opening the window when
 *                      "open" is used for "term_finish"; must
 *                      have "%d" where the buffer number goes,
 *                      e.g. "10split|buffer %d"; when not
 *                      specified "botright sbuf %d" is used
 *    "term_highlight"  highlight group to use instead of
 *                      "Terminal"
 *    "eof_chars"       Text to send after all buffer lines were
 *                      written to the terminal.  When not set
 *                      CTRL-D is used on MS-Windows. For Python
 *                      use CTRL-Z or "exit()". For a shell use
 *                      "exit".  A CR is always added.
 *    "ansi_colors"     A list of 16 color names or hex codes
 *                      defining the ANSI palette used in GUI
 *                      color modes.  See `g:terminal_ansi_colors`.
 *    "tty_type"        (MS-Windows only): Specify which pty to
 *                      use.  See 'termwintype' for the values.
 *    "term_api"        function name prefix for the
 *                      `terminal-api` function.  See
 *                      `term_setapi()`.
 *
 * Can also be used as a `method`:
 *
 *     GetCommand()->term_start()
 */
export function term_start(
  denops: Denops,
  cmd: unknown,
  options?: unknown,
): Promise<number>;
export function term_start(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_start", ...args);
}

/**
 * Wait for pending updates of **{buf}** to be handled.
 * **{buf}** is used as with `term_getsize()`.
 * **{time}** is how long to wait for updates to arrive in msec.  If
 * not set then 10 msec will be used.
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->term_wait()
 */
export function term_wait(
  denops: Denops,
  buf: unknown,
  time?: unknown,
): Promise<number>;
export function term_wait(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("term_wait", ...args);
}

/**
 * This is for testing: If the memory allocation with **{id}** is
 * called, then decrement **{countdown}**, and when it reaches zero
 * let memory allocation fail **{repeat}** times.  When **{repeat}** is
 * smaller than one it fails one time.
 *
 * Can also be used as a `method`:
 *
 *     GetAllocId()->test_alloc_fail()
 */
export function test_alloc_fail(
  denops: Denops,
  id: unknown,
  countdown: unknown,
  repeat: unknown,
): Promise<void>;
export function test_alloc_fail(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_alloc_fail", ...args);
}

/**
 * Set a flag to enable the effect of 'autochdir' before Vim
 * startup has finished.
 */
export function test_autochdir(denops: Denops): Promise<void>;
export function test_autochdir(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_autochdir", ...args);
}

/**
 * Characters in **{string}** are queued for processing as if they
 * were typed by the user. This uses a low level input buffer.
 * This function works only when with `+unix` or GUI is running.
 *
 * Can also be used as a `method`:
 *
 *     GetText()->test_feedinput()
 */
export function test_feedinput(denops: Denops, string: unknown): Promise<void>;
export function test_feedinput(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_feedinput", ...args);
}

/**
 * Like garbagecollect(), but executed right away.  This must
 * only be called directly to avoid any structure to exist
 * internally, and `v:testing` must have been set before calling
 * any function.
 * This will not work when called from a :def function, because
 * variables on the stack will be freed.
 */
export function test_garbagecollect_now(denops: Denops): Promise<void>;
export function test_garbagecollect_now(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_garbagecollect_now", ...args);
}

/**
 * Set the flag to call the garbagecollector as if in the main
 * loop.  Only to be used in tests.
 */
export function test_garbagecollect_soon(denops: Denops): Promise<void>;
export function test_garbagecollect_soon(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_garbagecollect_soon", ...args);
}

/**
 * Get the value of an internal variable.  These values for
 * **{name}** are supported:
 *         need_fileinfo
 *
 * Can also be used as a `method`:
 *
 *     GetName()->test_getvalue()
 */
export function test_getvalue(denops: Denops, name: unknown): Promise<unknown>;
export function test_getvalue(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_getvalue", ...args);
}

/**
 * Generate a GUI **{event}** with arguments **{args}** for testing Vim
 * functionality. This function works only when the GUI is
 * running.
 *
 * **{event}** is a String and the supported values are:
 *     "dropfiles" drop one or more files in a window.
 *     "findrepl"  search and replace text.
 *     "mouse"     mouse button click event.
 *     "scrollbar" move or drag the scrollbar.
 *     "key"       send a low-level keyboard event.
 *     "tabline"   select a tab page by mouse click.
 *     "tabmenu"   select a tabline menu entry.
 *
 * **{args}** is a Dict and contains the arguments for the event.
 *
 * "dropfiles":
 *   Drop one or more files in a specified window.  The supported
 *   items in **{args}** are:
 *     files:      List of file names
 *     row:        window row number
 *     col:        window column number
 *     modifiers:  key modifiers. The supported values are:
 *                     0x4 Shift
 *                     0x8 Alt
 *                    0x10 Ctrl
 *   The files are added to the `argument-list` and the first
 *   file in **{files}** is edited in the window.  See `drag-n-drop`
 *   for more information.  This event works only when the
 *   `drop_file` feature is present.
 *
 * "findrepl":
 *   *only available when the GUI has a find/replace dialog*
 *   Perform a search and replace of text.  The supported items
 *   in **{args}** are:
 *     find_text:  string to find.
 *     repl_text:  replacement string.
 *     flags:      flags controlling the find/replace. Supported
 *                 values are:
 *                     1   search next string (find dialog)
 *                     2   search next string (replace dialog)
 *                     3   replace string once
 *                     4   replace all matches
 *                     8   match whole words only
 *                    16   match case
 *     forward:    set to 1 for forward search.
 *
 * "mouse":
 *   Inject either a mouse button click, or a mouse move, event.
 *   The supported items in **{args}** are:
 *     button:     mouse button.  The supported values are:
 *                     0   left mouse button
 *                     1   middle mouse button
 *                     2   right mouse button
 *                     3   mouse button release
 *                     4   scroll wheel down
 *                     5   scroll wheel up
 *                     6   scroll wheel left
 *                     7   scroll wheel right
 *     row:        mouse click row number.  The first row of the
 *                 Vim window is 1 and the last row is 'lines'.
 *     col:        mouse click column number.  The maximum value
 *                 of **{col}** is 'columns'.
 *     multiclick: set to 1 to inject a multiclick mouse event.
 *     modifiers:  key modifiers.  The supported values are:
 *                     4   shift is pressed
 *                     8   alt is pressed
 *                    16   ctrl is pressed
 *     move:       Optional; if used and TRUE then a mouse move
 *                 event can be generated.
 *                 Only **{args}** row: and col: are used and
 *                 required; they are interpreted as pixels or
 *                 screen cells, depending on "cell".
 *                 Only results in an event when 'mousemoveevent'
 *                 is set or a popup uses mouse move events.
 *     cell:       Optional: when present and TRUE then "move"
 *                 uses screen cells instead of pixel positions
 *
 * "scrollbar":
 *   Set or drag the left, right or horizontal scrollbar.  Only
 *   works when the scrollbar actually exists.  The supported
 *   items in **{args}** are:
 *     which:      Selects the scrollbar. The supported values
 *                 are:
 *                     left  Left scrollbar of the current window
 *                     right Right scrollbar of the current window
 *                     hor   Horizontal scrollbar
 *     value:      Amount to scroll.  For the vertical scrollbars
 *                 the value can be between 0 to the line-count
 *                 of the buffer minus one.  For the horizontal
 *                 scrollbar the value can be between 1 and the
 *                 maximum line length, assuming 'wrap' is not
 *                 set.
 *     dragging:   1 to drag the scrollbar and 0 to click in the
 *                 scrollbar.
 *
 * "key":
 *   Send a low-level keyboard event (e.g. key-up or down).
 *   Currently only supported on MS-Windows.
 *   The supported items in **{args}** are:
 *     event:      The supported string values are:
 *                     keyup   generate a keyup event
 *                     keydown generate a keydown event
 *     keycode:    Keycode to use for a keyup or a keydown event.
 *
 * "tabline":
 *   Inject a mouse click event on the tabline to select a
 *   tabpage. The supported items in **{args}** are:
 *     tabnr:      tab page number
 *
 * "tabmenu":
 *   Inject an event to select a tabline menu entry. The
 *   supported items in **{args}** are:
 *     tabnr:      tab page number
 *     item:       tab page menu item number. 1 for the first
 *                 menu item, 2 for the second item and so on.
 *
 * After injecting the GUI events you probably should call
 * `feedkeys()` to have them processed, e.g.:
 *
 *     call feedkeys("y", 'Lx!')
 *
 * Returns TRUE if the event is successfully added, FALSE if
 * there is a failure.
 *
 * Can also be used as a `method`:
 *
 *     GetEvent()->test_gui_event({args})
 */
export function test_gui_event(
  denops: Denops,
  event: unknown,
  args: unknown,
): Promise<boolean>;
export function test_gui_event(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_gui_event", ...args);
}

/**
 * Ignore any error containing **{expr}**.  A normal message is given
 * instead.
 * This is only meant to be used in tests, where catching the
 * error with try/catch cannot be used (because it skips over
 * following code).
 * **{expr}** is used literally, not as a pattern.
 * When the **{expr}** is the string "RESET" then the list of ignored
 * errors is made empty.
 *
 * Can also be used as a `method`:
 *
 *     GetErrorText()->test_ignore_error()
 */
export function test_ignore_error(denops: Denops, expr: unknown): Promise<void>;
export function test_ignore_error(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_ignore_error", ...args);
}

/**
 * Generate a low-level MS-Windows **{event}** with arguments **{args}**
 * for testing Vim functionality.  It works for MS-Windows GUI
 * and for the console.
 *
 * **{event}** is a String and the supported values are:
 *     "mouse"     mouse event.
 *     "key"       keyboard event.
 *
 * "mouse":
 *   Inject either a mouse button click, or a mouse move, event.
 *   The supported items in **{args}** are:
 *     button:     mouse button.  The supported values are:
 *                     0   right mouse button
 *                     1   middle mouse button
 *                     2   left mouse button
 *                     3   mouse button release
 *                     4   scroll wheel down
 *                     5   scroll wheel up
 *                     6   scroll wheel left
 *                     7   scroll wheel right
 *     row:        mouse click row number.  The first row of the
 *                 Vim window is 1 and the last row is 'lines'.
 *     col:        mouse click column number.  The maximum value
 *                 of **{col}** is 'columns'.
 *                 Note: row and col are always interpreted as
 *                 screen cells for the console application.
 *                 But, they may be interpreted as pixels
 *                 for the GUI, depending on "cell".
 *     multiclick: set to 1 to inject a double-click mouse event.
 *     modifiers:  key modifiers.  The supported values are:
 *                     4   shift is pressed
 *                     8   alt is pressed
 *                    16   ctrl is pressed
 *     move:       Optional; if used and TRUE then a mouse move
 *                 event can be generated.
 *                 Only **{args}** row: and col: are used and
 *                 required.
 *                 Only results in an event when 'mousemoveevent'
 *                 is set or a popup uses mouse move events.
 *     cell:       Optional for the GUI: when present and TRUE
 *                 then "move" uses screen cells instead of pixel
 *                 positions.  Not used by the console.
 *
 * "key":
 *   Send a low-level keyboard event (e.g. keyup or keydown).
 *   The supported items in **{args}** are:
 *     event:      The supported string values are:
 *                     keyup   generate a keyup event
 *                     keydown generate a keydown event
 *     keycode:    Keycode to use for a keyup or a keydown event.
 *     modifiers:  Optional; key modifiers.
 *                 The supported values are:
 *                     2   shift is pressed
 *                     4   ctrl is pressed
 *                     8   alt is pressed
 *                 Note: These values are different from the
 *                 mouse modifiers.
 *     execute:    Optional. Similar to `feedkeys()` mode x.
 *                 When this is included and set to true
 *                 (non-zero) then Vim will process any buffered
 *                 unprocessed key events.  All other **{args}**
 *                 items are optional when this is set and true.
 *
 * Returns TRUE if the event is successfully added or executed,
 * FALSE if there is a failure.
 *
 * Can also be used as a `method`:
 *
 *     GetEvent()->test_mswin_event({args})
 */
export function test_mswin_event(
  denops: Denops,
  event: unknown,
  args: unknown,
): Promise<boolean>;
export function test_mswin_event(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_mswin_event", ...args);
}

/**
 * Return a `Blob` that is null. Only useful for testing.
 */
export function test_null_blob(denops: Denops): Promise<unknown>;
export function test_null_blob(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_blob", ...args);
}

/**
 * Return a `Channel` that is null. Only useful for testing.
 * *only available when compiled with the +channel feature*
 */
export function test_null_channel(denops: Denops): Promise<unknown>;
export function test_null_channel(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_channel", ...args);
}

/**
 * Return a `Dict` that is null. Only useful for testing.
 */
export function test_null_dict(
  denops: Denops,
): Promise<Record<string, unknown>>;
export function test_null_dict(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_dict", ...args);
}

/**
 * Return a `Funcref` that is null. Only useful for testing.
 */
export function test_null_function(denops: Denops): Promise<unknown>;
export function test_null_function(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_function", ...args);
}

/**
 * Return a `Job` that is null. Only useful for testing.
 * *only available when compiled with the +job feature*
 */
export function test_null_job(denops: Denops): Promise<unknown>;
export function test_null_job(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_job", ...args);
}

/**
 * Return a `List` that is null. Only useful for testing.
 */
export function test_null_list(denops: Denops): Promise<unknown[]>;
export function test_null_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_list", ...args);
}

/**
 * Return a `Partial` that is null. Only useful for testing.
 */
export function test_null_partial(denops: Denops): Promise<unknown>;
export function test_null_partial(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_partial", ...args);
}

/**
 * Return a `String` that is null. Only useful for testing.
 */
export function test_null_string(denops: Denops): Promise<string>;
export function test_null_string(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_null_string", ...args);
}

/**
 * Reset the flag that indicates option **{name}** was set.  Thus it
 * looks like it still has the default value. Use like this:
 *
 *     set ambiwidth=double
 *     call test_option_not_set('ambiwidth')
 *
 * Now the 'ambiwidth' option behaves like it was never changed,
 * even though the value is "double".
 * Only to be used for testing!
 *
 * Can also be used as a `method`:
 *
 *     GetOptionName()->test_option_not_set()
 */
export function test_option_not_set(
  denops: Denops,
  name: unknown,
): Promise<void>;
export function test_option_not_set(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_option_not_set", ...args);
}

/**
 * Overrides certain parts of Vim's internal processing to be able
 * to run tests. Only to be used for testing Vim!
 * The override is enabled when **{val}** is non-zero and removed
 * when **{val}** is zero.
 * Current supported values for **{name}** are:
 *
 * **{name}**       effect when **{val}** is non-zero
 * alloc_lines  make a copy of every buffer line into allocated
 *              memory, so that memory access errors can be found
 *              by valgrind
 * autoload     `import autoload` will load the script right
 *              away, not postponed until an item is used
 * char_avail   disable the char_avail() function
 * nfa_fail     makes the NFA regexp engine fail to force a
 *              fallback to the old engine
 * no_query_mouse  do not query the mouse position for "dec"
 *                 terminals
 * no_wait_return  set the "no_wait_return" flag.  Not restored
 *                 with "ALL".
 * redraw       disable the redrawing() function
 * redraw_flag  ignore the RedrawingDisabled flag
 * starting     reset the "starting" variable, see below
 * term_props   reset all terminal properties when the version
 *              string is detected
 * ui_delay     time in msec to use in ui_delay(); overrules a
 *              wait time of up to 3 seconds for messages
 * unreachable  no error for code after `:throw` and `:return`
 * uptime       overrules sysinfo.uptime
 * vterm_title  setting the window title by a job running in a
 *              terminal window
 * ALL          clear all overrides, except alloc_lines (**{val}** is
 *              not used)
 *
 * "starting" is to be used when a test should behave like
 * startup was done.  Since the tests are run by sourcing a
 * script the "starting" variable is non-zero. This is usually a
 * good thing (tests run faster), but sometimes this changes
 * behavior in a way that the test doesn't work properly.
 * When using:
 *
 *     call test_override('starting', 1)
 *
 * The value of "starting" is saved.  It is restored by:
 *
 *     call test_override('starting', 0)
 *
 * To make sure the flag is reset later using `:defer` can be
 * useful:
 *
 *     call test_override('unreachable', 1)
 *     defer call test_override('unreachable', 0)
 *
 * Can also be used as a `method`:
 *
 *     GetOverrideVal()-> test_override('starting')
 */
export function test_override(
  denops: Denops,
  name: unknown,
  val: unknown,
): Promise<void>;
export function test_override(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_override", ...args);
}

/**
 * Return the reference count of **{expr}**.  When **{expr}** is of a
 * type that does not have a reference count, returns -1.  Only
 * to be used for testing.
 *
 * Can also be used as a `method`:
 *
 *     GetVarname()->test_refcount()
 */
export function test_refcount(denops: Denops, expr: unknown): Promise<number>;
export function test_refcount(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_refcount", ...args);
}

/**
 * Set the mouse position to be used for the next mouse action.
 * **{row}** and **{col}** are one based.
 * For example:
 *
 *     call test_setmouse(4, 20)
 *     call feedkeys("\<LeftMouse>", "xt")
 */
export function test_setmouse(
  denops: Denops,
  row: unknown,
  col: unknown,
): Promise<void>;
export function test_setmouse(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_setmouse", ...args);
}

/**
 * Set the time Vim uses internally.  Currently only used for
 * timestamps in the history, as they are used in viminfo, and
 * for undo.
 * Using a value of 1 makes Vim not sleep after a warning or
 * error message.
 * **{expr}** must evaluate to a number.  When the value is zero the
 * normal behavior is restored.
 *
 * Can also be used as a `method`:
 *
 *     GetTime()->test_settime()
 */
export function test_settime(denops: Denops, expr: unknown): Promise<void>;
export function test_settime(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_settime", ...args);
}

/**
 * When [seed] is given this sets the seed value used by
 * `srand()`.  When omitted the test seed is removed.
 */
export function test_srand_seed(denops: Denops, seed?: unknown): Promise<void>;
export function test_srand_seed(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_srand_seed", ...args);
}

/**
 * Return a value with unknown type. Only useful for testing.
 */
export function test_unknown(denops: Denops): Promise<unknown>;
export function test_unknown(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_unknown", ...args);
}

/**
 * Return a value with void type. Only useful for testing.
 */
export function test_void(denops: Denops): Promise<unknown>;
export function test_void(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_void", ...args);
}

/**
 * Run **{cmd}** and add an error message to `v:errors` if it does
 * NOT produce a beep or visual bell.
 * Also see `assert_fails()`, `assert_nobeep()` and
 * `assert-return`.
 *
 * Can also be used as a `method`:
 *
 *     GetCmd()->assert_beeps()
 */
export function assert_beeps(denops: Denops, cmd: unknown): Promise<number>;
export function assert_beeps(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_beeps", ...args);
}

/**
 * When **{expected}** and **{actual}** are not equal an error message is
 * added to `v:errors` and 1 is returned.  Otherwise zero is
 * returned. `assert-return`
 * The error is in the form "Expected **{expected}** but got
 * **{actual}**".  When **{msg}** is present it is prefixed to that.
 *
 * There is no automatic conversion, the String "4" is different
 * from the Number 4.  And the number 4 is different from the
 * Float 4.0.  The value of 'ignorecase' is not used here, case
 * always matters.
 * Example:
 *
 *     assert_equal('foo', 'bar')
 *
 * Will result in a string to be added to `v:errors`:
 *         test.vim line 12: Expected 'foo' but got 'bar'
 *
 * Can also be used as a `method`, the base is passed as the
 * second argument:
 *
 *     mylist->assert_equal([1, 2, 3])
 */
export function assert_equal(
  denops: Denops,
  expected: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_equal(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_equal", ...args);
}

/**
 * When the files **{fname-one}** and **{fname-two}** do not contain
 * exactly the same text an error message is added to `v:errors`.
 * Also see `assert-return`.
 * When **{fname-one}** or **{fname-two}** does not exist the error will
 * mention that.
 * Mainly useful with `terminal-diff`.
 *
 * Can also be used as a `method`:
 *
 *     GetLog()->assert_equalfile('expected.log')
 */
export function assert_equalfile(
  denops: Denops,
  fname_one: unknown,
  fname_two: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_equalfile(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_equalfile", ...args);
}

/**
 * When v:exception does not contain the string **{error}** an error
 * message is added to `v:errors`.  Also see `assert-return`.
 * This can be used to assert that a command throws an exception.
 * Using the error number, followed by a colon, avoids problems
 * with translations:
 *
 *     try
 *       commandthatfails
 *       call assert_false(1, 'command should have failed')
 *     catch
 *       call assert_exception('E492:')
 *     endtry
 */
export function assert_exception(
  denops: Denops,
  error: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_exception(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_exception", ...args);
}

/**
 * Run **{cmd}** and add an error message to `v:errors` if it does
 * NOT produce an error or when **{error}** is not found in the
 * error message.  Also see `assert-return`.
 *
 * When **{error}** is a string it must be found literally in the
 * first reported error. Most often this will be the error code,
 * including the colon, e.g. "E123:".
 *
 *     assert_fails('bad cmd', 'E987:')
 *
 * When **{error}** is a `List` with one or two strings, these are
 * used as patterns.  The first pattern is matched against the
 * first reported error:
 *
 *     assert_fails('cmd', ['E987:.*expected bool'])
 *
 * The second pattern, if present, is matched against the last
 * reported error.
 * If there is only one error then both patterns must match. This
 * can be used to check that there is only one error.
 * To only match the last error use an empty string for the first
 * error:
 *
 *     assert_fails('cmd', ['', 'E987:'])
 *
 * If **{msg}** is empty then it is not used.  Do this to get the
 * default message when passing the **{lnum}** argument.
 *
 * When **{lnum}** is present and not negative, and the **{error}**
 * argument is present and matches, then this is compared with
 * the line number at which the error was reported. That can be
 * the line number in a function or in a script.
 *
 * When **{context}** is present it is used as a pattern and matched
 * against the context (script name or function name) where
 * **{lnum}** is located in.
 *
 * Note that beeping is not considered an error, and some failing
 * commands only beep.  Use `assert_beeps()` for those.
 *
 * Can also be used as a `method`:
 *
 *     GetCmd()->assert_fails('E99:')
 */
export function assert_fails(
  denops: Denops,
  cmd: unknown,
  error?: unknown,
  msg?: unknown,
  lnum?: unknown,
  context?: unknown,
): Promise<number>;
export function assert_fails(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_fails", ...args);
}

/**
 * When **{actual}** is not false an error message is added to
 * `v:errors`, like with `assert_equal()`.
 * The error is in the form "Expected False but got **{actual}**".
 * When **{msg}** is present it is prepended to that.
 * Also see `assert-return`.
 *
 * A value is false when it is zero. When **{actual}** is not a
 * number the assert fails.
 *
 * Can also be used as a `method`:
 *
 *     GetResult()->assert_false()
 */
export function assert_false(
  denops: Denops,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_false(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_false", ...args);
}

/**
 * This asserts number and `Float` values.  When **{actual}**  is lower
 * than **{lower}** or higher than **{upper}** an error message is added
 * to `v:errors`.  Also see `assert-return`.
 * The error is in the form "Expected range **{lower}** - **{upper}**,
 * but got **{actual}**".  When **{msg}** is present it is prefixed to
 * that.
 */
export function assert_inrange(
  denops: Denops,
  lower: unknown,
  upper: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_inrange(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_inrange", ...args);
}

/**
 * When **{pattern}** does not match **{actual}** an error message is
 * added to `v:errors`.  Also see `assert-return`.
 * The error is in the form "Pattern **{pattern}** does not match
 * **{actual}**".  When **{msg}** is present it is prefixed to that.
 *
 * **{pattern}** is used as with `=~`: The matching is always done
 * like 'magic' was set and 'cpoptions' is empty, no matter what
 * the actual value of 'magic' or 'cpoptions' is.
 *
 * **{actual}** is used as a string, automatic conversion applies.
 * Use "^" and "$" to match with the start and end of the text.
 * Use both to match the whole text.
 *
 * Example:
 *
 *     assert_match('^f.*o$', 'foobar')
 *
 * Will result in a string to be added to `v:errors`:
 *         test.vim line 12: Pattern '^f.*o$' does not match 'foobar'
 *
 * Can also be used as a `method`:
 *
 *     getFile()->assert_match('foo.*')
 */
export function assert_match(
  denops: Denops,
  pattern: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_match(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_match", ...args);
}

/**
 * Run **{cmd}** and add an error message to `v:errors` if it
 * produces a beep or visual bell.
 * Also see `assert_beeps()`.
 *
 * Can also be used as a `method`:
 *
 *     GetCmd()->assert_nobeep()
 */
export function assert_nobeep(denops: Denops, cmd: unknown): Promise<number>;
export function assert_nobeep(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_nobeep", ...args);
}

/**
 * The opposite of `assert_equal()`: add an error message to
 * `v:errors` when **{expected}** and **{actual}** are equal.
 * Also see `assert-return`.
 *
 * Can also be used as a `method`:
 *
 *     mylist->assert_notequal([1, 2, 3])
 */
export function assert_notequal(
  denops: Denops,
  expected: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_notequal(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_notequal", ...args);
}

/**
 * The opposite of `assert_match()`: add an error message to
 * `v:errors` when **{pattern}** matches **{actual}**.
 * Also see `assert-return`.
 *
 * Can also be used as a `method`:
 *
 *     getFile()->assert_notmatch('bar.*')
 */
export function assert_notmatch(
  denops: Denops,
  pattern: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_notmatch(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_notmatch", ...args);
}

/**
 * Report a test failure directly, using String **{msg}**.
 * Always returns one.
 *
 * Can also be used as a `method`:
 *
 *     GetMessage()->assert_report()
 */
export function assert_report(denops: Denops, msg: unknown): Promise<number>;
export function assert_report(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_report", ...args);
}

/**
 * When **{actual}** is not true an error message is added to
 * `v:errors`, like with `assert_equal()`.
 * Also see `assert-return`.
 * A value is TRUE when it is a non-zero number.  When **{actual}**
 * is not a number the assert fails.
 * When **{msg}** is given it precedes the default message.
 *
 * Can also be used as a `method`:
 *
 *     GetResult()->assert_true()
 */
export function assert_true(
  denops: Denops,
  actual: unknown,
  msg?: unknown,
): Promise<number>;
export function assert_true(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_true", ...args);
}

/**
 * Attach a text property at position **{lnum}**, **{col}**.  **{col}** is
 * counted in bytes, use one for the first column.
 * If **{lnum}** is invalid an error is given.
 * If **{col}** is invalid an error is given.
 *
 * **{props}** is a dictionary with these fields:
 *    type         name of the text property type
 *    length       length of text in bytes, can only be used
 *                 for a property that does not continue in
 *                 another line; can be zero
 *    end_lnum     line number for the end of text (inclusive)
 *    end_col      column just after the text; not used when
 *                 "length" is present; when **{col}** and "end_col"
 *                 are equal, and "end_lnum" is omitted or equal
 *                 to **{lnum}**, this is a zero-width text property
 *    bufnr        buffer to add the property to; when omitted
 *                 the current buffer is used
 *    id           user defined ID for the property; must be a
 *                 number, should be positive; when using "text"
 *                 then "id" must not be present and will be set
 *                 automatically to a negative number; otherwise
 *                 zero is used
 *
 *    text         text to be displayed before **{col}**, or
 *                 above/below the line if **{col}** is zero; prepend
 *                 and/or append spaces for padding with
 *                 highlighting; cannot be used with "length",
 *                 "end_lnum" and "end_col"
 *                 See `virtual-text` for more information.
 *
 *    text_align   when "text" is present and **{col}** is zero;
 *                 specifies where to display the text:
 *                    after   after the end of the line
 *                    right   right aligned in the window (unless
 *                            the text wraps to the next screen
 *                            line)
 *                    below   in the next screen line
 *                    above   just above the line
 *                 When omitted "after" is used.  Only one
 *                 "right" property can fit in each line, if
 *                 there are two or more these will go in a
 *                 separate line (still right aligned).
 *    text_padding_left
 *                 used when "text" is present and **{col}** is zero;
 *                 padding between the end of the text line
 *                 (leftmost column for "above" and "below") and
 *                 the virtual text, not highlighted
 *    text_wrap    when "text" is present and **{col}** is zero,
 *                 specifies what happens if the text doesn't
 *                 fit:
 *                    wrap      wrap the text to the next line
 *                    truncate  truncate the text to make it fit
 *                 When omitted "truncate" is used.
 *                 Note that this applies to the individual text
 *                 property, the 'wrap' option sets the overall
 *                 behavior
 * All fields except "type" are optional.
 *
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
 *
 * "type" will first be looked up in the buffer the property is
 * added to. When not found, the global property types are used.
 * If not found an error is given.
 *
 * When "text" is used and the column is non-zero then this text
 * will be displayed at the specified start location of the text
 * property.  The text of the buffer line will be shifted to make
 * room.  This is called "virtual text".
 * When the column is zero the virtual text will appear above,
 * after or below the buffer text.  The "text_align" and
 * "text_wrap" arguments determine how it is displayed.
 * To separate the virtual text from the buffer text prepend
 * and/or append spaces to the "text" field or use the
 * "text_padding_left" value.
 *
 * Make sure to use a highlight that makes clear to the user that
 * this is virtual text, otherwise it will be very confusing that
 * the text cannot be edited.  When using "above" you need to
 * make clear this text belongs to the text line below it, when
 * using "below" you need to make sure it belongs to the text
 * line above it.
 *
 * The text will be displayed but it is not part of the actual
 * buffer line, the cursor cannot be placed on it.  A mouse click
 * in the text will move the cursor to the first character after
 * the text, or the last character of the line.
 * Any Tab and other control character in the text will be
 * changed to a space (Rationale: otherwise the size of the text
 * is difficult to compute).
 * A negative "id" will be chosen and is returned.
 *
 * Before text properties with text were supported it was
 * possible to use a negative "id", even though this was very
 * rare.  Now that negative "id"s are reserved for text
 * properties with text an error is given when using a negative
 * "id".  When a text property with text already exists using a
 * negative "id" results in *E1293* .  If a negative "id" was
 * used and later a text property with text is added results in
 * *E1339* .
 *
 * Can also be used as a `method`:
 *
 *     GetLnum()->prop_add(col, props)
 */
export function prop_add(
  denops: Denops,
  lnum: unknown,
  col: unknown,
  props: unknown,
): Promise<void>;
export function prop_add(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("prop_add", ...args);
}

/**
 * Remove all text properties from line **{lnum}**.
 * When **{lnum-end}** is given, remove all text properties from line
 * **{lnum}** to **{lnum-end}** (inclusive).
 *
 * When **{props}** contains a "bufnr" item use this buffer,
 * otherwise use the current buffer.
 *
 * Can also be used as a `method`:
 *
 *     GetLnum()->prop_clear()
 */
export function prop_clear(
  denops: Denops,
  lnum: unknown,
  lnum_end?: unknown,
  props?: unknown,
): Promise<void>;
export function prop_clear(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_clear", ...args);
}

/**
 * Search for a text property as specified with **{props}**:
 *    id           property with this ID
 *    type         property with this type name
 *    both         "id" and "type" must both match
 *    bufnr        buffer to search in; when present a
 *                 start position with "lnum" and "col"
 *                 must be given; when omitted the
 *                 current buffer is used
 *    lnum         start in this line (when omitted start
 *                 at the cursor)
 *    col          start at this column (when omitted
 *                 and "lnum" is given: use column 1,
 *                 otherwise start at the cursor)
 *    skipstart    do not look for a match at the start
 *                 position
 *
 * A property matches when either "id" or "type" matches.
 * **{direction}** can be "f" for forward and "b" for backward.  When
 * omitted forward search is performed.
 *
 * If a match is found then a Dict is returned with the entries
 * as with prop_list(), and additionally an "lnum" entry.
 * If no match is found then an empty Dict is returned.
 */
export function prop_find(
  denops: Denops,
  props: unknown,
  direction?: unknown,
): Promise<Record<string, unknown>>;
export function prop_find(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_find", ...args);
}

/**
 * Returns a List with all the text properties in line **{lnum}**.
 *
 * The following optional items are supported in **{props}**:
 *    bufnr        use this buffer instead of the current buffer
 *    end_lnum     return text properties in all the lines
 *                 between **{lnum}** and {end_lnum} (inclusive).
 *                 A negative value is used as an offset from the
 *                 last buffer line; -1 refers to the last buffer
 *                 line.
 *    types        List of property type names. Return only text
 *                 properties that match one of the type names.
 *    ids          List of property identifiers. Return only text
 *                 properties with one of these identifiers.
 *
 * The properties are ordered by starting column and priority.
 * Each property is a Dict with these entries:
 *    lnum         starting line number. Present only when
 *                 returning text properties between **{lnum}** and
 *                 {end_lnum}.
 *    col          starting column
 *    length       length in bytes, one more if line break is
 *                 included
 *    id           property ID
 *    text         text to be displayed before **{col}**.  Only
 *                 present for `virtual-text` properties.
 *    text_align   alignment property of `virtual-text`.
 *    text_padding_left
 *                 left padding used for virtual text.
 *    text_wrap    specifies whether `virtual-text` is wrapped.
 *    type         name of the property type, omitted if
 *                 the type was deleted
 *    type_bufnr   buffer number for which this type was defined;
 *                 0 if the type is global
 *    start        when TRUE property starts in this line
 *    end          when TRUE property ends in this line
 *
 * When "start" is zero the property started in a previous line,
 * the current one is a continuation.
 * When "end" is zero the property continues in the next line.
 * The line break after this line is included.
 *
 * Returns an empty list on error.
 *
 * Examples:
 *    " get text properties placed in line 5
 *    echo prop_list(5)
 *    " get text properties placed in line 20 in buffer 4
 *    echo prop_list(20, {'bufnr': 4})
 *    " get all the text properties between line 1 and 20
 *    echo prop_list(1, {'end_lnum': 20})
 *    " get all the text properties of type 'myprop'
 *    echo prop_list(1, {'types': ['myprop'],
 *                                 \ 'end_lnum': -1})
 *    " get all the text properties of type 'prop1' or 'prop2'
 *    echo prop_list(1, {'types': ['prop1', 'prop2'],
 *                                 \ 'end_lnum': -1})
 *    " get all the text properties with ID 8
 *    echo prop_list(1, {'ids': [8], 'end_lnum': line('$')})
 *    " get all the text properties with ID 10 and 20
 *    echo prop_list(1, {'ids': [10, 20], 'end_lnum': -1})
 *    " get text properties with type 'myprop' and ID 100
 *    " in buffer 4.
 *    echo prop_list(1, {'bufnr': 4, 'types': ['myprop'],
 *                         \ 'ids': [100], 'end_lnum': -1})
 *
 * Can also be used as a `method`:
 *
 *     GetLnum()->prop_list()
 */
export function prop_list(
  denops: Denops,
  lnum: unknown,
  props?: unknown,
): Promise<unknown[]>;
export function prop_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_list", ...args);
}

/**
 * Remove a matching text property from line **{lnum}**.  When
 * **{lnum-end}** is given, remove matching text properties from line
 * **{lnum}** to **{lnum-end}** (inclusive).
 * When **{lnum}** is omitted remove matching text properties from
 * all lines (this requires going over all lines, thus will be a
 * bit slow for a buffer with many lines).
 *
 * **{props}** is a dictionary with these fields:
 *    id           remove text properties with this ID
 *    type         remove text properties with this type name
 *    types        remove text properties with type names in this
 *                 List
 *    both         "id" and "type"/"types" must both match
 *    bufnr        use this buffer instead of the current one
 *    all          when TRUE remove all matching text properties,
 *                 not just the first one
 * Only one of "type" and "types" may be supplied.
 *
 * A property matches when either "id" or one of the supplied
 * types matches.
 * If buffer "bufnr" does not exist you get an error message.
 * If buffer "bufnr" is not loaded then nothing happens.
 *
 * Returns the number of properties that were removed.
 *
 * Can also be used as a `method`:
 *
 *     GetProps()->prop_remove()
 */
export function prop_remove(
  denops: Denops,
  props: unknown,
  lnum?: unknown,
  lnum_end?: unknown,
): Promise<number>;
export function prop_remove(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_remove", ...args);
}

/**
 * Add a text property type **{name}**.  If a property type with this
 * name already exists an error is given.  Nothing is returned.
 * **{props}** is a dictionary with these optional fields:
 *    bufnr        define the property only for this buffer; this
 *                 avoids name collisions and automatically
 *                 clears the property types when the buffer is
 *                 deleted.
 *    highlight    name of highlight group to use
 *    priority     when a character has multiple text
 *                 properties the one with the highest priority
 *                 will be used; negative values can be used, the
 *                 default priority is zero
 *    combine      when omitted or TRUE combine the highlight
 *                 with any syntax highlight; when FALSE syntax
 *                 highlight will not be used
 *    override     when TRUE the highlight overrides any other,
 *                 including 'cursorline' and Visual
 *    start_incl   when TRUE inserts at the start position will
 *                 be included in the text property
 *    end_incl     when TRUE inserts at the end position will be
 *                 included in the text property
 *
 * Can also be used as a `method`:
 *
 *     GetPropName()->prop_type_add(props)
 */
export function prop_type_add(
  denops: Denops,
  name: unknown,
  props: unknown,
): Promise<void>;
export function prop_type_add(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_add", ...args);
}

/**
 * Change properties of an existing text property type.  If a
 * property with this name does not exist an error is given.
 * The **{props}** argument is just like `prop_type_add()`.
 *
 * Can also be used as a `method`:
 *
 *     GetPropName()->prop_type_change(props)
 */
export function prop_type_change(
  denops: Denops,
  name: unknown,
  props: unknown,
): Promise<void>;
export function prop_type_change(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_change", ...args);
}

/**
 * Remove the text property type **{name}**.  When text properties
 * using the type **{name}** are still in place, they will not have
 * an effect and can no longer be removed by name.
 *
 * **{props}** can contain a "bufnr" item.  When it is given, delete
 * a property type from this buffer instead of from the global
 * property types.
 *
 * When text property type **{name}** is not found there is no error.
 *
 * Can also be used as a `method`:
 *
 *     GetPropName()->prop_type_delete()
 */
export function prop_type_delete(
  denops: Denops,
  name: unknown,
  props?: unknown,
): Promise<void>;
export function prop_type_delete(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_delete", ...args);
}

/**
 * Returns the properties of property type **{name}**.  This is a
 * dictionary with the same fields as was given to
 * prop_type_add().
 * When the property type **{name}** does not exist, an empty
 * dictionary is returned.
 *
 * **{props}** can contain a "bufnr" item.  When it is given, use
 * this buffer instead of the global property types.
 *
 * Can also be used as a `method`:
 *
 *     GetPropName()->prop_type_get()
 */
export function prop_type_get(
  denops: Denops,
  name: unknown,
  props?: unknown,
): Promise<Record<string, unknown>>;
export function prop_type_get(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_get", ...args);
}

/**
 * Returns a list with all property type names.
 *
 * **{props}** can contain a "bufnr" item.  When it is given, use
 * this buffer instead of the global property types.
 */
export function prop_type_list(
  denops: Denops,
  props?: unknown,
): Promise<unknown[]>;
export function prop_type_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_type_list", ...args);
}
