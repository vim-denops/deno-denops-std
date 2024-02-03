import { assertEquals } from "https://deno.land/std@0.214.0/assert/mod.ts";
import { assert, is } from "https://deno.land/x/unknownutil@v3.14.1/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.6.1/mod.ts";
import * as cursor from "./cursor.ts";
import { assertPosition, assertScreenPos, isScreenPos } from "./types.ts";

test({
  mode: "all",
  name: "cursor",
  fn: async (denops, t) => {
    await t.step({
      name: "col()",
      fn: async () => {
        await denops.cmd("enew!");
        await denops.call("setline", 1, "abcdef");
        await denops.cmd("norm gg4|mx6|mY2|");

        assert(await cursor.col(denops, "."), is.Number);
        assertEquals(await cursor.col(denops, "."), 2);
        assertEquals(await cursor.col(denops, [1, 2]), 2);
        assertEquals(await cursor.col(denops, [1, "$"]), 7);
      },
    });

    await t.step({
      name: "virtcol()",
      fn: async () => {
        await denops.cmd("enew!");
        await denops.call("setline", 1, "\tab");

        assert(await cursor.virtcol(denops, "."), is.Number);
        assertEquals(await cursor.virtcol(denops, "."), 8);
        assertEquals(await cursor.virtcol(denops, [1, 1]), 8);
        assertEquals(await cursor.virtcol(denops, [1, "$"]), 11);

        await denops.cmd("set virtualedit=all");
        assertEquals(await cursor.virtcol(denops, [1, 1, 1]), 2);
      },
    });

    await t.step({
      name: "line()",
      fn: async () => {
        await denops.cmd("enew!");
        const winid = await denops.call("bufwinid", "%") as number;
        await denops.call("setline", 1, ["a", "b", "c"]);

        assert(await cursor.line(denops, "."), is.Number);
        assertEquals(await cursor.line(denops, "."), 1);
        assertEquals(await cursor.line(denops, "$"), 3);
        assert(await cursor.line(denops, ".", winid), is.Number);
        assertEquals(await cursor.line(denops, ".", winid), 1);
      },
    });

    await t.step({
      name: "wincol()",
      fn: async () => {
        await denops.cmd("enew!");
        assert(await cursor.wincol(denops), is.Number);
      },
    });

    await t.step({
      name: "winline()",
      fn: async () => {
        await denops.cmd("enew!");
        assert(await cursor.winline(denops), is.Number);
      },
    });

    await t.step({
      name: "cursor()",
      fn: async () => {
        await denops.cmd("enew!");
        assert(await cursor.cursor(denops, 1, 2), is.Number);
        assert(await cursor.cursor(denops, 1, 2, 3), is.Number);
        assert(await cursor.cursor(denops, [1, 2, 3]), is.Number);
        assert(await cursor.cursor(denops, [1, 2, 3, 4]), is.Number);
      },
    });

    await t.step({
      name: "screenpos()",
      fn: async () => {
        await denops.cmd("enew!");
        const winid = await denops.call("bufwinid", "%") as number;

        assertScreenPos(await cursor.screenpos(denops, winid, 1, 1));
        assertScreenPos(await cursor.screenpos(denops, "%", 1, 1));
        // screenpos() returns `{}` if failed
        assertEquals(
          isScreenPos(await cursor.screenpos(denops, 9999, 1, 1)),
          false,
        );
      },
    });

    await t.step({
      name: "getcurpos",
      fn: async () => {
        await denops.cmd("enew!");
        const winid = await denops.call("bufwinid", "%") as number;

        assertPosition(await cursor.getcurpos(denops));
        assertEquals(await cursor.getcurpos(denops), [0, 1, 1, 0, 1]);
        assertPosition(await cursor.getcurpos(denops, winid));
        assertEquals(await cursor.getcurpos(denops, winid), [0, 1, 1, 0, 1]);
        assertEquals(await cursor.getcurpos(denops, "%"), [0, 1, 1, 0, 1]);
        assertEquals(await cursor.getcurpos(denops, -1), [0, 0, 0, 0, 0]);
      },
    });

    await t.step({
      name: "getpos",
      fn: async () => {
        await denops.cmd("enew!");
        assertPosition(await cursor.getpos(denops, "'a"));
      },
    });

    await t.step({
      name: "setpos",
      fn: async () => {
        await denops.cmd("enew!");
        assert(
          await cursor.setpos(denops, "'b", await cursor.getpos(denops, "'a")),
          is.Number,
        );
        assert(
          await cursor.setpos(denops, "'b", await cursor.getcurpos(denops)),
          is.Number,
        );
      },
    });

    await t.step({
      name: "byte2line",
      fn: async () => {
        await denops.cmd("enew!");
        assert(await cursor.byte2line(denops, 1), is.Number);
      },
    });

    await t.step({
      name: "line2byte",
      fn: async () => {
        await denops.cmd("enew!");
        assert(await cursor.line2byte(denops, 1), is.Number);
      },
    });

    await t.step({
      name: "diff_filler()",
      fn: async () => {
        await denops.cmd("enew!");
        assert(await cursor.diff_filler(denops, 1), is.Number);
        assert(await cursor.diff_filler(denops, "."), is.Number);
      },
    });
  },
});
