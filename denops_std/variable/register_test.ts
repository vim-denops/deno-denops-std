import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { register } from "./register.ts";

test({
  mode: "any",
  name: "register.get() throws an error when 'prop' is invalid",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        await register.get(denops, "aa");
      },
      "must be a single character",
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});
test({
  mode: "any",
  name: "register.get() return the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let @a = 'hello'");
    const result = await register.get(
      denops,
      "a",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "register.get() return the defaultValue if the register is empty",
  fn: async (denops) => {
    const result = await register.get(
      denops,
      "a",
    );
    assertEquals(result, null);
  },
});
test({
  mode: "any",
  name: "register.set() throws an error when 'prop' is invalid",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        await register.set(denops, "aa", "world");
      },
      "must be a single character",
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});
test({
  mode: "any",
  name: "register.set() replace the value of the variable",
  fn: async (denops) => {
    await denops.cmd("let @a = 'hello'");
    await register.set(denops, "a", "world");
    const result = await register.get(
      denops,
      "a",
    );
    assertEquals(result, "world");
  },
});
