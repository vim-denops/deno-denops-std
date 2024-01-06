/**
 * A module to provide functions to handle Vim's buffer name.
 *
 * The format of the buffer name assumed in this module is like
 *
 * ```text
 * {scheme}://{expr}[;{params}][#{fragment}]
 * ```
 *
 * Where
 *
 * - `{scheme}` is used to distinguish a buffer kind. It contains only alphabet
 *   characters.
 * - `{expr}` is used to identify a buffer itself. _Unusable characters_,
 *   semicolons (;), and sharps (#) are replaced with percent-encoded characters.
 * - `{params}` (Optional) is used to add meta information to the buffer name like
 *   query parameters of URL. _Unusable characters_ and sharps (#) are replaced
 *   with percent-encoded characters.
 * - `{fragment}` (Optional) is used to add a suffix to the buffer name for file
 *   type detection or so on. _Unusable characters_ are replaced with
 *   percent-encoded characters.
 * - _Unusable characters_ are `"`, `<`, `>`, `|`, `?`, or `*`. It is caused by the
 *   limitations of Vim on Windows.
 *
 * For example,
 *
 * ```text
 * denops:///Users/John Titor/test.git
 * └─┬──┘   └───────────┬────────────┘
 *   scheme             expr
 *
 * denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2
 * └─┬──┘   └───────────┬────────────┘ └───────────┬───────────┘
 *   scheme             expr                       params
 *
 * denops:///Users/John Titor/test.git#README.md
 * └─┬──┘   └───────────┬────────────┘ └───┬───┘
 *   scheme             expr               fragment
 *
 * denops:///Users/John Titor/test.git;foo=foo&bar=bar1&bar=bar2#README.md
 * └─┬──┘   └───────────┬────────────┘ └───────────┬───────────┘ └───┬───┘
 *   scheme             expr                       params            fragment
 * ```
 *
 * @module
 */
export * from "./bufname.ts";
