import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.151.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.1.0/test/mod.ts";
import { input } from "./input.ts";
import { execute } from "./execute.ts";
import * as autocmd from "../autocmd/mod.ts";

test({
  mode: "all",
  name: "input() returns user input text",
  fn: async (denops) => {
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
test({
  mode: "all",
  name: "input() assign specified text as a default input",
  fn: async (denops) => {
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
test({
  mode: "all",
  name: "input() uses specified built-in completion",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_helper_input", (helper) => {
      helper.remove("*");
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<Tab>\\<CR>", "t")`);
    });
    const result = await input(denops, {
      completion: "option",
    });
    assertEquals(result, "all");
  },
});
test({
  mode: "all",
  name: "input() uses specified custom completion",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_helper_input", (helper) => {
      helper.remove("*");
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<Tab>\\<CR>", "t")`);
    });
    const result = await input(denops, {
      completion: (_arglead, _cmdline, _cursorpos) => {
        return ["Hello world!"];
      },
    });
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "input() uses specified custom completion (Vim script)",
  fn: async (denops) => {
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
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<Tab>\\<CR>", "t")`);
    });
    const result = await input(denops, {
      completion: "customlist,DenopsStdFunctionInputTest",
    });
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "input() uses specified custom completion (TypeScript)",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_helper_input", (helper) => {
      helper.remove("*");
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<Tab>\\<CR>", "t")`);
    });
    const result = await input(denops, {
      completion: (_arglead, _cmdline, _cursorpos) => {
        return ["Hello world!"];
      },
    });
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "input() throws an error when invalid completion is specified",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        await input(denops, { completion: "custom:Invalid" });
      },
      "Invalid completion",
    );
  },
});
test({
  mode: "all",
  name: "input() returns `null` when <Esc> is pressed",
  fn: async (denops) => {
    // XXX
    if (denops.meta.host === "vim") {
      console.warn("Skip while the test does not work properly on Vim");
      return;
    }
    await autocmd.group(denops, "denops_std_helper_input", (helper) => {
      helper.remove("*");
      helper.define(
        "CmdlineEnter",
        "*",
        `call feedkeys("Hello world!\\<Esc>", "t")`,
      );
    });
    const result = await input(denops);
    assertEquals(result, null);
  },
});
test({
  mode: "all",
  name: "input() returns `null` when <C-c> is pressed",
  fn: async (denops) => {
    // XXX
    if (denops.meta.host === "vim") {
      console.warn("Skip while the test does not work properly on Vim");
      return;
    }
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
