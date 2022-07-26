import type {
  Context,
  Denops,
} from "https://deno.land/x/denops_core@v3.1.0/mod.ts";

/**
 * Execute Vim script directly
 */
export async function execute(
  denops: Denops,
  script: string | string[],
  ctx: Context = {},
): Promise<void> {
  if (Array.isArray(script)) {
    ctx = {
      ...ctx,
      __denops_internal_command: script
        .map((x) => x.replace(/^\s+|\s+$/g, ""))
        .filter((x) => !!x),
    };
    await denops.cmd("call execute(l:__denops_internal_command, '')", ctx);
    return;
  }
  script = script.replace(/\r?\n\s*\\/g, "");
  await execute(denops, script.split(/\r?\n/g), ctx);
}
