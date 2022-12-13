import type { Denops } from "https://deno.land/x/denops_core@v3.3.0/mod.ts";
import * as fn from "../function/mod.ts";
import * as batch from "../batch/mod.ts";
import { Mapping, Mode } from "./types.ts";
import { parse } from "./parser.ts";

export type MapOptions = {
  mode?: Mode | Mode[];
  noremap?: boolean;
  script?: boolean;
  buffer?: boolean;
  expr?: boolean;
  nowait?: boolean;
  silent?: boolean;
  unique?: boolean;
};

/**
 * Register a mapping for `lhs` to `rhs` with given options.
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

export type UnmapOptions = {
  buffer?: boolean;
  mode?: Mode | Mode[];
};

/**
 * Remove a mapping for `lhs`.
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

export type ReadOptions = {
  mode?: Mode;
};

/**
 * Read a mapping and return a `Mapping` instance.
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

export type ListOptions = {
  mode?: Mode;
};

/**
 * List mappings which starts from `lhs`.
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
