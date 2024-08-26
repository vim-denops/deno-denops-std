/**
 * A module to provide values that can be evaluated in Vim.
 *
 * ```typescript
 * import type { Denops } from "jsr:@denops/std";
 * import * as fn from "jsr:@denops/std/function";
 * import type { Expression, RawString } from "jsr:@denops/std/eval";
 * import { expr, rawString, stringify, useEval } from "jsr:@denops/std/eval";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Create `Expression` with `expr`.
 *   const vimExpression: Expression = expr`expand('<cword>')`;
 *
 *   // Create `RawString` with `rawString`.
 *   const vimKeySequence: RawString = rawString`\<Cmd>echo 'foo'\<CR>`;
 *
 *   // Use values in `useEval` block.
 *   await useEval(denops, async (denops) => {
 *     await denops.cmd('echo expr', { expr: vimExpression });
 *     await fn.feedkeys(denops, vimKeySequence);
 *   });
 *
 *   // Convert values to a string that can be parsed Vim's `eval()`.
 *   const vimEvaluable: string = stringify({
 *     expr: vimExpression,
 *     keys: vimKeySequence,
 *   });
 *   await denops.cmd('echo eval(value)', { value: vimEvaluable });
 * }
 * ```
 *
 * @module
 */

export * from "./expression.ts";
export * from "./string.ts";
export * from "./stringify.ts";
export * from "./use_eval.ts";
