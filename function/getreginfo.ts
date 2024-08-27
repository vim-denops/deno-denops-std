import type { Denops } from "../mod.ts";
import { lessThan } from "@std/semver/less-than";
import { parse } from "@std/semver/parse";
import { ulid } from "@std/ulid/ulid";
import { execute } from "../helper/execute.ts";

const cacheKey = "denops_std/function/getreginfo.ts@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (typeof denops.context[cacheKey] === "string") {
    return denops.context[cacheKey];
  }
  const suffix = ulid();
  denops.context[cacheKey] = suffix;
  const script = `
  function! DenopsStdFunctionGetreginfo_${suffix}(...) abort
    let l:result = call('getreginfo', a:000)
    if !has_key(l:result, 'isunnamed')
      return l:result
    endif
    return extend(l:result, {'isunnamed': l:result.isunnamed ? v:true : v:false})
  endfunction
  `;
  await execute(denops, script);
  return suffix;
}

export type GetreginfoResult = {
  regcontents: string[];
  regtype: string;
  isunnamed?: boolean;
  points_to?: string;
} | Record<string, never>;

/**
 * Returns detailed information about register **{regname}** as a
 * Dictionary with the following entries:
 *         regcontents     List of lines contained in register
 *                         **{regname}**, like
 *                         `getreg`(**{regname}**, 1, 1).
 *         regtype         the type of register **{regname}**, as in
 *                         `getregtype()`.
 *         isunnamed       Boolean flag, v:true if this register
 *                         is currently pointed to by the unnamed
 *                         register.
 *         points_to       for the unnamed register, gives the
 *                         single letter name of the register
 *                         currently pointed to (see `quotequote`).
 *                         For example, after deleting a line
 *                         with `dd`, this field will be "1",
 *                         which is the register that got the
 *                         deleted text.
 *
 * The **{regname}** argument is a string.  If **{regname}** is invalid
 * or not set, an empty Dictionary will be returned.
 * If **{regname}** is "" or "@", the unnamed register '"' is used.
 * If **{regname}** is not specified, `v:register` is used.
 * The returned Dictionary can be passed to `setreg()`.
 * In `Vim9-script` **{regname}** must be one character.
 *
 * Can also be used as a `method`:
 *
 *     GetRegname()->getreginfo()
 */
export function getreginfo(
  denops: Denops,
  regname?: string,
): Promise<GetreginfoResult>;
export async function getreginfo(
  denops: Denops,
  ...args: unknown[]
): Promise<unknown> {
  if (
    denops.meta.host === "vim" &&
    lessThan(parse(denops.meta.version), parse("9.0.936"))
  ) {
    // Vim prior to 9.0.0936 need a workaround
    // https://github.com/vim/vim/issues/11598
    const suffix = await ensurePrerequisites(denops);
    return denops.call(`DenopsStdFunctionGetreginfo_${suffix}`, ...args);
  }
  return denops.call("getreginfo", ...args);
}
