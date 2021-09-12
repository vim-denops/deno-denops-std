// Vim on Windows does not support following characters in bufname
export const bufnameUnusablePattern = /["<>\|\?\*]/g;

// % encoded character
const encodedCharacterPattern = /(?:%[0-9a-fA-F]{2})+/g;

/**
 * Encode unusable characters to percent-encoded characters.
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
 */
export function decode(expr: string, excludes?: string[]): string {
  excludes = (excludes ?? []).map((v) => v.toUpperCase());
  expr = expr.replaceAll(
    encodedCharacterPattern,
    (m) => {
      if (excludes?.includes(m.toUpperCase())) {
        return m;
      }
      return decodeURIComponent(m);
    },
  );
  return expr;
}
