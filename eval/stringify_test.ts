import { assertEquals, assertThrows } from "@std/assert";
import { assertSpyCallArgs, assertSpyCalls, spy } from "@std/testing/mock";
import { test } from "@denops/test";
import { expr } from "./expression.ts";
import { rawString } from "./string.ts";

import { stringify } from "./stringify.ts";

Deno.test("stringify()", async (t) => {
  await t.step("stringify undefined to `v:null`", () => {
    const actual = stringify(undefined);
    assertEquals(actual, "v:null");
  });
  await t.step("stringify null to `v:null`", () => {
    const actual = stringify(null);
    assertEquals(actual, "v:null");
  });
  await t.step("stringify Function to `v:null`", () => {
    const actual = stringify(() => {});
    assertEquals(actual, "v:null");
  });
  await t.step("stringify Symbol to `v:null`", () => {
    const actual = stringify(Symbol("foo"));
    assertEquals(actual, "v:null");
  });
  await t.step("stringify true to `v:true`", () => {
    const actual = stringify(true);
    assertEquals(actual, "v:true");
  });
  await t.step("stringify false to `v:false`", () => {
    const actual = stringify(false);
    assertEquals(actual, "v:false");
  });
  await t.step("stringify Boolean object to `v:true` or `v:false`", () => {
    const actualTrue = stringify(new Boolean(true));
    assertEquals(actualTrue, "v:true");
    const actualFalse = stringify(new Boolean(false));
    assertEquals(actualFalse, "v:false");
  });
  await t.step("stringify integer number to integer number", () => {
    const actual = stringify(42);
    assertEquals(actual, "42");
  });
  await t.step("stringify float number to float number", () => {
    const actual = stringify(21.948);
    assertEquals(actual, "21.948");
  });
  await t.step(
    "stringify exponential number to Vim's exponential number",
    () => {
      const actual = stringify(5e-10);
      assertEquals(
        actual,
        "5.0e-10",
        "Vim's exponential number requires `.0`",
      );
    },
  );
  await t.step("stringify Number object to number", () => {
    const actualInteger = stringify(new Number(42));
    assertEquals(actualInteger, "42");
    const actualFloat = stringify(new Number(21.948));
    assertEquals(actualFloat, "21.948");
    const actualExponential = stringify(new Number(5e-10));
    assertEquals(
      actualExponential,
      "5.0e-10",
      "Vim's exponential number requires `.0`",
    );
  });
  await t.step("stringify string to Vim's literal-string", () => {
    const actual = stringify("foo's bar");
    assertEquals(actual, "'foo''s bar'");
  });
  await t.step("stringify String object to Vim's literal-string", () => {
    const actual = stringify(new String("foo's bar"));
    assertEquals(actual, "'foo''s bar'");
  });
  await t.step("stringify Expression as-is", () => {
    const actual = stringify(
      expr`feedkeys("\<Cmd>call Foo(\"bar\")\<CR>")`,
    );
    assertEquals(actual, 'feedkeys("\\<Cmd>call Foo(\\"bar\\")\\<CR>")');
  });
  await t.step("stringify RawString to Vim's expr-string", () => {
    const actual = stringify(rawString`\<Cmd>call Foo("bar")\<CR>`);
    assertEquals(actual, '"\\<Cmd>call Foo(\\"bar\\")\\<CR>"');
  });
  await t.step("stringify array to Vim's list", () => {
    const actual = stringify(["foo", 42, null, undefined]);
    assertEquals(actual, "['foo',42,v:null,v:null]");
  });
  await t.step("stringify object to Vim's dict", () => {
    const actual = stringify({
      foo: "foo",
      bar: 42,
      // undefined value is omitted.
      undefinedValue: undefined,
      // null value is keeped.
      nullValue: null,
      // Function value is omitted.
      functionValue: () => {},
      // Symbol key is omitted.
      [Symbol("foo")]: "symbol key",
      // Symbol value is omitted.
      symbolValue: Symbol("foo"),
    });
    assertEquals(actual, "{'foo':'foo','bar':42,'nullValue':v:null}");
  });
  await t.step('calls `toJSON` with key: ""', () => {
    const x = {
      toJSON: (_key?: string | number) => "foo",
    };
    using s = spy(x, "toJSON");
    stringify(x);
    assertSpyCalls(s, 1);
    assertSpyCallArgs(s, 0, [""]);
  });
  await t.step("calls `toJSON` with key: Array index", () => {
    const y = {
      toJSON: (_key?: string | number) => "foo",
    };
    const x = [y, "bar", y];
    using s = spy(y, "toJSON");
    stringify(x);
    assertSpyCalls(s, 2);
    assertSpyCallArgs(s, 0, [0]);
    assertSpyCallArgs(s, 1, [2]);
  });
  await t.step("calls `toJSON` with key: Object key", () => {
    const z = {
      toJSON: (_key?: string | number) => "foo",
    };
    const x = { a: z, y: { b: z } };
    using s = spy(z, "toJSON");
    stringify(x);
    assertSpyCalls(s, 2);
    assertSpyCallArgs(s, 0, ["a"]);
    assertSpyCallArgs(s, 1, ["b"]);
  });
  await t.step("does not call nested `toJSON`", () => {
    const z = {
      toJSON: (_key?: string | number) => "foo",
    };
    const y = {
      toJSON: (_key?: string | number) => z,
    };
    const x = { a: y };
    using s1 = spy(y, "toJSON");
    using s2 = spy(z, "toJSON");
    stringify(x);
    assertSpyCalls(s1, 1);
    assertSpyCallArgs(s1, 0, ["a"]);
    assertSpyCalls(s2, 0);
  });
  await t.step("stringify object that has `toJSON` method", () => {
    const actual = stringify({
      foo: 42,
      toJSON: () => [123, "bar"],
    });
    assertEquals(actual, "[123,'bar']");
  });
  await t.step("stringify function that has `toJSON` method", () => {
    const actual = stringify(Object.assign(
      () => {},
      {
        toJSON: () => [123, "bar"],
      },
    ));
    assertEquals(actual, "[123,'bar']");
  });
  await t.step("stringify Date that has native `toJSON` method", () => {
    // NOTE: `Date.prototype.toJSON` returns a string representing date in the same ISO format as `Date.prototype.toISOString()`.
    const actual = stringify(new Date("2007-08-31T12:34:56.000Z"));
    assertEquals(actual, "'2007-08-31T12:34:56.000Z'");
  });
  await t.step("stringify ArrayBuffer to Vim's blob", () => {
    const typedArray = new Uint8Array(
      [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A],
    );
    const actual = stringify(typedArray.buffer);
    assertEquals(actual, "0z89504e470d0a1a0a");
  });
  await t.step("throws if value contains BigInt", () => {
    assertThrows(
      () => stringify(92382417n),
      TypeError,
      "BigInt value can't be serialized",
    );
  });
  await t.step("stringify BigInt that has `toJSON` method", () => {
    Object.assign(BigInt.prototype, {
      toJSON(): string {
        return this.toString();
      },
    });
    try {
      const actual = stringify(92382417n);
      assertEquals(actual, "'92382417'");
    } finally {
      // deno-lint-ignore no-explicit-any
      delete (BigInt.prototype as any).toJSON;
    }
  });
  await t.step("stringify complex object", () => {
    const actual = stringify([
      null,
      undefined,
      42,
      true,
      () => {},
      Symbol("foo"),
      "bar",
      {
        toJSON: () => [123, "baz"],
      },
      new Date("2007-08-31T12:34:56.000Z"),
      {
        k0: null,
        k1: undefined,
        k2: [
          {
            [Symbol("foo")]: 123,
            key: 234,
            expr: expr`foo#bar()`,
            rstr: rawString`\U0001F680`,
          },
        ],
        k3: new Uint8Array([0x01, 0xff, 0x00, 0x7f]).buffer,
      },
    ]);
    assertEquals(
      actual,
      `[v:null,v:null,42,v:true,v:null,v:null,'bar',[123,'baz'],'2007-08-31T12:34:56.000Z',{'k0':v:null,'k2':[{'key':234,'expr':foo#bar(),'rstr':"\\U0001F680"}],'k3':0z01ff007f}]`,
    );
  });
  await t.step("throws if value contains circular structure array", () => {
    const z: unknown[] = [];
    const x = [[z]];
    z.push(x);
    assertThrows(
      () => stringify(x),
      TypeError,
      "Converting circular structure",
    );
  });
  await t.step("throws if value contains circular structure record", () => {
    const x = { y: { z: {} } };
    Object.assign(x.y.z, { x });
    assertThrows(
      () => stringify(x),
      TypeError,
      "Converting circular structure",
    );
  });
  await t.step("does not throw if value contains the same reference", () => {
    const r = { v: "foo" };
    const x = { a: r, b: r, y: { c: r } };
    stringify(x);
  });
});

