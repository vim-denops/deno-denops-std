# bufname

`bufname` is a module to provide manage Vim's buffer name.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/bufname/mod.ts)

## Usage

### format

Use `format()` to format a Vim's buffer name in a safe way from `Bufname`
instance like:

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { format } from "https://deno.land/x/denops_std/bufname/mod.ts";

export async function main(denops: Denops): Promise<void> {
  assertEquals(
    format({ scheme: "denops", path: "/Users/johntitor/.vimrc" }),
    "denops:///Users/johntitor/.vimrc",
  );

  assertEquals(
    format({
      scheme: "denops",
      path: "/Users/johntitor/.vimrc",
      params: {
        foo: "foo",
        bar: ["bar", "bar"],
        hoge: undefined,
      },
    }),
    "denops:///Users/johntitor/.vimrc;foo=foo&bar=bar&bar=bar",
  );

  assertEquals(
    format({
      scheme: "denops",
      path: "/Users/johntitor/.vimrc",
      params: {
        foo: "foo",
        bar: ["bar", "bar"],
        hoge: undefined,
      },
      fragment: "README.md",
    }),
    "denops:///Users/johntitor/.vimrc;foo=foo&bar=bar&bar=bar#README.md",
  );
}
```

Note that unusable characters (`"`, `<`, `>`, `|`, `?`, `*`) are replaced with
percent-encoded characters.

### parse

Use `parse()` to parse Vim's buffer name and get a `Bufname` instance like

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { parse } from "https://deno.land/x/denops_std/bufname/mod.ts";

export async function main(denops: Denops): Promise<void> {
  assertEquals(parse("denops:///Users/johntitor/.vimrc"), {
    scheme: "denops",
    path: "/Users/johntitor/.vimrc",
  });

  assertEquals(
    parse("denops:///Users/johntitor/.vimrc;foo=foo&bar=bar&bar=bar"),
    {
      scheme: "denops",
      path: "/Users/johntitor/.vimrc",
      params: {
        foo: "foo",
        bar: ["bar", "bar"],
      },
    },
  );

  assertEquals(
    parse("denops:///Users/johntitor/.vimrc;foo=foo&bar=bar&bar=bar#README.md"),
    {
      scheme: "denops",
      path: "/Users/johntitor/.vimrc",
      params: {
        foo: "foo",
        bar: ["bar", "bar"],
      },
      fragment: "README.md",
    },
  );
}
```

Note that percent-encoded characters of unusable characters (`"`, `<`, `>`, `|`,
`?`, `*`) are restored.
