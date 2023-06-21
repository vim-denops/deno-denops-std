import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import {
  assertArray,
  isObject,
} from "https://deno.land/x/unknownutil@v2.1.1/mod.ts#^";
import { test } from "https://deno.land/x/denops_test@v1.4.0/mod.ts";
import { BufInfo } from "./types.ts";
import * as buffer from "./buffer.ts";

test({
  mode: "all",
  name: "buffer",
  fn: async (denops, t) => {
    await t.step({
      name: "getbufinfo()",
      fn: async () => {
        await denops.cmd("enew!");
        await denops.cmd("new foo");
        await denops.call("setline", 1, "abcdef");
        await denops.cmd("new bar");
        await denops.cmd("hide");
        await denops.cmd("new baz");
        await denops.cmd("bunload!");

        const actual = await buffer.getbufinfo(denops);
        assertArray(actual, (x): x is BufInfo => isObject(x));
        assertEquals(actual.length, 4);
        assertEquals(
          actual.map(({ changed, hidden, listed, loaded }) => (
            { changed, hidden, listed, loaded }
          )),
          [
            {
              // [No Name]
              changed: false,
              hidden: false,
              listed: true,
              loaded: true,
            },
            {
              // foo
              changed: true,
              hidden: false,
              listed: true,
              loaded: true,
            },
            {
              // bar
              changed: false,
              hidden: true,
              listed: true,
              loaded: true,
            },
            {
              // baz
              changed: false,
              hidden: false,
              listed: true,
              loaded: false,
            },
          ],
          "boolean properties are invalid.",
        );
      },
    });
    await denops.cmd("1,$bwipeout!");
  },
});
