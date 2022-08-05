import {
  difference,
  intersection,
} from "https://deno.land/x/set_operations@v1.0.3/mod.ts";
import * as path from "https://deno.land/std@0.151.0/path/mod.ts";
import * as commonManual from "../../denops_std/option/_manual.ts";
import * as vimManual from "../../denops_std/option/vim/_manual.ts";
import * as nvimManual from "../../denops_std/option/nvim/_manual.ts";
import { parse } from "./parse.ts";
import { format } from "./format.ts";
import { downloadString } from "./utils.ts";

const VIM_VERSION = "8.2.3081";
const NVIM_VERSION = "0.5.0";

const manualOptionSet = new Set([
  ...Object.keys(commonManual),
  ...Object.keys(vimManual),
  ...Object.keys(nvimManual),
]);

const vimHelp = await downloadString(
  `https://raw.githubusercontent.com/vim/vim/v${VIM_VERSION}/runtime/doc/options.txt`,
);
const vimDefs = parse(vimHelp);
const vimOptionSet = difference(
  new Set(vimDefs.map((def) => def.name)),
  manualOptionSet,
);

const nvimHelp = await downloadString(
  `https://raw.githubusercontent.com/neovim/neovim/v${NVIM_VERSION}/runtime/doc/options.txt`,
);
const nvimDefs = parse(nvimHelp);
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
