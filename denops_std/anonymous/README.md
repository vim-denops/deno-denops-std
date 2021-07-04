# anonymous

`anonymous` is a module to provide anonymous function which is callable from
outside of the plugin (Vim or other plugins.)

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/anonymous/mod.ts)

## Usage

### add

Use `add()` to add new anonymous functions and use return value as unique IDs to
call added functions later like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as anonymous from "https://deno.land/x/denops_std/anonymous/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Add anonymous functions
  const ids = anonymous.add(
    denops,
    () => {
      // Do what ever you want.
    },
    () => {
      // Do what ever you want.
    },
    // You can add as many callbacks as you want...
  );

  // Use ids to dispatch added functions from Deno
  await denops.dispatch(denops.name, ids[0]);
  await denops.dispatch(denops.name, ids[1]);

  // Or from Vim
  await denops.cmd("call denops#notify(name, id, [])", {
    name: denops.name,
    id: ids[1],
  });
}
```

### once

If you need one-time anonymous function, use `once()` instead like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as anonymous from "https://deno.land/x/denops_std/anonymous/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Add anonymous functions
  const ids = anonymous.once(
    denops,
    () => {
      // Do what ever you want.
    },
    () => {
      // Do what ever you want.
    },
    // You can add as many callbacks as you want...
  );

  // First calls complete normally
  await denops.dispatch(denops.name, ids[0]);
  await denops.dispatch(denops.name, ids[1]);

  // But second call would throw errors
  await denops.dispatch(denops.name, ids[0]);
}
```

### remove

When you need to remove callback, use `remove()` like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as anonymous from "https://deno.land/x/denops_std/anonymous/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Add anonymous functions
  const ids = anonymous.add(
    denops,
    () => {
      // Do what ever you want.
    },
    () => {
      // Do what ever you want.
    },
    // You can add as many callbacks as you want...
  );

  // Remove ids[1]
  anonymous.remove(denops, ids[1]);

  // Call of ids[0] complete normally
  await denops.dispatch(denops.name, ids[0]);

  // But ids[1] is already removed
  await denops.dispatch(denops.name, ids[1]);
}
```
