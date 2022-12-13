import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { test } from "../test/mod.ts";
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
