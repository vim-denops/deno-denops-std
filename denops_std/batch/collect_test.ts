import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.205.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import type { Denops } from "https://deno.land/x/denops_core@v5.0.0/mod.ts";
import { collect } from "./collect.ts";

test({
  mode: "all",
  name: "collect()",
  fn: async (denops, t) => {
    await t.step({
      name: "sequentially execute 'denops.call()'.",
      fn: async () => {
        const results = await collect(denops, (denops) => [
          denops.call("range", 0),
          denops.call("range", 1),
          denops.call("range", 2),
        ]);
        assertEquals(results, [[], [0], [0, 1]]);
      },
    });
    await t.step({
      name: "throws an error when 'denops.cmd()' is called.",
      fn: async () => {
        await assertRejects(
          async () => {
            await collect(denops, (denops) => [
              denops.cmd("echo 'hello'"),
            ]);
          },
          "method is not available",
        );
      },
    });
    await t.step({
      name: "sequentially execute 'denops.eval()'.",
      fn: async () => {
        await denops.cmd("let g:denops_collect_test = 10");
        const results = await collect(denops, (denops) => [
          denops.eval("g:denops_collect_test + 1"),
          denops.eval("g:denops_collect_test - 1"),
          denops.eval("g:denops_collect_test * 10"),
        ]);
        assertEquals(results, [11, 9, 100]);
      },
    });
    await t.step({
      name: "throws an error when 'denops.batch()' is called.",
      fn: async () => {
        await assertRejects(
          async () => {
            await collect(denops, (denops) => [
              denops.batch(),
            ]);
          },
          "method is not available",
        );
      },
    });
    await t.step({
      name:
        "The 'helper' instance passed in collect block is NOT available outside of the block",
      fn: async () => {
        await denops.cmd("let g:denops_collect_test = 0");
        await denops.cmd(
          "command! DenopsCollectTest let g:denops_collect_test += 1",
        );

        let helper: Denops;
        await collect(denops, (denops) => {
          helper = denops;
          return [];
        });
        await assertRejects(
          async () => {
            await helper!.call("execute", "DenopsCollectTest");
          },
          "not available outside",
        );
        await assertRejects(
          async () => {
            await helper.cmd("DenopsCollectTest");
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
            await collect(denops, (denops) => [
              denops.redraw(),
            ]);
          },
          "method is not available",
        );
      },
    });
  },
});
