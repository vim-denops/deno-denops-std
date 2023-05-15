import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";

export type Getter = {
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue: T,
  ): Promise<T>;
  get<T = unknown>(
    denops: Denops,
    prop: string,
  ): Promise<T | null>;
};

export type Setter = {
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void>;
};

export type Remover = {
  remove(denops: Denops, prop: string): Promise<void>;
};
