/**
 * Standard module for [denops.vim](https://github.com/vim-denops/denops.vim).
 *
 * This module is assumed to be used for developing denops plugins. The code
 * is assumed to be called in a dedicated worker thread of each plugins.
 *
 * By using this module, developers can write Vim/Neovim denops plugins like:
 *
 * ```typescript
 * import type { Denops } from "./mod.ts";
 * import * as batch from "./batch/mod.ts";
 * import * as fn from "./function/mod.ts";
 * import * as vars from "./variable/mod.ts";
 * import * as helper from "./helper/mod.ts";
 *
 * import { assert, is } from "https://deno.land/x/unknownutil@v3.10.0/mod.ts#^";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   denops.dispatcher = {
 *     async init(): Promise<void> {
 *       // This is just an example. Developers usually should define commands directly in Vim script.
 *       await batch.batch(denops, async (denops) => {
 *         await denops.cmd(`command! HelloWorld call denops#notify("${denops.name}", "say", ["World"])`);
 *         await denops.cmd(`command! HelloDenops call denops#notify("${denops.name}", "say", ["Denops"])`);
 *       });
 *     },
 *     async say(where: unknown): Promise<void> {
 *       assert(where, is.String);
 *       const [name, progname] = await batch.collect(denops, (denops) => [
 *         fn.input(denops, "Your name: "),
 *         vars.v.get(denops, "progname"),
 *       ]);
 *       const messages = [
 *         `Hello ${where}.`,
 *         `Your name is ${name}.`,
 *         `This is ${progname}.`,
 *       ];
 *       await helper.echo(denops, messages.join("\n"));
 *     },
 *   };
 * }
 * ```
 *
 * Note that developers should avoid calling initialization code within the `main` function.
 * If necessary, add an `init` API or a similar approach like above and call it from `plugin/<your_plugin>.vim`.
 *
 * See [Denops Documentation](https://vim-denops.github.io/denops-documentation/)
 * or [denops-helloworld.vim](https://github.com/vim-denops/denops-helloworld.vim)
 * for more details.
 *
 * @module
 */

// Re-export
export type {
  BatchError,
  Context,
  Denops,
  Dispatcher,
  Meta,
} from "https://deno.land/x/denops_core@v6.0.2/mod.ts";
