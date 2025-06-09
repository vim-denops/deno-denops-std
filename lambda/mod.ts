/**
 * A module to provide lambda functions that is callable from outside of the plugin.
 *
 * If you want to create a Vim script lambda functions callable from Deno,
 * use `denops#callback#register()` and `denops#callback#call()` instead.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add a lambda function
 *   const lo = lambda.add(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *   );
 *
 *   // Dispatch the function from Deno using its id
 *   await denops.dispatch(denops.name, lo.id);
 *
 *   // Or call it from Vim
 *   await denops.cmd(`call ${lo.notify()}`);
 *
 *   // Dispose the lambda object
 *   lo.dispose();
 * }
 * ```
 *
 * @module
 */

import type { Denops } from "@denops/core";
import type { Predicate } from "@core/unknownutil/type";
import { isArray } from "@core/unknownutil/is/array";
import { isLiteralOf } from "@core/unknownutil/is/literal-of";
import { isLiteralOneOf } from "@core/unknownutil/is/literal-one-of";
import { isTupleOf } from "@core/unknownutil/is/tuple-of";
import { stringify } from "../eval/stringify.ts";
import { expr, type Expression } from "../eval/expression.ts";

/**
 * A unique identifier for a registered lambda function.
 */
export type Identifier = string;

/**
 * The type signature for a lambda function.
 */
export type Fn = (...args: unknown[]) => unknown;

/**
 * Options for registering a lambda function.
 */
export interface Options {
  /** If true, the lambda function will be unregistered when it is called once */
  once?: boolean;
}

/**
 * Registers a lambda function as a denops API and returns its identifier
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add a lambda function
 *   const id = lambda.register(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *   );
 *
 *   // Dispatch the function from Deno using its id
 *   await denops.dispatch(denops.name, id);
 *
 *   // Or call it from Vim
 *   await denops.cmd("call denops#notify(name, id, [])", {
 *     name: denops.name,
 *     id,
 *   });
 * }
 * ```
 *
 * To register a lambda function that is executed only once, use the {@linkcode Options.once|once} option:
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add a lambda function
 *   const id = lambda.register(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *     {
 *       once: true,
 *     },
 *   );
 *
 *   // Dispatch the function from Deno using its id
 *   await denops.dispatch(denops.name, id);
 *
 *   // Second call would throw error
 *   await denops.dispatch(denops.name, id);
 * }
 * ```
 */
export function register(
  denops: Denops,
  fn: Fn,
  options: Options = {},
): Identifier {
  const uuid = crypto.randomUUID();
  const id = `lambda:${denops.name}:${uuid}`;
  if (options.once) {
    denops.dispatcher[id] = async (...args: unknown[]) => {
      unregister(denops, id);
      return await fn(...args);
    };
  } else {
    denops.dispatcher[id] = async (...args: unknown[]) => {
      return await fn(...args);
    };
  }
  return id;
}

/**
 * Unregisters a lambda function registered via {@linkcode register} function using its identifier
 *
 * Returns `true` if successfully unregistered, otherwise `false`.
 */
export function unregister(
  denops: Denops,
  id: Identifier,
): boolean {
  if (isRegisteredFnId(id) && id in denops.dispatcher) {
    delete denops.dispatcher[id];
    return true;
  }
  return false;
}

/**
 * An object representing a registered lambda function in the denops API
 *
 * Instances of this interface are returned by {@linkcode add} function.
 */
export interface Lambda extends Disposable {
  /**
   * The identifier of the registered lambda function
   */
  readonly id: Identifier;

  /**
   * Generates a Vim script expression to notify the lambda function
   *
   * ```typescript
   * import type { Entrypoint } from "jsr:@denops/std";
   * import * as lambda from "jsr:@denops/std/lambda";
   *
   * export const main: Entrypoint = async (denops) => {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *   await denops.cmd(`nmap <Space> <Cmd>call ${a.notify()}<CR>`);
   * }
   * ```
   */
  notify(...args: unknown[]): Expression;

