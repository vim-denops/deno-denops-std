import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.3.0/test/mod.ts";
import * as fn from "../function/mod.ts";
import { batch } from "./batch.ts";

test({
  mode: "any",
  name: "batch() sequentially execute 'helper.call()' as batch process.",
  fn: async (denops) => {
    const results = await batch(denops, (helper) => {
      helper.call("range", 0);
      helper.call("range", 1);
      helper.call("range", 2);
    });
    assertEquals(results, [[], [0], [0, 1]]);
  },
});
test({
  mode: "any",
  name: "batch() sequentially execute 'helper.cmd()' as batch process.",
  fn: async (denops) => {
    await denops.cmd("let g:denops_batch_test = 0");
    await denops.cmd("command! DenopsBatchTest let g:denops_batch_test += 1");
    const results = await batch(denops, (helper) => {
      helper.cmd("DenopsBatchTest");
      helper.cmd("DenopsBatchTest");
      helper.cmd("DenopsBatchTest");
    });
    assertEquals(results, [0, 0, 0]);
    assertEquals(await denops.eval("g:denops_batch_test") as number, 3);
  },
});
test({
  mode: "any",
  name: "batch() sequentially execute 'helper.eval()' as batch process.",
  fn: async (denops) => {
    await denops.cmd("let g:denops_batch_test = 10");
    const results = await batch(denops, (helper) => {
      helper.eval("g:denops_batch_test + 1");
      helper.eval("g:denops_batch_test - 1");
      helper.eval("g:denops_batch_test * 10");
    });
    assertEquals(results, [11, 9, 100]);
  },
});
test({
  mode: "any",
  name: "batch() sequentially execute 'fn.XXX(helper, ...)' as batch process.",
  fn: async (denops) => {
    const results = await batch(denops, (helper) => {
      fn.range(helper, 0);
      fn.range(helper, 1);
      fn.range(helper, 2);
    });
    assertEquals(results, [[], [0], [0, 1]]);
  },
});

test({
  mode: "any",
  name:
    "batch() sequentially execute 'helper.call()' as batch process (async).",
  fn: async (denops) => {
    const results = await batch(denops, async (helper) => {
      assertEquals(await helper.call("range", 0), undefined);
      assertEquals(await helper.call("range", 1), undefined);
      assertEquals(await helper.call("range", 2), undefined);
    });
    assertEquals(results, [[], [0], [0, 1]]);
  },
});
test({
  mode: "any",
  name: "batch() sequentially execute 'helper.cmd()' as batch process (async).",
  fn: async (denops) => {
    await denops.cmd("let g:denops_batch_test = 0");
    await denops.cmd("command! DenopsBatchTest let g:denops_batch_test += 1");
    const results = await batch(denops, async (helper) => {
      assertEquals(await helper.cmd("DenopsBatchTest"), undefined);
      assertEquals(await helper.cmd("DenopsBatchTest"), undefined);
      assertEquals(await helper.cmd("DenopsBatchTest"), undefined);
    });
    assertEquals(results, [0, 0, 0]);
    assertEquals(await denops.eval("g:denops_batch_test") as number, 3);
  },
});
test({
  mode: "any",
  name:
    "batch() sequentially execute 'helper.eval()' as batch process (async).",
  fn: async (denops) => {
    await denops.cmd("let g:denops_batch_test = 10");
    const results = await batch(denops, async (helper) => {
      assertEquals(await helper.eval("g:denops_batch_test + 1"), undefined);
      assertEquals(await helper.eval("g:denops_batch_test - 1"), undefined);
      assertEquals(await helper.eval("g:denops_batch_test * 10"), undefined);
    });
    assertEquals(results, [11, 9, 100]);
  },
});
test({
  mode: "any",
  name:
    "batch() sequentially execute 'fn.XXX(helper, ...)' as batch process (async).",
  fn: async (denops) => {
    const results = await batch(denops, async (helper) => {
      assertEquals(await fn.range(helper, 0), undefined);
      assertEquals(await fn.range(helper, 1), undefined);
      assertEquals(await fn.range(helper, 2), undefined);
    });
    assertEquals(results, [[], [0], [0, 1]]);
  },
});
