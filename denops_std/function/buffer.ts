import { Denops } from "../deps.ts";

/**
 * Add a buffer to the buffer list with {name}.
 * If a buffer for file {name} already exists, return that buffer
 * number.  Otherwise return the buffer number of the newly
 * created buffer.  When {name} is an empty string then a new
 * buffer is always created.
 * The buffer will not have' 'buflisted' set.
 */
export async function bufadd(
  denops: Denops,
  name: string,
): Promise<number> {
  const bufnr = await denops.call("bufadd", name);
  return bufnr as number;
}

/**
 * The result is a Number, which is |TRUE| if a buffer called
 * {expr} exists.
 * If the {expr} argument is a number, buffer numbers are used.
 * Number zero is the alternate buffer for the current window.
 *
 * If the {expr} argument is a string it must match a buffer name
 * exactly.  The name can be:
 * - Relative to the current directory.
 * - A full path.
 * - The name of a buffer with 'buftype' set to "nofile".
 * - A URL name.
 * Unlisted buffers will be found.
 * Note that help files are listed by their short name in the
 * output of |:buffers|, but bufexists() requires using their
 * long name to be able to find them.
 * bufexists() may report a buffer exists, but to use the name
 * with a |:buffer| command you may need to use |expand()|.  Esp
 * for MS-Windows 8.3 names in the form "c:\DOCUME~1"
 * Use "bufexists(0)" to test for the existence of an alternate
 * file name.
 */
export async function bufexists(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.call("bufexists", name) as number;
  return !!result;
}

/**
 * The result is a Number, which is |TRUE| if a buffer called
 * {expr} exists and is listed (has the 'buflisted' option set).
 * The {expr} argument is used like with |bufexists()|.
 */
export async function buflisted(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.call("buflisted", name) as number;
  return !!result;
}

/**
 * Ensure the buffer {expr} is loaded.  When the buffer name
 * refers to an existing file then the file is read.  Otherwise
 * the buffer will be empty.  If the buffer was already loaded
 * then there is no change.
 * If there is an existing swap file for the file of the buffer,
 * there will be no dialog, the buffer will be loaded anyway.
 * The {expr} argument is used like with |bufexists()|.
 */
export async function bufload(
  denops: Denops,
  name: string | number,
): Promise<void> {
  await denops.call("bufload", name);
}

/**
 * The result is a Number, which is |TRUE| if a buffer called
 * {expr} exists and is loaded (shown in a window or hidden).
 * The {expr} argument is used like with |bufexists()|.
 */
export async function bufloaded(
  denops: Denops,
  name: string | number,
): Promise<boolean> {
  const result = await denops.call("bufloaded", name) as number;
  return !!result;
}

/**
 * The result is the name of a buffer, as it is displayed by the
 * ":ls" command.
 * If {expr} is omitted the current buffer is used.
 * If {expr} is a Number, that buffer number's name is given.
 * Number zero is the alternate buffer for the current window.
 * If {expr} is a String, it is used as a |file-pattern| to match
 * with the buffer names.  This is always done like 'magic' is
 * set and 'cpoptions' is empty.  When there is more than one
 * match an empty string is returned.
 * "" or "%" can be used for the current buffer, "#" for the
 * alternate buffer.
 * A full match is preferred, otherwise a match at the start, end
 * or middle of the buffer name is accepted.  If you only want a
 * full match then put "^" at the start and "$" at the end of the
 * pattern.
 * Listed buffers are found first.  If there is a single match
 * with a listed buffer, that one is returned.  Next unlisted
 * buffers are searched for.
 * If the {expr} is a String, but you want to use it as a buffer
 * number, force it to be a Number by adding zero to it: >
 *     :echo bufname("3" + 0)
 * If the buffer doesn't exist, or doesn't have a name, an empty
 * string is returned.
 *     bufname("#")		alternate buffer name
 *     bufname(3)		name of buffer 3
 *     bufname("%")		name of current buffer
 *     bufname("file2")	name of buffer where "file2" matches.
 */
