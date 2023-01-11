/**
 * A module to provide anonymous function which is callable from
 * outside of the plugin (Vim or other plugins.)
 *
 * @deprecated Use `lambda` module instead.
 * @module
 */
import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";

// https://github.com/microsoft/TypeScript/issues/26223#issuecomment-674500430
export type TupleOf<T, N extends number> = N extends N
  ? number extends N ? T[] : _TupleOf<T, N, []>
  : never;
export type _TupleOf<T, N extends number, R extends unknown[]> =
  R["length"] extends N ? R
    : _TupleOf<T, N, [T, ...R]>;

/**
 * Anonymous function identifier
 */
export type Identifier = string;

/**
 * Anonymous function callback
 */
export type Callback = (...args: unknown[]) => Promise<unknown> | unknown;

/**
 * Add anonymous functions as denops API and return the identifiers
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as anonymous from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Add anonymous functions
 *   const ids = anonymous.add(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *     () => {
 *       // Do what ever you want.
 *     },
 *     // You can add as many callbacks as you want...
 *   );
 *
 *   // Use ids to dispatch added functions from Deno
 *   await denops.dispatch(denops.name, ids[0]);
 *   await denops.dispatch(denops.name, ids[1]);
 *
 *   // Or from Vim
 *   await denops.cmd("call denops#notify(name, id, [])", {
 *     name: denops.name,
 *     id: ids[1],
 *   });
 * }
 * ```
 *
 * @deprecated Use `lambda.register()` function instead.
 */
export function add<N extends number>(
  denops: Denops,
  ...callbacks: Callback[] & { length: N }
): TupleOf<Identifier, N> {
  return callbacks.map((callback) => {
    const id = makeid();
    denops.dispatcher[id] = async (...args: unknown[]) => {
      return await callback(...args);
    };
    return id;
    // deno-lint-ignore no-explicit-any
  }) as any;
}

/**
 * Add oneshot anonymous functions as denops API and return the identifiers
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as anonymous from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Add anonymous functions
 *   const ids = anonymous.once(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *     () => {
 *       // Do what ever you want.
 *     },
 *     // You can add as many callbacks as you want...
 *   );
 *
 *   // First calls complete normally
 *   await denops.dispatch(denops.name, ids[0]);
 *   await denops.dispatch(denops.name, ids[1]);
 *
 *   // But second call would throw errors
 *   await denops.dispatch(denops.name, ids[0]);
 * }
 * ```
 *
 * @deprecated Use `lambda.register()` function instead.
 */
export function once<N extends number>(
  denops: Denops,
  ...callbacks: Callback[] & { length: N }
): TupleOf<Identifier, N> {
  return callbacks.map((callback) => {
    const id = makeid();
    denops.dispatcher[id] = async (...args: unknown[]): Promise<unknown> => {
      try {
        return await callback(...args);
      } finally {
        remove(denops, id);
      }
    };
    return id;
    // deno-lint-ignore no-explicit-any
  }) as any;
}

/**
 * Remove anonymous functions from denops API identified by the identifiers
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as anonymous from "./mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Add anonymous functions
 *   const ids = anonymous.add(
 *     denops,
 *     () => {
 *       // Do what ever you want.
 *     },
 *     () => {
 *       // Do what ever you want.
 *     },
 *     // You can add as many callbacks as you want...
 *   );
 *
 *   // Remove ids[1]
 *   anonymous.remove(denops, ids[1]);
 *
 *   // Call of ids[0] complete normally
 *   await denops.dispatch(denops.name, ids[0]);
 *
 *   // But ids[1] is already removed
 *   await denops.dispatch(denops.name, ids[1]);
 * }
 * ```
 *
 * @deprecated Use `lambda.unregister()` function instead.
 */
export function remove<N extends number>(
  denops: Denops,
  ...ids: Identifier[] & { length: N }
): TupleOf<boolean, N> {
  return ids.map((id) => {
    if (id in denops.dispatcher) {
      delete denops.dispatcher[id];
      return true;
    }
    return false;
    // deno-lint-ignore no-explicit-any
  }) as any;
}

// https://stackoverflow.com/a/1349426
function makeid(): string {
  const s = 32;
  const cs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const cn = cs.length;
  let r = "";
  for (let i = 0; i < s; i++) {
    r += cs.charAt(Math.floor(Math.random() * cn));
  }
  return `anonymous:${r}`;
}
