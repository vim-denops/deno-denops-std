import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.1.0/test/mod.ts";
import { environment } from "./environment.ts";

test({
  mode: "any",
  name: "environment.get() return the value of the environment variable",
  fn: async (denops) => {
    await denops.cmd("let $DENOPS_STD_VARIABLE_ENVIRONMENT = 'hello'");
    const result = await environment.get(
      denops,
      "DENOPS_STD_VARIABLE_ENVIRONMENT",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name:
    "environment.get() return the defaultValue when the environment variable does not exist",
  fn: async (denops) => {
    const result = await environment.get(
      denops,
      "DENOPS_STD_VARIABLE_ENVIRONMENT",
    );
    assertEquals(result, null);
  },
});
test({
  mode: "any",
  name: "environment.set() replace the value of the environment variable",
  fn: async (denops) => {
    await denops.cmd("let $DENOPS_STD_VARIABLE_ENVIRONMENT = 'hello'");
    await environment.set(denops, "DENOPS_STD_VARIABLE_ENVIRONMENT", "world");
    const result = await environment.get(
      denops,
      "DENOPS_STD_VARIABLE_ENVIRONMENT",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "environment.remove() remove the environment variable",
  fn: async (denops) => {
    await denops.cmd("let $DENOPS_STD_VARIABLE_ENVIRONMENT = 'hello'");
    await environment.remove(denops, "DENOPS_STD_VARIABLE_ENVIRONMENT");
    const result = await environment.get(
      denops,
      "DENOPS_STD_VARIABLE_ENVIRONMENT",
    );
    assertEquals(result, null);
  },
});
