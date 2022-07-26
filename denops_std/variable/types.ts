import type { Denops } from "https://deno.land/x/denops_core@v3.1.0/mod.ts";

export interface Getter {
  get<T = unknown>(
    denops: Denops,
    prop: string,
    defaultValue: T,
  ): Promise<T>;
  get<T = unknown>(
    denops: Denops,
    prop: string,
  ): Promise<T | null>;
}

export interface Setter {
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void>;
}

export interface Remover {
  remove(denops: Denops, prop: string): Promise<void>;
}
