import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.210.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.5.1/mod.ts";
import { input, inputlist, inputsecret } from "./input.ts";
import * as autocmd from "../autocmd/mod.ts";
import { execute } from "../helper/execute.ts";

test({
  mode: "all",
  name: "input",
  fn: async (denops, t) => {
    await t.step({
      name: "input()",
      fn: async (t) => {
        await t.step({
          name: "returns user input text",
          fn: async () => {
            await autocmd.group(
              denops,
              "denops_std_function_input",
              (helper) => {
                helper.remove("*");
                helper.define(
                  "CmdlineEnter",
                  "*",
                  `call feedkeys("Hello world!\\<CR>", "t")`,
                );
              },
            );
            const result = await input(denops, "Test: ");
            assertEquals(result, "Hello world!");
          },
        });
        await t.step({
          name: "assign specified text as a default input",
          fn: async () => {
            await autocmd.group(
              denops,
              "denops_std_function_input",
              (helper) => {
                helper.remove("*");
                helper.define(
                  "CmdlineEnter",
                  "*",
                  `call feedkeys("\\<CR>", "t")`,
                );
              },
            );
            const result = await input(denops, "Test: ", "Hello world!");
            assertEquals(result, "Hello world!");
          },
        });
        await t.step({
          name: "uses specified built-in completion",
          fn: async () => {
            await autocmd.group(
              denops,
              "denops_std_function_input",
              (helper) => {
                helper.remove("*");
                helper.define(
                  "CmdlineEnter",
                  "*",
                  `call feedkeys("\\<Tab>\\<CR>", "t")`,
                );
              },
            );
            const result = await input(denops, "Test: ", "", "option");
            assertEquals(result, "all");
          },
        });
        await t.step({
          name: "uses specified custom completion",
          fn: async () => {
            await execute(
              denops,
              `
    function! DenopsStdFunctionInputTest(arglead, cmdline, cursorpos) abort
      return ["Hello world!"]
    endfunction
    `,
            );
            await autocmd.group(
              denops,
              "denops_std_function_input",
              (helper) => {
                helper.remove("*");
                helper.define(
                  "CmdlineEnter",
                  "*",
                  `call feedkeys("\\<Tab>\\<CR>", "t")`,
                );
              },
            );
            const result = await input(
              denops,
              "Test: ",
              "",
              "customlist,DenopsStdFunctionInputTest",
            );
            assertEquals(result, "Hello world!");
          },
        });
        await t.step({
          name: "throws an error when invalid completion is specified",
          fn: async () => {
            await assertRejects(
              async () => {
                await input(denops, "Test: ", "", "custom:Invalid");
              },
              "Invalid completion",
            );
          },
        });
      },
    });

    await t.step({
      ignore: true, // It seems `feedkeys` tech does not work properly on `inputlist`
      name: "inputlist() returns user input number",
      fn: async () => {
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

    await t.step({
      name: "inputsecret()",
      fn: async (t) => {
        await t.step({
          name: "returns user input text",
          fn: async () => {
            await autocmd.group(
              denops,
              "denops_std_function_input",
              (helper) => {
                helper.remove("*");
                helper.define(
                  "CmdlineEnter",
                  "*",
                  `call feedkeys("Hello world!\\<CR>", "t")`,
                );
              },
            );
            const result = await inputsecret(denops, "Test: ");
            assertEquals(result, "Hello world!");
          },
        });
        await t.step({
          name: "assign specified text as a default input",
          fn: async () => {
            await autocmd.group(
              denops,
              "denops_std_function_input",
              (helper) => {
                helper.remove("*");
                helper.define(
                  "CmdlineEnter",
                  "*",
                  `call feedkeys("\\<CR>", "t")`,
                );
              },
            );
            const result = await inputsecret(denops, "Test: ", "Hello world!");
            assertEquals(result, "Hello world!");
          },
        });
      },
    });
  },
});
