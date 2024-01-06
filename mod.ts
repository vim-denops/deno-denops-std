/**
 * Standard module for [denops.vim].
 *
 * This module is assumed to be used for developing denops plugins. The code is
 * assumed to be called in a dedicated worker thread.
 *
 * By using this module, developers can write Vim/Neovim denops plugins like:
 *
 * ```typescript
 * import type { Denops, DenopsOptions } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as batch from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
 * import * as fn from "https://deno.land/x/denops_std@$MODULE_VERSION/function/mod.ts";
 * import * as vars from "https://deno.land/x/denops_std@$MODULE_VERSION/variable/mod.ts";
 * import * as helper from "https://deno.land/x/denops_std@$MODULE_VERSION/helper/mod.ts";
 *
 * import { assert, is } from "https://deno.land/x/unknownutil@v3.11.0/mod.ts";
 *
 * // Use `options?: DenopsOptions` instead to support Denops v5 or earlier.
 * export async function main(denops: Denops, options: DenopsOptions): Promise<void> {
 *   denops.dispatcher = {
 *     async init(): Promise<void> {
 *       // This is just an example. Developers usually should define commands directly in Vim script.
 *       await batch.batch(denops, async (denops) => {
 *         await denops.cmd(
 *           `command! HelloWorld call denops#notify("${denops.name}", "say", ["World"])`,
 *         );
 *         await denops.cmd(
 *           `command! HelloDenops call denops#notify("${denops.name}", "say", ["Denops"])`,
 *         );
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
 * **Note that developers should avoid calling initialization code within the
 * `main` function**. If necessary, add an `init` API or a similar approach like
 * above and call it from `plugin/<your_plugin>.vim`.
 *
 * See [Denops Documentation] or [denops-helloworld.vim] for more details.
 *
 * [denops.vim]: https://github.com/vim-denops/denops.vim
 * [Denops Documentation]: https://vim-denops.github.io/denops-documentation
 * [denops-helloworld.vim]: https://github.com/vim-denops/denops-helloworld.vim
 *
 * @module
 */

// Re-export
export type {
  BatchError,
  Context,
  Denops,
  DenopsOptions,
  Dispatcher,
  Meta,
} from "https://deno.land/x/denops_core@v6.0.4/mod.ts";
