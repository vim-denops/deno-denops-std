import * as path from "@std/path";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { DOCS_OVERRIDES } from "./override.ts";
import { transform } from "./transform.ts";
import { downloadString } from "../utils.ts";

const VIM_VERSION = "9.1.0399";
const NVIM_VERSION = "0.9.5";

const commonGenerateModule = "../../option/_generated.ts";
const vimGenerateModule = "../../option/vim/_generated.ts";
const nvimGenerateModule = "../../option/nvim/_generated.ts";

const commonManualModule = "../../option/_manual.ts";
const vimManualModule = "../../option/vim/_manual.ts";
const nvimManualModule = "../../option/nvim/_manual.ts";

const manualModules = [
  commonManualModule,
  vimManualModule,
  nvimManualModule,
];
const manualOptionSet = new Set(
  (await Promise.all(
    manualModules.map(async (moduleName) =>
      Object.keys(await import(moduleName))
    ),
  )).flat(),
);

const vimHelpDownloadUrls = [
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/options.txt`,
];
for (const vimHelpDownloadUrl of vimHelpDownloadUrls) {
  console.log(`Download from ${vimHelpDownloadUrl}`);
}
const vimHelps = await Promise.all(vimHelpDownloadUrls.map(downloadString));
const vimDefs = vimHelps.map(parse).flat();
const vimOptionSet = new Set(vimDefs.map((def) => def.name)).difference(
  manualOptionSet,
);

const nvimHelpDownloadUrls = [
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/options.txt`,
];
for (const nvimHelpDownloadUrl of nvimHelpDownloadUrls) {
  console.log(`Download from ${nvimHelpDownloadUrl}`);
}
const nvimHelps = await Promise.all(nvimHelpDownloadUrls.map(downloadString));
const nvimDefs = nvimHelps.map(parse).flat();
const nvimOptionSet = new Set(nvimDefs.map((def) => def.name)).difference(
  manualOptionSet,
);

const nvimDefMap = new Map(nvimDefs.map((def) => [def.name, def]));
const commonDefs = vimDefs
  .map((vimDef) =>
    DOCS_OVERRIDES[vimDef.name] === "nvim"
      ? { ...vimDef, docs: nvimDefMap.get(vimDef.name)!.docs }
      : vimDef
  );

const commonOptionSet = vimOptionSet.intersection(nvimOptionSet);
const vimOnlyOptionSet = vimOptionSet.difference(nvimOptionSet);
const nvimOnlyOptionSet = nvimOptionSet.difference(vimOptionSet);

const commonCode = format(
  commonDefs.filter((def) => commonOptionSet.has(def.name)),
  ".",
);
const vimOnlyCode = format(
  vimDefs.filter((def) => vimOnlyOptionSet.has(def.name)),
  "..",
);
const nvimOnlyCode = format(
  nvimDefs.filter((def) => nvimOnlyOptionSet.has(def.name)),
  "..",
);

await Deno.writeTextFile(
  resolvePath(commonGenerateModule),
  commonCode.join("\n"),
);
await Deno.writeTextFile(
  resolvePath(vimGenerateModule),
  vimOnlyCode.join("\n"),
);
await Deno.writeTextFile(
  resolvePath(nvimGenerateModule),
  nvimOnlyCode.join("\n"),
);

await transform(resolvePath(commonManualModule), commonDefs);
await transform(resolvePath(vimManualModule), vimDefs);
await transform(resolvePath(nvimManualModule), nvimDefs);

function resolvePath(p: string): string {
  return path.fromFileUrl(new URL(p, import.meta.url));
}
