import { Denops } from "../deps.ts";

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
