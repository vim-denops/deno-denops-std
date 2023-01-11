import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { gather, GatherHelper } from "./gather.ts";

test({
  mode: "all",
  name: "gather()",
  fn: async (denops, t) => {
    await t.step({
      name: "sequentially execute 'denops.call()'.",
      fn: async () => {
        const results = await gather(denops, async (denops) => {
          await denops.call("range", 0);
          await denops.call("range", 1);
          await denops.call("range", 2);
        });
        assertEquals(results, [[], [0], [0, 1]]);
      },
    });
    await t.step({
      name: "sequentially execute 'denops.cmd()'.",
      fn: async () => {
        await denops.cmd("let g:denops_gather_test = 0");
        await denops.cmd(
          "command! DenopsGatherTest let g:denops_gather_test += 1",
        );
        const results = await gather(denops, async (denops) => {
          await denops.cmd("DenopsGatherTest");
          await denops.cmd("DenopsGatherTest");
          await denops.cmd("DenopsGatherTest");
        });
        assertEquals(results, [0, 0, 0]);
        assertEquals(await denops.eval("g:denops_gather_test") as number, 3);
      },
    });
    await t.step({
      name: "sequentially execute 'denops.eval()'.",
      fn: async () => {
        await denops.cmd("let g:denops_gather_test = 10");
        const results = await gather(denops, async (denops) => {
          await denops.eval("g:denops_gather_test + 1");
          await denops.eval("g:denops_gather_test - 1");
          await denops.eval("g:denops_gather_test * 10");
        });
        assertEquals(results, [11, 9, 100]);
      },
    });
    await t.step({
      name: "throws an error when 'denops.batch()' is called.",
      fn: async () => {
        await assertRejects(
          async () => {
            await gather(denops, async (denops) => {
              await denops.batch();
            });
          },
          "method is not available",
        );
      },
    });
    await t.step({
      name:
        "The 'helper' instance passed in gather block is NOT available outside of the block",
      fn: async () => {
        await denops.cmd("let g:denops_gather_test = 0");
        await denops.cmd(
          "command! DenopsGatherTest let g:denops_gather_test += 1",
        );

        let helper: GatherHelper;
        await gather(denops, (denops) => {
          helper = denops;
          return Promise.resolve();
        });
        await assertRejects(
          async () => {
            await helper!.call("execute", "DenopsGatherTest");
          },
          "not available outside",
        );
        await assertRejects(
          async () => {
            await helper.cmd("DenopsGatherTest");
          },
          "not available outside",
        );
        await assertRejects(
          async () => {
            const _ = await helper.eval("v:version");
          },
          "not available outside",
        );
      },
    });
    await t.step({
      name: "throws an error when 'denops.redraw()' is called.",
      fn: async () => {
        await assertRejects(
          async () => {
            await gather(denops, async (denops) => {
              await denops.redraw();
            });
          },
          "method is not available",
        );
      },
    });
  },
});
