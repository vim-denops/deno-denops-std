# helper

`helper` is a module to provide helper functions.

- [API documentation](https://doc.deno.land/https/deno.land/x/denops_std/helper/mod.ts)

## Usage

### echo / echoerr

Use `echo()` to show messages on the cmdline area. It is required while Vim
won't show messages reported from channel commands. It's same for
`denops.cmd('echo "Hello\nWorld!"')` in Neovim.

```typescript
import { Denops } from "../mod.ts";
import { echo, echoerr } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  await echo(denops, "Hello\nWorld!");
  await echoerr(denops, "This is error message");
}
```

##### Warning

In order to make the behavior of Vim and Neovim consistent, `timer_start()` is
used internally not only in Vim but also in Neovim. Note that this means that
you cannot control the message by prepending `silent` when calling it from the
Vim script. If you want to control the message, use the `setSilent` function to
change the silent state to `'silent'` or `'silent!'` in advance, or use the
`ensureSilent` function to fix the silent state to `'silent'` or `'silent!'`
during execution of any function.

### setSilent / getSilent

By setting the silent state with `setSilent`, you can control `silent` and
`silent!` messages as follows.

```typescript
import { Denops } from "../mod.ts";
import { echo, echoerr, getSilent, setSilent } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Because silent is "silent!", `echo` and `echoerr` doesn't show messages.
  setSilent(denops, "silent!");
  await echo(denops, "Hello\nWorld!");
  await echoerr(denops, "This is error message");

  // Because silent is "silent", `echo` doesn't show messages.
  setSilent(denops, "silent");
  await echo(denops, "Hello\nWorld!");
  await echoerr(denops, "This is error message");

  // Because silent is "", both show messages.
  setSilent(denops, "");
  await echo(denops, "Hello\nWorld!");
  await echoerr(denops, "This is error message");
}
```

Use the `getSilent()` function to get the current silent state.

### ensureSilent

To control `silent` and `silent!` messages while executing a particular
function, use `ensureSilent` as follows

```typescript
import { Denops } from "../mod.ts";
import { echo, echoerr, ensureSilent } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Because silent is "silent!", `echo` and `echoerr` doesn't show messages.
  await ensureSilent(denops, "silent!", async () => {
    await echo(denops, "Hello\nWorld!");
    await echoerr(denops, "This is error message");
  });

  // Because silent is "silent", `echo` doesn't show messages.
  await ensureSilent(denops, "silent", async () => {
    await echo(denops, "Hello\nWorld!");
    await echoerr(denops, "This is error message");
  });

  // Because silent is "", both shows messages.
  await ensureSilent(denops, "", async () => {
    await echo(denops, "Hello\nWorld!");
    await echoerr(denops, "This is error message");
  });
}
```

### friendlyCall

Use `friendlyCall()` to call given function and print a friendly error message
(without stack trace) on failure. It's mainly designed for `dispatcher`
functions.

Note that it prints a stack trace when denops is running in debug mode.

```typescript
import { Denops } from "../mod.ts";
import { friendlyCall } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    say: () => {
      return friendlyCall(denops, async () => {
        // Do whatever you want.
        throw new Error("Some error occurred");
      });
    },
  };
}
```

### input

Use `input()` which is a wrapper function of `input()` in
[`function` module](../function/README.md) to show a prompt to get user input
like:

```typescript
import { Denops } from "../mod.ts";
import { input } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  console.log(
    await input(denops, {
      prompt: "> ",
      text: "This is default value",
    }),
  );
}
```

Not like native `input()` function, it returns `null` instead of an empty string
when user press `<Esc>` or `<C-c>` so that developers can distinguish if user
cancelled or input an empty string.

It accepts a TypeScript callback as a completion function addition to built-in
completions and Vim script custom completion like:

```typescript
import { Denops } from "../mod.ts";
import { input } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Built-in completions
  console.log(
    await input(denops, {
      prompt: "> ",
      text: "This is default value",
      completion: "command",
    }),
  );

  // Vim script custom completion (assume 'MyVimScriptCompletion' is defined in Vim script)
  console.log(
    await input(denops, {
      prompt: "> ",
      text: "This is default value",
      completion: "custom,MyVimScriptCompletion",
    }),
  );

  // TypeScript custom completion
  console.log(
    await input(denops, {
      prompt: "> ",
      text: "This is default value",
      completion: (
        arglead: string,
        cmdline: string,
        cursorpos: number,
      ): Promise<string[]> => {
        return Promise.resolve(["Hello", "World"]);
      },
    }),
  );
}
```

If you'd like to guard input by `inputsave()` and `inputrestore()`, use
`inputsave` option like:

```typescript
import { Denops } from "../mod.ts";
import { input } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    say: async () => {
      return await input(denops, {
        prompt: "> ",
        inputsave: true,
      });
    },
  };
}
```

### batch

Deprecated in favor of [`batch`](./batch/README.md) module. Use `gather()`
function on that module instead.

### execute

Use `execute()` to execute multi-lined Vim script like:

```typescript
import { Denops } from "../mod.ts";
import { execute } from "../helper/mod.ts";

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
import { Denops } from "../mod.ts";
import { load } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  // Load '../../foo.vim' from this file
  await load(denops, new URL("../../foo.vim", import.meta.url));

  // Load 'https://example.com/foo.vim'
  await load(denops, new URL("https://example.com/foo.vim"));
}
```

It does nothing if the `url` is already loaded unless `force` option is
specified like:

```typescript
import { Denops } from "../mod.ts";
import { load } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const url = new URL("../../foo.vim", import.meta.url);

  // Line below loads a script
  await load(denops, url);

  // Line below does nothing while `url` is already loaded.
  await load(denops, url);

  // Line below loads the script while `force` option is specified.
  await load(denops, url, { force: true });
}
```

It returns `true` when the script is loaded. Otherwise, it returns `false` like:

```typescript
import { Denops } from "../mod.ts";
import { load } from "../helper/mod.ts";

export async function main(denops: Denops): Promise<void> {
  const url = new URL("../../foo.vim", import.meta.url);

  console.log(await load(denops, url));
  // -> true

  console.log(await load(denops, url));
  // -> false

  console.log(await load(denops, url, { force: true }));
  // -> true
}
```

Note that denops plugins works on individual threads so developers should add a
source guard on a Vim script as well like:

```vim
if has('g:loaded_xxxxx')
  finish
endif
let g:loaded_xxxxx = 1

" Define functions or whatever
```
