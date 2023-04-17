// NOTE: This file is generated. Do NOT modify it manually.
// deno-lint-ignore-file camelcase
import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";

/**
 * Returns Dictionary of `api-metadata`.
 *
 * View it in a nice human-readable format:
 *
 *     :lua print(vim.inspect(vim.fn.api_info()))
 */
export function api_info(denops: Denops): Promise<unknown>;
export function api_info(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("api_info", ...args);
}

/**
 * Close a channel or a specific stream associated with it.
 * For a job, **{stream}** can be one of "stdin", "stdout",
 * "stderr" or "rpc" (closes stdin/stdout for a job started
 * with `"rpc":v:true`) If **{stream}** is omitted, all streams
 * are closed. If the channel is a pty, this will then close the
 * pty master, sending SIGHUP to the job process.
 * For a socket, there is only one stream, and **{stream}** should be
 * omitted.
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
 * Send data to channel **{id}**. For a job, it writes it to the
 * stdin of the process. For the stdio channel `channel-stdio`,
 * it writes to Nvim's stdout.  Returns the number of bytes
 * written if the write succeeded, 0 otherwise.
 * See `channel-bytes` for more information.
 *
 * **{data}** may be a string, string convertible, `Blob`, or a list.
 * If **{data}** is a list, the items will be joined by newlines; any
 * newlines in an item will be sent as NUL. To send a final
 * newline, include a final empty string. Example:
 *
 *     :call chansend(id, ["abc", "123\n456", ""])
 *
 * will send `"abc<NL>123<NUL>456<NL>"`.
 *
 * chansend() writes raw data, not RPC messages.  If the channel
 * was created with `"rpc":v:true` then the channel expects RPC
 * messages, use `rpcnotify()` and `rpcrequest()` instead.
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
 * Returns a `Dictionary` representing the `context` at **{index}**
 * from the top of the `context-stack` (see `context-dict`).
 * If **{index}** is not given, it is assumed to be 0 (i.e.: top).
 */
export function ctxget(denops: Denops, index?: unknown): Promise<unknown>;
export function ctxget(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxget", ...args);
}

/**
 * Pops and restores the `context` at the top of the
 * `context-stack`.
 */
export function ctxpop(denops: Denops): Promise<unknown>;
export function ctxpop(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxpop", ...args);
}

/**
 * Pushes the current editor state (`context`) on the
 * `context-stack`.
 * If **{types}** is given and is a `List` of `String`s, it specifies
 * which `context-types` to include in the pushed context.
 * Otherwise, all context types are included.
 */
export function ctxpush(denops: Denops, types?: unknown): Promise<unknown>;
export function ctxpush(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxpush", ...args);
}

/**
 * Sets the `context` at **{index}** from the top of the
 * `context-stack` to that represented by **{context}**.
 * **{context}** is a Dictionary with context data (`context-dict`).
 * If **{index}** is not given, it is assumed to be 0 (i.e.: top).
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
 * Returns the size of the `context-stack`.
 */
export function ctxsize(denops: Denops): Promise<unknown>;
export function ctxsize(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("ctxsize", ...args);
}

/**
 * Adds a watcher to a dictionary. A dictionary watcher is
 * identified by three components:
 *
 * - A dictionary(**{dict}**);
 * - A key pattern(**{pattern}**).
 * - A function(**{callback}**).
 *
 * After this is called, every change on **{dict}** and on keys
 * matching **{pattern}** will result in **{callback}** being invoked.
 *
 * For example, to watch all global variables:
 *
 *     silent! call dictwatcherdel(g:, '*', 'OnDictChanged')
 *     function! OnDictChanged(d,k,z)
 *       echomsg string(a:k) string(a:z)
 *     endfunction
 *     call dictwatcheradd(g:, '*', 'OnDictChanged')
 *
 * For now **{pattern}** only accepts very simple patterns that can
 * contain a '*' at the end of the string, in which case it will
 * match every key that begins with the substring before the '*'.
 * That means if '*' is not the last character of **{pattern}**, only
 * keys that are exactly equal as **{pattern}** will be matched.
 *
 * The **{callback}** receives three arguments:
 *
 * - The dictionary being watched.
 * - The key which changed.
 * - A dictionary containing the new and old values for the key.
 *
 * The type of change can be determined by examining the keys
 * present on the third argument:
 *
 * - If contains both `old` and `new`, the key was updated.
 * - If it contains only `new`, the key was added.
 * - If it contains only `old`, the key was deleted.
 *
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
 * Removes a watcher added  with `dictwatcheradd()`. All three
 * arguments must match the ones passed to `dictwatcheradd()` in
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
 * Returns a `String` which is a unique identifier of the
 * container type (`List`, `Dict`, `Blob` and `Partial`). It is
 * guaranteed that for the mentioned types `id(v1) ==# id(v2)`
 * returns true iff `type(v1) == type(v2) && v1 is v2`.
 * Note that `v:_null_string`, `v:_null_list`, `v:_null_dict` and
 * `v:_null_blob` have the same `id()` with different types
 * because they are internally represented as NULL pointers.
 * `id()` returns a hexadecimal representanion of the pointers to
 * the containers (i.e. like `0x994a40`), same as `printf("%p",
 * {expr})`, but it is advised against counting on the exact
 * format of the return value.
 *
 * It is not guaranteed that `id(no_longer_existing_container)`
 * will not be equal to some other `id()`: new containers may
 * reuse identifiers of the garbage-collected ones.
 */
export function id(denops: Denops, expr: unknown): Promise<unknown>;
export function id(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("id", ...args);
}

/**
 * Return the PID (process id) of `job-id` **{job}**.
 */
export function jobpid(denops: Denops, job: unknown): Promise<unknown>;
export function jobpid(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("jobpid", ...args);
}

/**
 * Resize the pseudo terminal window of `job-id` **{job}** to **{width}**
 * columns and **{height}** rows.
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
 * Spawns **{cmd}** as a job.
 * If **{cmd}** is a List it runs directly (no 'shell').
 * If **{cmd}** is a String it runs in the 'shell', like this:
 *
 *     :call jobstart(split(&shell) + split(&shellcmdflag) + ['{cmd}'])
 *
 * (See `shell-unquoting` for details.)
 *
 * Example:
 *
 *     :call jobstart('nvim -h', {'on_stdout':{j,d,e->append(line('.'),d)}})
 *
 * Returns `job-id` on success, 0 on invalid arguments (or job
 * table is full), -1 if **{cmd}**[0] or 'shell' is not executable.
 * The returned job-id is a valid `channel-id` representing the
 * job's stdio streams. Use `chansend()` (or `rpcnotify()` and
 * `rpcrequest()` if "rpc" was enabled) to send data to stdin and
 * `chanclose()` to close the streams without stopping the job.
 *
 * See `job-control` and `RPC`.
 *
 * NOTE: on Windows if **{cmd}** is a List:
 *   - cmd[0] must be an executable (not a "built-in"). If it is
 *     in $PATH it can be called by name, without an extension:
 *
 *         :call jobstart(['ping', 'neovim.io'])
 *
 *     If it is a full or partial path, extension is required:
 *
 *         :call jobstart(['System32\ping.exe', 'neovim.io'])
 *
 *   - **{cmd}** is collapsed to a string of quoted args as expected
 *     by CommandLineToArgvW https://msdn.microsoft.com/bb776391
 *     unless cmd[0] is some form of "cmd.exe".
 *
 * The job environment is initialized as follows:
 *   $NVIM                is set to `v:servername` of the parent Nvim
 *   $NVIM_LISTEN_ADDRESS is unset
 *   $NVIM_LOG_FILE       is unset
 *   $VIM                 is unset
 *   $VIMRUNTIME          is unset
 * You can set these with the `env` option.
 *
 * **{opts}** is a dictionary with these keys:
 *   clear_env:  (boolean) `env` defines the job environment
 *               exactly, instead of merging current environment.
 *   cwd:        (string, default=`current-directory`) Working
 *               directory of the job.
 *   detach:     (boolean) Detach the job process: it will not be
 *               killed when Nvim exits. If the process exits
 *               before Nvim, `on_exit` will be invoked.
 *   env:        (dict) Map of environment variable name:value
 *               pairs extending (or replace with "clear_env")
 *               the current environment. `jobstart-env`
 *   height:     (number) Height of the `pty` terminal.
 *   `on_exit`:    (function) Callback invoked when the job exits.
 *   `on_stdout`:  (function) Callback invoked when the job emits
 *               stdout data.
 *   `on_stderr`:  (function) Callback invoked when the job emits
 *               stderr data.
 *   overlapped: (boolean) Set FILE_FLAG_OVERLAPPED for the
 *               standard input/output passed to the child process.
 *               Normally you do not need to set this.
 *               (Only available on MS-Windows, On other
 *               platforms, this option is silently ignored.)
 *   pty:        (boolean) Connect the job to a new pseudo
 *               terminal, and its streams to the master file
 *               descriptor. `on_stdout` receives all output,
 *               `on_stderr` is ignored. `terminal-start`
 *   rpc:        (boolean) Use `msgpack-rpc` to communicate with
 *               the job over stdio. Then `on_stdout` is ignored,
 *               but `on_stderr` can still be used.
 *   stderr_buffered: (boolean) Collect data until EOF (stream closed)
 *               before invoking `on_stderr`. `channel-buffered`
 *   stdout_buffered: (boolean) Collect data until EOF (stream
 *               closed) before invoking `on_stdout`. `channel-buffered`
 *   stdin:      (string) Either "pipe" (default) to connect the
 *               job's stdin to a channel or "null" to disconnect
 *               stdin.
 *   width:      (number) Width of the `pty` terminal.
 *
 * **{opts}** is passed as `self` dictionary to the callback; the
 * caller may set other keys to pass application-specific data.
 *
 * Returns:
 *   - `channel-id` on success
 *   - 0 on invalid arguments
 *   - -1 if **{cmd}**[0] is not executable.
 * See also `job-control`, `channel`, `msgpack-rpc`.
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
 * Stop `job-id` **{id}** by sending SIGTERM to the job process. If
 * the process does not terminate after a timeout then SIGKILL
 * will be sent. When the job terminates its `on_exit` handler
 * (if any) will be invoked.
 * See `job-control`.
 *
 * Returns 1 for valid job id, 0 for invalid id, including jobs have
 * exited or stopped.
 */
export function jobstop(denops: Denops, id: unknown): Promise<unknown>;
export function jobstop(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("jobstop", ...args);
}

/**
 * Waits for jobs and their `on_exit` handlers to complete.
 *
 * **{jobs}** is a List of `job-id`s to wait for.
 * **{timeout}** is the maximum waiting time in milliseconds. If
 * omitted or -1, wait forever.
 *
 * Timeout of 0 can be used to check the status of a job:
 *
 *     let running = jobwait([{job-id}], 0)[0] == -1
 *
 * During jobwait() callbacks for jobs not in the **{jobs}** list may
 * be invoked. The screen will not redraw unless `:redraw` is
 * invoked by a callback.
 *
 * Returns a list of len(**{jobs}**) integers, where each integer is
 * the status of the corresponding job:
 *         Exit-code, if the job exited
 *         -1 if the timeout was exceeded
 *         -2 if the job was interrupted (by `CTRL-C`)
 *         -3 if the job-id is invalid
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
 * Returns a `List` of `Dictionaries` describing `menus` (defined
 * by `:menu`, `:amenu`, …), including `hidden-menus`.
 *
 * **{path}** matches a menu by name, or all menus if **{path}** is an
 * empty string.  Example:
 *
 *     :echo menu_get('File','')
 *     :echo menu_get('')
 *
 * **{modes}** is a string of zero or more modes (see `maparg()` or
 * `creating-menus` for the list of modes). "a" means "all".
 *
 * Example:
 *
 *     nnoremenu &Test.Test inormal
 *     inoremenu Test.Test insert
 *     vnoremenu Test.Test x
 *     echo menu_get("")
 *
 * returns something like this:
 *
 *     [ {
 *       "hidden": 0,
 *       "name": "Test",
 *       "priority": 500,
 *       "shortcut": 84,
 *       "submenus": [ {
 *         "hidden": 0,
 *         "mappings": {
 *           i": {
 *             "enabled": 1,
 *             "noremap": 1,
 *             "rhs": "insert",
 *             "sid": 1,
 *             "silent": 0
 *           },
 *           n": { ... },
 *           s": { ... },
 *           v": { ... }
 *         },
 *         "name": "Test",
 *         "priority": 500,
 *         "shortcut": 0
 *       } ]
 *     } ]
 */
export function menu_get(
  denops: Denops,
  path: unknown,
  modes?: unknown,
): Promise<unknown>;
export function menu_get(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("menu_get", ...args);
}

/**
 * Convert a list of VimL objects to msgpack. Returned value is a
 * `readfile()`-style list. When **{type}** contains "B", a `Blob` is
 * returned instead. Example:
 *
 *     call writefile(msgpackdump([{}]), 'fname.mpack', 'b')
 *
 * or, using a `Blob`:
 *
 *     call writefile(msgpackdump([{}], 'B'), 'fname.mpack')
 *
 * This will write the single 0x80 byte to a `fname.mpack` file
 * (dictionary with zero items is represented by 0x80 byte in
 * messagepack).
 *
 * Limitations:
 * 1. `Funcref`s cannot be dumped.
 * 2. Containers that reference themselves cannot be dumped.
 * 3. Dictionary keys are always dumped as STR strings.
 * 4. Other strings and `Blob`s are always dumped as BIN strings.
 * 5. Points 3. and 4. do not apply to `msgpack-special-dict`s.
 */
export function msgpackdump(
  denops: Denops,
  list: unknown,
  type?: unknown,
): Promise<unknown>;
export function msgpackdump(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("msgpackdump", ...args);
}

/**
 * Convert a `readfile()`-style list or a `Blob` to a list of
 * VimL objects.
 * Example:
 *
 *     let fname = expand('~/.config/nvim/shada/main.shada')
 *     let mpack = readfile(fname, 'b')
 *     let shada_objects = msgpackparse(mpack)
 *
 * This will read `~/.config/nvim/shada/main.shada` file to
 * `shada_objects` list.
 *
 * Limitations:
 * 1. Mapping ordering is not preserved unless messagepack
 *    mapping is dumped using generic mapping
 *    (`msgpack-special-map`).
 * 2. Since the parser aims to preserve all data untouched
 *    (except for 1.) some strings are parsed to
 *    `msgpack-special-dict` format which is not convenient to
 *    use.
 *
 * Some messagepack strings may be parsed to special
 * dictionaries. Special dictionaries are dictionaries which
 *
 * 1. Contain exactly two keys: `_TYPE` and `_VAL`.
 * 2. `_TYPE` key is one of the types found in `v:msgpack_types`
 *    variable.
 * 3. Value for `_VAL` has the following format (Key column
 *    contains name of the key from `v:msgpack_types`):
 *
 * Key     Value
 * nil     Zero, ignored when dumping.  Not returned by
 *         `msgpackparse()` since `v:null` was introduced.
 * boolean One or zero.  When dumping it is only checked that
 *         value is a `Number`.  Not returned by `msgpackparse()`
 *         since `v:true` and `v:false` were introduced.
 * integer `List` with four numbers: sign (-1 or 1), highest two
 *         bits, number with bits from 62nd to 31st, lowest 31
 *         bits. I.e. to get actual number one will need to use
 *         code like
 *
 *             _VAL[0] * ((_VAL[1] << 62)
 *                        & (_VAL[2] << 31)
 *                        & _VAL[3])
 *
 *         Special dictionary with this type will appear in
 *         `msgpackparse()` output under one of the following
 *         circumstances:
 *         1. `Number` is 32-bit and value is either above
 *            INT32_MAX or below INT32_MIN.
 *         2. `Number` is 64-bit and value is above INT64_MAX. It
 *            cannot possibly be below INT64_MIN because msgpack
 *            C parser does not support such values.
 * float   `Float`. This value cannot possibly appear in
 *         `msgpackparse()` output.
 * string  `readfile()`-style list of strings. This value will
 *         appear in `msgpackparse()` output if string contains
 *         zero byte or if string is a mapping key and mapping is
 *         being represented as special dictionary for other
 *         reasons.
 * binary  `String`, or `Blob` if binary string contains zero
 *         byte. This value cannot appear in `msgpackparse()`
 *         output since blobs were introduced.
 * array   `List`. This value cannot appear in `msgpackparse()`
 *         output.
 *
 * map     `List` of `List`s with two items (key and value) each.
 *         This value will appear in `msgpackparse()` output if
 *         parsed mapping contains one of the following keys:
 *         1. Any key that is not a string (including keys which
 *            are binary strings).
 *         2. String with NUL byte inside.
 *         3. Duplicate key.
 *         4. Empty key.
 * ext     `List` with two values: first is a signed integer
 *         representing extension type. Second is
 *         `readfile()`-style list of strings.
 */
export function msgpackparse(denops: Denops, data: unknown): Promise<unknown>;
export function msgpackparse(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("msgpackparse", ...args);
}

/**
 * Returns the single letter name of the last recorded register.
 * Returns an empty string when nothing was recorded yet.
 * See `q` and `Q`.
 */
export function reg_recorded(denops: Denops): Promise<unknown>;
export function reg_recorded(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("reg_recorded", ...args);
}

