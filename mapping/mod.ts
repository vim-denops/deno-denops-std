/**
 * A module to provide helper functions to manage mappings
 *
 * @module
 */
import type { Denops } from "https://deno.land/x/denops_core@v6.0.5/mod.ts";
import * as fn from "../function/mod.ts";
import * as batch from "../batch/mod.ts";
import { Mapping, Mode } from "./types.ts";
import { parse } from "./parser.ts";

export interface MapOptions {
  mode?: Mode | Mode[];
  noremap?: boolean;
  script?: boolean;
  buffer?: boolean;
  expr?: boolean;
  nowait?: boolean;
  silent?: boolean;
  unique?: boolean;
}

/**
 * Register a mapping for `lhs` to `rhs` with given options.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as mapping from "../mapping/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await mapping.map(denops, "<Plug>(test-denops-std)", "Hello");
 *   await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
 *     mode: "i",
 *   });
 * }
 * ```
 *
 * Users can specify multiple `mode` value like:
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as mapping from "../mapping/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
 *     mode: ["n", "i", "x"],
 *   });
 * }
 * ```
 */
export async function map(
  denops: Denops,
  lhs: string,
  rhs: string,
  options: MapOptions = {},
): Promise<void> {
  const modes = forceArray(options.mode ?? "");
  const prefix = options.noremap ? "nore" : "";
  const arg = [
    options.buffer ? "<buffer>" : "",
    options.nowait ? "<nowait>" : "",
    options.silent ? "<silent>" : "",
    options.script ? "<script>" : "",
    options.expr ? "<expr>" : "",
    options.unique ? "<unique>" : "",
  ].filter((v) => v).join("");
  await batch.batch(denops, async (denops) => {
    for (const mode of modes) {
      await denops.cmd(`${mode}${prefix}map ${arg} ${lhs} ${rhs}`);
    }
  });
}

export interface UnmapOptions {
  buffer?: boolean;
  mode?: Mode | Mode[];
}

/**
 * Remove a mapping for `lhs`.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as mapping from "../mapping/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await mapping.map(denops, "<Plug>(test-denops-std)", "Hello");
 *   await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
 *     mode: "i",
 *   });
 *
 *   await mapping.unmap(denops, "<Plug>(test-denops-std)");
 *   await mapping.unmap(denops, "<Plug>(test-denops-std)", {
 *     mode: "i",
 *   });
 * }
 * ```
 *
 * Users can specify multiple `mode` value like:
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as mapping from "../mapping/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await mapping.map(denops, "<Plug>(test-denops-std)", "Hello", {
 *     mode: ["n", "i", "x"],
 *   });
 *
 *   await mapping.unmap(denops, "<Plug>(test-denops-std)", {
 *     mode: ["n", "i", "x"],
 *   });
 * }
 * ```
 */
export async function unmap(
  denops: Denops,
  lhs: string,
  options: UnmapOptions = {},
): Promise<void> {
  const buffer = options.buffer ? "<buffer>" : "";
  const modes = forceArray(options.mode ?? "");
  await batch.batch(denops, async (denops) => {
    for (const mode of modes) {
      await denops.cmd(`${mode}unmap ${buffer} ${lhs}`);
    }
  });
}

export interface ReadOptions {
  mode?: Mode;
}

/**
 * Read a mapping and return a `Mapping` instance.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as mapping from "../mapping/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   await denops.cmd(`map <Plug>(test-denops-std) Hello`);
 *
 *   console.log(await mapping.read(denops, "<Plug>(test-denops-std)"));
 *   // {
 *   //   mode: "",
 *   //   lhs: "<Plug>(test-denops-std)",
 *   //   rhs: "Hello",
 *   //   // ...
 *   // }
 * }
 * ```
 *
 * Note that prior to Vim 8.2.0491 or Neovim 0.5.0, `script` is
 * not detectable by `maparg` function internally used in this
 * function.
 */
export async function read(
  denops: Denops,
  lhs: string,
  options: ReadOptions = {},
): Promise<Mapping> {
  const info = await fn.maparg(
    denops,
    lhs,
    options.mode ?? "",
    false,
    true,
  ) as Record<string, unknown>;
  if (Object.keys(info).length === 0) {
    throw new Error(`No mapping found for '${lhs}'`);
  }
  return {
    mode: (info.mode as string).trim() as Mode,
    lhs: info.lhs as string,
    rhs: info.rhs as string,
    noremap: !!info.noremap,
    script: !!info.script,
    buffer: !!info.buffer,
    sid: info.sid as number,
    lnum: info.lnum as number,
    expr: !!info.expr,
    nowait: !!info.nowait,
    silent: !!info.silent,
  };
}

export interface ListOptions {
  mode?: Mode;
}

/**
 * List mappings which starts from `lhs`.
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import * as mapping from "../mapping/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const result = await mapping.list(denops, "<Plug>");
 *   console.log(result);
 *   // [
 *   //   {
 *   //     mode: "",
 *   //     lhs: "<Plug>(...)",
 *   //     // ...
 *   //   },
 *   //   // ...
 *   // ]
 * }
 * ```
 */
export async function list(
  denops: Denops,
  lhs: string,
  options: ListOptions = {},
): Promise<Mapping[]> {
  const mode = options.mode ?? "";
  const result = await fn.execute(denops, `${mode}map ${lhs}`) as string;
  return result.split(/\r?\n/).flatMap((v) => {
    try {
      return [parse(v)];
    } catch {
      return [];
    }
  }).filter((v) => v);
}

function forceArray<T>(v: T | T[]): T[] {
  return Array.isArray(v) ? v : [v];
}
