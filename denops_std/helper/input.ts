import type { Denops } from "https://deno.land/x/denops_core@v6.0.5/mod.ts";
import { assert, is } from "https://deno.land/x/unknownutil@v3.10.0/mod.ts#^";
import * as fn from "../function/mod.ts";
import * as lambda from "../lambda/mod.ts";
import { execute } from "./execute.ts";
import { generateUniqueString } from "../util.ts";

const cacheKey = "denops_std/helper/input@1";

async function ensurePrerequisites(denops: Denops): Promise<string> {
  if (typeof denops.context[cacheKey] === "string") {
    return denops.context[cacheKey];
  }
  const suffix = generateUniqueString();
  denops.context[cacheKey] = suffix;
  const script = `
  let s:loaded_denops_std_helper_input_${suffix} = 1

  let s:escape_token_${suffix} = '###DenopsStdHelperInputCancelled###'

  function! DenopsStdHelperInput_${suffix}(prompt, text, completion, inputsave) abort
    if type(a:completion) is# v:t_dict
      let s:completion_${suffix} = copy(a:completion)
      let completion = printf('customlist,%s', s:completion_proxy_name_${suffix})
    else
      let completion = a:completion
    endif
    if a:inputsave
      call inputsave()
    endif
    try
      return s:input_${suffix}(a:prompt, a:text, completion)
    finally
      if a:inputsave
        call inputrestore()
      endif
    endtry
  endfunction

  function! s:completion_proxy_${suffix}(arglead, cmdline, cursorpos) abort
    return denops#request(
          \\ s:completion_${suffix}.plugin,
          \\ s:completion_${suffix}.id,
          \\ [a:arglead, a:cmdline, a:cursorpos],
          \\)
  endfunction

  if has('nvim')
    function! s:input_${suffix}(prompt, text, completion) abort
      let options = {
          \\ 'prompt': a:prompt,
          \\ 'default': a:text,
          \\ 'cancelreturn': s:escape_token_${suffix},
          \\}
      if a:completion isnot# v:null
        let options['completion'] = a:completion
      endif
      try
        let result = input(options)
      catch /^Vim:Interrupt$/
        return v:null
      endtry
      if result ==# s:escape_token_${suffix}
        return v:null
      endif
      return result
    endfunction
  else
    function! s:input_${suffix}(prompt, text, completion) abort
      let original = maparg('<Esc>', 'n')
      execute printf('cnoremap <nowait><buffer> <Esc> <C-u>%s<CR>', s:escape_token_${suffix})
      try
        let result = a:completion is# v:null
              \\ ? input(a:prompt, a:text)
              \\ : input(a:prompt, a:text, a:completion)
        redraw | echo ""
        if result ==# s:escape_token_${suffix}
          return v:null
        endif
        return result
      catch /^Vim:Interrupt$/
        return v:null
      finally
        if empty(original)
          cunmap <buffer> <Esc>
        else
          execute printf('cmap <buffer> %s', original)
        endif
      endtry
    endfunction
  endif

  let s:completion_proxy_name_${suffix} = get(funcref('s:completion_proxy_${suffix}'), 'name')
  `;
  await execute(denops, script);
  return suffix;
}

export type CustomCompletion = (
  arglead: string,
  cmdline: string,
  cursorpos: number,
) => string[] | Promise<string[]>;

export interface InputOptions {
  prompt?: string;
  text?: string;
  completion?:
    | fn.BuiltinCompletion
    | (string & { _?: never })
    | CustomCompletion;
  // Guard `input` by `inputsave` and `inputrestore`
  inputsave?: boolean;
}

/**
 * Open a prompt to get user input.
 *
 * It is a wrapper function of Vim/Neovim's native `input()` function.
 * This version has the following advantages
 *
 * - Developers can use TypeScript custom completion function
 * - It returns `null` instead when user cancelled by <Esc> or <C-c>
 * - It automatically guard input when `inputsave` option is specified
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { input } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   console.log(
 *     await input(denops, {
 *       prompt: "> ",
 *       text: "This is default value",
 *     }),
 *   );
 * }
 * ```
 *
 * Not like native `input()` function, it returns `null` instead of an empty string
 * when user press `<Esc>` or `<C-c>` so that developers can distinguish if user
 * cancelled or input an empty string.
 *
 * It accepts a TypeScript callback as a completion function addition to built-in
 * completions and Vim script custom completion like:
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { input } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // Built-in completions
 *   console.log(
 *     await input(denops, {
 *       prompt: "> ",
 *       text: "This is default value",
 *       completion: "command",
 *     }),
 *   );
 *
 *   // Vim script custom completion (assume 'MyVimScriptCompletion' is defined in Vim script)
 *   console.log(
 *     await input(denops, {
 *       prompt: "> ",
 *       text: "This is default value",
 *       completion: "custom,MyVimScriptCompletion",
 *     }),
 *   );
 *
 *   // TypeScript custom completion
 *   console.log(
 *     await input(denops, {
 *       prompt: "> ",
 *       text: "This is default value",
 *       completion: (
 *         arglead: string,
 *         cmdline: string,
 *         cursorpos: number,
 *       ): Promise<string[]> => {
 *         return Promise.resolve(["Hello", "World"]);
 *       },
 *     }),
 *   );
 * }
 * ```
 *
 * If you'd like to guard input by `inputsave()` and `inputrestore()`, use
 * `inputsave` option like:
 *
 * ```typescript
 * import { Denops } from "../mod.ts";
 * import { input } from "../helper/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   denops.dispatcher = {
 *     say: async () => {
 *       return await input(denops, {
 *         prompt: "> ",
 *         inputsave: true,
 *       });
 *     },
 *   };
 * }
 * ```
 */
export async function input(
  denops: Denops,
  options: InputOptions = {},
): Promise<string | null> {
  const suffix = await ensurePrerequisites(denops);
  const completion = options.completion ?? null;
  if (completion && typeof completion !== "string") {
    const id = lambda.register(denops, async (arglead, cmdline, cursorpos) => {
      assert(arglead, is.String);
      assert(cmdline, is.String);
      assert(cursorpos, is.Number);
      return await completion(arglead, cmdline, cursorpos);
    });
    try {
      return await denops.call(
        `DenopsStdHelperInput_${suffix}`,
        options.prompt ?? "",
        options.text ?? "",
        { plugin: denops.name, id },
        options.inputsave ?? false,
      ) as Promise<string | null>;
    } finally {
      lambda.unregister(denops, id);
    }
  }
  if (completion && !fn.isValidBuiltinCompletion(completion)) {
    if (
      !completion.startsWith("custom,") && !completion.startsWith("customlist,")
    ) {
      throw new Error(`Invalid completion '${completion}' specified.`);
    }
  }
  return denops.call(
    `DenopsStdHelperInput_${suffix}`,
    options.prompt ?? "",
    options.text ?? "",
    completion,
    options.inputsave ?? false,
  ) as Promise<string | null>;
}
