import { ensure, is, type Predicate } from "@core/unknownutil";

export type SupportedVersions = {
  deno: string;
  vim: string;
  neovim: string;
};

const isSupportedVersions = is.ObjectOf({
  deno: is.String,
  vim: is.String,
  neovim: is.String,
}) satisfies Predicate<SupportedVersions>;

function getSupportedVersionJsonUrl(branch: string): URL {
  return new URL(
    `https://raw.githubusercontent.com/vim-denops/denops.vim/${branch}/denops/supported_versions.json`,
  );
}

export async function loadSupportedVersions(
  branch?: string,
): Promise<SupportedVersions> {
  const url = getSupportedVersionJsonUrl(
    branch ?? Deno.env.get("DENOPS_BRANCH") ?? "main",
  );
  const resp = await fetch(url);
  const json = await resp.json();
  return ensure(json, isSupportedVersions);
}
