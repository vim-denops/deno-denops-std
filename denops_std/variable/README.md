# variable

`variable` is a module to provide helper accessor functions to variables.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/variable/mod.ts)

## Usage

### globals (alias g)

Use `globals` (or `g`) to access global variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { globals } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set global variable
  await globals.set(denops, "hello", "world");

  // Get global variable
  console.log(await globals.get(denops, "hello"));

  // Remove global variable
  await globals.remove(denops, "hello");
}
```

### buffers (alias b)

Use `buffers` (or `b`) to access buffer variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { buffers } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set buffer variable
  await buffers.set(denops, "hello", "world");

  // Get buffer variable
  console.log(await buffers.get(denops, "hello"));

  // Remove buffer variable
  await buffers.remove(denops, "hello");
}
```

### windows (alias w)

Use `windows` (or `w`) to access window variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { windows } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set window variable
  await windows.set(denops, "hello", "world");

  // Get window variable
  console.log(await windows.get(denops, "hello"));

  // Remove window variable
  await windows.remove(denops, "hello");
}
```

### tabpages (alias t)

Use `tabpages` (or `t`) to access tabpage variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { tabpages } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set tabpage variable
  await tabpages.set(denops, "hello", "world");

  // Get tabpage variable
  console.log(await tabpages.get(denops, "hello"));

  // Remove tabpage variable
  await tabpages.remove(denops, "hello");
}
```

### vim (alias v)

Use `vim` (or `v`) to access Vim variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { vim } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set vim variable
  await vim.set(denops, "version", "world");

  // Get vim variable
  console.log(await vim.get(denops, "version"));
}
```

### environment (alias e)

Use `environment` (or `e`) to access environment variables like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { environment } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set environment variable
  await environment.set(denops, "DENOPS_HELLO", "world");

  // Get environment variable
  console.log(await environment.get(denops, "DENOPS_HELLO"));

  // Remove environment variable
  await environment.remove(denops, "DENOPS_HELLO");
}
```

### register (alias r)

Use `register` (or `r`) to access register like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { register } from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set register
  await register.set(denops, "a", "world");

  // Get register
  console.log(await register.get(denops, "a"));
}
```

Note that `register.get()` returns `defaultValue` when the register is falsy.

### options, localOptions, and globalOptions (alias o, lo, and go)

Use `options` (or `o`), `localOptions` (or `lo`), or `globalOptions` (or `go`)
to access options like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import {
  globalOptions,
  localOptions,
  options,
} from "https://deno.land/x/denops_std/variable/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Set option
  await options.set(denops, "filetype", "world");
  await localOptions.set(denops, "filetype", "world");
  await globalOptions.set(denops, "filetype", "world");

  // Get option
  console.log(await options.get(denops, "filetype"));
  console.log(await localOptions.get(denops, "filetype"));
  console.log(await globalOption.get(denops, "filetype"));

  // Reset option
  await options.remove(denops, "filetype");
  await localOptions.remove(denops, "filetype");
  await globalOption.remove(denops, "filetype");
}
```

Note that `options.get()`, `localOptions.get()`, or `globalOption.get()` returns
`defaultValue` when the option is falsy.
