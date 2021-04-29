# 🐜 denops_std

[![deno](https://github.com/vim-denops/denops-std-deno/workflows/deno/badge.svg)](https://github.com/vim-denops/denops-std-deno/actions?query=workflow%3Adeno)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/denops_std/mod.ts)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/denops_std)

[Deno][deno] module for [denops.vim][denops.vim]. This module is assumed to be
used in denops plugin and the code is assumed to be called in a worker thread
for a plugin.

**UNDER DEVELOPMENT**

By using this module, developers can write Vim/Neovim denops plugins like:

```typescript
import { ensureString, main } from "https://deno.land/x/denops_std/mod.ts";

main(async ({ vim }) => {
  vim.register({
    async say(where: unknown): Promise<void> {
      ensureString(where, "where");
      const name = await vim.call("input", "Your name: ");
      const progname = await vim.eval("v:progname");
      const messages = [
        `Hello ${where}`,
        `Your name is ${name}`,
        `This is ${progname}`,
      ];
      await vim.cmd(`redraw | echomsg message`, {
        message: messages.join(". "),
      });
    },
  });

  await vim.execute(`
    command! HelloWorld call denops#notify("${vim.name}", "say", ["World"])
    command! HelloDenops call denops#notify("${vim.name}", "say", ["Denops"])
  `);

  console.log("denops plugin has loaded");
});
```

See [denops-helloworld.vim](https://github.com/denops-helloworld.vim) for more
details.

[deno]: https://deno.land/
[denops.vim]: https://github.com/vim-denops/denops.vim

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
