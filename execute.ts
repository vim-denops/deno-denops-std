import { Denops } from "./deps.ts";

/**
 * Execute Vim script directly
 */
export async function execute(
  denops: Denops,
  command: string | string[],
): Promise<void> {
  if (Array.isArray(command)) {
    await denops.cmd("call execute(l:command, '')", {
      command: command
        .map((x) => x.replace(/^\s+|\s+$/g, ""))
        .filter((x) => !!x),
    });
    return;
  }
  command = command.replace(/\r?\n\s*\\/g, "");
  await execute(denops, command.split(/\r?\n/g));
}
