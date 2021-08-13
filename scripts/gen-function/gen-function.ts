import {
  difference,
  intersection,
} from "https://deno.land/x/set_operations@v1.0.0/mod.ts";
import * as path from "https://deno.land/std@0.104.0/path/mod.ts";
import * as commonManual from "../../denops_std/function/_manual.ts";
import * as vimManual from "../../denops_std/function/vim/_manual.ts";
import * as nvimManual from "../../denops_std/function/nvim/_manual.ts";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { downloadString } from "./utils.ts";

const VIM_VERSION = "8.1.2424";
const NVIM_VERSION = "0.4.4";

const manualFnSet = new Set([
  ...Object.keys(commonManual),
  ...Object.keys(vimManual),
  ...Object.keys(nvimManual),
]);

const vimHelp = await downloadString(
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/eval.txt`,
);
const vimDefs = parse(vimHelp);
const vimFnSet = difference(new Set(vimDefs.map((def) => def.fn)), manualFnSet);

const nvimHelp = await downloadString(
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/eval.txt`,
);
const nvimDefs = parse(nvimHelp);
const nvimFnSet = difference(
  new Set(nvimDefs.map((def) => def.fn)),
  manualFnSet,
);

const commonFnSet = intersection(vimFnSet, nvimFnSet);
const vimOnlyFnSet = difference(vimFnSet, nvimFnSet);
const nvimOnlyFnSet = difference(nvimFnSet, vimFnSet);

const commonCode = format(
  vimDefs.filter((def) => commonFnSet.has(def.fn)),
  "..",
);
const vimOnlyCode = format(
  vimDefs.filter((def) => vimOnlyFnSet.has(def.fn)),
  "../..",
);
const nvimOnlyCode = format(
  nvimDefs.filter((def) => nvimOnlyFnSet.has(def.fn)),
  "../..",
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
