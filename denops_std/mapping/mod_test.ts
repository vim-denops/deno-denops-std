import { Denops } from "../deps.ts";
import { assertEquals, assertRejects, test } from "../deps_test.ts";
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

for (const mode of modes) {
  test({
    mode: "all",
    name: `map() registers mapping (${mode}map)`,
    fn: async (denops) => {
      await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
        mode,
      });
      assertEquals(
        {
          ...await mapping.read(denops, "<Plug>(test-denops-std)", { mode }),
          sid: 0,
          lnum: 0,
        },
        {
          ...skeleton,
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
        },
      );
    },
  });
  test({
    mode: "all",
    name: `map() registers mapping (${mode}noremap)`,
    fn: async (denops) => {
      await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
        mode,
        noremap: true,
      });
      assertEquals(
        {
          ...await mapping.read(denops, "<Plug>(test-denops-std)", { mode }),
          sid: 0,
          lnum: 0,
        },
        {
          ...skeleton,
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
          noremap: true,
        },
      );
    },
  });
}
test({
  mode: "all",
  name: `map() registers multiple mappings (Xmap)`,
  fn: async (denops) => {
    const modes: Mode[] = ["n", "i", "x"];
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      mode: modes,
    });
    for (const mode of modes) {
      assertEquals(
        {
          ...await mapping.read(denops, "<Plug>(test-denops-std)", { mode }),
          sid: 0,
          lnum: 0,
        },
        {
          ...skeleton,
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
        },
      );
    }
  },
});
test({
  mode: "all",
  name: `map() registers mapping (Xnoremap)`,
  fn: async (denops) => {
    const modes: Mode[] = ["n", "i", "x"];
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      mode: modes,
      noremap: true,
    });
    for (const mode of modes) {
      assertEquals(
        {
          ...await mapping.read(denops, "<Plug>(test-denops-std)", { mode }),
          sid: 0,
          lnum: 0,
        },
        {
          ...skeleton,
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
          noremap: true,
        },
      );
    }
  },
});
test({
  mode: "all",
  name: `map() registers mapping (script)`,
  fn: async (denops) => {
    if (!await isScriptSupported(denops)) {
      console.warn("Skip");
      return;
    }
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      script: true,
    });
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        noremap: true,
        script: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `map() registers mapping (buffer)`,
  fn: async (denops) => {
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      buffer: true,
    });
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        buffer: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `map() registers mapping (expr)`,
  fn: async (denops) => {
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      expr: true,
    });
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        expr: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `map() registers mapping (nowait)`,
  fn: async (denops) => {
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      nowait: true,
    });
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        nowait: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `map() registers mapping (silent)`,
  fn: async (denops) => {
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      silent: true,
    });
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        silent: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `map() registers mapping (unique)`,
  fn: async (denops) => {
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      unique: true,
    });
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
      },
    );
    await assertRejects(
      async () => {
        await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
          unique: true,
        });
      },
      undefined,
      "E227: mapping already exists",
    );
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});

for (const mode of modes) {
  test({
    mode: "all",
    name: `unmap() removes mapping (${mode}unmap)`,
    fn: async (denops) => {
      await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
        mode,
      });
      await mapping.unmap(denops, "<Plug>(test-denops-std)", {
        mode,
      });
      await assertRejects(
        async () => {
          await mapping.read(denops, "<Plug>(test-denops-std)", { mode });
        },
        undefined,
        "No mapping found for",
      );
    },
    prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
  });
}
test({
  mode: "all",
  name: `unmap() removes multiple mappings (Xunmap)`,
  fn: async (denops) => {
    const modes: Mode[] = ["n", "i", "x"];
    await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
      mode: modes,
    });
    await mapping.unmap(denops, "<Plug>(test-denops-std)", {
      mode: modes,
    });
    for (const mode of modes) {
      await assertRejects(
        async () => {
          await mapping.read(denops, "<Plug>(test-denops-std)", { mode });
        },
        undefined,
        "No mapping found for",
      );
    }
  },
  prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
});

