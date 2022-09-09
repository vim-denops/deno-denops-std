// Vim on Windows does not support following characters in bufname
export const bufnameUnusablePattern = /["<>\|\?\*]/g;

/**
 * Encode only unusable characters to percent-encoded characters.
 *
 * This function does not encode the percent character itself to avoid
 * multiple encoding.
 * Users must encode the percent character themselves before using this
 * function like:
 *
 * ```
 * const expr = "%Hello world%";
 * const encoded = encode(expr.replaceAll("%", "%25"));
 * ```
 *
 * Note that this function is not the inverse of `decode`.
 * The `decode` function decodes all percent-encoded characters, while this function
 * encodes a few characters.
 */
export function encode(expr: string): string {
  expr = expr.replaceAll(
    bufnameUnusablePattern,
    (c) => `%${c.codePointAt(0)!.toString(16).toUpperCase()}`,
  );
  return expr;
}

/**
 * Decode all percent-encoded characters.
 *
 * Note that this function is not the inverse of `encode`.
 * The `encode` function only encodes a few characters, while this function
 * decodes all percent-encoded characters.
 */
export function decode(expr: string, excludes: string[] = []): string {
  excludes = excludes.map((v) => v.toUpperCase());
  const prefix = excludes.length ? `(?!${excludes.join("|")})` : "";
  const pattern = new RegExp(
    `(?:${prefix}%[0-9a-fA-F]{2})+`,
    "g",
  );
  return expr.replaceAll(pattern, decodeURIComponent);
}
