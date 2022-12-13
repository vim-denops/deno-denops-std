import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { test } from "../test/mod.ts";
import * as anonymous from "./mod.ts";

test({
  mode: "all",
  name: "add() registers anonymous functions",
  fn: async (denops) => {
    const ids = anonymous.add(
      denops,
      () => Promise.resolve("0"),
      () => Promise.resolve("1"),
      () => Promise.resolve("2"),
    );
    assertEquals(await denops.dispatch(denops.name, ids[0]), "0");
    assertEquals(await denops.dispatch(denops.name, ids[1]), "1");
    assertEquals(await denops.dispatch(denops.name, ids[2]), "2");
    assertEquals(await denops.dispatch(denops.name, ids[0]), "0");
    assertEquals(await denops.dispatch(denops.name, ids[1]), "1");
    assertEquals(await denops.dispatch(denops.name, ids[2]), "2");
  },
});

test({
  mode: "all",
  name: "once() registers oneshot anonymous functions",
  fn: async (denops) => {
    const ids = anonymous.once(
      denops,
      () => Promise.resolve("0"),
      () => Promise.resolve("1"),
      () => Promise.resolve("2"),
    );
    assertEquals(await denops.dispatch(denops.name, ids[0]), "0");
    assertEquals(await denops.dispatch(denops.name, ids[1]), "1");
    assertEquals(await denops.dispatch(denops.name, ids[2]), "2");

    // The method will be removed
    await assertRejects(
      async () => {
        await denops.dispatch(denops.name, ids[0]);
      },
      `No method '${ids[0]}' exists`,
    );
    await assertRejects(
      async () => {
        await denops.dispatch(denops.name, ids[1]);
      },
      `No method '${ids[1]}' exists`,
    );
    await assertRejects(
      async () => {
        await denops.dispatch(denops.name, ids[2]);
      },
      `No method '${ids[2]}' exists`,
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});

test({
  mode: "all",
  name: "remove() unregisters anonymous functions identified by ids",
  fn: async (denops) => {
    const ids = anonymous.add(
      denops,
      () => Promise.resolve("0"),
      () => Promise.resolve("1"),
      () => Promise.resolve("2"),
    );
    assertEquals(anonymous.remove(denops, ...ids), [true, true, true]);

    // The method is removed
    await assertRejects(
      async () => {
        await denops.dispatch(denops.name, ids[0]);
      },
      `No method '${ids[0]}' exists`,
    );
    await assertRejects(
      async () => {
        await denops.dispatch(denops.name, ids[1]);
      },
      `No method '${ids[1]}' exists`,
    );
    await assertRejects(
      async () => {
        await denops.dispatch(denops.name, ids[2]);
      },
      `No method '${ids[2]}' exists`,
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});
