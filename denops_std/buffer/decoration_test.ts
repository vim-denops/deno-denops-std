import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import * as fn from "../function/mod.ts";
import * as vimFn from "../function/vim/mod.ts";
import * as nvimFn from "../function/nvim/mod.ts";
import * as buffer from "./buffer.ts";
import { decorate } from "./decoration.ts";

test({
  mode: "vim",
  name: "decorate define highlights as text properties",
  fn: async (denops) => {
    const collect = async (bufnr: number) => {
      const lines = await fn.getbufline(denops, bufnr, 1, "$");
      const props = [];
      for (let line = 1; line <= lines.length; line++) {
        props.push(
          ...(await vimFn.prop_list(denops, line, { bufnr }) as unknown[]),
        );
      }
      return props;
    };
    const bufnr = await fn.bufnr(denops);
    await buffer.append(denops, bufnr, [
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ]);
    await decorate(denops, bufnr, [
      {
        line: 1,
        column: 1,
        length: 5,
        highlight: "Title",
      },
      {
        line: 2,
        column: 2,
        length: 3,
        highlight: "Search",
      },
    ]);
    assertEquals(await collect(bufnr), [{
      col: 1,
      end: 1,
      id: 0,
      length: 1,
      start: 1,
      type: "denops_std:buffer:decoration:decorate:Title",
      type_bufnr: 0,
    }, {
      col: 2,
      end: 1,
      id: 0,
      length: 3,
      start: 1,
      type: "denops_std:buffer:decoration:decorate:Search",
      type_bufnr: 0,
    }]);
  },
});
test({
  mode: "nvim",
  name: "decorate define highlights as extmarks",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    await buffer.append(denops, bufnr, [
      "Hello",
      "Darkness",
      "My",
      "Old friend",
    ]);
    await decorate(denops, bufnr, [
      {
        line: 1,
        column: 1,
        length: 5,
        highlight: "Title",
      },
      {
        line: 2,
        column: 2,
        length: 3,
        highlight: "Search",
      },
    ]);
    const ns = await nvimFn.nvim_create_namespace(
      denops,
      "denops_std:buffer:decoration:decorate",
    );
    assertEquals(
      await nvimFn.nvim_buf_get_extmarks(denops, bufnr, ns, 0, -1, {}),
      [
        [1, 0, 0],
        [2, 1, 1],
      ],
    );
  },
});
