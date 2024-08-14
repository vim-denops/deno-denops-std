import type { Predicate } from "@core/unknownutil/type";
import { isIntersectionOf } from "@core/unknownutil/is/intersection-of";
import { isLiteralOf } from "@core/unknownutil/is/literal-of";
import { isObjectOf } from "@core/unknownutil/is/object-of";
import {
  isVimEvaluatable,
  type VimEvaluatable,
  vimExpressionOf,
} from "./vim_evaluatable.ts";
import { stringify } from "./stringify.ts";

/**
 * An object that defines a Vim's expression.
 *
 * Note that although it inherits from primitive `string` for convenience, it
 * actually inherits from the `String` wrapper object.
 *
 * ```typescript
 * import { assertEquals } from "jsr:@std/assert/equals";
 * import { expr } from "jsr:@denops/std/eval";
 *
 * const s: string = expr`foo`;
 * assertEquals(typeof s, "object"); // is not "string"
 * ```
 */
export type Expression = string & ExpressionProps;

interface ExpressionProps extends VimEvaluatable {
  /**
   * Used by the `JSON.stringify` to enable the transformation of an object's data to JSON serialization.
   */
  toJSON(): string;

  readonly [Symbol.toStringTag]: "Expression";
}

/**
 * Create a {@linkcode Expression} that evaluates as a Vim expression.
 *
 * `raw_vim_expression` is a string text representing a raw Vim expression.
 * Backslashes are treated as Vim syntax rather than JavaScript string escape
 * sequences. Note that the raw Vim expression has not been verified and is
 * therefore **UNSAFE**.
 *
 * `${value}` is the expression to be inserted at the current position, whose
 * value is converted to the corresponding Vim expression. The conversion is
 * safe and an error is thrown if it cannot be converted. Note that if the
 * value contains `Expression` it will be inserted as-is, this is **UNSAFE**.
 *
 * ```typescript
 * import { assertEquals } from "jsr:@std/assert/equals";
 * import { expr } from "jsr:@denops/std/eval";
 *
 * assertEquals(
 *   expr`raw_vim_expression`.toString(),
 *   "raw_vim_expression",
 * );
 *
 * const value = ["foo", 123, null];
 * assertEquals(
 *   expr`raw_vim_expression + ${value}`.toString(),
 *   "raw_vim_expression + ['foo',123,v:null]"
 * );
 * ```
 */
export function expr(
  template: TemplateStringsArray,
  ...substitutions: TemplateSubstitutions
): Expression {
  const values = substitutions.map(stringify);
  const raw = String.raw(template, ...values);
  return new ExpressionImpl(raw) as unknown as Expression;
}

/**
 * Returns `true` if the value is a {@linkcode Expression}.
 *
 * ```typescript
 * import { assert, assertFalse } from "jsr:@std/assert";
 * import { isExpression, expr } from "jsr:@denops/std/eval";
 *
 * assert(isExpression(expr`123`));
 *
 * assertFalse(isExpression("456"));
 * ```
 */
export const isExpression: Predicate<Expression> = isIntersectionOf([
  // NOTE: Do not check `isString` here, because `Expression` has a different type in definition (primitive `string`) and implementation (`String`).
  isObjectOf({
    [Symbol.toStringTag]: isLiteralOf("Expression"),
  }),
  isVimEvaluatable,
]) as unknown as Predicate<Expression>;

// deno-lint-ignore no-explicit-any
type TemplateSubstitutions = any[];

class ExpressionImpl extends String implements ExpressionProps {
  declare [Symbol.toStringTag]: "Expression";
  static {
    this.prototype[Symbol.toStringTag] = "Expression";
  }

  [vimExpressionOf](): string {
    return this.valueOf();
  }

  toJSON(): string {
    return this[vimExpressionOf]();
  }

  [Symbol.for("Deno.customInspect")]() {
    return `[${this[Symbol.toStringTag]}: ${Deno.inspect(this.valueOf())}]`;
  }
}
