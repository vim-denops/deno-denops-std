# 🐜 @denops/std

[![JSR](https://jsr.io/badges/@denops/std)](https://jsr.io/@denops/std)
[![Test](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml/badge.svg)](https://github.com/vim-denops/deno-denops-std/actions/workflows/test.yml)
[![codecov](https://codecov.io/github/vim-denops/deno-denops-std/branch/main/graph/badge.svg?token=RKAZMUQ3D9)](https://codecov.io/github/vim-denops/deno-denops-std)

[![Deno 1.45.0 or above](https://img.shields.io/badge/Deno-Support%201.45.0-yellowgreen.svg?logo=deno)](https://github.com/denoland/deno/tree/v1.45.0)
[![Vim 9.1.0448 or above](https://img.shields.io/badge/Vim-Support%209.1.0448-yellowgreen.svg?logo=vim)](https://github.com/vim/vim/tree/v9.1.0448)
[![Neovim 0.10.0 or above](https://img.shields.io/badge/Neovim-Support%200.10.0-yellowgreen.svg?logo=neovim&logoColor=white)](https://github.com/neovim/neovim/tree/v0.10.0)

Standard module for [denops.vim].

This module is assumed to be used for developing denops plugins. The code is
assumed to be called in a dedicated worker thread.

By using this module, developers can write Vim/Neovim denops plugins like:

```typescript
import type { Denops } from "jsr:@denops/std";
import * as batch from "jsr:@denops/std/batch";
import * as fn from "jsr:@denops/std/function";
import * as vars from "jsr:@denops/std/variable";
import * as helper from "jsr:@denops/std/helper";

import { assert, is } from "jsr:@core/unknownutil";

export function main(denops: Denops): void {
  denops.dispatcher = {
    async init() {
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
    async say(where) {
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
