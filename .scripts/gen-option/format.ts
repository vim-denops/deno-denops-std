import type { Option, OptionScope, OptionType } from "./types.ts";

const denops = "https://deno.land/x/denops_core@v6.0.2/mod.ts";

const translate: Record<string, string> = {
  "default": "defaultValue",
  "delete": "delete_",
  "eval": "eval_",
  "function": "function_",
};

function defaultValue(type: OptionType): string {
  switch (type) {
    case "string":
      return `""`;
    case "number":
      return `0`;
    case "boolean":
      return `false`;
    default: {
      const unknownType: never = type;
      throw new Error(`Unknown type ${unknownType}`);
    }
  }
}

function coerceValue(expr: string, type: OptionType): string {
  switch (type) {
    case "string":
      return `(${expr}) as string`;
    case "number":
      return `(${expr}) as number`;
    case "boolean":
      // Vim returns (0 | 1) so coerce to boolean.
      return `Boolean(${expr})`;
    default: {
      const unknownType: never = type;
      throw new Error(`Unknown type ${unknownType}`);
    }
  }
}

export function formatDocs(docs: string): string[] {
  const lines = docs.replaceAll(/\*\//g, "* /").split("\n");
  const normalizedLines = lines.map((v) => ` * ${v}`.trimEnd());
  return ["/**", ...normalizedLines, " */"];
}

function formatOption(option: Option): string[] {
  const { type, scope, docs } = option;
  const name = translate[option.name] ?? option.name;
  const lines = [
    ...formatDocs(docs),
    `export const ${name}: ${getOptionTypeName(scope, type)} = {`,
    ...formatOptionBody(name, type),
    ...(scope.includes("global") ? formatGlobalOptionBody(name, type) : []),
    ...(scope.includes("local") ? formatLocalOptionBody(name, type) : []),
    ...(scope.includes("local") ? formatBufferOptionBody(name, type) : []),
    ...(scope.includes("local") ? formatWindowOptionBody(name, type) : []),
    `};`,
    "",
  ];
  return lines;
}

function getOptionTypeName(scope: OptionScope[], type: OptionType): string {
  if (scope.includes("global") && scope.includes("local")) {
    return `GlobalOrLocalOption<${type}>`;
  } else if (scope.includes("global")) {
    return `GlobalOption<${type}>`;
  } else {
    return `LocalOption<${type}>`;
  }
}

function formatOptionBody(name: string, type: OptionType): string[] {
  const lines = [
    `  async get(denops: Denops): Promise<${type}> {`,
    `    const result = await options.get(denops, "${name}");`,
    `    return ${coerceValue(`result ?? ${defaultValue(type)}`, type)};`,
    `  },`,
    `  set(denops: Denops, value: ${type}): Promise<void> {`,
    `    return options.set(denops, "${name}", value);`,
    `  },`,
    `  reset(denops: Denops): Promise<void> {`,
    `    return options.remove(denops, "${name}");`,
    `  },`,
  ];
  return lines;
}

function formatGlobalOptionBody(name: string, type: OptionType): string[] {
  const lines = [
    `  async getGlobal(denops: Denops): Promise<${type}> {`,
    `    const result = await globalOptions.get(denops, "${name}");`,
    `    return ${coerceValue(`result ?? ${defaultValue(type)}`, type)};`,
    `  },`,
    `  setGlobal(denops: Denops, value: ${type}): Promise<void> {`,
    `    return globalOptions.set(denops, "${name}", value);`,
    `  },`,
    `  resetGlobal(denops: Denops): Promise<void> {`,
    `    return globalOptions.remove(denops, "${name}");`,
    `  },`,
  ];
  return lines;
}

function formatLocalOptionBody(name: string, type: OptionType): string[] {
  const lines = [
    `  async getLocal(denops: Denops): Promise<${type}> {`,
    `    const result = await localOptions.get(denops, "${name}");`,
    `    return ${coerceValue(`result ?? ${defaultValue(type)}`, type)};`,
    `  },`,
    `  setLocal(denops: Denops, value: ${type}): Promise<void> {`,
    `    return localOptions.set(denops, "${name}", value);`,
    `  },`,
    `  resetLocal(denops: Denops): Promise<void> {`,
    `    return localOptions.remove(denops, "${name}");`,
    `  },`,
  ];
  return lines;
}

function formatBufferOptionBody(name: string, type: OptionType): string[] {
  const lines = [
    `  async getBuffer(denops: Denops, bufnr: number): Promise<${type}> {`,
    `    const result = await getbufvar(denops, bufnr, "&${name}");`,
    `    return ${coerceValue(`result ?? ${defaultValue(type)}`, type)};`,
    `  },`,
    `  setBuffer(denops: Denops, bufnr: number, value: ${type}): Promise<void> {`,
    `    return setbufvar(denops, bufnr, "&${name}", value);`,
    `  },`,
  ];
  return lines;
}

function formatWindowOptionBody(name: string, type: OptionType): string[] {
  const lines = [
    `  async getWindow(denops: Denops, winnr: number): Promise<${type}> {`,
    `    const result = await getwinvar(denops, winnr, "&${name}");`,
    `    return ${coerceValue(`result ?? ${defaultValue(type)}`, type)};`,
    `  },`,
    `  setWindow(denops: Denops, winnr: number, value: ${type}): Promise<void> {`,
    `    return setwinvar(denops, winnr, "&${name}", value);`,
    `  },`,
  ];
  return lines;
}

export function format(options: Option[], root: string): string[] {
  const fn = `${root}/../function/mod.ts`;
  const variable = `${root}/../variable/mod.ts`;
  const types = `${root}/types.ts`;
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    `import type { Denops } from "${denops}";`,
    `import { getbufvar, setbufvar, getwinvar, setwinvar } from "${fn}";`,
    `import { globalOptions, localOptions, options } from "${variable}";`,
    `import type { GlobalOption, GlobalOrLocalOption, LocalOption } from "${types}";`,
    "",
    ...options.map(formatOption),
  ];
  return lines.flat();
}
