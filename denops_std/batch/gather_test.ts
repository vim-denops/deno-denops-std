import { assertEquals, assertThrowsAsync, test } from "../deps_test.ts";
import { gather } from "./gather.ts";

test({
  mode: "any",
  name: "gather() sequentially execute 'denops.call()'.",
  fn: async (denops) => {
    const results = await gather(denops, async (denops) => {
      await denops.call("range", 0);
      await denops.call("range", 1);
      await denops.call("range", 2);
    });
    assertEquals(results, [[], [0], [0, 1]]);
  },
});
test({
  mode: "any",
  name: "gather() sequentially execute 'denops.cmd()'.",
  fn: async (denops) => {
    await denops.cmd("let g:denops_gather_test = 0");
    await denops.cmd("command! DenopsGatherTest let g:denops_gather_test += 1");
    const results = await gather(denops, async (denops) => {
      await denops.cmd("DenopsGatherTest");
      await denops.cmd("DenopsGatherTest");
      await denops.cmd("DenopsGatherTest");
    });
    assertEquals(results, [0, 0, 0]);
    assertEquals(await denops.eval("g:denops_gather_test") as number, 3);
  },
});
test({
  mode: "any",
  name: "gather() sequentially execute 'denops.eval()'.",
  fn: async (denops) => {
    await denops.cmd("let g:denops_gather_test = 10");
    const results = await gather(denops, async (denops) => {
      await denops.eval("g:denops_gather_test + 1");
      await denops.eval("g:denops_gather_test - 1");
      await denops.eval("g:denops_gather_test * 10");
    });
    assertEquals(results, [11, 9, 100]);
  },
});
test({
  mode: "any",
  name: "gather() throws an error when 'denops.batch()' is called.",
  fn: async (denops) => {
    await assertThrowsAsync(
      async () => {
        await gather(denops, async (denops) => {
          await denops.batch();
        });
      },
      undefined,
      "method is not available",
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});
