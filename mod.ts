/**
 * Standard module for [denops.vim].
 *
 * This module is assumed to be used for developing denops plugins. The code is
 * assumed to be called in a dedicated worker thread.
 *
 * By using this module, developers can write Vim/Neovim denops plugins like:
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as batch from "jsr:@denops/std/batch";
 * import * as fn from "jsr:@denops/std/function";
 * import * as vars from "jsr:@denops/std/variable";
 * import * as helper from "jsr:@denops/std/helper";
 *
 * import { assert, is } from "jsr:@core/unknownutil";
 *
 * export const main: Entrypoint = async (denops) => {
 *   denops.dispatcher = {
 *     async init() {
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
 *     async say(where) {
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
 * };
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
export {
  BatchError,
  type Context,
  type Denops,
  type Dispatcher,
  type Entrypoint,
  type Meta,
} from "@denops/core";
