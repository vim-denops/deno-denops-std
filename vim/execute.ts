import { Context, Denops } from "../deps.ts";

/**
 * Execute Vim script directly
 */
export async function execute(
  denops: Denops,
  command: string | string[],
  context: Context = {},
): Promise<void> {
  if (Array.isArray(command)) {
    context = {
      ...context,
      __denops_internal_command: command
        .map((x) => x.replace(/^\s+|\s+$/g, ""))
        .filter((x) => !!x),
    };
    await denops.cmd("call execute(l:__denops_internal_command, '')", context);
    return;
  }
  command = command.replace(/\r?\n\s*\\/g, "");
  await execute(denops, command.split(/\r?\n/g), context);
}
