/**
 * A module to provide lambda function that is callable from the outside of the plugin.
 *
 * Use `denops#callback#register()` and `denops#callback#call()` functions instead if you'd like
 * to create a lambda function of Vim script that is callable from Deno.
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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

import type { Denops } from "../mod.ts";

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
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
      try {
        return await fn(...args);
      } finally {
        unregister(denops, id);
      }
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

export interface Lambda {
  readonly id: Identifier;

  /**
   * Create a Vim script expression to notify the lambda function
   *
   * ```typescript
   * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
   * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
   *
   * export async function main(denops: Denops): Promise<void> {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *   await denops.cmd(`nmap <Space> <Cmd>call ${a.notify()}<CR>`);
   * }
   * ```
   */
  notify(...args: unknown[]): string;

  /**
   * Create a Vim script expression to request the lambda function
   *
   * ```typescript
   * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
   * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
   *
   * export async function main(denops: Denops): Promise<void> {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *   await denops.cmd(`nmap <Space> <Cmd>call ${a.request()}<CR>`);
   * }
   * ```
   */
  request(...args: unknown[]): string;

  /**
   * Dispose the lambda function
   *
   * ```typescript
   * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
   * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
   *
   * export async function main(denops: Denops): Promise<void> {
   *   const a = lambda.add(denops, () => {
   *     // Do what ever you want.
   *   });
   *  // Dispose the lambda function manually
   *  a.dispose();
   * }
   * ```
   */
  dispose(): void;

  [Symbol.dispose](): void;
}

/**
 * Add a lambda function to a denops API and return the lambda object
 *
 * ```typescript
 * import type { Denops } from "https://deno.land/x/denops_std@$MODULE_VERSION/mod.ts";
 * import * as lambda from "https://deno.land/x/denops_std@$MODULE_VERSION/lambda/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
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
 */
export function add(denops: Denops, fn: Fn): Lambda {
  const id = register(denops, fn);
  const name = denops.name;
  return {
    id,
    notify: (...args: unknown[]) => {
      args = args.map((v) => JSON.stringify(v));
      return `denops#notify('${name}', '${id}', [${args}])`;
    },
    request: (...args: unknown[]) => {
      args = args.map((v) => JSON.stringify(v));
      return `denops#request('${name}', '${id}', [${args}])`;
    },
    dispose: () => unregister(denops, id),
    [Symbol.dispose]: () => unregister(denops, id),
  };
}
