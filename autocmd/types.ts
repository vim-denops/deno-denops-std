// https://github.com/microsoft/TypeScript/issues/29729#issuecomment-567871939
// deno-lint-ignore ban-types
type AnyString = string & {};

export type AutocmdEvent =
  | AnyString
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

export type AutocmdPattern =
  | AnyString
  | "<buffer>"
  | "<buffer=abuf>"
  | `<buffer=${number}>`;

interface CommonOptions {
  group?: string;
}

export interface DefineOptions extends CommonOptions {
  once?: boolean;
  nested?: boolean;
}

export type RemoveOptions = CommonOptions;

export type ListOptions = CommonOptions;

export interface EmitOptions extends CommonOptions {
  nomodeline?: boolean;
}
