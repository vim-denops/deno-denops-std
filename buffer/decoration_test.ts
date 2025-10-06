import { assertEquals } from "@std/assert";
import { omit } from "@std/collections";
import { test } from "@denops/test";
import * as fn from "../function/mod.ts";
import * as vimFn from "../function/vim/mod.ts";
import * as nvimFn from "../function/nvim/mod.ts";
import * as buffer from "./buffer.ts";
import { decorate, listDecorations, undecorate } from "./decoration.ts";

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
      return props.map((prop) => omit(prop, ["id"]));
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
      length: 5,
      lnum: 1,
      start: 1,
      type: "denops_std:buffer:decoration:decorate:denops-test:0:Title",
      type_bufnr: 0,
    }, {
      col: 2,
      end: 1,
      length: 3,
      lnum: 2,
      start: 1,
      type: "denops_std:buffer:decoration:decorate:denops-test:0:Search",
      type_bufnr: 0,
    }]);

    // Re-applying the same decorations is OK
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
      "denops_std:buffer:decoration:decorate:denops-test",
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

test({
  mode: "all",
  name:
    "decorate defines each highlight when multiple decorations have different priorities",
  fn: async (denops) => {
    const bufnr = await fn.bufnr(denops);
    await buffer.replace(denops, bufnr, [
      "Hello",
      "World",
    ]);

    await decorate(denops, bufnr, [
      {
        line: 1,
        column: 1,
        length: 5,
        highlight: "Title",
        priority: 10,
      },
      {
        line: 2,
        column: 1,
        length: 5,
        highlight: "Title",
        priority: 20,
      },
    ]);

    const decorations = await listDecorations(denops, bufnr);
    assertEquals(decorations, [
      {
        line: 1,
        column: 1,
        length: 5,
        highlight: "Title",
        priority: 10,
      },
      {
        line: 2,
        column: 1,
        length: 5,
        highlight: "Title",
        priority: 20,
      },
    ]);
  },
});

test({
  mode: "all",
  name: "listDecorations list decorations defined in the buffer",
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
        priority: 10,
      },
    ]);
    assertEquals(await listDecorations(denops, bufnr), [
      {
        line: 1,
        column: 1,
        length: 5,
        highlight: "Title",
        priority: 0,
      },
      {
        line: 2,
        column: 2,
        length: 3,
        highlight: "Search",
        priority: 10,
      },
    ]);
  },
});

test({
  mode: "all",
  name: "undecorate clears decorations in the buffer",
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
        priority: 10,
      },
    ]);
    await undecorate(denops, bufnr);
    assertEquals(await listDecorations(denops, bufnr), []);
  },
});

test({
  mode: "all",
  name: "undecorate clears decorations in specified region in the buffer",
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
        priority: 10,
      },
    ]);
    await undecorate(denops, bufnr, 0, 1);
    assertEquals(await listDecorations(denops, bufnr), [
      {
        line: 2,
        column: 2,
        length: 3,
        highlight: "Search",
        priority: 10,
      },
    ]);
  },
});
