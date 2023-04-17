import { removeIndentSpaces, replaceTabToSpaces, trimLines } from "./utils.ts";

/** Create markdown from Vim help. */
export function createMarkdownFromHelp(body: string): string {
  // Replace TABs to spaces
  body = trimLines(body).split("\n").map(
    (v) => replaceTabToSpaces(v.trimEnd()),
  ).join("\n");
  const firstlineIndent = body.match(/^ */)![0];

  // Reindent and add blank lines around to code block >...<
  const codeBlockIndent = "    ";
  let lastIndent = firstlineIndent;
  body = body.replaceAll(
    /(?<normal>.*?)[\n ]>\n(?<code>.*?)(?:\n(?=<)|$)|(?<rest>.*)/gs,
    (_, normal: string, code: string, rest: string) => {
      if (rest !== undefined) {
        return formatNormalBlock(rest);
      }

      // Gets the previous line indent, or keeps the last value if there is
      // only one line between code blocks
      const prevLine = normal.trimEnd().split("\n").at(-1)!;
      lastIndent = prevLine.match(/^ +/)?.[0] ?? lastIndent;

      const normalFormatted = formatNormalBlock(normal);
      const codeFormatted = removeIndentSpaces(code.split("\n"))
        .map((v) => `${lastIndent}${codeBlockIndent}${v}`.trimEnd())
        .join("\n");
      return `${normalFormatted}\n\n${codeFormatted}\n\n`;
    },
  );

  // Trim trailing spaces
  body = body.replaceAll(/ +$/gm, "");

  // Merge multiple blank lines to one
  body = trimLines(body.replaceAll(/\n{3,}/g, "\n\n"));

  // Remove entire indentation with the first line indentation
  body = body.replaceAll(new RegExp(`^${firstlineIndent}`, "gm"), "");

  return body;
}

function formatNormalBlock(body: string): string {
  // Replace previous help code block delimiter
  body = body.replace(/^</, " ");

  // Remove tags *...* without inline sentence
  body = body.replaceAll(/(?:[ \t]+\*[^*\s]+\*)+[ \t]*$/gm, "");

  // Remove header mark '... ~'
  body = body.replaceAll(/ ~$/gm, "");

  // Replace nvim list marker at beginning of line
  body = body.replaceAll(/(?<=^ *)\u2022 /gm, "- ");

  // Replace not-Vi attention {not...} to emphasis *not...*
  body = body.replaceAll(
    /\{((?:Vi[:\s]|not|only)[^{}]*)\}/g,
    (_, v: string) => v.includes("*") ? `_${v}_` : `*${v}*`,
  );

  // Replace quoted-string that contains `~< to code block ``"..`.."``
  body = body.replaceAll(
    /(?<=^|[\s(=])"(?:[^"\\]|\\.)*?"(?=[\s),.;:]|$)/g,
    (v) => v.match(/[`~]|<([^"']|$)/) ? createInlineCodeBlock(v) : v,
  );
  body = body.replaceAll(/"<"|'<'/g, "`$&`");

  // Replace special cases to code block `` a` ``
  body = body
    .replaceAll(
      /(?<= )(a`|[`']\{A-Z0-9\})(?=[ ,])/g,
      (_, v) => createInlineCodeBlock(v),
    );

  // Replace link |...| to code block `...`
  // NOTE: If link contains backticks it cannot be replaced. So add the special case above.
  body = replaceWithoutCodeBlock(body, (s) =>
    s.replaceAll(
      /(?<=^|[\s(=])\|+([!#-)+-_a-{}-~]+?)\|+/g, // ignored 0x20 and "*`|
      (_, v: string) => createInlineCodeBlock(v),
    ));

  // Replace # at beginning of line to code block `#`
  body = replaceWithoutCodeBlock(body, (s) =>
    s.replaceAll(
      /(?<=^\s*)#\S*/gm,
      (v) => createInlineCodeBlock(v),
    ));

  // Replace keycode <...> to code block `<...>`
  // Replace with plural <...>s to `<...>`s
  body = replaceWithoutCodeBlock(body, (s) =>
    s.replaceAll(
      /(?<=^|[\s(=])((?:<[^\s<>]*>)+)(s?)(?=[\s),.;:]|$)/g,
      (_, v: string, s: string) => createInlineCodeBlock(v) + (s ?? ""),
    ));

  // Replace string that contains ~ to code block `..~..`
  body = replaceWithoutCodeBlock(body, (s) =>
    s.replaceAll(
      /(?<=^|[\s(=])(?![(=])\S*?~\S*(?<=[^),.;:])(?=[\s),.;:]|$)/g,
      (v) => createInlineCodeBlock(v),
    ));

  // Replace args {...} to strong emphasis **{...}**
  body = replaceWithoutCodeBlock(body, (s) =>
    s.replaceAll(
      /\{[-a-zA-Z0-9'"*+/:%#=\[\]<>.,]+?\}/g,
      "**$&**",
    ));

  return body;
}

function replaceWithoutCodeBlock(
  body: string,
  replacer: (s: string) => string,
): string {
  return body.replaceAll(
    /(?<normal>.*?)(?<code>``.*?``|`.*?`)|(?<rest>.*)/gs,
    (_, normal: string, code: string, rest: string) =>
      rest !== undefined ? replacer(rest) : `${replacer(normal)}${code}`,
  );
}

function createInlineCodeBlock(v: string): string {
  // With double quoted ``...``
  if (v.includes("`")) {
    const prefix = v.startsWith("`") ? " " : "";
    const suffix = v.endsWith("`") ? " " : "";
    return `\`\`${prefix}${v}${suffix}\`\``;
  }
  // With single quoted `...`
  return `\`${v}\``;
}
