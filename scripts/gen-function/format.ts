import { Definition, Variant } from "./types.ts";

const translate: Record<string, string> = {
  "default": "defaultValue",
  "delete": "delete_",
  "eval": "eval_",
  "function": "function_",
};

function formatDocs(docs: string): string[] {
  const lines = docs.replaceAll(/\*\//g, "* /").split("\n").map((v) =>
    ` * ${v}`
  );
  return ["/**", ...lines, " */"];
}

function formatVariants(fn: string, vars: Variant[]): string[] {
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
  const denops = `${root}/vendor/https/deno.land/x/denops_core/mod.ts`;
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    "// deno-lint-ignore-file camelcase",
    `import { Denops } from "${denops}";`,
    "",
    ...definitions.map(formatDefinition),
  ];
  return lines.flat();
}
