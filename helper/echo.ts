import type { Denops } from "https://deno.land/x/denops_core@v6.0.2/mod.ts";
import { execute } from "./execute.ts";
import { ulid } from "https://deno.land/std@0.211.0/ulid/mod.ts";

const cacheKey = "denops_std/helper/echo@1";
const cacheKeySilent = "denops_std/helper/echo/silent@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (typeof denops.context[cacheKey] === "string") {
    return denops.context[cacheKey];
  }
  const suffix = ulid();
  denops.context[cacheKey] = suffix;
  const script = `
  let g:loaded_denops_std_helper_echo_${suffix} = 1
  let s:denops_std_helper_echo_timer = 0

  function! DenopsStdHelperEcho_${suffix}(message, highlight) abort
    call timer_stop(s:denops_std_helper_echo_timer)
    let s:denops_std_helper_echo_timer = timer_start(0, { -> s:DenopsStdHelperEchoInternal_${suffix}(a:message, a:highlight) })
  endfunction

  function! s:DenopsStdHelperEchoInternal_${suffix}(message, highlight) abort
    if a:highlight !=# '' | execute 'echohl' a:highlight | endif
    redraw | echo a:message
    if a:highlight !=# '' | echohl None | endif
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

export type Silent = "" | "silent" | "silent!";

/**
 * Get global silent status
 */
export function getSilent(denops: Denops): Silent {
  return (denops.context[cacheKeySilent] ?? "") as Silent;
}

/**
 * Set global silent status
 *
 * By setting the silent state with this function, you can control `silent` and
 * `silent!` messages as follows.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { echo, echoerr, setSilent } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Because silent is "silent!", `echo` and `echoerr` doesn't show messages.
 *   setSilent(denops, "silent!");
 *   await echo(denops, "Hello\nWorld!");
 *   await echoerr(denops, "This is error message");
 *
 *   // Because silent is "silent", `echo` doesn't show messages.
 *   setSilent(denops, "silent");
 *   await echo(denops, "Hello\nWorld!");
 *   await echoerr(denops, "This is error message");
 *
 *   // Because silent is "", both show messages.
 *   setSilent(denops, "");
 *   await echo(denops, "Hello\nWorld!");
 *   await echoerr(denops, "This is error message");
 * }
 * ```
 */
export function setSilent(denops: Denops, silent: Silent): void {
  denops.context[cacheKeySilent] = silent;
}

/**
 * Ensure global silent status during given function
 *
 * To control `silent` and `silent!` messages while executing a particular
 * function, use this function as follows
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { echo, echoerr, ensureSilent } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Because silent is "silent!", `echo` and `echoerr` doesn't show messages.
 *   await ensureSilent(denops, "silent!", async () => {
 *     await echo(denops, "Hello\nWorld!");
 *     await echoerr(denops, "This is error message");
 *   });
 *
 *   // Because silent is "silent", `echo` doesn't show messages.
 *   await ensureSilent(denops, "silent", async () => {
 *     await echo(denops, "Hello\nWorld!");
 *     await echoerr(denops, "This is error message");
 *   });
 *
 *   // Because silent is "", both shows messages.
 *   await ensureSilent(denops, "", async () => {
 *     await echo(denops, "Hello\nWorld!");
 *     await echoerr(denops, "This is error message");
 *   });
 * }
 * ```
 */
export async function ensureSilent<T>(
  denops: Denops,
  silent: Silent,
  executor: () => T,
): Promise<T> {
  const saved = denops.context[cacheKeySilent];
  denops.context[cacheKeySilent] = silent;
  try {
    return await executor();
  } finally {
    denops.context[cacheKeySilent] = saved;
  }
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
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { echo } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await echo(denops, "Hello\nWorld!");
 * }
 * ```
 *
 * ##### WARNING
 *
 * In order to make the behavior of Vim and Neovim consistent,
 * `timer_start()` is used internally not only in Vim but also in
 * Neovim. Note that this means that you cannot control the message
 * by prepending `silent` when calling it from the Vim script.
 * If you want to control the message, use the `setSilent` function
 * to change the silent state to `'silent'` or `'silent!'` in
 * advance, or use the `ensureSilent` function to fix the silent state
 * to `'silent'` or `'silent!'` during execution of any function.
 */
export function echo(
  denops: Denops,
  message: string,
): Promise<void> {
  const silent = getSilent(denops);
  switch (silent) {
    case "silent":
    case "silent!":
      return Promise.resolve();
  }
  if (denops.meta.mode === "test") {
    return Promise.resolve();
  } else {
    return echoInternal(denops, message);
  }
}

/**
 * Echo message as an error message.
 *
 * Note that this function just use ErrorMsg highlight and is not
 * equivalent to `echoerr` command in Vim/Neovim.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { echoerr } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await echoerr(denops, "This is error message");
 * }
 * ```
 *
 * ##### WARNING
 *
 * In order to make the behavior of Vim and Neovim consistent,
 * `timer_start()` is used internally not only in Vim but also in
 * Neovim. Note that this means that you cannot control the message
 * by prepending `silent` when calling it from the Vim script.
 * If you want to control the message, use the `setSilent` function
 * to change the silent state to `'silent!'` in advance, or use the
 * `ensureSilent` function to fix the silent state to `'silent!'`
 * during execution of any function.
 */
export async function echoerr(
  denops: Denops,
  message: string,
): Promise<void> {
  const silent = getSilent(denops);
  switch (silent) {
    case "silent!":
      return Promise.resolve();
  }
  if (denops.meta.mode === "test") {
    return Promise.resolve();
  } else {
    await echoInternal(denops, message, "ErrorMsg");
  }
}

/**
 * Call given function and print a friendly error message (without stack trace) on failure.
 *
 * It's mainly designed for `dispatcher` functions.
 * Print a stack trace when denops is running in debug mode.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { friendlyCall } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   denops.dispatcher = {
 *     say: () => {
 *       return friendlyCall(denops, async () => {
 *         // Do whatever you want.
 *         throw new Error("Some error occurred");
 *       });
 *     },
 *   };
 * }
 * ```
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

async function echoInternal(
  denops: Denops,
  message: string,
  highlight?: string,
): Promise<void> {
  const suffix = await ensurePrerequisites(denops);
  await denops.call(`DenopsStdHelperEcho_${suffix}`, message, highlight ?? "");
}
