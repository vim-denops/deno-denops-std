import { type Denops } from "../mod.ts";
import {
  exprQuote as q,
  ExprString,
  isExprString,
  useExprString,
} from "./expr_string.ts";
import { batch } from "../batch/mod.ts";
import { register } from "../lambda/mod.ts";
import { feedkeys } from "../function/mod.ts";
import is from "https://deno.land/x/unknownutil@v3.18.0/is.ts";

export type Keys = {
  keys: string | ExprString;
  remap: boolean;
};

export type KeysSpecifier = Keys | Keys["keys"];

function toArray<T>(x: T | T[]): T[] {
  return is.Array(x) ? x : [x];
}

function toKeys(keys: KeysSpecifier): Keys {
  if (is.String(keys) || isExprString(keys)) {
    return { keys, remap: false };
  }
  return keys;
}

/**
 * Send key sequences synchronously.
 * `denops#request` blocks, so note that it can only be used within `denops#notify`.
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as fn from "https://deno.land/x/denops_std@$MODULE_VERSION/function/mod.ts";
 * import { exprQuote as q } from "https://deno.land/x/denops_std@$MODULE_VERSION/helper/expr_string.ts";
 * import { send } from "https://deno.land/x/denops_std@$MODULE_VERSION/helper/keymap.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   denops.dispatcher = {
 *     send: async (): Promise<void> => {
 *       // Let's say the current buffer is "foo".
 *       await send(denops, "bar");
 *       // The buffer has been changed!
 *       // "foobar"
 *       console.log(await fn.getline(denops, "."));
 *
 *       // Send special keys.
 *       await send(denops, [
 *         q`${"\\<BS>".repeat(6)}`,
 *         "baz",
 *       ]);
 *       // "baz"
 *       console.log(await fn.getline(denops, "."));
 *
 *       // Send remaped keys.
 *       await send(denops, { keys: q`\<C-l>`, remap: true });
 *       // "bazsend"
 *       console.log(await fn.getline(denops, "."));
 *     },
 *   };
 *   await denops.cmd(`inoremap <C-k> <Cmd>call denops#notify('${denops.name}', 'send', [])<CR>`);
 *   await denops.cmd(`inoremap <C-l> send`);
 * }
 * ```
 */
export async function send(
  denops: Denops,
  keys: KeysSpecifier | KeysSpecifier[],
): Promise<void> {
  const { promise: waiter, resolve } = Promise.withResolvers<void>();
  const id = register(denops, () => resolve(), { once: true });
  await Promise.all([
    useExprString(denops, async (denops) => {
      await batch(denops, async (denops) => {
        const normKeys = toArray(keys).map(toKeys);
        for (const key of normKeys) {
          await feedkeys(denops, key.keys, key.remap ? "m" : "n");
        }
        await feedkeys(
          denops,
          q`\<Cmd>call denops#notify('${denops.name}', '${id}', [])\<CR>`,
          "n",
        );
      });
    }),
    waiter,
  ]);
}