test({
  mode: "all",
  name: "Vim evaluates the stringify() value of",
  fn: async (denops, t) => {
    const tests: readonly [name: string, input: unknown, expected: string][] = [
      ["undefined", undefined, "v:null"],
      ["null", null, "v:null"],
      ["Function", () => 0, "v:null"],
      ["symbol", Symbol("foo"), "v:null"],
      ["true", true, "v:true"],
      ["false", false, "v:false"],
      ["Boolean(1)", Boolean(1), "v:true"],
      ["Boolean(0)", Boolean(0), "v:false"],
      ["123", 123, "123"],
      ["123.456", 123.456, "123.456"],
      ["5e-10", 5e-10, "5.0e-10"],
      ["Number(123)", Number(123), "123"],
      ["Number(123.456)", Number(123.456), "123.456"],
      ["Number(5e-10)", Number(5e-10), "5.0e-10"],
      [`"foo's bar"`, "foo's bar", `"foo's bar"`],
      [`String("foo's bar")`, String("foo's bar"), "'foo''s bar'"],
      ["Expression", expr`42 + 123`, "165"],
      ["RawString", rawString`\<Cmd>echo 1\<CR>`, '"\\<Cmd>echo 1\\<CR>"'],
      ["Array", [123, "foo", undefined], "[123,'foo',v:null]"],
      ["Object", { a: 123, b: "foo", c: undefined }, "{'a':123,'b':'foo'}"],
    ];
    for (const [name, input, expected] of tests) {
      await t.step(name, async () => {
        await denops.cmd("let v:errors = []");
        const actual = stringify(input);
        await denops.eval(`assert_equal(${expected}, eval(actual))`, {
          actual,
        });
        assertEquals(await denops.eval("v:errors"), []);
      });
    }
  },
});
