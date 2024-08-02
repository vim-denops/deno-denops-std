import type { Denops } from "@denops/core";
import { isArray } from "@core/unknownutil/is/array";
import { isString } from "@core/unknownutil/is/string";
import {
  exprQuote as q,
  type ExprString,
  isExprString,
  useExprString,
} from "./expr_string.ts";
import { batch } from "../batch/mod.ts";
import { register } from "../lambda/mod.ts";
import { feedkeys } from "../function/mod.ts";

export type Keys = {
  keys: string | ExprString;
  remap: boolean;
};

export type KeysSpecifier = Keys | Keys["keys"];

function toArray<T>(x: T | T[]): T[] {
  return isArray(x) ? x : [x];
}

function toKeys(keys: KeysSpecifier): Keys {
  if (isString(keys) || isExprString(keys)) {
    return { keys, remap: false };
  }
  return keys;
}

/**
 * Send key sequences synchronously.
 * `denops#request` blocks, so note that it can only be used within `denops#notify`.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { exprQuote as q } from "jsr:@denops/std/helper/expr_string";
 * import { send } from "jsr:@denops/std/helper/keymap";
 *
 * export const main: Entrypoint = async (denops) => {
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
