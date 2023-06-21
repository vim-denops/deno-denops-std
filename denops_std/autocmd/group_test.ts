import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import { globals } from "../variable/mod.ts";
import { group } from "./group.ts";

test({
  mode: "all",
  name: "helper",
  fn: async (denops, t) => {
    await t.step(".define()", async (t) => {
      await t.step({
        name: "in group() defines an autocmd",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await group(denops, "my-denops-autocmd", (helper) => {
            helper.define(
              "User",
              "DenopsTestHelperDefine",
              "let g:denops_autocmd_test += 1",
            );
          });
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestHelperDefine");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd("doautocmd User DenopsTestHelperDefine");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
      await t.step({
        name: "in group() defines an autocmd (once)",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await group(denops, "my-denops-autocmd", (helper) => {
            helper.define(
              "User",
              "DenopsTestHelperDefineOnce",
              "let g:denops_autocmd_test += 1",
              {
                once: true,
              },
            );
          });
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestHelperDefineOnce");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd("doautocmd User DenopsTestHelperDefineOnce");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
        },
      });
      await t.step({
        name: "in group() defines an autocmd (nested)",
        fn: async () => {
          await globals.set(denops, "denops_autocmd_test", 0);
          await group(denops, "my-denops-autocmd", (helper) => {
            helper.define("BufNew", "*", "let g:denops_autocmd_test += 1");
            helper.define("User", "DenopsTestHelperDefineNested", "new", {
              nested: true,
            });
          });
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
          await denops.cmd("doautocmd User DenopsTestHelperDefineNested");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          await denops.cmd("doautocmd User DenopsTestHelperDefineNested");
          assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
        },
      });
    });

    await t.step({
      name: ".remove()",
      fn: async (t) => {
        await t.step({
          name: "in group() removes an autocmd",
          fn: async () => {
            await globals.set(denops, "denops_autocmd_test", 0);
            await group(denops, "my-denops-autocmd", (helper) => {
              helper.define(
                "User",
                "DenopsTest",
                "let g:denops_autocmd_test += 1",
              );
            });
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
            await denops.cmd("doautocmd User DenopsTest");
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
            await group(denops, "my-denops-autocmd", (helper) => {
              helper.remove("User", "DenopsTest");
            });
            await denops.cmd("doautocmd User DenopsTest");
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
          },
        });
        await t.step({
          name: "in group() removes an autocmd (ALL for {event})",
          fn: async () => {
            await globals.set(denops, "denops_autocmd_test", 0);
            await group(denops, "my-denops-autocmd", (helper) => {
              helper.define(
                "User",
                "DenopsTest1",
                "let g:denops_autocmd_test += 1",
              );
              helper.define(
                "User",
                "DenopsTest2",
                "let g:denops_autocmd_test += 1",
              );
            });
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
            await denops.cmd("doautocmd User DenopsTest1");
            await denops.cmd("doautocmd User DenopsTest2");
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
            await group(denops, "my-denops-autocmd", (helper) => {
              helper.remove("User");
            });
            await denops.cmd("doautocmd User DenopsTest1");
            await denops.cmd("doautocmd User DenopsTest2");
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
          },
        });
        await t.step({
          name: "in group() removes an autocmd (ALL)",
          fn: async () => {
            await globals.set(denops, "denops_autocmd_test", 0);
            await group(denops, "my-denops-autocmd", (helper) => {
              helper.define(
                "User",
                "DenopsTest1",
                "let g:denops_autocmd_test += 1",
              );
              helper.define(
                "User",
                "DenopsTest2",
                "let g:denops_autocmd_test += 1",
              );
            });
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
            await denops.cmd("doautocmd User DenopsTest1");
            await denops.cmd("doautocmd User DenopsTest2");
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
            await group(denops, "my-denops-autocmd", (helper) => {
              helper.remove();
            });
            await denops.cmd("doautocmd User DenopsTest1");
            await denops.cmd("doautocmd User DenopsTest2");
            assertEquals(await globals.get(denops, "denops_autocmd_test"), 2);
          },
        });
      },
    });
  },
});
