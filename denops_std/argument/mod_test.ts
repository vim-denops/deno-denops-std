import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { parse } from "./mod.ts";

Deno.test("parse", () => {
  const [opts, flags, residue] = parse([
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
  assertEquals(flags, {
    u: "normal",
    "ignore-submodules": "all",
    ignore: "",
    v: "",
  });
  assertEquals(residue, [
    "Gin",
    "status",
    "autoload/gin.vim",
    "--",
    "++buffer",
    "-v",
    "--ignore",
    "autoload/gin/debug.vim",
  ]);
});

Deno.test("parse (README)", () => {
  const [opts, flags, residue] = parse([
    "++enc=sjis",
    "++ff=dos",
    "-f",
    "--foo=foo",
    "--bar=bar",
    "--bar=baz",
    "hello",
    "world",
  ]);
  assertEquals(opts, {
    enc: "sjis",
    ff: "dos",
  });
  assertEquals(flags, {
    f: "",
    foo: "foo",
    bar: ["bar", "baz"],
  });
  assertEquals(residue, [
    "hello",
    "world",
  ]);
});
