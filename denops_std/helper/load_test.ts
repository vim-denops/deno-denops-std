import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.133.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.0.1/test/mod.ts";
import { load } from "./load.ts";

const loadScriptUrlBase =
  "https://raw.githubusercontent.com/vim-denops/deno-denops-std/v1.9.1/denops_std/helper/#=";

test({
  mode: "any",
  name: "load() load local Vim script file",
  fn: async (denops) => {
    await load(denops, new URL("./load_test.vim", import.meta.url));
    assertEquals(await denops.eval("g:denops_std_load_test") as number, 1);
  },
});

test({
  mode: "any",
  name: "load() load remote Vim script file",
  fn: async (denops) => {
    const loadScriptUrl = new URL("load_test.vim", loadScriptUrlBase);
    await load(
      denops,
      loadScriptUrl,
    );
    assertEquals(await denops.eval("g:denops_std_load_test") as number, 1);
  },
});

test({
  mode: "any",
  name: "load() load not exists local Vim script file",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        await load(
          denops,
          new URL("./load_test_not_exists.vim", import.meta.url),
        );
      },
      undefined,
      `Failed to call 'call' with`,
    );
  },
});

test({
  mode: "any",
  name: "load() load not exists remote Vim script file",
  fn: async (denops) => {
    await assertRejects(
      async () => {
        const loadScriptUrl = new URL(
          "load_test_not_exists.vim",
          loadScriptUrlBase,
        );
        await load(
          denops,
          loadScriptUrl,
        );
      },
      Error,
      "Failed to fetch",
    );
  },
});