/**
 * Sends **{event}** to **{channel}** via `RPC` and returns immediately.
 * If **{channel}** is 0, the event is broadcast to all channels.
 * Example:
 *
 *     :au VimLeave call rpcnotify(0, "leaving")
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
 * Sends a request to **{channel}** to invoke **{method}** via
 * `RPC` and blocks until a response is received.
 * Example:
 *
 *     :let result = rpcrequest(rpc_chan, "func", 1, 2, 3)
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
 *
 *     :let id = rpcstart('prog', ['arg1', 'arg2'])
 *
 * with
 *
 *     :let id = jobstart(['prog', 'arg1', 'arg2'], {'rpc': v:true})
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
 * Opens a socket or named pipe at **{address}** and listens for
 * `RPC` messages. Clients can send `API` commands to the
 * returned address to control Nvim.
 *
 * Returns the address string (may differ from the requested
 * **{address}**).
 *
 * - If **{address}** contains a colon ":" it is interpreted as
 *   a TCP/IPv4/IPv6 address where the last ":" separates host
 *   and port (empty or zero assigns a random port).
 * - Else it is interpreted as a named pipe or Unix domain socket
 *   path. If there are no slashes it is treated as a name and
 *   appended to a generated path.
 * - If **{address}** is empty it generates a path.
 *
 * Example named pipe:
 *
 *     if has('win32')
 *       echo serverstart('\\.\pipe\nvim-pipe-1234')
 *     else
 *       echo serverstart('nvim.sock')
 *     endif
 *
 * Example TCP/IP address:
 *
 *     echo serverstart('::1:12345')
 */
export function serverstart(
  denops: Denops,
  address?: unknown,
): Promise<unknown>;
export function serverstart(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("serverstart", ...args);
}

/**
 * Closes the pipe or socket at **{address}**.
 * Returns TRUE if **{address}** is valid, else FALSE.
 * If `v:servername` is stopped it is set to the next available
 * address in `serverlist()`.
 */
export function serverstop(denops: Denops, address: unknown): Promise<unknown>;
export function serverstop(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("serverstop", ...args);
}

/**
 * Connect a socket to an address. If **{mode}** is "pipe" then
 * **{address}** should be the path of a named pipe. If **{mode}** is
 * "tcp" then **{address}** should be of the form "host:port" where
 * the host should be an ip adderess or host name, and port the
 * port number.
 *
 * Returns a `channel` ID. Close the socket with `chanclose()`.
 * Use `chansend()` to send data over a bytes socket, and
 * `rpcrequest()` and `rpcnotify()` to communicate with a RPC
 * socket.
 *
 * **{opts}** is an optional dictionary with these keys:
 *   `on_data` : callback invoked when data was read from socket
 *   data_buffered : read socket data in `channel-buffered` mode.
 *   rpc     : If set, `msgpack-rpc` will be used to communicate
 *             over the socket.
 * Returns:
 *   - The channel ID on success (greater than zero)
 *   - 0 on invalid arguments or connection failure.
 */
export function sockconnect(
  denops: Denops,
  mode: unknown,
  address: unknown,
  opts?: unknown,
): Promise<unknown>;
export function sockconnect(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("sockconnect", ...args);
}

/**
 * With `--headless` this opens stdin and stdout as a `channel`.
 * May be called only once. See `channel-stdio`. stderr is not
 * handled by this function, see `v:stderr`.
 *
 * Close the stdio handles with `chanclose()`. Use `chansend()`
 * to send data to stdout, and `rpcrequest()` and `rpcnotify()`
 * to communicate over RPC.
 *
 * **{opts}** is a dictionary with these keys:
 *   `on_stdin` : callback invoked when stdin is written to.
 *   on_print : callback invoked when Nvim needs to print a
 *              message, with the message (whose type is string)
 *              as sole argument.
 *   stdin_buffered : read stdin in `channel-buffered` mode.
 *   rpc      : If set, `msgpack-rpc` will be used to communicate
 *              over stdio
 * Returns:
 *   - `channel-id` on success (value is always 1)
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
 * Returns `standard-path` locations of various default files and
 * directories.
 *
 * **{what}**       Type    Description
 * cache        String  Cache directory: arbitrary temporary
 *                      storage for plugins, etc.
 * config       String  User configuration directory. `init.vim`
 *                      is stored here.
 * config_dirs  List    Other configuration directories.
 * data         String  User data directory.
 * data_dirs    List    Other data directories.
 * log          String  Logs directory (for use by plugins too).
 * run          String  Run directory: temporary, local storage
 *                      for sockets, named pipes, etc.
 * state        String  Session state directory: storage for file
 *                      drafts, undo, `shada`, etc.
 *
 * Example:
 *
 *     :echo stdpath("config")
 */
export function stdpath(denops: Denops, what: unknown): Promise<unknown>;
export function stdpath(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("stdpath", ...args);
}

/**
 * Spawns **{cmd}** in a new pseudo-terminal session connected
 * to the current (unmodified) buffer. Parameters and behavior
 * are the same as `jobstart()` except "pty", "width", "height",
 * and "TERM" are ignored: "height" and "width" are taken from
 * the current window.
 * Returns the same values as `jobstart()`.
 *
 * Terminal environment is initialized as in `jobstart-env`,
 * except $TERM is set to "xterm-256color". Full behavior is
 * described in `terminal`.
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
 * Waits until **{condition}** evaluates to `TRUE`, where **{condition}**
 * is a `Funcref` or `string` containing an expression.
 *
 * **{timeout}** is the maximum waiting time in milliseconds, -1
 * means forever.
 *
 * Condition is evaluated on user events, internal events, and
 * every **{interval}** milliseconds (default: 200).
 *
 * Returns a status integer:
 *         0 if the condition was satisfied before timeout
 *         -1 if the timeout was exceeded
 *         -2 if the function was interrupted (by `CTRL-C`)
 *         -3 if an error occurred
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

/**
 * Find files in runtime directories
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{pat}**   pattern of files to search for
 *     **{all}**   whether to return all matches or only the first
 *     **{opts}**  is_lua: only search lua subdirs
 *
 * Return:
 *     list of absolute paths to the found files
 */
export function nvim__get_runtime(
  denops: Denops,
  pat: unknown,
  all: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim__get_runtime(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim__get_runtime", ...args);
}

/**
 * Returns object given as argument.
 *
 * This API function is used for testing. One should not rely on its presence
 * in plugins.
 *
 * Parameters:
 *     **{obj}**  Object to return.
 *
 * Return:
 *     its argument.
 */
export function nvim__id(denops: Denops, obj: unknown): Promise<unknown>;
export function nvim__id(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("nvim__id", ...args);
}

/**
 * Returns array given as argument.
 *
 * This API function is used for testing. One should not rely on its presence
 * in plugins.
 *
 * Parameters:
 *     **{arr}**  Array to return.
 *
 * Return:
 *     its argument.
 */
export function nvim__id_array(denops: Denops, arr: unknown): Promise<unknown>;
export function nvim__id_array(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim__id_array", ...args);
}

/**
 * Returns dictionary given as argument.
 *
 * This API function is used for testing. One should not rely on its presence
 * in plugins.
 *
 * Parameters:
 *     **{dct}**  Dictionary to return.
 *
 * Return:
 *     its argument.
 */
export function nvim__id_dictionary(
  denops: Denops,
  dct: unknown,
): Promise<unknown>;
export function nvim__id_dictionary(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim__id_dictionary", ...args);
}

/**
 * Returns floating-point value given as argument.
 *
 * This API function is used for testing. One should not rely on its presence
 * in plugins.
 *
 * Parameters:
 *     **{flt}**  Value to return.
 *
 * Return:
 *     its argument.
 */
export function nvim__id_float(denops: Denops, flt: unknown): Promise<unknown>;
export function nvim__id_float(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim__id_float", ...args);
}

/**
 * NB: if your UI doesn't use hlstate, this will not return hlstate first
 * time.
 */
export function nvim__inspect_cell(
  denops: Denops,
  grid: unknown,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function nvim__inspect_cell(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim__inspect_cell", ...args);
}

/**
 * Gets internal stats.
 *
 * Return:
 *     Map of various internal stats.
 */
export function nvim__stats(denops: Denops): Promise<unknown>;
export function nvim__stats(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim__stats", ...args);
}

/**
 * Calls many API methods atomically.
 *
 * This has two main usages:
 * 1. To perform several requests from an async context atomically, i.e.
 *    without interleaving redraws, RPC requests from other clients, or user
 *    interactions (however API methods may trigger autocommands or event
 *    processing which have such side effects, e.g. `:sleep` may wake
 *    timers).
 * 2. To minimize RPC overhead (roundtrips) of a sequence of many requests.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{calls}**  an array of calls, where each call is described by an array
 *              with two elements: the request name, and an array of
 *              arguments.
 *
 * Return:
 *     Array of two elements. The first is an array of return values. The
 *     second is NIL if all calls succeeded. If a call resulted in an error,
 *     it is a three-element array with the zero-based index of the call
 *     which resulted in an error, the error type and the error message. If
 *     an error occurred, the values from all preceding calls will still be
 *     returned.
 */
export function nvim_call_atomic(
  denops: Denops,
  calls: unknown,
): Promise<unknown>;
export function nvim_call_atomic(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_call_atomic", ...args);
}

/**
 * Send data to channel `id`. For a job, it writes it to the stdin of the
 * process. For the stdio channel `channel-stdio`, it writes to Nvim's
 * stdout. For an internal terminal instance (`nvim_open_term()`) it writes
 * directly to terminal output. See `channel-bytes` for more information.
 *
 * This function writes raw data, not RPC messages. If the channel was
 * created with `rpc=true` then the channel expects RPC messages, use
 * `vim.rpcnotify()` and `vim.rpcrequest()` instead.
 *
 * Attributes:
 *     `RPC` only
 *     `vim.api` only
 *
 * Parameters:
 *     **{chan}**  id of the channel
 *     **{data}**  data to write. 8-bit clean: can contain NUL bytes.
 */
export function nvim_chan_send(
  denops: Denops,
  chan: unknown,
  data: unknown,
): Promise<unknown>;
export function nvim_chan_send(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_chan_send", ...args);
}

/**
 * Creates a new, empty, unnamed buffer.
 *
 * Parameters:
 *     **{listed}**   Sets 'buflisted'
 *     **{scratch}**  Creates a "throwaway" `scratch-buffer` for temporary work
 *                (always 'nomodified'). Also sets 'nomodeline' on the
 *                buffer.
 *
 * Return:
 *     Buffer handle, or 0 on error
 *
 * See also:
 *     buf_open_scratch
 */
export function nvim_create_buf(
  denops: Denops,
  listed: unknown,
  scratch: unknown,
): Promise<unknown>;
export function nvim_create_buf(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_create_buf", ...args);
}

/**
 * Deletes the current line.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 */
export function nvim_del_current_line(denops: Denops): Promise<unknown>;
export function nvim_del_current_line(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_current_line", ...args);
}

/**
 * Unmaps a global `mapping` for the given mode.
 *
 * To unmap a buffer-local mapping, use `nvim_buf_del_keymap()`.
 *
 * See also:
 *     `nvim_set_keymap()`
 */
export function nvim_del_keymap(
  denops: Denops,
  mode: unknown,
  lhs: unknown,
): Promise<unknown>;
export function nvim_del_keymap(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_keymap", ...args);
}

/**
 * Deletes an uppercase/file named mark. See `mark-motions`.
 *
 * Note:
 *     fails with error if a lowercase or buffer local named mark is used.
 *
 * Parameters:
 *     **{name}**  Mark name
 *
 * Return:
 *     true if the mark was deleted, else false.
 *
 * See also:
 *     `nvim_buf_del_mark()`
 *     `nvim_get_mark()`
 */
export function nvim_del_mark(denops: Denops, name: unknown): Promise<unknown>;
export function nvim_del_mark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_mark", ...args);
}

/**
 * Removes a global (g:) variable.
 *
 * Parameters:
 *     **{name}**  Variable name
 */
export function nvim_del_var(denops: Denops, name: unknown): Promise<unknown>;
export function nvim_del_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_var", ...args);
}

/**
 * Echo a message.
 *
 * Parameters:
 *     **{chunks}**   A list of [text, hl_group] arrays, each representing a text
 *                chunk with specified highlight. `hl_group` element can be
 *                omitted for no highlight.
 *     **{history}**  if true, add to `message-history`.
 *     **{opts}**     Optional parameters. Reserved for future use.
 */
export function nvim_echo(
  denops: Denops,
  chunks: unknown,
  history: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_echo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_echo", ...args);
}

/**
 * Writes a message to the Vim error buffer. Does not append "\n", the
 * message is buffered (won't display) until a linefeed is written.
 *
 * Parameters:
 *     **{str}**  Message
 */
export function nvim_err_write(denops: Denops, str: unknown): Promise<unknown>;
export function nvim_err_write(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_err_write", ...args);
}

/**
 * Writes a message to the Vim error buffer. Appends "\n", so the buffer is
 * flushed (and displayed).
 *
 * Parameters:
 *     **{str}**  Message
 *
 * See also:
 *     nvim_err_write()
 */
export function nvim_err_writeln(
  denops: Denops,
  str: unknown,
): Promise<unknown>;
export function nvim_err_writeln(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_err_writeln", ...args);
}

/**
 * Evaluates statusline string.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{str}**   Statusline string (see 'statusline').
 *     **{opts}**  Optional parameters.
 *             - winid: (number) `window-ID` of the window to use as context
 *               for statusline.
 *             - maxwidth: (number) Maximum width of statusline.
 *             - fillchar: (string) Character to fill blank spaces in the
 *               statusline (see 'fillchars'). Treated as single-width even
 *               if it isn't.
 *             - highlights: (boolean) Return highlight information.
 *             - use_winbar: (boolean) Evaluate winbar instead of statusline.
 *             - use_tabline: (boolean) Evaluate tabline instead of
 *               statusline. When true, **{winid}** is ignored. Mutually
 *               exclusive with {use_winbar}.
 *
 * Return:
 *     Dictionary containing statusline information, with these keys:
 *     - str: (string) Characters that will be displayed on the statusline.
 *     - width: (number) Display width of the statusline.
 *     - highlights: Array containing highlight information of the
 *       statusline. Only included when the "highlights" key in **{opts}** is
 *       true. Each element of the array is a `Dictionary` with these keys:
 *       - start: (number) Byte index (0-based) of first character that uses
 *         the highlight.
 *       - group: (string) Name of highlight group.
 */
export function nvim_eval_statusline(
  denops: Denops,
  str: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_eval_statusline(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_eval_statusline", ...args);
}

/**
 * Execute Lua code. Parameters (if any) are available as `...` inside the
 * chunk. The chunk can return a value.
 *
 * Only statements are executed. To evaluate an expression, prefix it with
 * `return`: return my_function(...)
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{code}**  Lua code to execute
 *     **{args}**  Arguments to the code
 *
 * Return:
 *     Return value of Lua code if present or NIL.
 */
export function nvim_exec_lua(
  denops: Denops,
  code: unknown,
  args: unknown,
): Promise<unknown>;
export function nvim_exec_lua(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_exec_lua", ...args);
}

/**
 * Sends input-keys to Nvim, subject to various quirks controlled by `mode`
 * flags. This is a blocking call, unlike `nvim_input()`.
 *
 * On execution error: does not fail, but updates v:errmsg.
 *
 * To input sequences like `<C-o>` use `nvim_replace_termcodes()` (typically
 * with escape_ks=false) to replace `keycodes`, then pass the result to
 * nvim_feedkeys().
 *
 * Example:
 *
 *     :let key = nvim_replace_termcodes("<C-o>", v:true, v:false, v:true)
 *     :call nvim_feedkeys(key, 'n', v:false)
 *
 * Parameters:
 *     **{keys}**       to be typed
 *     **{mode}**       behavior flags, see `feedkeys()`
 *     {escape_ks}  If true, escape K_SPECIAL bytes in `keys` This should be
 *                  false if you already used `nvim_replace_termcodes()`, and
 *                  true otherwise.
 *
 * See also:
 *     feedkeys()
 *     vim_strsave_escape_ks
 */
export function nvim_feedkeys(
  denops: Denops,
  keys: unknown,
  mode: unknown,
  escape_ks: unknown,
): Promise<unknown>;
export function nvim_feedkeys(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_feedkeys", ...args);
}

/**
 * Returns a 2-tuple (Array), where item 0 is the current channel id and item
 * 1 is the `api-metadata` map (Dictionary).
 *
 * Return:
 *     2-tuple [**{channel-id}**, **{api-metadata}**]
 *
 * Attributes:
 *     `api-fast`
 *     `RPC` only
 */
export function nvim_get_api_info(denops: Denops): Promise<unknown>;
export function nvim_get_api_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_api_info", ...args);
}

/**
 * Gets information about a channel.
 *
 * Return:
 *     Dictionary describing a channel, with these keys:
 *     - "id" Channel id.
 *     - "argv" (optional) Job arguments list.
 *     - "stream" Stream underlying the channel.
 *       - "stdio" stdin and stdout of this Nvim instance
 *       - "stderr" stderr of this Nvim instance
 *       - "socket" TCP/IP socket or named pipe
 *       - "job" Job with communication over its stdio.
 *
 *     - "mode" How data received on the channel is interpreted.
 *       - "bytes" Send and receive raw bytes.
 *       - "terminal" `terminal` instance interprets ASCII sequences.
 *       - "rpc" `RPC` communication on the channel is active.
 *
 *     - "pty" (optional) Name of pseudoterminal. On a POSIX system this is a
 *       device path like "/dev/pts/1". If the name is unknown, the key will
 *       still be present if a pty is used (e.g. for conpty on Windows).
 *     - "buffer" (optional) Buffer with connected `terminal` instance.
 *     - "client" (optional) Info about the peer (client on the other end of
 *       the RPC channel), if provided by it via `nvim_set_client_info()`.
 */
