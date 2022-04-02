# buffer

`buffer` is a module to provide Vim buffer utility functions.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/buffer/mod.ts)

## Usage

### open

Use `open()` to open a `bufname` buffer with given options on the current window
like:

```typescript
import { Denops } from "../mod.ts";
import { open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Open `README.md`
  // Same as `:edit README.md`
  await open(denops, "README.md");

  // Open `LICENSE` with given options
  // Same as `:keepjumps keepalt edit ++enc=sjis ++ff=dos LICENSE`
  await open(denops, "LICENSE", {
    mods: "keepjumps keepalt",
    cmdarg: "++enc=sjis ++ff=dos",
  });
}
```

Use `split`, `vsplit`, `tabedit`, `pedit`, or whatever before if you'd like to
open a buffer with non current window like:

```typescript
import { Denops } from "../mod.ts";
import { batch } from "../batch/mod.ts";
import { open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await batch(denops, async (denops) => {
    await denops.cmd("split");
    await open(denops, "README.md");
  });
}
```

See [`batch`](../batch/README.md) documentation for `batch()` part.

### reload

Use `reload()` to reload the content of the `bufnr` buffer like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { open, reload } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  // ...
  // Reload the content of the `bufnr` buffer.
  await reload(denops, bufnr);
}
```

It may temporary change a current buffer or a current window to properly reload
the content of the `bufnr` buffer.

### replace

Use `replace()` to replace the content of the `bufnr` buffer like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { open, replace } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  // Set the content of the `bufnr` buffer
  await replace(denops, bufnr, ["Hello", "World"]);
}
```

It temporary change `modified`, `modifiable`, and `foldmethod` options to
replace the content of the `buffer` buffer without unmodifiable error or so on.

### assign

Use `assign()` to assign raw binary content into the `bufnr` buffer like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { assign, open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  const content = await Deno.readFile("README.md");
  await assign(denops, bufnr, content);
}
```

It follows Vim's rule to find a corresponding `fileformat` and `fileencoding` to
decode the `content` if the one is not given by `options`.

Use `preprocessor` to modify the content prior to apply like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { assign, open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  const content = await Deno.readFile("README.md");
  // A preprocessor that replace all non words to "-"
  const preprocessor = (repl: string[]): string[] => {
    return repl.map((line) => line.replace(/\W/g, "-"));
  };
  await assign(denops, bufnr, content, { preprocessor });
}
```

### concrete

Vim will discard the content of a non-file buffer when `:edit` is invoked. Use
`concrete()` to concrete the content of such buffer to prevent this discard
like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { concrete, open, replace } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  await fn.setbufvar(denops, bufnr, "&buftype", "nofile");
  await replace(denops, bufnr, ["Hello", "World"]);
  await concrete(denops, bufnr);
}
```

Then `:edit` on the buffer won't discard the content.

### ensure

Use `ensure()` to ensure that the code is called on the `bufnr` buffer like:

```typescript
import { Denops } from "../mod.ts";
import * as option from "../option/mod.ts";
import * as fn from "../function/mod.ts";
import { ensure, open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  // ...
  await ensure(denops, bufnr, async () => {
    await option.buftype.set(denops, "nofile");
    await option.swapfile.set(denops, false);
    await fn.setline(denops, 1, ["Hello", "World"]);
  });
}
```

Note that it's better to use `setbufvar` or whatever instead. It's mainly
designed to define mappings that is not possible from outside of the buffer.

### modifiable

Use `modifiable()` to ensure that the `bufnr` buffer is modifiable like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { modifiable, open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  // ...
  await modifiable(denops, bufnr, async () => {
    await fn.setline(denops, 1, ["Hello", "World"]);
  });
}
```

### decorate

Use `decorate()` to decorate the `bufnr` buffer with `decorations` like:

```typescript
import { Denops } from "../mod.ts";
import * as fn from "../function/mod.ts";
import { decorate, open } from "../buffer/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await open(denops, "README.md");
  const bufnr = await fn.bufnr(denops) as number;
  // ...
  await decorate(denops, bufnr, [
    {
      line: 1,
      column: 1,
      length: 10,
      highlight: "Special",
    },
    {
      line: 2,
      column: 2,
      length: 3,
      highlight: "Comment",
    },
  ]);
}
```

It uses `prop_add` in Vim and `nvim_buf_add_highlight` in Neovim to decorate the
buffer.
