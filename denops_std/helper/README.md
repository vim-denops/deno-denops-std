# helper

`helper` is a module to provide helper functions.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/helper/mod.ts)

## Usage

### echo

Use `echo()` to show messages on the cmdline area. It is required while Vim
won't show messages reported from channel commands and it won't pause multi-line
messages reported from asynchronous context (e.g. timer or job). It's same for
`denops.cmd('echo "Hello\nWorld!"')` in Neovim.

Note that there is no similar function for `echomsg` while there is no way to
properly show multi-line messages with `echomsg` from asynchronous context.

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { echo } from "https://deno.land/x/denops_std/helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await echo(denops, "Hello\nWorld!");
}
```

### batch

Use `batch()` to call multiple denops functions sequentially without overhead
and get results like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { batch } from "https://deno.land/x/denops_std/helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const results = await batch(denops, (helper) => {
    helper.call("range", 2);
    helper.cmd("echomsg 'Hello'");
    helper.eval("v:version");
  });

  console.log(results);
  // [
  //   [0, 1],
  //   0,
  //   '800',
  // ]
}
```

The `helper` instance implement `Denops` interface thus users can use it as
`denops` like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as fn from "https://deno.land/x/denops_std/function/mod.ts";
import * as vars from "https://deno.land/x/denops_std/variable/mod.ts";
import { batch } from "https://deno.land/x/denops_std/helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const results = await batch(denops, (helper) => {
    fn.range(helper, 2);
    vars.v.get(helper, "version");
  });

  console.log(results);
  // [
  //   [0, 1],
  //   '800',
  // ]
}
```

When one of function call fails during batch process, `batch` throws
`BatchError` which contains succeeded results as `results` like:

```typescript
import { BatchError, Denops } from "https://deno.land/x/denops_std/mod.ts";
import { batch } from "https://deno.land/x/denops_std/helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  try {
    await batch(denops, (helper) => {
      helper.call("range", 0);
      helper.call("range", 1);
      helper.call("no-such-function");
      helper.call("range", 2);
    });
  } catch (e) {
    // e is an instance of BatchErro
    if (e instanceof BatchError) {
      // Print succeeded results
      console.log("Succeeded:", e.results);
    }
    throw e;
  }
}
```

### execute

Use `execute()` to execute multi-lined Vim script like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { execute } from "https://deno.land/x/denops_std/helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await execute(
    denops,
    `
    command! CommandA echo "A"
    command! CommandB echo "B"
    command! CommandC echo "C"
    `,
  );

  // You can pass context like
  await execute(
    denops,
    `
    command! CommandA echo msg_a
    command! CommandB echo msg_b
    command! CommandC echo l:msg_c
    `,
    {
      msg_a: "Hello A",
      msg_b: "Hello B",
      msg_c: "Hello C",
    },
  );
}
```

### load

Use `load()` to load a local or remote Vim script like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { load } from "https://deno.land/x/denops_std/helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Load '../../foo.vim' from this file
  await load(denops, new URL("../../foo.vim", import.meta.url));

  // Load 'https://example.com/foo.vim'
  await load(denops, new URL("https://example.com/foo.vim"));
}
```