export function nvim_get_chan_info(
  denops: Denops,
  chan: unknown,
): Promise<unknown>;
export function nvim_get_chan_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_chan_info", ...args);
}

/**
 * Returns the 24-bit RGB value of a `nvim_get_color_map()` color name or
 * "#rrggbb" hexadecimal string.
 *
 * Example:
 *
 *     :echo nvim_get_color_by_name("Pink")
 *     :echo nvim_get_color_by_name("#cbcbcb")
 *
 * Parameters:
 *     **{name}**  Color name or "#rrggbb" string
 *
 * Return:
 *     24-bit RGB value, or -1 for invalid argument.
 */
export function nvim_get_color_by_name(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_get_color_by_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_color_by_name", ...args);
}

/**
 * Returns a map of color names and RGB values.
 *
 * Keys are color names (e.g. "Aqua") and values are 24-bit RGB color values
 * (e.g. 65535).
 *
 * Return:
 *     Map of color names and RGB values.
 */
export function nvim_get_color_map(denops: Denops): Promise<unknown>;
export function nvim_get_color_map(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_color_map", ...args);
}

/**
 * Gets a map of the current editor state.
 *
 * Parameters:
 *     **{opts}**  Optional parameters.
 *             - types: List of `context-types` ("regs", "jumps", "bufs",
 *               "gvars", …) to gather, or empty for "all".
 *
 * Return:
 *     map of global `context`.
 */
export function nvim_get_context(
  denops: Denops,
  opts: unknown,
): Promise<unknown>;
export function nvim_get_context(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_context", ...args);
}

/**
 * Gets the current buffer.
 *
 * Return:
 *     Buffer handle
 */
export function nvim_get_current_buf(denops: Denops): Promise<unknown>;
export function nvim_get_current_buf(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_current_buf", ...args);
}

/**
 * Gets the current line.
 *
 * Return:
 *     Current line string
 */
export function nvim_get_current_line(denops: Denops): Promise<unknown>;
export function nvim_get_current_line(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_current_line", ...args);
}

/**
 * Gets the current tabpage.
 *
 * Return:
 *     Tabpage handle
 */
export function nvim_get_current_tabpage(denops: Denops): Promise<unknown>;
export function nvim_get_current_tabpage(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_current_tabpage", ...args);
}

/**
 * Gets the current window.
 *
 * Return:
 *     Window handle
 */
export function nvim_get_current_win(denops: Denops): Promise<unknown>;
export function nvim_get_current_win(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_current_win", ...args);
}

/**
 * Gets a highlight definition by id. `hlID()`
 *
 * Parameters:
 *     {hl_id}  Highlight id as returned by `hlID()`
 *     **{rgb}**    Export RGB colors
 *
 * Return:
 *     Highlight definition map
 *
 * See also:
 *     nvim_get_hl_by_name
 */
export function nvim_get_hl_by_id(
  denops: Denops,
  hl_id: unknown,
  rgb: unknown,
): Promise<unknown>;
export function nvim_get_hl_by_id(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_hl_by_id", ...args);
}

/**
 * Gets a highlight definition by name.
 *
 * Parameters:
 *     **{name}**  Highlight group name
 *     **{rgb}**   Export RGB colors
 *
 * Return:
 *     Highlight definition map
 *
 * See also:
 *     nvim_get_hl_by_id
 */
export function nvim_get_hl_by_name(
  denops: Denops,
  name: unknown,
  rgb: unknown,
): Promise<unknown>;
export function nvim_get_hl_by_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_hl_by_name", ...args);
}

/**
 * Gets a highlight group by name
 *
 * similar to `hlID()`, but allocates a new ID if not present.
 */
export function nvim_get_hl_id_by_name(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_get_hl_id_by_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_hl_id_by_name", ...args);
}

/**
 * Gets a list of global (non-buffer-local) `mapping` definitions.
 *
 * Parameters:
 *     **{mode}**  Mode short-name ("n", "i", "v", ...)
 *
 * Return:
 *     Array of `maparg()`-like dictionaries describing mappings. The
 *     "buffer" key is always zero.
 */
export function nvim_get_keymap(
  denops: Denops,
  mode: unknown,
): Promise<unknown>;
export function nvim_get_keymap(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_keymap", ...args);
}

/**
 * Return a tuple (row, col, buffer, buffername) representing the position of
 * the uppercase/file named mark. See `mark-motions`.
 *
 * Marks are (1,0)-indexed. `api-indexing`
 *
 * Note:
 *     fails with error if a lowercase or buffer local named mark is used.
 *
 * Parameters:
 *     **{name}**  Mark name
 *     **{opts}**  Optional parameters. Reserved for future use.
 *
 * Return:
 *     4-tuple (row, col, buffer, buffername), (0, 0, 0, '') if the mark is
 *     not set.
 *
 * See also:
 *     `nvim_buf_set_mark()`
 *     `nvim_del_mark()`
 */
export function nvim_get_mark(
  denops: Denops,
  name: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_get_mark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_mark", ...args);
}

/**
 * Gets the current mode. `mode()` "blocking" is true if Nvim is waiting for
 * input.
 *
 * Return:
 *     Dictionary { "mode": String, "blocking": Boolean }
 *
 * Attributes:
 *     `api-fast`
 */
export function nvim_get_mode(denops: Denops): Promise<unknown>;
export function nvim_get_mode(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_mode", ...args);
}

/**
 * Gets info describing process `pid`.
 *
 * Return:
 *     Map of process properties, or NIL if process not found.
 */
export function nvim_get_proc(denops: Denops, pid: unknown): Promise<unknown>;
export function nvim_get_proc(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_proc", ...args);
}

/**
 * Gets the immediate children of process `pid`.
 *
 * Return:
 *     Array of child process ids, empty if process not found.
 */
export function nvim_get_proc_children(
  denops: Denops,
  pid: unknown,
): Promise<unknown>;
export function nvim_get_proc_children(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_proc_children", ...args);
}

/**
 * Find files in runtime directories
 *
 * "name" can contain wildcards. For example
 * nvim_get_runtime_file("colors/*.vim", true) will return all color scheme
 * files. Always use forward slashes (/) in the search pattern for
 * subdirectories regardless of platform.
 *
 * It is not an error to not find any files. An empty array is returned then.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{name}**  pattern of files to search for
 *     **{all}**   whether to return all matches or only the first
 *
 * Return:
 *     list of absolute paths to the found files
 */
export function nvim_get_runtime_file(
  denops: Denops,
  name: unknown,
  all: unknown,
): Promise<unknown>;
export function nvim_get_runtime_file(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_runtime_file", ...args);
}

/**
 * Gets a global (g:) variable.
 *
 * Parameters:
 *     **{name}**  Variable name
 *
 * Return:
 *     Variable value
 */
export function nvim_get_var(denops: Denops, name: unknown): Promise<unknown>;
export function nvim_get_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_var", ...args);
}

/**
 * Gets a v: variable.
 *
 * Parameters:
 *     **{name}**  Variable name
 *
 * Return:
 *     Variable value
 */
export function nvim_get_vvar(denops: Denops, name: unknown): Promise<unknown>;
export function nvim_get_vvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_vvar", ...args);
}

/**
 * Queues raw user-input. Unlike `nvim_feedkeys()`, this uses a low-level
 * input buffer and the call is non-blocking (input is processed
 * asynchronously by the eventloop).
 *
 * On execution error: does not fail, but updates v:errmsg.
 *
 * Note:
 *     `keycodes` like `<CR>` are translated, so `"<"` is special. To input a
 *     literal `"<"`, send `<LT>`.
 *
 * Note:
 *     For mouse events use `nvim_input_mouse()`. The pseudokey form
 *     `"<LeftMouse><col,row>"` is deprecated since `api-level` 6.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{keys}**  to be typed
 *
 * Return:
 *     Number of bytes actually written (can be fewer than requested if the
 *     buffer becomes full).
 */
export function nvim_input(denops: Denops, keys: unknown): Promise<unknown>;
export function nvim_input(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_input", ...args);
}

/**
 * Send mouse event from GUI.
 *
 * Non-blocking: does not wait on any result, but queues the event to be
 * processed soon by the event loop.
 *
 * Note:
 *     Currently this doesn't support "scripting" multiple mouse events by
 *     calling it multiple times in a loop: the intermediate mouse positions
 *     will be ignored. It should be used to implement real-time mouse input
 *     in a GUI. The deprecated pseudokey form (`"<LeftMouse><col,row>"`) of
 *     `nvim_input()` has the same limitation.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{button}**    Mouse button: one of "left", "right", "middle", "wheel",
 *                 "move".
 *     **{action}**    For ordinary buttons, one of "press", "drag", "release".
 *                 For the wheel, one of "up", "down", "left", "right".
 *                 Ignored for "move".
 *     **{modifier}**  String of modifiers each represented by a single char. The
 *                 same specifiers are used as for a key press, except that
 *                 the "-" separator is optional, so "C-A-", "c-a" and "CA"
 *                 can all be used to specify Ctrl+Alt+click.
 *     **{grid}**      Grid number if the client uses `ui-multigrid`, else 0.
 *     **{row}**       Mouse row-position (zero-based, like redraw events)
 *     **{col}**       Mouse column-position (zero-based, like redraw events)
 */
