/**
 * Standard module for [denops.vim](https://github.com/vim-denops/denops.vim).
 *
 * This module is assumed to be used for developing denops plugins. The code
 * is assumed to be called in a dedicated worker thread of each plugins.
 *
 * By using this module, developers can write Vim/Neovim denops plugins like:
 *
 * ```typescript
 * import { Denops } from "./mod.ts";
 * import * as fn from "./function/mod.ts";
 * import * as vars from "./variable/mod.ts";
 * import * as helper from "./helper/mod.ts";
 *
 * import { assert, is } from "https://deno.land/x/unknownutil@v3.0.0/mod.ts#^";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   denops.dispatcher = {
 *     async say(where: unknown): Promise<void> {
 *       assert(where, is.String);
 *
 *       const name = await fn.input(denops, "Your name: ");
 *       const progname = await vars.v.get(denops, "progname");
 *       const messages = [
 *         `Hello ${where}.`,
 *         `Your name is ${name}.`,
 *         `This is ${progname}.`,
 *       ];
 *       await helper.echo(denops, messages.join("\n"));
 *     },
 *   };
 *
 *   await helper.execute(
 *     denops,
 *     `
 *     command! HelloWorld call denops#notify("${denops.name}", "say", ["World"])
 *     command! HelloDenops call denops#notify("${denops.name}", "say", ["Denops"])
 *     `,
 *   );
 * }
 * ```
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
} from "https://deno.land/x/denops_core@v5.0.0/mod.ts";
