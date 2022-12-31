import type { Denops } from "https://deno.land/x/denops_core@v3.4.1/mod.ts";
import * as fs from "https://deno.land/std@0.170.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.170.0/path/mod.ts";
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
