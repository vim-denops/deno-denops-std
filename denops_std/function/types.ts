import {
  AssertError,
  isLike,
} from "https://deno.land/x/unknownutil@v2.1.1/mod.ts#^";

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

/**
 * Type of `getbufinfo()` result.
 */
export interface BufInfo {
  /** Buffer number. */
  bufnr: number;
  /** TRUE if the buffer is modified. */
  changed: boolean;
  /** Number of changes made to the buffer. */
  changedtick: number;
  /** TRUE if the buffer is hidden. */
  hidden: boolean;
  /**
   * Timestamp in seconds, like `localtime()`, when the buffer was last used.
   */
  lastused: number;
  /** TRUE if the buffer is listed. */
  listed: boolean;
  /**
   * Line number used for the buffer when opened in the current window.
   * Only valid if the buffer has been displayed in the window in the past.
   * If you want the line number of the last known cursor position in a given
   * window, use `line()`:
   *
   *     :echo line('.', {winid})
   */
  lnum: number;
  /** Number of lines in the buffer. (only valid when loaded) */
  linecount: number;
  /** TRUE if the buffer is loaded. */
  loaded: boolean;
  /** Full path to the file in the buffer. */
  name: string;
  /** List of signs placed in the buffer. */
  signs?: PlacedSign[];
  /** A reference to the dictionary with buffer-local variables. */
  variables: number;
  /** List of `window-ID`s that display this buffer. */
  windows: number[];
  /** List of popup `window-ID`s that display this buffer. */
  popups: number[];
}

/**
 * Type of `getbufinfo()` result.
 */
export interface PlacedSign {
  /** Sign identifier. */
  id: number;
  /** Line number. */
  lnum: number;
  /** Sign name. */
  name: string;
}

/**
 * Type of `getchangelist()` result.
 */
export type ChangeList = [locations: ChangeListLocation[], pos: number];

/**
 * Type of `getchangelist()` result.
 */
export interface ChangeListLocation {
  /** Column number. */
  col: number;
  /** Column offset for 'virtualedit'. */
  coladd: number;
  /** Line number. */
  lnum: number;
}

/**
 * Type of `getmarklist()` result.
 */
export interface MarkInformation {
  /** Name of the mark prefixed by "'". */
  mark: string;
  /**
   * The position of the mark.
   * Refer to `getpos()` for more information.
   */
  pos: MarkPosition;
  /** File name. */
  file: string;
}

/**
 * Type of `getmarklist()` result.
 */
export type MarkPosition = [
  bufnum: number,
  lnum: number,
  col: number,
  off: number,
];
