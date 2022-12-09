import type { Denops } from "https://deno.land/x/denops_core@v3.2.0/mod.ts";
import * as autocmd from "../autocmd/mod.ts";
import * as batch from "../batch/mod.ts";
import * as fn from "../function/mod.ts";
import { execute } from "../helper/mod.ts";
import * as unknownutil from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";
import {
  assertFileFormat,
  FileFormat,
  findFileFormat,
  isFileFormat,
  maybeFileFormat,
  splitText,
} from "./fileformat.ts";
import { tryDecode } from "./fileencoding.ts";
import { generateUniqueString } from "../util.ts";

const cacheKey = Symbol("denops_std/buffer/buffer.ts");
const suffix = generateUniqueString();

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (cacheKey in denops.context) {
    return suffix;
  }
  denops.context[cacheKey] = true;
  const script = `
  function! DenopsStdBufferOpen_${suffix}(mods, opener, cmdarg, bufname) abort
    execute printf('%s %s %s \`=a:bufname\`', a:mods, a:opener, a:cmdarg)
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
 * Open a buffer
 */
export async function open(
  denops: Denops,
  bufname: string,
  options: OpenOptions = {},
): Promise<OpenResult> {
  const suffix = await ensurePrerequisites(denops);
  const mods = options.mods ?? "";
  const cmdarg = options.cmdarg ?? "";
  const opener = options.opener ?? "edit";
  return await denops.call(
    `DenopsStdBufferOpen_${suffix}`,
    mods,
    opener,
    cmdarg,
    bufname,
  ) as OpenResult;
}

export type OpenOptions = {
  mods?: string;
  cmdarg?: string;
  opener?: string;
};

export type OpenResult = {
  winid: number;
  bufnr: number;
  winnr: number;
  tabpagenr: number;
};

/**
 * Edit a buffer
 */
export async function reload(denops: Denops, bufnr: number): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  await denops.cmd(
    `call timer_start(0, { -> DenopsStdBufferReload_${suffix}(bufnr) })`,
    { bufnr },
  );
}

/**
 * Decode content for the buffer with given format and encoding.
 */
export async function decode(
  denops: Denops,
  bufnr: number,
  data: Uint8Array,
  options: DecodeOptions = {},
): Promise<DecodeResult> {
  const [fileformat, fileformatsStr, fileencodingsStr] = await batch.gather(
    denops,
    async (denops) => {
      await fn.getbufvar(denops, bufnr, "&fileformat");
      await fn.getbufvar(denops, bufnr, "&fileformats");
      await fn.getbufvar(denops, bufnr, "&fileencodings");
    },
  );
  assertFileFormat(fileformat);
  unknownutil.assertString(fileformatsStr);
  unknownutil.assertString(fileencodingsStr);
  const fileformats = fileformatsStr.split(",");
  const fileencodings = fileencodingsStr.split(",");
  unknownutil.assertArray(fileformats, isFileFormat);
  unknownutil.assertArray(fileencodings, unknownutil.isString);
  let enc: string;
  let text: string;
  if (options.fileencoding) {
    enc = options.fileencoding;
    text = (new TextDecoder(enc)).decode(data);
  } else {
    [enc, text] = tryDecode(data, fileencodings);
  }
  const ff = maybeFileFormat(options.fileformat) ??
    findFileFormat(text, fileformats) ?? fileformat;
  return {
    content: splitText(text, ff),
    fileformat: ff,
    fileencoding: enc,
  };
}

export type DecodeOptions = {
  fileformat?: string;
  fileencoding?: string;
};

export type DecodeResult = {
  content: string[];
  fileformat: FileFormat;
  fileencoding: string;
};

/**
 * Append content under the current cursor position or given lnum of the buffer
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

export type AppendOptions = {
  lnum?: number;
};

/**
 * Replace the buffer content
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

export type ReplaceOptions = {
  fileformat?: string;
  fileencoding?: string;
};

/**
 * Assign content to the buffer with given format and encoding.
 *
 * @deprecated Use `decode()` and `replace()` individually instead.
 */
export async function assign(
  denops: Denops,
  bufnr: number,
  data: Uint8Array,
  options: AssignOptions = {},
): Promise<void> {
  const { content, fileformat, fileencoding } = await decode(
    denops,
    bufnr,
    data,
    options,
  );
  const preprocessor = options.preprocessor ?? ((v: string[]) => v);
  const repl = preprocessor(content);
  await replace(denops, bufnr, repl, {
    fileformat,
    fileencoding,
  });
}

export type AssignOptions = DecodeOptions & {
  preprocessor?: (repl: string[]) => string[];
};

/**
 * Concrete the buffer.
 *
 * - The `buftype` option become "nofile"
 * - The `swapfile` become disabled
 * - The `modifiable` become disabled
 * - The content of the buffer is restored on `BufReadCmd` synchronously
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
 */
export async function ensure<T>(
  denops: Denops,
  bufnr: number,
  executor: () => T,
): Promise<T> {
  const [bufnrCur, winidCur, winidNext] = await batch.gather(
    denops,
    async (denops) => {
      await fn.bufnr(denops);
      await fn.win_getid(denops);
      await fn.bufwinid(denops, bufnr);
    },
  );
  unknownutil.assertNumber(bufnrCur);
  unknownutil.assertNumber(winidCur);
  unknownutil.assertNumber(winidNext);
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
 */
export async function modifiable<T>(
  denops: Denops,
  bufnr: number,
  executor: () => T,
): Promise<T> {
  const [modified, modifiable, foldmethod] = await batch.gather(
    denops,
    async (denops) => {
      await fn.getbufvar(denops, bufnr, "&modified");
      await fn.getbufvar(denops, bufnr, "&modifiable");
      await fn.getbufvar(denops, bufnr, "&foldmethod");
    },
  );
  unknownutil.assertNumber(modified);
  unknownutil.assertNumber(modifiable);
  unknownutil.assertString(foldmethod);
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
