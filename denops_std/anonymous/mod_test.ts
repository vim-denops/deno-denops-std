import { assertEquals, assertThrowsAsync } from "../deps_test.ts";
import { test } from "../deps_test.ts";
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
    await assertThrowsAsync(
      async () => {
        await denops.dispatch(denops.name, ids[0]);
      },
      undefined,
      `No method '${ids[0]}' exists`,
    );
    await assertThrowsAsync(
      async () => {
        await denops.dispatch(denops.name, ids[1]);
      },
      undefined,
      `No method '${ids[1]}' exists`,
    );
    await assertThrowsAsync(
      async () => {
        await denops.dispatch(denops.name, ids[2]);
      },
      undefined,
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
    await assertThrowsAsync(
      async () => {
        await denops.dispatch(denops.name, ids[0]);
      },
      undefined,
      `No method '${ids[0]}' exists`,
    );
    await assertThrowsAsync(
      async () => {
        await denops.dispatch(denops.name, ids[1]);
      },
      undefined,
      `No method '${ids[1]}' exists`,
    );
    await assertThrowsAsync(
      async () => {
        await denops.dispatch(denops.name, ids[2]);
      },
      undefined,
      `No method '${ids[2]}' exists`,
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});
