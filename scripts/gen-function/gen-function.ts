import {
  difference,
  intersection,
} from "https://deno.land/x/set_operations@v1.1.0/mod.ts";
import * as path from "https://deno.land/std@0.170.0/path/mod.ts";
import * as commonManual from "../../denops_std/function/_manual.ts";
import * as vimManual from "../../denops_std/function/vim/_manual.ts";
import * as nvimManual from "../../denops_std/function/nvim/_manual.ts";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { downloadString } from "./utils.ts";

const VIM_VERSION = "9.0.0472";
const NVIM_VERSION = "0.8.0";

const manualFnSet = new Set([
  ...Object.keys(commonManual),
  ...Object.keys(vimManual),
  ...Object.keys(nvimManual),
]);

const vimHelpDownloadUrls = [
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/eval.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/textprop.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/terminal.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/channel.txt`,
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/testing.txt`,
];
for (const vimHelpDownloadUrl of vimHelpDownloadUrls) {
  console.log(`Download from ${vimHelpDownloadUrl}`);
}
const vimHelps = await Promise.all(vimHelpDownloadUrls.map(downloadString));
const vimDefs = vimHelps.map(parse).flat();
const vimFnSet = difference(new Set(vimDefs.map((def) => def.fn)), manualFnSet);

const nvimHelpDownloadUrls = [
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/eval.txt`,
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/api.txt`,
];
for (const nvimHelpDownloadUrl of nvimHelpDownloadUrls) {
  console.log(`Download from ${nvimHelpDownloadUrl}`);
}
const nvimHelps = await Promise.all(nvimHelpDownloadUrls.map(downloadString));
const nvimDefs = nvimHelps.map(parse).flat();
const nvimFnSet = difference(
  new Set(nvimDefs.map((def) => def.fn)),
  manualFnSet,
);

const commonFnSet = intersection(vimFnSet, nvimFnSet);
const vimOnlyFnSet = difference(vimFnSet, nvimFnSet);
const nvimOnlyFnSet = difference(nvimFnSet, vimFnSet);

const commonCode = format(
  vimDefs.filter((def) => commonFnSet.has(def.fn)),
);
const vimOnlyCode = format(
  vimDefs.filter((def) => vimOnlyFnSet.has(def.fn)),
);
const nvimOnlyCode = format(
  nvimDefs.filter((def) => nvimOnlyFnSet.has(def.fn)),
);

await Deno.writeTextFile(
  path.fromFileUrl(
    new URL("../../denops_std/function/_generated.ts", import.meta.url),
  ),
  commonCode.join("\n"),
);
await Deno.writeTextFile(
  path.fromFileUrl(
    new URL("../../denops_std/function/vim/_generated.ts", import.meta.url),
  ),
  vimOnlyCode.join("\n"),
);
await Deno.writeTextFile(
  path.fromFileUrl(
    new URL("../../denops_std/function/nvim/_generated.ts", import.meta.url),
  ),
  nvimOnlyCode.join("\n"),
);
