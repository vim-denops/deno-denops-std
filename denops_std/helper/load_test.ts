import { assertEquals, test } from "../deps_test.ts";
import { load } from "./load.ts";

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
    await load(
      denops,
      new URL(
        "https://raw.githubusercontent.com/vim-denops/deno-denops-std/main/denops_std/helper/load_test.vim",
        import.meta.url,
      ),
    );
    assertEquals(await denops.eval("g:denops_std_load_test") as number, 1);
  },
});
