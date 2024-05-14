import { assertEquals } from "@std/assert";
import { test } from "@denops/test";
import * as various from "./various.ts";

test({
  mode: "all",
  name: "mode()",
  fn: async (denops) => {
    const shortMode = "n";
    const longMode = "n";
    assertEquals(await various.mode(denops), shortMode);
    assertEquals(await various.mode(denops, 0), shortMode);
    assertEquals(await various.mode(denops, 1), longMode);
    assertEquals(await various.mode(denops, ""), shortMode);
    assertEquals(await various.mode(denops, "v"), longMode);
  },
});
