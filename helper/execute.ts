import type { Context, Denops } from "../mod.ts";

/**
 * Execute multi-lined Vim script directly
 *
 * ```typescript
 * import type { Entrypoint } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import { execute } from "https://deno.land/x/denops_std@$MODULE_VERSION/helper/execute.ts";
 *
 * export const main: Entrypoint = async (denops) => {
 *   await execute(
 *     denops,
 *     `
 *     command! CommandA echo "A"
 *     command! CommandB echo "B"
 *     command! CommandC echo "C"
 *     `,
 *   );
 *
 *   // You can pass context like
 *   await execute(
 *     denops,
 *     `
 *     command! CommandA echo msg_a
 *     command! CommandB echo msg_b
 *     command! CommandC echo l:msg_c
 *     `,
 *     {
 *       msg_a: "Hello A",
 *       msg_b: "Hello B",
 *       msg_c: "Hello C",
 *     },
 *   );
 * }
 * ```
 */
export function execute(
  denops: Denops,
  script: string | string[],
  ctx: Context = {},
): Promise<void> {
  if (!Array.isArray(script)) {
    // join line-continuation
    script = script.replace(/\r?\n\s*\\/g, "");
    // convert to array
    script = script.split(/\r?\n/g);
  }
  script = script.map((x) => x.trimStart()).filter((x) => !!x);
  ctx = {
    ...ctx,
    __denops_internal_command: script,
  };
  return denops.cmd("call execute(l:__denops_internal_command, '')", ctx);
}
