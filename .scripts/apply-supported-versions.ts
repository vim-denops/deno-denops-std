import {
  loadSupportedVersions,
  type SupportedVersions,
} from "./supported_versions.ts";

async function main(): Promise<void> {
  const supportedVersions = await loadSupportedVersions("main");
  await updateREADME(supportedVersions);
  await updateGithubWorkflowsTest(supportedVersions);
}

async function updateREADME(
  supportedVersions: SupportedVersions,
): Promise<void> {
  const url = new URL(import.meta.resolve("../README.md"));
  let text = await Deno.readTextFile(url);
  // Deno
  text = text.replace(
    /Deno\s+\d+\.\d+\.\d+/,
    `Deno ${supportedVersions.deno}`,
  );
  text = text.replace(
    /Deno-Support%20\d+\.\d+\.\d+/,
    `Deno-Support%20${supportedVersions.deno}`,
  );
  text = text.replace(
    /https:\/\/github\.com\/denoland\/deno\/tree\/v\d+\.\d+\.\d+/,
    `https://github.com/denoland/deno/tree/v${supportedVersions.deno}`,
  );
  // Vim
  text = text.replace(
    /Vim\s+\d+\.\d+\.\d+/,
    `Vim ${supportedVersions.vim}`,
  );
  text = text.replace(
    /Vim-Support%20\d+\.\d+\.\d+/,
    `Vim-Support%20${supportedVersions.vim}`,
  );
  text = text.replace(
    /https:\/\/github\.com\/vim\/vim\/tree\/v\d+\.\d+\.\d+/,
    `https://github.com/vim/vim/tree/v${supportedVersions.vim}`,
  );
  // Neovim
  text = text.replace(
    /Neovim\s+\d+\.\d+\.\d+/,
    `Neovim ${supportedVersions.neovim}`,
  );
  text = text.replace(
    /Neovim-Support%20\d+\.\d+\.\d+/,
    `Neovim-Support%20${supportedVersions.neovim}`,
  );
  text = text.replace(
    /https:\/\/github\.com\/neovim\/neovim\/tree\/v\d+\.\d+\.\d+/,
    `https://github.com/neovim/neovim/tree/v${supportedVersions.neovim}`,
  );
  await Deno.writeTextFile(url, text);
}

async function updateGithubWorkflowsTest(
  supportedVersions: SupportedVersions,
): Promise<void> {
  const url = new URL(import.meta.resolve("../.github/workflows/test.yml"));
  let text = await Deno.readTextFile(url);
  // Deno
  text = text.replace(
    /deno_version:(.*?)"\d+\.\d+\.\d+"/s,
    `deno_version:$1"${supportedVersions.deno}"`,
  );
  // Vim
  text = text.replace(
    /vim:(.*?)"v\d+\.\d+\.\d+"/s,
    `vim:$1"v${supportedVersions.vim}"`,
  );
  // Neovim
  text = text.replace(
    /nvim:(.*?)"v\d+\.\d+\.\d+"/s,
    `nvim:$1"v${supportedVersions.neovim}"`,
  );
  await Deno.writeTextFile(url, text);
}

if (import.meta.main) {
  try {
    await main();
  } catch (error) {
    console.error(error);
    Deno.exit(1);
  }
}