  /**
   * Generates a Vim script expression to request the lambda function
   *
   * ```typescript
   * import type { Entrypoint } from "jsr:@denops/std";
   * import * as lambda from "jsr:@denops/std/lambda";
   *
   * export const main: Entrypoint = async (denops) => {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *   await denops.cmd(`nmap <Space> <Cmd>call ${a.request()}<CR>`);
   * }
   * ```
   */
  request(...args: unknown[]): Expression;

  /**
   * Disposes the lambda function
   *
   * ```typescript
   * import type { Entrypoint } from "jsr:@denops/std";
   * import * as lambda from "jsr:@denops/std/lambda";
   *
   * export const main: Entrypoint = async (denops) => {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *   // Dispose the lambda function manually
   *   a.dispose();
   * }
   * ```
   */
  dispose(): void;
}

/**
 * Adds a lambda function as a denops API and returns a {@linkcode Lambda} object
 *
 * The returned {@linkcode Lambda} object provides methods to generate Vim script expressions for
 * invoking the registered lambda function, either as a {@linkcode Lambda.notify|notify} or as
 * a {@linkcode Lambda.request|request}. It also provides a method to {@linkcode Lambda.dispose|dispose}
 * the lambda function.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add a lambda function
 *   const lo = lambda.add(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *   );
 *
 *   // Call the lambda function from Vim script
 *   await denops.eval(lo.request());
 *
 *   // Dispose the lambda object
 *   lo.dispose();
 * }
 * ```
 *
 * The {@linkcode Lambda.notify|notify} and {@linkcode Lambda.request|request} methods accept JSON
 * serializable values, {@linkcode [eval].Expression|Expression} or {@linkcode [eval].RawString|RawString}
 * as arguments. The registered lambda function will be invoked with the arguments.
 *
 * The lambda function itself can return any of the serializable values as described above.
 * The return value will be sent back to Vim when using {@linkcode Lambda.request|request}.
 *
 * ```typescript
 * import type { Denops } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 * import { expr, rawString } from "jsr:@denops/std/eval";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const a = lambda.add(denops, (cword: unknown) => {
 *     // Do what ever you want.
 *     return rawString`\<CR>`;
 *   });
 *   await denops.cmd(`nmap <expr> <Space> ${
 *     a.request(expr`expand("<cword>")`)
 *   }`);
 * }
 * ```
 */
export function add(denops: Denops, fn: Fn): Lambda {
  const fnWrapper = async (...args: unknown[]) => {
    if (isFnWrapperArgs(args)) {
      const [, type, fnArgs] = args;
      if (type === "notify") {
        await fn(...fnArgs);
      } else {
        return stringify(await fn(...fnArgs));
      }
    } else {
      return await fn(...args);
    }
  };
  const id = register(denops, fnWrapper);
  const { name } = denops;
  const dispose = (): void => void unregister(denops, id);
  return {
    id,
    notify: (...args: unknown[]) => {
      const fnArgs: FnWrapperArgs = [VIM_REQUEST_FLAG, "notify", args];
      return expr`denops#notify(${name}, ${id}, ${fnArgs})`;
    },
    request: (...args: unknown[]) => {
      const fnArgs: FnWrapperArgs = [VIM_REQUEST_FLAG, "request", args];
      return expr`eval(denops#request(${name}, ${id}, ${fnArgs}))`;
    },
    dispose,
    [Symbol.dispose]: dispose,
  };
}

const VIM_REQUEST_FLAG = "__denops_std__lambda__vim_request@1";

type FnWrapperArgs = [
  flag: typeof VIM_REQUEST_FLAG,
  type: "notify" | "request",
  fnArgs: unknown[],
];

const isFnWrapperArgs = isTupleOf([
  isLiteralOf(VIM_REQUEST_FLAG),
  isLiteralOneOf(["notify", "request"] as const),
  isArray,
]) satisfies Predicate<FnWrapperArgs>;

function isRegisteredFnId(id: unknown): id is Identifier {
  return typeof id === "string" && id.startsWith("lambda:");
}
