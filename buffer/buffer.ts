import type { Denops } from "https://deno.land/x/denops_core@v6.0.2/mod.ts";
import { maybe } from "https://deno.land/x/unknownutil@v3.11.0/mod.ts";
import * as autocmd from "../autocmd/mod.ts";
import * as batch from "../batch/mod.ts";
import * as fn from "../function/mod.ts";
import * as op from "../option/mod.ts";
import { execute } from "../helper/mod.ts";
import {
  FileFormat,
  findFileFormat,
  isFileFormat,
  splitText,
} from "./fileformat.ts";
import { tryDecode } from "./fileencoding.ts";
import { ulid } from "https://deno.land/std@0.211.0/ulid/mod.ts";

const cacheKey = "denops_std/buffer/buffer.ts@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (typeof denops.context[cacheKey] === "string") {
    return denops.context[cacheKey];
  }
  const suffix = ulid();
  denops.context[cacheKey] = suffix;
  const script = `
  function! DenopsStdBufferOpen_${suffix}(bang, mods, opener, cmdarg, bufname) abort
    execute printf('%s %s%s %s \`=a:bufname\`', a:mods, a:opener, a:bang ? '!' : '', a:cmdarg)
    return {
          \\ 'winid': win_getid(),
          \\ 'bufnr': bufnr(),
          \\ 'winnr': winnr(),
          \\ 'tabpagenr': tabpagenr(),
          \\}
  endfunction
  function! DenopsStdBufferReload_${suffix}(bufnr) abort
    if bufnr('%') is# a:bufnr
      edit
      return
    endif
    let winid_saved = win_getid()
    let winid = bufwinid(a:bufnr)
    if winid is# -1
      augroup denops_std_buffer_reload_${suffix}
        execute printf('autocmd! * <buffer=%d>', a:bufnr)
        execute printf('autocmd BufEnter <buffer=%d> ++nested ++once edit', a:bufnr)
      augroup END
      return
    endif
    keepjumps keepalt call win_gotoid(winid)
    try
      edit
    finally
      keepjumps keepalt call win_gotoid(winid_saved)
    endtry
  endfunction

  function! DenopsStdBufferAppend_${suffix}(bufnr, lnum, repl) abort
    let modified = getbufvar(a:bufnr, '&modified')
    let modifiable = getbufvar(a:bufnr, '&modifiable')
    let foldmethod = getbufvar(a:bufnr, '&foldmethod')
    call setbufvar(a:bufnr, '&modifiable', 1)
    call setbufvar(a:bufnr, '&foldmethod', 'manual')
    call appendbufline(a:bufnr, a:lnum, a:repl)
    call setbufvar(a:bufnr, '&modified', modified)
    call setbufvar(a:bufnr, '&modifiable', modifiable)
    call setbufvar(a:bufnr, '&foldmethod', foldmethod)
  endfunction

  function! DenopsStdBufferReplace_${suffix}(bufnr, repl, fileformat, fileencoding) abort
    let modified = getbufvar(a:bufnr, '&modified')
    let modifiable = getbufvar(a:bufnr, '&modifiable')
    let foldmethod = getbufvar(a:bufnr, '&foldmethod')
    call setbufvar(a:bufnr, '&modifiable', 1)
    call setbufvar(a:bufnr, '&foldmethod', 'manual')
    if a:fileformat isnot# v:null
      call setbufvar(a:bufnr, '&fileformat', a:fileformat)
    endif
    if a:fileencoding isnot# v:null
      call setbufvar(a:bufnr, '&fileencoding', a:fileencoding)
    endif
    call setbufline(a:bufnr, 1, a:repl)
    call deletebufline(a:bufnr, len(a:repl) + 1, '$')
    call setbufvar(a:bufnr, '&modified', modified)
    call setbufvar(a:bufnr, '&modifiable', modifiable)
    call setbufvar(a:bufnr, '&foldmethod', foldmethod)
  endfunction

  function! DenopsStdBufferConcreteRestore_${suffix}() abort
    let cache = get(s:denops_std_buffer_concrete_cache_${suffix}, bufnr(), v:null)
    if cache is# v:null
      return
    endif
    call DenopsStdBufferReplace_${suffix}(
          \\ bufnr('%'),
          \\ cache.content,
          \\ v:null,
          \\ v:null,
          \\)
    let &filetype = cache.filetype
  endfunction

  function! DenopsStdBufferConcreteStore_${suffix}() abort
    let s:denops_std_buffer_concrete_cache_${suffix}[bufnr()] = {
          \\ 'filetype': &filetype,
          \\ 'content': getline(1, '$'),
          \\}
  endfunction

  let s:denops_std_buffer_concrete_cache_${suffix} = {}

  augroup denops_std_buffer_${suffix}
    autocmd!
    autocmd User DenopsStopped,DenopsClosed ++once 
          \\ silent! unlet! s:denops_std_buffer_concrete_cache_${suffix}
    autocmd User DenopsStopped,DenopsClosed ++once 
          \\ augroup denops_std_buffer_reload_${suffix} |
          \\   autocmd! |
          \\ augroup END
    autocmd User DenopsStopped,DenopsClosed ++once 
          \\ augroup denops_std_buffer_concrete_${suffix} |
          \\   autocmd! |
          \\ augroup END
    autocmd User DenopsStopped,DenopsClosed ++once 
          \\ augroup denops_std_buffer_${suffix} |
          \\   autocmd! |
          \\ augroup END
  augroup END
  `;
  await execute(denops, script);
  return suffix;
}

