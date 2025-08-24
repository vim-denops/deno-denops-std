import { assertEquals } from "@std/assert";
import { test } from "@denops/test";
import { AsyncDisposableStack } from "@nick/dispose";
import * as fn from "../function/mod.ts";
import { rawString } from "../eval/string.ts";
import { send } from "./keymap.ts";

test({
  mode: "vim",
  name: "send()",
  fn: async (denops, t) => {
    await t.step("sends normal keys with string", async () => {
      await fn.deletebufline(denops, "%", 1, "$");
      await fn.setline(denops, 1, "foobar");
      await send(denops, "gg0lll");
      assertEquals(await fn.getpos(denops, "."), [0, 1, 4, 0]);
    });
    await t.step("sends normal keys with string[]", async () => {
      await fn.deletebufline(denops, "%", 1, "$");
      await fn.setline(denops, 1, "foobar");
      await send(denops, ["gg0lll", "hh", "lll"]);
      assertEquals(await fn.getpos(denops, "."), [0, 1, 5, 0]);
    });
    await t.step("sends special keys with RawString", async () => {
      await fn.deletebufline(denops, "%", 1, "$");
      await send(denops, rawString`\<Cmd>call setline(1, 'foo')\<CR>`);
      assertEquals(await fn.getline(denops, 1), "foo");
    });
    await t.step("sends special keys with RawString[]", async () => {
      await fn.deletebufline(denops, "%", 1, "$");
      await send(denops, [
        rawString`\<Cmd>call setline(1, 'foo')\<CR>`,
        rawString`\<Cmd>call append(0, 'bar')\<CR>`,
        rawString`\<Cmd>call append(0, 'baz')\<CR>`,
      ]);
      assertEquals(await fn.getline(denops, 1, "$"), ["baz", "bar", "foo"]);
    });
    await t.step("sends not remapped keys with Keys", async () => {
      await using stack = new AsyncDisposableStack();
      stack.defer(() => denops.cmd("nunmap k"));
      await denops.cmd("nnoremap k <Down>");
      await fn.deletebufline(denops, "%", 1, "$");
      await fn.setline(denops, 1, ["foo", "bar", "baz"]);
      await send(denops, { keys: "gg0jlk", remap: false });
      assertEquals(await fn.getpos(denops, "."), [0, 1, 2, 0]);
    });
    await t.step("sends remapped keys with Keys", async () => {
      await using stack = new AsyncDisposableStack();
      stack.defer(() => denops.cmd("nunmap k"));
      await denops.cmd("nnoremap k <Down>");
      await fn.deletebufline(denops, "%", 1, "$");
      await fn.setline(denops, 1, ["foo", "bar", "baz"]);
      await send(denops, { keys: "gg0jlk", remap: true });
      assertEquals(await fn.getpos(denops, "."), [0, 3, 2, 0]);
    });
    await t.step("sends mixed keys with Keys[]", async () => {
      await using stack = new AsyncDisposableStack();
      stack.defer(() => denops.cmd("nunmap k"));
      await denops.cmd("nnoremap k <Down>");
      await fn.deletebufline(denops, "%", 1, "$");
      await fn.setline(denops, 1, ["foo", "bar", "baz"]);
      await send(denops, [
        { keys: rawString`gg0\<Down>lk`, remap: false },
        { keys: "k", remap: true },
        { keys: "k", remap: false },
      ]);
      assertEquals(await fn.getpos(denops, "."), [0, 1, 2, 0]);
    });
  },
});
