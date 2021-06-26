import { Denops } from "../deps.ts";
import { execute } from "../helper/execute.ts";

export async function autocmd(
  denops: Denops,
  group: string,
  main: (helper: AutocmdHelper) => void,
): Promise<void> {
  const commands: string[] = [];
  const helper = new AutocmdHelper(commands);
  main(helper);
  if (group) {
    commands.unshift(`aug ${group}`);
    commands.push("aug END");
  }
  await execute(denops, commands);
}

export class AutocmdHelper {
  #commands: string[];

  constructor(commands: string[]) {
    this.#commands = commands;
  }

  define(
    event: AutocmdEvent | AutocmdEvent[],
    pat: string | string[],
    cmd: string,
    options: AutocmdOptions = {},
  ): void {
    const terms = ["au"];
    if (Array.isArray(event)) {
      terms.push(event.join(","));
    } else {
      terms.push(event);
    }
    if (Array.isArray(pat)) {
      terms.push(pat.join(","));
    } else {
      terms.push(pat);
    }
    if (options.once) {
      terms.push("++once");
    }
    if (options.nested) {
      terms.push("++nested");
    }
    terms.push(cmd);
    this.#commands.push(terms.join(" "));
  }

  remove(
    event?: AutocmdEvent | AutocmdEvent[],
    pat?: string | string[],
    options: AutocmdOptions = {},
  ): void {
    const terms = ["au!"];
    if (event) {
      if (Array.isArray(event)) {
        terms.push(event.join(","));
      } else {
        terms.push(event);
      }
      if (pat) {
        if (Array.isArray(pat)) {
          terms.push(pat.join(","));
        } else {
          terms.push(pat);
        }
        if (options.once) {
          terms.push("++once");
        }
        if (options.nested) {
          terms.push("++nested");
        }
      }
    }
    this.#commands.push(terms.join(" "));
  }
}

export interface AutocmdOptions {
  once?: boolean;
  nested?: boolean;
}

export type AutocmdEvent =
  | "*"
  | "BufAdd"
  | "BufDelete"
  | "BufEnter"
  | "BufFilePost"
  | "BufFilePre"
  | "BufHidden"
  | "BufLeave"
  | "BufModifiedSet"
  | "BufNew"
  | "BufNewFile"
  | "BufRead"
  | "BufReadPost"
  | "BufReadCmd"
  | "BufReadPre"
  | "BufUnload"
  | "BufWinEnter"
  | "BufWinLeave"
  | "BufWipeout"
  | "BufWrite"
  | "BufWritePre"
  | "BufWriteCmd"
  | "BufWritePost"
  | "ChanInfo"
  | "ChanOpen"
  | "CmdUndefined"
  | "CmdlineChanged"
  | "CmdlineEnter"
  | "CmdlineLeave"
  | "CmdwinEnter"
  | "CmdwinLeave"
  | "ColorScheme"
  | "ColorSchemePre"
  | "CompleteChanged"
  | "CompleteDonePre"
  | "CompleteDone"
  | "CursorHold"
  | "CursorHoldI"
  | "CursorMoved"
  | "CursorMovedI"
  | "DiffUpdated"
  | "DirChanged"
  | "FileAppendCmd"
  | "FileAppendPost"
  | "FileAppendPre"
  | "FileChangedRO"
  | "ExitPre"
  | "FileChangedShell"
  | "FileChangedShellPost"
  | "FileReadCmd"
  | "FileReadPost"
  | "FileReadPre"
  | "FileType"
  | "FileWriteCmd"
  | "FileWritePost"
  | "FileWritePre"
  | "FilterReadPost"
  | "FilterReadPre"
  | "FilterWritePost"
  | "FilterWritePre"
  | "FocusGained"
  | "FocusLost"
  | "FuncUndefined"
  | "UIEnter"
  | "UILeave"
  | "InsertChange"
  | "InsertCharPre"
  | "TextYankPost"
  | "InsertEnter"
  | "InsertLeavePre"
  | "InsertLeave"
  | "MenuPopup"
  | "OptionSet"
  | "QuickFixCmdPre"
  | "QuickFixCmdPost"
  | "QuitPre"
  | "RemoteReply"
  | "SessionLoadPost"
  | "ShellCmdPost"
  | "Signal"
  | "ShellFilterPost"
  | "SourcePre"
  | "SourcePost"
  | "SourceCmd"
  | "SpellFileMissing"
  | "StdinReadPost"
  | "StdinReadPre"
  | "SwapExists"
  | "Syntax"
  | "TabEnter"
  | "TabLeave"
  | "TabNew"
  | "TabNewEntered"
  | "TabClosed"
  | "TermOpen"
  | "TermEnter"
  | "TermLeave"
  | "TermClose"
  | "TermResponse"
  | "TextChanged"
  | "TextChangedI"
  | "TextChangedP"
  | "User"
  | "UserGettingBored"
  | "VimEnter"
  | "VimLeave"
  | "VimLeavePre"
  | "VimResized"
  | "VimResume"
  | "VimSuspend"
  | "WinClosed"
  | "WinEnter"
  | "WinLeave"
  | "WinNew"
  | "WinScrolled";