/**
 * Open a `bufname` buffer with given options on the current window
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Open `README.md`
 *   // Same as `:edit README.md`
 *   await open(denops, "README.md");
 *
 *   // Open `LICENSE` with given options
 *   // Same as `:keepjumps keepalt edit ++enc=sjis ++ff=dos LICENSE`
 *   await open(denops, "LICENSE", {
 *     mods: "keepjumps keepalt",
 *     cmdarg: "++enc=sjis ++ff=dos",
 *   });
 * }
 * ```
 *
 * Use `split`, `vsplit`, `tabedit`, `pedit`, or whatever in `opener` attribute of
 * the option like:
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md", { opener: "split" });
 * }
 * ```
 *
 * Use a result value if you need window id, buffer number, window number, or
 * tabpage number like:
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const info = await open(denops, "README.md");
 *   console.log("winid:", info.winid);
 *   console.log("bufnr:", info.bufnr);
 *   console.log("winnr:", info.winnr);
 *   console.log("tabpagenr:", info.tabpagenr);
 * }
 * ```
 */
export async function open(
  denops: Denops,
  bufname: string,
  options: OpenOptions = {},
): Promise<OpenResult> {
  const suffix = await ensurePrerequisites(denops);
  const bang = options.bang ?? false;
  const mods = options.mods ?? "";
  const cmdarg = options.cmdarg ?? "";
  const opener = options.opener ?? "edit";
  return await denops.call(
    `DenopsStdBufferOpen_${suffix}`,
    bang,
    mods,
    opener,
    cmdarg,
    bufname,
  ) as OpenResult;
}

export interface OpenOptions {
  bang?: boolean;
  mods?: string;
  cmdarg?: string;
  opener?: string;
}

export interface OpenResult {
  winid: number;
  bufnr: number;
  winnr: number;
  tabpagenr: number;
}

/**
 * Reload the content of the `bufnr` buffer
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { open, reload } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // ...
 *   // Reload the content of the `bufnr` buffer.
 *   await reload(denops, bufnr);
 * }
 * ```
 *
 * It may temporary change a current buffer or a current window to properly reload
 * the content of the `bufnr` buffer.
 */
export async function reload(denops: Denops, bufnr: number): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  await denops.cmd(
    `call timer_start(0, { -> DenopsStdBufferReload_${suffix}(bufnr) })`,
    { bufnr },
  );
}

/**
 * Decode raw binary content for string array for the `bufnr` buffer
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { decode, open, replace } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   const data = await Deno.readFile("README.md");
 *   const { content } = await decode(denops, bufnr, data);
 *   await replace(denops, bufnr, content);
 * }
 * ```
 *
 * It follows Vim's rule to find a corresponding `fileformat` and `fileencoding` to
 * decode the `data` if the one is not given by `options`.
 */
export async function decode(
  denops: Denops,
  bufnr: number,
  data: Uint8Array,
  options: DecodeOptions = {},
): Promise<DecodeResult> {
  const [fileformat, fileformatsStr, fileencodingsStr] = await batch.collect(
    denops,
    (denops) => [
      op.fileformat.getBuffer(denops, bufnr) as Promise<FileFormat>,
      op.fileformats.get(denops),
      op.fileencodings.get(denops),
    ],
  );
  const fileformats = fileformatsStr.split(",") as FileFormat[];
  const fileencodings = fileencodingsStr.split(",");
  let enc: string;
  let text: string;
  if (options.fileencoding) {
    enc = options.fileencoding;
    text = (new TextDecoder(enc)).decode(data);
  } else {
    [enc, text] = tryDecode(data, fileencodings);
  }
  const ff = maybe(options.fileformat, isFileFormat) ??
    findFileFormat(text, fileformats) ?? fileformat;
  return {
    content: splitText(text, ff),
    fileformat: ff,
    fileencoding: enc,
  };
}

export interface DecodeOptions {
  fileformat?: string;
  fileencoding?: string;
}

export interface DecodeResult {
  content: string[];
  fileformat: FileFormat;
  fileencoding: string;
}

/**
 * Append content under the current cursor position or given lnum of the buffer
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { append, open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // Append the content under the cursor position of the `bufnr` buffer
 *   await append(denops, bufnr, ["Hello", "World"]);
 * }
 * ```
 *
 * It temporary change `modified`, `modifiable`, and `foldmethod` options to append
 * the content of the `buffer` buffer without unmodifiable error or so on.
 */
export async function append(
  denops: Denops,
  bufnr: number,
  repl: string[],
  options: AppendOptions = {},
): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  const lnum = options.lnum ??
    await ensure(denops, bufnr, () => fn.line(denops, "."));
  await denops.call(
    `DenopsStdBufferAppend_${suffix}`,
    bufnr,
    lnum,
    repl,
  );
}

