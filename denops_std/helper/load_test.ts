import { assertEquals, assertThrowsAsync, test } from "../deps_test.ts";
import { load } from "./load.ts";

const loadScriptUrlBase =
  "https://raw.githubusercontent.com/vim-denops/deno-denops-std/v1.10.0/denops_std/helper/";

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
    await assertThrowsAsync(
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
    await assertThrowsAsync(
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
