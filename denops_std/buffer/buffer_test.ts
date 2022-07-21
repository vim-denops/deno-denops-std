import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { test } from "../test/mod.ts";
import { default as Encoding } from "https://cdn.skypack.dev/encoding-japanese@2.0.0/";
import * as fn from "../function/mod.ts";
import {
  assign,
  concrete,
  ensure,
  modifiable,
  open,
  replace,
} from "./buffer.ts";

test({
  mode: "all",
  name: "open opens a new buffer",
  fn: async (denops) => {
    await open(denops, "Hello world");
    const bufname = await fn.bufname(denops);
    assertEquals("Hello world", bufname);
  },
});
test({
  mode: "all",
  name: "open opens a new buffer (remote buffer name)",
  fn: async (denops) => {
    await open(denops, "gin://this-is-valid-remote-buffer-name");
    const bufname = await fn.bufname(denops);
    assertEquals("gin://this-is-valid-remote-buffer-name", bufname);
  },
});
test({
  mode: "all",
  name: "open opens a new buffer (symobls with percent-encoding)",
  fn: async (denops) => {
    const symbols = " !%22#$%&'()%2a+,-./:;%3c=%3e%3f@[\\]^`{%7c}~";
    await open(denops, `test://${symbols}`);
    const bufname = await fn.bufname(denops);
    assertEquals(`test://${symbols}`, bufname);
  },
});

test({
  mode: "all",
  name: "replace replaces content of a buffer",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    await replace(denops, bufnr, [
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ]);
    assertEquals([
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ], await fn.getline(denops, 1, "$"));

    await replace(denops, bufnr, [
      "Joking",
    ]);
    assertEquals([
      "Joking",
    ], await fn.getline(denops, 1, "$"));
  },
});
test({
  mode: "all",
  name: "replace replaces content of an 'unmodifiable' buffer",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    await fn.setbufvar(denops, bufnr, "&modifiable", 0);
    await replace(denops, bufnr, [
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ]);
    assertEquals([
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ], await fn.getline(denops, 1, "$"));
    assertEquals(0, await fn.getbufvar(denops, bufnr, "&modifiable"));

    await replace(denops, bufnr, [
      "Joking",
    ]);
    assertEquals([
      "Joking",
    ], await fn.getline(denops, 1, "$"));
    assertEquals(0, await fn.getbufvar(denops, bufnr, "&modifiable"));
  },
});

test({
  mode: "all",
  name: "assign assings content to a buffer",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    const encoder = new TextEncoder();
    await assign(
      denops,
      bufnr,
      encoder.encode(
        "こんにちわ\n世界\n",
      ),
    );
    assertEquals([
      "こんにちわ",
      "世界",
    ], await fn.getline(denops, 1, "$"));

    await assign(
      denops,
      bufnr,
      encoder.encode(
        "今すぐダウンロー\nド",
      ),
    );
    assertEquals([
      "今すぐダウンロー",
      "ド",
    ], await fn.getline(denops, 1, "$"));
  },
});
test({
  mode: "all",
  name: "assign assings content to a buffer with specified fileencoding",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    const encode = (text: string, encoding: string): Uint8Array => {
      return new Uint8Array(
        Encoding.convert(Encoding.stringToCode(text), encoding, "UNICODE"),
      );
    };
    await assign(
      denops,
      bufnr,
      encode("こんにちわ\n世界\n", "sjis"),
      {
        fileencoding: "sjis",
      },
    );
    assertEquals([
      "こんにちわ",
      "世界",
    ], await fn.getline(denops, 1, "$"));

    await assign(
      denops,
      bufnr,
      encode("今すぐダウンロー\nド", "euc-jp"),
      {
        fileencoding: "euc-jp",
      },
    );
    assertEquals([
      "今すぐダウンロー",
      "ド",
    ], await fn.getline(denops, 1, "$"));
  },
});
test({
  mode: "all",
  name: "assign assings content to a buffer with specified fileformat",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    const encoder = new TextEncoder();
    await assign(
      denops,
      bufnr,
      encoder.encode(
        "こんにちわ\r\n世界\r\n",
      ),
      {
        fileformat: "dos",
      },
    );
    assertEquals([
      "こんにちわ",
      "世界",
    ], await fn.getline(denops, 1, "$"));

    await assign(
      denops,
      bufnr,
      encoder.encode(
        "今すぐダウンロー\r\nド",
      ),
    );
    assertEquals([
      "今すぐダウンロー",
      "ド",
    ], await fn.getline(denops, 1, "$"));
  },
});

test({
  mode: "all",
  name: "concrete concretes the buffer and the content become persistent",
  fn: async (denops) => {
    await denops.cmd("edit foobar");
    const bufnr = await fn.bufnr(denops);
    await replace(denops, bufnr, [
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ]);
    await concrete(denops, bufnr);
    await denops.cmd("edit");
    assertEquals([
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ], await fn.getbufline(denops, bufnr, 1, "$"));
  },
});

test({
  mode: "all",
  name:
    "ensure ensures that the current buffer is specified one (buffer change)",
  fn: async (denops) => {
    await open(denops, "Hello");
    const bufnr1 = await fn.bufnr(denops);
    await open(denops, "World");
    const bufnr2 = await fn.bufnr(denops);

    assertEquals(bufnr2, await fn.bufnr(denops));
    await ensure(denops, bufnr1, async () => {
      assertEquals(bufnr1, await fn.bufnr(denops));
    });
    assertEquals(bufnr2, await fn.bufnr(denops));

    assertEquals(bufnr2, await fn.bufnr(denops));
    await ensure(denops, bufnr2, async () => {
      assertEquals(bufnr2, await fn.bufnr(denops));
    });
    assertEquals(bufnr2, await fn.bufnr(denops));
  },
});
test({
  mode: "all",
  name:
    "ensure ensures that the current buffer is specified one (window change)",
  fn: async (denops) => {
    await open(denops, "Hello");
    const bufnr1 = await fn.bufnr(denops);
    await denops.cmd("new");
    await open(denops, "World");
    const bufnr2 = await fn.bufnr(denops);

    assertEquals(bufnr2, await fn.bufnr(denops));
    await ensure(denops, bufnr1, async () => {
      assertEquals(bufnr1, await fn.bufnr(denops));
    });
    assertEquals(bufnr2, await fn.bufnr(denops));

    assertEquals(bufnr2, await fn.bufnr(denops));
    await ensure(denops, bufnr2, async () => {
      assertEquals(bufnr2, await fn.bufnr(denops));
    });
    assertEquals(bufnr2, await fn.bufnr(denops));
  },
});

test({
  mode: "all",
  name: "modifiable ensures that the buffer is modifiable",
  fn: async (denops) => {
    await denops.cmd("edit foobar");
    await denops.cmd("set nomodifiable");
    const bufnr = await fn.bufnr(denops);
    assertEquals(0, await denops.eval("&modifiable"));
    await modifiable(denops, bufnr, async () => {
      assertEquals(1, await denops.eval("&modifiable"));
    });
    assertEquals(0, await denops.eval("&modifiable"));
  },
});
