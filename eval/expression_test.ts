import { assertEquals } from "@std/assert";
import { test } from "@denops/test";
import { vimExpressionOf } from "./vim_evaluatable.ts";
import { rawString } from "./string.ts";

import { expr, isExpression } from "./expression.ts";

Deno.test("expr()", async (t) => {
  await t.step("returns an `Expression`", () => {
    const actual = expr`foo`;
    assertEquals(actual[Symbol.toStringTag], "Expression");
  });
});

test({
  mode: "all",
  name: "Expression",
  fn: async (denops, t) => {
    const expression = expr`[42 + ${123}, ${"foo"}, ${null}]`;
    await t.step(".@@vimExpressionOf() returns a string", async (t) => {
      const actual = expression[vimExpressionOf]();
      assertEquals(typeof actual, "string");

      await t.step("that evaluates as a Vim expression", async () => {
        assertEquals(await denops.eval(actual), [165, "foo", null]);
      });
    });
    await t.step(".toJSON() returns same as @@vimExpressionOf()", () => {
      const actual = expression.toJSON();
      const expected = expression[vimExpressionOf]();
      assertEquals(actual, expected);
    });
    await t.step(".toString() returns same as @@vimExpressionOf()", () => {
      const actual = expression.toString();
      const expected = expression[vimExpressionOf]();
      assertEquals(actual, expected);
    });
    await t.step('is inspected as `[Expression: "..."]`', () => {
      assertEquals(
        Deno.inspect(expression),
        `[Expression: "[42 + 123, 'foo', v:null]"]`,
      );
    });
  },
});

Deno.test("isExpression()", async (t) => {
  await t.step("returns true if the value is Expression", () => {
    const actual = isExpression(expr`foo`);
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
      ["RawString", rawString`baz`],
    ];
    for (const [name, value] of tests) {
      await t.step(name, () => {
        const actual = isExpression(value);
        assertEquals(actual, false);
      });
    }
  });
});
