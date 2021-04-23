
import * as path from "https://deno.land/std@0.93.0/path/mod.ts";
import { Denops } from "../deps.ts";
import { execute } from "./execute.ts";

interface FileInfo {
  isDirectory: boolean;
}

const homeDir = await Deno.env.get((Deno.build.os === "windows") ? "LOCALAPPDATA" : "HOME") as string;

export async function load(
  denops: Denops,
  filePathInfo: URL,
): Promise<void> {
  if (Deno.build.os === "windows") {
    filePathInfo.pathname = filePathInfo.pathname.slice(
      1,
      filePathInfo.pathname.length,
    );
  }

  if (homeDir === undefined) {
      console.log(`$${(Deno.build.os === "windows") ? "LOCALAPPDATA" : "HOME"} is not set`);
      return null;
  }

  const scriptPath = await setFile(denops, filePathInfo);
  const escapePath = await denops.call("fnameescape", scriptPath);

  await execute(denops, "source escapePath", { escapePath });
}

async function setFile(denops: Denops, filePathInfo: URL): Promise<string> {
  const dirName = (await path.dirname(filePathInfo.pathname)) + "/";
  const fileName = filePathInfo.pathname.replace(dirName, "");
  let filePath: string;

  if (Deno.build.os === "windows") {
    filePath = await path.join(
      homeDir,
      "denops-std",
      denops.name,
      `${denops.name}_${fileName}`,
    );
  } else {
    filePath = await path.join(
      homeDir,
      ".cache",
      "denops-std",
      denops.name,
      `${denops.name}_${fileName}`,
    );
  }

  if (filePathInfo.protocol === "file:") {
    await makePluginDir(denops.name);

    await Deno.copyFile(
      filePathInfo.pathname,
      filePath,
    );

    return filePath;
  } else {
    let data!: Promise<ArrayBuffer>;

    const fetchData = async (): Promise<void> => {
      data = (await fetch(filePathInfo.href)).arrayBuffer();
    };

    await Promise.all([fetchData(), makePluginDir(denops.name)]);

    await Deno.writeFile(
      filePath,
      new Uint8Array(await data),
    );

    return filePath;
  }
}

async function makePluginDir(pluginName: string): Promise<void> {
  const mkdirOpt = {
    recursive: true,
  };

  if (Deno.build.os === "windows") {
    await Deno.mkdir(
      path.join(homeDir, "denops-std", pluginName),
      mkdirOpt,
    );
  } else {
    await Deno.mkdir(
      path.join(homeDir, ".cache", "denops-std", pluginName),
      mkdirOpt,
    );
  }
}

