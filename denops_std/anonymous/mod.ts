import type { Denops } from "https://deno.land/x/denops_core@v3.2.2/mod.ts";

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
 * Add anonymous functions as a denops API and return the identifiers
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
 * Add oneshot anonymous functions as a denops API and return the identifiers
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
 * Remove anonymous functions identified by names from a denops API
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
