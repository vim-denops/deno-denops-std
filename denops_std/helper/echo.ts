import { deferred, Denops } from "../deps.ts";
import * as anonymous from "../anonymous/mod.ts";
import { execute } from "./execute.ts";

let defined = false;

/**
 * Echo message as like `echo` on Vim script.
 *
 * Vim (not Neovim) won't show message posted from a channel command
 * and Vim won't pause multiline message posted from timer.
 * This function applied some workaround to show message posted from
 * a channel command, and pause if the message is multiline.
 *
 * Note that it does nothing and return immediately when denops is
 * running as 'test' mode to avoid unwilling test failures.
 */
export function echo(denops: Denops, message: string): Promise<void> {
  if (denops.meta.mode === "test") {
    return Promise.resolve();
  } else if (denops.meta.host === "vim") {
    return echoVim(denops, message);
  } else {
    return denops.cmd("redraw | echo message", { message });
  }
}

async function echoVim(denops: Denops, message: string): Promise<void> {
  const waiter = deferred<void>();
  const id = anonymous.once(denops, () => waiter.resolve())[0];
  await define(denops);
  await denops.cmd(
    `call timer_start(0, { -> s:denops_std_helper_echo(l:message, l:name, l:id) })`,
    {
      message,
      name: denops.name,
      id,
    },
  );
  await waiter;
}

async function define(denops: Denops): Promise<void> {
  if (defined) {
    return;
  }
  await execute(
    denops,
    `
    if exists('s:loaded_denops_std_helper_echo')
      return
    endif
    let s:loaded_denops_std_helper_echo = 1
    function! s:denops_std_helper_echo(message, name, id) abort
      let info = {}
      let info.t = timer_start(0, { -> feedkeys('jk', 'n') })
      let info.name = a:name
      let info.id = a:id
      let info.message = a:message
      let info.updatetime = &updatetime
      let &updatetime = 1
      let s:denops_std_helper_echo_info = info
      augroup denops_std_helper_echo
        autocmd!
        autocmd CursorHold * ++once call s:denops_std_helper_echo_post()
      augroup END
    endfunction
    function! s:denops_std_helper_echo_post() abort
      let info = s:denops_std_helper_echo_info
      silent! unlet! s:denops_std_helper_echo_info
      let &updatetime = info.updatetime
      call timer_stop(info.t)
      redraw | echo info.message
      call denops#request(info.name, info.id, [])
    endfunction
    `,
  );
  defined = true;
}
