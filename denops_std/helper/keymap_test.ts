import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import { is } from "https://deno.land/x/unknownutil@v3.10.0/mod.ts";
import * as fn from "../function/mod.ts";
import { exprQuote as q } from "./expr_string.ts";
import { KeysSpecifier, send } from "./keymap.ts";

function toArray<T>(x: T | T[]): T[] {
  return is.Array(x) ? x : [x];
}

type Spec = {
  name: string;
  keys: KeysSpecifier | KeysSpecifier[];
  expect: string;
};

test({
  mode: "nvim",
  name: "send()",
  fn: async (denops, t) => {
    const specs: Spec[] = [
      {
        name: "normal key",
        keys: "foo",
        expect: "foo",
      },
      {
        name: "special key",
        keys: q`foo\<BS>bar\<Left>\<Del>`,
        expect: "foba",
      },
      {
        name: "remapped key",
        keys: { keys: q`\<C-l>`, remap: true },
        expect: "foo",
      },
    ];
    await denops.cmd("inoremap <C-l> foo");

    for (const spec of specs) {
      await t.step({
        name: spec.name,
        fn: async () => {
          await fn.deletebufline(denops, "%", 1, "$");
          assertEquals(await fn.getline(denops, 1), "");
          await send(denops, [
            q`\<Esc>`,
            "i",
            ...toArray(spec.keys),
          ]);
          assertEquals(await fn.getline(denops, 1), spec.expect);
        },
      });
    }
  },
});
