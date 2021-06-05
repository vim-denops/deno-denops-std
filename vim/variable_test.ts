import { Denops } from "../deps.ts";
import { assertEquals } from "../deps_test.ts";
import * as variable from "./variable.ts";

Denops.test("getVar() return the value of the variable", async (denops) => {
  await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
  const result = await variable.getVar(
    denops,
    "g",
    "denops_std_vim_variable_test",
  );
  assertEquals(result, "hello");
});

Denops.test("setVar() replace the value of the variable", async (denops) => {
  await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
  await variable.setVar(denops, "g", "denops_std_vim_variable_test", "world");
  const result = await variable.getVar(
    denops,
    "g",
    "denops_std_vim_variable_test",
  );
  assertEquals(result, "world");
});

Denops.test("removeVar() remove the variable", async (denops) => {
  await denops.cmd("let g:denops_std_vim_variable_test = 'hello'");
  await variable.removeVar(denops, "g", "denops_std_vim_variable_test");
  const result = await variable.getVar(
    denops,
    "g",
    "denops_std_vim_variable_test",
  );
  assertEquals(result, null);
});
