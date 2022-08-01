import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.150.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.1.0/test/mod.ts";
import { input, inputlist, inputsecret } from "./input.ts";
import * as autocmd from "../autocmd/mod.ts";
import { execute } from "../helper/execute.ts";

test({
  mode: "all",
  name: "input() returns user input text",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_function_input", (helper) => {
      helper.remove("*");
      helper.define(
        "CmdlineEnter",
        "*",
        `call feedkeys("Hello world!\\<CR>", "t")`,
      );
    });
    const result = await input(denops, "Test: ");
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "input() assign specified text as a default input",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_function_input", (helper) => {
      helper.remove("*");
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<CR>", "t")`);
    });
    const result = await input(denops, "Test: ", "Hello world!");
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "input() uses specified built-in completion",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_function_input", (helper) => {
      helper.remove("*");
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<Tab>\\<CR>", "t")`);
    });
    const result = await input(denops, "Test: ", "", "option");
    assertEquals(result, "all");
  },
});
test({
  mode: "all",
  name: "input() uses specified custom completion",
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
    const result = await input(
      denops,
      "Test: ",
      "",
      "customlist,DenopsStdFunctionInputTest",
    );
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "input() throws an error when invalid completion is specified",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        await input(denops, "Test: ", "", "custom:Invalid");
      },
      "Invalid completion",
    );
  },
});

test({
  ignore: true, // It seems `feedkeys` tech does not work properly on `inputlist`
  mode: "all",
  name: "inputlist() returns user input number",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_function_input", (helper) => {
      helper.remove("*");
      helper.define(
        "CmdlineEnter",
        "*",
        `call feedkeys("2\\<CR>", "t")`,
      );
    });
    const result = await inputlist(denops, ["A", "B", "C"]);
    assertEquals(result, 2);
  },
});

test({
  mode: "all",
  name: "inputsecret() returns user input text",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_function_input", (helper) => {
      helper.remove("*");
      helper.define(
        "CmdlineEnter",
        "*",
        `call feedkeys("Hello world!\\<CR>", "t")`,
      );
    });
    const result = await inputsecret(denops, "Test: ");
    assertEquals(result, "Hello world!");
  },
});
test({
  mode: "all",
  name: "inputsecret() assign specified text as a default input",
  fn: async (denops) => {
    await autocmd.group(denops, "denops_std_function_input", (helper) => {
      helper.remove("*");
      helper.define("CmdlineEnter", "*", `call feedkeys("\\<CR>", "t")`);
    });
    const result = await inputsecret(denops, "Test: ", "Hello world!");
    assertEquals(result, "Hello world!");
  },
});
