import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from "https://deno.land/std@0.171.0/testing/mock.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { batch, BatchHelper } from "./batch.ts";

test({
  mode: "all",
  name: "batch()",
  fn: async (denops, t) => {
    await t.step({
      name: "sequentially execute 'denops.call()' as batch process.",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await denops.cmd(
          "command! -nargs=1 DenopsBatchTest let g:denops_batch_test += [<f-args>]",
        );
        await batch(denops, async (denops) => {
          assertEquals(
            await denops.call("execute", "DenopsBatchTest 1"),
            undefined,
          );
          assertEquals(
            await denops.call("execute", "DenopsBatchTest 2"),
            undefined,
          );
          assertEquals(
            await denops.call("execute", "DenopsBatchTest 3"),
            undefined,
          );
        });
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "2",
          "3",
        ]);
      },
    });
    await t.step({
      name: "sequentially execute 'denops.cmd()' as batch process.",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await denops.cmd(
          "command! -nargs=1 DenopsBatchTest let g:denops_batch_test += [<f-args>]",
        );
        await batch(denops, async (denops) => {
          assertEquals(await denops.cmd("DenopsBatchTest 1"), undefined);
          assertEquals(await denops.cmd("DenopsBatchTest 2"), undefined);
          assertEquals(await denops.cmd("DenopsBatchTest 3"), undefined);
        });
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "2",
          "3",
        ]);
      },
    });
    await t.step({
      name: "sequentially execute 'denops.eval()' as batch process.",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await batch(denops, async (denops) => {
          assertEquals(
            await denops.eval("add(g:denops_batch_test, string(1))"),
            undefined,
          );
          assertEquals(
            await denops.eval("add(g:denops_batch_test, string(2))"),
            undefined,
          );
          assertEquals(
            await denops.eval("add(g:denops_batch_test, string(3))"),
            undefined,
          );
        });
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "2",
          "3",
        ]);
      },
    });
    await t.step({
      name: "sequentially execute nested 'batch()' as batch process.",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await denops.cmd(
          "command! -nargs=1 DenopsBatchTest let g:denops_batch_test += [<f-args>]",
        );
        await batch(denops, async (denops) => {
          assertEquals(
            await denops.call("execute", "DenopsBatchTest 1"),
            undefined,
          );
          assertEquals(
            await denops.call("execute", "DenopsBatchTest 2"),
            undefined,
          );
          await batch(denops, async (denops) => {
            assertEquals(await denops.cmd("DenopsBatchTest 3"), undefined);
            assertEquals(await denops.cmd("DenopsBatchTest 4"), undefined);
            await batch(denops, async (denops) => {
              assertEquals(
                await denops.eval("add(g:denops_batch_test, string(5))"),
                undefined,
              );
              assertEquals(
                await denops.eval("add(g:denops_batch_test, string(6))"),
                undefined,
              );
              assertEquals(
                await denops.eval("add(g:denops_batch_test, string(7))"),
                undefined,
              );
            });
            assertEquals(await denops.cmd("DenopsBatchTest 8"), undefined);
          });
          assertEquals(
            await denops.call("execute", "DenopsBatchTest 9"),
            undefined,
          );
        });
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ]);
      },
    });
    await t.step({
      name:
        "The 'helper' instance passed in batch block is available outside of the block",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await denops.cmd(
          "command! -nargs=1 DenopsBatchTest let g:denops_batch_test += [<f-args>]",
        );

        let helper: BatchHelper;
        await batch(denops, (denops) => {
          helper = denops;
          return Promise.resolve();
        });
        await helper!.call("execute", "DenopsBatchTest 1");
        await helper!.batch(["execute", "DenopsBatchTest 1"]);
        await helper!.cmd("DenopsBatchTest 1");
        assertEquals(
          await helper!.eval("add(g:denops_batch_test, string(1))"),
          ["1", "1", "1", "1"],
        );
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "1",
          "1",
          "1",
        ]);
      },
    });
    await t.step({
      name:
        "invokes 'redraw()' only once after the batch is actually executed.",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await denops.cmd(
          "command! -nargs=1 DenopsBatchTest let g:denops_batch_test += [<f-args>]",
        );
        const redrawSpy = spy(denops, "redraw");
        try {
          await batch(denops, async (denops) => {
            assertEquals(
              await denops.call("execute", "DenopsBatchTest 1"),
              undefined,
            );
            await denops.redraw();
            assertEquals(
              await denops.call("execute", "DenopsBatchTest 2"),
              undefined,
            );
            await denops.redraw();
            assertEquals(
              await denops.call("execute", "DenopsBatchTest 3"),
              undefined,
            );
            await denops.redraw();
          });
        } finally {
          redrawSpy.restore();
        }
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "2",
          "3",
        ]);
        assertSpyCalls(redrawSpy, 1);
        assertSpyCall(redrawSpy, 0, {
          args: [false],
        });
      },
    });
    await t.step({
      name:
        "invokes 'redraw(true)' only once after the batch is actually executed.",
      fn: async () => {
        await denops.cmd("let g:denops_batch_test = []");
        await denops.cmd(
          "command! -nargs=1 DenopsBatchTest let g:denops_batch_test += [<f-args>]",
        );
        const redrawSpy = spy(denops, "redraw");
        try {
          await batch(denops, async (denops) => {
            assertEquals(
              await denops.call("execute", "DenopsBatchTest 1"),
              undefined,
            );
            await denops.redraw();
            assertEquals(
              await denops.call("execute", "DenopsBatchTest 2"),
              undefined,
            );
            await denops.redraw(true);
            assertEquals(
              await denops.call("execute", "DenopsBatchTest 3"),
              undefined,
            );
            await denops.redraw();
          });
        } finally {
          redrawSpy.restore();
        }
        assertEquals(await denops.eval("g:denops_batch_test") as string[], [
          "1",
          "2",
          "3",
        ]);
        assertSpyCalls(redrawSpy, 1);
        assertSpyCall(redrawSpy, 0, {
          args: [true],
        });
      },
    });
  },
});