export interface AppendOptions {
  lnum?: number;
}

/**
 * Replace the content of the `bufnr` buffer
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { open, replace } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // Set the content of the `bufnr` buffer
 *   await replace(denops, bufnr, ["Hello", "World"]);
 * }
 * ```
 *
 * It temporary change `modified`, `modifiable`, and `foldmethod` options to
 * replace the content of the `buffer` buffer without unmodifiable error or so on.
 */
export async function replace(
  denops: Denops,
  bufnr: number,
  repl: string[],
  options: ReplaceOptions = {},
): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  await denops.call(
    `DenopsStdBufferReplace_${suffix}`,
    bufnr,
    repl,
    options.fileformat ?? null,
    options.fileencoding ?? null,
  );
}

export interface ReplaceOptions {
  fileformat?: string;
  fileencoding?: string;
}

/**
 * Concrete the buffer.
 *
 * - The `buftype` option become "nofile"
 * - The `swapfile` become disabled
 * - The `modifiable` become disabled
 * - The content of the buffer is restored on `BufReadCmd` synchronously
 *
 * Vim will discard the content of a non-file buffer when `:edit` is invoked. Use
 * this function to concrete the content of such buffer to prevent this discard.
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { concrete, open, replace } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   await fn.setbufvar(denops, bufnr, "&buftype", "nofile");
 *   await replace(denops, bufnr, ["Hello", "World"]);
 *   await concrete(denops, bufnr);
 * }
 * ```
 *
 * Then `:edit` on the buffer won't discard the content.
 */
export async function concrete(
  denops: Denops,
  bufnr: number,
): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  await batch.batch(denops, async (denops) => {
    await autocmd.group(
      denops,
      `denops_std_buffer_concrete_${suffix}`,
      (helper) => {
        const pat = `<buffer=${bufnr}>`;
        helper.remove("*", pat);
        helper.define(
          "BufWriteCmd",
          pat,
          `call DenopsStdBufferConcreteStore_${suffix}()`,
        );
        helper.define(
          "BufReadCmd",
          pat,
          `call DenopsStdBufferConcreteRestore_${suffix}()`,
          {
            nested: true,
          },
        );
      },
    );
    await denops.call(`DenopsStdBufferConcreteStore_${suffix}`);
  });
}

/**
 * Ensure the executor is executed under the specified buffer
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as option from "../option/mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { ensure, open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // ...
 *   await ensure(denops, bufnr, async () => {
 *     await option.buftype.set(denops, "nofile");
 *     await option.swapfile.set(denops, false);
 *     await fn.setline(denops, 1, ["Hello", "World"]);
 *   });
 * }
 * ```
 *
 * Note that it's better to use `setbufvar` or whatever instead. It's mainly
 * designed to define mappings that is not possible from outside of the buffer.
 */
export async function ensure<T>(
  denops: Denops,
  bufnr: number,
  executor: () => T,
): Promise<T> {
  const [bufnrCur, winidCur, winidNext] = await batch.collect(
    denops,
    (denops) => [
      fn.bufnr(denops),
      fn.win_getid(denops),
      fn.bufwinid(denops, bufnr),
    ],
  );
  if (winidCur === winidNext) {
    return executor();
  }
  if (winidNext === -1) {
    await denops.cmd(`keepjumps keepalt ${bufnr}buffer`);
    try {
      return await executor();
    } finally {
      await denops.cmd(`keepjumps keepalt ${bufnrCur}buffer`);
    }
  } else {
    await fn.win_gotoid(denops, winidNext);
    try {
      return await executor();
    } finally {
      await fn.win_gotoid(denops, winidCur);
    }
  }
}

/**
 * Ensure the executor is executed under a modifiable buffer
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import * as fn from "../function/mod.ts";
 * import { modifiable, open } from "../buffer/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await open(denops, "README.md");
 *   const bufnr = (await fn.bufnr(denops)) as number;
 *   // ...
 *   await modifiable(denops, bufnr, async () => {
 *     await fn.setline(denops, 1, ["Hello", "World"]);
 *   });
 * }
 * ```
 */
export async function modifiable<T>(
  denops: Denops,
  bufnr: number,
  executor: () => T,
): Promise<T> {
  const [modified, modifiable, foldmethod] = await batch.collect(
    denops,
    (denops) => [
      op.modified.getBuffer(denops, bufnr),
      op.modifiable.getBuffer(denops, bufnr),
      op.foldmethod.getBuffer(denops, bufnr),
    ],
  );
  await batch.batch(denops, async (denops) => {
    await fn.setbufvar(denops, bufnr, "&modifiable", 1);
    await fn.setbufvar(denops, bufnr, "&foldmethod", "manual");
  });
  try {
    return await executor();
  } finally {
    await batch.batch(denops, async (denops) => {
      await fn.setbufvar(denops, bufnr, "&modified", modified);
      await fn.setbufvar(denops, bufnr, "&modifiable", modifiable);
      await fn.setbufvar(denops, bufnr, "&foldmethod", foldmethod);
    });
  }
}
