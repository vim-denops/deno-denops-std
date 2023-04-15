import * as streams from "https://deno.land/std@0.183.0/streams/mod.ts";

/**
 * Downloads a text file and returns the contents.
 * Throws error if fetch fails.
 */
export async function downloadString(url: string): Promise<string> {
  const textDecoder = new TextDecoder();
  const response = await fetch(url);
  if (!response.body) {
    throw new Error(`Failed to read ${url}`);
  }
  const reader = streams.readerFromStreamReader(response.body.getReader());
  return textDecoder.decode(await streams.readAll(reader));
}

/**
 * Find the position of the first pattern match.
 * Search from the specified position, or from the beginning if not specified.
 * Returns -1 if the pattern not match.
 */
export function regexIndexOf(s: string, pattern: RegExp, offset = 0): number {
  const index = s.slice(offset).search(pattern);
  if (index < 0 || offset <= -s.length) {
    return index;
  } else {
    return index + offset + (offset < 0 ? s.length : 0);
  }
}

/** Count the number of occurrences of a name. */
export class Counter {
  #map: Map<string, number>;

  constructor() {
    this.#map = new Map();
  }

  /** Increments the count number of the name and returns it. */
  count(name: string): number {
    const value = this.get(name) + 1;
    this.#map.set(name, value);
    return value;
  }

  /** Returns the count number of the name. */
  get(name: string): number {
    return this.#map.get(name) ?? 0;
  }
}
