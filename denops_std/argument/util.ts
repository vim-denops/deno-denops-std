export function parsePattern(
  arg: string,
  pattern: RegExp,
): [string, string] | undefined {
  const m = arg.match(pattern);
  if (!m) {
    return undefined;
  }
  return [m[1], m[2] ?? ""];
}
