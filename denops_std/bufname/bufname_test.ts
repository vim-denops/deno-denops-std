import { assertEquals, assertThrows } from "../deps_test.ts";
import { format, parse } from "./bufname.ts";

Deno.test("format throws exception when 'scheme' contains unusable characters", () => {
  assertThrows(
    () =>
      format({
        scheme: "denops0number",
        path: "/absolute/path/to/worktree",
      }),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () =>
      format({
        scheme: "denops+plus",
        path: "/absolute/path/to/worktree",
      }),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () =>
      format({
        scheme: "denops-minus",
        path: "/absolute/path/to/worktree",
      }),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () =>
      format({
        scheme: "denops.dot",
        path: "/absolute/path/to/worktree",
      }),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () =>
      format({
        scheme: "denops_underscore",
        path: "/absolute/path/to/worktree",
      }),
    undefined,
    "contains unusable characters",
  );
});
Deno.test("format returns buffer name string from Bufname instance", () => {
  const src = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
  };
  const dst = format(src);
  const exp = "denops:///absolute/path/to/worktree";
  assertEquals(dst, exp);
});
Deno.test("format encodes unusable characters in 'path'", () => {
  const src = {
    scheme: "denops",
    path: "<>|?*",
  };
  const dst = format(src);
  const exp = "denops://%3c%3e%7c%3f%2a";
  assertEquals(dst, exp);
});
Deno.test("format returns buffer name string from Bufname instance (with URLSearchParams)", () => {
  const src = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    params: {
      foo: "foo",
      bar: ["bar", "bar"],
      hoge: undefined,
    },
  };
  const dst = format(src);
  const exp = "denops:///absolute/path/to/worktree;foo=foo&bar=bar&bar=bar";
  assertEquals(dst, exp);
});
Deno.test("format encodes unusable characters in 'params'", () => {
  const src = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    params: {
      foo: "<>|?*",
    },
  };
  const dst = format(src);
  const exp = "denops:///absolute/path/to/worktree;foo=%3C%3E%7C%3F%2a";
  assertEquals(dst, exp);
});
Deno.test("format returns buffer name string from Bufname instance (with fragment)", () => {
  const src = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    fragment: "Hello World.md",
  };
  const dst = format(src);
  const exp = "denops:///absolute/path/to/worktree#Hello World.md";
  assertEquals(dst, exp);
});
Deno.test("format encodes unusable characters in 'fragment'", () => {
  const src = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    fragment: "<>|?*",
  };
  const dst = format(src);
  const exp = "denops:///absolute/path/to/worktree#%3c%3e%7c%3f%2a";
  assertEquals(dst, exp);
});
Deno.test("format returns buffer name string from Bufname instance (with URLSearchParams and fragment)", () => {
  const src = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    params: {
      foo: "foo",
      bar: ["bar", "bar"],
      hoge: undefined,
    },
    fragment: "Hello World.md",
  };
  const dst = format(src);
  const exp =
    "denops:///absolute/path/to/worktree;foo=foo&bar=bar&bar=bar#Hello World.md";
  assertEquals(dst, exp);
});
Deno.test("format encodes ';' and '#' in 'path'", () => {
  const src = {
    scheme: "denops",
    path: "hello;world#hello",
  };
  const dst = format(src);
  const exp = "denops://hello%3bworld%23hello";
  assertEquals(dst, exp);
});

Deno.test("parse throws exception when 'expr' contains unusable characters", () => {
  const src = "denops://<>|?*";
  assertThrows(
    () => {
      parse(src);
    },
    undefined,
    "contains unusable characters",
  );
});
Deno.test("parse throws exception when scheme part of 'expr' contains unusable characters", () => {
  assertThrows(
    () => parse("denops0number://absolute/path/to/worktree"),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () => parse("denops+plus://absolute/path/to/worktree"),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () => parse("denops+minus://absolute/path/to/worktree"),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () => parse("denops.dot://absolute/path/to/worktree"),
    undefined,
    "contains unusable characters",
  );
  assertThrows(
    () => parse("denops_underscore://absolute/path/to/worktree"),
    undefined,
    "contains unusable characters",
  );
});
Deno.test("parse returns Bufname instance from buffer name", () => {
  const src = "denops:///absolute/path/to/worktree";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
  };
  assertEquals(dst, exp);
});
Deno.test("parse decodes percent-encoded characters in 'path'", () => {
  const src = "denops://%3c%3e%7c%3f%2a";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "<>|?*",
  };
  assertEquals(dst, exp);
});
Deno.test("parse returns Bufname instance from buffer name (with params)", () => {
  const src = "denops:///absolute/path/to/worktree;foo=foo&bar=bar&bar=bar";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    params: {
      foo: "foo",
      bar: ["bar", "bar"],
    },
  };
  assertEquals(dst, exp);
});
Deno.test("parse decodes percent-encoded characters in 'params'", () => {
  const src = "denops:///absolute/path/to/worktree;foo=%3C%3E%7C%3F%2a";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    params: {
      foo: "<>|?*",
    },
  };
  assertEquals(dst, exp);
});
Deno.test("parse returns Bufname instance from buffer name (with fragment)", () => {
  const src = "denops:///absolute/path/to/worktree#Hello World.md";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    fragment: "Hello World.md",
  };
  assertEquals(dst, exp);
});
Deno.test("parse decodes percent-encoded characters in 'fragment'", () => {
  const src = "denops:///absolute/path/to/worktree#%3c%3e%7c%3f%2a";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    fragment: "<>|?*",
  };
  assertEquals(dst, exp);
});
Deno.test("parse returns Bufname instance from buffer name (with params and fragment)", () => {
  const src =
    "denops:///absolute/path/to/worktree;foo=foo&bar=bar&bar=bar#Hello World.md";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "/absolute/path/to/worktree",
    params: {
      foo: "foo",
      bar: ["bar", "bar"],
    },
    fragment: "Hello World.md",
  };
  assertEquals(dst, exp);
});
Deno.test("parse decode percent-encoded characters (';' and '#') in 'path'", () => {
  const src = "denops://hello%3bworld%23hello";
  const dst = parse(src);
  const exp = {
    scheme: "denops",
    path: "hello;world#hello",
  };
  assertEquals(dst, exp);
});
