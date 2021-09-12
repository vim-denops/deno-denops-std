# bufname

`bufname` is a module to provide functions to handle Vim's buffer name.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/bufname/mod.ts)

The format of the buffer name assumed in this module is like

```text
{scheme}://{expr}[;{params}][#{fragment}]
```

Where

- `{scheme}` is used to distinguish a buffer kind. It contains only alphabet
  characters.
- `{expr}` is used to identify a buffer itself. _Unusable characters_,
  semicolons (;), and sharps (#) are replaced with percent-encoded characters.
- `{params}` (Optional) is used to add meta information to the buffer name like
  query parameters of URL. _Unusable characters_ and sharps (#) are replaced
  with percent-encoded characters.
- `{fragment}` (Optional) is used to add a suffix to the buffer name for file
  type detection or so on. _Unusable characters_ are replaced with
  percent-encoded characters.
- _Unusable characters_ are `"`, `<`, `>`, `|`, `?`, or `*`. It is caused by the
  limitations of Vim on Windows.

For example,

```text
denops:///Users/John Titor/test.git
└─┬──┘   └───────────┬────────────┘
  scheme             expr

denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2
└─┬──┘   └───────────┬────────────┘ └───────────┬───────────┘
  scheme             expr                       params

denops:///Users/John Titor/test.git#README.md
└─┬──┘   └───────────┬────────────┘ └───┬───┘
  scheme             expr               fragment

denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2#README.md
└─┬──┘   └───────────┬────────────┘ └───────────┬───────────┘ └───┬───┘
  scheme             expr                       params            fragment
```

## Usage

### format

Use `format()` to format a Vim's buffer name in a safe way from `Bufname`
instance like:

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { format } from "https://deno.land/x/denops_std/bufname/mod.ts";

assertEquals(
  format({
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
  }),
  "denops:///Users/John Titor/test.git",
);

assertEquals(
  format({
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
    params: {
      foo: "foo",
      bar: ["bar1", "bar2"],
    },
  }),
  "denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2",
);

assertEquals(
  format({
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
    fragment: "README.md",
  }),
  "denops:///Users/John Titor/test.git#README.md",
);

assertEquals(
  format({
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
    params: {
      foo: "foo",
      bar: ["bar1", "bar2"],
    },
    fragment: "README.md",
  }),
  "denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2#README.md",
);
```

This function does not handle path separator differences among platforms (Unix
uses `/` but Windows uses `\`). That's why it's recommended to normalize the
`expr` with [`toFileUrl`](https://deno.land/std/path#tofileurl) before when
constructing a buffer name from a real path. For example

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { format } from "https://deno.land/x/denops_std/bufname/mod.ts";

// NOTE:
// Works only on Windows (Use path.win32.toFileUrl instead on other platforms)
assertEquals(
  format({
    scheme: "denops",
    expr: path.toFileUrl("C:\\Users\John Titor\test.git").pathname,
  }),
  "denops:///C:/Users/John%20Titor/test.git",
);
```

### parse

Use `parse()` to parse Vim's buffer name and get a `Bufname` instance like

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { parse } from "https://deno.land/x/denops_std/bufname/mod.ts";

assertEquals(
  parse("denops:///Users/John Titor/test.git"),
  {
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
  },
);

assertEquals(
  parse("denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2"),
  {
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
    params: {
      foo: "foo",
      bar: ["bar1", "bar2"],
    },
  },
);

assertEquals(
  parse("denops:///Users/John Titor/test.git#README.md"),
  {
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
    fragment: "README.md",
  },
);

assertEquals(
  parse(
    "denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2#README.md",
  ),
  {
    scheme: "denops",
    expr: "/Users/John Titor/test.git",
    params: {
      foo: "foo",
      bar: ["bar1", "bar2"],
    },
    fragment: "README.md",
  },
);
```

This function does not handle path separator differences among platforms. That's
why it's recommended to restore the `expr` with
[`fromFileUrl`](https://deno.land/std/path#fromfileurl) after if a buffer name
was constructed from a real path. For example

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { parse } from "https://deno.land/x/denops_std/bufname/mod.ts";

const bufname = parse("denops:///C:/Users/John%20Titor/test.git");
assertEquals(bufname, {
  scheme: "denops",
  expr: "/C:/Users/John Titor/test.git",
});
// NOTE:
// Works only on Windows (Use path.win32.fromFileUrl instead on other platforms)
assertEquals(
  path.fromFileUrl(`file://${bufname.expr}`),
  "C:\\Users\\John Titor\\test.git",
);
```
