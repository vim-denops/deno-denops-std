import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { assertNumber } from "https://deno.land/x/unknownutil@v2.1.1/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.3.1/mod.ts";
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

        assertNumber(await cursor.col(denops, "."));
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

        assertNumber(await cursor.virtcol(denops, "."));
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

        assertNumber(await cursor.line(denops, "."));
        assertEquals(await cursor.line(denops, "."), 1);
        assertEquals(await cursor.line(denops, "$"), 3);
        assertNumber(await cursor.line(denops, ".", winid));
        assertEquals(await cursor.line(denops, ".", winid), 1);
      },
    });

    await t.step({
      name: "wincol()",
      fn: async () => {
        await denops.cmd("enew!");
        assertNumber(await cursor.wincol(denops));
      },
    });

    await t.step({
      name: "winline()",
      fn: async () => {
        await denops.cmd("enew!");
        assertNumber(await cursor.winline(denops));
      },
    });

    await t.step({
      name: "cursor()",
      fn: async () => {
        await denops.cmd("enew!");
        assertNumber(await cursor.cursor(denops, 1, 2));
        assertNumber(await cursor.cursor(denops, 1, 2, 3));
        assertNumber(await cursor.cursor(denops, [1, 2, 3]));
        assertNumber(await cursor.cursor(denops, [1, 2, 3, 4]));
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
        assertNumber(
          await cursor.setpos(denops, "'b", await cursor.getpos(denops, "'a")),
        );
        assertNumber(
          await cursor.setpos(denops, "'b", await cursor.getcurpos(denops)),
        );
      },
    });

    await t.step({
      name: "byte2line",
      fn: async () => {
        await denops.cmd("enew!");
        assertNumber(await cursor.byte2line(denops, 1));
      },
    });

    await t.step({
      name: "line2byte",
      fn: async () => {
        await denops.cmd("enew!");
        assertNumber(await cursor.line2byte(denops, 1));
      },
    });

    await t.step({
      name: "diff_filler()",
      fn: async () => {
        await denops.cmd("enew!");
        assertNumber(await cursor.diff_filler(denops, 1));
        assertNumber(await cursor.diff_filler(denops, "."));
      },
    });
  },
});
