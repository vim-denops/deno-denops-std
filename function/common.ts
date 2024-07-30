import type { Denops } from "../mod.ts";

/**
 * The result is a Number, which is `TRUE` if **{expr}** is defined,
 * zero otherwise.
 *
 * Note: In a compiled `:def` function the evaluation is done at
 * runtime.  Use `exists_compiled()` to evaluate the expression
 * at compile time.
 *
 * For checking for a supported feature use `has()`.
 * For checking if a file exists use `filereadable()`.
 *
 * The **{expr}** argument is a string, which contains one of these:
 *         varname         internal variable (see
 *         dict.key        `internal-variables`).  Also works
 *         list[i]         for `curly-braces-names`, `Dictionary`
 *         import.Func     entries, `List` items, class and
 *         class.Func      object methods, imported items, etc.
 *         object.Func     Does not work for local variables in a
 *         class.varname   compiled `:def` function.
 *         object.varname  Also works for a function in `Vim9`
 *                         script, since it can be used as a
 *                         function reference.
 *                         Beware that evaluating an index may
 *                         cause an error message for an invalid
 *                         expression.  E.g.:
 *
 *                             :let l = [1, 2, 3]
 *                             :echo exists("l[5]")
 *
 *                            0
 *
 *                             :echo exists("l[xx]")
 *
 *                            E121: Undefined variable: xx
 *                            0
 *         &option-name    Vim option (only checks if it exists,
 *                         not if it really works)
 *         +option-name    Vim option that works.
 *         $ENVNAME        environment variable (could also be
 *                         done by comparing with an empty
 *                         string)
 *         *funcname       built-in function (see `functions`)
 *                         or user defined function (see
 *                         `user-functions`) that is implemented.
 *                         Also works for a variable that is a
 *                         Funcref.
 *         ?funcname       built-in function that could be
 *                         implemented; to be used to check if
 *                         "funcname" is valid
 *         :cmdname        Ex command: built-in command, user
 *                         command or command modifier `:command`.
 *                         Returns:
 *                         1  for match with start of a command
 *                         2  full match with a command
 *                         3  matches several user commands
 *                         To check for a supported command
 *                         always check the return value to be 2.
 *         :2match         The `:2match` command.
 *         :3match         The `:3match` command (but you
 *                         probably should not use it, it is
 *                         reserved for internal usage)
 *         `#event`          autocommand defined for this event
 *         `#event#pattern`  autocommand defined for this event and
 *                         pattern (the pattern is taken
 *                         literally and compared to the
 *                         autocommand patterns character by
 *                         character)
 *         `#group`          autocommand group exists
 *         `#group#event`    autocommand defined for this group and
 *                         event.
 *         `#group#event#pattern`
 *                         autocommand defined for this group,
 *                         event and pattern.
 *         `##event`         autocommand for this event is
 *                         supported.
 *
 * Examples:
 *
 *     exists("&shortname")
 *     exists("$HOSTNAME")
 *     exists("*strftime")
 *     exists("*s:MyFunc")     " only for legacy script
 *     exists("*MyFunc")
 *     exists("bufcount")
 *     exists(":Make")
 *     exists("#CursorHold")
 *     exists("#BufReadPre#*.gz")
 *     exists("#filetypeindent")
 *     exists("#filetypeindent#FileType")
 *     exists("#filetypeindent#FileType#*")
 *     exists("##ColorScheme")
 *
 * There must be no space between the symbol (&/$/* /#) and the
 * name.
 * There must be no extra characters after the name, although in
 * a few cases this is ignored.  That may become stricter in the
 * future, thus don't count on it!
 * Working example:
 *
 *     exists(":make")
 *
 * NOT working example:
 *
 *     exists(":make install")
 *
 * Note that the argument must be a string, not the name of the
 * variable itself.  For example:
 *
 *     exists(bufcount)
 *
 * This doesn't check for existence of the "bufcount" variable,
 * but gets the value of "bufcount", and checks if that exists.
 *
 * Can also be used as a `method`:
 *
 *     Varname()->exists()
 */
export async function exists(
  denops: Denops,
  expr: string,
): Promise<boolean> {
  const result = await denops.call("exists", expr) as number;
  return !!result;
}

