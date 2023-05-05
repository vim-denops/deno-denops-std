export type Arg = {
  name: string;
  spread: boolean;
  optional: boolean;
};

export type Variant = {
  args: Arg[];
  restype: string;
};

export type Definition = {
  fn: string;
  docs: string;
  vars: Variant[];
};

export type DocsType = "vim" | "nvim";
