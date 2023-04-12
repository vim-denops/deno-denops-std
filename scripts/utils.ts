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

/**
 * Converts TABs to spaces, preserving column position.
 * Throws if `line` contains newline.
 * Throws if `tabstop` less or equals 0.
 */
export function replaceTabToSpaces(line: string, tabstop = 8): string {
  if (line.includes("\n")) {
    throw new TypeError("'line' contains newline");
  }
  if (tabstop <= 0) {
    throw new TypeError("'tabstop' less or equals 0");
  }
  let col = 0;
  return Array.from(line).map((v): string => {
    if (v === "\t") {
      const spaces = tabstop - (col % tabstop);
      col += spaces;
      return Array(spaces + 1).join(" ");
    } else {
      ++col; // Wide characters are not considered
      return v;
    }
  }).join("");
}

/**
 * Trims the shortest leading spaces.
 * Blank lines are not used in length calculations.
 * __TABs are not trimed.__
 * __Only zero-length lines are blank line.__
 */
export function removeIndentSpaces(lines: string[]): string[] {
  const leading = Math.min(
    ...lines.map((v) => v.length === 0 ? Infinity : v.match(/^ */)![0].length),
  );
  return lines.map((v) => v.substring(leading));
}

/** Trim leading and trailing blank lines. */
export function trimLines(s: string): string {
  return s.replace(/^\s*\n/, "").trimEnd();
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
