import { assertEquals, assertRejects } from "@std/assert";
import { default as Encoding } from "encoding-japanese";
import { test } from "@denops/test";
import * as fn from "../function/mod.ts";
import {
  append,
  concrete,
  decode,
  ensure,
  modifiable,
  open,
  replace,
} from "./buffer.ts";

test({
  mode: "all",
  name: "buffer",
  fn: async (denops, t) => {
    await t.step({
      name: "open()",
      fn: async (t) => {
        await t.step({
          name: "opens a new buffer",
          fn: async () => {
            const info = await open(denops, "Hello world");
            const bufname = await fn.bufname(denops);
            assertEquals(bufname, "Hello world");
            assertEquals(info.winid, await fn.win_getid(denops));
            assertEquals(info.bufnr, await fn.bufnr(denops));
            assertEquals(info.winnr, await fn.winnr(denops));
            assertEquals(info.tabpagenr, await fn.tabpagenr(denops));
          },
        });
        await t.step({
          name: "opens a new buffer (remote buffer name)",
          fn: async () => {
            const info = await open(
              denops,
              "gin://this-is-valid-remote-buffer-name",
            );
            const bufname = await fn.bufname(denops);
            assertEquals(bufname, "gin://this-is-valid-remote-buffer-name");
            assertEquals(info.winid, await fn.win_getid(denops));
            assertEquals(info.bufnr, await fn.bufnr(denops));
            assertEquals(info.winnr, await fn.winnr(denops));
            assertEquals(info.tabpagenr, await fn.tabpagenr(denops));
          },
        });
        await t.step({
          name: "opens a new buffer (symbols with percent-encoding)",
          fn: async () => {
            const symbols = " !%22#$%&'()%2a+,-./:;%3c=%3e%3f@[\\]^`{%7c}~";
            const info = await open(denops, `test://${symbols}`);
            const bufname = await fn.bufname(denops);
            assertEquals(bufname, `test://${symbols}`);
            assertEquals(info.winid, await fn.win_getid(denops));
            assertEquals(info.bufnr, await fn.bufnr(denops));
            assertEquals(info.winnr, await fn.winnr(denops));
            assertEquals(info.tabpagenr, await fn.tabpagenr(denops));
          },
        });
        await t.step({
          name: "opens a new buffer fails when modified (nohidden)",
          fn: async () => {
            await denops.cmd("set modified nohidden");
            await assertRejects(
              () => open(denops, "Hello world"),
              Error,
              "No write since last change (add ! to override)",
            );
            await denops.cmd("set nomodified");
          },
        });
        await t.step({
          name: "opens a new buffer when modified with bang (nohidden)",
          fn: async () => {
            await denops.cmd("set modified nohidden");
            const info = await open(denops, "Hello world", { bang: true });
            const bufname = await fn.bufname(denops);
            assertEquals(bufname, "Hello world");
            assertEquals(info.winid, await fn.win_getid(denops));
            assertEquals(info.bufnr, await fn.bufnr(denops));
            assertEquals(info.winnr, await fn.winnr(denops));
            assertEquals(info.tabpagenr, await fn.tabpagenr(denops));
            await denops.cmd("set nomodified");
          },
        });
      },
    });

    await t.step({
      name: "decode()",
      fn: async (t) => {
        await t.step({
          name: "decodes data for a buffer",
          fn: async () => {
            const bufnr = await fn.bufnr(denops);
            const encoder = new TextEncoder();
            let result = await decode(
              denops,
              bufnr,
              encoder.encode(
                "こんにちわ\n世界\n",
              ),
            );
            assertEquals(result.content, [
              "こんにちわ",
              "世界",
            ]);

            result = await decode(
              denops,
              bufnr,
              encoder.encode(
                "今すぐダウンロー\nド",
              ),
            );
            assertEquals(result.content, [
              "今すぐダウンロー",
              "ド",
            ]);
          },
        });
        await t.step({
          name: "decodes content for a buffer with specified fileencoding",
          fn: async () => {
            const bufnr = await fn.bufnr(denops);
            const encode = (text: string, encoding: string): Uint8Array => {
              return new Uint8Array(
                Encoding.convert(
                  Encoding.stringToCode(text),
                  encoding,
                  "UNICODE",
                ),
              );
            };
            let result = await decode(
              denops,
              bufnr,
              encode("こんにちわ\n世界\n", "sjis"),
              {
                fileencoding: "sjis",
              },
            );
            assertEquals(result.fileencoding, "sjis");
            assertEquals(result.content, [
              "こんにちわ",
              "世界",
            ]);

            result = await decode(
              denops,
              bufnr,
              encode("今すぐダウンロー\nド", "euc-jp"),
              {
                fileencoding: "euc-jp",
              },
            );
            assertEquals(result.fileencoding, "euc-jp");
            assertEquals(result.content, [
              "今すぐダウンロー",
              "ド",
            ]);
          },
        });
        await t.step({
          name: "decodes content for a buffer with specified fileformat",
          fn: async () => {
            const bufnr = await fn.bufnr(denops);
            const encoder = new TextEncoder();
            let result = await decode(
              denops,
              bufnr,
              encoder.encode(
                "こんにちわ\r\n世界\r\n",
              ),
              {
                fileformat: "dos",
              },
            );
            assertEquals(result.fileformat, "dos");
            assertEquals(result.content, [
              "こんにちわ",
              "世界",
            ]);

            result = await decode(
              denops,
              bufnr,
              encoder.encode(
                "今すぐダウンロー\r\nド",
              ),
            );
            assertEquals(result.fileformat, "dos");
            assertEquals(result.content, [
              "今すぐダウンロー",
              "ド",
            ]);
          },
        });
      },
    });

    await t.step({
      name: "append()",
      fn: async (t) => {
        await t.step({
          name: "appends content of a buffer",
          fn: async () => {
            await denops.cmd("enew");
            const bufnr = await fn.bufnr(denops);
            await append(denops, bufnr, [
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);

            await append(denops, bufnr, [
              "Joking",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Joking",
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);

            await append(denops, bufnr, [
              "Foo",
            ], {
              lnum: 3,
            });
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Joking",
              "Hello",
              "Foo",
              "Darkness",
              "My",
              "Old friend",
            ]);
          },
        });
        await t.step({
          name: "appends content of an 'unmodifiable' buffer",
          fn: async () => {
            await denops.cmd("enew");
            const bufnr = await fn.bufnr(denops);
            await fn.setbufvar(denops, bufnr, "&modifiable", 0);
            await append(denops, bufnr, [
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getbufvar(denops, bufnr, "&modifiable"), 0);

            await append(denops, bufnr, [
              "Joking",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Joking",
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getbufvar(denops, bufnr, "&modifiable"), 0);

            await append(denops, bufnr, [
              "Foo",
            ], {
              lnum: 3,
            });
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Joking",
              "Hello",
              "Foo",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getbufvar(denops, bufnr, "&modifiable"), 0);
          },
        });
        await t.step({
          name: "appends content of a 'foldmethod=marker' buffer",
          fn: async () => {
            await denops.cmd("enew");
            const bufnr = await fn.bufnr(denops);
            await fn.setbufvar(denops, bufnr, "&foldmethod", "marker");
            await fn.setbufvar(denops, bufnr, "&foldmarker", "{{{,}}}");
            await append(denops, bufnr, [
              "Hello {{{",
              "Darkness",
              "My }}}",
              "Old friend",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Hello {{{",
              "Darkness",
              "My }}}",
              "Old friend",
            ]);
            assertEquals(
              await fn.getbufvar(denops, bufnr, "&foldmethod"),
              "marker",
            );

            await fn.setbufvar(denops, bufnr, "&foldlevel", 0);
            await append(denops, bufnr, [
              "Joking",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Joking",
              "Hello {{{",
              "Darkness",
              "My }}}",
              "Old friend",
            ]);
            assertEquals(
              await fn.getbufvar(denops, bufnr, "&foldmethod"),
              "marker",
            );

            await fn.setbufvar(denops, bufnr, "&foldlevel", 0);
            await append(denops, bufnr, [
              "Foo",
            ], {
              lnum: 3,
            });
            assertEquals(await fn.getline(denops, 1, "$"), [
              "",
              "Joking",
              "Hello {{{",
              "Foo",
              "Darkness",
              "My }}}",
              "Old friend",
            ]);
            assertEquals(
              await fn.getbufvar(denops, bufnr, "&foldmethod"),
              "marker",
            );
          },
        });
      },
    });

    await t.step({
      name: "replace()",
      fn: async (t) => {
        await t.step({
          name: "replaces content of a buffer",
          fn: async () => {
            const bufnr = await fn.bufnr(denops);
            await replace(denops, bufnr, [
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);

            await replace(denops, bufnr, [
              "Joking",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "Joking",
            ]);
          },
        });
        await t.step({
          name: "replaces content of an 'unmodifiable' buffer",
          fn: async () => {
            const bufnr = await fn.bufnr(denops);
            await fn.setbufvar(denops, bufnr, "&modifiable", 0);
            await replace(denops, bufnr, [
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "Hello",
              "Darkness",
              "My",
              "Old friend",
            ]);
            assertEquals(await fn.getbufvar(denops, bufnr, "&modifiable"), 0);

            await replace(denops, bufnr, [
              "Joking",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "Joking",
            ]);
            assertEquals(await fn.getbufvar(denops, bufnr, "&modifiable"), 0);
          },
        });
        await t.step({
          name: "replaces content of an 'foldmethod=marker' buffer",
          fn: async () => {
            const bufnr = await fn.bufnr(denops);
            await fn.setbufvar(denops, bufnr, "&foldmethod", "marker");
            await fn.setbufvar(denops, bufnr, "&foldmarker", "{{{,}}}");
            await replace(denops, bufnr, [
              "Hello {{{",
              "Darkness",
              "My }}}",
              "Old friend",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "Hello {{{",
              "Darkness",
              "My }}}",
              "Old friend",
            ]);
            assertEquals(
              await fn.getbufvar(denops, bufnr, "&foldmethod"),
              "marker",
            );

            await fn.setbufvar(denops, bufnr, "&foldlevel", 0);
            await replace(denops, bufnr, [
              "Joking {{{1",
            ]);
            assertEquals(await fn.getline(denops, 1, "$"), [
              "Joking {{{1",
            ]);
            assertEquals(
              await fn.getbufvar(denops, bufnr, "&foldmethod"),
              "marker",
            );
          },
        });
      },
    });

    await t.step({
      name: "concrete concretes the buffer and the content become persistent",
      fn: async () => {
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
        assertEquals(await fn.getbufline(denops, bufnr, 1, "$"), [
          "Hello",
          "Darkness",
          "My",
          "Old friend",
        ]);
      },
    });

    await t.step({
      name: "ensure()",
      fn: async (t) => {
        await t.step({
          name:
            "ensures that the current buffer is specified one (buffer change)",
          fn: async () => {
            await open(denops, "Hello");
            const bufnr1 = await fn.bufnr(denops);
            await open(denops, "World");
            const bufnr2 = await fn.bufnr(denops);

            assertEquals(await fn.bufnr(denops), bufnr2);
            await ensure(denops, bufnr1, async () => {
              assertEquals(await fn.bufnr(denops), bufnr1);
            });
            assertEquals(await fn.bufnr(denops), bufnr2);

            assertEquals(await fn.bufnr(denops), bufnr2);
            await ensure(denops, bufnr2, async () => {
              assertEquals(await fn.bufnr(denops), bufnr2);
            });
            assertEquals(await fn.bufnr(denops), bufnr2);
          },
        });
        await t.step({
          name:
            "ensures that the current buffer is specified one (window change)",
          fn: async () => {
            await open(denops, "Hello");
            const bufnr1 = await fn.bufnr(denops);
            await denops.cmd("new");
            await open(denops, "World");
            const bufnr2 = await fn.bufnr(denops);

            assertEquals(await fn.bufnr(denops), bufnr2);
            await ensure(denops, bufnr1, async () => {
              assertEquals(await fn.bufnr(denops), bufnr1);
            });
            assertEquals(await fn.bufnr(denops), bufnr2);

            assertEquals(await fn.bufnr(denops), bufnr2);
            await ensure(denops, bufnr2, async () => {
              assertEquals(await fn.bufnr(denops), bufnr2);
            });
            assertEquals(await fn.bufnr(denops), bufnr2);
          },
        });
      },
    });

    await t.step({
      name: "modifiable ensures that the buffer is modifiable",
      fn: async () => {
        await denops.cmd("edit foobar");
        await denops.cmd("set nomodifiable");
        const bufnr = await fn.bufnr(denops);
        assertEquals(await denops.eval("&modifiable"), 0);
        await modifiable(denops, bufnr, async () => {
          assertEquals(await denops.eval("&modifiable"), 1);
        });
        assertEquals(await denops.eval("&modifiable"), 0);
      },
    });
  },
});
