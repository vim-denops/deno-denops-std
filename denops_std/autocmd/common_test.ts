import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { globals } from "../variable/mod.ts";
import { define, emit, emitAll, list, remove } from "./common.ts";

test({
  mode: "any",
  name: "define() defines an autocmd",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest",
      "let g:denops_autocmd_test += 1",
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});
test({
  mode: "any",
  name: "define() defines an autocmd (once)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest",
      "let g:denops_autocmd_test += 1",
      {
        once: true,
      },
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
  },
});
test({
  mode: "any",
  name: "define() defines an autocmd (nested)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(denops, "BufNew", "*", "let g:denops_autocmd_test += 1");
    await define(denops, "User", "DenopsTest", "new", {
      nested: true,
    });
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});
test({
  mode: "any",
  name: "define() defines an autocmd (group)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await denops.cmd("augroup MyDenopsTestGroup1 | augroup END");
    await denops.cmd("augroup MyDenopsTestGroup2 | augroup END");
    await define(
      denops,
      "User",
      "DenopsTest",
      "let g:denops_autocmd_test += 1",
      {
        group: "MyDenopsTestGroup1",
      },
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await denops.cmd("doautocmd MyDenopsTestGroup1 User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
    await denops.cmd("doautocmd MyDenopsTestGroup2 User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});

test({
  mode: "any",
  name: "remove() removes an autocmd",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest",
      "let g:denops_autocmd_test += 1",
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await remove(denops, "User", "DenopsTest");
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
  },
});
test({
  mode: "any",
  name: "remove() removes an autocmd (ALL for {event})",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest1",
      "let g:denops_autocmd_test += 1",
    );
    await define(
      denops,
      "User",
      "DenopsTest2",
      "let g:denops_autocmd_test += 1",
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest1");
    await denops.cmd("doautocmd User DenopsTest2");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
    await remove(denops, "User");
    await denops.cmd("doautocmd User DenopsTest1");
    await denops.cmd("doautocmd User DenopsTest2");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});
test({
  mode: "any",
  name: "remove() removes an autocmd (ALL)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest1",
      "let g:denops_autocmd_test += 1",
    );
    await define(
      denops,
      "User",
      "DenopsTest2",
      "let g:denops_autocmd_test += 1",
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest1");
    await denops.cmd("doautocmd User DenopsTest2");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
    await remove(denops);
    await denops.cmd("doautocmd User DenopsTest1");
    await denops.cmd("doautocmd User DenopsTest2");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});

test({
  mode: "any",
  name: "list() lists autocmds",
  fn: async (denops) => {
    await define(denops, "User", "DenopsTest", "echo '1'");
    await define(denops, "User", "DenopsTest", "echo '2'");
    await define(denops, "User", "DenopsTest", "echo '3'");
    assertEquals(
      await list(denops, "User", "DenopsTest"),
      [
        "",
        "--- Autocommands ---",
        "User",
        "    DenopsTest",
        "              echo '1'",
        "              echo '2'",
        "              echo '3'",
      ].join("\n"),
    );
  },
});

test({
  mode: "any",
  name: "emit() emits an autocmd",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest",
      "let g:denops_autocmd_test += 1",
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await emit(denops, "User", "DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await emit(denops, "User", "DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});

test({
  mode: "any",
  name: "emitAll() emits an autocmd",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await define(
      denops,
      "User",
      "DenopsTest",
      "let g:denops_autocmd_test += 1",
    );
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await emitAll(denops, "User", "DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await emitAll(denops, "User", "DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
  },
});
