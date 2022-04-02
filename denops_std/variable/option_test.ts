import { assertEquals } from "https://deno.land/std@0.127.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.0.0/test/mod.ts";
import { globalOptions, localOptions, options } from "./option.ts";

test({
  mode: "any",
  name: "options.get() return the value of the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    const result = await options.get(
      denops,
      "filetype",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "options.get() return the defautValue when the option is empty",
  fn: async (denops) => {
    const result = await options.get(
      denops,
      "filetype",
    );
    assertEquals(result, null);
  },
});
test({
  mode: "any",
  name: "options.set() replace the value of the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    await options.set(denops, "filetype", "world");
    const result = await options.get(
      denops,
      "filetype",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "options.remove() reset the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    await options.remove(denops, "filetype");
    const result = await options.get(
      denops,
      "filetype",
    );
    assertEquals(result, null);
  },
});

test({
  mode: "any",
  name: "localOptions.get() return the value of the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    const result = await localOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "localOptions.get() return the defautValue when the option is empty",
  fn: async (denops) => {
    const result = await localOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, null);
  },
});
test({
  mode: "any",
  name: "localOptions.set() replace the value of the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    await localOptions.set(denops, "filetype", "world");
    const result = await localOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "localOptions.remove() reset the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    await localOptions.remove(denops, "filetype");
    const result = await localOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, null);
  },
});

test({
  mode: "any",
  name: "globalOptions.get() return the value of the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    const result = await globalOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, "hello");
  },
});
test({
  mode: "any",
  name: "globalOptions.get() return the defautValue when the option is empty",
  fn: async (denops) => {
    const result = await globalOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, null);
  },
});
test({
  mode: "any",
  name: "globalOptions.set() replace the value of the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    await globalOptions.set(denops, "filetype", "world");
    const result = await globalOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, "world");
  },
});
test({
  mode: "any",
  name: "globalOptions.remove() reset the option",
  fn: async (denops) => {
    await denops.cmd("set filetype=hello");
    await globalOptions.remove(denops, "filetype");
    const result = await globalOptions.get(
      denops,
      "filetype",
    );
    assertEquals(result, null);
  },
});
