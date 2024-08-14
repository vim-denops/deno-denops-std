import type { Predicate } from "@core/unknownutil/type";
import { isFunction } from "@core/unknownutil/is/function";
import { isObjectOf } from "@core/unknownutil/is/object-of";

/** @internal */
// NOTE: Use `Symbol.for` instead of `Symbol` because multiple versions of libraries may be mixedly used.
export const vimExpressionOf = Symbol.for("denops.eval.VimExpressionOf");

/** @internal */
export type VimEvaluatable = {
  /** @internal */
  [vimExpressionOf](): string;
};

/** @internal */
export const isVimEvaluatable: Predicate<VimEvaluatable> = isObjectOf({
  [vimExpressionOf]: isFunction as Predicate<
    VimEvaluatable[typeof vimExpressionOf]
  >,
});
