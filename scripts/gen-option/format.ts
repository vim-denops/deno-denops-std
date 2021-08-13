import { Option } from "./types.ts";

const translate: Record<string, string> = {
  "default": "defaultValue",
  "delete": "delete_",
  "eval": "eval_",
  "function": "function_",
};

function defaultValue(type: string): string {
  switch (type) {
    case "string":
      return `""`;
    case "number":
      return `0`;
    case "boolean":
      return `false`;
    default:
      throw new Error(`Unknown type ${type}`);
  }
}

function formatDocs(docs: string): string[] {
  const lines = docs.replaceAll(/\*\//g, "* /").split("\n").map((v) =>
    ` * ${v}`
  );
  return ["/**", ...lines, " */"];
}

function formatOption({ name, type, scope, docs }: Option): string[] {
  name = translate[name] ?? name;
  const lines = [
    ...formatDocs(docs),
    `export const ${name} = {`,
    ...formatOptionBody(name, type),
    ...(scope.includes("global") ? formatGlobalOptionBody(name, type) : []),
    ...(scope.includes("local") ? formatLocalOptionBody(name, type) : []),
    `};`,
    "",
  ];
  return lines;
}

function formatOptionBody(name: string, type: string): string[] {
  const lines = [
    `  async get(denops: Denops): Promise<${type}> {`,
    `    return await options.get(denops, "${name}") ?? ${defaultValue(type)};`,
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

function formatGlobalOptionBody(name: string, type: string): string[] {
  const lines = [
    `  async getGlobal(denops: Denops): Promise<${type}> {`,
    `    return await globalOptions.get(denops, "${name}") ?? ${
      defaultValue(type)
    };`,
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

function formatLocalOptionBody(name: string, type: string): string[] {
  const lines = [
    `  async getLocal(denops: Denops): Promise<${type}> {`,
    `    return await localOptions.get(denops, "${name}") ?? ${
      defaultValue(type)
    };`,
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

export function format(options: Option[], root: string): string[] {
  const denops = `${root}/../deps.ts`;
  const variable = `${root}/../variable/mod.ts`;
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    `import { Denops } from "${denops}";`,
    `import { globalOptions, localOptions, options } from "${variable}";`,
    "",
    ...options.map(formatOption),
  ];
  return lines.flat();
}