export async function bufname(
  denops: Denops,
  name?: string | number,
): Promise<string> {
  return await denops.call("bufname", name) as string;
}

/**
 * The result is the number of a buffer, as it is displayed by
 * the ":ls" command.  For the use of {expr}, see |bufname()|
 * above.
 * If the buffer doesn't exist, -1 is returned.  Or, if the
 * {create} argument is present and not zero, a new, unlisted,
 * buffer is created and its number is returned.
 * bufnr("$") is the last buffer:
 * 	:let last_buffer = bufnr("$")
 * The result is a Number, which is the highest buffer number
 * of existing buffers.  Note that not all buffers with a smaller
 * number necessarily exist, because ":bwipeout" may have removed
 * them.  Use bufexists() to test for the existence of a buffer.
 */
export async function bufnr(
  denops: Denops,
  name: string | number,
): Promise<number> {
  return await denops.call("bufnr", name) as number;
}

/**
 * The result is a Number, which is the |window-ID| of the first
 * window associated with buffer {expr}.  For the use of {expr},
 * see |bufname()| above.  If buffer {expr} doesn't exist or
 * there is no such window, -1 is returned.  Example: >
 *
 *     echo "A window containing buffer 1 is " . (bufwinid(1))
 *
 * Only deals with the current tab page.
 */
export async function bufwinid(
  denops: Denops,
  name: string | number,
): Promise<number> {
  return await denops.call("bufwinid", name) as number;
}

/**
 * The result is a Number, which is the number of the first
 * window associated with buffer {expr}.  For the use of {expr},
 * see |bufname()| above.  If buffer {expr} doesn't exist or
 * there is no such window, -1 is returned.  Example: >
 *
 *     echo "A window containing buffer 1 is " . (bufwinnr(1))
 *
 * The number can be used with |CTRL-W_w| and ":wincmd w"
 * |:wincmd|.
 * Only deals with the current tab page.
 */
export async function bufwinnr(
  denops: Denops,
  name: string | number,
): Promise<number> {
  return await denops.call("bufwinnr", name) as number;
}

/**
 * Return a |List| with the lines starting from {lnum} to {end}
 * (inclusive) in the buffer {expr}.  If {end} is omitted, a
 * |List| with only the line {lnum} is returned.
 *
 * For the use of {expr}, see |bufname()| above.
 *
 * For {lnum} and {end} "$" can be used for the last line of the
 * buffer.  Otherwise a number must be used.
 *
 * When {lnum} is smaller than 1 or bigger than the number of
 * lines in the buffer, an empty |List| is returned.
 *
 * When {end} is greater than the number of lines in the buffer,
 * it is treated as {end} is set to the number of lines in the
 * buffer.  When {end} is before {lnum} an empty |List| is
 * returned.
 *
 * This function works only for loaded buffers.  For unloaded and
 * non-existing buffers, an empty |List| is returned.
 *
 * Example: >
 * 	:let lines = getbufline(bufnr("myfile"), 1, "$")
 */
export async function getbufline(
  denops: Denops,
  name: string | number,
  lnum: string | number,
  end?: string | number,
): Promise<string[]> {
  return await denops.call("getbufline", name, lnum, end) as string[];
}

/**
 * Set line {lnum} to {text} in buffer {expr}.  To insert
 * lines use |append()|.
 *
 * For the use of {expr}, see |bufname()| above.
 *
 * {lnum} is used like with |setline()|.
 * This works like |setline()| for the specified buffer.
 * On success 0 is returned, on failure 1 is returned.
 *
 * If {expr} is not a valid buffer or {lnum} is not valid, an
 * error message is given.
 */
export async function setbufline(
  denops: Denops,
  name: string | number,
  lnum: string | number,
  text: string | string[],
): Promise<boolean> {
  const result = await denops.call("setbufline", name, lnum, text) as number;
  return !!result;
}