export function nvim_input_mouse(
  denops: Denops,
  button: unknown,
  action: unknown,
  modifier: unknown,
  grid: unknown,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function nvim_input_mouse(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_input_mouse", ...args);
}

/**
 * Gets the current list of buffer handles
 *
 * Includes unlisted (unloaded/deleted) buffers, like `:ls!`. Use
 * `nvim_buf_is_loaded()` to check if a buffer is loaded.
 *
 * Return:
 *     List of buffer handles
 */
export function nvim_list_bufs(denops: Denops): Promise<unknown>;
export function nvim_list_bufs(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_list_bufs", ...args);
}

/**
 * Get information about all open channels.
 *
 * Return:
 *     Array of Dictionaries, each describing a channel with the format
 *     specified at `nvim_get_chan_info()`.
 */
export function nvim_list_chans(denops: Denops): Promise<unknown>;
export function nvim_list_chans(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_list_chans", ...args);
}

/**
 * Gets the paths contained in 'runtimepath'.
 *
 * Return:
 *     List of paths
 */
export function nvim_list_runtime_paths(denops: Denops): Promise<unknown>;
export function nvim_list_runtime_paths(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_list_runtime_paths", ...args);
}

/**
 * Gets the current list of tabpage handles.
 *
 * Return:
 *     List of tabpage handles
 */
export function nvim_list_tabpages(denops: Denops): Promise<unknown>;
export function nvim_list_tabpages(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_list_tabpages", ...args);
}

/**
 * Gets a list of dictionaries representing attached UIs.
 *
 * Return:
 *     Array of UI dictionaries, each with these keys:
 *     - "height" Requested height of the UI
 *     - "width" Requested width of the UI
 *     - "rgb" true if the UI uses RGB colors (false implies `cterm-colors`)
 *     - "ext_..." Requested UI extensions, see `ui-option`
 *     - "chan" Channel id of remote UI (not present for TUI)
 */
export function nvim_list_uis(denops: Denops): Promise<unknown>;
export function nvim_list_uis(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_list_uis", ...args);
}

/**
 * Gets the current list of window handles.
 *
 * Return:
 *     List of window handles
 */
export function nvim_list_wins(denops: Denops): Promise<unknown>;
export function nvim_list_wins(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_list_wins", ...args);
}

/**
 * Sets the current editor state from the given `context` map.
 *
 * Parameters:
 *     **{dict}**  `Context` map.
 */
export function nvim_load_context(
  denops: Denops,
  dict: unknown,
): Promise<unknown>;
export function nvim_load_context(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_load_context", ...args);
}

/**
 * Notify the user with a message
 *
 * Relays the call to vim.notify . By default forwards your message in the
 * echo area but can be overridden to trigger desktop notifications.
 *
 * Parameters:
 *     **{msg}**        Message to display to the user
 *     {log_level}  The log level
 *     **{opts}**       Reserved for future use.
 */
export function nvim_notify(
  denops: Denops,
  msg: unknown,
  log_level: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_notify(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_notify", ...args);
}

/**
 * Open a terminal instance in a buffer
 *
 * By default (and currently the only option) the terminal will not be
 * connected to an external process. Instead, input send on the channel will
 * be echoed directly by the terminal. This is useful to display ANSI
 * terminal sequences returned as part of a rpc message, or similar.
 *
 * Note: to directly initiate the terminal using the right size, display the
 * buffer in a configured window before calling this. For instance, for a
 * floating display, first create an empty buffer using `nvim_create_buf()`,
 * then display it using `nvim_open_win()`, and then call this function. Then
 * `nvim_chan_send()` can be called immediately to process sequences in a
 * virtual terminal having the intended size.
 *
 * Parameters:
 *     **{buffer}**  the buffer to use (expected to be empty)
 *     **{opts}**    Optional parameters.
 *               - on_input: lua callback for input sent, i e keypresses in
 *                 terminal mode. Note: keypresses are sent raw as they would
 *                 be to the pty master end. For instance, a carriage return
 *                 is sent as a "\r", not as a "\n". `textlock` applies. It
 *                 is possible to call `nvim_chan_send()` directly in the
 *                 callback however. ["input", term, bufnr, data]
 *
 * Return:
 *     Channel id, or 0 on error
 */
export function nvim_open_term(
  denops: Denops,
  buffer: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_open_term(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_open_term", ...args);
}

/**
 * Writes a message to the Vim output buffer. Does not append "\n", the
 * message is buffered (won't display) until a linefeed is written.
 *
 * Parameters:
 *     **{str}**  Message
 */
export function nvim_out_write(denops: Denops, str: unknown): Promise<unknown>;
export function nvim_out_write(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_out_write", ...args);
}

/**
 * Pastes at cursor, in any mode.
 *
 * Invokes the `vim.paste` handler, which handles each mode appropriately.
 * Sets redo/undo. Faster than `nvim_input()`. Lines break at LF ("\n").
 *
 * Errors ('nomodifiable', `vim.paste()` failure, …) are reflected in `err`
 * but do not affect the return value (which is strictly decided by
 * `vim.paste()`). On error, subsequent calls are ignored ("drained") until
 * the next paste is initiated (phase 1 or -1).
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{data}**   Multiline input. May be binary (containing NUL bytes).
 *     **{crlf}**   Also break lines at CR and CRLF.
 *     **{phase}**  -1: paste in a single call (i.e. without streaming). To
 *              "stream" a paste, call `nvim_paste` sequentially with these `phase` values:
 *              - 1: starts the paste (exactly once)
 *              - 2: continues the paste (zero or more times)
 *              - 3: ends the paste (exactly once)
 *
 * Return:
 *
 *     - true: Client may continue pasting.
 *     - false: Client must cancel the paste.
 */
export function nvim_paste(
  denops: Denops,
  data: unknown,
  crlf: unknown,
  phase: unknown,
): Promise<unknown>;
export function nvim_paste(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_paste", ...args);
}

/**
 * Puts text at cursor, in any mode.
 *
 * Compare `:put` and `p` which are always linewise.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{lines}**   `readfile()`-style list of lines. `channel-lines`
 *     **{type}**    Edit behavior: any `getregtype()` result, or:
 *               - "b" `blockwise-visual` mode (may include width, e.g. "b3")
 *               - "c" `charwise` mode
 *               - "l" `linewise` mode
 *               - "" guess by contents, see `setreg()`
 *     **{after}**   If true insert after cursor (like `p`), or before (like
 *               `P`).
 *     **{follow}**  If true place cursor at end of inserted text.
 */
export function nvim_put(
  denops: Denops,
  lines: unknown,
  type: unknown,
  after: unknown,
  follow: unknown,
): Promise<unknown>;
export function nvim_put(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("nvim_put", ...args);
}

/**
 * Replaces terminal codes and `keycodes` (`<CR>`, `<Esc>`, ...) in a string with
 * the internal representation.
 *
 * Parameters:
 *     **{str}**        String to be converted.
 *     {from_part}  Legacy Vim parameter. Usually true.
 *     {do_lt}      Also translate `<lt>`. Ignored if `special` is false.
 *     **{special}**    Replace `keycodes`, e.g. `<CR>` becomes a "\r" char.
 *
 * See also:
 *     replace_termcodes
 *     cpoptions
 */
export function nvim_replace_termcodes(
  denops: Denops,
  str: unknown,
  from_part: unknown,
  do_lt: unknown,
  special: unknown,
): Promise<unknown>;
export function nvim_replace_termcodes(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_replace_termcodes", ...args);
}

/**
 * Selects an item in the completion popupmenu.
 *
 * If `ins-completion` is not active this API call is silently ignored.
 * Useful for an external UI using `ui-popupmenu` to control the popupmenu
 * with the mouse. Can also be used in a mapping; use `<cmd>` `:map-cmd` to
 * ensure the mapping doesn't end completion mode.
 *
 * Parameters:
 *     **{item}**    Index (zero-based) of the item to select. Value of -1
 *               selects nothing and restores the original text.
 *     **{insert}**  Whether the selection should be inserted in the buffer.
 *     **{finish}**  Finish the completion and dismiss the popupmenu. Implies
 *               `insert`.
 *     **{opts}**    Optional parameters. Reserved for future use.
 */
export function nvim_select_popupmenu_item(
  denops: Denops,
  item: unknown,
  insert: unknown,
  finish: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_select_popupmenu_item(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_select_popupmenu_item", ...args);
}

/**
 * Self-identifies the client.
 *
 * The client/plugin/application should call this after connecting, to
 * provide hints about its identity and purpose, for debugging and
 * orchestration.
 *
 * Can be called more than once; the caller should merge old info if
 * appropriate. Example: library first identifies the channel, then a plugin
 * using that library later identifies itself.
 *
 * Note:
 *     "Something is better than nothing". You don't need to include all the
 *     fields.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{name}**        Short name for the connected client
 *     **{version}**     Dictionary describing the version, with these (optional)
 *                   keys:
 *                   - "major" major version (defaults to 0 if not set, for
 *                     no release yet)
 *                   - "minor" minor version
 *                   - "patch" patch number
 *                   - "prerelease" string describing a prerelease, like
 *                     "dev" or "beta1"
 *                   - "commit" hash or similar identifier of commit
 *     **{type}**        Must be one of the following values. Client libraries
 *                   should default to "remote" unless overridden by the
 *                   user.
 *                   - "remote" remote client connected to Nvim.
 *                   - "ui" gui frontend
 *                   - "embedder" application using Nvim as a component (for
 *                     example, IDE/editor implementing a vim mode).
 *                   - "host" plugin host, typically started by nvim
 *                   - "plugin" single plugin, started by nvim
 *     **{methods}**     Builtin methods in the client. For a host, this does not
 *                   include plugin methods which will be discovered later.
 *                   The key should be the method name, the values are dicts
 *                   with these (optional) keys (more keys may be added in
 *                   future versions of Nvim, thus unknown keys are ignored.
 *                   Clients must only use keys defined in this or later
 *                   versions of Nvim):
 *                   - "async" if true, send as a notification. If false or
 *                     unspecified, use a blocking request
 *                   - "nargs" Number of arguments. Could be a single integer
 *                     or an array of two integers, minimum and maximum
 *                     inclusive.
 *     **{attributes}**  Arbitrary string:string map of informal client
 *                   properties. Suggested keys:
 *                   - "website": Client homepage URL (e.g. GitHub
 *                     repository)
 *                   - "license": License description ("Apache 2", "GPLv3",
 *                     "MIT", …)
 *                   - "logo": URI or path to image, preferably small logo or
 *                     icon. .png or .svg format is preferred.
 */
export function nvim_set_client_info(
  denops: Denops,
  name: unknown,
  version: unknown,
  type: unknown,
  methods: unknown,
  attributes: unknown,
): Promise<unknown>;
export function nvim_set_client_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_client_info", ...args);
}

/**
 * Sets the current buffer.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{buffer}**  Buffer handle
 */
export function nvim_set_current_buf(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_set_current_buf(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_current_buf", ...args);
}

/**
 * Changes the global working directory.
 *
 * Parameters:
 *     **{dir}**  Directory path
 */
export function nvim_set_current_dir(
  denops: Denops,
  dir: unknown,
): Promise<unknown>;
export function nvim_set_current_dir(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_current_dir", ...args);
}

/**
 * Sets the current line.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{line}**  Line contents
 */
export function nvim_set_current_line(
  denops: Denops,
  line: unknown,
): Promise<unknown>;
export function nvim_set_current_line(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_current_line", ...args);
}

/**
 * Sets the current tabpage.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle
 */
export function nvim_set_current_tabpage(
  denops: Denops,
  tabpage: unknown,
): Promise<unknown>;
export function nvim_set_current_tabpage(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_current_tabpage", ...args);
}

/**
 * Sets the current window.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{window}**  Window handle
 */
export function nvim_set_current_win(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_set_current_win(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_current_win", ...args);
}

/**
 * Sets a highlight group.
 *
 * Note:
 *     Unlike the `:highlight` command which can update a highlight group,
 *     this function completely replaces the definition. For example:
 *     `nvim_set_hl(0, 'Visual', {})` will clear the highlight group
 *     'Visual'.
 *
 * Note:
 *     The fg and bg keys also accept the string values `"fg"` or `"bg"`
 *     which act as aliases to the corresponding foreground and background
 *     values of the Normal group. If the Normal group has not been defined,
 *     using these values results in an error.
 *
 * Parameters:
 *     {ns_id}  Namespace id for this highlight `nvim_create_namespace()`.
 *              Use 0 to set a highlight group globally `:highlight`.
 *     **{name}**   Highlight group name, e.g. "ErrorMsg"
 *     **{val}**    Highlight definition map, accepts the following keys:
 *              - fg (or foreground): color name or "#RRGGBB", see note.
 *              - bg (or background): color name or "#RRGGBB", see note.
 *              - sp (or special): color name or "#RRGGBB"
 *              - blend: integer between 0 and 100
 *              - bold: boolean
 *              - standout: boolean
 *              - underline: boolean
 *              - undercurl: boolean
 *              - underdouble: boolean
 *              - underdotted: boolean
 *              - underdashed: boolean
 *              - strikethrough: boolean
 *              - italic: boolean
 *              - reverse: boolean
 *              - nocombine: boolean
 *              - link: name of another highlight group to link to, see
 *                `:hi-link`.
 *              - default: Don't override existing definition `:hi-default`
 *              - ctermfg: Sets foreground of cterm color `ctermfg`
 *              - ctermbg: Sets background of cterm color `ctermbg`
 *              - cterm: cterm attribute map, like `highlight-args`. If not
 *                set, cterm attributes will match those from the attribute
 *                map documented above.
 */
export function nvim_set_hl(
  denops: Denops,
  ns_id: unknown,
  name: unknown,
  val: unknown,
): Promise<unknown>;
export function nvim_set_hl(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_hl", ...args);
}

/**
 * Set active namespace for highlights. This can be set for a single window,
 * see `nvim_win_set_hl_ns()`.
 *
 * Parameters:
 *     {ns_id}  the namespace to use
 */
export function nvim_set_hl_ns(
  denops: Denops,
  ns_id: unknown,
): Promise<unknown>;
export function nvim_set_hl_ns(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_hl_ns", ...args);
}

/**
 * Set active namespace for highlights while redrawing.
 *
 * This function meant to be called while redrawing, primarily from
 * `nvim_set_decoration_provider()` on_win and on_line callbacks, which are
 * allowed to change the namespace during a redraw cycle.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     {ns_id}  the namespace to activate
 */
export function nvim_set_hl_ns_fast(
  denops: Denops,
  ns_id: unknown,
): Promise<unknown>;
export function nvim_set_hl_ns_fast(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_hl_ns_fast", ...args);
}

/**
 * Sets a global `mapping` for the given mode.
 *
 * To set a buffer-local mapping, use `nvim_buf_set_keymap()`.
 *
 * Unlike `:map`, leading/trailing whitespace is accepted as part of the
 * **{lhs}** or **{rhs}**. Empty **{rhs}** is `<Nop>`. `keycodes` are replaced as usual.
 *
 * Example:
 *
 *     call nvim_set_keymap('n', ' <NL>', '', {'nowait': v:true})
 *
 * is equivalent to:
 *
 *     nmap <nowait> <Space><NL> <Nop>
 *
 * Parameters:
 *     **{mode}**  Mode short-name (map command prefix: "n", "i", "v", "x", …) or
 *             "!" for `:map!`, or empty string for `:map`.
 *     **{lhs}**   Left-hand-side `{lhs}` of the mapping.
 *     **{rhs}**   Right-hand-side `{rhs}` of the mapping.
 *     **{opts}**  Optional parameters map: keys are `:map-arguments`, values are
 *             booleans (default false). Accepts all `:map-arguments` as keys
 *             excluding `<buffer>` but including `:noremap` and "desc".
 *             Unknown key is an error. "desc" can be used to give a
 *             description to the mapping. When called from Lua, also accepts
 *             a "callback" key that takes a Lua function to call when the
 *             mapping is executed. When "expr" is true, "replace_keycodes"
 *             (boolean) can be used to replace keycodes in the resulting
 *             string (see `nvim_replace_termcodes()`), and a Lua callback
 *             returning `nil` is equivalent to returning an empty string.
 */
export function nvim_set_keymap(
  denops: Denops,
  mode: unknown,
  lhs: unknown,
  rhs: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_set_keymap(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_keymap", ...args);
}

/**
 * Sets a global (g:) variable.
 *
 * Parameters:
 *     **{name}**   Variable name
 *     **{value}**  Variable value
 */
export function nvim_set_var(
  denops: Denops,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_set_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_var", ...args);
}

/**
 * Sets a v: variable, if it is not readonly.
 *
 * Parameters:
 *     **{name}**   Variable name
 *     **{value}**  Variable value
 */
export function nvim_set_vvar(
  denops: Denops,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_set_vvar(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_vvar", ...args);
}

/**
 * Calculates the number of display cells occupied by `text`. Control
 * characters including `<Tab>` count as one cell.
 *
 * Parameters:
 *     **{text}**  Some text
 *
 * Return:
 *     Number of cells
 */
export function nvim_strwidth(denops: Denops, text: unknown): Promise<unknown>;
export function nvim_strwidth(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_strwidth", ...args);
}

/**
 * Subscribes to event broadcasts.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{event}**  Event type string
 */
export function nvim_subscribe(
  denops: Denops,
  event: unknown,
): Promise<unknown>;
export function nvim_subscribe(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_subscribe", ...args);
}

/**
 * Unsubscribes to event broadcasts.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{event}**  Event type string
 */
export function nvim_unsubscribe(
  denops: Denops,
  event: unknown,
): Promise<unknown>;
export function nvim_unsubscribe(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_unsubscribe", ...args);
}

/**
 * Calls a VimL `Dictionary-function` with the given arguments.
 *
 * On execution error: fails with VimL error, updates v:errmsg.
 *
 * Parameters:
 *     **{dict}**  Dictionary, or String evaluating to a VimL `self` dict
 *     **{fn}**    Name of the function defined on the VimL dict
 *     **{args}**  Function arguments packed in an Array
 *
 * Return:
 *     Result of the function call
 */
export function nvim_call_dict_function(
  denops: Denops,
  dict: unknown,
  fn: unknown,
  args: unknown,
): Promise<unknown>;
export function nvim_call_dict_function(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_call_dict_function", ...args);
}

/**
 * Calls a VimL function with the given arguments.
 *
 * On execution error: fails with VimL error, updates v:errmsg.
 *
 * Parameters:
 *     **{fn}**    Function to call
 *     **{args}**  Function arguments packed in an Array
 *
 * Return:
 *     Result of the function call
 */
export function nvim_call_function(
  denops: Denops,
  fn: unknown,
  args: unknown,
): Promise<unknown>;
export function nvim_call_function(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_call_function", ...args);
}

/**
 * Executes an Ex command.
 *
 * On execution error: fails with VimL error, updates v:errmsg.
 *
 * Prefer using `nvim_cmd()` or `nvim_exec()` over this. To evaluate multiple
 * lines of Vim script or an Ex command directly, use `nvim_exec()`. To
 * construct an Ex command using a structured format and then execute it, use
 * `nvim_cmd()`. To modify an Ex command before evaluating it, use
 * `nvim_parse_cmd()` in conjunction with `nvim_cmd()`.
 *
 * Parameters:
 *     **{command}**  Ex command string
 */
export function nvim_command(
  denops: Denops,
  command: unknown,
): Promise<unknown>;
export function nvim_command(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_command", ...args);
}

/**
 * Evaluates a VimL `expression`. Dictionaries and Lists are recursively
 * expanded.
 *
 * On execution error: fails with VimL error, updates v:errmsg.
 *
 * Parameters:
 *     **{expr}**  VimL expression string
 *
 * Return:
 *     Evaluation result or expanded object
 */
export function nvim_eval(denops: Denops, expr: unknown): Promise<unknown>;
export function nvim_eval(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_eval", ...args);
}

/**
 * Executes Vimscript (multiline block of Ex commands), like anonymous
 * `:source`.
 *
 * Unlike `nvim_command()` this function supports heredocs, script-scope
 * (s:), etc.
 *
 * On execution error: fails with VimL error, updates v:errmsg.
 *
 * Parameters:
 *     **{src}**     Vimscript code
 *     **{output}**  Capture and return all (non-error, non-shell `:!`) output
 *
 * Return:
 *     Output (non-error, non-shell `:!`) if `output` is true, else empty
 *     string.
 *
 * See also:
 *     `execute()`
 *     `nvim_command()`
 *     `nvim_cmd()`
 */
export function nvim_exec(
  denops: Denops,
  src: unknown,
  output: unknown,
): Promise<unknown>;
export function nvim_exec(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_exec", ...args);
}

/**
 * Parse a VimL expression.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{expr}**       Expression to parse. Always treated as a single line.
 *     **{flags}**      Flags:
 *                  - "m" if multiple expressions in a row are allowed (only
 *                    the first one will be parsed),
 *                  - "E" if EOC tokens are not allowed (determines whether
 *                    they will stop parsing process or be recognized as an
 *                    operator/space, though also yielding an error).
 *                  - "l" when needing to start parsing with lvalues for
 *                    ":let" or ":for". Common flag sets:
 *                  - "m" to parse like for ":echo".
 *                  - "E" to parse like for `"<C-r>="`.
 *                  - empty string for ":call".
 *                  - "lm" to parse for ":let".
 *     **{highlight}**  If true, return value will also include "highlight" key
 *                  containing array of 4-tuples (arrays) (Integer, Integer,
 *                  Integer, String), where first three numbers define the
 *                  highlighted region and represent line, starting column
 *                  and ending column (latter exclusive: one should highlight
 *                  region [start_col, end_col)).
 *
 * Return:
 *
 *     - AST: top-level dictionary with these keys:
 *       - "error": Dictionary with error, present only if parser saw some
 *         error. Contains the following keys:
 *         - "message": String, error message in printf format, translated.
 *           Must contain exactly one "%.*s".
 *         - "arg": String, error message argument.
 *
 *       - "len": Amount of bytes successfully parsed. With flags equal to ""
 *         that should be equal to the length of expr string. (“Successfully
 *         parsed” here means “participated in AST creation”, not “till the
 *         first error”.)
 *       - "ast": AST, either nil or a dictionary with these keys:
 *         - "type": node type, one of the value names from ExprASTNodeType
 *           stringified without "kExprNode" prefix.
 *         - "start": a pair [line, column] describing where node is
 *           "started" where "line" is always 0 (will not be 0 if you will be
 *           using nvim_parse_viml() on e.g. ":let", but that is not present
 *           yet). Both elements are Integers.
 *         - "len": “length” of the node. This and "start" are there for
 *           debugging purposes primary (debugging parser and providing debug
 *           information).
 *         - "children": a list of nodes described in top/"ast". There always
 *           is zero, one or two children, key will not be present if node
 *           has no children. Maximum number of children may be found in
 *           node_maxchildren array.
 *
 *     - Local values (present only for certain nodes):
 *       - "scope": a single Integer, specifies scope for "Option" and
 *         "PlainIdentifier" nodes. For "Option" it is one of ExprOptScope
 *         values, for "PlainIdentifier" it is one of ExprVarScope values.
 *       - "ident": identifier (without scope, if any), present for "Option",
 *         "PlainIdentifier", "PlainKey" and "Environment" nodes.
 *       - "name": Integer, register name (one character) or -1. Only present
 *         for "Register" nodes.
 *       - "cmp_type": String, comparison type, one of the value names from
 *         ExprComparisonType, stringified without "kExprCmp" prefix. Only
 *         present for "Comparison" nodes.
 *       - "ccs_strategy": String, case comparison strategy, one of the value
 *         names from ExprCaseCompareStrategy, stringified without
 *         "kCCStrategy" prefix. Only present for "Comparison" nodes.
 *       - "augmentation": String, augmentation type for "Assignment" nodes.
 *         Is either an empty string, "Add", "Subtract" or "Concat" for "=",
 *         "+=", "-=" or ".=" respectively.
 *       - "invert": Boolean, true if result of comparison needs to be
 *         inverted. Only present for "Comparison" nodes.
 *       - "ivalue": Integer, integer value for "Integer" nodes.
 *       - "fvalue": Float, floating-point value for "Float" nodes.
 *       - "svalue": String, value for "SingleQuotedString" and
 *         "DoubleQuotedString" nodes.
 */
export function nvim_parse_expression(
  denops: Denops,
  expr: unknown,
  flags: unknown,
  highlight: unknown,
): Promise<unknown>;
export function nvim_parse_expression(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_parse_expression", ...args);
}

/**
 * Create a new user command `user-commands` in the given buffer.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer.
 *
 * See also:
 *     nvim_create_user_command
 */
export function nvim_buf_create_user_command(
  denops: Denops,
  buffer: unknown,
  name: unknown,
  command: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_create_user_command(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_create_user_command", ...args);
}

/**
 * Delete a buffer-local user-defined command.
 *
 * Only commands created with `:command-buffer` or
 * `nvim_buf_create_user_command()` can be deleted with this function.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer.
 *     **{name}**    Name of the command to delete.
 */
export function nvim_buf_del_user_command(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_del_user_command(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_del_user_command", ...args);
}

/**
 * Gets a map of buffer-local `user-commands`.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{opts}**    Optional parameters. Currently not used.
 *
 * Return:
 *     Map of maps describing commands.
 */
export function nvim_buf_get_commands(
  denops: Denops,
  buffer: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_get_commands(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_commands", ...args);
}

/**
 * Executes an Ex command.
 *
 * Unlike `nvim_command()` this command takes a structured Dictionary instead
 * of a String. This allows for easier construction and manipulation of an Ex
 * command. This also allows for things such as having spaces inside a
 * command argument, expanding filenames in a command that otherwise doesn't
 * expand filenames, etc. Command arguments may also be Number, Boolean or
 * String.
 *
 * The first argument may also be used instead of count for commands that
 * support it in order to make their usage simpler with `vim.cmd()`. For
 * example, instead of `vim.cmd.bdelete{ count = 2 }`, you may do
 * `vim.cmd.bdelete(2)`.
 *
 * On execution error: fails with VimL error, updates v:errmsg.
 *
 * Parameters:
 *     **{cmd}**   Command to execute. Must be a Dictionary that can contain the
 *             same values as the return value of `nvim_parse_cmd()` except
 *             "addr", "nargs" and "nextcmd" which are ignored if provided.
 *             All values except for "cmd" are optional.
 *     **{opts}**  Optional parameters.
 *             - output: (boolean, default false) Whether to return command
 *               output.
 *
 * Return:
 *     Command output (non-error, non-shell `:!`) if `output` is true, else
 *     empty string.
 *
 * See also:
 *     `nvim_exec()`
 *     `nvim_command()`
 */
export function nvim_cmd(
  denops: Denops,
  cmd: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_cmd(denops: Denops, ...args: unknown[]): Promise<unknown> {
  return denops.call("nvim_cmd", ...args);
}

/**
 * Create a new user command `user-commands`
 *
 * **{name}** is the name of the new command. The name must begin with an
 * uppercase letter.
 *
 * **{command}** is the replacement text or Lua function to execute.
 *
 * Example:
 *
 *     :call nvim_create_user_command('SayHello', 'echo "Hello world!"', {})
 *     :SayHello
 *     Hello world!
 *
 * Parameters:
 *     **{name}**     Name of the new user command. Must begin with an uppercase
 *                letter.
 *     **{command}**  Replacement command to execute when this user command is
 *                executed. When called from Lua, the command can also be a
 *                Lua function. The function is called with a single table
 *                argument that contains the following keys:
 *                - args: (string) The args passed to the command, if any
 *                  `<args>`
 *                - fargs: (table) The args split by unescaped whitespace
 *                  (when more than one argument is allowed), if any
 *                  `<f-args>`
 *                - bang: (boolean) "true" if the command was executed with a
 *                  ! modifier `<bang>`
 *                - line1: (number) The starting line of the command range
 *                  `<line1>`
 *                - line2: (number) The final line of the command range
 *                  `<line2>`
 *                - range: (number) The number of items in the command range:
 *                  0, 1, or 2 `<range>`
 *                - count: (number) Any count supplied `<count>`
 *                - reg: (string) The optional register, if specified `<reg>`
 *                - mods: (string) Command modifiers, if any `<mods>`
 *                - smods: (table) Command modifiers in a structured format.
 *                  Has the same structure as the "mods" key of
 *                  `nvim_parse_cmd()`.
 *     **{opts}**     Optional command attributes. See `command-attributes` for
 *                more details. To use boolean attributes (such as
 *                `:command-bang` or `:command-bar`) set the value to "true".
 *                In addition to the string options listed in
 *                `:command-complete`, the "complete" key also accepts a Lua
 *                function which works like the "customlist" completion mode
 *                `:command-completion-customlist`. Additional parameters:
 *                - desc: (string) Used for listing the command when a Lua
 *                  function is used for **{command}**.
 *                - force: (boolean, default true) Override any previous
 *                  definition.
 *                - preview: (function) Preview callback for 'inccommand'
 *                  `:command-preview`
 */
export function nvim_create_user_command(
  denops: Denops,
  name: unknown,
  command: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_create_user_command(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_create_user_command", ...args);
}

/**
 * Delete a user-defined command.
 *
 * Parameters:
 *     **{name}**  Name of the command to delete.
 */
export function nvim_del_user_command(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_del_user_command(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_user_command", ...args);
}

/**
 * Gets a map of global (non-buffer-local) Ex commands.
 *
 * Currently only `user-commands` are supported, not builtin Ex commands.
 *
 * Parameters:
 *     **{opts}**  Optional parameters. Currently only supports **{"builtin":false}**
 *
 * Return:
 *     Map of maps describing commands.
 */
export function nvim_get_commands(
  denops: Denops,
  opts: unknown,
): Promise<unknown>;
export function nvim_get_commands(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_commands", ...args);
}

/**
 * Parse command line.
 *
 * Doesn't check the validity of command arguments.
 *
 * Attributes:
 *     `api-fast`
 *
 * Parameters:
 *     **{str}**   Command line string to parse. Cannot contain "\n".
 *     **{opts}**  Optional parameters. Reserved for future use.
 *
 * Return:
 *     Dictionary containing command information, with these keys:
 *     - cmd: (string) Command name.
 *     - range: (array) (optional) Command range (`<line1>` `<line2>`).
 *       Omitted if command doesn't accept a range. Otherwise, has no
 *       elements if no range was specified, one element if only a single
 *       range item was specified, or two elements if both range items were
 *       specified.
 *     - count: (number) (optional) Command `<count>`. Omitted if command
 *       cannot take a count.
 *     - reg: (string) (optional) Command `<register>`. Omitted if command
 *       cannot take a register.
 *     - bang: (boolean) Whether command contains a `<bang>` (!) modifier.
 *     - args: (array) Command arguments.
 *     - addr: (string) Value of `:command-addr`. Uses short name.
 *     - nargs: (string) Value of `:command-nargs`.
 *     - nextcmd: (string) Next command if there are multiple commands
 *       separated by a `:bar`. Empty if there isn't a next command.
 *     - magic: (dictionary) Which characters have special meaning in the
 *       command arguments.
 *       - file: (boolean) The command expands filenames. Which means
 *         characters such as "%", "#" and wildcards are expanded.
 *       - bar: (boolean) The "|" character is treated as a command separator
 *         and the double quote character (") is treated as the start of a
 *         comment.
 *
 *     - mods: (dictionary) `:command-modifiers`.
 *       - filter: (dictionary) `:filter`.
 *         - pattern: (string) Filter pattern. Empty string if there is no
 *           filter.
 *         - force: (boolean) Whether filter is inverted or not.
 *
 *       - silent: (boolean) `:silent`.
 *       - emsg_silent: (boolean) `:silent!`.
 *       - unsilent: (boolean) `:unsilent`.
 *       - sandbox: (boolean) `:sandbox`.
 *       - noautocmd: (boolean) `:noautocmd`.
 *       - browse: (boolean) `:browse`.
 *       - confirm: (boolean) `:confirm`.
 *       - hide: (boolean) `:hide`.
 *       - horizontal: (boolean) `:horizontal`.
 *       - keepalt: (boolean) `:keepalt`.
 *       - keepjumps: (boolean) `:keepjumps`.
 *       - keepmarks: (boolean) `:keepmarks`.
 *       - keeppatterns: (boolean) `:keeppatterns`.
 *       - lockmarks: (boolean) `:lockmarks`.
 *       - noswapfile: (boolean) `:noswapfile`.
 *       - tab: (integer) `:tab`. -1 when omitted.
 *       - verbose: (integer) `:verbose`. -1 when omitted.
 *       - vertical: (boolean) `:vertical`.
 *       - split: (string) Split modifier string, is an empty string when
 *         there's no split modifier. If there is a split modifier it can be
 *         one of:
 *         - "aboveleft": `:aboveleft`.
 *         - "belowright": `:belowright`.
 *         - "topleft": `:topleft`.
 *         - "botright": `:botright`.
 */
export function nvim_parse_cmd(
  denops: Denops,
  str: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_parse_cmd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_parse_cmd", ...args);
}

/**
 * Gets a buffer option value
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Option name
 *
 * Return:
 *     Option value
 */
export function nvim_buf_get_option(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_get_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_option", ...args);
}

/**
 * Sets a buffer option value. Passing `nil` as value deletes the option
 * (only works if there's a global fallback)
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Option name
 *     **{value}**   Option value
 */
export function nvim_buf_set_option(
  denops: Denops,
  buffer: unknown,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_buf_set_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_option", ...args);
}

/**
 * Gets the option information for all options.
 *
 * The dictionary has the full option names as keys and option metadata
 * dictionaries as detailed at `nvim_get_option_info()`.
 *
 * Return:
 *     dictionary of all options
 */
export function nvim_get_all_options_info(denops: Denops): Promise<unknown>;
export function nvim_get_all_options_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_all_options_info", ...args);
}

/**
 * Gets the global value of an option.
 *
 * Parameters:
 *     **{name}**  Option name
 *
 * Return:
 *     Option value (global)
 */
export function nvim_get_option(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_get_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_option", ...args);
}

/**
 * Gets the option information for one option
 *
 * Resulting dictionary has keys:
 * - name: Name of the option (like 'filetype')
 * - shortname: Shortened name of the option (like 'ft')
 * - type: type of option ("string", "number" or "boolean")
 * - default: The default value for the option
 * - was_set: Whether the option was set.
 * - last_set_sid: Last set script id (if any)
 * - last_set_linenr: line number where option was set
 * - last_set_chan: Channel where option was set (0 for local)
 * - scope: one of "global", "win", or "buf"
 * - global_local: whether win or buf option has a global value
 * - commalist: List of comma separated values
 * - flaglist: List of single char flags
 *
 * Parameters:
 *     **{name}**  Option name
 *
 * Return:
 *     Option Information
 */
export function nvim_get_option_info(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_get_option_info(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_option_info", ...args);
}

/**
 * Gets the value of an option. The behavior of this function matches that of
 * `:set`: the local value of an option is returned if it exists; otherwise,
 * the global value is returned. Local values always correspond to the
 * current buffer or window, unless "buf" or "win" is set in **{opts}**.
 *
 * Parameters:
 *     **{name}**  Option name
 *     **{opts}**  Optional parameters
 *             - scope: One of "global" or "local". Analogous to `:setglobal`
 *               and `:setlocal`, respectively.
 *             - win: `window-ID`. Used for getting window local options.
 *             - buf: Buffer number. Used for getting buffer local options.
 *               Implies **{scope}** is "local".
 *
 * Return:
 *     Option value
 */
export function nvim_get_option_value(
  denops: Denops,
  name: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_get_option_value(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_option_value", ...args);
}

/**
 * Sets the global value of an option.
 *
 * Parameters:
 *     **{name}**   Option name
 *     **{value}**  New option value
 */
export function nvim_set_option(
  denops: Denops,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_set_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_option", ...args);
}

/**
 * Sets the value of an option. The behavior of this function matches that of
 * `:set`: for global-local options, both the global and local value are set
 * unless otherwise specified with **{scope}**.
 *
 * Note the options **{win}** and **{buf}** cannot be used together.
 *
 * Parameters:
 *     **{name}**   Option name
 *     **{value}**  New option value
 *     **{opts}**   Optional parameters
 *              - scope: One of "global" or "local". Analogous to
 *                `:setglobal` and `:setlocal`, respectively.
 *              - win: `window-ID`. Used for setting window local option.
 *              - buf: Buffer number. Used for setting buffer local option.
 */
export function nvim_set_option_value(
  denops: Denops,
  name: unknown,
  value: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_set_option_value(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_option_value", ...args);
}

/**
 * Gets a window option value
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{name}**    Option name
 *
 * Return:
 *     Option value
 */
export function nvim_win_get_option(
  denops: Denops,
  window: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_win_get_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_option", ...args);
}

/**
 * Sets a window option value. Passing `nil` as value deletes the option
 * (only works if there's a global fallback)
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{name}**    Option name
 *     **{value}**   Option value
 */
export function nvim_win_set_option(
  denops: Denops,
  window: unknown,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_win_set_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_option", ...args);
}

/**
 * Activates buffer-update events on a channel, or as Lua callbacks.
 *
 * Example (Lua): capture buffer updates in a global `events` variable (use "print(vim.inspect(events))" to see its contents):
 *
 *     events = {}
 *     vim.api.nvim_buf_attach(0, false, {
 *       on_lines=function(...) table.insert(events, {...}) end})
 *
 * Parameters:
 *     **{buffer}**       Buffer handle, or 0 for current buffer
 *     {send_buffer}  True if the initial notification should contain the
 *                    whole buffer: first notification will be
 *                    `nvim_buf_lines_event`. Else the first notification
 *                    will be `nvim_buf_changedtick_event`. Not for Lua
 *                    callbacks.
 *     **{opts}**         Optional parameters.
 *                    - on_lines: Lua callback invoked on change. Return `true` to detach. Args:
 *                      - the string "lines"
 *                      - buffer handle
 *                      - b:changedtick
 *                      - first line that changed (zero-indexed)
 *                      - last line that was changed
 *                      - last line in the updated range
 *                      - byte count of previous contents
 *                      - deleted_codepoints (if `utf_sizes` is true)
 *                      - deleted_codeunits (if `utf_sizes` is true)
 *
 *                    - on_bytes: lua callback invoked on change. This
 *                      callback receives more granular information about the
 *                      change compared to on_lines. Return `true` to detach. Args:
 *                      - the string "bytes"
 *                      - buffer handle
 *                      - b:changedtick
 *                      - start row of the changed text (zero-indexed)
 *                      - start column of the changed text
 *                      - byte offset of the changed text (from the start of
 *                        the buffer)
 *                      - old end row of the changed text
 *                      - old end column of the changed text
 *                      - old end byte length of the changed text
 *                      - new end row of the changed text
 *                      - new end column of the changed text
 *                      - new end byte length of the changed text
 *
 *                    - on_changedtick: Lua callback invoked on changedtick
 *                      increment without text change. Args:
 *                      - the string "changedtick"
 *                      - buffer handle
 *                      - b:changedtick
 *
 *                    - on_detach: Lua callback invoked on detach. Args:
 *                      - the string "detach"
 *                      - buffer handle
 *
 *                    - on_reload: Lua callback invoked on reload. The entire
 *                      buffer content should be considered changed. Args:
 *                      - the string "reload"
 *                      - buffer handle
 *
 *                    - utf_sizes: include UTF-32 and UTF-16 size of the
 *                      replaced region, as args to `on_lines`.
 *                    - preview: also attach to command preview (i.e.
 *                      'inccommand') events.
 *
 * Return:
 *     False if attach failed (invalid parameter, or buffer isn't loaded);
 *     otherwise True. TODO: LUA_API_NO_EVAL
 *
 * See also:
 *     `nvim_buf_detach()`
 *     `api-buffer-updates-lua`
 */
export function nvim_buf_attach(
  denops: Denops,
  buffer: unknown,
  send_buffer: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_attach(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_attach", ...args);
}

/**
 * call a function with buffer as temporary current buffer
 *
 * This temporarily switches current buffer to "buffer". If the current
 * window already shows "buffer", the window is not switched If a window
 * inside the current tabpage (including a float) already shows the buffer
 * One of these windows will be set as current window temporarily. Otherwise
 * a temporary scratch window (called the "autocmd window" for historical
 * reasons) will be used.
 *
 * This is useful e.g. to call vimL functions that only work with the current
 * buffer/window currently, like `termopen()`.
 *
 * Attributes:
 *     `vim.api` only
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{fun}**     Function to call inside the buffer (currently lua callable
 *               only)
 *
 * Return:
 *     Return value of function. NB: will deepcopy lua values currently, use
 *     upvalues to send lua references in and out.
 */
export function nvim_buf_call(
  denops: Denops,
  buffer: unknown,
  fun: unknown,
): Promise<unknown>;
export function nvim_buf_call(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_call", ...args);
}

/**
 * Unmaps a buffer-local `mapping` for the given mode.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * See also:
 *     `nvim_del_keymap()`
 */
export function nvim_buf_del_keymap(
  denops: Denops,
  buffer: unknown,
  mode: unknown,
  lhs: unknown,
): Promise<unknown>;
export function nvim_buf_del_keymap(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_del_keymap", ...args);
}

/**
 * Deletes a named mark in the buffer. See `mark-motions`.
 *
 * Note:
 *     only deletes marks set in the buffer, if the mark is not set in the
 *     buffer it will return false.
 *
 * Parameters:
 *     **{buffer}**  Buffer to set the mark on
 *     **{name}**    Mark name
 *
 * Return:
 *     true if the mark was deleted, else false.
 *
 * See also:
 *     `nvim_buf_set_mark()`
 *     `nvim_del_mark()`
 */
export function nvim_buf_del_mark(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_del_mark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_del_mark", ...args);
}

/**
 * Removes a buffer-scoped (b:) variable
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Variable name
 */
export function nvim_buf_del_var(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_del_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_del_var", ...args);
}

/**
 * Deletes the buffer. See `:bwipeout`
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{opts}**    Optional parameters. Keys:
 *               - force: Force deletion and ignore unsaved changes.
 *               - unload: Unloaded only, do not delete. See `:bunload`
 */
export function nvim_buf_delete(
  denops: Denops,
  buffer: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_delete(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_delete", ...args);
}

/**
 * Deactivates buffer-update events on the channel.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     False if detach failed (because the buffer isn't loaded); otherwise
 *     True.
 *
 * See also:
 *     `nvim_buf_attach()`
 *     `api-lua-detach` for detaching Lua callbacks
 */
export function nvim_buf_detach(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_buf_detach(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_detach", ...args);
}

/**
 * Gets a changed tick of a buffer
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     `b:changedtick` value.
 */
export function nvim_buf_get_changedtick(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_buf_get_changedtick(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_changedtick", ...args);
}

/**
 * Gets a list of buffer-local `mapping` definitions.
 *
 * Parameters:
 *     **{mode}**    Mode short-name ("n", "i", "v", ...)
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     Array of `maparg()`-like dictionaries describing mappings. The
 *     "buffer" key holds the associated buffer handle.
 */
export function nvim_buf_get_keymap(
  denops: Denops,
  buffer: unknown,
  mode: unknown,
): Promise<unknown>;
export function nvim_buf_get_keymap(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_keymap", ...args);
}

/**
 * Gets a line-range from the buffer.
 *
 * Indexing is zero-based, end-exclusive. Negative indices are interpreted as
 * length+1+index: -1 refers to the index past the end. So to get the last
 * element use start=-2 and end=-1.
 *
 * Out-of-bounds indices are clamped to the nearest valid value, unless
 * `strict_indexing` is set.
 *
 * Parameters:
 *     **{buffer}**           Buffer handle, or 0 for current buffer
 *     **{start}**            First line index
 *     **{end}**              Last line index, exclusive
 *     {strict_indexing}  Whether out-of-bounds should be an error.
 *
 * Return:
 *     Array of lines, or empty array for unloaded buffer.
 */
export function nvim_buf_get_lines(
  denops: Denops,
  buffer: unknown,
  start: unknown,
  end: unknown,
  strict_indexing: unknown,
): Promise<unknown>;
export function nvim_buf_get_lines(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_lines", ...args);
}

/**
 * Returns a tuple (row,col) representing the position of the named mark. See
 * `mark-motions`.
 *
 * Marks are (1,0)-indexed. `api-indexing`
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Mark name
 *
 * Return:
 *     (row, col) tuple, (0, 0) if the mark is not set, or is an
 *     uppercase/file mark set in another buffer.
 *
 * See also:
 *     `nvim_buf_set_mark()`
 *     `nvim_buf_del_mark()`
 */
export function nvim_buf_get_mark(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_get_mark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_mark", ...args);
}

/**
 * Gets the full file name for the buffer
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     Buffer name
 */
export function nvim_buf_get_name(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_buf_get_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_name", ...args);
}

/**
 * Returns the byte offset of a line (0-indexed). `api-indexing`
 *
 * Line 1 (index=0) has offset 0. UTF-8 bytes are counted. EOL is one byte.
 * 'fileformat' and 'fileencoding' are ignored. The line index just after the
 * last line gives the total byte-count of the buffer. A final EOL byte is
 * counted if it would be written, see 'eol'.
 *
 * Unlike `line2byte()`, throws error for out-of-bounds indexing. Returns -1
 * for unloaded buffer.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{index}**   Line index
 *
 * Return:
 *     Integer byte offset, or -1 for unloaded buffer.
 */
export function nvim_buf_get_offset(
  denops: Denops,
  buffer: unknown,
  index: unknown,
): Promise<unknown>;
export function nvim_buf_get_offset(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_offset", ...args);
}

/**
 * Gets a range from the buffer.
 *
 * This differs from `nvim_buf_get_lines()` in that it allows retrieving only
 * portions of a line.
 *
 * Indexing is zero-based. Row indices are end-inclusive, and column indices
 * are end-exclusive.
 *
 * Prefer `nvim_buf_get_lines()` when retrieving entire lines.
 *
 * Parameters:
 *     **{buffer}**     Buffer handle, or 0 for current buffer
 *     {start_row}  First line index
 *     {start_col}  Starting column (byte offset) on first line
 *     {end_row}    Last line index, inclusive
 *     {end_col}    Ending column (byte offset) on last line, exclusive
 *     **{opts}**       Optional parameters. Currently unused.
 *
 * Return:
 *     Array of lines, or empty array for unloaded buffer.
 */
export function nvim_buf_get_text(
  denops: Denops,
  buffer: unknown,
  start_row: unknown,
  start_col: unknown,
  end_row: unknown,
  end_col: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_get_text(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_text", ...args);
}

/**
 * Gets a buffer-scoped (b:) variable.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Variable name
 *
 * Return:
 *     Variable value
 */
export function nvim_buf_get_var(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_get_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_var", ...args);
}

/**
 * Checks if a buffer is valid and loaded. See `api-buffer` for more info
 * about unloaded buffers.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     true if the buffer is valid and loaded, false otherwise.
 */
export function nvim_buf_is_loaded(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_buf_is_loaded(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_is_loaded", ...args);
}

/**
 * Checks if a buffer is valid.
 *
 * Note:
 *     Even if a buffer is valid it may have been unloaded. See `api-buffer`
 *     for more info about unloaded buffers.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     true if the buffer is valid, false otherwise.
 */
export function nvim_buf_is_valid(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_buf_is_valid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_is_valid", ...args);
}

/**
 * Returns the number of lines in the given buffer.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * Return:
 *     Line count, or 0 for unloaded buffer. `api-buffer`
 */
export function nvim_buf_line_count(
  denops: Denops,
  buffer: unknown,
): Promise<unknown>;
export function nvim_buf_line_count(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_line_count", ...args);
}

/**
 * Sets a buffer-local `mapping` for the given mode.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *
 * See also:
 *     `nvim_set_keymap()`
 */
export function nvim_buf_set_keymap(
  denops: Denops,
  buffer: unknown,
  mode: unknown,
  lhs: unknown,
  rhs: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_set_keymap(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_keymap", ...args);
}

/**
 * Sets (replaces) a line-range in the buffer.
 *
 * Indexing is zero-based, end-exclusive. Negative indices are interpreted as
 * length+1+index: -1 refers to the index past the end. So to change or
 * delete the last element use start=-2 and end=-1.
 *
 * To insert lines at a given index, set `start` and `end` to the same index.
 * To delete a range of lines, set `replacement` to an empty array.
 *
 * Out-of-bounds indices are clamped to the nearest valid value, unless
 * `strict_indexing` is set.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{buffer}**           Buffer handle, or 0 for current buffer
 *     **{start}**            First line index
 *     **{end}**              Last line index, exclusive
 *     {strict_indexing}  Whether out-of-bounds should be an error.
 *     **{replacement}**      Array of lines to use as replacement
 */
export function nvim_buf_set_lines(
  denops: Denops,
  buffer: unknown,
  start: unknown,
  end: unknown,
  strict_indexing: unknown,
  replacement: unknown,
): Promise<unknown>;
export function nvim_buf_set_lines(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_lines", ...args);
}

/**
 * Sets a named mark in the given buffer, all marks are allowed
 * file/uppercase, visual, last change, etc. See `mark-motions`.
 *
 * Marks are (1,0)-indexed. `api-indexing`
 *
 * Note:
 *     Passing 0 as line deletes the mark
 *
 * Parameters:
 *     **{buffer}**  Buffer to set the mark on
 *     **{name}**    Mark name
 *     **{line}**    Line number
 *     **{col}**     Column/row number
 *     **{opts}**    Optional parameters. Reserved for future use.
 *
 * Return:
 *     true if the mark was set, else false.
 *
 * See also:
 *     `nvim_buf_del_mark()`
 *     `nvim_buf_get_mark()`
 */
export function nvim_buf_set_mark(
  denops: Denops,
  buffer: unknown,
  name: unknown,
  line: unknown,
  col: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_set_mark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_mark", ...args);
}

/**
 * Sets the full file name for a buffer
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Buffer name
 */
export function nvim_buf_set_name(
  denops: Denops,
  buffer: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_buf_set_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_name", ...args);
}

/**
 * Sets (replaces) a range in the buffer
 *
 * This is recommended over `nvim_buf_set_lines()` when only modifying parts
 * of a line, as extmarks will be preserved on non-modified parts of the
 * touched lines.
 *
 * Indexing is zero-based. Row indices are end-inclusive, and column indices
 * are end-exclusive.
 *
 * To insert text at a given `(row, column)` location, use `start_row =
 * end_row = row` and `start_col = end_col = col`. To delete the text in a
 * range, use `replacement = {}`.
 *
 * Prefer `nvim_buf_set_lines()` if you are only adding or deleting entire
 * lines.
 *
 * Parameters:
 *     **{buffer}**       Buffer handle, or 0 for current buffer
 *     {start_row}    First line index
 *     {start_col}    Starting column (byte offset) on first line
 *     {end_row}      Last line index, inclusive
 *     {end_col}      Ending column (byte offset) on last line, exclusive
 *     **{replacement}**  Array of lines to use as replacement
 */
export function nvim_buf_set_text(
  denops: Denops,
  buffer: unknown,
  start_row: unknown,
  start_col: unknown,
  end_row: unknown,
  end_col: unknown,
  replacement: unknown,
): Promise<unknown>;
export function nvim_buf_set_text(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_text", ...args);
}

/**
 * Sets a buffer-scoped (b:) variable
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     **{name}**    Variable name
 *     **{value}**   Variable value
 */
export function nvim_buf_set_var(
  denops: Denops,
  buffer: unknown,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_buf_set_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_var", ...args);
}

/**
 * Adds a highlight to buffer.
 *
 * Useful for plugins that dynamically generate highlights to a buffer (like
 * a semantic highlighter or linter). The function adds a single highlight to
 * a buffer. Unlike `matchaddpos()` highlights follow changes to line
 * numbering (as lines are inserted/removed above the highlighted line), like
 * signs and marks do.
 *
 * Namespaces are used for batch deletion/updating of a set of highlights. To
 * create a namespace, use `nvim_create_namespace()` which returns a
 * namespace id. Pass it in to this function as `ns_id` to add highlights to
 * the namespace. All highlights in the same namespace can then be cleared
 * with single call to `nvim_buf_clear_namespace()`. If the highlight never
 * will be deleted by an API call, pass `ns_id = -1`.
 *
 * As a shorthand, `ns_id = 0` can be used to create a new namespace for the
 * highlight, the allocated id is then returned. If `hl_group` is the empty
 * string no highlight is added, but a new `ns_id` is still returned. This is
 * supported for backwards compatibility, new code should use
 * `nvim_create_namespace()` to create a new empty namespace.
 *
 * Parameters:
 *     **{buffer}**     Buffer handle, or 0 for current buffer
 *     {ns_id}      namespace to use or -1 for ungrouped highlight
 *     {hl_group}   Name of the highlight group to use
 *     **{line}**       Line to highlight (zero-indexed)
 *     {col_start}  Start of (byte-indexed) column range to highlight
 *     {col_end}    End of (byte-indexed) column range to highlight, or -1 to
 *                  highlight to end of line
 *
 * Return:
 *     The ns_id that was used
 */
export function nvim_buf_add_highlight(
  denops: Denops,
  buffer: unknown,
  ns_id: unknown,
  hl_group: unknown,
  line: unknown,
  col_start: unknown,
  col_end: unknown,
): Promise<unknown>;
export function nvim_buf_add_highlight(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_add_highlight", ...args);
}

/**
 * Clears namespaced objects (highlights, extmarks, virtual text) from a
 * region.
 *
 * Lines are 0-indexed. `api-indexing` To clear the namespace in the entire
 * buffer, specify line_start=0 and line_end=-1.
 *
 * Parameters:
 *     **{buffer}**      Buffer handle, or 0 for current buffer
 *     {ns_id}       Namespace to clear, or -1 to clear all namespaces.
 *     {line_start}  Start of range of lines to clear
 *     {line_end}    End of range of lines to clear (exclusive) or -1 to
 *                   clear to end of buffer.
 */
export function nvim_buf_clear_namespace(
  denops: Denops,
  buffer: unknown,
  ns_id: unknown,
  line_start: unknown,
  line_end: unknown,
): Promise<unknown>;
export function nvim_buf_clear_namespace(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_clear_namespace", ...args);
}

/**
 * Removes an extmark.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     {ns_id}   Namespace id from `nvim_create_namespace()`
 *     **{id}**      Extmark id
 *
 * Return:
 *     true if the extmark was found, else false
 */
export function nvim_buf_del_extmark(
  denops: Denops,
  buffer: unknown,
  ns_id: unknown,
  id: unknown,
): Promise<unknown>;
export function nvim_buf_del_extmark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_del_extmark", ...args);
}

/**
 * Gets the position (0-indexed) of an extmark.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     {ns_id}   Namespace id from `nvim_create_namespace()`
 *     **{id}**      Extmark id
 *     **{opts}**    Optional parameters. Keys:
 *               - details: Whether to include the details dict
 *
 * Return:
 *     0-indexed (row, col) tuple or empty list () if extmark id was absent
 */
export function nvim_buf_get_extmark_by_id(
  denops: Denops,
  buffer: unknown,
  ns_id: unknown,
  id: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_get_extmark_by_id(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_extmark_by_id", ...args);
}

/**
 * Gets extmarks in "traversal order" from a `charwise` region defined by
 * buffer positions (inclusive, 0-indexed `api-indexing`).
 *
 * Region can be given as (row,col) tuples, or valid extmark ids (whose
 * positions define the bounds). 0 and -1 are understood as (0,0) and (-1,-1)
 * respectively, thus the following are equivalent:
 *
 *     nvim_buf_get_extmarks(0, my_ns, 0, -1, {})
 *     nvim_buf_get_extmarks(0, my_ns, [0,0], [-1,-1], {})
 *
 * If `end` is less than `start`, traversal works backwards. (Useful with
 * `limit`, to get the first marks prior to a given position.)
 *
 * Example:
 *
 *     local a   = vim.api
 *     local pos = a.nvim_win_get_cursor(0)
 *     local ns  = a.nvim_create_namespace('my-plugin')
 *     -- Create new extmark at line 1, column 1.
 *     local m1  = a.nvim_buf_set_extmark(0, ns, 0, 0, {})
 *     -- Create new extmark at line 3, column 1.
 *     local m2  = a.nvim_buf_set_extmark(0, ns, 0, 2, {})
 *     -- Get extmarks only from line 3.
 *     local ms  = a.nvim_buf_get_extmarks(0, ns, {2,0}, {2,0}, {})
 *     -- Get all marks in this buffer + namespace.
 *     local all = a.nvim_buf_get_extmarks(0, ns, 0, -1, {})
 *     print(vim.inspect(ms))
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     {ns_id}   Namespace id from `nvim_create_namespace()`
 *     **{start}**   Start of range: a 0-indexed (row, col) or valid extmark id
 *               (whose position defines the bound). `api-indexing`
 *     **{end}**     End of range (inclusive): a 0-indexed (row, col) or valid
 *               extmark id (whose position defines the bound).
 *               `api-indexing`
 *     **{opts}**    Optional parameters. Keys:
 *               - limit: Maximum number of marks to return
 *               - details Whether to include the details dict
 *
 * Return:
 *     List of [extmark_id, row, col] tuples in "traversal order".
 */
export function nvim_buf_get_extmarks(
  denops: Denops,
  buffer: unknown,
  ns_id: unknown,
  start: unknown,
  end: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_get_extmarks(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_get_extmarks", ...args);
}

/**
 * Creates or updates an extmark.
 *
 * By default a new extmark is created when no id is passed in, but it is
 * also possible to create a new mark by passing in a previously unused id or
 * move an existing mark by passing in its id. The caller must then keep
 * track of existing and unused ids itself. (Useful over RPC, to avoid
 * waiting for the return value.)
 *
 * Using the optional arguments, it is possible to use this to highlight a
 * range of text, and also to associate virtual text to the mark.
 *
 * Parameters:
 *     **{buffer}**  Buffer handle, or 0 for current buffer
 *     {ns_id}   Namespace id from `nvim_create_namespace()`
 *     **{line}**    Line where to place the mark, 0-based. `api-indexing`
 *     **{col}**     Column where to place the mark, 0-based. `api-indexing`
 *     **{opts}**    Optional parameters.
 *               - id : id of the extmark to edit.
 *               - end_row : ending line of the mark, 0-based inclusive.
 *               - end_col : ending col of the mark, 0-based exclusive.
 *               - hl_group : name of the highlight group used to highlight
 *                 this mark.
 *               - hl_eol : when true, for a multiline highlight covering the
 *                 EOL of a line, continue the highlight for the rest of the
 *                 screen line (just like for diff and cursorline highlight).
 *               - virt_text : virtual text to link to this mark. A list of
 *                 [text, highlight] tuples, each representing a text chunk
 *                 with specified highlight. `highlight` element can either
 *                 be a single highlight group, or an array of multiple
 *                 highlight groups that will be stacked (highest priority
 *                 last). A highlight group can be supplied either as a
 *                 string or as an integer, the latter which can be obtained
 *                 using `nvim_get_hl_id_by_name()`.
 *               - virt_text_pos : position of virtual text. Possible values:
 *                 - "eol": right after eol character (default)
 *                 - "overlay": display over the specified column, without
 *                   shifting the underlying text.
 *                 - "right_align": display right aligned in the window.
 *
 *               - virt_text_win_col : position the virtual text at a fixed
 *                 window column (starting from the first text column)
 *               - virt_text_hide : hide the virtual text when the background
 *                 text is selected or hidden due to horizontal scroll
 *                 'nowrap'
 *               - hl_mode : control how highlights are combined with the
 *                 highlights of the text. Currently only affects virt_text
 *                 highlights, but might affect `hl_group` in later versions.
 *                 - "replace": only show the virt_text color. This is the
 *                   default
 *                 - "combine": combine with background text color
 *                 - "blend": blend with background text color.
 *
 *               - virt_lines : virtual lines to add next to this mark This
 *                 should be an array over lines, where each line in turn is
 *                 an array over [text, highlight] tuples. In general, buffer
 *                 and window options do not affect the display of the text.
 *                 In particular 'wrap' and 'linebreak' options do not take
 *                 effect, so the number of extra screen lines will always
 *                 match the size of the array. However the 'tabstop' buffer
 *                 option is still used for hard tabs. By default lines are
 *                 placed below the buffer line containing the mark.
 *               - virt_lines_above: place virtual lines above instead.
 *               - virt_lines_leftcol: Place extmarks in the leftmost column
 *                 of the window, bypassing sign and number columns.
 *               - ephemeral : for use with `nvim_set_decoration_provider()`
 *                 callbacks. The mark will only be used for the current
 *                 redraw cycle, and not be permantently stored in the
 *                 buffer.
 *               - right_gravity : boolean that indicates the direction the
 *                 extmark will be shifted in when new text is inserted (true
 *                 for right, false for left). defaults to true.
 *               - end_right_gravity : boolean that indicates the direction
 *                 the extmark end position (if it exists) will be shifted in
 *                 when new text is inserted (true for right, false for
 *                 left). Defaults to false.
 *               - priority: a priority value for the highlight group or sign
 *                 attribute. For example treesitter highlighting uses a
 *                 value of 100.
 *               - strict: boolean that indicates extmark should not be
 *                 placed if the line or column value is past the end of the
 *                 buffer or end of the line respectively. Defaults to true.
 *               - sign_text: string of length 1-2 used to display in the
 *                 sign column. Note: ranges are unsupported and decorations
 *                 are only applied to start_row
 *               - sign_hl_group: name of the highlight group used to
 *                 highlight the sign column text. Note: ranges are
 *                 unsupported and decorations are only applied to start_row
 *               - number_hl_group: name of the highlight group used to
 *                 highlight the number column. Note: ranges are unsupported
 *                 and decorations are only applied to start_row
 *               - line_hl_group: name of the highlight group used to
 *                 highlight the whole line. Note: ranges are unsupported and
 *                 decorations are only applied to start_row
 *               - cursorline_hl_group: name of the highlight group used to
 *                 highlight the line when the cursor is on the same line as
 *                 the mark and 'cursorline' is enabled. Note: ranges are
 *                 unsupported and decorations are only applied to start_row
 *               - conceal: string which should be either empty or a single
 *                 character. Enable concealing similar to `:syn-conceal`.
 *                 When a character is supplied it is used as `:syn-cchar`.
 *                 "hl_group" is used as highlight for the cchar if provided,
 *                 otherwise it defaults to `hl-Conceal`.
 *               - spell: boolean indicating that spell checking should be
 *                 performed within this extmark
 *               - ui_watched: boolean that indicates the mark should be
 *                 drawn by a UI. When set, the UI will receive win_extmark
 *                 events. Note: the mark is positioned by virt_text
 *                 attributes. Can be used together with virt_text.
 *
 * Return:
 *     Id of the created/updated extmark
 */
export function nvim_buf_set_extmark(
  denops: Denops,
  buffer: unknown,
  ns_id: unknown,
  line: unknown,
  col: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_buf_set_extmark(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_buf_set_extmark", ...args);
}

/**
 * Creates a new *namespace* or gets an existing one.
 *
 * Namespaces are used for buffer highlights and virtual text, see
 * `nvim_buf_add_highlight()` and `nvim_buf_set_extmark()`.
 *
 * Namespaces can be named or anonymous. If `name` matches an existing
 * namespace, the associated id is returned. If `name` is an empty string a
 * new, anonymous namespace is created.
 *
 * Parameters:
 *     **{name}**  Namespace name or empty string
 *
 * Return:
 *     Namespace id
 */
export function nvim_create_namespace(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_create_namespace(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_create_namespace", ...args);
}

/**
 * Gets existing, non-anonymous namespaces.
 *
 * Return:
 *     dict that maps from names to namespace ids.
 */
export function nvim_get_namespaces(denops: Denops): Promise<unknown>;
export function nvim_get_namespaces(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_namespaces", ...args);
}

/**
 * Set or change decoration provider for a namespace
 *
 * This is a very general purpose interface for having lua callbacks being
 * triggered during the redraw code.
 *
 * The expected usage is to set extmarks for the currently redrawn buffer.
 * `nvim_buf_set_extmark()` can be called to add marks on a per-window or
 * per-lines basis. Use the `ephemeral` key to only use the mark for the
 * current screen redraw (the callback will be called again for the next
 * redraw ).
 *
 * Note: this function should not be called often. Rather, the callbacks
 * themselves can be used to throttle unneeded callbacks. the `on_start`
 * callback can return `false` to disable the provider until the next redraw.
 * Similarly, return `false` in `on_win` will skip the `on_lines` calls for
 * that window (but any extmarks set in `on_win` will still be used). A
 * plugin managing multiple sources of decoration should ideally only set one
 * provider, and merge the sources internally. You can use multiple `ns_id`
 * for the extmarks set/modified inside the callback anyway.
 *
 * Note: doing anything other than setting extmarks is considered
 * experimental. Doing things like changing options are not expliticly
 * forbidden, but is likely to have unexpected consequences (such as 100% CPU
 * consumption). doing `vim.rpcnotify` should be OK, but `vim.rpcrequest` is
 * quite dubious for the moment.
 *
 * Attributes:
 *     `vim.api` only
 *
 * Parameters:
 *     {ns_id}  Namespace id from `nvim_create_namespace()`
 *     **{opts}**   Table of callbacks:
 *              - on_start: called first on each screen redraw ["start",
 *                tick]
 *              - on_buf: called for each buffer being redrawn (before window
 *                callbacks) ["buf", bufnr, tick]
 *              - on_win: called when starting to redraw a specific window.
 *                ["win", winid, bufnr, topline, botline_guess]
 *              - on_line: called for each buffer line being redrawn. (The
 *                interaction with fold lines is subject to change) ["win",
 *                winid, bufnr, row]
 *              - on_end: called at the end of a redraw cycle ["end", tick]
 */
export function nvim_set_decoration_provider(
  denops: Denops,
  ns_id: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_set_decoration_provider(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_set_decoration_provider", ...args);
}

/**
 * Calls a function with window as temporary current window.
 *
 * Attributes:
 *     `vim.api` only
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{fun}**     Function to call inside the window (currently lua callable
 *               only)
 *
 * Return:
 *     Return value of function. NB: will deepcopy lua values currently, use
 *     upvalues to send lua references in and out.
 *
 * See also:
 *     `win_execute()`
 *     `nvim_buf_call()`
 */
export function nvim_win_call(
  denops: Denops,
  window: unknown,
  fun: unknown,
): Promise<unknown>;
export function nvim_win_call(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_call", ...args);
}

/**
 * Closes the window (like `:close` with a `window-ID`).
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{force}**   Behave like `:close!` The last window of a buffer with
 *               unwritten changes can be closed. The buffer will become
 *               hidden, even if 'hidden' is not set.
 */
export function nvim_win_close(
  denops: Denops,
  window: unknown,
  force: unknown,
): Promise<unknown>;
export function nvim_win_close(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_close", ...args);
}

/**
 * Removes a window-scoped (w:) variable
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{name}**    Variable name
 */
export function nvim_win_del_var(
  denops: Denops,
  window: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_win_del_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_del_var", ...args);
}

/**
 * Gets the current buffer in a window
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     Buffer handle
 */
export function nvim_win_get_buf(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_buf(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_buf", ...args);
}

/**
 * Gets the (1,0)-indexed cursor position in the window. `api-indexing`
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     (row, col) tuple
 */
export function nvim_win_get_cursor(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_cursor(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_cursor", ...args);
}

/**
 * Gets the window height
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     Height as a count of rows
 */
export function nvim_win_get_height(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_height(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_height", ...args);
}

/**
 * Gets the window number
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     Window number
 */
export function nvim_win_get_number(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_number(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_number", ...args);
}

/**
 * Gets the window position in display cells. First position is zero.
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     (row, col) tuple with the window position
 */
export function nvim_win_get_position(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_position(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_position", ...args);
}

/**
 * Gets the window tabpage
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     Tabpage that contains the window
 */
export function nvim_win_get_tabpage(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_tabpage(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_tabpage", ...args);
}

/**
 * Gets a window-scoped (w:) variable
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{name}**    Variable name
 *
 * Return:
 *     Variable value
 */
export function nvim_win_get_var(
  denops: Denops,
  window: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_win_get_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_var", ...args);
}

/**
 * Gets the window width
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     Width as a count of columns
 */
export function nvim_win_get_width(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_width(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_width", ...args);
}

/**
 * Closes the window and hide the buffer it contains (like `:hide` with a
 * `window-ID`).
 *
 * Like `:hide` the buffer becomes hidden unless another window is editing
 * it, or 'bufhidden' is `unload`, `delete` or `wipe` as opposed to `:close`
 * or `nvim_win_close()`, which will close the buffer.
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 */
export function nvim_win_hide(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_hide(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_hide", ...args);
}

/**
 * Checks if a window is valid
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     true if the window is valid, false otherwise
 */
export function nvim_win_is_valid(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_is_valid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_is_valid", ...args);
}

/**
 * Sets the current buffer in a window, without side effects
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{buffer}**  Buffer handle
 */
export function nvim_win_set_buf(
  denops: Denops,
  window: unknown,
  buffer: unknown,
): Promise<unknown>;
export function nvim_win_set_buf(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_buf", ...args);
}

/**
 * Sets the (1,0)-indexed cursor position in the window. `api-indexing` This
 * scrolls the window even if it is not the current one.
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{pos}**     (row, col) tuple representing the new position
 */
export function nvim_win_set_cursor(
  denops: Denops,
  window: unknown,
  pos: unknown,
): Promise<unknown>;
export function nvim_win_set_cursor(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_cursor", ...args);
}

/**
 * Sets the window height.
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{height}**  Height as a count of rows
 */
export function nvim_win_set_height(
  denops: Denops,
  window: unknown,
  height: unknown,
): Promise<unknown>;
export function nvim_win_set_height(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_height", ...args);
}

/**
 * Set highlight namespace for a window. This will use highlights defined in
 * this namespace, but fall back to global highlights (ns=0) when missing.
 *
 * This takes precedence over the 'winhighlight' option.
 *
 * Parameters:
 *     {ns_id}  the namespace to use
 */
export function nvim_win_set_hl_ns(
  denops: Denops,
  window: unknown,
  ns_id: unknown,
): Promise<unknown>;
export function nvim_win_set_hl_ns(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_hl_ns", ...args);
}

/**
 * Sets a window-scoped (w:) variable
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{name}**    Variable name
 *     **{value}**   Variable value
 */
export function nvim_win_set_var(
  denops: Denops,
  window: unknown,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_win_set_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_var", ...args);
}

/**
 * Sets the window width. This will only succeed if the screen is split
 * vertically.
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{width}**   Width as a count of columns
 */
export function nvim_win_set_width(
  denops: Denops,
  window: unknown,
  width: unknown,
): Promise<unknown>;
export function nvim_win_set_width(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_width", ...args);
}

/**
 * Open a new window.
 *
 * Currently this is used to open floating and external windows. Floats are
 * windows that are drawn above the split layout, at some anchor position in
 * some other window. Floats can be drawn internally or by external GUI with
 * the `ui-multigrid` extension. External windows are only supported with
 * multigrid GUIs, and are displayed as separate top-level windows.
 *
 * For a general overview of floats, see `api-floatwin`.
 *
 * Exactly one of `external` and `relative` must be specified. The `width`
 * and `height` of the new window must be specified.
 *
 * With relative=editor (row=0,col=0) refers to the top-left corner of the
 * screen-grid and (row=Lines-1,col=Columns-1) refers to the bottom-right
 * corner. Fractional values are allowed, but the builtin implementation
 * (used by non-multigrid UIs) will always round down to nearest integer.
 *
 * Out-of-bounds values, and configurations that make the float not fit
 * inside the main editor, are allowed. The builtin implementation truncates
 * values so floats are fully within the main screen grid. External GUIs
 * could let floats hover outside of the main window like a tooltip, but this
 * should not be used to specify arbitrary WM screen positions.
 *
 * Example (Lua): window-relative float
 *
 *     vim.api.nvim_open_win(0, false,
 *       {relative='win', row=3, col=3, width=12, height=3})
 *
 * Example (Lua): buffer-relative float (travels as buffer is scrolled)
 *
 *     vim.api.nvim_open_win(0, false,
 *       {relative='win', width=12, height=3, bufpos={100,10}})
 *
 * Attributes:
 *     not allowed when `textlock` is active
 *
 * Parameters:
 *     **{buffer}**  Buffer to display, or 0 for current buffer
 *     **{enter}**   Enter the window (make it the current window)
 *     **{config}**  Map defining the window configuration. Keys:
 *               - relative: Sets the window layout to "floating", placed at
 *                 (row,col) coordinates relative to:
 *                 - "editor" The global editor grid
 *                 - "win" Window given by the `win` field, or current
 *                   window.
 *                 - "cursor" Cursor position in current window.
 *
 *               - win: `window-ID` for relative="win".
 *               - anchor: Decides which corner of the float to place at
 *                 (row,col):
 *                 - "NW" northwest (default)
 *                 - "NE" northeast
 *                 - "SW" southwest
 *                 - "SE" southeast
 *
 *               - width: Window width (in character cells). Minimum of 1.
 *               - height: Window height (in character cells). Minimum of 1.
 *               - bufpos: Places float relative to buffer text (only when
 *                 relative="win"). Takes a tuple of zero-indexed [line,
 *                 column]. `row` and `col` if given are applied relative to this position, else they
 *                 default to:
 *                 - `row=1` and `col=0` if `anchor` is "NW" or "NE"
 *                 - `row=0` and `col=0` if `anchor` is "SW" or "SE" (thus
 *                   like a tooltip near the buffer text).
 *
 *               - row: Row position in units of "screen cell height", may be
 *                 fractional.
 *               - col: Column position in units of "screen cell width", may
 *                 be fractional.
 *               - focusable: Enable focus by user actions (wincmds, mouse
 *                 events). Defaults to true. Non-focusable windows can be
 *                 entered by `nvim_set_current_win()`.
 *               - external: GUI should display the window as an external
 *                 top-level window. Currently accepts no other positioning
 *                 configuration together with this.
 *               - zindex: Stacking order. floats with higher `zindex` go on top on floats with lower indices. Must be larger
 *                 than zero. The following screen elements have hard-coded
 *                 z-indices:
 *                 - 100: insert completion popupmenu
 *                 - 200: message scrollback
 *                 - 250: cmdline completion popupmenu (when
 *                   wildoptions+=pum) The default value for floats are 50.
 *                   In general, values below 100 are recommended, unless
 *                   there is a good reason to overshadow builtin elements.
 *
 *               - style: Configure the appearance of the window. Currently
 *                 only takes one non-empty value:
 *                 - "minimal" Nvim will display the window with many UI
 *                   options disabled. This is useful when displaying a
 *                   temporary float where the text should not be edited.
 *                   Disables 'number', 'relativenumber', 'cursorline',
 *                   'cursorcolumn', 'foldcolumn', 'spell' and 'list'
 *                   options. 'signcolumn' is changed to `auto` and
 *                   'colorcolumn' is cleared. The end-of-buffer region is
 *                   hidden by setting `eob` flag of 'fillchars' to a space
 *                   char, and clearing the `hl-EndOfBuffer` region in
 *                   'winhighlight'.
 *
 *               - border: Style of (optional) window border. This can either
 *                 be a string or an array. The string values are
 *                 - "none": No border (default).
 *                 - "single": A single line box.
 *                 - "double": A double line box.
 *                 - "rounded": Like "single", but with rounded corners ("╭"
 *                   etc.).
 *                 - "solid": Adds padding by a single whitespace cell.
 *                 - "shadow": A drop shadow effect by blending with the
 *                   background.
 *                 - If it is an array, it should have a length of eight or
 *                   any divisor of eight. The array will specifify the eight
 *                   chars building up the border in a clockwise fashion
 *                   starting with the top-left corner. As an example, the
 *                   double box style could be specified as [ "╔", "═" ,"╗",
 *                   "║", "╝", "═", "╚", "║" ]. If the number of chars are
 *                   less than eight, they will be repeated. Thus an ASCII
 *                   border could be specified as [ "/", "-", "\\", "|" ], or
 *                   all chars the same as [ "x" ]. An empty string can be
 *                   used to turn off a specific border, for instance, [ "",
 *                   "", "", ">", "", "", "", `"<"` ] will only make vertical
 *                   borders but not horizontal ones. By default,
 *                   `FloatBorder` highlight is used, which links to
 *                   `WinSeparator` when not defined. It could also be
 *                   specified by character: [ {"+", "MyCorner"}, {"x",
 *                   "MyBorder"} ].
 *
 *               - noautocmd: If true then no buffer-related autocommand
 *                 events such as `BufEnter`, `BufLeave` or `BufWinEnter` may
 *                 fire from calling this function.
 *
 * Return:
 *     Window handle, or 0 on error
 */
export function nvim_open_win(
  denops: Denops,
  buffer: unknown,
  enter: unknown,
  config: unknown,
): Promise<unknown>;
export function nvim_open_win(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_open_win", ...args);
}

/**
 * Gets window configuration.
 *
 * The returned value may be given to `nvim_open_win()`.
 *
 * `relative` is empty for normal windows.
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *
 * Return:
 *     Map defining the window configuration, see `nvim_open_win()`
 */
export function nvim_win_get_config(
  denops: Denops,
  window: unknown,
): Promise<unknown>;
export function nvim_win_get_config(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_get_config", ...args);
}

/**
 * Configures window layout. Currently only for floating and external windows
 * (including changing a split window to those layouts).
 *
 * When reconfiguring a floating window, absent option keys will not be
 * changed. `row`/`col` and `relative` must be reconfigured together.
 *
 * Parameters:
 *     **{window}**  Window handle, or 0 for current window
 *     **{config}**  Map defining the window configuration, see `nvim_open_win()`
 *
 * See also:
 *     `nvim_open_win()`
 */
export function nvim_win_set_config(
  denops: Denops,
  window: unknown,
  config: unknown,
): Promise<unknown>;
export function nvim_win_set_config(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_win_set_config", ...args);
}

/**
 * Removes a tab-scoped (t:) variable
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *     **{name}**     Variable name
 */
export function nvim_tabpage_del_var(
  denops: Denops,
  tabpage: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_tabpage_del_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_del_var", ...args);
}

/**
 * Gets the tabpage number
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *
 * Return:
 *     Tabpage number
 */
export function nvim_tabpage_get_number(
  denops: Denops,
  tabpage: unknown,
): Promise<unknown>;
export function nvim_tabpage_get_number(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_get_number", ...args);
}

/**
 * Gets a tab-scoped (t:) variable
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *     **{name}**     Variable name
 *
 * Return:
 *     Variable value
 */
export function nvim_tabpage_get_var(
  denops: Denops,
  tabpage: unknown,
  name: unknown,
): Promise<unknown>;
export function nvim_tabpage_get_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_get_var", ...args);
}

/**
 * Gets the current window in a tabpage
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *
 * Return:
 *     Window handle
 */
export function nvim_tabpage_get_win(
  denops: Denops,
  tabpage: unknown,
): Promise<unknown>;
export function nvim_tabpage_get_win(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_get_win", ...args);
}

/**
 * Checks if a tabpage is valid
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *
 * Return:
 *     true if the tabpage is valid, false otherwise
 */
export function nvim_tabpage_is_valid(
  denops: Denops,
  tabpage: unknown,
): Promise<unknown>;
export function nvim_tabpage_is_valid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_is_valid", ...args);
}

/**
 * Gets the windows in a tabpage
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *
 * Return:
 *     List of windows in `tabpage`
 */
export function nvim_tabpage_list_wins(
  denops: Denops,
  tabpage: unknown,
): Promise<unknown>;
export function nvim_tabpage_list_wins(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_list_wins", ...args);
}

/**
 * Sets a tab-scoped (t:) variable
 *
 * Parameters:
 *     **{tabpage}**  Tabpage handle, or 0 for current tabpage
 *     **{name}**     Variable name
 *     **{value}**    Variable value
 */
export function nvim_tabpage_set_var(
  denops: Denops,
  tabpage: unknown,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_tabpage_set_var(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_tabpage_set_var", ...args);
}

/**
 * Clear all autocommands that match the corresponding **{opts}**. To delete a
 * particular autocmd, see `nvim_del_autocmd()`.
 *
 * Parameters:
 *     **{opts}**  Parameters
 *             - event: (string|table) Examples:
 *               - event: "pat1"
 *               - event: { "pat1" }
 *               - event: { "pat1", "pat2", "pat3" }
 *
 *             - pattern: (string|table)
 *               - pattern or patterns to match exactly.
 *                 - For example, if you have `*.py` as that pattern for the
 *                   autocmd, you must pass `*.py` exactly to clear it.
 *                   `test.py` will not match the pattern.
 *
 *               - defaults to clearing all patterns.
 *               - NOTE: Cannot be used with **{buffer}**
 *
 *             - buffer: (bufnr)
 *               - clear only `autocmd-buflocal` autocommands.
 *               - NOTE: Cannot be used with **{pattern}**
 *
 *             - group: (string|int) The augroup name or id.
 *               - NOTE: If not passed, will only delete autocmds not in any group.
 */
export function nvim_clear_autocmds(
  denops: Denops,
  opts: unknown,
): Promise<unknown>;
export function nvim_clear_autocmds(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_clear_autocmds", ...args);
}

/**
 * Create or get an autocommand group `autocmd-groups`.
 *
 * To get an existing group id, do:
 *
 *     local id = vim.api.nvim_create_augroup("MyGroup", {
 *         clear = false
 *     })
 *
 * Parameters:
 *     **{name}**  String: The name of the group
 *     **{opts}**  Dictionary Parameters
 *             - clear (bool) optional: defaults to true. Clear existing
 *               commands if the group already exists `autocmd-groups`.
 *
 * Return:
 *     Integer id of the created group.
 *
 * See also:
 *     `autocmd-groups`
 */
export function nvim_create_augroup(
  denops: Denops,
  name: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_create_augroup(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_create_augroup", ...args);
}

/**
 * Create an `autocommand`
 *
 * The API allows for two (mutually exclusive) types of actions to be
 * executed when the autocommand triggers: a callback function (Lua or
 * Vimscript), or a command (like regular autocommands).
 *
 * Example using callback:
 *
 *     -- Lua function
 *     local myluafun = function() print("This buffer enters") end
 *
 *     -- Vimscript function name (as a string)
 *     local myvimfun = "g:MyVimFunction"
 *
 *     vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
 *       pattern = {"*.c", "*.h"},
 *       callback = myluafun,  -- Or myvimfun
 *     })
 *
 * Lua functions receive a table with information about the autocmd event as
 * an argument. To use a function which itself accepts another (optional)
 * parameter, wrap the function in a lambda:
 *
 *     -- Lua function with an optional parameter.
 *     -- The autocmd callback would pass a table as argument but this
 *     -- function expects number|nil
 *     local myluafun = function(bufnr) bufnr = bufnr or vim.api.nvim_get_current_buf() end
 *
 *     vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
 *       pattern = {"*.c", "*.h"},
 *       callback = function() myluafun() end,
 *     })
 *
 * Example using command:
 *
 *     vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
 *       pattern = {"*.c", "*.h"},
 *       command = "echo 'Entering a C or C++ file'",
 *     })
 *
 * Example values for pattern:
 *
 *     pattern = "*.py"
 *     pattern = { "*.py", "*.pyi" }
 *
 * Example values for event:
 *
 *     "BufWritePre"
 *     {"CursorHold", "BufWritePre", "BufWritePost"}
 *
 * Parameters:
 *     **{event}**  (string|array) The event or events to register this
 *              autocommand
 *     **{opts}**   Dictionary of autocommand options:
 *              - group (string|integer) optional: the autocommand group name
 *                or id to match against.
 *              - pattern (string|array) optional: pattern or patterns to
 *                match against `autocmd-pattern`.
 *              - buffer (integer) optional: buffer number for buffer local
 *                autocommands `autocmd-buflocal`. Cannot be used with
 *                **{pattern}**.
 *              - desc (string) optional: description of the autocommand.
 *              - callback (function|string) optional: if a string, the name
 *                of a Vimscript function to call when this autocommand is
 *                triggered. Otherwise, a Lua function which is called when
 *                this autocommand is triggered. Cannot be used with
 *                **{command}**. Lua callbacks can return true to delete the
 *                autocommand; in addition, they accept a single table
 *                argument with the following keys:
 *                - id: (number) the autocommand id
 *                - event: (string) the name of the event that triggered the
 *                  autocommand `autocmd-events`
 *                - group: (number|nil) the autocommand group id, if it
 *                  exists
 *                - match: (string) the expanded value of `<amatch>`
 *                - buf: (number) the expanded value of `<abuf>`
 *                - file: (string) the expanded value of `<afile>`
 *                - data: (any) arbitrary data passed to
 *                  `nvim_exec_autocmds()`
 *
 *              - command (string) optional: Vim command to execute on event.
 *                Cannot be used with **{callback}**
 *              - once (boolean) optional: defaults to false. Run the
 *                autocommand only once `autocmd-once`.
 *              - nested (boolean) optional: defaults to false. Run nested
 *                autocommands `autocmd-nested`.
 *
 * Return:
 *     Integer id of the created autocommand.
 *
 * See also:
 *     `autocommand`
 *     `nvim_del_autocmd()`
 */
export function nvim_create_autocmd(
  denops: Denops,
  event: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_create_autocmd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_create_autocmd", ...args);
}

/**
 * Delete an autocommand group by id.
 *
 * To get a group id one can use `nvim_get_autocmds()`.
 *
 * NOTE: behavior differs from `:augroup-delete`. When deleting a group,
 * autocommands contained in this group will also be deleted and cleared.
 * This group will no longer exist.
 *
 * Parameters:
 *     **{id}**  Integer The id of the group.
 *
 * See also:
 *     `nvim_del_augroup_by_name()`
 *     `nvim_create_augroup()`
 */
export function nvim_del_augroup_by_id(
  denops: Denops,
  id: unknown,
): Promise<unknown>;
export function nvim_del_augroup_by_id(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_augroup_by_id", ...args);
}

/**
 * Delete an autocommand group by name.
 *
 * NOTE: behavior differs from `:augroup-delete`. When deleting a group,
 * autocommands contained in this group will also be deleted and cleared.
 * This group will no longer exist.
 *
 * Parameters:
 *     **{name}**  String The name of the group.
 *
 * See also:
 *     `autocmd-groups`
 */
export function nvim_del_augroup_by_name(
  denops: Denops,
  name: unknown,
): Promise<unknown>;
export function nvim_del_augroup_by_name(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_augroup_by_name", ...args);
}

/**
 * Delete an autocommand by id.
 *
 * NOTE: Only autocommands created via the API have an id.
 *
 * Parameters:
 *     **{id}**  Integer The id returned by nvim_create_autocmd
 *
 * See also:
 *     `nvim_create_autocmd()`
 */
export function nvim_del_autocmd(denops: Denops, id: unknown): Promise<unknown>;
export function nvim_del_autocmd(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_del_autocmd", ...args);
}

/**
 * Execute all autocommands for **{event}** that match the corresponding **{opts}**
 * `autocmd-execute`.
 *
 * Parameters:
 *     **{event}**  (String|Array) The event or events to execute
 *     **{opts}**   Dictionary of autocommand options:
 *              - group (string|integer) optional: the autocommand group name
 *                or id to match against. `autocmd-groups`.
 *              - pattern (string|array) optional: defaults to "*"
 *                `autocmd-pattern`. Cannot be used with **{buffer}**.
 *              - buffer (integer) optional: buffer number
 *                `autocmd-buflocal`. Cannot be used with **{pattern}**.
 *              - modeline (bool) optional: defaults to true. Process the
 *                modeline after the autocommands `<nomodeline>`.
 *              - data (any): arbitrary data to send to the autocommand
 *                callback. See `nvim_create_autocmd()` for details.
 *
 * See also:
 *     `:doautocmd`
 */
export function nvim_exec_autocmds(
  denops: Denops,
  event: unknown,
  opts: unknown,
): Promise<unknown>;
export function nvim_exec_autocmds(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_exec_autocmds", ...args);
}

/**
 * Get all autocommands that match the corresponding **{opts}**.
 *
 * These examples will get autocommands matching ALL the given criteria:
 *
 *     -- Matches all criteria
 *     autocommands = vim.api.nvim_get_autocmds({
 *       group = "MyGroup",
 *       event = {"BufEnter", "BufWinEnter"},
 *       pattern = {"*.c", "*.h"}
 *     })
 *
 *     -- All commands from one group
 *     autocommands = vim.api.nvim_get_autocmds({
 *       group = "MyGroup",
 *     })
 *
 * NOTE: When multiple patterns or events are provided, it will find all the
 * autocommands that match any combination of them.
 *
 * Parameters:
 *     **{opts}**  Dictionary with at least one of the following:
 *             - group (string|integer): the autocommand group name or id to
 *               match against.
 *             - event (string|array): event or events to match against
 *               `autocmd-events`.
 *             - pattern (string|array): pattern or patterns to match against
 *               `autocmd-pattern`. Cannot be used with **{buffer}**
 *             - buffer: Buffer number or list of buffer numbers for buffer
 *               local autocommands `autocmd-buflocal`. Cannot be used with
 *               **{pattern}**
 *
 * Return:
 *     Array of autocommands matching the criteria, with each item containing
 *     the following fields:
 *     - id (number): the autocommand id (only when defined with the API).
 *     - group (integer): the autocommand group id.
 *     - group_name (string): the autocommand group name.
 *     - desc (string): the autocommand description.
 *     - event (string): the autocommand event.
 *     - command (string): the autocommand command. Note: this will be empty
 *       if a callback is set.
 *     - callback (function|string|nil): Lua function or name of a Vim script
 *       function which is executed when this autocommand is triggered.
 *     - once (boolean): whether the autocommand is only run once.
 *     - pattern (string): the autocommand pattern. If the autocommand is
 *       buffer local `autocmd-buffer-local`:
 *     - buflocal (boolean): true if the autocommand is buffer local.
 *     - buffer (number): the buffer number.
 */
export function nvim_get_autocmds(
  denops: Denops,
  opts: unknown,
): Promise<unknown>;
export function nvim_get_autocmds(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_get_autocmds", ...args);
}

/**
 * Activates UI events on the channel.
 *
 * Entry point of all UI clients. Allows `--embed` to continue startup.
 * Implies that the client is ready to show the UI. Adds the client to the
 * list of UIs. `nvim_list_uis()`
 *
 * Note:
 *     If multiple UI clients are attached, the global screen dimensions
 *     degrade to the smallest client. E.g. if client A requests 80x40 but
 *     client B requests 200x100, the global screen has size 80x40.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{width}**    Requested screen columns
 *     **{height}**   Requested screen rows
 *     **{options}**  `ui-option` map
 */
export function nvim_ui_attach(
  denops: Denops,
  width: unknown,
  height: unknown,
  options: unknown,
): Promise<unknown>;
export function nvim_ui_attach(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_attach", ...args);
}

/**
 * Deactivates UI events on the channel.
 *
 * Removes the client from the list of UIs. `nvim_list_uis()`
 *
 * Attributes:
 *     `RPC` only
 */
export function nvim_ui_detach(denops: Denops): Promise<unknown>;
export function nvim_ui_detach(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_detach", ...args);
}

/**
 * Tells Nvim the geometry of the popupmenu, to align floating windows with
 * an external popup menu.
 *
 * Note that this method is not to be confused with
 * `nvim_ui_pum_set_height()`, which sets the number of visible items in the
 * popup menu, while this function sets the bounding box of the popup menu,
 * including visual elements such as borders and sliders. Floats need not use
 * the same font size, nor be anchored to exact grid corners, so one can set
 * floating-point numbers to the popup menu geometry.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{width}**   Popupmenu width.
 *     **{height}**  Popupmenu height.
 *     **{row}**     Popupmenu row.
 *     **{col}**     Popupmenu height.
 */
export function nvim_ui_pum_set_bounds(
  denops: Denops,
  width: unknown,
  height: unknown,
  row: unknown,
  col: unknown,
): Promise<unknown>;
export function nvim_ui_pum_set_bounds(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_pum_set_bounds", ...args);
}

/**
 * Tells Nvim the number of elements displaying in the popupmenu, to decide
 * `<PageUp>` and `<PageDown>` movement.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{height}**  Popupmenu height, must be greater than zero.
 */
export function nvim_ui_pum_set_height(
  denops: Denops,
  height: unknown,
): Promise<unknown>;
export function nvim_ui_pum_set_height(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_pum_set_height", ...args);
}

/**
 * TODO: Documentation
 *
 * Attributes:
 *     `RPC` only
 */
export function nvim_ui_set_option(
  denops: Denops,
  name: unknown,
  value: unknown,
): Promise<unknown>;
export function nvim_ui_set_option(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_set_option", ...args);
}

/**
 * TODO: Documentation
 *
 * Attributes:
 *     `RPC` only
 */
export function nvim_ui_try_resize(
  denops: Denops,
  width: unknown,
  height: unknown,
): Promise<unknown>;
export function nvim_ui_try_resize(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_try_resize", ...args);
}

/**
 * Tell Nvim to resize a grid. Triggers a grid_resize event with the
 * requested grid size or the maximum size if it exceeds size limits.
 *
 * On invalid grid handle, fails with error.
 *
 * Attributes:
 *     `RPC` only
 *
 * Parameters:
 *     **{grid}**    The handle of the grid to be changed.
 *     **{width}**   The new requested width.
 *     **{height}**  The new requested height.
 */
export function nvim_ui_try_resize_grid(
  denops: Denops,
  grid: unknown,
  width: unknown,
  height: unknown,
): Promise<unknown>;
export function nvim_ui_try_resize_grid(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("nvim_ui_try_resize_grid", ...args);
}
