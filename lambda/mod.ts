/**
 * A module to provide lambda function that is callable from the outside of the plugin.
 *
 * Use `denops#callback#register()` and `denops#callback#call()` functions instead if you'd like
 * to create a lambda function of Vim script that is callable from Deno.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add lambda function
 *   const lo = lambda.add(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *   );
 *
 *   // Use id to dispatch added function from Deno
 *   await denops.dispatch(denops.name, lo.id);
 *
 *   // Or from Vim
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
 * Lambda function identifier
 */
export type Identifier = string;

/**
 * Lambda function
 */
export type Fn = (...args: unknown[]) => unknown;

/**
 * Register options
 */
export interface Options {
  /** Register the function as a one-time lambda function that will be removed when the function has called */
  once?: boolean;
}

/**
 * Register a lambda function as a denops API and return the identifier.
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add lambda function
 *   const id = lambda.register(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *   );
 *
 *   // Use id to dispatch added function from Deno
 *   await denops.dispatch(denops.name, id);
 *
 *   // Or from Vim
 *   await denops.cmd("call denops#notify(name, id, [])", {
 *     name: denops.name,
 *     id,
 *   });
 * }
 * ```
 *
 * If you need an one-time lambda function, use `once` option like
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add lambda function
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
 *   // Use id to dispatch added function from Deno
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
 * Unregister a lambda function from a denops API identified by the identifier
 *
 * It returns `true` if the lambda function is unregistered. Otherwise it returns `false`.
 */
export function unregister(
  denops: Denops,
  id: Identifier,
): boolean {
  if (id in denops.dispatcher) {
    delete denops.dispatcher[id];
    return true;
  }
  return false;
}

export interface Lambda extends Disposable {
  readonly id: Identifier;

  /**
   * Create a Vim script expression to notify the lambda function
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
   * Create a Vim script expression to request the lambda function
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
   * Dispose the lambda function
   *
   * ```typescript
   * import type { Entrypoint } from "jsr:@denops/std";
   * import * as lambda from "jsr:@denops/std/lambda";
   *
   * export const main: Entrypoint = async (denops) => {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *  // Dispose the lambda function manually
   *  a.dispose();
   * }
   * ```
   */
  dispose(): void;
}

/**
 * Add a lambda function to a denops API and return the lambda object
 *
 * ```typescript
 * import type { Entrypoint } from "jsr:@denops/std";
 * import * as lambda from "jsr:@denops/std/lambda";
 *
 * export const main: Entrypoint = async (denops) => {
 *   // Add lambda function
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
 * You can pass JSON serializable values, {@linkcode Expression} or
 * {@linkcode [eval].RawString|RawString} for {@linkcode [lambda].notify|notify}
 * or {@linkcode [lambda].request|request} arguments.
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
    dispose: () => unregister(denops, id),
    [Symbol.dispose]: () => void unregister(denops, id),
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
