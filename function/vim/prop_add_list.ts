import type { Denops } from "https://deno.land/x/denops_core@v6.0.5/mod.ts";

export type PropAddListProps = {
  bufnr?: number;
  id?: number;
  type: string;
};

export type PropAddListItem = [
  lnum: number,
  col: number,
  end_lnum: number,
  end_col: number,
];

/**
 * Similar to prop_add(), but attaches a text property at
 * multiple positions in a buffer.
 *
 * **{props}** is a dictionary with these fields:
 *    bufnr        buffer to add the property to; when omitted
 *                 the current buffer is used
 *    id           user defined ID for the property; must be a
 *                 number; when omitted zero is used
 *    type         name of the text property type
 * All fields except "type" are optional.
 *
 * The second argument is a List of items, where each **{item}** is a
 * list that specifies the starting and ending position of the
 * text: [**{lnum}**, **{col}**, **{end-lnum}**, **{end-col}**]
 * or:   [**{lnum}**, **{col}**, **{end-lnum}**, **{end-col}**, **{id}**]
 *
 * The first two items **{lnum}** and **{col}** specify the starting
 * position of the text where the property will be attached.
 * The next two items **{end-lnum}** and **{end-col}** specify the
 * position just after the text.
 * An optional fifth item **{id}** can be used to give a different ID
 * to a property.  When omitted the ID from **{props}** is used,
 * falling back to zero if none are present.
 *
 * It is not possible to add a text property with a "text" field
 * here.
 *
 * Example:
 *
 *     call prop_add_list(#{type: 'MyProp', id: 2},
 *                     \ [[1, 4, 1, 7],
 *                     \  [1, 15, 1, 20],
 *                     \  [2, 30, 3, 30]]
 *
 * Can also be used as a `method`:
 *
 *     GetProp()->prop_add_list([[1, 1, 1, 2], [1, 4, 1, 8]])
 */
export function prop_add_list(
  denops: Denops,
  props: PropAddListProps,
  items: PropAddListItem[],
): Promise<unknown>;
export function prop_add_list(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  return denops.call("prop_add_list", ...args);
}
