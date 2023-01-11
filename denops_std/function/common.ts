import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";

/**
 * The result is a Number, which is |TRUE| if {expr} is
 * defined, zero otherwise.
 *
 * For checking for a supported feature use |has()|.
 * For checking if a file exists use |filereadable()|.
 *
 * The {expr} argument is a string, which contains one of these:
 * 	&option-name	Vim option (only checks if it exists,
 * 			not if it really works)
 * 	+option-name	Vim option that works.
 * 	$ENVNAME	environment variable (could also be
 * 			done by comparing with an empty
 * 			string)
 * 	*funcname	built-in function (see |functions|)
 * 			or user defined function (see
 * 			|user-functions|). Also works for a
 * 			variable that is a Funcref.
 * 	varname		internal variable (see
 * 			|internal-variables|).  Also works
 * 			for |curly-braces-names|, |Dictionary|
 * 			entries, |List| items, etc.  Beware
 * 			that evaluating an index may cause an
 * 			error message for an invalid
 * 			expression.  E.g.:
 * 			   :let l = [1, 2, 3]
 * 			   :echo exists("l[5]")
 * 			   0
 * 			   :echo exists("l[xx]")
 * 			   E121: Undefined variable: xx
 * 			   0
 * 	:cmdname	Ex command: built-in command, user
 * 			command or command modifier |:command|.
 * 			Returns:
 * 			1  for match with start of a command
 * 			2  full match with a command
 * 			3  matches several user commands
 * 			To check for a supported command
 * 			always check the return value to be 2.
 * 	:2match		The |:2match| command.
 * 	:3match		The |:3match| command.
 * 	#event		autocommand defined for this event
 * 	#event#pattern	autocommand defined for this event and
 * 			pattern (the pattern is taken
 * 			literally and compared to the
 * 			autocommand patterns character by
 * 			character)
 * 	#group		autocommand group exists
 * 	#group#event	autocommand defined for this group and
 * 			event.
 * 	#group#event#pattern
 * 			autocommand defined for this group,
 * 			event and pattern.
 * 	##event		autocommand for this event is
 * 			supported.
 *
 * Examples:
 * 	exists("&mouse")
 * 	exists("$HOSTNAME")
 * 	exists("*strftime")
 * 	exists("*s:MyFunc")
 * 	exists("bufcount")
 * 	exists(":Make")
 * 	exists("#CursorHold")
 * 	exists("#BufReadPre#*.gz")
 * 	exists("#filetypeindent")
 * 	exists("#filetypeindent#FileType")
 * 	exists("#filetypeindent#FileType#*")
 * 	exists("##ColorScheme")
 * There must be no space between the symbol (&/$/* /#) and the
 * name.
 * There must be no extra characters after the name, although in
 * a few cases this is ignored.  That may become more strict in
 * the future, thus don't count on it!
 * Working example:
 * 	exists(":make")
 * NOT working example:
 * 	exists(":make install")

 * Note that the argument must be a string, not the name of the
 * variable itself.  For example:
 * 	exists(bufcount)
 * This doesn't check for existence of the "bufcount" variable,
 * but gets the value of "bufcount", and checks if that exists.
 */
export async function exists(
  denops: Denops,
  expr: string,
): Promise<boolean> {
  const result = await denops.call("exists", expr) as number;
  return !!result;
}

/**
 * Returns 1 if {feature} is supported, 0 otherwise.  The
 * {feature} argument is a feature name like "nvim-0.2.1" or
 * "win32", see below.  See also |exists()|.
 *
 * Vim's compile-time feature-names (prefixed with "+") are not
 * recognized because Nvim is always compiled with all possible
 * features. |feature-compile|
 *
 * Feature names can be:
 * 1.  Nvim version. For example the "nvim-0.2.1" feature means
 *     that Nvim is version 0.2.1 or later:
 * 	:if has("nvim-0.2.1")
 *
 * 2.  Runtime condition or other pseudo-feature. For example the
 *     "win32" feature checks if the current system is Windows:
 * 	:if has("win32")
 * 					*feature-list*
 *     List of supported pseudo-feature names:
 *         acl		|ACL| support
 *         iconv		Can use |iconv()| for conversion.
 *         +shellslash	Can use backslashes in filenames (Windows)
 * 	clipboard	|clipboard| provider is available.
 * 	nvim		This is Nvim.
 * 	python2		Legacy Vim |python2| interface. |has-python|
 * 	python3		Legacy Vim |python3| interface. |has-python|
 * 	pythonx		Legacy Vim |python_x| interface. |has-pythonx|
 * 	ttyin		input is a terminal (tty)
 * 	ttyout		output is a terminal (tty)
 * 	unix		Unix system.
 * 	*vim_starting*	True during |startup|.
 * 	win32		Windows system (32 or 64 bit).
 * 	wsl		WSL (Windows Subsystem for Linux) system
 *
 * 					*has-patch*
 * 3.  Vim patch. For example the "patch123" feature means that
 *     Vim patch 123 at the current |v:version| was included:
 * 	:if v:version > 602 || v:version == 602 && has("patch148")
 *
 * 4.  Vim version. For example the "patch-7.4.237" feature means
 *     that Nvim is Vim-compatible to version 7.4.237 or later.
 * 	:if has("patch-7.4.237")
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
 * Without {end} the result is a String, which is line {lnum}
 * from the current buffer.  Example: >
 * 	getline(1)
 * When {lnum} is a String that doesn't start with a
 * digit, line() is called to translate the String into a Number.
 * To get the line under the cursor: >
 * 	getline(".")
 * When {lnum} is smaller than 1 or bigger than the number of
 * lines in the buffer, an empty string is returned.
 *
 * When {end} is given the result is a |List| where each item is
 * a line from the current buffer in the range {lnum} to {end},
 * including line {end}.
 * {end} is used in the same way as {lnum}.
 * Non-existing lines are silently omitted.
 * When {end} is before {lnum} an empty |List| is returned.
 * Example: >
 * 	:let start = line('.')
 * 	:let end = search("^$") - 1
 * 	:let lines = getline(start, end)
 *
 * To get lines from another buffer see |getbufline()|
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
 * Set line {lnum} of the current buffer to {text}.  To insert
 * lines use |append()|. To set lines in another buffer use
 * |setbufline()|.
 *
 * {lnum} is used like with |getline()|.
 * When {lnum} is just below the last line the {text} will be
 * added as a new line.
 *
 * If this succeeds, 0 is returned.  If this fails (most likely
 * because {lnum} is invalid) 1 is returned.
 *
 * Example:
 * 	:call setline(5, strftime("%c"))
 *
 * When {text} is a |List| then line {lnum} and following lines
 * will be set to the items in the list.  Example:
 * 	:call setline(5, ['aaa', 'bbb', 'ccc'])
 * This is equivalent to:
 * 	:for [n, l] in [[5, 'aaa'], [6, 'bbb'], [7, 'ccc']]
 * 	:  call setline(n, l)
 * 	:endfor
 *
 * Note: The '[ and '] marks are not set.
 */
export async function setline(
  denops: Denops,
  lnum: string | number,
  text: string | string[],
): Promise<boolean> {
  const result = await denops.call("setline", lnum, text) as number;
  return !!result;
}
