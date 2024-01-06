import type { Denops } from "https://deno.land/x/denops_core@v6.0.5/mod.ts";
import * as fs from "https://deno.land/std@0.211.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.211.0/path/mod.ts";
import { execute } from "./execute.ts";

const loaded = new Set<URL>();

export type LoadOptions = {
  force?: boolean;
};

/**
 * Load a Vim script in a local/remote URL
 *
 * It does nothing if the `url` is already loaded unless `force` option is specified.
 * It returns `true` when the script is loaded. Otherwise, it returns `false`.
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { load } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Load '../../foo.vim' from this file
 *   await load(denops, new URL("../../foo.vim", import.meta.url));
 *
 *   // Load 'https://example.com/foo.vim'
 *   await load(denops, new URL("https://example.com/foo.vim"));
 * }
 * ```
 *
 * It does nothing if the `url` is already loaded unless `force` option is
 * specified like:
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { load } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const url = new URL("../../foo.vim", import.meta.url);
 *
 *   // Line below loads a script
 *   await load(denops, url);
 *
 *   // Line below does nothing while `url` is already loaded.
 *   await load(denops, url);
 *
 *   // Line below loads the script while `force` option is specified.
 *   await load(denops, url, { force: true });
 * }
 * ```
 *
 * It returns `true` when the script is loaded. Otherwise, it returns `false` like:
 *
 * ```typescript
 * import type { Denops } from "../mod.ts";
 * import { load } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const url = new URL("../../foo.vim", import.meta.url);
 *
 *   console.log(await load(denops, url));
 *   // -> true
 *
 *   console.log(await load(denops, url));
 *   // -> false
 *
 *   console.log(await load(denops, url, { force: true }));
 *   // -> true
 * }
 * ```
 *
 * Note that denops plugins works on individual threads so developers should add a
 * source guard on a Vim script as well like:
 *
 * ```vim
 * if has('g:loaded_xxxxx')
 *   finish
 * endif
 * let g:loaded_xxxxx = 1
 *
 * " Define functions or whatever
 * ```
 */
export async function load(
  denops: Denops,
  url: URL,
  options: LoadOptions = {},
): Promise<boolean> {
  if (!options.force && loaded.has(url)) {
    return false;
  }
  const scriptPath = await ensureLocalFile(url);
  await execute(
    denops,
    "execute printf('source %s', fnameescape(scriptPath)) ",
    { scriptPath },
  );
  loaded.add(url);
  return true;
}

async function ensureLocalFile(url: URL): Promise<string> {
  if (url.protocol === "file:") {
    return path.fromFileUrl(url);
  }
  const cacheDir = await getOrCreateCacheDir();
  const filename = await getLocalFilename(url);
  const filepath = path.join(cacheDir, filename);
  if (await fs.exists(filepath)) {
    return filepath;
  }
  const response = await fetch(url);
  if (response.status !== 200) {
    await response.body?.cancel();
    throw new Error(`Failed to fetch '${url}'`);
  }
  const content = await response.arrayBuffer();
  await Deno.writeFile(
    filepath,
    new Uint8Array(content),
    { mode: 0o700 }, // Do NOT allow groups/others to read the file
  );
  return filepath;
}

async function getLocalFilename(url: URL): Promise<string> {
  const buf = await crypto.subtle.digest(
    "sha-256",
    new TextEncoder().encode(url.href),
  );
  const h = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const basename = path.basename(url.pathname);
  return `${h}-${basename}`;
}

async function getOrCreateCacheDir(): Promise<string> {
  const cacheDir = Deno.build.os === "windows"
    ? getCacheDirWindows()
    : getCacheDirUnix();
  await Deno.mkdir(cacheDir, { recursive: true });
  return cacheDir;
}

function getCacheDirUnix(): string {
  const root = Deno.env.get("HOME");
  if (!root) {
    throw new Error("`HOME` environment variable is not defined.");
  }
  return path.join(root, ".cache", "denops_std", "load");
}

function getCacheDirWindows(): string {
  const root = Deno.env.get("LOCALAPPDATA");
  if (!root) {
    throw new Error("`LOCALAPPDATA` environment variable is not defined.");
  }
  return path.join(root, "denops_std", "load");
}
