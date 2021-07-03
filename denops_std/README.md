# denops_std

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/denops_std)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/denops_std/mod.ts)
[![Test](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml/badge.svg)](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml)

[Deno][deno] module for [denops.vim][denops.vim]. This module is assumed to be
used in denops plugin and the code is assumed to be called in a worker thread
for a plugin.

By using this module, developers can write Vim/Neovim denops plugins like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { execute } from "https://deno.land/x/denops_std/helper/mod.ts";
import { ensureString } from "https://deno.land/x/unknownutil/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async say(where: unknown): Promise<void> {
      // Ensure that `where` is `string` here
      ensureString(where);
      // Use `call` to call Vim's function
      const name = await denops.call("input", "Your name: ");
      // Use `eval` to evaluate Vim's expression
      const progname = await denops.eval("v:progname");
      // Construct messages
      const messages = [
        `Hello ${where}`,
        `Your name is ${name}`,
        `This is ${progname}`,
      ];
      // Use `cmd` to execute Vim's command
      await denops.cmd(`redraw | echomsg message`, {
        message: messages.join(". "),
      });
    },
  };

  // Use 'execute()' to execute multiline Vim script
  await execute(
    denops,
    `
    command! HelloWorld call denops#notify("${denops.name}", "say", ["World"])
    command! HelloDenops call denops#notify("${denops.name}", "say", ["Denops"])
    `,
  );
}
```

See [denops-helloworld.vim](https://github.com/vim-denops/denops-helloworld.vim)
for more details.

[deno]: https://deno.land/
[denops.vim]: https://github.com/vim-denops/denops.vim
