# batch

`batch` is a module to provide `denops.batch()` helper functions.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/batch/mod.ts)

## Usage

### batch

Use `batch()` to call multiple denops functions sequentially without overhead
like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { batch } from "https://deno.land/x/denops_std/batch/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.cmd("setlocal noswap");
    await denops.cmd("setlocal nobackup");
  });
}
```

The function can be nested thus users can use functions which may internally use
`batch()` like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { batch } from "https://deno.land/x/denops_std/batch/mod.ts";

async function replace(denops: Denops, content: string): Promise<void> {
  await batch(denops, (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.cmd("setlocal foldmethod=manual");
    await denops.call("setline", 1, content.split(/\r?\n/));
    await denops.cmd("setlocal nomodifiable");
    await denops.cmd("setlocal nomodified");
  });
}

export async function main(denops: Denops): Promise<void> {
  await batch(denops, async (denops) => {
    await denops.cmd("edit Hello");
    await replace(denops, "Hello Darkness My Old Friend");
  });
}
```

Note that `denops.call()`, `denops.batch()`, or `denops.eval()` always return
falsy value in `batch()`, indicating that you **cannot** write code like below:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { batch } from "https://deno.land/x/denops_std/batch/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await batch(denops, async (denops) => {
    // !!! DON'T DO THIS !!!
    if (await denops.eval("&verbose")) {
      await denops.cmd("echomsg 'VERBOSE'");
    }
    await denops.cmd("echomsg 'Hello world'");
  });
}
```

### gather

Use `gather()` to call multiple denops functions sequentially without overhead
and return values like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { gather } from "https://deno.land/x/denops_std/batch/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const results = await gather(denops, async (denops) => {
    await denops.eval("&modifiable");
    await denops.eval("&modified");
    await denops.eval("&filetype");
  });
  // results contains the value of modifiable, modified, and filetype
}
```

Not like `batch`, the function can NOT be nested.

Note that `denops.call()`, `denops.batch()`, or `denops.eval()` always return
falsy value in `gather()`, indicating that you **cannot** write code like below:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { batch } from "https://deno.land/x/denops_std/batch/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const results = await gather(denops, async (denops) => {
    // !!! DON'T DO THIS !!!
    if (await denops.call("has", "nvim")) {
      await denops.call("api_info").version;
    } else {
      await denops.eval("v:version");
    }
  });
}
```
