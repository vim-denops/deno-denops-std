import { assertEquals, test } from "../deps_test.ts";
import { getVar, removeVar, setVar } from "./helper.ts";

test({
  mode: "any",
  name: "getVar() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
    const result = await getVar(
      denops,
      "g",
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "hello");
  },
});

test({
  mode: "any",
  name: "setVar() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
    await setVar(denops, "g", "denops_std_vim_variable_test", "world");
    const result = await getVar(
      denops,
      "g",
      "denops_std_vim_variable_test",
    );
    assertEquals(result, "world");
  },
});

test({
  mode: "any",
  name: "removeVar() remove the variable",
  fn: async (denops) => {
    await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
    await removeVar(denops, "g", "denops_std_vim_variable_test");
    const result = await getVar(
      denops,
      "g",
      "denops_std_vim_variable_test",
    );
    assertEquals(result, null);
  },
});
