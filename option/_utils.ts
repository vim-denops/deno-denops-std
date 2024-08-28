import type { Denops } from "@denops/core";
import { getbufvar, getwinvar, setbufvar, setwinvar } from "../function/mod.ts";
import { globalOptions, localOptions, options } from "../variable/option.ts";
import type { GlobalOrLocalOption } from "./types.ts";

type Coerce<T> = (value: unknown) => T;

class OptionImpl<T> implements GlobalOrLocalOption<T> {
  readonly #name: string;
  readonly #defaultValue: T;
  readonly #coerce: Coerce<T>;

  constructor(name: string, defaultValue: T, coerce: Coerce<T>) {
    this.#name = name;
    this.#defaultValue = defaultValue;
    this.#coerce = coerce;
  }

  async get(denops: Denops): Promise<T> {
    const result = await options.get(denops, this.#name);
    return this.#coerce(result ?? this.#defaultValue);
  }

  set(denops: Denops, value: T): Promise<void> {
    return options.set(denops, this.#name, value);
  }

  reset(denops: Denops): Promise<void> {
    return options.remove(denops, this.#name);
  }

  async getGlobal(denops: Denops): Promise<T> {
    const result = await globalOptions.get(denops, this.#name);
    return this.#coerce(result ?? this.#defaultValue);
  }

  setGlobal(denops: Denops, value: T): Promise<void> {
    return globalOptions.set(denops, this.#name, value);
  }

  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, this.#name);
  }

  async getLocal(denops: Denops): Promise<T> {
    const result = await localOptions.get(denops, this.#name);
    return this.#coerce(result ?? this.#defaultValue);
  }

  setLocal(denops: Denops, value: T): Promise<void> {
    return localOptions.set(denops, this.#name, value);
  }

  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, this.#name);
  }

  async getBuffer(denops: Denops, bufnr: number): Promise<T> {
    const result = await getbufvar(denops, bufnr, `&${this.#name}`);
    return this.#coerce(result ?? this.#defaultValue);
  }

  setBuffer(denops: Denops, bufnr: number, value: T): Promise<void> {
    return setbufvar(denops, bufnr, `&${this.#name}`, value);
  }

  async getWindow(denops: Denops, winnr: number): Promise<T> {
    const result = await getwinvar(denops, winnr, `&${this.#name}`);
    return this.#coerce(result ?? this.#defaultValue);
  }

  setWindow(denops: Denops, winnr: number, value: T): Promise<void> {
    return setwinvar(denops, winnr, `&${this.#name}`, value);
  }
}

export class BooleanOption extends OptionImpl<boolean> {
  constructor(name: string) {
    super(name, false, Boolean);
  }
}

export class NumberOption extends OptionImpl<number> {
  constructor(name: string) {
    super(name, 0, Number);
  }
}

export class StringOption extends OptionImpl<string> {
  constructor(name: string) {
    super(name, "", String);
  }
}
