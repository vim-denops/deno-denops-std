import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";

/**
 * Add a buffer to the buffer list with name **{name}** (must be a
 * String).
 * If a buffer for file **{name}** already exists, return that buffer
 * number.  Otherwise return the buffer number of the newly
 * created buffer.  When **{name}** is an empty string then a new
 * buffer is always created.
 * The buffer will not have 'buflisted' set and not be loaded
 * yet.  To add some text to the buffer use this:
 *
 *     let bufnr = bufadd('someName')
 *     call bufload(bufnr)
 *     call setbufline(bufnr, 1, ['some', 'text'])
 *
 * Returns 0 on error.
 * Can also be used as a `method`:
 *
 *     let bufnr = 'somename'->bufadd()
 */
export async function bufadd(
  denops: Denops,
  name: string,
): Promise<number> {
  const bufnr = await denops.call("bufadd", name);
  return bufnr as number;
}

/**
 * The result is a Number, which is `TRUE` if a buffer called
 * **{buf}** exists.
 * If the **{buf}** argument is a number, buffer numbers are used.
 * Number zero is the alternate buffer for the current window.
 *
 * If the **{buf}** argument is a string it must match a buffer name
 * exactly.  The name can be:
 * - Relative to the current directory.
 * - A full path.
 * - The name of a buffer with 'buftype' set to "nofile".
 * - A URL name.
 * Unlisted buffers will be found.
 * Note that help files are listed by their short name in the
 * output of `:buffers`, but bufexists() requires using their
 * long name to be able to find them.
 * bufexists() may report a buffer exists, but to use the name
 * with a `:buffer` command you may need to use `expand()`.  Esp
 * for MS-Windows 8.3 names in the form `"c:\DOCUME~1"`
 * Use "bufexists(0)" to test for the existence of an alternate
 * file name.
 *
 * Can also be used as a `method`:
 *
 *     let exists = 'somename'->bufexists()
 *
 * Obsolete name: buffer_exists().
 */
export async function bufexists(
  denops: Denops,
  buf: string | number,
): Promise<boolean> {
  const result = await denops.call("bufexists", buf) as number;
  return !!result;
}

/**
 * The result is a Number, which is `TRUE` if a buffer called
 * **{buf}** exists and is listed (has the 'buflisted' option set).
 * The **{buf}** argument is used like with `bufexists()`.
 *
 * Can also be used as a `method`:
 *
 *     let listed = 'somename'->buflisted()
 */
export async function buflisted(
  denops: Denops,
  buf: string | number,
): Promise<boolean> {
  const result = await denops.call("buflisted", buf) as number;
  return !!result;
}

/**
 * Ensure the buffer **{buf}** is loaded.  When the buffer name
 * refers to an existing file then the file is read.  Otherwise
 * the buffer will be empty.  If the buffer was already loaded
 * then there is no change.  If the buffer is not related to a
 * file the no file is read (e.g., when 'buftype' is "nofile").
 * If there is an existing swap file for the file of the buffer,
 * there will be no dialog, the buffer will be loaded anyway.
 * The **{buf}** argument is used like with `bufexists()`.
 *
 * Can also be used as a `method`:
 *
 *     eval 'somename'->bufload()
 */
export async function bufload(
  denops: Denops,
  buf: string | number,
): Promise<void> {
  await denops.call("bufload", buf);
}

/**
 * The result is a Number, which is `TRUE` if a buffer called
 * **{buf}** exists and is loaded (shown in a window or hidden).
 * The **{buf}** argument is used like with `bufexists()`.
 *
 * Can also be used as a `method`:
 *
 *     let loaded = 'somename'->bufloaded()
 */
export async function bufloaded(
  denops: Denops,
  buf: string | number,
): Promise<boolean> {
  const result = await denops.call("bufloaded", buf) as number;
  return !!result;
}

/**
 * The result is the name of a buffer.  Mostly as it is displayed
 * by the `:ls` command, but not using special names such as
 * "[No Name]".
 * If **{buf}** is omitted the current buffer is used.
 * If **{buf}** is a Number, that buffer number's name is given.
 * Number zero is the alternate buffer for the current window.
 * If **{buf}** is a String, it is used as a `file-pattern` to match
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
 * If the **{buf}** is a String, but you want to use it as a buffer
 * number, force it to be a Number by adding zero to it:
 *
 *     :echo bufname("3" + 0)
 *
 * Can also be used as a `method`:
 *
 *     echo bufnr->bufname()
 *
 * If the buffer doesn't exist, or doesn't have a name, an empty
 * string is returned.
 *
 *     bufname("#")            alternate buffer name
 *     bufname(3)              name of buffer 3
 *     bufname("%")            name of current buffer
 *     bufname("file2")        name of buffer where "file2" matches.
 *
 * Obsolete name: buffer_name().
 */
export async function bufname(
  denops: Denops,
  buf?: string | number,
): Promise<string> {
  return await denops.call("bufname", buf) as string;
}

