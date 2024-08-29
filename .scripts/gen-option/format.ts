import type { Option, OptionConstructor, OptionExportType } from "./types.ts";

type Context = {
  types: Set<OptionExportType>;
  constructors: Set<OptionConstructor>;
};

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

function formatOption(option: Option, context: Context): string[] {
  const { docs, type } = option;
  const name = translate[option.name] ?? option.name;
  const exportType = getOptionExportType(option);
  context.types.add(exportType);
  const constructor = getOptionConstructor({ ...option, name });
  context.constructors.add(constructor);
  const lines = [
    ...formatDocs(docs),
    `export const ${name}: ${exportType}<${type}> = new ${constructor}("${name}");`,
    "",
  ];
  return lines;
}

function getOptionExportType({ scope, localScope }: Option): OptionExportType {
  if (scope.includes("local")) {
    if (scope.includes("global")) {
      switch (localScope) {
        case "tab":
          return "GlobalOrTabPageLocalOption";
        case "window":
          return "GlobalOrWindowLocalOption";
        case "buffer":
        default:
          return "GlobalOrBufferLocalOption";
      }
    } else {
      switch (localScope) {
        case "tab":
          return "TabPageLocalOption";
        case "window":
          return "WindowLocalOption";
        case "buffer":
        default:
          return "BufferLocalOption";
      }
    }
  } else {
    return "GlobalOption";
  }
}

function getOptionConstructor({ type }: Option): OptionConstructor {
  switch (type) {
    case "string":
      return "StringOption";
    case "number":
      return "NumberOption";
    case "boolean":
      return "BooleanOption";
    default: {
      const unknownType: never = type;
      throw new Error(`Unknown type ${unknownType}`);
    }
  }
}

export function format(options: Option[], root: string): string[] {
  const context: Context = {
    types: new Set(),
    constructors: new Set(),
  };
  const body = options.flatMap((option) => formatOption(option, context));
  const types = [...context.types];
  const constructors = [...context.constructors];
  const lines = [
    "// NOTE: This file is generated. Do NOT modify it manually.",
    `import type { ${types.join(",")} } from "${root}/types.ts";`,
    `import { ${constructors.join(",")} } from "${root}/_utils.ts";`,
    "",
    ...body,
  ];
  return lines;
}
