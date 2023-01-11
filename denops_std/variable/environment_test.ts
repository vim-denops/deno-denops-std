import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { environment } from "./environment.ts";

test({
  mode: "all",
  name: "environment",
  fn: async (denops, t) => {
    await t.step({
      name: "environment.get() return the value of the environment variable",
      fn: async () => {
        await denops.cmd("let $DENOPS_STD_VARIABLE_ENVIRONMENT = 'hello'");
        const result = await environment.get(
          denops,
          "DENOPS_STD_VARIABLE_ENVIRONMENT",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name:
        "environment.get() return the defaultValue when the environment variable does not exist",
      fn: async () => {
        const result = await environment.get(
          denops,
          "DENOPS_STD_VARIABLE_ENVIRONMENT_DOES_NOT_EXIST",
        );
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "environment.set() replace the value of the environment variable",
      fn: async () => {
        await denops.cmd("let $DENOPS_STD_VARIABLE_ENVIRONMENT = 'hello'");
        await environment.set(
          denops,
          "DENOPS_STD_VARIABLE_ENVIRONMENT",
          "world",
        );
        const result = await environment.get(
          denops,
          "DENOPS_STD_VARIABLE_ENVIRONMENT",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "environment.remove() remove the environment variable",
      fn: async () => {
        await denops.cmd("let $DENOPS_STD_VARIABLE_ENVIRONMENT = 'hello'");
        await environment.remove(denops, "DENOPS_STD_VARIABLE_ENVIRONMENT");
        const result = await environment.get(
          denops,
          "DENOPS_STD_VARIABLE_ENVIRONMENT",
        );
        assertEquals(result, null);
      },
    });
  },
});