/**
 * The result is the number of a buffer, as it is displayed by
 * the `:ls` command.  For the use of **{buf}**, see `bufname()`
 * above.
 *
 * If the buffer doesn't exist, -1 is returned.  Or, if the
 * **{create}** argument is present and TRUE, a new, unlisted,
 * buffer is created and its number is returned.  Example:
 *
 *     let newbuf = bufnr('Scratch001', 1)
 *
 * Using an empty name uses the current buffer. To create a new
 * buffer with an empty name use `bufadd()`.
 *
 * bufnr("$") is the last buffer:
 *
 *     :let last_buffer = bufnr("$")
 *
 * The result is a Number, which is the highest buffer number
 * of existing buffers.  Note that not all buffers with a smaller
 * number necessarily exist, because ":bwipeout" may have removed
 * them.  Use bufexists() to test for the existence of a buffer.
 *
 * Can also be used as a `method`:
 *
 *     echo bufref->bufnr()
 *
 * Obsolete name: buffer_number().
 *
 * Obsolete name for bufnr("$"): last_buffer_nr().
 */
export async function bufnr(
  denops: Denops,
  buf?: string | number,
  create?: boolean,
): Promise<number> {
  return await denops.call("bufnr", buf, create) as number;
}

/**
 * The result is a Number, which is the `window-ID` of the first
 * window associated with buffer **{buf}**.  For the use of **{buf}**,
 * see `bufname()` above.  If buffer **{buf}** doesn't exist or
 * there is no such window, -1 is returned.  Example:
 *
 *     echo "A window containing buffer 1 is " .. (bufwinid(1))
 *
 * Only deals with the current tab page.
 *
 * Can also be used as a `method`:
 *
 *     FindBuffer()->bufwinid()
 */
export async function bufwinid(
  denops: Denops,
  buf: string | number,
): Promise<number> {
  return await denops.call("bufwinid", buf) as number;
}

/**
 * Like `bufwinid()` but return the window number instead of the
 * `window-ID`.
 * If buffer **{buf}** doesn't exist or there is no such window, -1
 * is returned.  Example:
 *
 *     echo "A window containing buffer 1 is " .. (bufwinnr(1))
 *
 * The number can be used with `CTRL-W_w` and ":wincmd w"
 * `:wincmd`.
 *
 * Can also be used as a `method`:
 *
 *     FindBuffer()->bufwinnr()
 */
export async function bufwinnr(
  denops: Denops,
  buf: string | number,
): Promise<number> {
  return await denops.call("bufwinnr", buf) as number;
}

/**
 * Return a `List` with the lines starting from **{lnum}** to **{end}**
 * (inclusive) in the buffer **{buf}**.  If **{end}** is omitted, a
 * `List` with only the line **{lnum}** is returned.
 *
 * For the use of **{buf}**, see `bufname()` above.
 *
 * For **{lnum}** and **{end}** "$" can be used for the last line of the
 * buffer.  Otherwise a number must be used.
 *
 * When **{lnum}** is smaller than 1 or bigger than the number of
 * lines in the buffer, an empty `List` is returned.
 *
 * When **{end}** is greater than the number of lines in the buffer,
 * it is treated as **{end}** is set to the number of lines in the
 * buffer.  When **{end}** is before **{lnum}** an empty `List` is
 * returned.
 *
 * This function works only for loaded buffers.  For unloaded and
 * non-existing buffers, an empty `List` is returned.
 *
 * Example:
 *
 *     :let lines = getbufline(bufnr("myfile"), 1, "$")
 *
 * Can also be used as a `method`:
 *
 *     GetBufnr()->getbufline(lnum)
 */
export async function getbufline(
  denops: Denops,
  buf: string | number,
  lnum: string | number,
  end?: string | number,
): Promise<string[]> {
  return await denops.call("getbufline", buf, lnum, end) as string[];
}

/**
 * Set line **{lnum}** to **{text}** in buffer **{buf}**.  This works like
 * `setline()` for the specified buffer.
 *
 * This function works only for loaded buffers. First call
 * `bufload()` if needed.
 *
 * To insert lines use `appendbufline()`.
 * Any text properties in **{lnum}** are cleared.
 *
 * **{text}** can be a string to set one line, or a list of strings
 * to set multiple lines.  If the list extends below the last
 * line then those lines are added.
 *
 * For the use of **{buf}**, see `bufname()` above.
 *
 * **{lnum}** is used like with `setline()`.
 * Use "$" to refer to the last line in buffer **{buf}**.
 * When **{lnum}** is just below the last line the **{text}** will be
 * added below the last line.
 *
 * When **{buf}** is not a valid buffer, the buffer is not loaded or
 * **{lnum}** is not valid then 1 is returned.  In `Vim9` script an
 * error is given.
 * On success 0 is returned.
 *
 * Can also be used as a `method`, the base is passed as the
 * third argument:
 *
 *     GetText()->setbufline(buf, lnum)
 */
export async function setbufline(
  denops: Denops,
  buf: string | number,
  lnum: string | number,
  text: string | string[],
): Promise<boolean> {
  const result = await denops.call("setbufline", buf, lnum, text) as number;
  return !!result;
}
