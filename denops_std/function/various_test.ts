import { test } from "../deps_test.ts";
import * as various from "./various.ts";
import { assertEquals } from "../deps_test.ts";

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
