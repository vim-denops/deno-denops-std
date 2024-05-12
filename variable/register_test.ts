import { assertEquals, assertRejects } from "@std/assert";
import { test } from "@denops/test";
import { register } from "./register.ts";

test({
  mode: "all",
  name: "register",
  fn: async (denops, t) => {
    await t.step({
      name: "register.get() throws an error when 'prop' is invalid",
      fn: async () => {
        await assertRejects(
          async () => {
            await register.get(denops, "aa");
          },
          "must be a single character",
        );
      },
    });
    await t.step({
      name: "register.get() return the value of the variable",
      fn: async () => {
        await denops.cmd("let @a = 'hello'");
        const result = await register.get(
          denops,
          "a",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name: "register.get() return the defaultValue if the register is empty",
      fn: async () => {
        await denops.cmd("let @a = ''");
        const result = await register.get(
          denops,
          "a",
        );
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "register.set() throws an error when 'prop' is invalid",
      fn: async () => {
        await assertRejects(
          async () => {
            await register.set(denops, "aa", "world");
          },
          "must be a single character",
        );
      },
    });
    await t.step({
      name: "register.set() replace the value of the variable",
      fn: async () => {
        await denops.cmd("let @a = 'hello'");
        await register.set(denops, "a", "world");
        const result = await register.get(
          denops,
          "a",
        );
        assertEquals(result, "world");
      },
    });
  },
});
