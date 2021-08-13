# mapping

`mapping` is a module to provide helper functions to manage mappings.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/mapping/mod.ts)

## Usage

### map

Use `map()` to register a mapping like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as mapping from "https://deno.land/x/denops_std/mapping/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await mapping.map(denops, "<Plug>(test-denops-std)", "Hello");
  await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
    mode: "i",
  });
}
```

### unmap

Use `unmap()` to unregister a mapping like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as mapping from "https://deno.land/x/denops_std/mapping/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await mapping.map(denops, "<Plug>(test-denops-std)", "Hello");
  await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
    mode: "i",
  });

  await mapping.unmap(denops, "<Plug>(test-denops-std)");
  await mapping.unmap(denops, "<Plug>(test-denops-std)", {
    mode: "i",
  });
}
```

### read

Use `read()` to read a mapping like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as mapping from "https://deno.land/x/denops_std/mapping/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await denops.cmd(`map <Plug>(test-denops-std) Hello`);

  console.log(await mapping.read(denops, "<Plug>(test-denops-std)"));
  // {
  //   mode: "",
  //   lhs: "<Plug>(test-denops-std)",
  //   rhs: "Hello",
  //   // ...
  // }
}
```

### list

Use `list()` to list mappings like:

```typescript
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import * as mapping from "https://deno.land/x/denops_std/mapping/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const result = await mapping.list(denops, "<Plug>");
  console.log(result);
  // [
  //   {
  //     mode: "",
  //     lhs: "<Plug>(...)",
  //     // ...
  //   },
  //   // ...
  // ]
}
```
