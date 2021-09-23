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
