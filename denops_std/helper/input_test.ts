import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.211.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import { input } from "./input.ts";
import { execute } from "./execute.ts";
import * as autocmd from "../autocmd/mod.ts";

test({
  mode: "all",
  name: "input()",
  fn: async (denops, t) => {
    await t.step({
      name: "returns user input text",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("Hello world!\\<CR>", "t")`,
          );
        });
        const result = await input(denops);
        assertEquals(result, "Hello world!");
      },
    });
    await t.step({
      name: "assign specified text as a default input",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define("CmdlineEnter", "*", `call feedkeys("\\<CR>", "t")`);
        });
        const result = await input(denops, {
          text: "Hello world!",
        });
        assertEquals(result, "Hello world!");
      },
    });
    await t.step({
      name: "uses specified built-in completion",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("\\<Tab>\\<CR>", "t")`,
          );
        });
        const result = await input(denops, {
          completion: "option",
        });
        assertEquals(result, "all");
      },
    });
    await t.step({
      name: "uses specified custom completion",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("\\<Tab>\\<CR>", "t")`,
          );
        });
        const result = await input(denops, {
          completion: (_arglead, _cmdline, _cursorpos) => {
            return ["Hello world!"];
          },
        });
        assertEquals(result, "Hello world!");
      },
    });
    await t.step({
      name: "uses specified custom completion (Vim script)",
      fn: async () => {
        await execute(
          denops,
          `
    function! DenopsStdFunctionInputTest(arglead, cmdline, cursorpos) abort
      return ["Hello world!"]
    endfunction
    `,
        );
        await autocmd.group(denops, "denops_std_function_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("\\<Tab>\\<CR>", "t")`,
          );
        });
        const result = await input(denops, {
          completion: "customlist,DenopsStdFunctionInputTest",
        });
        assertEquals(result, "Hello world!");
      },
    });
    await t.step({
      name: "uses specified custom completion (TypeScript)",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("\\<Tab>\\<CR>", "t")`,
          );
        });
        const result = await input(denops, {
          completion: (_arglead, _cmdline, _cursorpos) => {
            return ["Hello world!"];
          },
        });
        assertEquals(result, "Hello world!");
      },
    });
    await t.step({
      name: "throws an error when invalid completion is specified",
      fn: async () => {
        await assertRejects(
          async () => {
            await input(denops, { completion: "custom:Invalid" });
          },
          "Invalid completion",
        );
      },
    });
  },
});

test({
  // XXX: This test does not work properly on Vim
  mode: "nvim",
  name: "returns `null` when <Esc> is pressed",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_helper_input", (helper) => {
      helper.remove("*");
      helper.define(
        "CmdlineEnter",
        "*",
        `call timer_start(0, { -> feedkeys("Hello world!\\<Esc>", "t") })`,
      );
    });
    const result = await input(denops);
    assertEquals(result, null);
  },
});

test({
  // XXX: This test does not work properly on Vim
  mode: "nvim",
  name: "returns `null` when <C-c> is pressed",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_helper_input", (helper) => {
      helper.remove("*");
      helper.define(
        "CmdlineEnter",
        "*",
        `call feedkeys("Hello world!\\<C-c>", "t")`,
      );
    });
    const result = await input(denops);
    assertEquals(result, null);
  },
});