for (const mode of modes) {
  test({
    mode: "all",
    name: `unmap() removes buffer local mapping (${mode}unmap)`,
    fn: async (denops) => {
      await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
        mode,
      });
      await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
        buffer: true,
        mode,
      });
      assertEquals(
        (await mapping.read(denops, "<Plug>(test-denops-std)", { mode }))
          .buffer,
        true,
      );
      await mapping.unmap(denops, "<Plug>(test-denops-std)", {
        buffer: true,
        mode,
      });
      assertEquals(
        (await mapping.read(denops, "<Plug>(test-denops-std)", { mode }))
          .buffer,
        false,
      );
    },
    prelude: ["let g:denops#enable_workaround_vim_before_8_2_3081 = 1"],
  });
}

for (const mode of modes) {
  test({
    mode: "all",
    name: `read() returns mapping (${mode}map)`,
    fn: async (denops) => {
      await denops.cmd(`${mode}map <Plug>(test-denops-std) Hello`);
      assertEquals(
        {
          ...await mapping.read(denops, "<Plug>(test-denops-std)", { mode }),
          sid: 0,
          lnum: 0,
        },
        {
          ...skeleton,
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
        },
      );
    },
  });
  test({
    mode: "all",
    name: `read() returns mapping (${mode}noremap)`,
    fn: async (denops) => {
      await denops.cmd(`${mode}noremap <Plug>(test-denops-std) Hello`);
      assertEquals(
        {
          ...await mapping.read(denops, "<Plug>(test-denops-std)", { mode }),
          sid: 0,
          lnum: 0,
        },
        {
          ...skeleton,
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
          noremap: true,
        },
      );
    },
  });
}
test({
  mode: "all",
  name: `read() returns mapping (script)`,
  fn: async (denops) => {
    if (!await isScriptSupported(denops)) {
      console.warn("Skip");
      return;
    }
    await denops.cmd(`map <script> <Plug>(test-denops-std) Hello`);
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        noremap: true,
        script: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `read() returns mapping (buffer)`,
  fn: async (denops) => {
    await denops.cmd(`map <buffer> <Plug>(test-denops-std) Hello`);
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        buffer: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `read() returns mapping (expr)`,
  fn: async (denops) => {
    await denops.cmd(`map <expr> <Plug>(test-denops-std) Hello`);
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        expr: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `read() returns mapping (nowait)`,
  fn: async (denops) => {
    await denops.cmd(`map <nowait> <Plug>(test-denops-std) Hello`);
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        nowait: true,
      },
    );
  },
});
test({
  mode: "all",
  name: `read() returns mapping (silent)`,
  fn: async (denops) => {
    await denops.cmd(`map <silent> <Plug>(test-denops-std) Hello`);
    assertEquals(
      {
        ...await mapping.read(denops, "<Plug>(test-denops-std)"),
        sid: 0,
        lnum: 0,
      },
      {
        ...skeleton,
        lhs: "<Plug>(test-denops-std)",
        rhs: "Hello",
        silent: true,
      },
    );
  },
});

for (const mode of modes) {
  test({
    mode: "all",
    name: `list() lists mappings starts from {lhs} (${mode}map)`,
    fn: async (denops) => {
      await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
        mode,
      });
      const result = await mapping.list(denops, "<Plug>(test-denops-std)", {
        mode,
      });
      assertEquals(result, [
        {
          mode,
          lhs: "<Plug>(test-denops-std)",
          rhs: "Hello",
          noremap: false,
          script: false,
          buffer: false,
        },
      ]);
    },
  });
}

async function isScriptSupported(denops: Denops): Promise<boolean> {
  if (denops.meta.host === "vim") {
    return !!await denops.call("has", "patch-8.2.0491");
  } else {
    return !!await denops.call("has", "nvim-0.5.0");
  }
}
