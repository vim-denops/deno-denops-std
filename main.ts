import { Denops } from "./deps.ts";
import { Vim } from "./vim/mod.ts";

export interface RunnerContext {
  denops: Denops;
  vim: Vim;
}

/**
 * Define a plugin main function which starts denops mainloop for the plugin
 */
export function main(runner: (context: RunnerContext) => Promise<void>) {
  Denops.start(async (denops) => {
    const vim = Vim.get();
    const ctx: RunnerContext = {
      denops,
      vim,
    };
    await runner(ctx);
  });
}
