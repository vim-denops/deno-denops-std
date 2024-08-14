import type { Predicate } from "@core/unknownutil/type";
import { isIntersectionOf } from "@core/unknownutil/is/intersection-of";
import { isLiteralOf } from "@core/unknownutil/is/literal-of";
import { isObjectOf } from "@core/unknownutil/is/object-of";
import {
  isVimEvaluatable,
  type VimEvaluatable,
  vimExpressionOf,
} from "./vim_evaluatable.ts";

/**
 * An object that defines a Vim's string constant.
 * It represents a double-quoted Vim string.
 *
 * `RawString` is different when it is treated as a JavaScript string and when
 * it is serialized. If specified to {@linkcode JSON.stringify} it will become
 * a Vim string constant.
 *
 * Note that although it inherits from primitive `string` for convenience, it
 * actually inherits from the `String` wrapper object.
 *
 * ```typescript
 * import { assertEquals } from "jsr:@std/assert/equals";
 * import { rawString } from "jsr:@denops/std/eval";
 *
 * const s: string = rawString`foo`;
 * assertEquals(s.toString(), "foo");
 * assertEquals(JSON.stringify(s), '"\\"foo\\""');
 * assertEquals(typeof s, "object"); // is not "string"
 * ```
 */
export type RawString = string & RawStringProps;

interface RawStringProps extends VimEvaluatable {
  /**
   * Used by the `JSON.stringify` to enable the transformation of an object's data to JSON serialization.
   */
  toJSON(): string;

  readonly [Symbol.toStringTag]: "RawString";
}

/**
 * Create a {@linkcode RawString} that evaluates as a Vim string constant.
 *
 * A string constant accepts these special characters:
 *
 *     \000    three-digit octal number (e.g., "\316")
 *     \00     two-digit octal number (must be followed by non-digit)
 *     \0      one-digit octal number (must be followed by non-digit)
 *     \x..    byte specified with two hex numbers (e.g., "\x1f")
 *     \x.     byte specified with one hex number (must be followed by non-hex char)
 *     \X..    same as \x..
 *     \X.     same as \x.
 *     \u....  character specified with up to 4 hex numbers, stored according to the
 *             current value of 'encoding' (e.g., "\u02a4")
 *     \U....  same as \u but allows up to 8 hex numbers.
 *     \b      backspace <BS>
 *     \e      escape <Esc>
 *     \f      formfeed 0x0C
 *     \n      newline <NL>
 *     \r      return <CR>
 *     \t      tab <Tab>
 *     \\      backslash
 *     \"      double quote
 *     \`      back quote
 *     \${     liteal string '${'
 *     \<xxx>  Special key named "xxx".  e.g. "\<C-W>" for CTRL-W.  This is for use
 *             in mappings, the 0x80 byte is escaped.
 *             To use the double quote character it must be escaped: "<M-\">".
 *             Don't use <Char-xxxx> to get a UTF-8 character, use \uxxxx as
 *             mentioned above.
 *     \<*xxx> Like \<xxx> but prepends a modifier instead of including it in the
 *             character.  E.g. "\<C-w>" is one character 0x17 while "\<*C-w>" is four
 *             bytes: 3 for the CTRL modifier and then character "W".
 *
 * ```typescript
 * import { assertEquals } from "jsr:@std/assert/equals";
 * import { rawString } from "jsr:@denops/std/eval";
 *
 * assertEquals(
 *   rawString`foo`.toString(),
 *   "foo",
 * );
 *
 * assertEquals(
 *   rawString`foo,${123},${"bar"}`.toString(),
 *   "foo,123,bar",
 * );
 *
 * assertEquals(
 *   rawString`\<C-W>`.toString(),
 *   "\\<C-W>",
 * );
 * ```
 *
 * @see useEval for usage
 */
export function rawString(
  template: TemplateStringsArray,
  ...substitutions: TemplateSubstitutions
): RawString {
  const raw = String.raw(template, ...substitutions);
  return new RawStringImpl(raw) as unknown as RawString;
}

/**
 * Returns `true` if the value is a {@linkcode RawString}.
 *
 * ```typescript
 * import { isRawString, rawString } from "jsr:@denops/std/eval";
 *
 * isRawString(rawString`foo`);
 * // true
 *
 * isRawString("foo");
 * // false
 * ```
 */
export const isRawString: Predicate<RawString> = isIntersectionOf([
  // NOTE: Do not check `isString` here, because `RawString` has a different type in definition (primitive `string`) and implementation (`String`).
  isObjectOf({
    [Symbol.toStringTag]: isLiteralOf("RawString"),
  }),
  isVimEvaluatable,
]) as unknown as Predicate<RawString>;

// deno-lint-ignore no-explicit-any
type TemplateSubstitutions = any[];

class RawStringImpl extends String implements RawStringProps {
  declare [Symbol.toStringTag]: "RawString";
  static {
    this.prototype[Symbol.toStringTag] = "RawString";
  }

  #cached?: string;

  constructor(raw: string) {
    super(raw);
  }

  [vimExpressionOf](): string {
    this.#cached ??= `"${
      this.valueOf().replaceAll(/\\.|(")/g, (m, q: string) => q ? `\\${q}` : m)
    }"`;
    return this.#cached;
  }

  toJSON(): string {
    return this[vimExpressionOf]();
  }

  [Symbol.for("Deno.customInspect")]() {
    return `[${this[Symbol.toStringTag]}: ${Deno.inspect(this.valueOf())}]`;
  }
}
