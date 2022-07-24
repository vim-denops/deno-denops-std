import type { Denops } from "https://deno.land/x/denops_core@v3.0.1/mod.ts";
import * as vars from "../variable/mod.ts";
import { execute } from "./execute.ts";
import { batch } from "../batch/mod.ts";
import { generateUniqueString } from "../util.ts";

const suffix = generateUniqueString();

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (await vars.g.get(denops, `loaded_denops_std_helper_echo_${suffix}`)) {
    return suffix;
  }
  const script = `
  let g:loaded_denops_std_helper_echo_${suffix} = 1

  function! DenopsStdHelperEcho_${suffix}(message) abort
    call timer_start(0, { -> s:DenopsStdHelperEchoInternal_${suffix}(a:message) })
  endfunction

  function! s:DenopsStdHelperEchoInternal_${suffix}(message) abort
    redraw | echo a:message
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

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

/**
 * Call given function and print a friendly error message (without stack trace) on failure.
 *
 * Print a stack trace when denops is running in debug mode.
 */
export async function friendlyCall(
  denops: Denops,
  fn: () => Promise<unknown>,
): Promise<unknown> {
  if (denops.meta.mode === "debug") {
    return await fn();
  }
  try {
    return await fn();
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: Error = e;
      await echoerr(denops, `[${denops.name}]: ${err.message}`);
    } else {
      throw e;
    }
  }
}

async function echoVim(denops: Denops, message: string): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  await denops.call(`DenopsStdHelperEcho_${suffix}`, message);
}
