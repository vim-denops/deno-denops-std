import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.0.2/test/mod.ts";
import { execute } from "./execute.ts";

test({
  mode: "any",
  name: "execute() executes Vim script",
  fn: async (denops) => {
    await execute(denops, "let g:denops_std_execute_test = 1");
    assertEquals(await denops.eval("g:denops_std_execute_test") as number, 1);
  },
});

test({
  mode: "any",
  name: "execute() executes multi-line Vim script",
  fn: async (denops) => {
    await execute(
      denops,
      `
      let g:denops_std_execute_test = 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
    `,
    );
    assertEquals(await denops.eval("g:denops_std_execute_test") as number, 4);
  },
});

test({
  mode: "any",
  name: "execute() executes multi-line Vim script but stop on errors",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        await execute(
          denops,
          `
        let g:denops_std_execute_test = 1
        let g:denops_std_execute_test = g:denops_std_execute_test + 1
        throw "This is expected error"
        let g:denops_std_execute_test = g:denops_std_execute_test + 1
        let g:denops_std_execute_test = g:denops_std_execute_test + 1
      `,
        );
      },
      undefined,
      "This is expected error",
    );
    assertEquals(await denops.eval("g:denops_std_execute_test") as number, 2);
  },
});

test({
  mode: "any",
  name: "execute() executes multi-line Vim script with given context",
  fn: async (denops) => {
    await execute(
      denops,
      `
      let g:denops_std_execute_test = value1
      let g:denops_std_execute_test = g:denops_std_execute_test + l:value2
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
    `,
      {
        value1: 11,
        value2: 12,
        value3: 13,
      },
    );
    assertEquals(await denops.eval("g:denops_std_execute_test") as number, 25);
  },
});
