/**
 * A module to provide expression string function to represents Vim's string constant.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import {
 *   type ExprString,
 *   exprQuote as q,
 *   useExprString,
 * } from "jsr:@denops/std/helper/expr_string";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Create `ExprString` value with `exprQuote`.
 *   const vimKeySequence: ExprString = q`\<Cmd>echo 'foo'\<CR>`;
 *
 *   // Use `ExprString` value in `useExprString` block.
 *   await useExprString(denops, async (denops) => {
 *     await fn.feedkeys(denops, vimKeySequence)
 *     await denops.cmd('echo value', { value: q`\U0001F680` })
 *   });
 * }
 * ```
 *
 * @module
 * @deprecated Use {@linkcode [eval].rawString|rawString}
 */
import type { Context, Denops, Dispatcher, Meta } from "@denops/core";
import { isArray } from "@core/unknownutil/is/array";
import { isBoolean } from "@core/unknownutil/is/boolean";
import { isFunction } from "@core/unknownutil/is/function";
import { isInstanceOf } from "@core/unknownutil/is/instance-of";
import { isLiteralOf } from "@core/unknownutil/is/literal-of";
import { isNullish } from "@core/unknownutil/is/nullish";
import { isNumber } from "@core/unknownutil/is/number";
import { isObjectOf } from "@core/unknownutil/is/object-of";
import { isRecord } from "@core/unknownutil/is/record";
import { isString } from "@core/unknownutil/is/string";
import { isSymbol } from "@core/unknownutil/is/symbol";
import { isUndefined } from "@core/unknownutil/is/undefined";
import { ulid } from "@std/ulid";
import { execute } from "./execute.ts";

const EXPR_STRING_MARK = "__denops_expr_string";

/**
 * String that marked as Vim's string constant format.
 *
 * @deprecated Use {@linkcode [eval].rawString|rawString} and {@linkcode [eval].RawString|RawString}
 */
export type ExprString = string & {
  /**
   * @internal
   */
  readonly __denops_expr_string: 1;
};

type Jsonable = {
  /**
   * Returns a JSON value that can be specified to {@link JSON.stringify}.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior|toJSON() behavior}
   */
  toJSON(key: string | number | undefined): unknown;
};

// deno-lint-ignore no-explicit-any
type TemplateSubstitutions = any[];

const cacheKey = "denops_std/helper/expr_string@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (isString(denops.context[cacheKey])) {
    return denops.context[cacheKey];
  }
  const suffix = ulid();
  denops.context[cacheKey] = suffix;
  const script = `
  let g:loaded_denops_std_helper_exprStr_${suffix} = 1

  function DenopsStdHelperExprStringCall_${suffix}(fn, args) abort
    return call(a:fn, eval(a:args))
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

/**
 * Tagged template function that marks a string as Vim's string constant format.
 * Returns a `String` wrapper object instead of a primitive string.
 *
 * ```typescript
 * import { exprQuote } from "jsr:@denops/std/helper/expr_string";
 *
 * console.log(exprQuote`foo` == "foo"); // outputs: true
 * console.log(exprQuote`foo` === "foo"); // outputs: false
 * console.log(exprQuote`foo,${40 + 2}` == "foo,42"); // outputs: true
 * ```
 *
 * @see useExprString for usage
 * @deprecated Use {@linkcode [eval].rawString|rawString}
 */
export function exprQuote(
  template: TemplateStringsArray,
  ...substitutions: TemplateSubstitutions
): ExprString {
  const raw = String.raw(template, ...substitutions);
  return Object.assign(raw, {
    [EXPR_STRING_MARK]: 1 as const,
  });
}

const isInstanceOfBoolean = isInstanceOf(Boolean);
const isInstanceOfNumber = isInstanceOf(Number);
const isInstanceOfString = isInstanceOf(String);

/**
 * Returns `true` if the value is a string marked as Vim's string constant format.
 *
 * ```typescript
 * import { exprQuote, isExprString } from "jsr:@denops/std/helper/expr_string";
 *
 * console.log(isExprString(exprQuote`foo`)); // outputs: true
 * console.log(isExprString("foo")); // outputs: false
 * ```
 *
 * @deprecated Use {@linkcode [eval].rawString|rawString} and {@linkcode [eval].isRawString|isRawString}
 */
export function isExprString(x: unknown): x is ExprString {
  return isObjectOf({
    [EXPR_STRING_MARK]: isLiteralOf(1),
  })(x);
}

// NOTE: Do not use [@core/unknownutil@4.3.0/is/custom-jsonable], it's changes behaviour.
function isJsonable(x: unknown): x is Jsonable {
  return x != null && isFunction((x as Jsonable).toJSON);
}

function isIgnoreRecordValue(x: unknown): boolean {
  return isUndefined(x) || isFunction(x) || isSymbol(x);
}

/**
 * @internal
 */
export function vimStringify(value: unknown, key?: string | number): string {
  if (isJsonable(value)) {
    return vimStringify(value.toJSON(key));
  }
  if (isExprString(value)) {
    // Return Vim's expr-string
    return `"${value.replaceAll('"', '\\"')}"`;
  }
  if ((isNullish(value) || isFunction(value) || isSymbol(value))) {
    return "v:null";
  }
  if (isBoolean(value) || isInstanceOfBoolean(value)) {
    // Return v:true or v:false
    return `v:${value}`;
  }
  if (isNumber(value) || isInstanceOfNumber(value)) {
    // Replace `5e-10` to `5.0e-10`
    return `${value}`.replace(/^(\d+)e/, "$1.0e");
  }
  if (isString(value) || isInstanceOfString(value)) {
    // Returns Vim's literal-string
    return `'${value.replaceAll("'", "''")}'`;
  }
  if (isArray(value)) {
    // Returns Vim's list
    return `[${value.map(vimStringify).join(",")}]`;
  }
  if (isRecord(value)) {
    // Returns Vim's dict
    return `{${
      Object.entries(value)
        .filter(([, value]) => !isIgnoreRecordValue(value))
        .map(([key, value]) =>
          `'${key.replaceAll("'", "''")}':${vimStringify(value, key)}`
        )
        .join(",")
    }}`;
  }
  const type = Object.prototype.toString.call(value).slice(8, -1);
  throw new TypeError(`${type} value can't be serialized`);
}

