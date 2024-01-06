import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.6.0/mod.ts";
import { globalOptions, localOptions, options } from "./option.ts";

test({
  mode: "all",
  name: "options",
  fn: async (denops, t) => {
    await t.step({
      name: "options.get() return the value of the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        const result = await options.get(
          denops,
          "filetype",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name: "options.get() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("set filetype&");
        const result = await options.get(
          denops,
          "filetype",
        );
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "options.set() replace the value of the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        await options.set(denops, "filetype", "world");
        const result = await options.get(
          denops,
          "filetype",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "options.remove() reset the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        await options.remove(denops, "filetype");
        const result = await options.get(
          denops,
          "filetype",
        );
        assertEquals(result, null);
      },
    });

    await t.step({
      name: "localOptions.get() return the value of the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        const result = await localOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name:
        "localOptions.get() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("set filetype&");
        const result = await localOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "localOptions.set() replace the value of the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        await localOptions.set(denops, "filetype", "world");
        const result = await localOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "localOptions.remove() reset the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        await localOptions.remove(denops, "filetype");
        const result = await localOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, null);
      },
    });

    await t.step({
      name: "globalOptions.get() return the value of the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        const result = await globalOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, "hello");
      },
    });
    await t.step({
      name:
        "globalOptions.get() return the defautValue when the option is empty",
      fn: async () => {
        await denops.cmd("set filetype&");
        const result = await globalOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, null);
      },
    });
    await t.step({
      name: "globalOptions.set() replace the value of the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        await globalOptions.set(denops, "filetype", "world");
        const result = await globalOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, "world");
      },
    });
    await t.step({
      name: "globalOptions.remove() reset the option",
      fn: async () => {
        await denops.cmd("set filetype=hello");
        await globalOptions.remove(denops, "filetype");
        const result = await globalOptions.get(
          denops,
          "filetype",
        );
        assertEquals(result, null);
      },
    });
  },
});
