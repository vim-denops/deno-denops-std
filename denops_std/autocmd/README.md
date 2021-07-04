# autocmd

`autocmd` is a module to provide helper functions to manage `autocmd`.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/autocmd/mod.ts)

## Usage

### group

Use `group()` to create an autocmd group and define/remove autocmds in that
group like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as autocmd from "https://deno.land/x/denops_std/autocmd/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await autocmd.group(denops, "my-autocmd", (helper) => {
    // Define new autocmd for BufEnter
    helper.define("BufEnter", "*", "echo 'BufEnter'");

    // Define new autocmd for BufEnter with '++once'
    helper.define("BufEnter", "*", "echo 'BufEnter'", {
      once: true,
    });

    // Define new autocmd for BufEnter with '++nested'
    helper.define("BufEnter", "*", "echo 'BufEnter'", {
      nested: true,
    });

    // Define multiple autocmds
    helper.define(["BufEnter", "WinEnter"], "*", "echo 'Enter'");

    // Remove BufEnter autocmd
    helper.remove("BufEnter", "*");

    // Remove any autocmd in buffer
    helper.remove("*", "<buffer>");

    // Remove multiple autocmds
    helper.remove(["BufEnter", "WinEnter"], "*");
  });
}
```

This is preferable way to define autocmd while it define autocmds in an isolated
autocmd group and the number of RPC calls is minimized.

### define

Use `define()` to define new autocmd like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as autocmd from "https://deno.land/x/denops_std/autocmd/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Define new autocmd for BufEnter
  await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'");

  // Define new autocmd for BufEnter in 'MyGroup'
  await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'", {
    group: "MyGroup",
  });

  // Define new autocmd for BufEnter with '++once'
  await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'", {
    once: true,
  });

  // Define new autocmd for BufEnter with '++nested'
  await autocmd.define(denops, "BufEnter", "*", "echo 'BufEnter'", {
    nested: true,
  });

  // Define multiple autocmds
  await autocmd.define(denops, ["BufEnter", "WinEnter"], "*", "echo 'Enter'");
}
```

### remove

Use `remove()` to remove an autocmd like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as autocmd from "https://deno.land/x/denops_std/autocmd/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Remove BufEnter autocmd
  await autocmd.remove(denops, "BufEnter", "*");

  // Remove any autocmd in buffer
  await autocmd.remove(denops, "*", "<buffer>");

  // Remove BufEnter autocmd in 'MyGroup'
  await autocmd.remove(denops, "BufEnter", "*", {
    group: "MyGroup",
  });

  // Remove multiple autocmds
  await autocmd.remove(denops, ["BufEnter", "WinEnter"], "*");
}
```

### list

Use `list()` to list defined autocmd like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as autocmd from "https://deno.land/x/denops_std/autocmd/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // List all autocmd
  console.log(await autocmd.list(denops));

  // List all BufEnter autocmd
  console.log(await autocmd.list(denops, "BufEnter"));

  // List all BufEnter autocmd in buffer
  console.log(await autocmd.list(denops, "BufEnter", "<buffer>"));

  // List multiple autocmds
  console.log(await autocmd.list(denops, ["BufEnter", "WinEnter"]));
}
```

### emit

Use `emit()` to emit autocmd in a buffer like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as autocmd from "https://deno.land/x/denops_std/autocmd/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Emit an autocmd in a current buffer
  await autocmd.emit(denops, "BufEnter");

  // Emit multiple autocmds in a current buffer
  await autocmd.emit(denops, ["BufEnter", "WinEnter"]);

  // Emit an autocmd in a buffer 'Hello'
  await autocmd.emit(denops, "BufEnter", "Hello");
}
```

### emitAll

Use `emitAll()` to emit autocmd in all buffers like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as autocmd from "https://deno.land/x/denops_std/autocmd/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Emit an autocmd in all buffers
  await autocmd.emitAll(denops, "BufEnter");

  // Emit multiple autocmds in all buffers
  await autocmd.emitAll(denops, ["BufEnter", "WinEnter"]);

  // Emit an autocmd in all buffers match with 'Hello'
  await autocmd.emitAll(denops, "BufEnter", "Hello");
}
```
