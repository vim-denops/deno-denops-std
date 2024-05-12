import {
  difference,
  intersection,
} from "https://deno.land/x/set_operations@v1.1.1/mod.ts";
import * as path from "https://deno.land/std@0.217.0/path/mod.ts";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { DOCS_OVERRIDES } from "./override.ts";
import { transform } from "./transform.ts";
import { downloadString } from "../utils.ts";

const VIM_VERSION = "9.1.0399";
const NVIM_VERSION = "0.9.5";

const commonGenerateModule = "../../function/_generated.ts";
const vimGenerateModule = "../../function/vim/_generated.ts";
const nvimGenerateModule = "../../function/nvim/_generated.ts";

const commonManualModule = "../../function/_manual.ts";
const vimManualModule = "../../function/vim/_manual.ts";
const nvimManualModule = "../../function/nvim/_manual.ts";

const manualModules = [
  commonManualModule,
  vimManualModule,
  nvimManualModule,
];
const manualFnSet = new Set(
  (await Promise.all(
    manualModules.map(async (moduleName) =>
      Object.keys(await import(moduleName))
    ),
  )).flat(),
);

const vimHelpDownloadUrls = [
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/builtin.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/channel.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/eval.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/popup.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/sign.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/terminal.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/testing.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/textprop.txt`,
];
for (const vimHelpDownloadUrl of vimHelpDownloadUrls) {
  console.log(`Download from ${vimHelpDownloadUrl}`);
}
const vimHelps = await Promise.all(vimHelpDownloadUrls.map(downloadString));
const vimDefs = parse(vimHelps.join("\n"));
const vimFnSet = difference(new Set(vimDefs.map((def) => def.fn)), manualFnSet);

const nvimHelpDownloadUrls = [
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/api.txt`,
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/builtin.txt`,
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/eval.txt`,
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/sign.txt`,
];
for (const nvimHelpDownloadUrl of nvimHelpDownloadUrls) {
  console.log(`Download from ${nvimHelpDownloadUrl}`);
}
const nvimHelps = await Promise.all(nvimHelpDownloadUrls.map(downloadString));
const nvimDefs = parse(nvimHelps.join("\n"));
const nvimFnSet = difference(
  new Set(nvimDefs.map((def) => def.fn)),
  manualFnSet,
);

const nvimDefMap = new Map(nvimDefs.map((def) => [def.fn, def]));
const commonDefs = vimDefs
  .map((vimDef) =>
    DOCS_OVERRIDES[vimDef.fn] === "nvim"
      ? { ...vimDef, docs: nvimDefMap.get(vimDef.fn)!.docs }
      : vimDef
  );

const commonFnSet = intersection(vimFnSet, nvimFnSet);
const vimOnlyFnSet = difference(vimFnSet, nvimFnSet);
const nvimOnlyFnSet = difference(nvimFnSet, vimFnSet);

const commonCode = format(
  commonDefs.filter((def) => commonFnSet.has(def.fn)),
);
const vimOnlyCode = format(
  vimDefs.filter((def) => vimOnlyFnSet.has(def.fn)),
);
const nvimOnlyCode = format(
  nvimDefs.filter((def) => nvimOnlyFnSet.has(def.fn)),
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
