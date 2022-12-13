import type {
  Context,
  Denops,
} from "https://deno.land/x/denops_core@v3.3.0/mod.ts";

/**
 * Execute Vim script directly
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
