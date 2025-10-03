import type { Denops } from "@denops/core";
import { isArray } from "@core/unknownutil/is/array";
import { isString } from "@core/unknownutil/is/string";
import { batch } from "../batch/batch.ts";
import { isRawString, type RawString, rawString } from "../eval/string.ts";
import { useEval } from "../eval/use_eval.ts";
import { feedkeys } from "../function/mod.ts";
import { add } from "../lambda/mod.ts";

export type Keys = {
  keys: string | RawString;
  remap: boolean;
};

export type KeysSpecifier = Keys | Keys["keys"];

function toArray<T>(x: T | T[]): T[] {
  return isArray(x) ? x : [x];
}

function toKeys(keys: KeysSpecifier): Keys {
  if (isString(keys) || isRawString(keys)) {
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
 * import { rawString } from "jsr:@denops/std/eval";
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
 *         rawString`${"\\<BS>".repeat(6)}`,
 *         "baz",
 *       ]);
 *       // "baz"
 *       console.log(await fn.getline(denops, "."));
 *
 *       // Send remapped keys.
 *       await send(denops, { keys: rawString`\<C-l>`, remap: true });
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
  using lo = add(denops, () => resolve());
  await Promise.all([
    useEval(denops, async (denops) => {
      await batch(denops, async (denops) => {
        const normKeys = toArray(keys).map(toKeys);
        for (const key of normKeys) {
          await feedkeys(denops, key.keys, key.remap ? "m" : "n");
        }
        await feedkeys(denops, rawString`\<Cmd>call ${lo.notify(1)}\<CR>`, "n");
      });
    }),
    waiter,
  ]);
}
