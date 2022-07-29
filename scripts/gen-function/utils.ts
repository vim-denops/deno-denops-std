import * as io from "https://deno.land/std@0.150.0/io/mod.ts";

export async function downloadString(url: string): Promise<string> {
  const textDecoder = new TextDecoder();
  const response = await fetch(url);
  if (!response.body) {
    throw new Error(`Failed to read ${url}`);
  }
  const reader = io.readerFromStreamReader(response.body.getReader());
  return textDecoder.decode(await io.readAll(reader));
}

export function regexIndexOf(s: string, pattern: RegExp, offset = 0): number {
  const index = s.slice(offset).search(pattern);
  return index < 0 ? index : index + offset;
}

export class Counter {
  #map: Map<string, number>;

  constructor() {
    this.#map = new Map();
  }

  count(name: string): number {
    const value = this.get(name) + 1;
    this.#map.set(name, value);
    return value;
  }

  get(name: string): number {
    return this.#map.get(name) ?? 0;
  }
}
