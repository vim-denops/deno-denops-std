import { Definition, Variant } from "./types.ts";

const translate: Record<string, string> = {
  "default": "defaultValue",
  "delete": "delete_",
  "eval": "eval_",
  "function": "function_",
  "lnum-end": "lnum_end",
  "fname-one": "fname_one",
  "fname-two": "fname_two",
};

function formatDocs(docs: string): string[] {
  const lines = docs.replaceAll(/\*\//g, "* /").split("\n");
  const leading =
    lines.map((v) => v.match(/^\s*/)![0]).reduce((a, v) =>
      a.length < v.length ? a : v
    ).length;
  const normalizedLines = lines.map((v) => ` * ${v.substring(leading)}`);
  return ["/**", ...normalizedLines, " */"];
}

function formatVariants(fn: string, vars: Variant[]): string[] {
  if (vars.length === 0) {
    return formatVariants(fn, [[]]);
  }
  const lines = vars.map((variant) => {
    const args = variant.map(({ name, optional }) => {
      name = translate[name] ?? name;
      return `${name}${optional ? "?" : ""}: unknown`;
    });
    return `export function ${fn}(denops: Denops, ${
      args.join(", ")
    }): Promise<unknown>;`;
  });
  return lines;
}

function formatDefinition({ fn, docs, vars }: Definition): string[] {
  fn = translate[fn] ?? fn;
  const lines = [
    ...formatDocs(docs),
    ...formatVariants(fn, vars),
    `export function ${fn}(denops: Denops, ...args: unknown[]): Promise<unknown> {`,
    `  return denops.call('${fn}', ...args);`,
    "}",
    "",
  ];
  return lines;
}

export function format(definitions: Definition[], root: string): string[] {
  const denops = `${root}/deps.ts`;
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    "// deno-lint-ignore-file camelcase",
    `import { Denops } from "${denops}";`,
    "",
    ...definitions.map(formatDefinition),
  ];
  return lines.flat();
}
