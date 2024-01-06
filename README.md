# 🐜 denops_std

[![Vim 9.0.2189 or above](https://img.shields.io/badge/Vim-Support%209.0.2189-yellowgreen.svg?logo=vim)](https://github.com/vim/vim/tree/v9.0.2189)
[![Neovim 0.9.4 or above](https://img.shields.io/badge/Neovim-Support%200.9.4-yellowgreen.svg?logo=neovim&logoColor=white)](https://github.com/neovim/neovim/tree/v0.9.4)
[![Test](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml/badge.svg)](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml)
[![codecov](https://codecov.io/github/vim-denops/deno-denops-std/branch/main/graph/badge.svg?token=RKAZMUQ3D9)](https://codecov.io/github/vim-denops/deno-denops-std)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/denops_std/mod.ts)
[![Documentation](https://img.shields.io/badge/denops-Documentation-yellow.svg)](https://vim-denops.github.io/denops-documentation/)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x/denops__std-lightgrey.svg?logo=deno)](https://deno.land/x/denops_std)

Standard module for [denops.vim].

This module is assumed to be used for developing denops plugins. The code is
assumed to be called in a dedicated worker thread.

By using this module, developers can write Vim/Neovim denops plugins like:

```typescript
import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
import * as batch from "https://deno.land/x/denops_std@$MODULE_VERSION/batch/mod.ts";
import * as fn from "https://deno.land/x/denops_std@$MODULE_VERSION/function/mod.ts";
import * as vars from "https://deno.land/x/denops_std@$MODULE_VERSION/variable/mod.ts";
import * as helper from "https://deno.land/x/denops_std@$MODULE_VERSION/helper/mod.ts";

import { assert, is } from "https://deno.land/x/unknownutil@v3.11.0/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async init(): Promise<void> {
      // This is just an example. Developers usually should define commands directly in Vim script.
      await batch.batch(denops, async (denops) => {
        await denops.cmd(
          `command! HelloWorld call denops#notify("${denops.name}", "say", ["World"])`,
        );
        await denops.cmd(
          `command! HelloDenops call denops#notify("${denops.name}", "say", ["Denops"])`,
        );
      });
    },
    async say(where: unknown): Promise<void> {
      assert(where, is.String);
      const [name, progname] = await batch.collect(denops, (denops) => [
        fn.input(denops, "Your name: "),
        vars.v.get(denops, "progname"),
      ]);
      const messages = [
        `Hello ${where}.`,
        `Your name is ${name}.`,
        `This is ${progname}.`,
      ];
      await helper.echo(denops, messages.join("\n"));
    },
  };
}
```

**Note that developers should avoid calling initialization code within the
`main` function**. If necessary, add an `init` API or a similar approach like
above and call it from `plugin/<your_plugin>.vim`.

See [Denops Documentation] or [denops-helloworld.vim] for more details.

[denops.vim]: https://github.com/vim-denops/denops.vim
[Denops Documentation]: https://vim-denops.github.io/denops-documentation
[denops-helloworld.vim]: https://github.com/vim-denops/denops-helloworld.vim

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
