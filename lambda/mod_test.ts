import { assertEquals, assertRejects, assertStringIncludes } from "@std/assert";
import {
  assertSpyCallArgs,
  assertSpyCalls,
  resolvesNext,
  returnsNext,
  spy,
} from "@std/testing/mock";
import { flushPromises } from "@core/asyncutil";
import { assert, is } from "@core/unknownutil";
import { test } from "@denops/test";
import { expr, rawString } from "../eval/mod.ts";
import * as lambda from "./mod.ts";

const NOOP = () => {};

test({
  mode: "all",
  name: "lambda",
  fn: async (denops, t) => {
    await t.step("register()", async (t) => {
      await t.step("if a non-async 'fn' is specified", async (t) => {
        await t.step("registers a lambda function", async (t) => {
          const fn = spy(returnsNext(["foo", "bar", "baz"]));
          const id = lambda.register(denops, fn);
          assertSpyCalls(fn, 0);
          assertEquals(await denops.dispatch(denops.name, id), "foo");
          assertSpyCalls(fn, 1);

          await t.step("which can be called multiple times", async () => {
            assertEquals(await denops.dispatch(denops.name, id), "bar");
            assertEquals(await denops.dispatch(denops.name, id), "baz");
            assertSpyCalls(fn, 3);
          });
        });
        await t.step("if the 'fn' throws an error", async (t) => {
          await t.step("the lambda function rejects", async () => {
            const fn = returnsNext<never>([new Error("test error")]);
            const id = lambda.register(denops, fn);

            const error = await assertRejects(
              () => denops.dispatch(denops.name, id),
            );
            assertStringIncludes(error as string, "test error");
          });
        });
      });
      await t.step("if an async 'fn' is specified", async (t) => {
        await t.step("registers a lambda function", async (t) => {
          const fn = spy(resolvesNext(["foo", "bar", "baz"]));
          const id = lambda.register(denops, fn);
          assertSpyCalls(fn, 0);
          assertEquals(await denops.dispatch(denops.name, id), "foo");
          assertSpyCalls(fn, 1);

          await t.step("which can be called multiple times", async () => {
            assertEquals(await denops.dispatch(denops.name, id), "bar");
            assertEquals(await denops.dispatch(denops.name, id), "baz");
            assertSpyCalls(fn, 3);
          });
        });
        await t.step("if the 'fn' rejects an error", async (t) => {
          await t.step("the lambda function rejects", async () => {
            const fn = resolvesNext<never>([new Error("test error")]);
            const id = lambda.register(denops, fn);

            const error = await assertRejects(
              () => denops.dispatch(denops.name, id),
            );
            assertStringIncludes(error as string, "test error");
          });
        });
      });
      await t.step("if 'once' option is specified", async (t) => {
        await t.step("registers an oneshot lambda function", async (t) => {
          const waiter = Promise.withResolvers<void>();
          const fn = spy(resolvesNext([waiter.promise.then(() => "foo")]));
          const id = lambda.register(denops, fn, { once: true });
          assertSpyCalls(fn, 0);

          // Call the lambda function twice before the first call resolves
          const firstCall = denops.dispatch(denops.name, id);
          const secondCall = denops.dispatch(denops.name, id);
          secondCall.catch(NOOP);
          await flushPromises();
          waiter.resolve();

          assertEquals(await firstCall, "foo");
          assertSpyCalls(fn, 1);

          await t.step("which will be removed if called once", async () => {
            const error = await assertRejects(() => secondCall);
            assertStringIncludes(
              error as string,
              "denops.dispatcher[name] is not a function",
            );
            assertSpyCalls(fn, 1);
          });
        });
        await t.step("if the 'fn' throws an error", async (t) => {
          const fn = spy(returnsNext([new Error("test error")]));
          const id = lambda.register(denops, fn, { once: true });
          await denops.dispatch(denops.name, id).catch(NOOP);
          assertSpyCalls(fn, 1);

          await t.step("which will be removed if called once", async () => {
            const error = await assertRejects(
              () => denops.dispatch(denops.name, id),
            );
            assertStringIncludes(
              error as string,
              "denops.dispatcher[name] is not a function",
            );
            assertSpyCalls(fn, 1);
          });
        });
        await t.step("if the 'fn' rejects an error", async (t) => {
          const fn = spy(resolvesNext<never>([new Error("test error")]));
          const id = lambda.register(denops, fn, { once: true });
          await denops.dispatch(denops.name, id).catch(NOOP);
          assertSpyCalls(fn, 1);

          await t.step("which will be removed if called once", async () => {
            const error = await assertRejects(
              () => denops.dispatch(denops.name, id),
            );
            assertStringIncludes(
              error as string,
              "denops.dispatcher[name] is not a function",
            );
            assertSpyCalls(fn, 1);
          });
        });
      });
    });
    await t.step("unregister()", async (t) => {
      await t.step("if 'id' is registered", async (t) => {
        await t.step("unregisters the lambda function", async () => {
          const fn = spy(returnsNext(["foo"]));
          const id = lambda.register(denops, fn);
          lambda.unregister(denops, id);

          const error = await assertRejects(
            () => denops.dispatch(denops.name, id),
          );
          assertStringIncludes(
            error as string,
            "denops.dispatcher[name] is not a function",
          );
          assertSpyCalls(fn, 0);
        });
        await t.step("returns `true`", () => {
          const id = lambda.register(denops, () => "foo");
          assertEquals(lambda.unregister(denops, id), true);
        });
      });
      await t.step("if 'id' is not registered", async (t) => {
        await t.step("does not unregister lambda functions", async () => {
          const fn = spy(returnsNext(["foo"]));
          const id = lambda.register(denops, fn);
          lambda.unregister(denops, "not-registered-id");

          assertSpyCalls(fn, 0);
          assertEquals(
            await denops.dispatch(denops.name, id),
            "foo",
            "The method is available",
          );
          assertSpyCalls(fn, 1);
        });
        await t.step("returns `false`", () => {
          assertEquals(lambda.unregister(denops, "not-registered-id"), false);
        });
      });
    });
    await t.step("add()", async (t) => {
      await t.step("registers a lambda function", async () => {
        // Unregister all methods
        denops.dispatcher = {};
        const fn = spy(returnsNext(["foo", "bar"]));
        using lo = lambda.add(denops, fn);

        assertEquals(Object.keys(denops.dispatcher), [lo.id]);
        assertSpyCalls(fn, 0);
        assertEquals(await denops.dispatch(denops.name, lo.id), "foo");
        assertEquals(await denops.dispatch(denops.name, lo.id), "bar");
        assertSpyCalls(fn, 2);
      });
      await t.step("returns a Lambda object", () => {
        using lo = lambda.add(denops, () => "foo");

        assert(
          lo,
          is.ObjectOf({
            id: is.String,
            notify: is.Function,
            request: is.Function,
            dispose: is.Function,
            [Symbol.dispose]: is.Function,
          }),
        );
      });
    });
    await t.step("Lambda", async (t) => {
      await t.step(".notify() returns a Vim expression", async (t) => {
        await t.step("that calls the registered `fn`", async (t) => {
          const tests: readonly (
            [name: string, args: unknown[], expected: unknown[]]
          )[] = [
            ["no", [], []],
            ["string", ["foo", "bar"], ["foo", "bar"]],
            ["number", [123, 456], [123, 456]],
            ["undefined", [undefined], [null]],
            ["null", [null], [null]],
            ["boolean", [true, false, false], [true, false, false]],
            ["Function", [() => 0, () => 1], [null, null]],
            ["symbol", [Symbol("foo"), Symbol("bar")], [null, null]],
            ["Array", [["a", 0], ["b", 1]], [["a", 0], ["b", 1]]],
            [
              "Object",
              [{ foo: "a" }, { bar: 0 }],
              [{ foo: "a" }, { bar: 0 }],
            ],
            [
              "Object with symbol keys",
              [{ [Symbol("foo")]: "a" }, { [Symbol("bar")]: "b" }],
              [{}, {}],
            ],
            ["Expression", [expr`100 + 23`], [123]],
            ["RawString", [rawString`\U0001F41C`], ["\u{0001F41C}"]],
          ];
          for (const [name, args, expected] of tests) {
            await t.step(`with ${name} arguments`, async () => {
              const fn = spy(returnsNext("foo"));
              using lo = lambda.add(denops, fn);
              assertSpyCalls(fn, 0);
              await denops.eval(lo.notify(...args));
              assertSpyCalls(fn, 1);
              assertSpyCallArgs(fn, 0, expected);
            });
          }
        });
        await t.step("that evaluates to 0", async (t) => {
          const tests: readonly (
            [name: string, returned: unknown]
          )[] = [
            ["string", "foo"],
            ["number", 123],
            ["undefined", undefined],
            ["null", null],
            ["true", true],
            ["false", false],
            ["Function", () => 0],
            ["symbol", Symbol("foo")],
            ["Array", [0, 1]],
            ["Object", { foo: "a" }],
            ["Object with symbol keys", { [Symbol("foo")]: "a" }],
            ["Expression", expr`100 + 23`],
            ["RawString", rawString`\U0001F41C`],
          ];
          for (const [name, returned] of tests) {
            await t.step(`which returns ${name}`, async () => {
              const fn = spy(returnsNext([returned]));
              using lo = lambda.add(denops, fn);
              const actual = await denops.eval(lo.notify());
              assertEquals(actual, 0);
            });
          }
        });
      });
      await t.step(".request() returns a Vim expression", async (t) => {
        await t.step("that calls the registered `fn`", async (t) => {
          const tests: readonly (
            [name: string, args: unknown[], expected: unknown[]]
          )[] = [
            ["no", [], []],
            ["string", ["foo", "bar"], ["foo", "bar"]],
            ["number", [123, 456], [123, 456]],
            ["undefined", [undefined], [null]],
            ["null", [null], [null]],
            ["boolean", [true, false, false], [true, false, false]],
            ["Function", [() => 0, () => 1], [null, null]],
            ["symbol", [Symbol("foo"), Symbol("bar")], [null, null]],
            ["Array", [["a", 0], ["b", 1]], [["a", 0], ["b", 1]]],
            [
              "Object",
              [{ foo: "a" }, { bar: 0 }],
              [{ foo: "a" }, { bar: 0 }],
            ],
            [
              "Object with symbol keys",
              [{ [Symbol("foo")]: "a" }, { [Symbol("bar")]: "b" }],
              [{}, {}],
            ],
            ["Expression", [expr`100 + 23`], [123]],
            ["RawString", [rawString`\U0001F41C`], ["\u{0001F41C}"]],
          ];
          for (const [name, args, expected] of tests) {
            await t.step(`with ${name} arguments`, async () => {
              const fn = spy(returnsNext(["foo"]));
              using lo = lambda.add(denops, fn);
              assertSpyCalls(fn, 0);
              await denops.eval(lo.request(...args));
              assertSpyCalls(fn, 1);
              assertSpyCallArgs(fn, 0, expected);
            });
          }
        });
        await t.step("that evaluates the registered `fn`", async (t) => {
          const tests: readonly (
            [name: string, returned: unknown, expected: unknown]
          )[] = [
            ["string", "foo", "foo"],
            ["number", 123, 123],
            ["undefined", undefined, null],
            ["null", null, null],
            ["true", true, true],
            ["false", false, false],
            ["Function", () => 0, null],
            ["symbol", Symbol("foo"), null],
            ["Array", [0, 1], [0, 1]],
            ["Object", { foo: "a" }, { foo: "a" }],
            ["Object with symbol keys", { [Symbol("foo")]: "a" }, {}],
            ["Expression", expr`100 + 23`, 123],
            ["RawString", rawString`\U0001F41C`, "\u{0001F41C}"],
          ];
          for (const [name, returned, expected] of tests) {
            await t.step(`which returns ${name}`, async () => {
              const fn = spy(returnsNext([returned]));
              using lo = lambda.add(denops, fn);
              const actual = await denops.eval(lo.request());
              assertEquals(actual, expected);
            });
          }
        });
      });
      await t.step(".dispose() unregisters the lambda function", async () => {
        // Unregister all methods
        denops.dispatcher = {};
        const fn = spy(returnsNext(["foo"]));
        using lo = lambda.add(denops, fn);
        await denops.dispatch(denops.name, lo.id);
        assertSpyCalls(fn, 1);
        assertEquals(
          Object.keys(denops.dispatcher),
          [lo.id],
          "The method is available",
        );
        lo.dispose();

        const error = await assertRejects(
          () => denops.dispatch(denops.name, lo.id),
        );
        assertStringIncludes(
          error as string,
          "denops.dispatcher[name] is not a function",
        );
        assertSpyCalls(fn, 1);
        assertEquals(
          Object.keys(denops.dispatcher),
          [],
          "The method is unregistered",
        );
      });
      await t.step("is diposable", async () => {
        // Unregister all methods
        denops.dispatcher = {};
        const fn = spy(returnsNext(["foo"]));
        let id: string;
        {
          using lo = lambda.add(denops, fn);
          id = lo.id;
          await denops.dispatch(denops.name, lo.id);

          assertSpyCalls(fn, 1);
          assertEquals(
            Object.keys(denops.dispatcher),
            [lo.id],
            "The method is available",
          );
        }

        const error = await assertRejects(
          () => denops.dispatch(denops.name, id),
        );
        assertStringIncludes(
          error as string,
          "denops.dispatcher[name] is not a function",
        );
        assertSpyCalls(fn, 1);
        assertEquals(
          Object.keys(denops.dispatcher),
          [],
          "The method is unregistered",
        );
      });
    });
  },
});
