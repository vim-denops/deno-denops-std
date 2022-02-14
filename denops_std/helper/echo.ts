import { deferred, Denops } from "../deps.ts";
import * as anonymous from "../anonymous/mod.ts";
import { batch } from "../batch/mod.ts";
import { load } from "./load.ts";

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

/**
 * Echo message as an error message.
 *
 * Note that this function just use ErrorMsg highlight and is not equivalent
 * to `echoerr` command in Vim/Neovim.
 */
export async function echoerr(denops: Denops, message: string): Promise<void> {
  await batch(denops, async (denops) => {
    await denops.cmd("echohl ErrorMsg");
    await echo(denops, message);
    await denops.cmd("echohl None");
  });
}

async function echoVim(denops: Denops, message: string): Promise<void> {
  await load(denops, new URL("./echo.vim", import.meta.url));
  const waiter = deferred<void>();
  const id = anonymous.once(denops, () => waiter.resolve())[0];
  await denops.call("DenopsStdHelperEcho", message, denops.name, id);
  await waiter;
}
