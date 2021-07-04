import { Denops, fs, hash, path } from "../deps.ts";
import { execute } from "./execute.ts";

/**
 * Load Vim script in local/remote URL
 */
export async function load(
  denops: Denops,
  url: URL,
): Promise<void> {
  const scriptPath = await ensureLocalFile(url);
  await execute(
    denops,
    "execute printf('source %s', fnameescape(scriptPath)) ",
    { scriptPath },
  );
}

async function ensureLocalFile(url: URL): Promise<string> {
  if (url.protocol === "file:") {
    return path.fromFileUrl(url);
  }
  const cacheDir = await getOrCreateCacheDir();
  const filename = getLocalFilename(url);
  const filepath = path.join(cacheDir, filename);
  if (await fs.exists(filepath)) {
    return filepath;
  }
  const response = await fetch(url);
  if (response.status !== 200) {
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

function getLocalFilename(url: URL): string {
  const h = hash.createHash("sha256");
  h.update(url.href);
  const basename = path.basename(url.pathname);
  return `${h.digest()}-${basename}`;
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
