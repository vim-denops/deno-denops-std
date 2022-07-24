import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { parseOpts } from "./opts.ts";

Deno.test("parseOpts", () => {
  const [opts, residue] = parseOpts([
    "Gin",
    "++buffer",
    "status",
    "++ff=mac",
    "-unormal",
    "++enc=utf-8",
    "--ignore-submodules=all",
    "--ignore",
    "-v",
    "autoload/gin.vim",
    "--",
    "++buffer",
    "-v",
    "--ignore",
    "autoload/gin/debug.vim",
  ]);
  assertEquals(opts, {
    buffer: "",
    ff: "mac",
    enc: "utf-8",
  });
  assertEquals(residue, [
    "Gin",
    "status",
    "-unormal",
    "--ignore-submodules=all",
    "--ignore",
    "-v",
    "autoload/gin.vim",
    "--",
    "++buffer",
    "-v",
    "--ignore",
    "autoload/gin/debug.vim",
  ]);
});
