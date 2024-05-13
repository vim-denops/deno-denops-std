import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.8.0/mod.ts";
import * as lambda from "./mod.ts";

test({
  mode: "all",
  name: "lambda",
  fn: async (denops, t) => {
    await t.step({
      name: "register() registers a lambda function",
      fn: async () => {
        const id = lambda.register(
          denops,
          () => Promise.resolve("0"),
        );
        assertEquals(await denops.dispatch(denops.name, id), "0");
        assertEquals(await denops.dispatch(denops.name, id), "0");
      },
    });

    await t.step({
      name:
        "register() registers an oneshot lambda functions when 'once' option is specified",
      fn: async () => {
        const id = lambda.register(
          denops,
          () => Promise.resolve("0"),
          { once: true },
        );
        assertEquals(await denops.dispatch(denops.name, id), "0");

        // The method will be removed
        await assertRejects(
          async () => {
            await denops.dispatch(denops.name, id);
          },
          `No method '${id}' exists`,
        );
      },
    });

    await t.step({
      name:
        "unregister() unregisters a lambda function identified by the identifier",
      fn: async () => {
        const id = lambda.register(
          denops,
          () => Promise.resolve("0"),
        );
        assertEquals(lambda.unregister(denops, id), true);

        // The method is removed
        await assertRejects(
          async () => {
            await denops.dispatch(denops.name, id);
          },
          `No method '${id}' exists`,
        );
      },
    });

    await t.step({
      name: "add() registers a lambda function and returns a Lambda object",
      fn: async () => {
        let counter = 0;
        using lo = lambda.add(
          denops,
          () => {
            counter++;
            return counter;
          },
        );
        assertEquals(
          lo.request(),
          `denops#request('${denops.name}', '${lo.id}', [])`,
        );
        assertEquals(
          lo.notify(),
          `denops#notify('${denops.name}', '${lo.id}', [])`,
        );
        assertEquals(await denops.eval(lo.request()), 1);
        await denops.eval(lo.notify());
        assertEquals(counter, 2);
      },
    });

    await t.step({
      name:
        "add() registers a lambda function with arguments and returns a Lambda object",
      fn: async () => {
        using lo = lambda.add(
          denops,
          (a: unknown, b: unknown, c: unknown) => {
            return [a, b, c];
          },
        );
        assertEquals(
          lo.request(1, "2", [3]),
          `denops#request('${denops.name}', '${lo.id}', [1,"2",[3]])`,
        );
        assertEquals(
          lo.notify(1, "2", [3]),
          `denops#notify('${denops.name}', '${lo.id}', [1,"2",[3]])`,
        );
        assertEquals(await denops.eval(lo.request(1, "2", [3])), [1, "2", [3]]);
      },
    });

    await t.step({
      name: "add() return a disposable object",
      fn: async () => {
        // Unregister all methods
        denops.dispatcher = {};
        {
          let counter = 0;
          using lo = lambda.add(
            denops,
            () => {
              counter++;
              return counter;
            },
          );
          assertEquals(await denops.eval(lo.request()), 1);
          await denops.eval(lo.notify());
          assertEquals(counter, 2);
          // Still available
          assertEquals(Object.keys(denops.dispatcher), [lo.id]);
        }
        // Unregistered automatically
        assertEquals(Object.keys(denops.dispatcher), []);
      },
    });
  },
});
