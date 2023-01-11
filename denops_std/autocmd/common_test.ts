import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { globals } from "../variable/mod.ts";
import { define, emit, emitAll, list, remove } from "./common.ts";

test({
  mode: "all",
  name: "common",
  fn: async (denops, t) => {
    await t.step("define()", async (t) => {
      await t.step({
        name: "defines an autocmd",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await define(
            denops,
            "User",
            "DenopsTestDefine",
            "let g:denops_autocmd_test += 1",
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestDefine");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd("doautocmd User DenopsTestDefine");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
      await t.step({
        name: "defines an autocmd (once)",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await define(
            denops,
            "User",
            "DenopsTestDefineOnce",
            "let g:denops_autocmd_test += 1",
            {
              once: true,
            },
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestDefineOnce");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd("doautocmd User DenopsTestDefineOnce");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
        },
      });
      await t.step({
        name: "defines an autocmd (nested)",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await define(denops, "BufNew", "*", "let g:denops_autocmd_test += 1");
          await define(denops, "User", "DenopsTestDefineNested", "new", {
            nested: true,
          });
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestDefineNested");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd("doautocmd User DenopsTestDefineNested");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
      await t.step({
        name: "defines an autocmd (group)",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await denops.cmd("augroup MyDenopsTestGroup1 | augroup END");
          await denops.cmd("augroup MyDenopsTestGroup2 | augroup END");
          await define(
            denops,
            "User",
            "DenopsTestDefineGroup",
            "let g:denops_autocmd_test += 1",
            {
              group: "MyDenopsTestGroup1",
            },
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestDefineGroup");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd(
            "doautocmd MyDenopsTestGroup1 User DenopsTestDefineGroup",
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
          await denops.cmd(
            "doautocmd MyDenopsTestGroup2 User DenopsTestDefineGroup",
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
    });

    await t.step("remove()", async (t) => {
      await t.step({
        name: "removes an autocmd",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await define(
            denops,
            "User",
            "DenopsTestRemove",
            "let g:denops_autocmd_test += 1",
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestRemove");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await remove(denops, "User", "DenopsTestRemove");
          await denops.cmd("doautocmd User DenopsTestRemove");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
        },
      });
      await t.step({
        name: "removes an autocmd (ALL for {event})",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await define(
            denops,
            "User",
            "DenopsTestRemove1",
            "let g:denops_autocmd_test += 1",
          );
          await define(
            denops,
            "User",
            "DenopsTestRemove2",
            "let g:denops_autocmd_test += 1",
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestRemove1");
          await denops.cmd("doautocmd User DenopsTestRemove2");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
          await remove(denops, "User");
          await denops.cmd("doautocmd User DenopsTestRemove1");
          await denops.cmd("doautocmd User DenopsTestRemove2");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
      await t.step({
        name: "removes an autocmd (ALL)",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await define(
            denops,
            "User",
            "DenopsTestRemoveAll1",
            "let g:denops_autocmd_test += 1",
          );
          await define(
            denops,
            "User",
            "DenopsTestRemoveAll2",
            "let g:denops_autocmd_test += 1",
          );
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestRemoveAll1");
          await denops.cmd("doautocmd User DenopsTestRemoveAll2");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
          await remove(denops);
          await denops.cmd("doautocmd User DenopsTestRemoveAll1");
          await denops.cmd("doautocmd User DenopsTestRemoveAll2");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
    });

    await t.step({
      name: "list() lists autocmds",
      fn: async () => {
        await define(denops, "User", "DenopsTestList", "echo '1'");
        await define(denops, "User", "DenopsTestList", "echo '2'");
        await define(denops, "User", "DenopsTestList", "echo '3'");
        assertEquals(
          await list(denops, "User", "DenopsTestList"),
          [
            "",
            "--- Autocommands ---",
            "User",
            "    DenopsTestList",
            "              echo '1'",
            "              echo '2'",
            "              echo '3'",
          ].join("\n"),
        );
      },
    });

    await t.step({
      name: "emit() emits an autocmd",
      fn: async () => {
        await globals.set(denops, "denops_autocmd_test_emit", 0);
        await define(
          denops,
          "User",
          "DenopsTestEmit",
          "let g:denops_autocmd_test_emit += 1",
        );
        assertEquals(await globals.get(denops, "denops_autocmd_test_emit"), 0);
        await emit(denops, "User", "DenopsTestEmit");
        assertEquals(await globals.get(denops, "denops_autocmd_test_emit"), 1);
        await emit(denops, "User", "DenopsTestEmit");
        assertEquals(await globals.get(denops, "denops_autocmd_test_emit"), 2);
      },
    });

    await t.step({
      name: "emitAll() emits an autocmd",
      fn: async () => {
        await denops.cmd("%bwipeout!");
        await denops.cmd("edit A | split B | split C");
        await globals.set(denops, "denops_autocmd_test_emit_all", 0);
        await define(
          denops,
          "User",
          "DenopsTestEmitAll",
          "let g:denops_autocmd_test_emit_all += 1",
        );
        assertEquals(
          await globals.get(denops, "denops_autocmd_test_emit_all"),
          0,
        );
        await emitAll(denops, "User", "DenopsTestEmitAll");
        assertEquals(
          await globals.get(denops, "denops_autocmd_test_emit_all"),
          3,
        );
        await emitAll(denops, "User", "DenopsTestEmitAll");
        assertEquals(
          await globals.get(denops, "denops_autocmd_test_emit_all"),
          6,
        );
      },
    });
  },
});
