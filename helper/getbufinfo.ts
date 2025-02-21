import type { Denops } from "../mod.ts";
import type { BufInfo } from "../function/types.ts";
import type { BufNameArg, GetBufInfoDictArg } from "../function/buffer.ts";

/**
 * Get buffer information.
 *
 * This is same as getbufinfo() function in Vim script, but filters the
 * 'variables' entry in order to avoid errors when returning values from Vim
 * script world into Deno world due to appearances of Funcrefs in buffer-local
 * variables.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import { getbufinfo } from "jsr:@denops/std/helper/getbufinfo";
 *
 * export const main: Entrypoint = async (denops) => {
 *   console.log(
 *     await getbufinfo(denops, await denops.call("bufnr") as number),
 *   );
 * }
 * ```
 */
export function getbufinfo(
  denops: Denops,
  buf?: BufNameArg,
): Promise<BufInfo[]>;
export function getbufinfo(
  denops: Denops,
  dict?: GetBufInfoDictArg,
): Promise<BufInfo[]>;
export async function getbufinfo(
  denops: Denops,
  ...args: unknown[]
): Promise<BufInfo[]> {
  const bufinfos = await denops.eval(
    "map(call('getbufinfo', l:args), {_, v -> filter(v, {k -> k !=# 'variables'})})",
    {
      args: args,
    },
  ) as Record<
    keyof BufInfo,
    unknown
  >[];
  return bufinfos.map((bufinfo) => ({
    ...bufinfo,
    changed: !!bufinfo.changed,
    hidden: !!bufinfo.hidden,
    listed: !!bufinfo.listed,
    loaded: !!bufinfo.loaded,
  } as unknown as BufInfo));
}
