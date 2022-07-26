import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_core@v3.1.0/test/mod.ts";
import * as various from "./various.ts";

test({
  mode: "all",
  name: "mode()",
  fn: async (denops) => {
    const shortMode = denops.meta.host === "vim" ? "c" : "n";
    const longMode = denops.meta.host === "vim" ? "ce" : "n";
    assertEquals(await various.mode(denops), shortMode);
    assertEquals(await various.mode(denops, 0), shortMode);
    assertEquals(await various.mode(denops, 1), longMode);
    assertEquals(await various.mode(denops, ""), shortMode);
    assertEquals(await various.mode(denops, "v"), longMode);
  },
});
