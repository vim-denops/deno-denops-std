import {
  assert,
  assertEquals,
  assertRejects,
  assertStrictEquals,
} from "@std/assert";
import { assertSpyCalls, resolvesNext, spy, stub } from "@std/testing/mock";
import { DisposableStack } from "@nick/dispose";
import type { BatchError, Denops } from "@denops/core";
import { test } from "@denops/test";
import { expr } from "./expression.ts";
import { rawString } from "./string.ts";

import { useEval } from "./use_eval.ts";

test({
  mode: "all",
  name: "useEval()",
  fn: async (denops, t) => {
    await t.step("calls the 'executor'", async () => {
      const executor = spy(() => Promise.resolve());
      await useEval(denops, executor);
      assertSpyCalls(executor, 1);
    });
    await t.step("resolves a value that the 'executor' resolves", async () => {
      const actual = await useEval(denops, (_helper) => {
        return Promise.resolve("foo");
      });
      assertEquals(actual, "foo");
    });
    await t.step("rejects an error that the 'executor' throws", async () => {
      await assertRejects(
        () =>
          useEval(denops, (_helper) => {
            throw new Error("test error");
          }),
        Error,
        "test error",
      );
    });
    await t.step("rejects an error that the 'executor' rejects", async () => {
      await assertRejects(
        () =>
          useEval(denops, (_helper) => {
            return Promise.reject(new Error("test error"));
          }),
        Error,
        "test error",
      );
    });
    await t.step(
      "calls 'denops.call()', 'denops.cmd()', 'denops.eval()' or 'denops.batch()' sequentially",
      async () => {
        await using testFn = await useTestFn(denops);
        await useEval(denops, async (helper) => {
          await helper.call("TestFn", "foo");
          await helper.cmd("call TestFn(1)");
          await helper.eval("TestFn(v:true)");
          await helper.batch(
            ["TestFn", "bar"],
            ["TestFn", "baz"],
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [
          ["foo"],
          [1],
          [true],
          ["bar"],
          ["baz"],
        ]);
      },
    );
  },
});

test({
  mode: "all",
  name: "UseEvalHelper",
  fn: async (denops, t) => {
    await t.step(".redraw()", async (t) => {
      await t.step("calls 'denops.redraw()'", async () => {
        using denops_redraw = spy(denops, "redraw");
        await useEval(denops, async (helper) => {
          await helper.redraw();
        });
        assertSpyCalls(denops_redraw, 1);
      });
    });
    await t.step(".call()", async (t) => {
      await t.step("calls Vim function", async () => {
        await using testFn = await useTestFn(denops);
        await useEval(denops, async (helper) => {
          await helper.call("TestFn", "foo", 1, true);
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [["foo", 1, true]]);
      });
      await t.step(
        "calls Vim function without after 'undefined' args",
        async () => {
          await using testFn = await useTestFn(denops);
          await useEval(denops, async (helper) => {
            await helper.call("TestFn", 1, 2, undefined, 3, 4);
          });
          const actual = await testFn.callArgs();
          assertEquals(actual, [[1, 2]]);
        },
      );
      await t.step("calls Vim function with Expression args", async () => {
        await using testFn = await useTestFn(denops);
        await using _buf = await useNewBuf(denops);
        await useEval(denops, async (denops) => {
          await denops.call(
            "TestFn",
            expr`#{ a: "foo", b: 1, c: v:true }`,
            expr`feedkeys("ifoo\<CR>", 'nx')`,
            expr`feedkeys('ibar\<CR>baz', 'nx')`,
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [
          [{ a: "foo", b: 1, c: true }, 0, 0],
        ]);
        const lines = await denops.call("getline", 1, 2);
        assertEquals(lines, [
          "foo",
          "bar\\<CR>baz",
        ]);
      });
      await t.step("calls Vim function with RawString args", async () => {
        await using _testFn = await useTestFn(denops);
        await using _buf = await useNewBuf(denops);
        await useEval(denops, async (denops) => {
          await denops.call(
            "TestFn",
            rawString`a\<Left>`,
            rawString`b\<Right>`,
            rawString`c\<CR>`,
          );
        });
        assert(
          await denops.eval(
            'g:test_fn_call_args ==# [["a\\<Left>", "b\\<Right>", "c\\<CR>"]]',
          ),
        );
      });
      await t.step("calls Vim function with complex args", async () => {
        await using testFn = await useTestFn(denops);
        await using _encoding = await setEncoding(denops, "utf-8");
        await using _buf = await useNewBuf(denops);
        await denops.call("execute", [
          "insert",
          "foobar",
          ".",
        ]);
        await useEval(denops, async (denops) => {
          await denops.call(
            "TestFn",
            [
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
                    expr: expr`getline(1)`,
                    rstr: rawString`\U0001F680`,
                  },
                ],
              },
            ],
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [[[
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
          "2007-08-31T12:34:56.000Z",
          {
            k0: null,
            k2: [
              {
                key: 234,
                expr: "foobar",
                rstr: `\uD83D\uDE80`, // u1F680 is surrogate pair
              },
            ],
          },
        ]]]);
      });
      await t.step("resolves a result of Vim function", async () => {
        let actual: unknown;
        await useEval(denops, async (helper) => {
          actual = await helper.call("range", 2, 4);
        });
        assertEquals(actual, [2, 3, 4]);
      });
      await t.step("rejects an error that Vim throws", async () => {
        await useEval(denops, async (helper) => {
          await assertRejects(
            () => helper.call("notexistsfn"),
            Error,
            "Unknown function: notexistsfn",
          );
        });
      });
      await t.step(
        "rejects a TypeError if the 'ctx' is unserializable",
        async () => {
          await using testFn = await useTestFn(denops);
          await assertRejects(
            async () => {
              await useEval(denops, async (denops) => {
                await denops.call("TestFn", 10n);
              });
            },
            TypeError,
            "BigInt value can't be serialized",
          );
          const actual = await testFn.callArgs();
          assertEquals(actual, []);
        },
      );
    });
    await t.step(".cmd()", async (t) => {
      await t.step("executes Vim command", async () => {
        await using testFn = await useTestFn(denops);
        await useEval(denops, async (helper) => {
          await helper.cmd("call TestFn('foo', 1, v:true)");
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [["foo", 1, true]]);
      });
      await t.step("executes Vim command with Expression 'ctx'", async () => {
        await using testFn = await useTestFn(denops);
        await using _buf = await useNewBuf(denops);
        await useEval(denops, async (denops) => {
          await denops.cmd(
            "call TestFn(a, b, c)",
            {
              b: expr`#{ a: "foo", b: 1, c: v:true }`,
              c: expr`feedkeys("ifoo\<CR>", 'nx')`,
              a: expr`feedkeys('ibar\<CR>baz', 'nx')`,
            },
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [
          [0, { a: "foo", b: 1, c: true }, 0],
        ]);
        const lines = await denops.call("getline", 1, 2);
        assertEquals(lines, [
          "foo",
          "bar\\<CR>baz",
        ]);
      });
      await t.step("executes Vim command with RawString 'ctx'", async () => {
        await using _testFn = await useTestFn(denops);
        await using _buf = await useNewBuf(denops);
        await useEval(denops, async (denops) => {
          await denops.cmd(
            "call TestFn(a, b, c)",
            {
              a: rawString`a\<Left>`,
              b: rawString`b\<Right>`,
              c: rawString`c\<CR>`,
            },
          );
        });
        assert(
          await denops.eval(
            'g:test_fn_call_args ==# [["a\\<Left>", "b\\<Right>", "c\\<CR>"]]',
          ),
        );
      });
      await t.step("executes Vim command with complex 'ctx'", async () => {
        await using testFn = await useTestFn(denops);
        await using _encoding = await setEncoding(denops, "utf-8");
        await using _buf = await useNewBuf(denops);
        await denops.call("execute", [
          "new",
          "insert",
          "foobar",
          ".",
        ]);
        await useEval(denops, async (denops) => {
          await denops.cmd(
            "call TestFn(a)",
            {
              a: [
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
                      expr: expr`getline(1)`,
                      rstr: rawString`\U0001F680`,
                    },
                  ],
                },
              ],
            },
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [[[
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
          "2007-08-31T12:34:56.000Z",
          {
            k0: null,
            k2: [
              {
                key: 234,
                expr: "foobar",
                rstr: `\uD83D\uDE80`, // u1F680 is surrogate pair
              },
            ],
          },
        ]]]);
      });
      await t.step("rejects an error that Vim throws", async () => {
        await useEval(denops, async (helper) => {
          await assertRejects(
            () => helper.cmd("call notexistsfn()"),
            Error,
            "Unknown function: notexistsfn",
          );
        });
      });
      await t.step(
        "rejects a TypeError if the 'ctx' is unserializable",
        async () => {
          await using testFn = await useTestFn(denops);
          await assertRejects(
            async () => {
              await useEval(denops, async (denops) => {
                await denops.cmd("call TestFn(a)", { a: 10n });
              });
            },
            TypeError,
            "BigInt value can't be serialized",
          );
          const actual = await testFn.callArgs();
          assertEquals(actual, []);
        },
      );
    });
    await t.step(".eval()", async (t) => {
      await t.step("evaluates Vim expression", async () => {
        await using testFn = await useTestFn(denops);
        await useEval(denops, async (helper) => {
          await helper.eval("TestFn('foo', 1, v:true)");
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [
          ["foo", 1, true],
        ]);
      });
      await t.step(
        "evaluates Vim expression with Expression 'ctx'",
        async () => {
          await using testFn = await useTestFn(denops);
          await using _buf = await useNewBuf(denops);
          await useEval(denops, async (denops) => {
            await denops.eval(
              "TestFn(a, b, c)",
              {
                b: expr`#{ a: "foo", b: 1, c: v:true }`,
                c: expr`feedkeys("ifoo\<CR>", 'nx')`,
                a: expr`feedkeys('ibar\<CR>baz', 'nx')`,
              },
            );
          });
          const actual = await testFn.callArgs();
          assertEquals(actual, [
            [0, { a: "foo", b: 1, c: true }, 0],
          ]);
          const lines = await denops.call("getline", 1, 2);
          assertEquals(lines, [
            "foo",
            "bar\\<CR>baz",
          ]);
        },
      );
      await t.step(
        "evaluates Vim expression with RawString 'ctx'",
        async () => {
          await using _testFn = await useTestFn(denops);
          await using _buf = await useNewBuf(denops);
          await useEval(denops, async (denops) => {
            await denops.eval(
              "TestFn(a, b, c)",
              {
                a: rawString`a\<Left>`,
                b: rawString`b\<Right>`,
                c: rawString`c\<CR>`,
              },
            );
          });
          assert(
            await denops.eval(
              'g:test_fn_call_args ==# [["a\\<Left>", "b\\<Right>", "c\\<CR>"]]',
            ),
          );
        },
      );
      await t.step("evaluates Vim expression with complex 'ctx'", async () => {
        await using testFn = await useTestFn(denops);
        await using _encoding = await setEncoding(denops, "utf-8");
        await using _buf = await useNewBuf(denops);
        await denops.call("execute", [
          "insert",
          "foobar",
          ".",
        ]);
        await useEval(denops, async (denops) => {
          await denops.eval(
            "TestFn(a)",
            {
              a: [
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
                      expr: expr`getline(1)`,
                      rstr: rawString`\U0001F680`,
                    },
                  ],
                },
              ],
            },
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [[[
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
          "2007-08-31T12:34:56.000Z",
          {
            k0: null,
            k2: [
              {
                key: 234,
                expr: "foobar",
                rstr: `\uD83D\uDE80`, // u1F680 is surrogate pair
              },
            ],
          },
        ]]]);
      });
      await t.step("resolves a result of Vim expression", async () => {
        let actual: unknown;
        await useEval(denops, async (helper) => {
          actual = await helper.eval("range(2, 4)");
        });
        assertEquals(actual, [2, 3, 4]);
      });
      await t.step("rejects an error that Vim throws", async () => {
        await useEval(denops, async (helper) => {
          await assertRejects(
            () => helper.eval("notexistsfn()"),
            Error,
            "Unknown function: notexistsfn",
          );
        });
      });
      await t.step(
        "rejects a TypeError if the 'ctx' is unserializable",
        async () => {
          await using testFn = await useTestFn(denops);
          await assertRejects(
            async () => {
              await useEval(denops, async (denops) => {
                await denops.eval("TestFn(a)", { a: 10n });
              });
            },
            TypeError,
            "BigInt value can't be serialized",
          );
          const actual = await testFn.callArgs();
          assertEquals(actual, []);
        },
      );
    });
    await t.step(".batch()", async (t) => {
      await t.step("calls Vim functions", async () => {
        await using testFn = await useTestFn(denops);
        await useEval(denops, async (helper) => {
          await helper.batch(
            ["TestFn", "foo"],
            ["TestFn", 1],
            ["TestFn", true],
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [
          ["foo"],
          [1],
          [true],
        ]);
      });
      await t.step(
        "calls Vim functions without after 'undefined' args",
        async () => {
          await using testFn = await useTestFn(denops);
          await useEval(denops, async (helper) => {
            await helper.batch(
              ["TestFn", 1, 2, undefined, 3, 4],
            );
          });
          const actual = await testFn.callArgs();
          assertEquals(actual, [[1, 2]]);
        },
      );
      await t.step("calls Vim functions with Expression args", async () => {
        await using testFn = await useTestFn(denops);
        await using _buf = await useNewBuf(denops);
        await useEval(denops, async (denops) => {
          await denops.batch(
            [
              "TestFn",
              expr`#{ a: "foo", b: 1, c: v:true }`,
              expr`feedkeys("ifoo\<CR>", 'nx')`,
            ],
            [
              "TestFn",
              expr`feedkeys('ibar\<CR>baz', 'nx')`,
            ],
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [
          [{ a: "foo", b: 1, c: true }, 0],
          [0],
        ]);
        const lines = await denops.call("getline", 1, 2);
        assertEquals(lines, [
          "foo",
          "bar\\<CR>baz",
        ]);
      });
      await t.step("calls Vim functions with RawString args", async () => {
        await using _testFn = await useTestFn(denops);
        await using _buf = await useNewBuf(denops);
        await useEval(denops, async (denops) => {
          await denops.batch(
            [
              "TestFn",
              rawString`a\<Left>`,
              rawString`b\<Right>`,
            ],
            [
              "TestFn",
              rawString`c\<CR>`,
            ],
          );
        });
        assert(
          await denops.eval(
            'g:test_fn_call_args ==# [["a\\<Left>", "b\\<Right>"], ["c\\<CR>"]]',
          ),
        );
      });
      await t.step("calls Vim functions with complex args", async () => {
        await using testFn = await useTestFn(denops);
        await using _encoding = await setEncoding(denops, "utf-8");
        await using _buf = await useNewBuf(denops);
        await denops.call("execute", [
          "insert",
          "foobar",
          ".",
        ]);
        await useEval(denops, async (denops) => {
          await denops.batch(
            [
              "TestFn",
              [
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
                      expr: expr`getline(1)`,
                      rstr: rawString`\U0001F680`,
                    },
                  ],
                },
              ],
            ],
          );
        });
        const actual = await testFn.callArgs();
        assertEquals(actual, [[[
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
          "2007-08-31T12:34:56.000Z",
          {
            k0: null,
            k2: [
              {
                key: 234,
                expr: "foobar",
                rstr: `\uD83D\uDE80`, // u1F680 is surrogate pair
              },
            ],
          },
        ]]]);
      });
      await t.step("resolves results of Vim functions", async () => {
        let actual: unknown;
        await useEval(denops, async (helper) => {
          actual = await helper.batch(
            ["range", 0, 2],
            ["range", 2, 4],
            ["matchstr", "hello", "el*"],
          );
        });
        assertEquals(actual, [
          [0, 1, 2],
          [2, 3, 4],
          "ell",
        ]);
      });
      await t.step("resolves an empty array if no arguments", async () => {
        let actual: unknown;
        await useEval(denops, async (helper) => {
          actual = await helper.batch();
        });
        assertEquals(actual, []);
      });
      await t.step("rejects a BatchError that Vim throws", async () => {
        await useEval(denops, async (helper) => {
          const error = await assertRejects(
            () =>
              helper.batch(
                ["range", 3],
                ["range", 2, 4],
                ["notexistsfn"],
                ["range", 3],
              ),
            Error,
            "Unknown function: notexistsfn",
          );
          assertEquals(error.name, "BatchError");
          assertEquals((error as BatchError).results, [
            [0, 1, 2],
            [2, 3, 4],
          ]);
        });
      });
      await t.step(
        "rejects a TypeError if the 'ctx' is unserializable",
        async () => {
          await using testFn = await useTestFn(denops);
          await assertRejects(
            async () => {
              await useEval(denops, async (denops) => {
                await denops.batch(
                  ["TestFn", "foo"],
                  ["TestFn", 10n],
                );
              });
            },
            TypeError,
            "BigInt value can't be serialized",
          );
          const actual = await testFn.callArgs();
          assertEquals(actual, []);
        },
      );
    });
    await t.step(".dispatch()", async (t) => {
      await t.step("calls 'denops.dispatch()'", async () => {
        using denops_dispatch = stub(denops, "dispatch", resolvesNext([1]));
        await useEval(denops, async (helper) => {
          await helper.dispatch("pluginA", "foo", "bar", 42, false);
        });
        assertEquals(denops_dispatch.calls.map((c) => c.args), [
          ["pluginA", "foo", "bar", 42, false],
        ]);
      });
      await t.step("resolves a result of 'denops.dispatch()'", async () => {
        using _denops_dispatch = stub(
          denops,
          "dispatch",
          resolvesNext(["one"]),
        );
        let actual: unknown;
        await useEval(denops, async (helper) => {
          actual = await helper.dispatch("pluginA", "foo", "bar");
        });
        assertEquals(actual, "one");
      });
      await t.step(
        "rejects an error that 'denops.dispatch()' rejects",
        async () => {
          using _denops_dispatch = stub(
            denops,
            "dispatch",
            resolvesNext([new Error("test plugin error")]),
          );
          await useEval(denops, async (helper) => {
            await assertRejects(
              () => helper.dispatch("pluginA", "foo", "bar"),
              Error,
              "test plugin error",
            );
          });
        },
      );
    });
    await t.step(".name", async (t) => {
      await t.step("returns 'denops.name'", async () => {
        let actual: unknown;
        await useEval(denops, (helper) => {
          actual = helper.name;
          return Promise.resolve();
        });
        assertStrictEquals(actual, denops.name);
      });
    });
    await t.step(".meta", async (t) => {
      await t.step("returns 'denops.meta'", async () => {
        let actual: unknown;
        await useEval(denops, (helper) => {
          actual = helper.meta;
          return Promise.resolve();
        });
        assertStrictEquals(actual, denops.meta);
      });
    });
    await t.step(".interrupted", async (t) => {
      await t.step("returns 'denops.interrupted'", async () => {
        let actual: unknown;
        await useEval(denops, (helper) => {
          actual = helper.interrupted;
          return Promise.resolve();
        });
        assertStrictEquals(actual, denops.interrupted);
      });
    });
    await t.step(".context", async (t) => {
      await t.step("returns 'denops.context'", async () => {
        let actual: unknown;
        await useEval(denops, (helper) => {
          actual = helper.context;
          return Promise.resolve();
        });
        assertStrictEquals(actual, denops.context);
      });
    });
    await t.step(".dispatcher", async (t) => {
      const MY_DISPATCHER = {
        foo: () => {},
      };
      await t.step("sets to 'denops.dispatcher'", async () => {
        using stack = new DisposableStack();
        stack.adopt(denops.dispatcher, (saved) => {
          denops.dispatcher = saved;
        });
        await useEval(denops, (helper) => {
          helper.dispatcher = MY_DISPATCHER;
          return Promise.resolve();
        });
        assertStrictEquals(denops.dispatcher, MY_DISPATCHER);
      });
      await t.step("returns 'denops.dispatcher'", async () => {
        using stack = new DisposableStack();
        stack.adopt(denops.dispatcher, (saved) => {
          denops.dispatcher = saved;
        });
        denops.dispatcher = MY_DISPATCHER;
        let actual: unknown;
        await useEval(denops, (helper) => {
          actual = helper.dispatcher;
          return Promise.resolve();
        });
        assertStrictEquals(actual, MY_DISPATCHER);
      });
    });
  },
});

async function useTestFn(denops: Denops) {
  await denops.call("execute", [
    "let g:test_fn_call_args = []",
    "function TestFn(...) abort",
    "  call add(g:test_fn_call_args, a:000->copy())",
    "endfunction",
  ], "");
  return {
    async callArgs() {
      return await denops.eval("g:test_fn_call_args");
    },
    async [Symbol.asyncDispose]() {
      await denops.call("execute", [
        "unlet! g:test_fn_call_args",
        "delfunction! TestFn",
      ]);
    },
  };
}

async function useNewBuf(denops: Denops) {
  await denops.cmd("new");
  const bufNr = await denops.call("bufnr") as number;
  return {
    async [Symbol.asyncDispose]() {
      await denops.cmd(`${bufNr}bwipeout!`);
    },
  };
}

async function setEncoding(denops: Denops, encoding: string) {
  const saved = await denops.eval("&encoding");
  await denops.cmd("let &encoding = encoding", { encoding });
  return {
    async [Symbol.asyncDispose]() {
      await denops.cmd("let &encoding = saved", { saved });
    },
  };
}
