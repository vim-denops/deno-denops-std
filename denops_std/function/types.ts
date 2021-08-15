import { ensure, isLike } from "../deps.ts";

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
 * Ensure if `x` is ScreenPos by raising an `EnsureError` when it's not.
 */
export function ensureScreenPos(x: unknown): asserts x is ScreenPos {
  return ensure(x, isScreenPos, "The value must be ScreenPos");
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
 * Ensure if `x` is Position by raising an `EnsureError` when it's not.
 */
export function ensurePosition(x: unknown): asserts x is Position {
  return ensure(x, isPosition, "The value must be Position");
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
