import { bufnameUnusablePattern, decode, encode } from "./utils.ts";

export type BufnameParams = Record<string, string | string[] | undefined>;

export type Bufname = {
  // Scheme part of a buffer name. Note that Vim supports only alphabets in scheme part.
  scheme: string;
  // Expression part of a buffer name. Note that '<>|?*' are not supported in Vim on Windows.
  expr: string;
  // Params part of a buffer name. While '?' is not supported, the params part are splitted by ';' instead.
  params?: BufnameParams;
  // Fragment part of a buffer name. This is mainly used to regulate the suffix of the buffer name.
  fragment?: string;
};

// Vim only supports alphabet characters in the scheme part of a buffer name.
// That behavior has slightly improved from Vim 8.2.3153 but we suppor Vim 8.2.0662
// thus we need to stack old behavior
// https://github.com/vim/vim/pull/8299
const schemeUnusablePattern = /[^a-zA-Z]/;

// Vim assumes a bufname is URL when it starts with "name://"
// https://github.com/vim/vim/blob/36698e34aacee4186e6f5f87f431626752fcb337/src/misc1.c#L2567-L2580
const schemePattern = /^(\S+):\/\//;

// The expr part might contains query and/or fragment
const exprPattern = /^(.*?)(?:;(.*?))?(?:#(.*))?$/;

/**
 * Format Bufname instance to construct Vim's buffer name.
 */
export function format(
  { scheme, expr, params, fragment }: Bufname,
): string {
  if (schemeUnusablePattern.test(scheme)) {
    throw new Error(
      `Scheme '${scheme}' contains unusable characters. Only alphabets are allowed.`,
    );
  }
  const encodedPath = encode(expr).replaceAll(";", "%3B").replaceAll(
    "#",
    "%23",
  );
  const suffix1 = params
    ? `;${encode(toURLSearchParams(params).toString())}`
    : "";
  const suffix2 = fragment ? `#${encode(fragment)}` : "";
  return `${scheme}://${encodedPath}${suffix1}${suffix2}`;
}

/**
 * Parse Vim's buffer name to construct Bufname instance.
 */
export function parse(bufname: string): Bufname {
  if (bufnameUnusablePattern.test(bufname)) {
    throw new Error(
      `A buffer name '${bufname}' contains unusable characters. Vim (on Windows) does not support '<>|?*' in a buffer name.`,
    );
  }
  // Check if the bufname is remote
  const m1 = bufname.match(schemePattern);
  if (!m1) {
    throw new Error(
      `A buffer name '${bufname}' does not start from '{scheme}://'.`,
    );
  }
  const scheme = m1[1];
  // Vim (less than 8.2.3153) only supports alphabets in scheme part
  if (schemeUnusablePattern.test(scheme)) {
    throw new Error(
      `Scheme '${scheme}' contains unusable characters. Only alphabets are allowed.`,
    );
  }
  const remain = decode(bufname.substring(`${scheme}://`.length), [
    "%3B", // ;
    "%23", // #
  ]);
  const m2 = remain.match(exprPattern)!;
  const expr = decode(m2[1]);
  const params = m2[2]
    ? fromURLSearchParams(new URLSearchParams(decode(m2[2])))
    : undefined;
  const fragment = m2[3] ? decode(m2[3]) : undefined;
  return {
    scheme,
    expr,
    ...(params ? { params } : {}),
    ...(fragment ? { fragment } : {}),
  };
}

function toURLSearchParams(params: BufnameParams): URLSearchParams {
  const cs = Object.entries(params).flatMap(
    ([key, value]): [string, string][] => {
      if (value == undefined) {
        return [];
      } else if (Array.isArray(value)) {
        return value.map((v) => [key, v]);
      } else {
        return [[key, value]];
      }
    },
  );
  return new URLSearchParams(cs);
}

function fromURLSearchParams(search: URLSearchParams): BufnameParams {
  const params: BufnameParams = {};
  search.forEach((value, key) => {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const previous = params[key];
      if (Array.isArray(previous)) {
        previous.push(value);
        return;
      } else if (previous != undefined) {
        params[key] = [previous, value];
        return;
      }
    }
    params[key] = value;
  });
  return params;
}
