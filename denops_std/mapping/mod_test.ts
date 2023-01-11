import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { test } from "https://deno.land/x/denops_test@v1.0.1/mod.ts";
import { Mapping, Mode } from "./types.ts";
import * as mapping from "./mod.ts";

const skeleton: Mapping = {
  mode: "",
  lhs: "",
  rhs: "",
  noremap: false,
  script: false,
  buffer: false,
  sid: 0,
  lnum: 0,
  expr: false,
  nowait: false,
  silent: false,
};
const modes: Mode[] = ["", "n", "i", "c", "v", "x", "s", "o", "t", "l"];

test({
  mode: "all",
  name: "mapping",
  fn: async (denops, t) => {
    for (const mode of modes) {
      await t.step({
        name: `map() registers mapping (${mode}map)`,
        fn: async () => {
          await mapping.map(
            denops,
            `<Plug>(test-denops-std-${mode}map)`,
            "Hello",
            {
              mode,
            },
          );
          assertEquals(
            {
              ...await mapping.read(
                denops,
                `<Plug>(test-denops-std-${mode}map)`,
                {
                  mode,
                },
              ),
              sid: 0,
              lnum: 0,
            },
            {
              ...skeleton,
              mode,
              lhs: `<Plug>(test-denops-std-${mode}map)`,
              rhs: "Hello",
            },
          );
        },
      });
      await t.step({
        name: `map() registers mapping (${mode}noremap)`,
        fn: async () => {
          await mapping.map(
            denops,
            `<Plug>(test-denops-std-${mode}noremap)`,
            "Hello",
            {
              mode,
              noremap: true,
            },
          );
          assertEquals(
            {
              ...await mapping.read(
                denops,
                `<Plug>(test-denops-std-${mode}noremap)`,
                {
                  mode,
                },
              ),
              sid: 0,
              lnum: 0,
            },
            {
              ...skeleton,
              mode,
              lhs: `<Plug>(test-denops-std-${mode}noremap)`,
              rhs: "Hello",
              noremap: true,
            },
          );
        },
      });
    }
    await t.step({
      name: `map() registers multiple mappings (Xmap)`,
      fn: async () => {
        const modes: Mode[] = ["n", "i", "x"];
        await mapping.map(denops, "<Plug>(test-denops-std-Xmap)", "Hello", {
          mode: modes,
        });
        for (const mode of modes) {
          assertEquals(
            {
              ...await mapping.read(denops, "<Plug>(test-denops-std-Xmap)", {
                mode,
              }),
              sid: 0,
              lnum: 0,
            },
            {
              ...skeleton,
              mode,
              lhs: "<Plug>(test-denops-std-Xmap)",
              rhs: "Hello",
            },
          );
        }
      },
    });
    await t.step({
      name: `map() registers mapping (Xnoremap)`,
      fn: async () => {
        const modes: Mode[] = ["n", "i", "x"];
        await mapping.map(denops, "<Plug>(test-denops-std-Xnoremap)", "Hello", {
          mode: modes,
          noremap: true,
        });
        for (const mode of modes) {
          assertEquals(
            {
              ...await mapping.read(
                denops,
                "<Plug>(test-denops-std-Xnoremap)",
                {
                  mode,
                },
              ),
              sid: 0,
              lnum: 0,
            },
            {
              ...skeleton,
              mode,
              lhs: "<Plug>(test-denops-std-Xnoremap)",
              rhs: "Hello",
              noremap: true,
            },
          );
        }
      },
    });
    await t.step({
      name: `map() registers mapping (script)`,
      fn: async () => {
        await mapping.map(denops, "<Plug>(test-denops-std-script)", "Hello", {
          script: true,
        });
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-script)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-script)",
            rhs: "Hello",
            noremap: true,
            script: true,
          },
        );
      },
    });
    await t.step({
      name: `map() registers mapping (buffer)`,
      fn: async () => {
        await mapping.map(denops, "<Plug>(test-denops-std-buffer)", "Hello", {
          buffer: true,
        });
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-buffer)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-buffer)",
            rhs: "Hello",
            buffer: true,
          },
        );
      },
    });
    await t.step({
      name: `map() registers mapping (expr)`,
      fn: async () => {
        await mapping.map(denops, "<Plug>(test-denops-std-expr)", "Hello", {
          expr: true,
        });
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-expr)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-expr)",
            rhs: "Hello",
            expr: true,
          },
        );
      },
    });
    await t.step({
      name: `map() registers mapping (nowait)`,
      fn: async () => {
        await mapping.map(denops, "<Plug>(test-denops-std-nowait)", "Hello", {
          nowait: true,
        });
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-nowait)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-nowait)",
            rhs: "Hello",
            nowait: true,
          },
        );
      },
    });
    await t.step({
      name: `map() registers mapping (silent)`,
      fn: async () => {
        await mapping.map(denops, "<Plug>(test-denops-std-silent)", "Hello", {
          silent: true,
        });
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-silent)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-silent)",
            rhs: "Hello",
            silent: true,
          },
        );
      },
    });
    await t.step({
      name: `map() registers mapping (unique)`,
      fn: async () => {
        await mapping.map(denops, "<Plug>(test-denops-std-unique)", "Hello", {
          unique: true,
        });
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-unique)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-unique)",
            rhs: "Hello",
          },
        );
        await assertRejects(
          async () => {
            await mapping.map(
              denops,
              "<Plug>(test-denops-std-unique)",
              "Hello",
              {
                unique: true,
              },
            );
          },
          "E227:",
        );
      },
    });

    for (const mode of modes) {
      await t.step({
        name: `unmap() removes mapping (${mode}unmap)`,
        fn: async () => {
          await mapping.map(
            denops,
            `<Plug>(test-denops-std-${mode}unmap)`,
            "Hello",
            {
              mode,
            },
          );
          await mapping.unmap(denops, `<Plug>(test-denops-std-${mode}unmap)`, {
            mode,
          });
          await assertRejects(
            async () => {
              await mapping.read(
                denops,
                `<Plug>(test-denops-std-${mode}unmap)`,
                { mode },
              );
            },
            "No mapping found for",
          );
        },
      });
    }
    await t.step({
      name: `unmap() removes multiple mappings (Xunmap)`,
      fn: async () => {
        const modes: Mode[] = ["n", "i", "x"];
        await mapping.map(denops, "<Plug>(test-denops-std-Xunmap)", "Hello", {
          mode: modes,
        });
        await mapping.unmap(denops, "<Plug>(test-denops-std-Xunmap)", {
          mode: modes,
        });
        for (const mode of modes) {
          await assertRejects(
            async () => {
              await mapping.read(denops, "<Plug>(test-denops-std-Xunmap)", {
                mode,
              });
            },
            "No mapping found for",
          );
        }
      },
    });

    for (const mode of modes) {
      await t.step({
        name: `unmap() removes buffer local mapping (${mode}unmap)`,
        fn: async () => {
          await mapping.map(
            denops,
            `<Plug>(test-denops-std-buffer-${mode}unmap)`,
            "Hello",
            {
              mode,
            },
          );
          await mapping.map(
            denops,
            `<Plug>(test-denops-std-buffer-${mode}unmap)`,
            "Hello",
            {
              buffer: true,
              mode,
            },
          );
          assertEquals(
            (await mapping.read(
              denops,
              `<Plug>(test-denops-std-buffer-${mode}unmap)`,
              { mode },
            ))
              .buffer,
            true,
          );
          await mapping.unmap(
            denops,
            `<Plug>(test-denops-std-buffer-${mode}unmap)`,
            {
              buffer: true,
              mode,
            },
          );
          assertEquals(
            (await mapping.read(
              denops,
              `<Plug>(test-denops-std-buffer-${mode}unmap)`,
              { mode },
            ))
              .buffer,
            false,
          );
        },
      });
    }

    for (const mode of modes) {
      await t.step({
        name: `read() returns mapping (${mode}map)`,
        fn: async () => {
          await denops.cmd(
            `${mode}map <Plug>(test-denops-std-read-${mode}map) Hello`,
          );
          assertEquals(
            {
              ...await mapping.read(
                denops,
                `<Plug>(test-denops-std-read-${mode}map)`,
                {
                  mode,
                },
              ),
              sid: 0,
              lnum: 0,
            },
            {
              ...skeleton,
              mode,
              lhs: `<Plug>(test-denops-std-read-${mode}map)`,
              rhs: "Hello",
            },
          );
        },
      });
      await t.step({
        name: `read() returns mapping (${mode}noremap)`,
        fn: async () => {
          await denops.cmd(
            `${mode}noremap <Plug>(test-denops-std-read-${mode}unremap) Hello`,
          );
          assertEquals(
            {
              ...await mapping.read(
                denops,
                `<Plug>(test-denops-std-read-${mode}unremap)`,
                {
                  mode,
                },
              ),
              sid: 0,
              lnum: 0,
            },
            {
              ...skeleton,
              mode,
              lhs: `<Plug>(test-denops-std-read-${mode}unremap)`,
              rhs: "Hello",
              noremap: true,
            },
          );
        },
      });
    }
    await t.step({
      name: `read() returns mapping (script)`,
      fn: async () => {
        await denops.cmd(
          `map <script> <Plug>(test-denops-std-read-script) Hello`,
        );
        assertEquals(
          {
            ...await mapping.read(
              denops,
              "<Plug>(test-denops-std-read-script)",
            ),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-read-script)",
            rhs: "Hello",
            noremap: true,
            script: true,
          },
        );
      },
    });
    await t.step({
      name: `read() returns mapping (buffer)`,
      fn: async () => {
        await denops.cmd(
          `map <buffer> <Plug>(test-denops-std-read-buffer) Hello`,
        );
        assertEquals(
          {
            ...await mapping.read(
              denops,
              "<Plug>(test-denops-std-read-buffer)",
            ),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-read-buffer)",
            rhs: "Hello",
            buffer: true,
          },
        );
      },
    });
    await t.step({
      name: `read() returns mapping (expr)`,
      fn: async () => {
        await denops.cmd(`map <expr> <Plug>(test-denops-std-read-expr) Hello`);
        assertEquals(
          {
            ...await mapping.read(denops, "<Plug>(test-denops-std-read-expr)"),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-read-expr)",
            rhs: "Hello",
            expr: true,
          },
        );
      },
    });
    await t.step({
      name: `read() returns mapping (nowait)`,
      fn: async () => {
        await denops.cmd(
          `map <nowait> <Plug>(test-denops-std-read-nowait) Hello`,
        );
        assertEquals(
          {
            ...await mapping.read(
              denops,
              "<Plug>(test-denops-std-read-nowait)",
            ),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-read-nowait)",
            rhs: "Hello",
            nowait: true,
          },
        );
      },
    });
    await t.step({
      name: `read() returns mapping (silent)`,
      fn: async () => {
        await denops.cmd(
          `map <silent> <Plug>(test-denops-std-read-silent) Hello`,
        );
        assertEquals(
          {
            ...await mapping.read(
              denops,
              "<Plug>(test-denops-std-read-silent)",
            ),
            sid: 0,
            lnum: 0,
          },
          {
            ...skeleton,
            lhs: "<Plug>(test-denops-std-read-silent)",
            rhs: "Hello",
            silent: true,
          },
        );
      },
    });

    for (const mode of modes) {
      await t.step({
        name: `list() lists mappings starts from {lhs} (${mode}map)`,
        fn: async () => {
          await mapping.map(
            denops,
            `<Plug>(test-denops-std-list-${mode}map)`,
            "Hello",
            {
              mode,
            },
          );
          const result = await mapping.list(
            denops,
            `<Plug>(test-denops-std-list-${mode}map)`,
            {
              mode,
            },
          );
          assertEquals(result, [
            {
              mode,
              lhs: `<Plug>(test-denops-std-list-${mode}map)`,
              rhs: "Hello",
              noremap: false,
              script: false,
              buffer: false,
            },
          ]);
        },
      });
    }
  },
});
