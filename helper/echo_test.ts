import { test } from "@denops/test";
import { echo, echoerr } from "./echo.ts";

test({
  mode: "all",
  name: "echo()",
  fn: async (denops, t) => {
    await t.step({
      name: "shows short message",
      fn: async () => {
        await echo(denops, "Hello");
        // No way to test if `echo` success
      },
    });
    await t.step({
      name: "shows multiline message",
      fn: async () => {
        await denops.cmd("set cmdheight=5");
        await echo(denops, "A\nB\nC\nD\nE");
        // No way to test if `echo` success
      },
    });
  },
});

test({
  mode: "all",
  name: "echoerr()",
  fn: async (denops, t) => {
    await t.step({
      name: "shows short message",
      fn: async () => {
        await echoerr(denops, "Hello");
        // No way to test if `echoerr` success
      },
    });
    await t.step({
      name: "shows multiline message",
      fn: async () => {
        await denops.cmd("set cmdheight=5");
        await echoerr(denops, "A\nB\nC\nD\nE");
        // No way to test if `echoerr` success
      },
    });
  },
});
