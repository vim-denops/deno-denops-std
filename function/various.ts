import type { Denops } from "../mod.ts";

/**
 * Return a string that indicates the current mode.
 * If **{expr}** is supplied and it evaluates to a non-zero Number or
 * a non-empty String (`non-zero-arg`), then the full mode is
 * returned, otherwise only the first letter is returned.
 * Also see `state()`.
 *
 *    n        Normal
 *    no       Operator-pending
 *    nov      Operator-pending (forced characterwise `o_v`)
 *    noV      Operator-pending (forced linewise `o_V`)
 *    noCTRL-V Operator-pending (forced blockwise `o_CTRL-V`);
 *                 CTRL-V is one character
 *    niI      Normal using `i_CTRL-O` in `Insert-mode`
 *    niR      Normal using `i_CTRL-O` in `Replace-mode`
 *    niV      Normal using `i_CTRL-O` in `Virtual-Replace-mode`
 *    nt       Terminal-Normal (insert goes to Terminal-Job mode)
 *    v        Visual by character
 *    vs       Visual by character using `v_CTRL-O` in Select mode
 *    V        Visual by line
 *    Vs       Visual by line using `v_CTRL-O` in Select mode
 *    CTRL-V   Visual blockwise
 *    CTRL-Vs  Visual blockwise using `v_CTRL-O` in Select mode
 *    s        Select by character
 *    S        Select by line
 *    CTRL-S   Select blockwise
 *    i        Insert
 *    ic       Insert mode completion `compl-generic`
 *    ix       Insert mode `i_CTRL-X` completion
 *    R        Replace `R`
 *    Rc       Replace mode completion `compl-generic`
 *    Rx       Replace mode `i_CTRL-X` completion
 *    Rv       Virtual Replace `gR`
 *    Rvc      Virtual Replace mode completion `compl-generic`
 *    Rvx      Virtual Replace mode `i_CTRL-X` completion
 *    c        Command-line editing
 *    ct       Command-line editing via Terminal-Job mode
 *    cr       Command-line editing overstrike mode `c_<Insert>`
 *    cv       Vim Ex mode `gQ`
 *    cvr      Vim Ex mode while in overstrike mode `c_<Insert>`
 *    ce       Normal Ex mode `Q`
 *    r        Hit-enter prompt
 *    rm       The -- more -- prompt
 *    r?       A `:confirm` query of some sort
 *    !        Shell or external command is executing
 *    t        Terminal-Job mode: keys go to the job
 *
 * This is useful in the 'statusline' option or when used
 * with `remote_expr()` In most other places it always returns
 * "c" or "n".
 * Note that in the future more modes and more specific modes may
 * be added. It's better not to compare the whole string but only
 * the leading character(s).
 * Also see `visualmode()`.
 *
 * Can also be used as a `method`:
 *
 *     DoFull()->mode()
 *
 * Return type: `String`
 */
export function mode(denops: Denops, expr?: number | string): Promise<string> {
  return denops.call("mode", expr) as Promise<string>;
}
