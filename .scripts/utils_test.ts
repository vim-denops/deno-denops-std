import {
  assertEquals,
  assertInstanceOf,
  assertRejects,
  assertThrows,
} from "@std/assert";
import { stub } from "@std/testing/mock";

import {
  Counter,
  downloadString,
  regexIndexOf,
  removeIndentSpaces,
  replaceTabToSpaces,
  trimLines,
} from "./utils.ts";

async function mockFetch({ body, init, fn }: {
  body?: BodyInit;
  init?: ResponseInit;
  fn: () => void | Promise<void>;
}): Promise<void> {
  const fetchStub = stub(
    globalThis,
    "fetch",
    () => Promise.resolve(new Response(body, init)),
  );
  try {
    await fn();
  } finally {
    fetchStub.restore();
  }
}

Deno.test(downloadString.name, async (t) => {
  await t.step("Returns body of response", async () => {
    const url = "https://example.net/foo.ts";
    const expected = "Fetched content\nFoo Bar\n\nBaz";
    await mockFetch({
      body: expected,
      async fn() {
        const actual = await downloadString(url);
        assertEquals(actual, expected);
      },
    });
  });

  await t.step("Throws error if fetch fails", async () => {
    const url = "https://example.net/foo.ts";
    const expectedMessage = "Failed to read https://example.net/foo.ts";
    await mockFetch({
      init: { status: 404 },
      async fn() {
        await assertRejects(
          () => downloadString(url),
          Error,
          expectedMessage,
        );
      },
    });
  });
});

Deno.test(regexIndexOf.name, async (t) => {
  // Returns position of first pattern match
  for (
    const { args, expected } of [
      { args: ["foobarbazbaz", /foo/], expected: 0 },
      { args: ["foobarbazbaz", /baz/], expected: 6 },
      // String contains new line
      { args: ["foobar\nbazbaz", /baz/], expected: 7 },
      // Pattern contains new line
      { args: ["foobar\nbazbaz", /\nbaz/], expected: 6 },
    ] as Array<{
      args: Parameters<typeof regexIndexOf>;
      expected: ReturnType<typeof regexIndexOf>;
    }>
  ) {
    await t.step(`Returns position of first pattern match: ${args}`, () => {
      const actual = regexIndexOf(...args);
      assertEquals(actual, expected);
    });
  }

  // Search from specified position
  for (
    const { args, expected } of [
      { args: ["foobarbazbaz", /baz/, 0], expected: 6 },
      { args: ["foobarbazbaz", /baz/, 6], expected: 6 },
      { args: ["foobarbazbaz", /baz/, 7], expected: 9 },
      // Minus offset
      { args: ["foobarbazbaz", /baz/, -5], expected: 9 },
      // Minus offset less than string length
      { args: ["foobarbazbaz", /baz/, -20], expected: 6 },
    ] as Array<{
      args: Parameters<typeof regexIndexOf>;
      expected: ReturnType<typeof regexIndexOf>;
    }>
  ) {
    await t.step(`Search from specified position: ${args}`, () => {
      const actual = regexIndexOf(...args);
      assertEquals(actual, expected);
    });
  }

  // Returns -1 if pattern not match
  for (
    const { args } of [
      { args: ["foobarbazbaz", /qux/] },
      { args: ["foobar\nbazbaz", /barbaz/] },
      { args: ["foobarbazbaz", /baz/, 10] },
      // Minus offset
      { args: ["foobarbazbaz", /baz/, -2] },
    ] as Array<{
      args: Parameters<typeof regexIndexOf>;
    }>
  ) {
    await t.step(`Returns -1 if pattern not match: ${args}`, () => {
      const actual = regexIndexOf(...args);
      assertEquals(actual, -1);
    });
  }
});

Deno.test(replaceTabToSpaces.name, async (t) => {
  // Converts TABs to spaces
  for (
    const { args, expected } of [
      { args: ["\tfoo"], expected: "        foo" },
      // Preserving column position
      { args: ["  \tfoo"], expected: "        foo" },
      { args: ["\t  foo"], expected: "          foo" },
    ] as Array<{
      args: Parameters<typeof replaceTabToSpaces>;
      expected: ReturnType<typeof replaceTabToSpaces>;
    }>
  ) {
    await t.step(`Converts TABs to spaces: ${args}`, () => {
      const actual = replaceTabToSpaces(...args);
      assertEquals(actual, expected);
    });
  }

  // With tabstop
  for (
    const { args, expected } of [
      { args: ["\tfoo", 5], expected: "     foo" },
      // Preserving column position
      { args: ["  \tfoo", 3], expected: "   foo" },
      { args: ["  \tfoo", 2], expected: "    foo" },
    ] as Array<{
      args: Parameters<typeof replaceTabToSpaces>;
      expected: ReturnType<typeof replaceTabToSpaces>;
    }>
  ) {
    await t.step(`With tabstop: ${args}`, () => {
      const actual = replaceTabToSpaces(...args);
      assertEquals(actual, expected);
    });
  }

  // Throws if 'line' contains newline
  await t.step(`Throws if 'line' contains newline`, () => {
    assertThrows(
      () => replaceTabToSpaces("\tfoo\n"),
      TypeError,
      "'line' contains newline",
    );
  });

  // Throws if 'tabstop' less or equals 0
  for (
    const { args } of [
      { args: ["\tfoo", 0] },
      { args: ["\tfoo", -1] },
    ] as Array<{ args: Parameters<typeof replaceTabToSpaces> }>
  ) {
    await t.step(`Throws if 'tabstop' less or equals 0: ${args}`, () => {
      assertThrows(
        () => replaceTabToSpaces(...args),
        TypeError,
        "'tabstop' less or equals 0",
      );
    });
  }
});

