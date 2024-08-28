import type { Option, OptionScope, OptionType } from "./types.ts";

const translate: Record<string, string> = {
  "default": "defaultValue",
  "delete": "delete_",
  "eval": "eval_",
  "function": "function_",
};

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
    `export const ${name}: ${getOptionTypeName(scope, type)} = ${
      getOptionConstructor(name, type)
    };`,
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

function getOptionConstructor(name: string, type: OptionType): string {
  switch (type) {
    case "string":
      return `new StringOption("${name}")`;
    case "number":
      return `new NumberOption("${name}")`;
    case "boolean":
      return `new BooleanOption("${name}")`;
    default: {
      const unknownType: never = type;
      throw new Error(`Unknown type ${unknownType}`);
    }
  }
}

export function format(options: Option[], root: string): string[] {
  const types = `${root}/types.ts`;
  const utils = `${root}/_utils.ts`;
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    `import type { GlobalOption, GlobalOrLocalOption, LocalOption } from "${types}";`,
    `import { BooleanOption, NumberOption, StringOption } from "${utils}";`,
    "",
    ...options.map(formatOption),
  ];
  return lines.flat();
}
