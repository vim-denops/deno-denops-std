import { assertEquals } from "@std/assert";
import { test } from "@denops/test";
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
      const props = await vimFn.prop_list(denops, 1, {
        bufnr,
        end_lnum: -1,
      }) as {
        col: number;
        end: number;
        id: number;
        length: number;
        lnum: number;
        start: number;
        type: string;
        type_bufnr: number;
      }[];
      return props;
    };
    const bufnr = await fn.bufnr(denops);
    await buffer.replace(denops, bufnr, [
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
      length: 5,
      lnum: 1,
      start: 1,
      type: "denops_std:buffer:decoration:decorate:Title",
      type_bufnr: 0,
    }, {
      col: 2,
      end: 1,
      id: 0,
      length: 3,
      lnum: 2,
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
    await buffer.replace(denops, bufnr, [
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
