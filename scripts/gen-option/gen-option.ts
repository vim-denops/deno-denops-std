import {
  difference,
  intersection,
} from "https://deno.land/x/set_operations@v1.1.0/mod.ts";
import * as path from "https://deno.land/std@0.170.0/path/mod.ts";
import * as commonManual from "../../denops_std/option/_manual.ts";
import * as vimManual from "../../denops_std/option/vim/_manual.ts";
import * as nvimManual from "../../denops_std/option/nvim/_manual.ts";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { downloadString } from "./utils.ts";

const VIM_VERSION = "8.2.3452";
const NVIM_VERSION = "0.6.0";

const manualOptionSet = new Set([
  ...Object.keys(commonManual),
  ...Object.keys(vimManual),
  ...Object.keys(nvimManual),
]);

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

const commonOptionSet = intersection(vimOptionSet, nvimOptionSet);
const vimOnlyOptionSet = difference(vimOptionSet, nvimOptionSet);
const nvimOnlyOptionSet = difference(nvimOptionSet, vimOptionSet);

const commonCode = format(
  vimDefs.filter((def) => commonOptionSet.has(def.name)),
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
  path.fromFileUrl(
    new URL("../../denops_std/option/_generated.ts", import.meta.url),
  ),
  commonCode.join("\n"),
);
await Deno.writeTextFile(
  path.fromFileUrl(
    new URL("../../denops_std/option/vim/_generated.ts", import.meta.url),
  ),
  vimOnlyCode.join("\n"),
);
await Deno.writeTextFile(
  path.fromFileUrl(
    new URL("../../denops_std/option/nvim/_generated.ts", import.meta.url),
  ),
  nvimOnlyCode.join("\n"),
);
