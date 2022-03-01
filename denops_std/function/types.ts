import { AssertError, isLike } from "../deps.ts";

/**
 * Type of `screenpos()` result.
 */
export type ScreenPos = {
  row: number;
  col: number;
  endcol: number;
  curscol: number;
};

/**
 * Reference ScreenPos struct for isLike.
 */
const refScreenPos: ScreenPos = {
  row: 0,
  col: 0,
  endcol: 0,
  curscol: 0,
};

/**
 * Return true if the value is ScreenPos.
 */
export function isScreenPos(x: unknown): x is ScreenPos {
  return isLike(refScreenPos, x);
}

/**
 * Assert if `x` is ScreenPos by raising an `AssertError` when it's not.
 */
export function assertScreenPos(x: unknown): asserts x is ScreenPos {
  if (!isScreenPos(x)) {
    throw new AssertError("The value must be ScreenPos");
  }
}

/**
 * Ensure if `x` is ScreenPos by raising an `AssertError` when it's not.
 *
 * @deprecated
 */
export function ensureScreenPos(x: unknown): asserts x is ScreenPos {
  console.warn(
    "The 'ensureScreenPos' is deprecated. Use 'assertScreenPos' instead.",
  );
  assertScreenPos(x);
}

/**
 * Type of `getpos()` or `setpos()` result.
 */
export type Position = [
  bufnum: number,
  lnum: number,
  col: number,
  off: number,
  curswant?: number,
];

/**
 * Return true if the value is Position.
 */
export function isPosition(x: unknown): x is Position {
  return Array.isArray(x) && (x.length === 4 || x.length === 5) &&
    x.every((x) => typeof x === "number");
}

/**
 * Assert if `x` is Position by raising an `AssertError` when it's not.
 */
export function assertPosition(x: unknown): asserts x is Position {
  if (!isPosition(x)) {
    throw new AssertError("The value must be Position");
  }
}

/**
 * Ensure if `x` is Position by raising an `AssertError` when it's not.
 *
 * @deprecated
 */
export function ensurePosition(x: unknown): asserts x is Position {
  console.warn(
    "The 'ensurePosition' is deprecated. Use 'assertPosition' instead.",
  );
  assertPosition(x);
}

const validBuiltinCompletions = [
  "arglist",
  "augroup",
  "buffer",
  "behave",
  "color",
  "command",
  "compiler",
  "cscope",
  "dir",
  "environment",
  "event",
  "expression",
  "file",
  "file_in_path",
  "filetype",
  "function",
  "help",
  "highlight",
  "history",
  "locale",
  "mapclear",
  "mapping",
  "menu",
  "messages",
  "option",
  "packadd",
  "shellcmd",
  "sign",
  "syntax",
  "syntime",
  "tag",
  "tag_listfiles",
  "user",
  "var",
] as const;

/**
 * Builtin completion
 */
export type BuiltinCompletion = typeof validBuiltinCompletions[number];

/**
 * Check if the `value` is valid BuiltinCompletion
 */
export function isValidBuiltinCompletion(
  value: string,
): value is BuiltinCompletion {
  // deno-lint-ignore no-explicit-any
  return validBuiltinCompletions.includes(value as any);
}
