// NOTE: This file is generated. Do NOT modify it manually.
// deno-lint-ignore-file camelcase
import { Denops } from "../../deps.ts";

/**
 * Returns Dictionary of |api-metadata|.
 */
export function api_info(denops: Denops): Promise<unknown>;
export function api_info(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("api_info", ...args);
}

/**
 * Run {cmd} and add an error message to |v:errors| if it does
 * NOT produce a beep or visual bell.
 * Also see |assert_fails()|.
 */
export function assert_beeps(denops: Denops, cmd: unknown): Promise<unknown>;
export function assert_beeps(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_beeps", ...args);
}

/**
 * When {expected} and {actual} are not equal an error message is
 * added to |v:errors|.
 * There is no automatic conversion, the String "4" is different
 * from the Number 4.  And the number 4 is different from the
 * Float 4.0.  The value of 'ignorecase' is not used here, case
 * always matters.
 * When {msg} is omitted an error in the form "Expected
 * {expected} but got {actual}" is produced.
 * Example:
 * 	assert_equal('foo', 'bar')
 * Will result in a string to be added to |v:errors|:
 * 	test.vim line 12: Expected 'foo' but got 'bar' ~
 */
export function assert_equal(
  denops: Denops,
  expected: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_equal(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_equal", ...args);
}

/**
 * When v:exception does not contain the string {error} an error
 * message is added to |v:errors|.
 * This can be used to assert that a command throws an exception.
 * Using the error number, followed by a colon, avoids problems
 * with translations:
 * 	try
 * 	  commandthatfails
 * 	  call assert_false(1, 'command should have failed')
 * 	catch
 * 	  call assert_exception('E492:')
 * 	endtry
 */
export function assert_exception(
  denops: Denops,
  error: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_exception(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_exception", ...args);
}

/**
 * Run {cmd} and add an error message to |v:errors| if it does
 * NOT produce an error.
 * When {error} is given it must match in |v:errmsg|.
 * Note that beeping is not considered an error, and some failing
 * commands only beep.  Use |assert_beeps()| for those.
 */
export function assert_fails(
  denops: Denops,
  cmd: unknown,
  error?: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_fails(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_fails", ...args);
}

/**
 * When {actual} is not false an error message is added to
 * |v:errors|, like with |assert_equal()|.
 * A value is false when it is zero or |v:false|. When "{actual}"
 * is not a number or |v:false| the assert fails.
 * When {msg} is omitted an error in the form
 * "Expected False but got {actual}" is produced.
 */
export function assert_false(
  denops: Denops,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_false(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_false", ...args);
}

/**
 * This asserts number and |Float| values.  When {actual}  is lower
 * than {lower} or higher than {upper} an error message is added
 * to |v:errors|.  Also see |assert-return|.
 * When {msg} is omitted an error in the form
 * "Expected range {lower} - {upper}, but got {actual}" is
 * produced.
 */
export function assert_inrange(
  denops: Denops,
  lower: unknown,
  upper: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_inrange(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_inrange", ...args);
}

/**
 * When {pattern} does not match {actual} an error message is
 * added to |v:errors|.
 * {pattern} is used as with |=~|: The matching is always done
 * like 'magic' was set and 'cpoptions' is empty, no matter what
 * the actual value of 'magic' or 'cpoptions' is.
 * {actual} is used as a string, automatic conversion applies.
 * Use "^" and "$" to match with the start and end of the text.
 * Use both to match the whole text.
 * When {msg} is omitted an error in the form
 * "Pattern {pattern} does not match {actual}" is produced.
 * Example:
 * 	assert_match('^f.*o$', 'foobar')
 * Will result in a string to be added to |v:errors|:
 * 	test.vim line 12: Pattern '^f.*o$' does not match 'foobar' ~
 */
export function assert_match(
  denops: Denops,
  pattern: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_match(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_match", ...args);
}

/**
 * The opposite of `assert_equal()`: add an error message to
 * |v:errors| when {expected} and {actual} are equal.
 */
export function assert_notequal(
  denops: Denops,
  expected: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_notequal(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_notequal", ...args);
}

/**
 * The opposite of `assert_match()`: add an error message to
 * |v:errors| when {pattern} matches {actual}.
 */
export function assert_notmatch(
  denops: Denops,
  pattern: unknown,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_notmatch(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_notmatch", ...args);
}

/**
 * Report a test failure directly, using {msg}.
 */
export function assert_report(denops: Denops, msg: unknown): Promise<unknown>;
export function assert_report(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_report", ...args);
}

/**
 * When {actual} is not true an error message is added to
 * |v:errors|, like with |assert_equal()|.
 * A value is |TRUE| when it is a non-zero number or |v:true|.
 * When {actual} is not a number or |v:true| the assert fails.
 * When {msg} is omitted an error in the form "Expected True but
 * got {actual}" is produced.
 */
export function assert_true(
  denops: Denops,
  actual: unknown,
  msg?: unknown,
): Promise<unknown>;
export function assert_true(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("assert_true", ...args);
}

/**
 * Close a channel or a specific stream associated with it.
 * For a job, {stream} can be one of "stdin", "stdout",
 * "stderr" or "rpc" (closes stdin/stdout for a job started
 * with `"rpc":v:true`) If {stream} is omitted, all streams
 * are closed. If the channel is a pty, this will then close the
 * pty master, sending SIGHUP to the job process.
 * For a socket, there is only one stream, and {stream} should be
 * ommited.
 */
export function chanclose(
  denops: Denops,
  id: unknown,
  stream?: unknown,
): Promise<unknown>;
export function chanclose(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("chanclose", ...args);
}

/**
 * Send data to channel {id}. For a job, it writes it to the
 * stdin of the process. For the stdio channel |channel-stdio|,
 * it writes to Nvim's stdout.  Returns the number of bytes
 * written if the write succeeded, 0 otherwise.
 * See |channel-bytes| for more information.
 * {data} may be a string, string convertible, or a list.  If
 * {data} is a list, the items will be joined by newlines; any
 * newlines in an item will be sent as NUL. To send a final
 * newline, include a final empty string. Example:
 * 	:call chansend(id, ["abc", "123\n456", ""])
 *  		will send "abc<NL>123<NUL>456<NL>".
 * chansend() writes raw data, not RPC messages.  If the channel
 * was created with `"rpc":v:true` then the channel expects RPC
 * messages, use |rpcnotify()| and |rpcrequest()| instead.
 */
export function chansend(
  denops: Denops,
  id: unknown,
  data: unknown,
): Promise<unknown>;
export function chansend(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("chansend", ...args);
}

/**
 * Returns a |Dictionary| representing the |context| at {index}
 * from the top of the |context-stack| (see |context-dict|).
 * If {index} is not given, it is assumed to be 0 (i.e.: top).
 */
export function ctxget(denops: Denops, index: unknown): Promise<unknown>;
export function ctxget(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxget", ...args);
}

/**
 * Pops and restores the |context| at the top of the
 * |context-stack|.
 */
export function ctxpop(denops: Denops): Promise<unknown>;
export function ctxpop(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxpop", ...args);
}

/**
 * Pushes the current editor state (|context|) on the
 * |context-stack|.
 * If {types} is given and is a |List| of |String|s, it specifies
 * which |context-types| to include in the pushed context.
 * Otherwise, all context types are included.
 */
export function ctxpush(denops: Denops, types: unknown): Promise<unknown>;
export function ctxpush(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxpush", ...args);
}

/**
 * Sets the |context| at {index} from the top of the
 * |context-stack| to that represented by {context}.
 * {context} is a Dictionary with context data (|context-dict|).
 * If {index} is not given, it is assumed to be 0 (i.e.: top).
 */
export function ctxset(
  denops: Denops,
  context: unknown,
  index?: unknown,
): Promise<unknown>;
export function ctxset(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxset", ...args);
}

/**
 * Returns the size of the |context-stack|.
 */
export function ctxsize(denops: Denops): Promise<unknown>;
export function ctxsize(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxsize", ...args);
}

/**
 * Adds a watcher to a dictionary. A dictionary watcher is
 * identified by three components:
 * - A dictionary({dict});
 * - A key pattern({pattern}).
 * - A function({callback}).
 * After this is called, every change on {dict} and on keys
 * matching {pattern} will result in {callback} being invoked.
 * For example, to watch all global variables:
 * 	silent! call dictwatcherdel(g:, '*', 'OnDictChanged')
 * 	function! OnDictChanged(d,k,z)
 * 	  echomsg string(a:k) string(a:z)
 * 	endfunction
 * 	call dictwatcheradd(g:, '*', 'OnDictChanged')
 * For now {pattern} only accepts very simple patterns that can
 * contain a '*' at the end of the string, in which case it will
 * match every key that begins with the substring before the '*'.
 * That means if '*' is not the last character of {pattern}, only
 * keys that are exactly equal as {pattern} will be matched.
 * The {callback} receives three arguments:
 * - The dictionary being watched.
 * - The key which changed.
 * - A dictionary containing the new and old values for the key.
 * The type of change can be determined by examining the keys
 * present on the third argument:
 * - If contains both `old` and `new`, the key was updated.
 * - If it contains only `new`, the key was added.
 * - If it contains only `old`, the key was deleted.
 * This function can be used by plugins to implement options with
 * validation and parsing logic.
 */
export function dictwatcheradd(
  denops: Denops,
  dict: unknown,
  pattern: unknown,
  callback: unknown,
): Promise<unknown>;
export function dictwatcheradd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("dictwatcheradd", ...args);
}

/**
 * Removes a watcher added  with |dictwatcheradd()|. All three
 * arguments must match the ones passed to |dictwatcheradd()| in
 * order for the watcher to be successfully deleted.
 */
export function dictwatcherdel(
  denops: Denops,
  dict: unknown,
  pattern: unknown,
  callback: unknown,
): Promise<unknown>;
export function dictwatcherdel(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("dictwatcherdel", ...args);
}

/**
 * Returns a |String| which is a unique identifier of the
 * container type (|List|, |Dict| and |Partial|). It is
 * guaranteed that for the mentioned types `id(v1) ==# id(v2)`
 * returns true iff `type(v1) == type(v2) && v1 is v2` (note:
 * |v:_null_list| and |v:_null_dict| have the same `id()` with
 * different types because they are internally represented as
 * a NULL pointers). Currently `id()` returns a hexadecimal
 * representanion of the pointers to the containers (i.e. like
 * `0x994a40`), same as `printf("%p", {expr})`, but it is advised
 * against counting on exact format of return value.
 * It is not guaranteed that `id(no_longer_existing_container)`
 * will not be equal to some other `id()`: new containers may
 * reuse identifiers of the garbage-collected ones.
 */
export function id(denops: Denops, expr: unknown): Promise<unknown>;
export function id(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("id", ...args);
}

/**
 * Return the PID (process id) of |job-id| {job}.
 */
export function jobpid(denops: Denops, job: unknown): Promise<unknown>;
export function jobpid(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("jobpid", ...args);
}

/**
 * Resize the pseudo terminal window of |job-id| {job} to {width}
 * columns and {height} rows.
 * Fails if the job was not started with `"pty":v:true`.
 */
export function jobresize(
  denops: Denops,
  job: unknown,
  width: unknown,
  height: unknown,
): Promise<unknown>;
export function jobresize(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("jobresize", ...args);
}

/**
 * Spawns {cmd} as a job.
 * If {cmd} is a List it runs directly (no 'shell').
 * If {cmd} is a String it runs in the 'shell', like this:
 *   :call jobstart(split(&shell) + split(&shellcmdflag) + ['{cmd}'])
 * (See |shell-unquoting| for details.)
 * Example:
 *   :call jobstart('nvim -h', {'on_stdout':{j,d,e->append(line('.'),d)}})
 * Returns |job-id| on success, 0 on invalid arguments (or job
 * table is full), -1 if {cmd}[0] or 'shell' is not executable.
 * The returned job-id is a valid |channel-id| representing the
 * job's stdio streams. Use |chansend()| (or |rpcnotify()| and
 * |rpcrequest()| if "rpc" was enabled) to send data to stdin and
 * |chanclose()| to close the streams without stopping the job.
 * See |job-control| and |RPC|.
 * NOTE: on Windows if {cmd} is a List:
 *   - cmd[0] must be an executable (not a "built-in"). If it is
 *     in $PATH it can be called by name, without an extension:
 *       :call jobstart(['ping', 'neovim.io'])
 *     If it is a full or partial path, extension is required:
 *       :call jobstart(['System32\ping.exe', 'neovim.io'])
 *   - {cmd} is collapsed to a string of quoted args as expected
 *     by CommandLineToArgvW https://msdn.microsoft.com/bb776391
 *     unless cmd[0] is some form of "cmd.exe".
 * {opts} is a dictionary with these keys:
 *   |on_stdout|: stdout event handler (function name or |Funcref|)
 *   stdout_buffered : read stdout in |channel-buffered| mode.
 *   |on_stderr|: stderr event handler (function name or |Funcref|)
 *   stderr_buffered : read stderr in |channel-buffered| mode.
 *   |on_exit|  : exit event handler (function name or |Funcref|)
 *   cwd      : Working directory of the job; defaults to
 *              |current-directory|.
 *   rpc      : If set, |msgpack-rpc| will be used to communicate
 * 	     with the job over stdin and stdout. "on_stdout" is
 * 	     then ignored, but "on_stderr" can still be used.
 *   pty      : If set, the job will be connected to a new pseudo
 * 	     terminal and the job streams are connected to the
 * 	     master file descriptor. "on_stderr" is ignored,
 * 	     "on_stdout" receives all output.
 *   width    : (pty only) Width of the terminal screen
 *   height   : (pty only) Height of the terminal screen
 *   TERM     : (pty only) $TERM environment variable
 *   detach   : (non-pty only) Detach the job process: it will
 * 	     not be killed when Nvim exits. If the process
 * 	     exits before Nvim, "on_exit" will be invoked.
 * {opts} is passed as |self| dictionary to the callback; the
 * caller may set other keys to pass application-specific data.
 * Returns:
 *   - The channel ID on success
 *   - 0 on invalid arguments
 *   - -1 if {cmd}[0] is not executable.
 * See also |job-control|, |channel|, |msgpack-rpc|.
 */
export function jobstart(
  denops: Denops,
  cmd: unknown,
  opts?: unknown,
): Promise<unknown>;
export function jobstart(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("jobstart", ...args);
}

/**
 * Stop |job-id| {id} by sending SIGTERM to the job process. If
 * the process does not terminate after a timeout then SIGKILL
 * will be sent. When the job terminates its |on_exit| handler
 * (if any) will be invoked.
 * See |job-control|.
 */
export function jobstop(denops: Denops, id: unknown): Promise<unknown>;
export function jobstop(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("jobstop", ...args);
}

/**
 * Waits for jobs and their |on_exit| handlers to complete.
 * {jobs} is a List of |job-id|s to wait for.
 * {timeout} is the maximum waiting time in milliseconds, -1
 * means forever.
 * Timeout of 0 can be used to check the status of a job:
 * 	let running = jobwait([{job-id}], 0)[0] == -1
 * During jobwait() callbacks for jobs not in the {jobs} list may
 * be invoked. The screen will not redraw unless |:redraw| is
 * invoked by a callback.
 * Returns a list of len({jobs}) integers, where each integer is
 * the status of the corresponding job:
 * 	Exit-code, if the job exited
 * 	-1 if the timeout was exceeded
 * 	-2 if the job was interrupted (by |CTRL-C|)
 * 	-3 if the job-id is invalid
 */
export function jobwait(
  denops: Denops,
  jobs: unknown,
  timeout?: unknown,
): Promise<unknown>;
export function jobwait(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("jobwait", ...args);
}

/**
 * Returns a |List| of |Dictionaries| describing |menus| (defined
 * by |:menu|, |:amenu|, …), including |hidden-menus|.
 * {path} matches a menu by name, or all menus if {path} is an
 * empty string.  Example:
 * 	:echo menu_get('File','')
 * 	:echo menu_get('')
 * {modes} is a string of zero or more modes (see |maparg()| or
 * |creating-menus| for the list of modes). "a" means "all".
 * Example:
 * 	nnoremenu &Test.Test inormal
 * 	inoremenu Test.Test insert
 * 	vnoremenu Test.Test x
 * 	echo menu_get("")
 * returns something like this:
 * 	[ {
 * 	  "hidden": 0,
 * 	  "name": "Test",
 * 	  "priority": 500,
 * 	  "shortcut": 84,
 * 	  "submenus": [ {
 * 	    "hidden": 0,
 * 	    "mappings": {
 * 	      i": {
 * 		"enabled": 1,
 * 		"noremap": 1,
 * 		"rhs": "insert",
 * 		"sid": 1,
 * 		"silent": 0
 * 	      },
 * 	      n": { ... },
 * 	      s": { ... },
 * 	      v": { ... }
 * 	    },
 * 	    "name": "Test",
 * 	    "priority": 500,
 * 	    "shortcut": 0
 * 	  } ]
 * 	} ]
 */
export function menu_get(
  denops: Denops,
  path: unknown,
  modes: unknown,
): Promise<unknown>;
export function menu_get(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("menu_get", ...args);
}

/**
 * Convert a list of VimL objects to msgpack. Returned value is
 * |readfile()|-style list. Example:
 * 	call writefile(msgpackdump([{}]), 'fname.mpack', 'b')
 * This will write the single 0x80 byte to `fname.mpack` file
 * (dictionary with zero items is represented by 0x80 byte in
 * messagepack).
 * Limitations:
 * 1. |Funcref|s cannot be dumped.
 * 2. Containers that reference themselves cannot be dumped.
 * 3. Dictionary keys are always dumped as STR strings.
 * 4. Other strings are always dumped as BIN strings.
 * 5. Points 3. and 4. do not apply to |msgpack-special-dict|s.
 */
export function msgpackdump(denops: Denops, list: unknown): Promise<unknown>;
export function msgpackdump(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("msgpackdump", ...args);
}

/**
 * Convert a |readfile()|-style list to a list of VimL objects.
 * Example:
 * 	let fname = expand('~/.config/nvim/shada/main.shada')
 * 	let mpack = readfile(fname, 'b')
 * 	let shada_objects = msgpackparse(mpack)
 * This will read ~/.config/nvim/shada/main.shada file to
 * `shada_objects` list.
 * Limitations:
 * 1. Mapping ordering is not preserved unless messagepack
 *    mapping is dumped using generic  mapping
 *    (|msgpack-special-map|).
 * 2. Since the parser aims to preserve all data untouched
 *    (except for 1.) some strings are parsed to
 *    |msgpack-special-dict| format which is not convenient to
 *    use.
 * Some messagepack strings may be parsed to special
 * dictionaries. Special dictionaries are dictionaries which
 * 1. Contain exactly two keys: `_TYPE` and `_VAL`.
 * 2. `_TYPE` key is one of the types found in |v:msgpack_types|
 *    variable.
 * 3. Value for `_VAL` has the following format (Key column
 *    contains name of the key from |v:msgpack_types|):
 * Key	Value ~
 * nil	Zero, ignored when dumping.  Not returned by
 * 	|msgpackparse()| since |v:null| was introduced.
 * boolean	One or zero.  When dumping it is only checked that
 * 	value is a |Number|.  Not returned by |msgpackparse()|
 * 	since |v:true| and |v:false| were introduced.
 * integer	|List| with four numbers: sign (-1 or 1), highest two
 * 	bits, number with bits from 62nd to 31st, lowest 31
 * 	bits. I.e. to get actual number one will need to use
 * 	code like
 * 		_VAL[0] * ((_VAL[1] << 62)
 * 		           & (_VAL[2] << 31)
 * 		           & _VAL[3])
 * 	Special dictionary with this type will appear in
 * 	|msgpackparse()| output under one of the following
 * 	circumstances:
 * 	1. |Number| is 32-bit and value is either above
 * 	   INT32_MAX or below INT32_MIN.
 * 	2. |Number| is 64-bit and value is above INT64_MAX. It
 * 	   cannot possibly be below INT64_MIN because msgpack
 * 	   C parser does not support such values.
 * float	|Float|. This value cannot possibly appear in
 * 	|msgpackparse()| output.
 * string	|readfile()|-style list of strings. This value will
 * 	appear in |msgpackparse()| output if string contains
 * 	zero byte or if string is a mapping key and mapping is
 * 	being represented as special dictionary for other
 * 	reasons.
 * binary	|readfile()|-style list of strings. This value will
 * 	appear in |msgpackparse()| output if binary string
 * 	contains zero byte.
 * array	|List|. This value cannot appear in |msgpackparse()|
 * 	output.
 * map	|List| of |List|s with two items (key and value) each.
 * 	This value will appear in |msgpackparse()| output if
 * 	parsed mapping contains one of the following keys:
 * 	1. Any key that is not a string (including keys which
 * 	   are binary strings).
 * 	2. String with NUL byte inside.
 * 	3. Duplicate key.
 * 	4. Empty key.
 * ext	|List| with two values: first is a signed integer
 * 	representing extension type. Second is
 * 	|readfile()|-style list of strings.
 */
export function msgpackparse(denops: Denops, list: unknown): Promise<unknown>;
export function msgpackparse(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("msgpackparse", ...args);
}

/**
 * Sends {event} to {channel} via |RPC| and returns immediately.
 * If {channel} is 0, the event is broadcast to all channels.
 * Example:
 * 	:au VimLeave call rpcnotify(0, "leaving")
 */
export function rpcnotify(
  denops: Denops,
  channel: unknown,
  event: unknown,
  args?: unknown,
): Promise<unknown>;
export function rpcnotify(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("rpcnotify", ...args);
}

/**
 * Sends a request to {channel} to invoke {method} via
 * |RPC| and blocks until a response is received.
 * Example:
 * 	:let result = rpcrequest(rpc_chan, "func", 1, 2, 3)
 */
export function rpcrequest(
  denops: Denops,
  channel: unknown,
  method: unknown,
  args?: unknown,
): Promise<unknown>;
export function rpcrequest(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("rpcrequest", ...args);
}

/**
 * Deprecated. Replace
 * 	:let id = rpcstart('prog', ['arg1', 'arg2'])
 * with
 * 	:let id = jobstart(['prog', 'arg1', 'arg2'], {'rpc': v:true})
 */
export function rpcstart(
  denops: Denops,
  prog: unknown,
  argv?: unknown,
): Promise<unknown>;
export function rpcstart(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("rpcstart", ...args);
}

/**
 * Opens a socket or named pipe at {address} and listens for
 * |RPC| messages. Clients can send |API| commands to the address
 * to control Nvim. Returns the address string.
 * If {address} does not contain a colon ":" it is interpreted as
 * a named pipe or Unix domain socket path.
 * Example:
 * 	if has('win32')
 * 	  call serverstart('\\.\pipe\nvim-pipe-1234')
 * 	else
 * 	  call serverstart('nvim.sock')
 * 	endif
 * If {address} contains a colon ":" it is interpreted as a TCP
 * address where the last ":" separates the host and port.
 * Assigns a random port if it is empty or 0. Supports IPv4/IPv6.
 * Example:
 * 	:call serverstart('::1:12345')
 * If no address is given, it is equivalent to:
 * 	:call serverstart(tempname())
 *  		|$NVIM_LISTEN_ADDRESS| is set to {address} if not already set.
 */
export function serverstart(denops: Denops, address: unknown): Promise<unknown>;
export function serverstart(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("serverstart", ...args);
}

/**
 * Closes the pipe or socket at {address}.
 * Returns TRUE if {address} is valid, else FALSE.
 * If |$NVIM_LISTEN_ADDRESS| is stopped it is unset.
 * If |v:servername| is stopped it is set to the next available
 * address returned by |serverlist()|.
 */
export function serverstop(denops: Denops, address: unknown): Promise<unknown>;
export function serverstop(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("serverstop", ...args);
}

/**
 * Define a new sign named {name} or modify the attributes of an
 * existing sign.  This is similar to the |:sign-define| command.
 * Prefix {name} with a unique text to avoid name collisions.
 * There is no {group} like with placing signs.
 * The {name} can be a String or a Number.  The optional {dict}
 * argument specifies the sign attributes.  The following values
 * are supported:
 *     icon	full path to the bitmap file for the sign.
 *     linehl	highlight group used for the whole line the
 * 		sign is placed in.
 *     text	text that is displayed when there is no icon
 * 		or the GUI is not being used.
 *     texthl	highlight group used for the text item
 *     numhl	highlight group used for 'number' column at the
 * 		associated line. Overrides |hl-LineNr|,
 * 		|hl-CursorLineNr|.
 * If the sign named {name} already exists, then the attributes
 * of the sign are updated.
 * Returns 0 on success and -1 on failure.
 * Examples:
 * 	call sign_define("mySign", {"text" : "=>", "texthl" :
 * 			\ "Error", "linehl" : "Search"})
 */
export function sign_define(
  denops: Denops,
  name: unknown,
  dict?: unknown,
): Promise<unknown>;
export function sign_define(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_define", ...args);
}

/**
 * Get a list of defined signs and their attributes.
 * This is similar to the |:sign-list| command.
 * If the {name} is not supplied, then a list of all the defined
 * signs is returned. Otherwise the attribute of the specified
 * sign is returned.
 * Each list item in the returned value is a dictionary with the
 * following entries:
 * 	icon	full path to the bitmap file of the sign
 * 	linehl	highlight group used for the whole line the
 * 		sign is placed in.
 * 	name	name of the sign
 * 	text	text that is displayed when there is no icon
 * 		or the GUI is not being used.
 * 	texthl	highlight group used for the text item
 * 	numhl	highlight group used for 'number' column at the
 * 		associated line. Overrides |hl-LineNr|,
 * 		|hl-CursorLineNr|.
 * Returns an empty List if there are no signs and when {name} is
 * not found.
 * Examples:
 * 	" Get a list of all the defined signs
 * 	echo sign_getdefined()
 * 	" Get the attribute of the sign named mySign
 * 	echo sign_getdefined("mySign")
 */
export function sign_getdefined(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function sign_getdefined(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_getdefined", ...args);
}

/**
 * Return a list of signs placed in a buffer or all the buffers.
 * This is similar to the |:sign-place-list| command.
 * If the optional buffer name {expr} is specified, then only the
 * list of signs placed in that buffer is returned.  For the use
 * of {expr}, see |bufname()|. The optional {dict} can contain
 * the following entries:
 *    group	select only signs in this group
 *    id		select sign with this identifier
 *    lnum		select signs placed in this line. For the use
 * 		of {lnum}, see |line()|.
 * If {group} is '*', then signs in all the groups including the
 * global group are returned. If {group} is not supplied or is an
 * empty string, then only signs in the global group are
 * returned.  If no arguments are supplied, then signs in the
 * global group placed in all the buffers are returned.
 * See |sign-group|.
 * Each list item in the returned value is a dictionary with the
 * following entries:
 * 	bufnr	number of the buffer with the sign
 * 	signs	list of signs placed in {bufnr}. Each list
 * 		item is a dictionary with the below listed
 * 		entries
 * The dictionary for each sign contains the following entries:
 * 	group	sign group. Set to '' for the global group.
 * 	id	identifier of the sign
 * 	lnum	line number where the sign is placed
 * 	name	name of the defined sign
 * 	priority	sign priority
 * The returned signs in a buffer are ordered by their line
 * number.
 * Returns an empty list on failure or if there are no placed
 * signs.
 * Examples:
 * 	" Get a List of signs placed in eval.c in the
 * 	" global group
 * 	echo sign_getplaced("eval.c")
 * 	" Get a List of signs in group 'g1' placed in eval.c
 * 	echo sign_getplaced("eval.c", {'group' : 'g1'})
 * 	" Get a List of signs placed at line 10 in eval.c
 * 	echo sign_getplaced("eval.c", {'lnum' : 10})
 * 	" Get sign with identifier 10 placed in a.py
 * 	echo sign_getplaced("a.py", {'id' : 10})
 * 	" Get sign with id 20 in group 'g1' placed in a.py
 * 	echo sign_getplaced("a.py", {'group' : 'g1',
 * 					\  'id' : 20})
 * 	" Get a List of all the placed signs
 * 	echo sign_getplaced()
 */
export function sign_getplaced(
  denops: Denops,
  expr: unknown,
  dict?: unknown,
): Promise<unknown>;
export function sign_getplaced(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_getplaced", ...args);
}

/**
 * Open the buffer {expr} or jump to the window that contains
 * {expr} and position the cursor at sign {id} in group {group}.
 * This is similar to the |:sign-jump| command.
 * For the use of {expr}, see |bufname()|.
 * Returns the line number of the sign. Returns -1 if the
 * arguments are invalid.
 * Example:
 * 	" Jump to sign 10 in the current buffer
 * 	call sign_jump(10, '', '')
 */
export function sign_jump(
  denops: Denops,
  id: unknown,
  group: unknown,
  expr: unknown,
): Promise<unknown>;
export function sign_jump(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_jump", ...args);
}

/**
 * Place the sign defined as {name} at line {lnum} in file {expr}
 * and assign {id} and {group} to sign.  This is similar to the
 * |:sign-place| command.
 * If the sign identifier {id} is zero, then a new identifier is
 * allocated.  Otherwise the specified number is used. {group} is
 * the sign group name. To use the global sign group, use an
 * empty string.  {group} functions as a namespace for {id}, thus
 * two groups can use the same IDs. Refer to |sign-identifier|
 * for more information.
 * {name} refers to a defined sign.
 * {expr} refers to a buffer name or number. For the accepted
 * values, see |bufname()|.
 * The optional {dict} argument supports the following entries:
 * 	lnum		line number in the buffer {expr} where
 * 			the sign is to be placed. For the
 * 			accepted values, see |line()|.
 * 	priority	priority of the sign. See
 * 			|sign-priority| for more information.
 * If the optional {dict} is not specified, then it modifies the
 * placed sign {id} in group {group} to use the defined sign
 * {name}.
 * Returns the sign identifier on success and -1 on failure.
 * Examples:
 * 	" Place a sign named sign1 with id 5 at line 20 in
 * 	" buffer json.c
 * 	call sign_place(5, '', 'sign1', 'json.c',
 * 					\ {'lnum' : 20})
 * 	" Updates sign 5 in buffer json.c to use sign2
 * 	call sign_place(5, '', 'sign2', 'json.c')
 * 	" Place a sign named sign3 at line 30 in
 * 	" buffer json.c with a new identifier
 * 	let id = sign_place(0, '', 'sign3', 'json.c',
 * 					\ {'lnum' : 30})
 * 	" Place a sign named sign4 with id 10 in group 'g3'
 * 	" at line 40 in buffer json.c with priority 90
 * 	call sign_place(10, 'g3', 'sign4', 'json.c',
 * 			\ {'lnum' : 40, 'priority' : 90})
 */
export function sign_place(
  denops: Denops,
  id: unknown,
  group: unknown,
  name: unknown,
  expr: unknown,
  dict?: unknown,
): Promise<unknown>;
export function sign_place(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_place", ...args);
}

/**
 * Deletes a previously defined sign {name}. This is similar to
 * the |:sign-undefine| command. If {name} is not supplied, then
 * deletes all the defined signs.
 * Returns 0 on success and -1 on failure.
 * Examples:
 * 	" Delete a sign named mySign
 * 	call sign_undefine("mySign")
 * 	" Delete all the signs
 * 	call sign_undefine()
 */
export function sign_undefine(denops: Denops, name: unknown): Promise<unknown>;
export function sign_undefine(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_undefine", ...args);
}

/**
 * Remove a previously placed sign in one or more buffers.  This
 * is similar to the |:sign-unplace| command.
 * {group} is the sign group name. To use the global sign group,
 * use an empty string.  If {group} is set to '*', then all the
 * groups including the global group are used.
 * The signs in {group} are selected based on the entries in
 * {dict}.  The following optional entries in {dict} are
 * supported:
 * 	buffer	buffer name or number. See |bufname()|.
 * 	id	sign identifier
 * If {dict} is not supplied, then all the signs in {group} are
 * removed.
 * Returns 0 on success and -1 on failure.
 * Examples:
 * 	" Remove sign 10 from buffer a.vim
 * 	call sign_unplace('', {'buffer' : "a.vim", 'id' : 10})
 * 	" Remove sign 20 in group 'g1' from buffer 3
 * 	call sign_unplace('g1', {'buffer' : 3, 'id' : 20})
 * 	" Remove all the signs in group 'g2' from buffer 10
 * 	call sign_unplace('g2', {'buffer' : 10})
 * 	" Remove sign 30 in group 'g3' from all the buffers
 * 	call sign_unplace('g3', {'id' : 30})
 * 	" Remove all the signs placed in buffer 5
 * 	call sign_unplace('*', {'buffer' : 5})
 * 	" Remove the signs in group 'g4' from all the buffers
 * 	call sign_unplace('g4')
 * 	" Remove sign 40 from all the buffers
 * 	call sign_unplace('*', {'id' : 40})
 * 	" Remove all the placed signs from all the buffers
 * 	call sign_unplace('*')
 */
export function sign_unplace(
  denops: Denops,
  group: unknown,
  dict?: unknown,
): Promise<unknown>;
export function sign_unplace(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sign_unplace", ...args);
}

/**
 * Connect a socket to an address. If {mode} is "pipe" then
 * {address} should be the path of a named pipe. If {mode} is
 * "tcp" then {address} should be of the form "host:port" where
 * the host should be an ip adderess or host name, and port the
 * port number.
 * Returns a |channel| ID. Close the socket with |chanclose()|.
 * Use |chansend()| to send data over a bytes socket, and
 * |rpcrequest()| and |rpcnotify()| to communicate with a RPC
 * socket.
 * {opts} is a dictionary with these keys:
 *   |on_data| : callback invoked when data was read from socket
 *   data_buffered : read socket data in |channel-buffered| mode.
 *   rpc     : If set, |msgpack-rpc| will be used to communicate
 * 	    over the socket.
 * Returns:
 *   - The channel ID on success (greater than zero)
 *   - 0 on invalid arguments or connection failure.
 */
export function sockconnect(
  denops: Denops,
  mode: unknown,
  address: unknown,
  opts: unknown,
): Promise<unknown>;
export function sockconnect(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sockconnect", ...args);
}

/**
 * In a nvim launched with the |--headless| option, this opens
 * stdin and stdout as a |channel|. This function can only be
 * invoked once per instance. See |channel-stdio| for more
 * information and examples. Note that stderr is not handled by
 * this function, see |v:stderr|.
 * Returns a |channel| ID. Close the stdio descriptors with |chanclose()|.
 * Use |chansend()| to send data to stdout, and
 * |rpcrequest()| and |rpcnotify()| to communicate over RPC.
 * {opts} is a dictionary with these keys:
 *   |on_stdin| : callback invoked when stdin is written to.
 *   stdin_buffered : read stdin in |channel-buffered| mode.
 *   rpc      : If set, |msgpack-rpc| will be used to communicate
 * 	     over stdio
 * Returns:
 *   - The channel ID on success (this is always 1)
 *   - 0 on invalid arguments
 */
export function stdioopen(denops: Denops, opts: unknown): Promise<unknown>;
export function stdioopen(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("stdioopen", ...args);
}

/**
 * Returns |standard-path| locations of various default files and
 * directories.
 * {what}       Type    Description ~
 * cache        String  Cache directory. Arbitrary temporary
 *                      storage for plugins, etc.
 * config       String  User configuration directory. The
 *                      |init.vim| is stored here.
 * config_dirs  List    Additional configuration directories.
 * data         String  User data directory. The |shada-file|
 *                      is stored here.
 * data_dirs    List    Additional data directories.
 * Example:
 * 	:echo stdpath("config")
 */
export function stdpath(denops: Denops, what: unknown): Promise<unknown>;
export function stdpath(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("stdpath", ...args);
}

/**
 * Spawns {cmd} in a new pseudo-terminal session connected
 * to the current buffer.  {cmd} is the same as the one passed to
 * |jobstart()|.  This function fails if the current buffer is
 * modified (all buffer contents are destroyed).
 * The {opts} dict is similar to the one passed to |jobstart()|,
 * but the `pty`, `width`, `height`, and `TERM` fields are
 * ignored: `height`/`width` are taken from the current window
 * and `$TERM` is set to "xterm-256color".
 * Returns the same values as |jobstart()|.
 * See |terminal| for more information.
 */
export function termopen(
  denops: Denops,
  cmd: unknown,
  opts?: unknown,
): Promise<unknown>;
export function termopen(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("termopen", ...args);
}

/**
 * Like |garbagecollect()|, but executed right away.  This must
 * only be called directly to avoid any structure to exist
 * internally, and |v:testing| must have been set before calling
 * any function.
 */
export function test_garbagecollect_now(denops: Denops): Promise<unknown>;
export function test_garbagecollect_now(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("test_garbagecollect_now", ...args);
}

/**
 * Waits until {condition} evaluates to |TRUE|, where {condition}
 * is a |Funcref| or |string| containing an expression.
 * {timeout} is the maximum waiting time in milliseconds, -1
 * means forever.
 * Condition is evaluated on user events, internal events, and
 * every {interval} milliseconds (default: 200).
 * Returns a status integer:
 * 	0 if the condition was satisfied before timeout
 * 	-1 if the timeout was exceeded
 * 	-2 if the function was interrupted (by |CTRL-C|)
 * 	-3 if an error occurred
 */
export function wait(
  denops: Denops,
  timeout: unknown,
  condition: unknown,
  interval?: unknown,
): Promise<unknown>;
export function wait(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("wait", ...args);
}
