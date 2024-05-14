import {
  assert as assertTruthy,
  assertEquals,
  assertFalse as assertFalsy,
} from "https://deno.land/std@0.217.0/assert/mod.ts";
import { test } from "@denops/test";
import * as _generated from "./_generated.ts";

test({
  mode: "all",
  name: "option (string)",
  fn: async (denops, t) => {
    await t.step({
      name: "dictionary.get() return the value of the option",
      fn: async () => {
        await denops.cmd("set dictionary=hello");
        assertEquals(await _generated.dictionary.get(denops), "hello");
      },
    });
    await t.step({
      name: "dictionary.get() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("set dictionary&");
        assertEquals(await _generated.dictionary.get(denops), "");
      },
    });
    await t.step({
      name: "dictionary.set() replace the value of the option",
      fn: async () => {
        await denops.cmd("set dictionary=hello");
        await _generated.dictionary.set(denops, "world");
        assertEquals(await denops.eval("&dictionary"), "world");
      },
    });
    await t.step({
      name: "dictionary.reset() reset the option",
      fn: async () => {
        await denops.cmd("set dictionary=hello");
        await _generated.dictionary.reset(denops);
        assertEquals(await denops.eval("&dictionary"), "");
      },
    });

    await t.step({
      name: "dictionary.getGlobal() return the value of the option",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary=world");
        assertEquals(
          await _generated.dictionary.getGlobal(denops),
          "hello",
        );
      },
    });
    await t.step({
      name:
        "dictionary.getGlobal() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("setglobal dictionary&");
        await denops.cmd("setlocal dictionary=hello");
        assertEquals(await _generated.dictionary.getGlobal(denops), "");
      },
    });
    await t.step({
      name: "dictionary.setGlobal() replace the value of the option",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary=hello");
        await _generated.dictionary.setGlobal(denops, "world");
        assertEquals(await denops.eval("&g:dictionary"), "world");
        assertEquals(await denops.eval("&l:dictionary"), "hello");
      },
    });
    await t.step({
      name: "dictionary.resetGlobal() reset the option",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary=hello");
        await _generated.dictionary.resetGlobal(denops);
        assertEquals(await denops.eval("&g:dictionary"), "");
        assertEquals(await denops.eval("&l:dictionary"), "hello");
      },
    });

    await t.step({
      name: "dictionary.getLocal() return the value of the option",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary=world");
        assertEquals(await _generated.dictionary.getLocal(denops), "world");
      },
    });
    await t.step({
      name:
        "dictionary.getLocal() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary&");
        assertEquals(await _generated.dictionary.getLocal(denops), "");
      },
    });
    await t.step({
      name: "dictionary.setLocal() replace the value of the option",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary=hello");
        await _generated.dictionary.setLocal(denops, "world");
        assertEquals(await denops.eval("&g:dictionary"), "hello");
        assertEquals(await denops.eval("&l:dictionary"), "world");
      },
    });
    await t.step({
      name: "dictionary.resetLocal() reset the option",
      fn: async () => {
        await denops.cmd("setglobal dictionary=hello");
        await denops.cmd("setlocal dictionary=hello");
        await _generated.dictionary.resetLocal(denops);
        assertEquals(await denops.eval("&g:dictionary"), "hello");
        assertEquals(await denops.eval("&l:dictionary"), "");
      },
    });

    await t.step({
      name: "dictionary.getBuffer() return the value of the option",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal dictionary&");
          await denops.cmd("setlocal dictionary=hello");
          await denops.cmd("new");
          await denops.cmd("setlocal dictionary=world");
          assertEquals(
            await _generated.dictionary.getBuffer(denops, bufnr),
            "hello",
          );
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name:
        "dictionary.getBuffer() return the defautValue when the option is empty",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal dictionary&");
          await denops.cmd("setlocal dictionary&");
          await denops.cmd("new");
          await denops.cmd("setlocal dictionary=world");
          assertEquals(
            await _generated.dictionary.getBuffer(denops, bufnr),
            "",
          );
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "dictionary.setBuffer() replace the value of the option",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal dictionary&");
          await denops.cmd("setlocal dictionary=hello");
          await denops.cmd("new");
          await denops.cmd("setlocal dictionary=hello");
          await _generated.dictionary.setBuffer(denops, bufnr, "world");
          assertEquals(
            await denops.call("getbufvar", bufnr, "&dictionary"),
            "world",
          );
          assertEquals(await denops.eval("&l:dictionary"), "hello");
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });

    await t.step({
      name: "colorcolumn.getWindow() return the value of the option",
      fn: async () => {
        try {
          await denops.cmd("setlocal colorcolumn=+1,+3");
          await denops.cmd("botright split");
          await denops.cmd("setlocal colorcolumn=+42");
          assertEquals(
            await _generated.colorcolumn.getWindow(denops, 1),
            "+1,+3",
          );
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name:
        "colorcolumn.getWindow() return the defautValue when the option is empty",
      fn: async () => {
        try {
          await denops.cmd("setlocal colorcolumn&");
          await denops.cmd("botright split");
          await denops.cmd("setlocal colorcolumn=+42");
          assertEquals(await _generated.colorcolumn.getWindow(denops, 1), "");
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "colorcolumn.setWindow() replace the value of the option",
      fn: async () => {
        try {
          await denops.cmd("setlocal colorcolumn=+1,+3");
          await denops.cmd("botright split");
          await denops.cmd("setlocal colorcolumn=+1,+3");
          await _generated.colorcolumn.setWindow(denops, 1, "+42");
          assertEquals(
            await denops.call("getwinvar", 1, "&colorcolumn"),
            "+42",
          );
          assertEquals(await denops.eval("&l:colorcolumn"), "+1,+3");
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
  },
});

test({
  mode: "all",
  name: "option (number)",
  fn: async (denops, t) => {
    await t.step({
      name: "undolevels.get() return the value of the option",
      fn: async () => {
        await denops.cmd("set undolevels=123");
        assertEquals(await _generated.undolevels.get(denops), 123);
      },
    });
    await t.step({
      name: "undolevels.get() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("set undolevels&");
        assertEquals(await _generated.undolevels.get(denops), 1000);
      },
    });
    await t.step({
      name: "undolevels.set() replace the value of the option",
      fn: async () => {
        await denops.cmd("set undolevels=123");
        await _generated.undolevels.set(denops, 42);
        assertEquals(await denops.eval("&undolevels"), 42);
      },
    });
    await t.step({
      name: "undolevels.reset() reset the option",
      fn: async () => {
        await denops.cmd("set undolevels=123");
        await _generated.undolevels.reset(denops);
        assertEquals(await denops.eval("&undolevels"), 1000);
      },
    });

    await t.step({
      name: "undolevels.getGlobal() return the value of the option",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels=42");
        assertEquals(await _generated.undolevels.getGlobal(denops), 123);
      },
    });
    await t.step({
      name:
        "undolevels.getGlobal() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("setglobal undolevels&");
        await denops.cmd("setlocal undolevels=123");
        assertEquals(await _generated.undolevels.getGlobal(denops), 1000);
      },
    });
    await t.step({
      name: "undolevels.setGlobal() replace the value of the option",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels=123");
        await _generated.undolevels.setGlobal(denops, 42);
        assertEquals(await denops.eval("&g:undolevels"), 42);
        assertEquals(await denops.eval("&l:undolevels"), 123);
      },
    });
    await t.step({
      name: "undolevels.resetGlobal() reset the option",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels=123");
        await _generated.undolevels.resetGlobal(denops);
        assertEquals(await denops.eval("&g:undolevels"), 1000);
        assertEquals(await denops.eval("&l:undolevels"), 123);
      },
    });

    await t.step({
      name: "undolevels.getLocal() return the value of the option",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels=42");
        assertEquals(await _generated.undolevels.getLocal(denops), 42);
      },
    });
    await t.step({
      name:
        "undolevels.getLocal() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels&");
        assertEquals(await _generated.undolevels.getLocal(denops), 1000);
      },
    });
    await t.step({
      name: "undolevels.setLocal() replace the value of the option",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels=123");
        await _generated.undolevels.setLocal(denops, 456);
        assertEquals(await denops.eval("&g:undolevels"), 123);
        assertEquals(await denops.eval("&l:undolevels"), 456);
      },
    });
    await t.step({
      name: "undolevels.resetLocal() reset the option",
      fn: async () => {
        await denops.cmd("setglobal undolevels=123");
        await denops.cmd("setlocal undolevels=123");
        await _generated.undolevels.resetLocal(denops);
        assertEquals(await denops.eval("&g:undolevels"), 123);
        assertEquals(await denops.eval("&l:undolevels"), 1000);
      },
    });

    await t.step({
      name: "undolevels.getBuffer() return the value of the option",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal undolevels&");
          await denops.cmd("setlocal undolevels=123");
          await denops.cmd("new");
          await denops.cmd("setlocal undolevels=42");
          assertEquals(
            await _generated.undolevels.getBuffer(denops, bufnr),
            123,
          );
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name:
        "undolevels.getBuffer() return the defautValue when the option is empty",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal undolevels&");
          await denops.cmd("setlocal undolevels&");
          await denops.cmd("new");
          await denops.cmd("setlocal undolevels=42");
          assertEquals(
            await _generated.undolevels.getBuffer(denops, bufnr),
            1000,
          );
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "undolevels.setBuffer() replace the value of the option",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal undolevels&");
          await denops.cmd("setlocal undolevels=123");
          await denops.cmd("new");
          await denops.cmd("setlocal undolevels=123");
          await _generated.undolevels.setBuffer(denops, bufnr, 42);
          assertEquals(
            await denops.call("getbufvar", bufnr, "&undolevels"),
            42,
          );
          assertEquals(await denops.eval("&l:undolevels"), 123);
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });

    await t.step({
      name: "foldlevel.getWindow() return the value of the option",
      fn: async () => {
        try {
          await denops.cmd("setlocal foldlevel=123");
          await denops.cmd("botright split");
          await denops.cmd("setlocal foldlevel=456");
          assertEquals(await _generated.foldlevel.getWindow(denops, 1), 123);
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name:
        "foldlevel.getWindow() return the defautValue when the option is empty",
      fn: async () => {
        try {
          await denops.cmd("setlocal foldlevel&");
          await denops.cmd("botright split");
          await denops.cmd("setlocal foldlevel=456");
          assertEquals(await _generated.foldlevel.getWindow(denops, 1), 0);
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "foldlevel.setWindow() replace the value of the option",
      fn: async () => {
        try {
          await denops.cmd("setlocal foldlevel=123");
          await denops.cmd("botright split");
          await denops.cmd("setlocal foldlevel=123");
          await _generated.foldlevel.setWindow(denops, 1, 456);
          assertEquals(await denops.call("getwinvar", 1, "&foldlevel"), 456);
          assertEquals(await denops.eval("&l:foldlevel"), 123);
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
  },
});

test({
  mode: "all",
  name: "option (boolean)",
  fn: async (denops, t) => {
    await t.step({
      name: "autoread.get() return the value of the option",
      fn: async () => {
        await denops.cmd("set autoread");
        assertEquals(await _generated.autoread.get(denops), true);
      },
    });
    await t.step({
      name: "autoread.get() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("set autoread&");
        if (await denops.call("has", "nvim")) {
          assertEquals(await _generated.autoread.get(denops), true);
        } else {
          assertEquals(await _generated.autoread.get(denops), false);
        }
      },
    });
    await t.step({
      name: "autoread.set() replace the value of the option",
      fn: async () => {
        await denops.cmd("set noautoread");
        await _generated.autoread.set(denops, true);
        assertTruthy(await denops.eval("&autoread"));
      },
    });
    await t.step({
      name: "autoread.reset() reset the option",
      fn: async () => {
        await denops.cmd("set autoread& autoread!");
        await _generated.autoread.reset(denops);
        if (await denops.call("has", "nvim")) {
          assertTruthy(await denops.eval("&autoread"));
        } else {
          assertFalsy(await denops.eval("&autoread"));
        }
      },
    });

    await t.step({
      name: "autoread.getGlobal() return the value of the option",
      fn: async () => {
        await denops.cmd("setglobal autoread");
        await denops.cmd("setlocal noautoread");
        assertEquals(await _generated.autoread.getGlobal(denops), true);
      },
    });
    await t.step({
      name:
        "autoread.getGlobal() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("setglobal autoread&");
        await denops.cmd("setlocal autoread& autoread!");
        if (await denops.call("has", "nvim")) {
          assertEquals(await _generated.autoread.getGlobal(denops), true);
        } else {
          assertEquals(await _generated.autoread.getGlobal(denops), false);
        }
      },
    });
    await t.step({
      name: "autoread.setGlobal() replace the value of the option",
      fn: async () => {
        await denops.cmd("setglobal noautoread");
        await denops.cmd("setlocal noautoread");
        await _generated.autoread.setGlobal(denops, true);
        assertTruthy(await denops.eval("&g:autoread"));
        assertFalsy(await denops.eval("&l:autoread"));
      },
    });
    await t.step({
      name: "autoread.resetGlobal() reset the option",
      fn: async () => {
        await denops.cmd("setglobal autoread& autoread!");
        await denops.cmd("setlocal autoread& autoread!");
        await _generated.autoread.resetGlobal(denops);
        if (await denops.call("has", "nvim")) {
          assertTruthy(await denops.eval("&g:autoread"));
          assertFalsy(await denops.eval("&l:autoread"));
        } else {
          assertFalsy(await denops.eval("&g:autoread"));
          assertTruthy(await denops.eval("&l:autoread"));
        }
      },
    });

    await t.step({
      name: "autoread.getLocal() return the value of the option",
      fn: async () => {
        await denops.cmd("setglobal noautoread");
        await denops.cmd("setlocal autoread");
        assertEquals(await _generated.autoread.getLocal(denops), true);
      },
    });
    await t.step({
      name:
        "autoread.getLocal() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("setglobal autoread& autoread!");
        await denops.cmd("setlocal autoread&");
        if (await denops.call("has", "nvim")) {
          assertEquals(await _generated.autoread.getLocal(denops), true);
        } else {
          assertEquals(await _generated.autoread.getLocal(denops), false);
        }
      },
    });
    await t.step({
      name: "autoread.setLocal() replace the value of the option",
      fn: async () => {
        await denops.cmd("setglobal noautoread");
        await denops.cmd("setlocal noautoread");
        await _generated.autoread.setLocal(denops, true);
        assertFalsy(await denops.eval("&g:autoread"));
        assertTruthy(await denops.eval("&l:autoread"));
      },
    });
    await t.step({
      name: "autoread.resetLocal() reset the option",
      fn: async () => {
        await denops.cmd("setglobal autoread& autoread!");
        await denops.cmd("setlocal autoread& autoread!");
        await _generated.autoread.resetLocal(denops);
        if (await denops.call("has", "nvim")) {
          assertFalsy(await denops.eval("&g:autoread"));
          assertTruthy(await denops.eval("&l:autoread"));
        } else {
          assertTruthy(await denops.eval("&g:autoread"));
          assertFalsy(await denops.eval("&l:autoread"));
        }
      },
    });

    await t.step({
      name: "autoread.getBuffer() return the value of the option",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal noautoread");
          await denops.cmd("setlocal autoread");
          await denops.cmd("new");
          await denops.cmd("setlocal noautoread");
          assertEquals(
            await _generated.autoread.getBuffer(denops, bufnr),
            true,
          );
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name:
        "autoread.getBuffer() return the defautValue when the option is empty",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal autoread&");
          await denops.cmd("setlocal autoread&");
          await denops.cmd("new");
          await denops.cmd("setlocal autoread");
          if (await denops.call("has", "nvim")) {
            assertEquals(
              await _generated.autoread.getBuffer(denops, bufnr),
              true,
            );
          } else {
            assertEquals(
              await _generated.autoread.getBuffer(denops, bufnr),
              false,
            );
          }
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "autoread.setBuffer() replace the value of the option",
      fn: async () => {
        try {
          const bufnr = await denops.call("bufnr") as number;
          await denops.cmd("setglobal noautoread");
          await denops.cmd("setlocal noautoread");
          await denops.cmd("new");
          await denops.cmd("setlocal noautoread");
          await _generated.autoread.setBuffer(denops, bufnr, true);
          assertTruthy(await denops.call("getbufvar", bufnr, "&autoread"));
          assertFalsy(await denops.eval("&l:autoread"));
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });

    await t.step({
      name: "list.getWindow() return the value of the option",
      fn: async () => {
        try {
          await denops.cmd("setlocal list");
          await denops.cmd("botright split");
          await denops.cmd("setlocal nolist");
          assertEquals(await _generated.list.getWindow(denops, 1), true);
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "list.getWindow() return the defautValue when the option is empty",
      fn: async () => {
        try {
          await denops.cmd("setlocal list&");
          await denops.cmd("botright split");
          await denops.cmd("setlocal list");
          assertEquals(await _generated.list.getWindow(denops, 1), false);
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
    await t.step({
      name: "list.setWindow() replace the value of the option",
      fn: async () => {
        try {
          await denops.cmd("setlocal nolist");
          await denops.cmd("botright split");
          await denops.cmd("setlocal nolist");
          await _generated.list.setWindow(denops, 1, true);
          assertTruthy(await denops.call("getwinvar", 1, "&list"));
          assertFalsy(await denops.eval("&l:list"));
        } finally {
          await denops.cmd("1,$bwipeout!");
        }
      },
    });
  },
});
