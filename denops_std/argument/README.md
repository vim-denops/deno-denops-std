# argument

`argument` is a module to handle Vim's command arguments.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/argument/mod.ts)

## Usage

### parse/parseOpts/parseFlags

Use `parse()`, `parseOpts`, or `parseFlags` to parse Vim's command arguments
like:

```typescript
import { Denops } from "../mod.ts";
import { parse, parseFlags, parseOpts } from "../argument/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const args = [
    "++enc=sjis",
    "++ff=dos",
    "-f",
    "--foo=foo",
    "--bar=bar",
    "--bar=baz",
    "hello",
    "world",
  ];
  const [opts, flags, residues] = parse(args);
  // Or use parseOpts/parseFlags instead
  //const [opts, residues] = parseOpts(args);
  //const [flags, residues] = parseFlags(args);

  console.log(opts);
  // { "enc": "sjis", "ff": "dos" }

  console.log(flags);
  // { "f": "", "foo": "foo", "bar": ["bar", "baz"] }

  console.log(residues);
  // ["hello", "world"]
}
```

### validateOpts/validateFlags

Use `validateOpts` or `validateFlags` to validate if `opts` or `flags` has
unknown attributes like:

```typescript
import { Denops } from "../mod.ts";
import {
  builtinOpts,
  parse,
  validateFlags,
  validateOpts,
} from "../argument/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const args = [
    "++enc=sjis",
    "++ff=dos",
    "-f",
    "--foo=foo",
    "--bar=bar",
    "--bar=baz",
    "hello",
    "world",
  ];
  const [opts, flags, residues] = parse(args);

  validateOpts(opts, ["enc", "ff"]);
  // Or use `builtinOpts` to validate Vim's builtin `++opts`
  //validateOpts(opts, builtinOpts);

  validateFlags(flags, ["f", "foo", "bar"]);
}
```

### formatOpt/formatFlag

Use `formatOpt` or `formatFlag` to format `key` and `value` pair like:

```typescript
import { Denops } from "../mod.ts";
import { formatFlag, formatOpt } from "../argument/mod.ts";

export async function main(denops: Denops): Promise<void> {
  console.log(formatOpt("enc", "sjis"));
  // "++enc=sjis"

  console.log(formatFlag("f", ""));
  // "-f"

  console.log(formatFlag("foo", "value"));
  // "--foo=value"
}
```

### formatOpts/formatFlags

Use `formatOpts` or `formatFlags` to format `opts` or `flags` like:

```typescript
import { Denops } from "../mod.ts";
import { formatFlags, formatOpts, parse } from "../argument/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const args = [
    "++enc=sjis",
    "++ff=dos",
    "-f",
    "--foo=foo",
    "--bar=bar",
    "--bar=baz",
    "hello",
    "world",
  ];
  const [opts, flags, residues] = parse(args);

  console.log(formatOpts(opts));
  // "++enc=sjis ++ff=dos"

  console.log(formatFlags(flags));
  // "-f --foo=foo --bar=bar --bar=baz"
}
```
