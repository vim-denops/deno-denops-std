import { assertEquals } from "@std/assert";
import { test } from "@denops/test";
import { vimExpressionOf } from "./vim_evaluatable.ts";
import { expr } from "./expression.ts";

import { isRawString, rawString } from "./string.ts";

Deno.test("rawString()", async (t) => {
  await t.step("returns a `RawString`", () => {
    const actual = rawString`foo`;
    assertEquals(actual[Symbol.toStringTag], "RawString");
  });
});

test({
  mode: "all",
  name: "RawString",
  fn: async (denops, t) => {
    const raw = rawString`foo,${123},${"foo"},${null}`;
    await t.step(".@@vimExpressionOf() returns a string", async (t) => {
      const actual = raw[vimExpressionOf]();
      assertEquals(typeof actual, "string");

      await t.step("that evaluates as a Vim string constant", async () => {
        assertEquals(
          await denops.eval(actual),
          "foo,123,foo,null",
        );
      });
    });
    await t.step(".toJSON() returns same as @@vimExpressionOf()", () => {
      const actual = raw.toJSON();
      const expected = raw[vimExpressionOf]();
      assertEquals(actual, expected);
    });
    await t.step(".toString() returns a JavaScript string", () => {
      const actual = raw.toString();
      assertEquals(actual, "foo,123,foo,null");
    });
    await t.step('is inspected as `[RawString: "..."]`', () => {
      assertEquals(Deno.inspect(raw), `[RawString: "foo,123,foo,null"]`);
    });
  },
});

Deno.test("isRawString()", async (t) => {
  await t.step("returns true if the value is RawString", () => {
    const actual = isRawString(rawString`foo`);
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
      ["Expression", expr`baz`],
    ];
    for (const [name, value] of tests) {
      await t.step(name, () => {
        const actual = isRawString(value);
        assertEquals(actual, false);
      });
    }
  });
});