/**
 * Returns 1 if **{feature}** is supported, 0 otherwise.  The
 * **{feature}** argument is a feature name like "nvim-0.2.1" or
 * "win32", see below.  See also `exists()`.
 *
 * To get the system name use `vim.uv`.os_uname() in Lua:
 *
 *     print(vim.uv.os_uname().sysname)
 *
 * If the code has a syntax error then Vimscript may skip the
 * rest of the line.  Put `:if` and `:endif` on separate lines to
 * avoid the syntax error:
 *
 *     if has('feature')
 *       let x = this_breaks_without_the_feature()
 *     endif
 *
 * Vim's compile-time feature-names (prefixed with "+") are not
 * recognized because Nvim is always compiled with all possible
 * features. `feature-compile`
 *
 * Feature names can be:
 * 1.  Nvim version. For example the "nvim-0.2.1" feature means
 *     that Nvim is version 0.2.1 or later:
 *
 *         if has("nvim-0.2.1")
 *           " ...
 *         endif
 *
 * 2.  Runtime condition or other pseudo-feature. For example the
 *     "win32" feature checks if the current system is Windows:
 *
 *         if has("win32")
 *           " ...
 *         endif
 *
 *     List of supported pseudo-feature names:
 *         acl             `ACL` support.
 *         bsd             BSD system (not macOS, use "mac" for that).
 *         clipboard       `clipboard` provider is available.
 *         fname_case      Case in file names matters (for Darwin and MS-Windows
 *                         this is not present).
 *         gui_running     Nvim has a GUI.
 *         iconv           Can use `iconv()` for conversion.
 *         linux           Linux system.
 *         mac             MacOS system.
 *         nvim            This is Nvim.
 *         python3         Legacy Vim `python3` interface. `has-python`
 *         pythonx         Legacy Vim `python_x` interface. `has-pythonx`
 *         sun             SunOS system.
 *         ttyin           input is a terminal (tty).
 *         ttyout          output is a terminal (tty).
 *         unix            Unix system.
 *         *vim_starting*  True during `startup`.
 *         win32           Windows system (32 or 64 bit).
 *         win64           Windows system (64 bit).
 *         wsl             WSL (Windows Subsystem for Linux) system.
 *
 * 3.  Vim patch. For example the "patch123" feature means that
 *     Vim patch 123 at the current `v:version` was included:
 *
 *         if v:version > 602 || v:version == 602 && has("patch148")
 *           " ...
 *         endif
 *
 * 4.  Vim version. For example the "patch-7.4.237" feature means
 *     that Nvim is Vim-compatible to version 7.4.237 or later.
 *
 *         if has("patch-7.4.237")
 *           " ...
 *         endif
 */
export async function has(
  denops: Denops,
  feature: string,
  check?: boolean,
): Promise<boolean> {
  const result = await denops.call("has", feature, check) as number;
  return !!result;
}

/**
 * Without **{end}** the result is a String, which is line **{lnum}**
 * from the current buffer.  Example:
 *
 *     getline(1)
 *
 * When **{lnum}** is a String that doesn't start with a
 * digit, `line()` is called to translate the String into a Number.
 * To get the line under the cursor:
 *
 *     getline(".")
 *
 * When **{lnum}** is a number smaller than 1 or bigger than the
 * number of lines in the buffer, an empty string is returned.
 *
 * When **{end}** is given the result is a `List` where each item is
 * a line from the current buffer in the range **{lnum}** to **{end}**,
 * including line **{end}**.
 * **{end}** is used in the same way as **{lnum}**.
 * Non-existing lines are silently omitted.
 * When **{end}** is before **{lnum}** an empty `List` is returned.
 * Example:
 *
 *     :let start = line('.')
 *     :let end = search("^$") - 1
 *     :let lines = getline(start, end)
 *
 * Can also be used as a `method`:
 *
 *     ComputeLnum()->getline()
 *
 * To get lines from another buffer see `getbufline()` and
 * `getbufoneline()`
 */
export async function getline(
  denops: Denops,
  lnum: string | number,
): Promise<string>;
export async function getline(
  denops: Denops,
  lnum: string | number,
  end: string | number,
): Promise<string[]>;
export async function getline(
  denops: Denops,
  lnum: string | number,
  end?: string | number,
): Promise<string | string[]> {
  return await denops.call("getline", lnum, end) as string;
}

/**
 * Set line **{lnum}** of the current buffer to **{text}**.  To insert
 * lines use `append()`. To set lines in another buffer use
 * `setbufline()`.  Any text properties in **{lnum}** are cleared.
 *
 * **{lnum}** is used like with `getline()`.
 * When **{lnum}** is just below the last line the **{text}** will be
 * added below the last line.
 * **{text}** can be any type or a List of any type, each item is
 * converted to a String.  When **{text}** is an empty List then
 * nothing is changed and FALSE is returned.
 *
 * If this succeeds, FALSE is returned.  If this fails (most likely
 * because **{lnum}** is invalid) TRUE is returned.
 * In `Vim9` script an error is given if **{lnum}** is invalid.
 *
 * Example:
 *
 *     :call setline(5, strftime("%c"))
 *
 * When **{text}** is a `List` then line **{lnum}** and following lines
 * will be set to the items in the list.  Example:
 *
 *     :call setline(5, ['aaa', 'bbb', 'ccc'])
 *
 * This is equivalent to:
 *
 *     :for [n, l] in [[5, 'aaa'], [6, 'bbb'], [7, 'ccc']]
 *     :  call setline(n, l)
 *     :endfor
 *
 * Note: The '[ and '] marks are not set.
 *
 * Can also be used as a `method`, the base is passed as the
 * second argument:
 *
 *     GetText()->setline(lnum)
 */
export async function setline(
  denops: Denops,
  lnum: string | number,
  text: string | string[],
): Promise<boolean> {
  const result = await denops.call("setline", lnum, text) as number;
  return !!result;
}
