import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import { buffers, globals, tabpages, vim, windows } from "./variable.ts";

test({
  mode: "all",
  name: "variable",
  fn: async (denops, t) => {
    await t.step({
      name: "globals.get() return the value of the variable",
      fn: async () => {
        await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
        const result = await globals.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name: "globals.set() replace the value of the variable",
      fn: async () => {
        await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
        await globals.set(denops, "denops_std_vim_variable_test", "world");
        const result = await globals.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "globals.remove() remove the variable",
      fn: async () => {
        await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
        await globals.remove(denops, "denops_std_vim_variable_test");
        const result = await globals.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, null);
      },
    });

    await t.step({
      name: "buffers.get() return the value of the variable",
      fn: async () => {
        await denops.cmd("let b:denops_std_vim_variable_test = 'hello'");
        const result = await buffers.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name: "buffers.set() replace the value of the variable",
      fn: async () => {
        await denops.cmd("let b:denops_std_vim_variable_test = 'hello'");
        await buffers.set(denops, "denops_std_vim_variable_test", "world");
        const result = await buffers.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "buffers.remove() remove the variable",
      fn: async () => {
        await denops.cmd("let b:denops_std_vim_variable_test = 'hello'");
        await buffers.remove(denops, "denops_std_vim_variable_test");
        const result = await buffers.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, null);
      },
    });

    await t.step({
      name: "windows.get() return the value of the variable",
      fn: async () => {
        await denops.cmd("let w:denops_std_vim_variable_test = 'hello'");
        const result = await windows.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name: "windows.set() replace the value of the variable",
      fn: async () => {
        await denops.cmd("let w:denops_std_vim_variable_test = 'hello'");
        await windows.set(denops, "denops_std_vim_variable_test", "world");
        const result = await windows.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "windows.remove() remove the variable",
      fn: async () => {
        await denops.cmd("let w:denops_std_vim_variable_test = 'hello'");
        await windows.remove(denops, "denops_std_vim_variable_test");
        const result = await windows.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, null);
      },
    });

    await t.step({
      name: "tabpages.get() return the value of the variable",
      fn: async () => {
        await denops.cmd("let t:denops_std_vim_variable_test = 'hello'");
        const result = await tabpages.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name: "tabpages.set() replace the value of the variable",
      fn: async () => {
        await denops.cmd("let t:denops_std_vim_variable_test = 'hello'");
        await tabpages.set(denops, "denops_std_vim_variable_test", "world");
        const result = await tabpages.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "tabpages.remove() remove the variable",
      fn: async () => {
        await denops.cmd("let t:denops_std_vim_variable_test = 'hello'");
        await tabpages.remove(denops, "denops_std_vim_variable_test");
        const result = await tabpages.get(
          denops,
          "denops_std_vim_variable_test",
        );
        assertEquals(result, null);
      },
    });

    await t.step({
      name: "vim.get() return the value of the variable",
      fn: async () => {
        await denops.cmd("let v:errors = ['hello']");
        const result = await vim.get(
          denops,
          "errors",
        );
        assertEquals(result, ["hello"]);
      },
    });
    await t.step({
      name: "vim.set() replace the value of the variable",
      fn: async () => {
        await denops.cmd("let v:errors = ['hello']");
        await vim.set(denops, "errors", ["world"]);
        const result = await vim.get(
          denops,
          "errors",
        );
        assertEquals(result, ["world"]);
      },
    });
  },
});
