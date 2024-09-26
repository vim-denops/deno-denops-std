import type { Predicate } from "@core/unknownutil/type";
import { isLiteralOneOf } from "@core/unknownutil/is";

export type Option = {
  name: string;
  type: OptionType;
  scope: OptionScope[];
  localScope?: OptionLocalScope;
  docs: string;
};

export const OPTION_TYPES = ["string", "number", "boolean"] as const;

export type OptionType = typeof OPTION_TYPES[number];

export const isOptionType = isLiteralOneOf(
  OPTION_TYPES,
) satisfies Predicate<OptionType>;

export const OPTION_SCOPES = ["global", "local"] as const;

export type OptionScope = typeof OPTION_SCOPES[number];

export const isOptionScope = isLiteralOneOf(
  OPTION_SCOPES,
) satisfies Predicate<OptionScope>;

export const OPTION_LOCAL_SCOPES = ["buffer", "tab", "window"] as const;

export type OptionLocalScope = typeof OPTION_LOCAL_SCOPES[number];

export const isOptionLocalScope = isLiteralOneOf(
  OPTION_LOCAL_SCOPES,
) satisfies Predicate<OptionLocalScope>;

export type DocsType = "vim" | "nvim";

export const OPTION_EXPORT_TYPES = [
  "BufferLocalOption",
  "TabPageLocalOption",
  "WindowLocalOption",
  "GlobalOption",
  "GlobalOrBufferLocalOption",
  "GlobalOrTabPageLocalOption",
  "GlobalOrWindowLocalOption",
] as const;

export type OptionExportType = typeof OPTION_EXPORT_TYPES[number];

export const OPTION_CONSTRUCTORS = [
  "BooleanOption",
  "NumberOption",
  "StringOption",
] as const;

export type OptionConstructor = typeof OPTION_CONSTRUCTORS[number];
