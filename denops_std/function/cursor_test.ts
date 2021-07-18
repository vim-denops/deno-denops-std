import * as cursor from "./cursor.ts";
import { assertEquals } from "../deps_test.ts";
import { ensureNumber } from "../deps.ts";
import { ensurePosition, ensureScreenPos, isScreenPos } from "./types.ts";
import { test } from "../deps_test.ts";

test({
  mode: "all",
  name: "col()",
  fn: async (denops) => {
    await denops.call("setline", 1, "abcdef");
    await denops.cmd("norm gg4|mx6|mY2|");

    ensureNumber(await cursor.col(denops, "."));
    assertEquals(await cursor.col(denops, "."), 2);
    assertEquals(await cursor.col(denops, [1, 2]), 2);
    assertEquals(await cursor.col(denops, [1, "$"]), 7);
  },
});

test({
  mode: "all",
  name: "virtcol()",
  fn: async (denops) => {
    await denops.call("setline", 1, "\tab");

    ensureNumber(await cursor.virtcol(denops, "."));
    assertEquals(await cursor.virtcol(denops, "."), 8);
    assertEquals(await cursor.virtcol(denops, [1, 1]), 8);
    assertEquals(await cursor.virtcol(denops, [1, "$"]), 11);

    await denops.cmd("set virtualedit=all");
    assertEquals(await cursor.virtcol(denops, [1, 1, 1]), 2);
  },
});

test({
  mode: "all",
  name: "line()",
  fn: async (denops) => {
    await denops.call("setline", 1, ["a", "b", "c"]);
    ensureNumber(await cursor.line(denops, "."));
    assertEquals(await cursor.line(denops, "."), 1);
    assertEquals(await cursor.line(denops, "$"), 3);
  },
});

test({
  mode: "all",
  name: "wincol()",
  fn: async (denops) => {
    ensureNumber(await cursor.wincol(denops));
  },
});

test({
  mode: "all",
  name: "winline()",
  fn: async (denops) => {
    ensureNumber(await cursor.winline(denops));
  },
});

test({
  mode: "all",
  name: "cursor()",
  fn: async (denops) => {
    ensureNumber(await cursor.cursor(denops, 1, 2));
    ensureNumber(await cursor.cursor(denops, 1, 2, 3));
    ensureNumber(await cursor.cursor(denops, [1, 2, 3]));
    ensureNumber(await cursor.cursor(denops, [1, 2, 3, 4]));
  },
});

test({
  mode: "all",
  name: "screenpos()",
  fn: async (denops) => {
    ensureScreenPos(await cursor.screenpos(denops, "%", 1, 1));
    // screenpos() returns `{}` if failed
    assertEquals(
      isScreenPos(await cursor.screenpos(denops, 9999, 1, 1)),
      false,
    );
  },
});

test({
  mode: "all",
  name: "getpos",
  fn: async (denops) => {
    ensurePosition(await cursor.getpos(denops, "'a"));
  },
});

test({
  mode: "all",
  name: "setpos",
  fn: async (denops) => {
    ensureNumber(
      await cursor.setpos(denops, "'b", await cursor.getpos(denops, "'a")),
    );
    ensureNumber(await cursor.setpos(denops, "'b", [0, 0, 0, 0, 0]));
  },
});

test({
  mode: "all",
  name: "byte2line",
  fn: async (denops) => {
    ensureNumber(await cursor.byte2line(denops, 1));
  },
});

test({
  mode: "all",
  name: "line2byte",
  fn: async (denops) => {
    ensureNumber(await cursor.line2byte(denops, 1));
  },
});

test({
  mode: "all",
  name: "diff_filler()",
  fn: async (denops) => {
    ensureNumber(await cursor.diff_filler(denops, 1));
    ensureNumber(await cursor.diff_filler(denops, "."));
  },
});
