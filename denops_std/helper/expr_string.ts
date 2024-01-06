import type {
  Context,
  Denops,
  Dispatcher,
  Meta,
} from "https://deno.land/x/denops_core@v6.0.5/mod.ts";
import is from "https://deno.land/x/unknownutil@v3.11.0/is.ts";
import { execute } from "./execute.ts";
import { generateUniqueString } from "../util.ts";

const EXPR_STRING_MARK = "__denops_expr_string";

/**
 * String that marked as Vim's string constant format.
 */
export type ExprString = string & {
  /**
   * @internal
   */
  readonly [EXPR_STRING_MARK]: 1;
};

type Jsonable = {
  toJSON(key: string | number | undefined): string;
};

// deno-lint-ignore no-explicit-any
type TemplateSubstitutions = any[];

const cacheKey = "denops_std/helper/expr_string@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (is.String(denops.context[cacheKey])) {
    return denops.context[cacheKey];
  }
  const suffix = generateUniqueString();
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
 * import { exprQuote } from "./expr_string.ts";
 *
 * console.log(exprQuote`foo` == "foo"); // outputs: true
 * console.log(exprQuote`foo` === "foo"); // outputs: false
 * console.log(exprQuote`foo,${40 + 2}` == "foo,42"); // outputs: true
 * ```
 *
 * @see useExprString for usage
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

const isInstanceOfBoolean = is.InstanceOf(Boolean);
const isInstanceOfNumber = is.InstanceOf(Number);
const isInstanceOfString = is.InstanceOf(String);

/**
 * Returns `true` if the value is a string marked as Vim's string constant format.
 *
 * ```typescript
 * import { exprQuote, isExprString } from "./expr_string.ts";
 *
 * console.log(isExprString(exprQuote`foo`)); // outputs: true
 * console.log(isExprString("foo")); // outputs: false
 * ```
 */
export function isExprString(x: unknown): x is ExprString {
  return is.ObjectOf({
    [EXPR_STRING_MARK]: is.LiteralOf(1),
  })(x);
}

function isJsonable(x: unknown): x is Jsonable {
  return x != null && is.Function((x as Jsonable).toJSON);
}

function isIgnoreRecordValue(x: unknown): boolean {
  return is.Undefined(x) || is.Function(x) || is.Symbol(x);
}

/**
 * @internal
 */
export function vimStringify(value: unknown, key?: string | number): string {
  if (isJsonable(value)) {
    return vimStringify(JSON.parse(value.toJSON(key)));
  }
  if (isExprString(value)) {
    // Return Vim's expr-string
    return `"${value.replaceAll('"', '\\"')}"`;
  }
  if ((is.Nullish(value) || is.Function(value) || is.Symbol(value))) {
    return "v:null";
  }
  if (is.Boolean(value) || isInstanceOfBoolean(value)) {
    // Return v:true or v:false
    return `v:${value}`;
  }
  if (is.Number(value) || isInstanceOfNumber(value)) {
    // Replace `5e-10` to `5.0e-10`
    return `${value}`.replace(/^(\d+)e/, "$1.0e");
  }
  if (is.String(value) || isInstanceOfString(value)) {
    // Returns Vim's literal-string
    return `'${value.replaceAll("'", "''")}'`;
  }
  if (is.Array(value)) {
    // Returns Vim's list
    return `[${value.map(vimStringify).join(",")}]`;
  }
  if (is.Record(value)) {
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
  const last = args.findIndex(is.Undefined);
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
 * import { Denops } from "../mod.ts";
 * import { exprQuote as q, useExprString } from "./expr_string.ts";
 * import * as fn from "../function/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
