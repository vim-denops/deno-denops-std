import {
  assertEquals,
  assertInstanceOf,
  assertRejects,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { execute } from "./execute.ts";

test({
  mode: "all",
  name: "execute()",
  fn: async (denops, t) => {
    await t.step({
      name: "executes Vim script",
      fn: async () => {
        await execute(denops, "let g:denops_std_execute_test = 1");
        assertEquals(
          await denops.eval("g:denops_std_execute_test") as number,
          1,
        );
      },
    });

    await t.step({
      name: "executes multi-line Vim script",
      fn: async () => {
        await execute(
          denops,
          `
      let g:denops_std_execute_test = 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
      let g:denops_std_execute_test = g:denops_std_execute_test + 1
    `,
        );
        assertEquals(
          await denops.eval("g:denops_std_execute_test") as number,
          4,
        );
      },
    });

    await t.step({
      name: "executes multi-line Vim script but stop on errors",
      fn: async () => {
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
          "This is expected error",
        );
        assertEquals(
          await denops.eval("g:denops_std_execute_test") as number,
          2,
        );
      },
    });

    await t.step({
      name: "executes multi-line Vim script with given context",
      fn: async () => {
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
        assertEquals(
          await denops.eval("g:denops_std_execute_test") as number,
          25,
        );
      },
    });

    await t.step({
      name: "executes Vim script with line-continuation",
      fn: async () => {
        await execute(
          denops,
          `
      let g:denops_std_execute_test = 1
            \\ + 1
      `,
        );
        assertEquals(
          await denops.eval("g:denops_std_execute_test") as number,
          2,
        );
      },
    });

    await t.step({
      name: "executes Vim script with trailing spaces",
      fn: async () => {
        try {
          await execute(denops, "setlocal path=foo\\\\\\ ");
          assertEquals(await denops.eval("&l:path") as string, "foo\\ ");
        } finally {
          await denops.cmd("setlocal path&");
        }
      },
    });

    await t.step({
      name: "returns Promise<void>",
      fn: async () => {
        const actual = execute(denops, "let g:denops_std_execute_test = 1");
        assertInstanceOf(actual, Promise);
        assertEquals(await actual, undefined);
      },
    });
  },
});
