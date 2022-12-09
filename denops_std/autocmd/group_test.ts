import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.2.2/test/mod.ts";
import { globals } from "../variable/mod.ts";
import { group } from "./group.ts";

test({
  mode: "any",
  name: "helper.define() in group() defines an autocmd",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await group(denops, "my-denops-autocmd", (helper) => {
      helper.define("User", "DenopsTest", "let g:denops_autocmd_test += 1");
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
  name: "helper.define() in group() defines an autocmd (once)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await group(denops, "my-denops-autocmd", (helper) => {
      helper.define("User", "DenopsTest", "let g:denops_autocmd_test += 1", {
        once: true,
      });
    });
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 0);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
    await denops.cmd("doautocmd User DenopsTest");
    assertEquals(await globals.get(denops, "denops_autocmd_test"), 1);
  },
});
test({
  mode: "any",
  name: "helper.define() in group() defines an autocmd (nested)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await group(denops, "my-denops-autocmd", (helper) => {
      helper.define("BufNew", "*", "let g:denops_autocmd_test += 1");
      helper.define("User", "DenopsTest", "new", {
        nested: true,
      });
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
  name: "helper.remove() in group() removes an autocmd",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await group(denops, "my-denops-autocmd", (helper) => {
      helper.define("User", "DenopsTest", "let g:denops_autocmd_test += 1");
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
test({
  mode: "any",
  name: "helper.remove() in group() removes an autocmd (ALL for {event})",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await group(denops, "my-denops-autocmd", (helper) => {
      helper.define("User", "DenopsTest1", "let g:denops_autocmd_test += 1");
      helper.define("User", "DenopsTest2", "let g:denops_autocmd_test += 1");
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
test({
  mode: "any",
  name: "helper.remove() in group() removes an autocmd (ALL)",
  fn: async (denops) => {
    await globals.set(denops, "denops_autocmd_test", 0);
    await group(denops, "my-denops-autocmd", (helper) => {
      helper.define("User", "DenopsTest1", "let g:denops_autocmd_test += 1");
      helper.define("User", "DenopsTest2", "let g:denops_autocmd_test += 1");
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
