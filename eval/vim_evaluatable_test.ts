import { assertEquals } from "@std/assert";

import { isVimEvaluatable, vimExpressionOf } from "./vim_evaluatable.ts";

Deno.test("isVimEvaluatable()", async (t) => {
  await t.step("returns true if the value is VimEvaluatable", () => {
    const actual = isVimEvaluatable({
      [vimExpressionOf]: () => {},
    });
    assertEquals(actual, true);
  });
  await t.step("returns false if the value is", async (t) => {
    const tests: readonly [name: string, value: unknown][] = [
      ["string", "foo"],
      ["number", 123],
      ["undefined", undefined],
      ["null", null],
      ["true", true],
      ["false", false],
      ["Function", () => 0],
      ["symbol", Symbol("bar")],
      ["Array", [0, 1]],
      ["Object", { key: "a" }],
    ];
    for (const [name, value] of tests) {
      await t.step(name, () => {
        const actual = isVimEvaluatable(value);
        assertEquals(actual, false);
      });
    }
  });
});