function trimEndOfArgs(args: unknown[]): unknown[] {
  const last = args.findIndex(isUndefined);
  return last < 0 ? args : args.slice(0, last);
}

class ExprStringHelper implements Denops {
  #denops: Denops;

  constructor(denops: Denops) {
    this.#denops = denops;
  }

  get name(): string {
    return this.#denops.name;
  }

  get meta(): Meta {
    return this.#denops.meta;
  }

  get interrupted(): AbortSignal | undefined {
    return this.#denops.interrupted;
  }

  get context(): Record<string | number | symbol, unknown> {
    return this.#denops.context;
  }

  get dispatcher(): Dispatcher {
    return this.#denops.dispatcher;
  }

  set dispatcher(dispatcher: Dispatcher) {
    this.#denops.dispatcher = dispatcher;
  }

  redraw(force?: boolean): Promise<void> {
    return this.#denops.redraw(force);
  }

  async call(fn: string, ...args: unknown[]): Promise<unknown> {
    const suffix = await ensurePrerequisites(this.#denops);
    return this.#denops.call(
      `DenopsStdHelperExprStringCall_${suffix}`,
      fn,
      vimStringify(trimEndOfArgs(args)),
    );
  }

  async batch(...calls: [string, ...unknown[]][]): Promise<unknown[]> {
    const suffix = await ensurePrerequisites(this.#denops);
    const callHelper = `DenopsStdHelperExprStringCall_${suffix}`;
    return this.#denops.batch(
      ...calls.map(([fn, ...args]): [string, ...unknown[]] => [
        callHelper,
        fn,
        vimStringify(trimEndOfArgs(args)),
      ]),
    );
  }

  async cmd(cmd: string, ctx: Context = {}): Promise<void> {
    await this.call("denops#api#cmd", cmd, ctx);
  }

  eval(expr: string, ctx: Context = {}): Promise<unknown> {
    return this.call("denops#api#eval", expr, ctx);
  }

  dispatch(name: string, fn: string, ...args: unknown[]): Promise<unknown> {
    return this.#denops.dispatch(name, fn, ...args);
  }
}

/**
 * Call the denops function using Vim's string constant format.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import { exprQuote as q, useExprString } from "jsr:@denops/std/helper/expr_string";
 *
 * export const main: Entrypoint = async (denops) => {
 *   await useExprString(denops, async (denops) => {
 *     await fn.feedkeys(denops, q`\<Cmd>echo 'foo'\<CR>`)
 *     await denops.cmd('echo value', { value: q`\U0001F680` })
 *   });
 * }
 * ```
 */
export function useExprString<T extends unknown>(
  denops: Denops,
  executor: (helper: ExprStringHelper) => Promise<T>,
): Promise<T> {
  const helper = new ExprStringHelper(denops);
  return executor(helper);
}
