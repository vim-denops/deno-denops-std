import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { parseFlags } from "./flags.ts";

Deno.test("parseFlags", () => {
  const [flags, residue] = parseFlags([
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
  assertEquals(flags, {
    u: "normal",
    "ignore-submodules": "all",
    ignore: "",
    v: "",
  });
  assertEquals(residue, [
    "Gin",
    "++buffer",
    "status",
    "++ff=mac",
    "++enc=utf-8",
    "autoload/gin.vim",
    "--",
    "++buffer",
    "-v",
    "--ignore",
    "autoload/gin/debug.vim",
  ]);
});
