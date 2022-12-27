import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { assertNumber } from "https://deno.land/x/unknownutil@v2.1.0/mod.ts";
import { test } from "../test/mod.ts";
import * as cursor from "./cursor.ts";
import { assertPosition, assertScreenPos, isScreenPos } from "./types.ts";

test({
  mode: "all",
  name: "col()",
  fn: async (denops) => {
    await denops.call("setline", 1, "abcdef");
    await denops.cmd("norm gg4|mx6|mY2|");

    assertNumber(await cursor.col(denops, "."));
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

    assertNumber(await cursor.virtcol(denops, "."));
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
    assertNumber(await cursor.line(denops, "."));
    assertEquals(await cursor.line(denops, "."), 1);
    assertEquals(await cursor.line(denops, "$"), 3);
  },
});

test({
  mode: "all",
  name: "wincol()",
  fn: async (denops) => {
    assertNumber(await cursor.wincol(denops));
  },
});

test({
  mode: "all",
  name: "winline()",
  fn: async (denops) => {
    assertNumber(await cursor.winline(denops));
  },
});

test({
  mode: "all",
  name: "cursor()",
  fn: async (denops) => {
    assertNumber(await cursor.cursor(denops, 1, 2));
    assertNumber(await cursor.cursor(denops, 1, 2, 3));
    assertNumber(await cursor.cursor(denops, [1, 2, 3]));
    assertNumber(await cursor.cursor(denops, [1, 2, 3, 4]));
  },
});

test({
  mode: "all",
  name: "screenpos()",
  fn: async (denops) => {
    assertScreenPos(await cursor.screenpos(denops, "%", 1, 1));
    // screenpos() returns `{}` if failed
    assertEquals(
      isScreenPos(await cursor.screenpos(denops, 9999, 1, 1)),
      false,
    );
  },
});

test({
  mode: "all",
  name: "getcurpos",
  fn: async (denops) => {
    assertPosition(await cursor.getcurpos(denops));
  },
});

test({
  mode: "all",
  name: "getpos",
  fn: async (denops) => {
    assertPosition(await cursor.getpos(denops, "'a"));
  },
});

test({
  mode: "all",
  name: "setpos",
  fn: async (denops) => {
    assertNumber(
      await cursor.setpos(denops, "'b", await cursor.getpos(denops, "'a")),
    );
    assertNumber(
      await cursor.setpos(denops, "'b", await cursor.getcurpos(denops)),
    );
  },
});

test({
  mode: "all",
  name: "byte2line",
  fn: async (denops) => {
    assertNumber(await cursor.byte2line(denops, 1));
  },
});

test({
  mode: "all",
  name: "line2byte",
  fn: async (denops) => {
    assertNumber(await cursor.line2byte(denops, 1));
  },
});

test({
  mode: "all",
  name: "diff_filler()",
  fn: async (denops) => {
    assertNumber(await cursor.diff_filler(denops, 1));
    assertNumber(await cursor.diff_filler(denops, "."));
  },
});
