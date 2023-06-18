import {
  assertEquals,
  assertInstanceOf,
  assertObjectMatch,
  assertRejects,
  assertThrows,
} from "https://deno.land/std@0.205.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import {
  exprQuote,
  isExprString,
  useExprString,
  vimStringify,
} from "./expr_string.ts";

Deno.test({
  name: "@internal vimStringify()",
  fn: async (t) => {
    await t.step({
      name: "stringify undefined to `v:null`.",
      fn: () => {
        const actual = vimStringify(undefined);
        assertEquals(actual, "v:null");
      },
    });
    await t.step({
      name: "stringify null to `v:null`.",
      fn: () => {
        const actual = vimStringify(null);
        assertEquals(actual, "v:null");
      },
    });
    await t.step({
      name: "stringify Function to `v:null`.",
      fn: () => {
        const actual = vimStringify(() => {});
        assertEquals(actual, "v:null");
      },
    });
    await t.step({
      name: "stringify Symbol to `v:null`.",
      fn: () => {
        const actual = vimStringify(Symbol("foo"));
        assertEquals(actual, "v:null");
      },
    });
    await t.step({
      name: "stringify true to `v:true`.",
      fn: () => {
        const actual = vimStringify(true);
        assertEquals(actual, "v:true");
      },
    });
    await t.step({
      name: "stringify false to `v:false`.",
      fn: () => {
        const actual = vimStringify(false);
        assertEquals(actual, "v:false");
      },
    });
    await t.step({
      name: "stringify Boolean object to `v:true` or `v:false`.",
      fn: () => {
        const actualTrue = vimStringify(new Boolean(true));
        assertEquals(actualTrue, "v:true");
        const actualFalse = vimStringify(new Boolean(false));
        assertEquals(actualFalse, "v:false");
      },
    });
    await t.step({
      name: "stringify integer number to integer number.",
      fn: () => {
        const actual = vimStringify(42);
        assertEquals(actual, "42");
      },
    });
    await t.step({
      name: "stringify float number to float number.",
      fn: () => {
        const actual = vimStringify(21.948);
        assertEquals(actual, "21.948");
      },
    });
    await t.step({
      name: "stringify exponential number to Vim's exponential number.",
      fn: () => {
        const actual = vimStringify(5e-10);
        assertEquals(
          actual,
          "5.0e-10",
          "Vim's exponential number requires `.0`.",
        );
      },
    });
    await t.step({
      name: "stringify Number object to number.",
      fn: () => {
        const actualInteger = vimStringify(new Number(42));
        assertEquals(actualInteger, "42");
        const actualFloat = vimStringify(new Number(21.948));
        assertEquals(actualFloat, "21.948");
        const actualExponential = vimStringify(new Number(5e-10));
        assertEquals(
          actualExponential,
          "5.0e-10",
          "Vim's exponential number requires `.0`.",
        );
      },
    });
    await t.step({
      name: "stringify string to `'...'`.",
      fn: () => {
        const actual = vimStringify("foo's bar");
        assertEquals(actual, "'foo''s bar'");
      },
    });
    await t.step({
      name: "stringify String object to `'...'`.",
      fn: () => {
        const actual = vimStringify(new String("foo's bar"));
        assertEquals(actual, "'foo''s bar'");
      },
    });
    await t.step({
      name: 'stringify ExprString to `"..."`.',
      fn: () => {
        const actual = vimStringify(exprQuote`\<Cmd>call Foo("bar")\<CR>`);
        assertEquals(actual, '"\\<Cmd>call Foo(\\"bar\\")\\<CR>"');
      },
    });
    await t.step({
      name: "stringify array to `[value0,value1,...]`.",
      fn: () => {
        const actual = vimStringify(["foo", 42, null, undefined]);
        assertEquals(actual, "['foo',42,v:null,v:null]");
      },
    });
    await t.step({
      name: "stringify object to `{'key0':value0,'key1':value1,...}`.",
      fn: () => {
        const actual = vimStringify({
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
      },
    });
    await t.step({
      name: "stringify object that has `toJSON()` method.",
      fn: () => {
        const actual = vimStringify({
          foo: 42,
          toJSON: () => JSON.stringify([123, "bar"]),
        });
        assertEquals(actual, "[123,'bar']");
      },
    });
    await t.step({
      name: "stringify function that has `toJSON()` method.",
      fn: () => {
        const actual = vimStringify(Object.assign(
          () => {},
          {
            toJSON: () => JSON.stringify([123, "bar"]),
          },
        ));
        assertEquals(actual, "[123,'bar']");
      },
    });
    await t.step({
      name: "raises TypeError if specified BigInt.",
      fn: () => {
        assertThrows(
          () => vimStringify(92382417n),
          TypeError,
          "BigInt value can't be serialized",
        );
      },
    });
    await t.step({
      name: "stringify BigInt that has `toJSON()` method.",
      fn: () => {
        Object.assign(BigInt.prototype, {
          toJSON(): string {
            return this.toString();
          },
        });
        try {
          const actual = vimStringify(92382417n);
          assertEquals(actual, "92382417");
        } finally {
          // deno-lint-ignore no-explicit-any
          delete (BigInt.prototype as any).toJSON;
        }
      },
    });
    await t.step({
      name: "stringify complex object.",
      fn: () => {
        const actual = vimStringify([
          null,
          undefined,
          42,
          true,
          () => {},
          Symbol("foo"),
          "bar",
          {
            toJSON: () => JSON.stringify([123, "baz"]),
          },
          {
            k0: null,
            k1: undefined,
            k2: [
              {
                [Symbol("foo")]: 123,
                key: 234,
                expr: exprQuote`\U0001F680`,
              },
            ],
          },
        ]);
        assertEquals(
          actual,
          `[v:null,v:null,42,v:true,v:null,v:null,'bar',[123,'baz'],{'k0':v:null,'k2':[{'key':234,'expr':"\\U0001F680"}]}]`,
        );
      },
    });
  },
});

Deno.test({
  name: "exprQuote()",
  fn: async (t) => {
    await t.step({
      name: "returns a string marked as ExprString.",
      fn: () => {
        const actual = exprQuote`foo`;
        assertInstanceOf(actual, String);
        assertEquals(`${actual}`, "foo");
        assertObjectMatch(actual, { __denops_expr_string: 1 });
      },
    });
    await t.step({
      name: "converts a template string to a string.",
      fn: () => {
        const actual = exprQuote`number:${40 + 2},string:${"foo"},null:${null}`;
        assertEquals(`${actual}`, "number:42,string:foo,null:null");
      },
    });
  },
});

Deno.test({
  name: "isExprString()",
  fn: async (t) => {
    await t.step({
      name: "returns true if the value is ExprString.",
      fn: () => {
        const actual = isExprString(exprQuote`foo`);
        assertEquals(actual, true);
      },
    });
    await t.step({
      name: "returns false if the value is not ExprString.",
      fn: () => {
        const actual = isExprString("foo");
        assertEquals(actual, false);
      },
    });
  },
});

test({
  mode: "all",
  name: "useExprString()",
  fn: async (denops, t) => {
    await t.step({
      name:
        "sequentially execute 'denops.call()', 'denops.cmd()' or 'denops.eval()'.",
      fn: async () => {
        await denops.cmd("let g:denops_expr_string_test = 10");
        const result = await useExprString(denops, async (denops) => {
          await denops.call("execute", "let g:denops_expr_string_test *= 2");
          await denops.cmd("let g:denops_expr_string_test += 2");
          return await denops.eval("g:denops_expr_string_test - 1");
        });
        assertEquals(result, 21);
      },
    });
    await t.step({
      name: "sequentially execute calls of 'denops.batch()'.",
      fn: async () => {
        const result = await useExprString(denops, async (denops) => {
          return await denops.batch(
            ["range", 0],
            ["range", 1],
            ["range", 2],
          );
        });
        assertEquals(result, [[], [0], [0, 1]]);
      },
    });
    await t.step({
      name: "omit undefined and after it args in 'denops.call()'.",
      fn: async () => {
        const result = await useExprString(denops, async (denops) => {
          return await denops.call("abs", 12.34, undefined, 3);
        });
        assertEquals(result, 12.34);
      },
    });
    await t.step({
      name: "omit undefined and after it args in 'denops.batch()'.",
      fn: async () => {
        const result = await useExprString(denops, async (denops) => {
          return await denops.batch(
            ["abs", 12.34, undefined, 3],
          );
        });
        assertEquals(result, [12.34]);
      },
    });
    await t.step({
      name: "execute 'denops.call()' with ExprString.",
      fn: async () => {
        await denops.cmd("let g:denops_expr_string_test = 10");
        await useExprString(denops, async (denops) => {
          await denops.call(
            "feedkeys",
            exprQuote`\<Cmd>let g:denops_expr_string_test += 2\<CR>`,
            "x",
          );
        });
        assertEquals(await denops.eval("g:denops_expr_string_test"), 12);
      },
    });
    await t.step({
      name: "execute 'denops.cmd()' with ExprString.",
      fn: async () => {
        await denops.cmd("let g:denops_expr_string_test = 10");
        await useExprString(denops, async (denops) => {
          await denops.cmd(
            "call feedkeys(keys, flags)",
            {
              keys: exprQuote`\<Cmd>let g:denops_expr_string_test *= 2\<CR>`,
              flags: "x",
            },
          );
        });
        assertEquals(await denops.eval("g:denops_expr_string_test"), 20);
      },
    });
    await t.step({
      name: "execute 'denops.eval()' with ExprString.",
      fn: async () => {
        await denops.cmd("let g:denops_expr_string_test = 10");
        await useExprString(denops, async (denops) => {
          await denops.eval(
            "feedkeys(keys, flags)",
            {
              keys: exprQuote`\<Cmd>let g:denops_expr_string_test -= 2\<CR>`,
              flags: "x",
            },
          );
        });
        assertEquals(await denops.eval("g:denops_expr_string_test"), 8);
      },
    });
    await t.step({
      name: "execute 'denops.batch()' with ExprString.",
      fn: async () => {
        await denops.cmd("let g:denops_expr_string_test = 10");
        await useExprString(denops, async (denops) => {
          await denops.batch(
            [
              "feedkeys",
              exprQuote`\<Cmd>let g:denops_expr_string_test += 2\<CR>`,
            ],
            [
              "feedkeys",
              exprQuote`\<Cmd>let g:denops_expr_string_test *= 2\<CR>`,
            ],
            [
              "feedkeys",
              exprQuote`\<Cmd>let g:denops_expr_string_test -= 1\<CR>`,
              "x",
            ],
          );
        });
        assertEquals(await denops.eval("g:denops_expr_string_test"), 23);
      },
    });
    await t.step({
      name: "execute 'denops.call()' with complex args.",
      fn: async () => {
        const savedEncoding = await denops.eval("&encoding");
        await denops.cmd("set encoding=utf-8");
        try {
          const result = await useExprString(denops, async (denops) => {
            return await denops.call(
              "map",
              [
                null,
                undefined,
                42,
                true,
                () => {},
                Symbol("foo"),
                "bar",
                {
                  toJSON: () => JSON.stringify([123, "baz"]),
                },
                {
                  k0: null,
                  k1: undefined,
                  k2: [
                    {
                      [Symbol("foo")]: 123,
                      key: 234,
                      expr: exprQuote`\U0001F680`,
                    },
                  ],
                },
              ],
              "v:val",
            );
          });
          assertEquals(result, [
            null,
            null,
            42,
            true,
            null,
            null,
            "bar",
            [
              123,
              "baz",
            ],
            {
              k0: null,
              k2: [
                {
                  key: 234,
                  expr: `\uD83D\uDE80`, // u1F680 is surrogate pair
                },
              ],
            },
          ]);
        } finally {
          await denops.cmd(`set encoding=${savedEncoding}`);
        }
      },
    });
    await t.step({
      name:
        "throws an error if BigInt is specified in args of 'denops.call()'.",
      fn: async () => {
        await assertRejects(
          async () => {
            await useExprString(denops, async (denops) => {
              await denops.call("range", 10n);
            });
          },
          TypeError,
          "BigInt value can't be serialized",
        );
      },
    });
  },
});