Deno.test(removeIndentSpaces.name, async (t) => {
  // Trims the shortest leading spaces
  for (
    const { name, args, expected } of [
      {
        name: "Removed 2 spaces",
        args: [[
          "  foo",
          "    bar",
          "   baz",
        ]],
        expected: [
          "foo",
          "  bar",
          " baz",
        ],
      },
      {
        name: "Removed 3 spaces",
        args: [[
          "      foo",
          "    bar",
          "   baz",
        ]],
        expected: [
          "   foo",
          " bar",
          "baz",
        ],
      },
      {
        name: "No removed",
        args: [[
          "foo",
          "    bar",
          "   baz",
        ]],
        expected: [
          "foo",
          "    bar",
          "   baz",
        ],
      },
      {
        name: "Blank lines are not used in length calculations",
        args: [[
          "  foo",
          "",
          "    bar",
          "   baz",
        ]],
        expected: [
          "foo",
          "",
          "  bar",
          " baz",
        ],
      },
      {
        name: "TABs are not trimed",
        args: [[
          "\t\tfoo",
          "    bar",
          "   baz",
        ]],
        expected: [
          "\t\tfoo",
          "    bar",
          "   baz",
        ],
      },
      {
        name: "Only zero-length lines are blank line",
        args: [[
          "  foo",
          " ",
          "    bar",
          "   baz",
        ]],
        expected: [
          " foo",
          "",
          "   bar",
          "  baz",
        ],
      },
    ] as Array<{
      name: string;
      args: Parameters<typeof removeIndentSpaces>;
      expected: ReturnType<typeof removeIndentSpaces>;
    }>
  ) {
    await t.step(`Trims the shortest leading spaces: ${name}`, () => {
      const actual = removeIndentSpaces(...args);
      assertEquals(actual, expected);
    });
  }
});

Deno.test(trimLines.name, async (t) => {
  // Trim leading and trailing blank lines
  for (
    const { name, args, expected } of [
      {
        name: "Trimed leading",
        args: [[
          "   ",
          "",
          "foo",
          "    bar",
          "   baz",
        ].join("\n")],
        expected: [
          "foo",
          "    bar",
          "   baz",
        ].join("\n"),
      },
      {
        name: "Trimed trailing",
        args: [[
          "foo",
          "    bar",
          "   baz",
          "     ",
          "",
        ].join("\n")],
        expected: [
          "foo",
          "    bar",
          "   baz",
        ].join("\n"),
      },
      {
        name: "Trimed leading and trailing",
        args: [[
          "",
          "   ",
          "foo",
          "    bar",
          "   baz",
          "",
          "     ",
        ].join("\n")],
        expected: [
          "foo",
          "    bar",
          "   baz",
        ].join("\n"),
      },
    ] as Array<{
      name: string;
      args: Parameters<typeof trimLines>;
      expected: ReturnType<typeof trimLines>;
    }>
  ) {
    await t.step(`Trim leading and trailing blank lines: ${name}`, () => {
      const actual = trimLines(...args);
      assertEquals(actual, expected);
    });
  }
});

Deno.test(Counter.name, async (t) => {
  await t.step("constructor", () => {
    const actual = new Counter();
    assertInstanceOf(actual, Counter);
  });

  await t.step(Counter.prototype.count.name, async (t) => {
    await t.step("Returns 1 if name specified first time", () => {
      const obj = new Counter();
      assertEquals(obj.count("foo"), 1);
      assertEquals(obj.count("bar"), 1);
      assertEquals(obj.count("baz"), 1);
    });

    await t.step("Returns +N if name specified N times", () => {
      const obj = new Counter();
      assertEquals(obj.count("foo"), 1);
      assertEquals(obj.count("foo"), 2);
      assertEquals(obj.count("bar"), 1);
      assertEquals(obj.count("foo"), 3);
      assertEquals(obj.count("bar"), 2);
      assertEquals(obj.count("baz"), 1);
    });
  });

  await t.step(Counter.prototype.get.name, async (t) => {
    await t.step(
      "Returns +N if count() is called N times with same name",
      () => {
        const obj = new Counter();
        obj.count("foo");
        obj.count("bar");
        obj.count("foo");
        obj.count("baz");
        obj.count("foo");
        obj.count("baz");
        assertEquals(obj.get("foo"), 3);
        assertEquals(obj.get("bar"), 1);
        assertEquals(obj.get("baz"), 2);
      },
    );

    await t.step(
      "Returns 0 if count() is not called with same name",
      () => {
        const obj = new Counter();
        assertEquals(obj.get("foo"), 0);
        assertEquals(obj.get("bar"), 0);
        assertEquals(obj.get("baz"), 0);
      },
    );
  });
});
