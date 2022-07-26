import type { Denops } from "https://deno.land/x/denops_core@v3.1.0/mod.ts";
import * as autocmd from "../autocmd/mod.ts";
import * as batch from "../batch/mod.ts";
import * as fn from "../function/mod.ts";
import { execute } from "../helper/mod.ts";
import * as unknownutil from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";
import {
  assertFileFormat,
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
    if !exists('b:denops_std_buffer_concrete_cache_${suffix}')
      return
    endif
    call DenopsStdBufferReplace_${suffix}(
          \\ bufnr('%'),
          \\ b:denops_std_buffer_concrete_cache_${suffix}.content,
          \\ v:null,
          \\ v:null,
          \\)
    let &filetype = b:denops_std_buffer_concrete_cache_${suffix}.filetype
  endfunction

  function! DenopsStdBufferConcreteStore_${suffix}() abort
    let b:denops_std_buffer_concrete_cache_${suffix} = {
          \\ 'filetype': &filetype,
          \\ 'content': getline(1, '$'),
          \\}
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

export type OpenOptions = {
  mods?: string;
  cmdarg?: string;
};

/**
 * Open a buffer
 */
export async function open(
  denops: Denops,
  bufname: string,
  options: OpenOptions = {},
): Promise<void> {
  const mods = options.mods ?? "";
  const cmdarg = options.cmdarg ?? "";
  await denops.cmd(`${mods} edit ${cmdarg} \`=bufname\``, { bufname });
}

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

export type ReplaceOptions = {
  fileformat?: string;
  fileencoding?: string;
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

export type AssignOptions = {
  fileformat?: string;
  fileencoding?: string;
  preprocessor?: (repl: string[]) => string[];
};

/**
 * Assign content to the buffer with given format and encoding.
 */
export async function assign(
  denops: Denops,
  bufnr: number,
  content: Uint8Array,
  options: AssignOptions = {},
): Promise<void> {
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
    text = (new TextDecoder(enc)).decode(content);
  } else {
    [enc, text] = tryDecode(content, fileencodings);
  }
  const ff = maybeFileFormat(options.fileformat) ??
    findFileFormat(text, fileformats) ?? fileformat;
  const preprocessor = options.preprocessor ?? ((v: string[]) => v);
  const repl = preprocessor(splitText(text, ff));
  await replace(denops, bufnr, repl, {
    fileformat: ff,
    fileencoding: enc,
  });
}

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
export async function ensure<T = void>(
  denops: Denops,
  bufnr: number,
  executor: () => Promise<T>,
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
export async function modifiable<T = void>(
  denops: Denops,
  bufnr: number,
  executor: () => Promise<T>,
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
