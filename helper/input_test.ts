import { assertEquals, assertRejects } from "@std/assert";
import { test } from "@denops/test";
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
            `call feedkeys("Hello world!\\<CR>", "it")`,
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
          helper.define("CmdlineEnter", "*", `call feedkeys("\\<CR>", "it")`);
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
            `call feedkeys("\\<Tab>\\<CR>", "it")`,
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
            `call feedkeys("\\<Tab>\\<CR>", "it")`,
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
            `call feedkeys("\\<Tab>\\<CR>", "it")`,
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
            `call feedkeys("\\<Tab>\\<CR>", "it")`,
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
    await t.step({
      name: "returns `null` when <Esc> is pressed",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("Hello world!\\<Esc>", "it")`,
          );
        });
        const result = await input(denops);
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "returns `null` when <C-c> is pressed",
      fn: async () => {
        await autocmd.group(denops, "denops_std_helper_input", (helper) => {
          helper.remove("*");
          helper.define(
            "CmdlineEnter",
            "*",
            `call feedkeys("Hello world!\\<C-c>", "it")`,
          );
        });
        const result = await input(denops);
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "should have global mapping restored",
      fn: async () => {
        await denops.cmd("cnoremap <Esc> foo");
        await denops.cmd("cmap <silent> <C-c> bar");
        const globalEsc = await denops.call("maparg", "<Esc>", "c", 0, 1);
        const globalInt = await denops.call("maparg", "<C-c>", "c", 0, 1);
        try {
          await autocmd.group(denops, "denops_std_helper_input", (helper) => {
            helper.remove("*");
            helper.define(
              "CmdlineEnter",
              "*",
              `call feedkeys("Hello world!\\<CR>", "it")`,
            );
          });
          await input(denops);
          assertEquals(
            await denops.call("maparg", "<Esc>", "c", 0, 1),
            globalEsc,
          );
          assertEquals(
            await denops.call("maparg", "<C-c>", "c", 0, 1),
            globalInt,
          );
        } finally {
          await denops.cmd("silent! cunmap <Esc>");
          await denops.cmd("silent! cunmap <C-c>");
        }
      },
    });
    await t.step({
      name: "should have buffer local mapping restored",
      fn: async () => {
        await denops.cmd("cnoremap <Esc> foo");
        await denops.cmd("cmap <silent> <C-c> bar");
        const globalEsc = await denops.call("maparg", "<Esc>", "c", 0, 1);
        const globalInt = await denops.call("maparg", "<C-c>", "c", 0, 1);
        await denops.cmd("cnoremap <expr><buffer> <Esc> eval('')");
        await denops.cmd("cnoremap <nowait><buffer> <C-c> baz");
        const bufferEsc = await denops.call("maparg", "<Esc>", "c", 0, 1);
        const bufferInt = await denops.call("maparg", "<C-c>", "c", 0, 1);
        try {
          await autocmd.group(denops, "denops_std_helper_input", (helper) => {
            helper.remove("*");
            helper.define(
              "CmdlineEnter",
              "*",
              `call feedkeys("Hello world!\\<CR>", "it")`,
            );
          });
          await input(denops);
          assertEquals(
            await denops.call("maparg", "<Esc>", "c", 0, 1),
            bufferEsc,
          );
          assertEquals(
            await denops.call("maparg", "<C-c>", "c", 0, 1),
            bufferInt,
          );
          await denops.cmd("cunmap <buffer> <Esc>");
          await denops.cmd("cunmap <buffer> <C-c>");
          assertEquals(
            await denops.call("maparg", "<Esc>", "c", 0, 1),
            globalEsc,
          );
          assertEquals(
            await denops.call("maparg", "<C-c>", "c", 0, 1),
            globalInt,
          );
        } finally {
          await denops.cmd("silent! cunmap <buffer> <Esc>");
          await denops.cmd("silent! cunmap <buffer> <C-c>");
          await denops.cmd("silent! cunmap <Esc>");
          await denops.cmd("silent! cunmap <C-c>");
        }
      },
    });
  },
});
