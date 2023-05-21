import {
  difference,
  intersection,
} from "https://deno.land/x/set_operations@v1.1.0/mod.ts";
import * as path from "https://deno.land/std@0.186.0/path/mod.ts";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { DOCS_OVERRIDES } from "./override.ts";
import { transform } from "./transform.ts";
import { downloadString } from "../utils.ts";

const VIM_VERSION = "9.0.1499";
const NVIM_VERSION = "0.8.0";

const commonGenerateModule = "../../denops_std/option/_generated.ts";
const vimGenerateModule = "../../denops_std/option/vim/_generated.ts";
const nvimGenerateModule = "../../denops_std/option/nvim/_generated.ts";

const commonManualModule = "../../denops_std/option/_manual.ts";
const vimManualModule = "../../denops_std/option/vim/_manual.ts";
const nvimManualModule = "../../denops_std/option/nvim/_manual.ts";

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
const vimOptionSet = difference(
  new Set(vimDefs.map((def) => def.name)),
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
const nvimOptionSet = difference(
  new Set(nvimDefs.map((def) => def.name)),
  manualOptionSet,
);

const nvimDefMap = new Map(nvimDefs.map((def) => [def.name, def]));
const commonDefs = vimDefs
  .map((vimDef) =>
    DOCS_OVERRIDES[vimDef.name] === "nvim"
      ? { ...vimDef, docs: nvimDefMap.get(vimDef.name)!.docs }
      : vimDef
  );

const commonOptionSet = intersection(vimOptionSet, nvimOptionSet);
const vimOnlyOptionSet = difference(vimOptionSet, nvimOptionSet);
const nvimOnlyOptionSet = difference(nvimOptionSet, vimOptionSet);

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
