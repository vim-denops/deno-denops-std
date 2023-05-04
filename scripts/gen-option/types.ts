export type Option = {
  name: string;
  type: OptionType;
  scope: OptionScope[];
  docs: string;
};

export const OPTION_TYPES = ["string", "number", "boolean"] as const;

export type OptionType = typeof OPTION_TYPES[number];

export function isOptionType(x: unknown): x is OptionType {
  return OPTION_TYPES.includes(x as OptionType);
}

export const OPTION_SCOPES = ["global", "local"] as const;

export type OptionScope = typeof OPTION_SCOPES[number];

export function isOptionScope(x: unknown): x is OptionScope {
  return OPTION_SCOPES.includes(x as OptionScope);
}

export type DocsType = "vim" | "nvim";
