import type { Denops } from "https://deno.land/x/denops_core@v3.4.1/mod.ts";
import { BuiltinCompletion, isValidBuiltinCompletion } from "./types.ts";

/**
 * The result is a String, which is whatever the user typed on
 * the command-line.  The {prompt} argument is either a prompt
 * string, or a blank string (for no prompt).  A '\n' can be used
 * in the prompt to start a new line.
 * The highlighting set with |:echohl| is used for the prompt.
 * The input is entered just like a command-line, with the same
 * editing commands and mappings.  There is a separate history
 * for lines typed for input().
 * Example:
 * 	:if input("Coffee or beer? ") == "beer"
 * 	:  echo "Cheers!"
 * 	:endif
 * If the optional {text} argument is present and not empty, this
 * is used for the default reply, as if the user typed this.
 * Example:
 * 	:let color = input("Color? ", "white")
 * The optional {completion} argument specifies the type of
 * completion supported for the input.  Without it completion is
 * not performed.  The supported completion types are the same as
 * that can be supplied to a user-defined command using the
 * "-complete=" argument.  Refer to |:command-completion| for
 * more information.  Example:
 * 	let fname = input("File: ", "", "file")
 * NOTE: This function must not be used in a startup file, for
 * the versions that only run in GUI mode (e.g., the Win32 GUI).
 * Note: When input() is called from within a mapping it will
 * consume remaining characters from that mapping, because a
 * mapping is handled like the characters were typed.
 * Use |inputsave()| before input() and |inputrestore()|
 * after input() to avoid that.  Another solution is to avoid
 * that further characters follow in the mapping, e.g., by using
 * |:execute| or |:normal|.
 * Example with a mapping:
 * 	:nmap \x :call GetFoo()<CR>:exe "/" . Foo<CR
 * 	:function GetFoo()
 * 	:  call inputsave()
 * 	:  let g:Foo = input("enter search pattern: ")
 * 	:  call inputrestore()
 * 	:endfunction
 * Can also be used as a |method|:
 * 	GetPrompt()->input()
 */
export function input(
  denops: Denops,
  prompt: string,
  text = "",
  completion?: BuiltinCompletion | (string & { _?: never }),
): Promise<string> {
  if (completion && !isValidBuiltinCompletion(completion)) {
    if (
      !completion.startsWith("custom,") && !completion.startsWith("customlist,")
    ) {
      throw new Error(`Invalid completion '${completion}' specified.`);
    }
  }
  return denops.call("input", prompt, text, completion) as Promise<string>;
}

/**
 * {textlist} must be a |List| of strings.  This |List| is
 * displayed, one string per line.  The user will be prompted to
 * enter a number, which is returned.
 * The user can also select an item by clicking on it with the
 * mouse.  For the first string 0 is returned.  When clicking
 * above the first item a negative number is returned.  When
 * clicking on the prompt one more than the length of {textlist}
 * is returned.
 * Make sure {textlist} has less than 'lines' entries, otherwise
 * it won't work.  It's a good idea to put the entry number at
 * the start of the string.  And put a prompt in the first item.
 * Example:
 * 	let color = inputlist(['Select color:', '1. red',
 * 		\ '2. green', '3. blue'])
 * Can also be used as a |method|:
 * 	GetChoices()->inputlist()
 */
export function inputlist(denops: Denops, textlist: string[]): Promise<number> {
  return denops.call("inputlist", textlist) as Promise<number>;
}

/**
 * Restore typeahead that was saved with a previous |inputsave()|.
 * Should be called the same number of times inputsave() is
 * called.  Calling it more often is harmless though.
 * Returns 1 when there is nothing to restore, 0 otherwise.
 */
export function inputrestore(denops: Denops): Promise<void> {
  return denops.call("inputrestore") as Promise<void>;
}

/**
 * Preserve typeahead (also from mappings) and clear it, so that
 * a following prompt gets input from the user.  Should be
 * followed by a matching inputrestore() after the prompt.  Can
 * be used several times, in which case there must be just as
 * many inputrestore() calls.
 * Returns 1 when out of memory, 0 otherwise.
 */
export function inputsave(denops: Denops): Promise<void> {
  return denops.call("inputsave") as Promise<void>;
}

/**
 * This function acts much like the |input()| function with but
 * two exceptions:
 * a) the user's response will be displayed as a sequence of
 * asterisks ("*") thereby keeping the entry secret, and
 * b) the user's response will not be recorded on the input
 * |history| stack.
 * The result is a String, which is whatever the user actually
 * typed on the command-line in response to the issued prompt.
 * NOTE: Command-line completion is not supported.
 * Can also be used as a |method|:
 * 	GetPrompt()->inputsecret()
 */
export function inputsecret(
  denops: Denops,
  prompt: string,
  text = "",
): Promise<string> {
  return denops.call("inputsecret", prompt, text) as Promise<string>;
}
