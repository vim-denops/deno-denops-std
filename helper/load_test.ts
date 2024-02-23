import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.217.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.6.1/mod.ts";
import { load } from "./load.ts";

const loadScriptUrlBase =
  "https://raw.githubusercontent.com/vim-denops/deno-denops-std/v1.9.1/denops_std/helper/#=";

test({
  mode: "all",
  name: "load()",
  fn: async (denops, t) => {
    await t.step({
      name: "load local Vim script file",
      fn: async () => {
        await load(denops, new URL("./load_test.vim", import.meta.url));
        assertEquals(await denops.eval("g:denops_std_load_test") as number, 1);
      },
    });

    await t.step({
      name: "load remote Vim script file",
      fn: async () => {
        const loadScriptUrl = new URL("load_test.vim", loadScriptUrlBase);
        await load(
          denops,
          loadScriptUrl,
        );
        assertEquals(await denops.eval("g:denops_std_load_test") as number, 1);
      },
    });

    await t.step({
      name: "load not exists local Vim script file",
      fn: async () => {
        await assertRejects(
          async () => {
            await load(
              denops,
              new URL("./load_test_not_exists.vim", import.meta.url),
            );
          },
          `Failed to call 'call' with`,
        );
      },
    });

    await t.step({
      name: "load not exists remote Vim script file",
      fn: async () => {
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
  },
});
