import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.217.0/assert/mod.ts";
import { test } from "https://deno.land/x/denops_test@v1.6.1/mod.ts";
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
  },
});
