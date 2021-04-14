import { Denops } from "../deps.ts";
import { execute } from "./execute.ts";

interface FileInfo {
  isDirectory: boolean;
}

export async function load(
  denops: Denops,
  filePathInfo: URL,
): Promise<void> {
  const scriptPath = await setFile(denops, filePathInfo);

  await execute(denops, `source ${scriptPath}`);
}

async function setFile(denops: Denops, filePathInfo: URL): Promise<string> {
  const re = /.*\//;
  const homeDir = await Deno.env.get("HOME") as string;

  if (filePathInfo.protocol === "file:") {
    const filename = filePathInfo.pathname.replace(re, "");
    await makePluginDir(homeDir, denops.name);

    await Deno.copyFile(
      filePathInfo.pathname,
      `${homeDir}/.cache/denops-std/${denops.name}/${denops.name}_${filename}`,
    );

    return `${homeDir}/.cache/denops-std/${denops.name}/${denops.name}_${filename}`;
  } else {
    const filename = filePathInfo.href.replace(re, "");
    const data = (await fetch(filePathInfo.href)).arrayBuffer();
    await makePluginDir(homeDir, denops.name);

    await Deno.writeFile(
      `${homeDir}/.cache/denops-std/${denops.name}/${denops.name}_${filename}`,
      new Uint8Array(await data),
    );

    return `${homeDir}/.cache/denops-std/${denops.name}/${denops.name}_${filename}`;
  }
}

async function makePluginDir(home: string, pluginName: string): Promise<void> {
  try {
    await Deno.stat(`${home}/.cache`);
  } catch (err) {
    await Deno.mkdir(`${home}/.cache`);
  }

  try {
    await Deno.stat(`${home}/.cache/denops-std`);
  } catch (err) {
    await Deno.mkdir(`${home}/.cache/denops-std`);
  }

  try {
    await Deno.stat(`${home}/.cache/denops-std/${pluginName}`);
  } catch (err) {
    await Deno.mkdir(`${home}/.cache/denops-std/${pluginName}`);
  }
}
