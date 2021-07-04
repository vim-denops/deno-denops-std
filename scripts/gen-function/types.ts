export type Arg = {
  name: string;
  spread: boolean;
  optional: boolean;
};

export type Variant = Arg[];

export type Definition = {
  fn: string;
  docs: string;
  vars: Variant[];
};
