import { Definition, Variant } from "./types.ts";

const denops = "https://deno.land/x/denops_core@v5.0.0/mod.ts";

const translate: Record<string, string> = {
  "*cmd": "cmd",
  "*config": "config",
  "*opts": "opts",
  "*val": "val",
  "default": "defaultValue",
  "delete": "delete_",
  "end-col": "end_col",
  "end-lnum": "end_lnum",
  "eval": "eval_",
  "fname-one": "fname_one",
  "fname-two": "fname_two",
  "function": "function_",
  "lnum-end": "lnum_end",
  "instanceof": "instanceof_",
  "class": "class_",
};

export function formatDocs(docs: string): string[] {
  const lines = docs.replaceAll(/\*\//g, "* /").split("\n");
  const normalizedLines = lines.map((v) => ` * ${v}`.trimEnd());
  return ["/**", ...normalizedLines, " */"];
}

function formatVariants(fn: string, vars: Variant[]): string[] {
  if (vars.length === 0) {
    return formatVariants(fn, [{ args: [], restype: "unknown" }]);
  }
  const lines = vars.map(({ args, restype }) => {
    const argTypes = args.map(({ name, optional }) => {
      name = translate[name] ?? name;
      return `${name}${optional ? "?" : ""}: unknown`;
    });
    return `export function ${fn}(denops: Denops, ${
      argTypes.join(", ")
    }): Promise<${restype}>;`;
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

export function format(definitions: Definition[]): string[] {
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    "// deno-lint-ignore-file camelcase",
    `import type { Denops } from "${denops}";`,
    "",
    ...definitions.map(formatDefinition),
  ];
  return lines.flat();
}
