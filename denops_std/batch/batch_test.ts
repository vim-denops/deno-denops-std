import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.2.0/test/mod.ts";
import { batch, BatchHelper } from "./batch.ts";

test({
  mode: "any",
  name: "batch() sequentially execute 'denops.call()' as batch process.",
  fn: async (denops) => {
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
test({
  mode: "any",
  name: "batch() sequentially execute 'denops.cmd()' as batch process.",
  fn: async (denops) => {
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
test({
  mode: "any",
  name: "batch() sequentially execute 'denops.eval()' as batch process.",
  fn: async (denops) => {
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
test({
  mode: "any",
  name: "batch() sequentially execute nested 'batch()' as batch process.",
  fn: async (denops) => {
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
test({
  mode: "any",
  name:
    "The 'helper' instance passed in batch block is available outside of the block",
  fn: async (denops) => {
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
