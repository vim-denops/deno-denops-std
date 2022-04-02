# denops_std

[![Test](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml/badge.svg)](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/denops_std/mod.ts)
[![Documentation](https://img.shields.io/badge/denops-Documentation-yellow.svg)](https://vim-denops.github.io/denops-documentation/)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x/denops__std-lightgrey.svg?logo=deno)](https://deno.land/x/denops_std)

[Deno][deno] module for [denops.vim][denops.vim]. This module is assumed to be
used in denops plugin and the code is assumed to be called in a worker thread
for a plugin.

By using this module, developers can write Vim/Neovim denops plugins like:

```typescript
import { Denops } from "./mod.ts";
import * as fn from "./function/mod.ts";
import * as vars from "./variable/mod.ts";
import * as helper from "./helper/mod.ts";

import { assertString } from "https://deno.land/x/unknownutil/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async say(where: unknown): Promise<void> {
      // Ensure that `where` is `string` here
      assertString(where);
      const name = await fn.input(denops, "Your name: ");
      const progname = await vars.v.get(denops, "progname");
      const messages = [
        `Hello ${where}.`,
        `Your name is ${name}.`,
        `This is ${progname}.`,
      ];
      await helper.echo(denops, messages.join("\n"));
    },
  };

  await helper.execute(
    denops,
    `
    command! HelloWorld call denops#notify("${denops.name}", "say", ["World"])
    command! HelloDenops call denops#notify("${denops.name}", "say", ["Denops"])
    `,
  );
}
```

See [Denops Documentation](https://vim-denops.github.io/denops-documentation/)
or [denops-helloworld.vim](https://github.com/vim-denops/denops-helloworld.vim)
for more details.

[deno]: https://deno.land/
[denops.vim]: https://github.com/vim-denops/denops.vim

## Index

| Name                       | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| [`anonymous`](./anonymous) | A module to provide anonymous function                                 |
| [`argument`](./argument)   | A module to provide helper functions to manage Vim's command arguments |
| [`autocmd`](./autocmd)     | A module to provide helper functions to manage `autocmd`               |
| [`batch`](./batch)         | A module to provide wrapper functions of `denops.batch()`              |
| [`buffer`](./buffer)       | A module to provide helper functions to manage buffers                 |
| [`bufname`](./bufname)     | A module to provide helper functions to manage Vim's buffer name       |
| [`function`](./function)   | A module to provide functions of Vim and Neovim native functions       |
| [`helper`](./helper)       | A module to provide helper functions                                   |
| [`mapping`](./mapping)     | A module to provide helper functions to manage mappings                |
| [`option`](./option)       | A module to provide helper functions to manage options                 |
| [`variable`](./variable)   | A module to provide helper accessor functions to variables             |
