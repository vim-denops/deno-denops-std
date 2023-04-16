// NOTE: This file is generated. Do NOT modify it manually.
import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";
import { globalOptions, localOptions, options } from "../../variable/mod.ts";

/**
 * This option was for using Farsi, which has been removed.  See
 * `farsi.txt`.
 *
 * (default off)
 *
 * *only available when compiled with the `+farsi` feature*
 */
export const altkeymap = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "altkeymap") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "altkeymap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "altkeymap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "altkeymap") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "altkeymap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "altkeymap");
  },
};

/**
 * This option only has an effect in the GUI version of Vim on macOS
 * v10.2 or later.  When on, Vim will use smooth ("antialiased") fonts,
 * which can be easier to read at certain sizes on certain displays.
 * Setting this option can sometimes cause problems if 'guifont' is set
 * to its default (empty string).
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default: off)
 *
 * *only available when compiled with GUI enabled on macOS*
 */
export const antialias = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "antialias") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "antialias", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "antialias");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "antialias") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "antialias", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "antialias");
  },
};

/**
 * When on, Vim will change the current working directory whenever you
 * change the directory of the shell running in a terminal window. You
 * need proper setting-up, so whenever the shell's pwd changes an OSC 7
 * escape sequence will be emitted.  For example, on Linux, you can
 * source /etc/profile.d/vte.sh in your shell profile if you use bash or
 * zsh.  For bash this should work (put it in a bash init file):
 *
 *     if [[ -n "$VIM_TERMINAL" ]]; then
 *         PROMPT_COMMAND='_vim_sync_PWD'
 *         function _vim_sync_PWD() {
 *             printf '\033]7;file://%s\033\\' "$PWD"
 *         }
 *     fi
 *
 * Or, in a zsh init file:
 *
 *     if [[ -n "$VIM_TERMINAL" ]]; then
 *         autoload -Uz add-zsh-hook
 *         add-zsh-hook -Uz chpwd _vim_sync_PWD
 *         function _vim_sync_PWD() {
 *             printf '\033]7;file://%s\033\\' "$PWD"
 *         }
 *     fi
 *
 * In a fish init file:
 *
 *     if test -n "$VIM_TERMINAL"
 *         function _vim_sync_PWD --on-variable=PWD
 *             printf '\033]7;file://%s\033\\' "$PWD"
 *         end
 *     end
 *
 * You can find an alternative method at `terminal-autoshelldir`.
 * When the parsing of the OSC sequence fails you get *E1179* .
 *
 * (default off)
 */
export const autoshelldir = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "autoshelldir") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autoshelldir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autoshelldir");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "autoshelldir") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autoshelldir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autoshelldir");
  },
};

/**
 * Delay in milliseconds before a balloon may pop up.  See `balloon-eval`.
 *
 * (default: 600)
 *
 * *only available when compiled with the `+balloon_eval` feature*
 */
export const balloondelay = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "balloondelay") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "balloondelay", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "balloondelay");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "balloondelay") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "balloondelay", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "balloondelay");
  },
};

/**
 * Switch on the `balloon-eval` functionality for the GUI.
 *
 * (default off)
 *
 * *only available when compiled with the `+balloon_eval` feature*
 */
export const ballooneval = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "ballooneval") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ballooneval", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ballooneval");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "ballooneval") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ballooneval", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ballooneval");
  },
};

/**
 * Switch on the `balloon-eval` functionality for the terminal.
 *
 * (default off)
 *
 * *only available when compiled with the `+balloon_eval_term` feature*
 */
export const balloonevalterm = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "balloonevalterm") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "balloonevalterm", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "balloonevalterm");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "balloonevalterm") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "balloonevalterm", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "balloonevalterm");
  },
};

/**
 * Expression for text to show in evaluation balloon.  It is only used
 * when 'ballooneval' or 'balloonevalterm' is on.  These variables can be
 * used:
 *
 * v:beval_bufnr   number of the buffer in which balloon is going to show
 * v:beval_winnr   number of the window
 * v:beval_winid   ID of the window
 * v:beval_lnum    line number
 * v:beval_col     column number (byte index)
 * v:beval_text    word under or after the mouse pointer
 *
 * Instead of showing a balloon, which is limited to plain text, consider
 * using a popup window, see `popup_beval_example`.  A popup window can
 * use highlighting and show a border.
 *
 * The evaluation of the expression must not have side effects!
 * Example:
 *
 *     function MyBalloonExpr()
 *         return 'Cursor is at line ' .. v:beval_lnum ..
 *                 \ ', column ' .. v:beval_col ..
 *                 \ ' of file ' ..  bufname(v:beval_bufnr) ..
 *                 \ ' on word "' .. v:beval_text .. '"'
 *     endfunction
 *     set bexpr=MyBalloonExpr()
 *     set ballooneval
 *
 * Also see `balloon_show()`, it can be used if the content of the balloon
 * is to be fetched asynchronously.  In that case evaluating
 * 'balloonexpr' should result in an empty string.  If you get a balloon
 * with only "0" you probably didn't return anything from your function.
 *
 * NOTE: The balloon is displayed only if the cursor is on a text
 * character.  If the result of evaluating 'balloonexpr' is not empty,
 * Vim does not try to send a message to an external debugger (Netbeans
 * or Sun Workshop).
 *
 * If the expression starts with s: or `<SID>`, then it is replaced with
 * the script ID (`local-function`). Example:
 *
 *     set bexpr=s:MyBalloonExpr()
 *     set bexpr=<SID>SomeBalloonExpr()
 *
 * Otherwise, the expression is evaluated in the context of the script
 * where the option was set, thus script-local items are available.
 *
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * It is not allowed to change text or jump to another window while
 * evaluating 'balloonexpr', see `textlock`.
 *
 * To check whether line breaks in the balloon text work use this check:
 *
 *     if has("balloon_multiline")
 *
 * When they are supported "\n" characters will start a new line.  If the
 * expression evaluates to a `List` this is equal to using each List item
 * as a string and putting "\n" in between them.
 * NOTE: This option is set to "" when 'compatible' is set.
 *
 * (default "")
 *
 * *only available when compiled with the `+balloon_eval` feature*
 */
export const balloonexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "balloonexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "balloonexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "balloonexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "balloonexpr") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "balloonexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "balloonexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "balloonexpr") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "balloonexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "balloonexpr");
  },
};

/**
 * This was for MS-DOS and is no longer supported.
 *
 * (default on)
 *
 * *only for MS-DOS*
 */
export const bioskey = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "bioskey") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "bioskey", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "bioskey");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "bioskey") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "bioskey", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "bioskey");
  },
};

/**
 * This option has the effect of making Vim either more Vi-compatible, or
 * make Vim behave in a more useful way.
 *
 * This is a special kind of option, because when it's set or reset,
 * other options are also changed as a side effect.
 * NOTE: Setting or resetting this option can have a lot of unexpected
 * effects: Mappings are interpreted in another way, undo behaves
 * differently, etc.  If you set this option in your vimrc file, you
 * should probably put it at the very start.
 *
 * By default this option is on and the Vi defaults are used for the
 * options.  This default was chosen for those people who want to use Vim
 * just like Vi, and don't even (want to) know about the 'compatible'
 * option.
 * When a `vimrc` or `gvimrc` file is found while Vim is starting up,
 * this option is switched off, and all options that have not been
 * modified will be set to the Vim defaults.  Effectively, this means
 * that when a `vimrc` or `gvimrc` file exists, Vim will use the Vim
 * defaults, otherwise it will use the Vi defaults.  (Note: This doesn't
 * happen for the system-wide vimrc or gvimrc file, nor for a file given
 * with the `-u` argument).  Also see `compatible-default` and
 * `posix-compliance`.
 * You can also set this option with the "-C" argument, and reset it with
 * "-N".  See `-C` and `-N`.
 * See 'cpoptions' for more fine tuning of Vi compatibility.
 *
 * When this option is set, numerous other options are set to make Vim as
 * Vi-compatible as possible.  When this option is unset, various options
 * are set to make Vim more useful.  The table below lists all the
 * options affected.
 * The {?} column indicates when the options are affected:
 * +  Means that the option is set to the value given in {set value} when
 *    'compatible' is set.
 * &  Means that the option is set to the value given in {set value} when
 *    'compatible' is set AND is set to its Vim default value when
 *    'compatible' is unset.
 * -  Means the option is NOT changed when setting 'compatible' but IS
 *    set to its Vim default when 'compatible' is unset.
 * The **{effect}** column summarises the change when 'compatible' is set.
 *
 * option          ? set value     effect
 *
 * 'allowrevins'   + off           no CTRL-_ command
 * 'antialias'     + off           don't use antialiased fonts
 * 'arabic'        + off           reset arabic-related options
 * 'arabicshape'   + on            correct character shapes
 * 'backspace'     + ""            normal backspace
 * 'backup'        + off           no backup file
 * 'backupcopy'    & Unix: "yes"   backup file is a copy
 *                   else: "auto"  copy or rename backup file
 * 'balloonexpr'   + ""            text to show in evaluation balloon
 * 'breakindent'   + off           don't indent when wrapping lines
 * 'cedit'         - **{unchanged}**   {set vim default only on resetting 'cp'}
 * 'cdhome'        + off           ":cd" don't chdir to home on non-Unix
 * 'cindent'       + off           no C code indentation
 * 'compatible'    - **{unchanged}**   {set vim default only on resetting 'cp'}
 * 'copyindent'    + off           don't copy indent structure
 * 'cpoptions'     & (all flags)   Vi-compatible flags
 * 'cscopepathcomp'+ 0             don't show directories in tags list
 * 'cscoperelative'+ off           don't use basename of path as prefix
 * 'cscopetag'     + off           don't use cscope for ":tag"
 * 'cscopetagorder'+ 0             see `cscopetagorder`
 * 'cscopeverbose' + off           see `cscopeverbose`
 * 'delcombine'    + off           unicode: delete whole char combination
 * 'digraph'       + off           no digraphs
 * 'esckeys'       & off           no <Esc>-keys in Insert mode
 * 'expandtab'     + off           tabs not expanded to spaces
 * 'fileformats'   & ""            no automatic file format detection,
 *                   "dos,unix"    except for MS-Windows
 * 'formatexpr'    + ""            use 'formatprg' for auto-formatting
 * 'formatoptions' & "vt"          Vi compatible formatting
 * 'gdefault'      + off           no default 'g' flag for ":s"
 * 'history'       & 0             no commandline history
 * 'hkmap'         + off           no Hebrew keyboard mapping
 * 'hkmapp'        + off           no phonetic Hebrew keyboard mapping
 * 'hlsearch'      + off           no highlighting of search matches
 * 'incsearch'     + off           no incremental searching
 * 'indentexpr'    + ""            no indenting by expression
 * 'insertmode'    + off           do not start in Insert mode
 * 'iskeyword'     & "@,48-57,_"   keywords contain alphanumeric
 *                                         characters and '_'
 * 'joinspaces'    + on            insert 2 spaces after period
 * 'modeline'      & off           no modelines
 * 'more'          & off           no pauses in listings
 * 'mzquantum'     - **{unchanged}**   {set vim default only on resetting 'cp'}
 * 'numberwidth'   & 8             min number of columns for line number
 * 'preserveindent'+ off           don't preserve current indent structure
 *                                         when changing it
 * 'revins'        + off           no reverse insert
 * 'ruler'         + off           no ruler
 * 'scrolljump'    + 1             no jump scroll
 * 'scrolloff'     + 0             no scroll offset
 * 'shelltemp'     - **{unchanged}**   {set vim default only on resetting 'cp'}
 * 'shiftround'    + off           indent not rounded to shiftwidth
 * 'shortmess'     & "S"           no shortening of messages
 * 'showcmd'       & off           command characters not shown
 * 'showmode'      & off           current mode not shown
 * 'sidescrolloff' + 0             cursor moves to edge of screen in scroll
 * 'smartcase'     + off           no automatic ignore case switch
 * 'smartindent'   + off           no smart indentation
 * 'smarttab'      + off           no smart tab size
 * 'softtabstop'   + 0             tabs are always 'tabstop' positions
 * 'startofline'   + on            goto startofline with some commands
 * 'tagcase'       & "followic"    'ignorecase' when searching tags file
 * 'tagrelative'   & off           tag file names are not relative
 * 'termguicolors' + off           don't use highlight-(guifg|guibg)
 * 'textauto'      & off           no automatic textmode detection
 * 'textwidth'     + 0             no automatic line wrap
 * 'tildeop'       + off           tilde is not an operator
 * 'ttimeout'      + off           no terminal timeout
 * 'undofile'      + off           don't use an undo file
 * 'viminfo'       - **{unchanged}**   {set Vim default only on resetting 'cp'}
 * 'virtualedit'   + ""            cursor can only be placed on characters
 * 'whichwrap'     & ""            left-right movements don't wrap
 * 'wildchar'      & CTRL-E        only when the current value is `<Tab>`
 *                                 use CTRL-E for cmdline completion
 * 'writebackup'   + on or off     depends on the `+writebackup` feature
 *
 * (default on, off when a `vimrc` or `gvimrc`
 *  file is found, reset in `defaults.vim`)
 */
export const compatible = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "compatible") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "compatible", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "compatible");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "compatible") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "compatible", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "compatible");
  },
};

/**
 * When 'completeopt' contains "popup" then this option is used for the
 * properties of the info popup when it is created.  If an info popup
 * window already exists it is closed, so that the option value is
 * applied when it is created again.
 * You can also use `popup_findinfo()` and then set properties for an
 * existing info popup with `popup_setoptions()`.  See `complete-popup`.
 *
 * (default empty)
 *
 * *not available when compiled without the `+textprop` or `+quickfix` feature*
 */
export const completepopup = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "completepopup") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completepopup", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completepopup");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "completepopup") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "completepopup", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "completepopup");
  },
};

/**
 * This was for MS-DOS and is no longer supported.
 *
 * (default off)
 */
export const conskey = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "conskey") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "conskey", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "conskey");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "conskey") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "conskey", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "conskey");
  },
};

/**
 * Method used for encryption when the buffer is written to a file:
 *
 *    zip          PkZip compatible method.  A weak kind of encryption.
 *                 Backwards compatible with Vim 7.2 and older.
 *
 *    blowfish     Blowfish method.  Medium strong encryption but it has
 *                 an implementation flaw.  Requires Vim 7.3 or later,
 *                 files can NOT be read by Vim 7.2 and older.  This adds
 *                 a "seed" to the file, every time you write the file
 *                 the encrypted bytes will be different.
 *
 *    blowfish2    Blowfish method.  Medium strong encryption.  Requires
 *                 Vim 7.4.401 or later, files can NOT be read by Vim 7.3
 *                 and older.  This adds a "seed" to the file, every time
 *                 you write the file the encrypted bytes will be
 *                 different.  The whole undo file is encrypted, not just
 *                 the pieces of text.
 *
 *    xchacha20    XChaCha20 Cipher with Poly1305 Message Authentication
 *                 Code.  Medium strong till strong encryption.
 *                 Encryption is provided by the libsodium library, it
 *                 requires Vim to be built with `+sodium`.
 *                 It adds a seed and a message authentication code (MAC)
 *                 to the file.  This needs at least a Vim 8.2.3022 to
 *                 read the encrypted file.
 *                 Encryption of swap files is not supported, therefore
 *                 no swap file will be used when xchacha20 encryption is
 *                 enabled.
 *                 Encryption of undo files is not yet supported,
 *                 therefore no undo file will currently be written.
 *                 CURRENTLY EXPERIMENTAL: Files written with this method
 *                 might have to be read back with the same version of
 *                 Vim if the binary format changes later.
 *
 * You should use "blowfish2", also to re-encrypt older files.
 *
 * When reading an encrypted file 'cryptmethod' will be set automatically
 * to the detected method of the file being read.  Thus if you write it
 * without changing 'cryptmethod' the same method will be used.
 * Changing 'cryptmethod' does not mark the file as modified, you have to
 * explicitly write it, you don't get a warning unless there are other
 * modifications.  Also see `:X`.
 *
 * When setting the global value to an empty string, it will end up with
 * the value "blowfish2".  When setting the local value to an empty
 * string the buffer will use the global value.
 *
 * When a new encryption method is added in a later version of Vim, and
 * the current version does not recognize it, you will get *E821* .
 * You need to edit this file with the later version of Vim.
 *
 * (default "blowfish2")
 */
export const cryptmethod = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cryptmethod") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cryptmethod", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cryptmethod");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "cryptmethod") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cryptmethod", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cryptmethod");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "cryptmethod") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cryptmethod", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cryptmethod");
  },
};

/**
 * Give messages when adding a cscope database.  See `cscopeverbose`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopeverbose = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cscopeverbose") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cscopeverbose", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopeverbose");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "cscopeverbose") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "cscopeverbose", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopeverbose");
  },
};

/**
 * Makes the 'g' and 'c' flags of the ":substitute" command to be
 * toggled each time the flag is given.  See `complex-change`.  See
 * also 'gdefault' option.
 * Switching this option on may break plugins!
 * This option is not used in `Vim9` script.
 *
 * (default off)
 */
export const edcompatible = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "edcompatible") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "edcompatible", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "edcompatible");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "edcompatible") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "edcompatible", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "edcompatible");
  },
};

/**
 * Function keys that start with an `<Esc>` are recognized in Insert
 * mode.  When this option is off, the cursor and function keys cannot be
 * used in Insert mode if they start with an `<Esc>`.  The advantage of
 * this is that the single `<Esc>` is recognized immediately, instead of
 * after one second.  Instead of resetting this option, you might want to
 * try changing the values for 'timeoutlen' and 'ttimeoutlen'.  Note that
 * when 'esckeys' is off, you can still map anything, but the cursor keys
 * won't work by default.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 * NOTE: when this option is off then the `modifyOtherKeys` functionality
 * is disabled while in Insert mode to avoid ending Insert mode with any
 * key that has a modifier.
 *
 * (Vim default: on, Vi default: off)
 */
export const esckeys = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "esckeys") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "esckeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "esckeys");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "esckeys") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "esckeys", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "esckeys");
  },
};

/**
 * Enables the reading of .vimrc, .exrc and .gvimrc in the current
 * directory.
 *
 * Setting this option is a potential security leak.  E.g., consider
 * unpacking a package or fetching files from github, a .vimrc in there
 * might be a trojan horse.  BETTER NOT SET THIS OPTION!
 * Instead, define an autocommand in your .vimrc to set options for a
 * matching directory.
 *
 * If you do switch this option on you should also consider setting the
 * 'secure' option (see `initialization`).
 * Also see `.vimrc` and `gui-init`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default off)
 */
export const exrc = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "exrc") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "exrc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "exrc");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "exrc") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "exrc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "exrc");
  },
};

/**
 * This option was for using Farsi, which has been removed.  See
 * `farsi.txt`.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const fkmap = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "fkmap") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fkmap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fkmap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "fkmap") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "fkmap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fkmap");
  },
};

/**
 * *not available in the GTK+ GUI*
 *         When not empty, specifies two (or more) fonts to be used.  The first
 *         one for normal English, the second one for your special language.  See
 *         `xfontset`.
 *
 * (default "")
 *
 * *only available when compiled with GUI enabled and with the `+xfontset` feature*
 */
export const guifontset = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guifontset") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guifontset", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guifontset");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guifontset") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guifontset", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guifontset");
  },
};

/**
 * The number of pixels subtracted from the screen height when fitting
 * the GUI window on the screen.  Set this before the GUI is started,
 * e.g., in your `gvimrc` file.  When zero, the whole screen height will
 * be used by the window.  When positive, the specified number of pixel
 * lines will be left for window decorations and other items on the
 * screen.  Set it to a negative value to allow windows taller than the
 * screen.
 *
 * (default 50)
 *
 * *only for GTK and X11 GUI*
 */
export const guiheadroom = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "guiheadroom") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "guiheadroom", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guiheadroom");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "guiheadroom") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "guiheadroom", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guiheadroom");
  },
};

/**
 * List of ASCII characters that, when combined together, can create more
 * complex shapes. Each character must be a printable ASCII character
 * with a value in the 32-127 range.
 * Example:
 *
 *     :set guiligatures=!\"#$%&()*+-./:<=>?@[]^_{\|~
 *
 * Changing this option updates screen output immediately. Set it to an
 * empty string to disable ligatures.
 *
 * (default "")
 *
 * *only for GTK GUI*
 */
export const guiligatures = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guiligatures") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guiligatures", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guiligatures");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guiligatures") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guiligatures", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guiligatures");
  },
};

/**
 * Only in the GUI: If on, an attempt is made to open a pseudo-tty for
 * I/O to/from shell commands.  See `gui-pty`.
 *
 * (default on)
 *
 * *only available when compiled with GUI enabled*
 */
export const guipty = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "guipty") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "guipty", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guipty");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "guipty") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "guipty", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guipty");
  },
};

/**
 * This option can be used to set highlighting mode for various
 * occasions.  It is a comma-separated list of character pairs.  The
 * first character in a pair gives the occasion, the second the mode to
 * use for that occasion.  The occasions are:
 * `hl-SpecialKey`  8  Meta and special keys listed with ":map"
 * `hl-EndOfBuffer`   `~`  lines after the last line in the buffer
 * `hl-NonText`     @  '@' at the end of the window and
 *                     characters from 'showbreak'
 * `hl-Directory`   d  directories in CTRL-D listing and other special
 *                     things in listings
 * `hl-ErrorMsg`    e  error messages
 *                  h  (obsolete, ignored)
 * `hl-IncSearch`   i  'incsearch' highlighting
 * `hl-CurSearch`   y  current instance of last search pattern
 * `hl-Search`      l  last search pattern highlighting (see 'hlsearch')
 * `hl-MoreMsg`     m  `more-prompt`
 * `hl-ModeMsg`     M  Mode (e.g., "-- INSERT --")
 * `hl-LineNr`      n  line number for ":number" and ":#" commands, and
 *                     when 'number' or 'relativenumber' option is set.
 * `hl-LineNrAbove`   a  line number above the cursor for when the
 *                     'relativenumber' option is set.
 * `hl-LineNrBelow`   b  line number below the cursor for when the
 *                     'relativenumber' option is set.
 * `hl-CursorLineNr`  N like n for when 'cursorline' or 'relativenumber' is
 *                     set.
 * `hl-Question`    r  `hit-enter` prompt and yes/no questions
 * `hl-StatusLine`  s  status line of current window `status-line`
 * `hl-StatusLineNC`  S  status lines of not-current windows
 * `hl-Title`       t  Titles for output from ":set all", ":autocmd" etc.
 * `hl-VertSplit`   c  column used to separate vertically split windows
 * `hl-Visual`      v  Visual mode
 * `hl-VisualNOS`   V  Visual mode when Vim does is "Not Owning the
 *                     Selection" Only X11 Gui's `gui-x11` and
 *                     `xterm-clipboard`.
 * `hl-WarningMsg`  w  warning messages
 * `hl-WildMenu`    W  wildcard matches displayed for 'wildmenu'
 * `hl-Folded`      f  line used for closed folds
 * `hl-FoldColumn`  F  'foldcolumn'
 * `hl-DiffAdd`     A  added line in diff mode
 * `hl-DiffChange`  C  changed line in diff mode
 * `hl-DiffDelete`  D  deleted line in diff mode
 * `hl-DiffText`    T  inserted text in diff mode
 * `hl-SignColumn`  >  column used for `signs`
 * `hl-Conceal`     -  the placeholders used for concealed characters
 *                     (see 'conceallevel')
 * `hl-SpellBad`    B  misspelled word `spell`
 * `hl-SpellCap`    P  word that should start with capital `spell`
 * `hl-SpellRare`   R  rare word `spell`
 * `hl-SpellLocal`  L  word from other region `spell`
 * `hl-Pmenu`       +  popup menu normal line
 * `hl-PmenuSel`    =  popup menu selected line
 * `hl-PmenuSbar`   x  popup menu scrollbar
 * `hl-PmenuThumb`  X  popup menu scrollbar thumb
 *
 * The display modes are:
 *         r       reverse         (termcap entry "mr" and "me")
 *         i       italic          (termcap entry "ZH" and "ZR")
 *         b       bold            (termcap entry "md" and "me")
 *         s       standout        (termcap entry "so" and "se")
 *         u       underline       (termcap entry "us" and "ue")
 *         c       undercurl       (termcap entry "Us" and "Ce")
 *         2       double underline (termcap entry "Ds" and "Ce")
 *         d       dotted underline (termcap entry "ds" and "Ce")
 *         =       dashed underline (termcap entry "Ds" and "Ce")
 *         t       strikethrough   (termcap entry "Ts" and "Te")
 *         n       no highlighting
 *         -       no highlighting
 *         :       use a highlight group
 * The default is used for occasions that are not included.
 * If you want to change what the display modes do, see `dos-colors`
 * for an example.
 * When using the ':' display mode, this must be followed by the name of
 * a highlight group.  A highlight group can be used to define any type
 * of highlighting, including using color.  See `:highlight` on how to
 * define one.  The default uses a different group for each occasion.
 * See `highlight-default` for the default highlight groups.
 *
 * (default (as a single string):
 *  `"8:SpecialKey,~:EndOfBuffer,@:NonText,
 *  d:Directory,e:ErrorMsg,i:IncSearch,
 *  l:Search,m:MoreMsg,M:ModeMsg,n:LineNr,
 *  a:LineNrAbove,b:LineNrBelow,
 *  N:CursorLineNr,r:Question,s:StatusLine,
 *  S:StatusLineNC,c:VertSplit,t:Title,
 *  v:Visual,V:VisualNOS,w:WarningMsg,
 *  W:WildMenu,f:Folded,F:FoldColumn,
 *  A:DiffAdd,C:DiffChange,D:DiffDelete,
 *  T:DiffText,>:SignColumn,-:Conceal,
 *  B:SpellBad,P:SpellCap,R:SpellRare,
 *  L:SpellLocal,+:Pmenu,=:PmenuSel,
 *  x:PmenuSbar,X:PmenuThumb,*:TabLine,
 *  #:TabLineSel,_:TabLineFill,!:CursorColumn,
 *  .:CursorLine,o:ColorColumn,q:QuickFixLine,
 *  z:StatusLineTerm,Z:StatusLineTermNC"`)
 */
export const highlight = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "highlight") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "highlight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "highlight");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "highlight") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "highlight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "highlight");
  },
};

/**
 * This option specifies a function that will be called to
 * activate or deactivate the Input Method.  The value can be the name of
 * a function, a `lambda` or a `Funcref`. See `option-value-function` for
 * more information.
 * It is not used in the MS-Windows GUI version.
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 *
 * Example:
 *
 *     function ImActivateFunc(active)
 *       if a:active
 *         ... do something
 *       else
 *         ... do something
 *       endif
 *       " return value is not used
 *     endfunction
 *     set imactivatefunc=ImActivateFunc
 *
 * (default "")
 */
export const imactivatefunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "imactivatefunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "imactivatefunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imactivatefunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "imactivatefunc") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "imactivatefunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imactivatefunc");
  },
};

/**
 * *only available when compiled with `+xim` and
 * `+GUI_GTK`*
 *         Specifies the key that your Input Method in X-Windows uses for
 *         activation.  When this is specified correctly, vim can fully control
 *         IM with 'imcmdline', 'iminsert' and 'imsearch'.
 *         You can't use this option to change the activation key, the option
 *         tells Vim what the key is.
 *         Format:
 *                 [MODIFIER_FLAG-]KEY_STRING
 *
 *         These characters can be used for MODIFIER_FLAG (case is ignored):
 *                 S           Shift key
 *                 L           Lock key
 *                 C           Control key
 *                 1           Mod1 key
 *                 2           Mod2 key
 *                 3           Mod3 key
 *                 4           Mod4 key
 *                 5           Mod5 key
 *         Combinations are allowed, for example "S-C-space" or "SC-space" are
 *         both shift+ctrl+space.
 *         See `<X11/keysymdef.h>` and XStringToKeysym for KEY_STRING.
 *
 *         Example:
 *
 *             :set imactivatekey=S-space
 *
 *         "S-space" means shift+space.  This is the activation key for kinput2 +
 *         canna (Japanese), and ami (Korean).
 *
 * (default "")
 */
export const imactivatekey = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "imactivatekey") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "imactivatekey", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imactivatekey");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "imactivatekey") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "imactivatekey", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imactivatekey");
  },
};

/**
 * This option specifies a function that is called to obtain the status
 * of Input Method.  It must return a positive number when IME is active.
 * The value can be the name of a function, a `lambda` or a `Funcref`.
 * See `option-value-function` for more information.
 * It is not used in the MS-Windows GUI version.
 *
 * Example:
 *
 *     function ImStatusFunc()
 *       let is_active = ...do something
 *       return is_active ? 1 : 0
 *     endfunction
 *     set imstatusfunc=ImStatusFunc
 *
 * NOTE: This function is invoked very often.  Keep it fast.
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 *
 * (default "")
 */
export const imstatusfunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "imstatusfunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "imstatusfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imstatusfunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "imstatusfunc") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "imstatusfunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imstatusfunc");
  },
};

/**
 * This option specifies the input style of Input Method:
 * 0   use on-the-spot style
 * 1   over-the-spot style
 * See: `xim-input-style`
 *
 * For a long time on-the-spot style had been used in the GTK version of
 * vim, however, it is known that it causes troubles when using mappings,
 * `single-repeat`, etc.  Therefore over-the-spot style becomes the
 * default now.  This should work fine for most people, however if you
 * have any problem with it, try using on-the-spot style.
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 *
 * (default 1)
 *
 * *only available when compiled with `+xim` and `+GUI_GTK`*
 */
export const imstyle = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "imstyle") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "imstyle", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imstyle");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "imstyle") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "imstyle", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imstyle");
  },
};

/**
 * Makes Vim work in a way that Insert mode is the default mode.  Useful
 * if you want to use Vim as a modeless editor.  Used for `evim`.
 * These Insert mode commands will be useful:
 * - Use the cursor keys to move around.
 * - Use CTRL-O to execute one Normal mode command `i_CTRL-O`.  When
 *   this is a mapping, it is executed as if 'insertmode' was off.
 *   Normal mode remains active until the mapping is finished.
 * - Use CTRL-L to execute a number of Normal mode commands, then use
 *   `<Esc>` to get back to Insert mode.  Note that CTRL-L moves the cursor
 *   left, like `<Esc>` does when 'insertmode' isn't set.  `i_CTRL-L`
 *
 * These items change when 'insertmode' is set:
 * - when starting to edit of a file, Vim goes to Insert mode.
 * - `<Esc>` in Insert mode is a no-op and beeps.
 * - `<Esc>` in Normal mode makes Vim go to Insert mode.
 * - CTRL-L in Insert mode is a command, it is not inserted.
 * - CTRL-Z in Insert mode suspends Vim, see `CTRL-Z`.
 * However, when `<Esc>` is used inside a mapping, it behaves like
 * 'insertmode' was not set.  This was done to be able to use the same
 * mappings with 'insertmode' set or not set.
 * When executing commands with `:normal` 'insertmode' is not used.
 *
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 */
export const insertmode = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "insertmode") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "insertmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "insertmode");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "insertmode") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "insertmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "insertmode");
  },
};

/**
 * The key that is used for encrypting and decrypting the current buffer.
 * See `encryption` and 'cryptmethod'.
 * Careful: Do not set the key value by hand, someone might see the typed
 * key.  Use the `:X` command.  But you can make 'key' empty:
 *
 *     :set key=
 *
 * It is not possible to get the value of this option with ":set key" or
 * "echo &key".  This is to avoid showing it to someone who shouldn't
 * know.  It also means you cannot see it yourself once you have set it,
 * be careful not to make a typing error!
 * You can use "&key" in an expression to detect whether encryption is
 * enabled.  When 'key' is set it returns "*****" (five stars).
 *
 * (default "")
 *
 * *only available when compiled with the `+cryptv` feature*
 */
export const key = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "key") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "key", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "key");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "key") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "key", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "key");
  },
};

/**
 * This is just like 'langremap' but with the value inverted.  It only
 * exists for backwards compatibility.  When setting 'langremap' then
 * 'langnoremap' is set to the inverted value, and the other way around.
 *
 * (default off, set in `defaults.vim`)
 *
 * *only available when compiled with the `+langmap` feature*
 */
export const langnoremap = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "langnoremap") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "langnoremap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langnoremap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "langnoremap") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "langnoremap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langnoremap");
  },
};

/**
 * Specifies the name of the Lua shared library. The default is
 * DYNAMIC_LUA_DLL, which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+lua/dyn` feature*
 */
export const luadll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "luadll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "luadll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "luadll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "luadll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "luadll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "luadll");
  },
};

/**
 * No longer supported, as the Mac OS X GUI code was removed.
 *
 * (default on)
 *
 * *not supported*
 */
export const macatsui = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "macatsui") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "macatsui", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "macatsui");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "macatsui") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "macatsui", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "macatsui");
  },
};

/**
 * The maximum number of combining characters supported for displaying.
 * Only used when 'encoding' is "utf-8".
 * The default is OK for most languages.  Hebrew may require 4.
 * Maximum value is 6.
 * Even when this option is set to 2 you can still edit text with more
 * combining characters, you just can't see them.  Use `g8` or `ga`.
 * See `mbyte-combining`.
 *
 * (default 2)
 */
export const maxcombine = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "maxcombine") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxcombine", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxcombine");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "maxcombine") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxcombine", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxcombine");
  },
};

/**
 * Maximum amount of memory (in Kbyte) to use for one buffer.  When this
 * limit is reached allocating extra memory for a buffer will cause
 * other memory to be freed.
 * The maximum usable value is about 2000000.  Use this to work without a
 * limit.
 * The value is ignored when 'swapfile' is off.
 * Also see 'maxmemtot'.
 *
 * (default between 256 to 5120 (system
 *  dependent) or half the amount of memory
 *  available)
 */
export const maxmem = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "maxmem") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxmem", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxmem");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "maxmem") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxmem", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxmem");
  },
};

/**
 * Maximum amount of memory in Kbyte to use for all buffers together.
 * The maximum usable value is about 2000000 (2 Gbyte).  Use this to work
 * without a limit.
 * On 64 bit machines higher values might work.  But hey, do you really
 * need more than 2 Gbyte for text editing?  Keep in mind that text is
 * stored in the swap file, one can edit files > 2 Gbyte anyway.  We do
 * need the memory to store undo info.
 * Buffers with 'swapfile' off still count to the total amount of memory
 * used.
 * Also see 'maxmem'.
 *
 * (default between 2048 and 10240 (system
 *  dependent) or half the amount of memory
 *  available)
 */
export const maxmemtot = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "maxmemtot") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxmemtot", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxmemtot");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "maxmemtot") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxmemtot", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxmemtot");
  },
};

/**
 * Specifies the name of the MzScheme shared library. The default is
 * DYNAMIC_MZSCH_DLL which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * The value must be set in the `vimrc` script or earlier.  In the
 * startup, before the `load-plugins` step.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+mzscheme/dyn` feature*
 */
export const mzschemedll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "mzschemedll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mzschemedll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mzschemedll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "mzschemedll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mzschemedll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mzschemedll");
  },
};

/**
 * Specifies the name of the MzScheme GC shared library. The default is
 * DYNAMIC_MZGC_DLL which was specified at compile time.
 * The value can be equal to 'mzschemedll' if it includes the GC code.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+mzscheme/dyn` feature*
 */
export const mzschemegcdll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "mzschemegcdll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mzschemegcdll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mzschemegcdll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "mzschemegcdll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mzschemegcdll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mzschemegcdll");
  },
};

/**
 * The number of milliseconds between polls for MzScheme threads.
 * Negative or zero value means no thread scheduling.
 * NOTE: This option is set to the Vim default value when 'compatible'
 * is reset.
 *
 * (default 100)
 *
 * *not available when compiled without the `+mzscheme` feature*
 */
export const mzquantum = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "mzquantum") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "mzquantum", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mzquantum");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "mzquantum") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "mzquantum", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mzquantum");
  },
};

/**
 * This option was supported on RISC OS, which has been removed.
 *
 * (default: "")
 */
export const osfiletype = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "osfiletype") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "osfiletype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "osfiletype");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "osfiletype") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "osfiletype", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "osfiletype");
  },
};

/**
 * Specifies the name of the Perl shared library. The default is
 * DYNAMIC_PERL_DLL, which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+perl/dyn` feature*
 */
export const perldll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "perldll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "perldll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "perldll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "perldll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "perldll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "perldll");
  },
};

/**
 * When not empty a popup window is used for commands that would open a
 * preview window.  See `preview-popup`.
 * Not used for the insert completion info, add "popup" to
 * 'completeopt' for that.
 *
 * (default empty)
 *
 * *not available when compiled without the `+textprop` or `+quickfix` feature*
 */
export const previewpopup = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "previewpopup") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "previewpopup", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "previewpopup");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "previewpopup") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "previewpopup", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "previewpopup");
  },
};

/**
 * When on a ":" prompt is used in Ex mode.
 *
 * (default on)
 */
export const prompt = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "prompt") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "prompt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "prompt");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "prompt") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "prompt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "prompt");
  },
};

/**
 * Specifies the name of the Python 2.x shared library. The default is
 * DYNAMIC_PYTHON_DLL, which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+python/dyn` feature*
 */
export const pythondll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "pythondll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "pythondll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pythondll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "pythondll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "pythondll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pythondll");
  },
};

/**
 * Specifies the name of the Python 2.x home directory. When 'pythonhome'
 * and the PYTHONHOME environment variable are not set, PYTHON_HOME,
 * which was specified at compile time, will be used for the Python 2.x
 * home directory.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 *
 * *only available when compiled with the `+python/dyn` feature*
 */
export const pythonhome = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "pythonhome") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "pythonhome", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pythonhome");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "pythonhome") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "pythonhome", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pythonhome");
  },
};

/**
 * Specifies the name of the Python 3 shared library. The default is
 * DYNAMIC_PYTHON3_DLL, which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+python3/dyn` feature*
 */
export const pythonthreedll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "pythonthreedll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "pythonthreedll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pythonthreedll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "pythonthreedll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "pythonthreedll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pythonthreedll");
  },
};

/**
 * Specifies the name of the Python 3 home directory. When
 * 'pythonthreehome' and the PYTHONHOME environment variable are not set,
 * PYTHON3_HOME, which was specified at compile time, will be used for
 * the Python 3 home directory.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "")
 *
 * *only available when compiled with the `+python3/dyn` feature*
 */
export const pythonthreehome = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "pythonthreehome") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "pythonthreehome", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pythonthreehome");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "pythonthreehome") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "pythonthreehome", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pythonthreehome");
  },
};

/**
 * Allows for mappings to work recursively.  If you do not want this for
 * a single entry, use the :noremap[!] command.
 * NOTE: To avoid portability problems with Vim scripts, always keep
 * this option at the default "on".  Only switch it off when working with
 * old Vi scripts.
 *
 * (default on)
 */
export const remap = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "remap") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "remap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "remap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "remap") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "remap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "remap");
  },
};

/**
 * Select a text renderer and set its options.  The options depend on the
 * renderer.
 *
 * Syntax:
 *
 *     set rop=type:{renderer}(,{name}:{value})*
 *
 * Currently, only one optional renderer is available.
 *
 * render  behavior
 * directx Vim will draw text using DirectX (DirectWrite).  It makes
 *         drawn glyphs more beautiful than default GDI.
 *         It requires 'encoding' is "utf-8", and only works on
 *         MS-Windows Vista or newer version.
 *
 *         Options:
 *           name      meaning             type    value
 *           gamma     gamma               float   1.0 - 2.2 (maybe)
 *           contrast  enhancedContrast    float   (unknown)
 *           level     clearTypeLevel      float   (unknown)
 *           geom      pixelGeometry       int     0 - 2 (see below)
 *           renmode   renderingMode       int     0 - 6 (see below)
 *           taamode   textAntialiasMode   int     0 - 3 (see below)
 *           scrlines  Scroll Lines        int     (deprecated)
 *
 *         See this URL for detail (except for scrlines):
 *           https://msdn.microsoft.com/en-us/library/dd368190.aspx
 *
 *         For geom: structure of a device pixel.
 *           0 - DWRITE_PIXEL_GEOMETRY_FLAT
 *           1 - DWRITE_PIXEL_GEOMETRY_RGB
 *           2 - DWRITE_PIXEL_GEOMETRY_BGR
 *
 *         See this URL for detail:
 *           https://msdn.microsoft.com/en-us/library/dd368114.aspx
 *
 *         For renmode: method of rendering glyphs.
 *           0 - DWRITE_RENDERING_MODE_DEFAULT
 *           1 - DWRITE_RENDERING_MODE_ALIASED
 *           2 - DWRITE_RENDERING_MODE_GDI_CLASSIC
 *           3 - DWRITE_RENDERING_MODE_GDI_NATURAL
 *           4 - DWRITE_RENDERING_MODE_NATURAL
 *           5 - DWRITE_RENDERING_MODE_NATURAL_SYMMETRIC
 *           6 - DWRITE_RENDERING_MODE_OUTLINE
 *
 *         See this URL for detail:
 *           https://msdn.microsoft.com/en-us/library/dd368118.aspx
 *
 *         For taamode: antialiasing mode used for drawing text.
 *           0 - D2D1_TEXT_ANTIALIAS_MODE_DEFAULT
 *           1 - D2D1_TEXT_ANTIALIAS_MODE_CLEARTYPE
 *           2 - D2D1_TEXT_ANTIALIAS_MODE_GRAYSCALE
 *           3 - D2D1_TEXT_ANTIALIAS_MODE_ALIASED
 *
 *         See this URL for detail:
 *           https://msdn.microsoft.com/en-us/library/dd368170.aspx
 *
 *         For scrlines:
 *         This was used for optimizing scrolling behavior, however this
 *         is now deprecated.  If specified, it is simply ignored.
 *
 *         Example:
 *
 *             set encoding=utf-8
 *             set gfn=Ricty_Diminished:h12
 *             set rop=type:directx
 *
 *         If select a raster font (Courier, Terminal or FixedSys which
 *         have ".fon" extension in file name) to 'guifont', it will be
 *         drawn by GDI as a fallback.
 *
 *         NOTE: It is known that some fonts and options combination
 *         causes trouble on drawing glyphs.
 *
 *           - 'renmode:5' and 'renmode:6' will not work with some
 *             special made fonts (True-Type fonts which includes only
 *             bitmap glyphs).
 *           - 'taamode:3' will not work with some vector fonts.
 *
 *         NOTE: With this option, you can display colored emoji
 *         (emoticon) in Windows 8.1 or later.  To display colored emoji,
 *         there are some conditions which you should notice.
 *
 *           - If your font includes non-colored emoji already, it will
 *             be used.
 *           - If your font doesn't have emoji, the system chooses an
 *             alternative symbol font.  On Windows 10, "Segoe UI Emoji"
 *             will be used.
 *           - When this alternative font didn't have fixed width glyph,
 *             emoji might be rendered beyond the bounding box of drawing
 *             cell.
 *
 * Other render types are currently not supported.
 *
 * (default: empty)
 *
 * *only available when compiled with GUI and DIRECTX on MS-Windows*
 */
export const renderoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "renderoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "renderoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "renderoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "renderoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "renderoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "renderoptions");
  },
};

/**
 * When set, the screen contents is restored when exiting Vim.  This also
 * happens when executing external commands.
 *
 * For non-Windows Vim: You can set or reset the 't_ti' and 't_te'
 * options in your .vimrc.  To disable restoring:
 *         set t_ti= t_te=
 * To enable restoring (for an xterm):
 *         set t_ti=^[7^[[r^[[?47h t_te=^[[?47l^[8
 * (Where ^[ is an `<Esc>`, type CTRL-V `<Esc>` to insert it)
 *
 * (default on)
 *
 * *only in MS-Windows console version*
 */
export const restorescreen = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "restorescreen") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "restorescreen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "restorescreen");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "restorescreen") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "restorescreen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "restorescreen");
  },
};

/**
 * Specifies the name of the Ruby shared library. The default is
 * DYNAMIC_RUBY_DLL, which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: depends on the build)
 *
 * *only available when compiled with the `+ruby/dyn` feature*
 */
export const rubydll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "rubydll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "rubydll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rubydll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "rubydll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "rubydll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "rubydll");
  },
};

/**
 * When using the scroll wheel and this option is set, the window under
 * the mouse pointer is scrolled.  With this option off the current
 * window is scrolled.
 * Systems other than MS-Windows always behave like this option is on.
 *
 * (default off)
 *
 * *only for MS-Windows GUI*
 */
export const scrollfocus = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "scrollfocus") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "scrollfocus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrollfocus");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "scrollfocus") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "scrollfocus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrollfocus");
  },
};

/**
 * On the Amiga this option influences the way how the commands work
 * which use a shell.
 * 0 and 1: always use the shell
 * 2 and 3: use the shell only to filter lines
 * 4 and 5: use shell only for ':sh' command
 * When not using the shell, the command is executed directly.
 *
 * 0 and 2: use "shell 'shellcmdflag' cmd" to start external commands
 * 1 and 3: use "shell cmd" to start external commands
 *
 * (default 0)
 *
 * *only for the Amiga*
 */
export const shelltype = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "shelltype") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "shelltype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shelltype");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "shelltype") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "shelltype", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shelltype");
  },
};

/**
 * Filenames are assumed to be 8 characters plus one extension of 3
 * characters.  Multiple dots in file names are not allowed.  When this
 * option is on, dots in file names are replaced with underscores when
 * adding an extension (`".~"` or ".swp").  This option is useful
 * when editing files on an MS-DOS compatible filesystem, e.g., messydos
 * or crossdos.
 *
 * (default off)
 */
export const shortname = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "shortname") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shortname", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shortname");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "shortname") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "shortname", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "shortname");
  },
};

/**
 * The value of this option determines the scroll behavior when opening,
 * closing or resizing horizontal splits. When "on", splitting a window
 * horizontally will keep the same relative cursor position in the old and
 * new window, as well windows that are resized. When "off", scrolling
 * will be avoided to stabilize the window content. Instead, the cursor
 * position will be changed when necessary. In this case, the jumplist
 * will be populated with the previous cursor position. Scrolling cannot
 * be guaranteed to be avoided when 'wrap' is enabled.
 *
 * (default on)
 */
export const splitscroll = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "splitscroll") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "splitscroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "splitscroll");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "splitscroll") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "splitscroll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "splitscroll");
  },
};

/**
 * When this option is not empty a swap file is synced to disk after
 * writing to it.  This takes some time, especially on busy unix systems.
 * When this option is empty parts of the swap file may be in memory and
 * not written to disk.  When the system crashes you may lose more work.
 * On Unix the system does a sync now and then without Vim asking for it,
 * so the disadvantage of setting this option off is small.  On some
 * systems the swap file will not be written at all.  For a unix system
 * setting it to "sync" will use the sync() call instead of the default
 * fsync(), which may work better on some systems.
 * The 'fsync' option is used for the actual file.
 *
 * (default "fsync")
 */
export const swapsync = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "swapsync") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "swapsync", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "swapsync");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "swapsync") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "swapsync", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "swapsync");
  },
};

/**
 * Specifies the name of the Tcl shared library. The default is
 * DYNAMIC_TCL_DLL, which was specified at compile time.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default depends on the build)
 *
 * *only available when compiled with the `+tcl/dyn` feature*
 */
export const tcldll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "tcldll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tcldll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tcldll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "tcldll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tcldll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tcldll");
  },
};

/**
 * Name of the terminal.  Used for choosing the terminal control
 * characters.  Environment variables are expanded `:set_env`.
 * For example:
 *
 *     :set term=$TERM
 *
 * See `termcap`.
 *
 * (default is $TERM, if that fails:
 *  in the GUI: "builtin_gui"
 *  on Amiga: "amiga"
 *  on Haiku: "xterm"
 *  on Mac: "mac-ansi"
 *  on Unix: "ansi"
 *  on VMS: "ansi"
 *  on Win 32: "win32")
 */
export const term = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "term") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "term", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "term");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "term") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "term", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "term");
  },
};

/**
 * Encoding used for the terminal.  This specifies what character
 * encoding the keyboard produces and the display will understand.  For
 * the GUI it only applies to the keyboard ('encoding' is used for the
 * display).
 *
 * Note: This does not apply to the GTK+ GUI.  After the GUI has been
 * successfully initialized, 'termencoding' is forcibly set to "utf-8".
 * Any attempts to set a different value will be rejected, and an error
 * message is shown.
 * For the Win32 GUI and console versions 'termencoding' is not used,
 * because the Win32 system always passes Unicode characters.
 * When empty, the same encoding is used as for the 'encoding' option.
 * This is the normal value.
 * Not all combinations for 'termencoding' and 'encoding' are valid.  See
 * `encoding-table`.
 * The value for this option must be supported by internal conversions or
 * iconv().  When this is not possible no conversion will be done and you
 * will probably experience problems with non-ASCII characters.
 * Example: You are working with the locale set to euc-jp (Japanese) and
 * want to edit a UTF-8 file:
 *
 *     :let &termencoding = &encoding
 *     :set encoding=utf-8
 *
 * You need to do this when your system has no locale support for UTF-8.
 *
 * (default ""; with GTK+ GUI: "utf-8")
 */
export const termencoding = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "termencoding") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "termencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termencoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "termencoding") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "termencoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termencoding");
  },
};

/**
 * The key that starts a CTRL-W command in a terminal window.  Other keys
 * are sent to the job running in the window.
 * The `<>` notation can be used, e.g.:
 *
 *     :set termwinkey=<C-L>
 *
 * The string must be one key stroke but can be multiple bytes.
 * When not set CTRL-W is used, so that CTRL-W : gets you to the command
 * line.  If 'termwinkey' is set to CTRL-L then CTRL-L : gets you to the
 * command line.
 *
 * (default "")
 */
export const termwinkey = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "termwinkey") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "termwinkey", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termwinkey");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "termwinkey") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "termwinkey", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "termwinkey");
  },
};

/**
 * Number of scrollback lines to keep.  When going over this limit the
 * first 10% of the scrollback lines are deleted.  This is just to reduce
 * the memory usage.  See `Terminal-Normal`.
 * Also used as a limit for text sent to the terminal in one write,
 * multiplied by the number of columns times 3 (average number of bytes
 * per cell).
 *
 * (default 10000)
 *
 * *not available when compiled without the `+terminal` feature*
 */
export const termwinscroll = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "termwinscroll") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "termwinscroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termwinscroll");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "termwinscroll") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "termwinscroll", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "termwinscroll");
  },
};

/**
 * Size used when opening the `terminal` window.  Format:
 *         **{rows}**x**{columns}** or **{rows}*****{columns}**.
 * - When empty the terminal gets the size from the window.
 * - When set with a "x" (e.g., "24x80") the terminal size is not
 *   adjusted to the window size.  If the window is smaller only the
 *   top-left part is displayed.
 * - When set with a "*" (e.g., "10*50") the terminal size follows the
 *   window size, but will not be smaller than the specified rows and/or
 *   columns.
 * - When rows is zero then use the height of the window.
 * - When columns is zero then use the width of the window.
 * - Using "0x0" or "0*0" is the same as empty.
 * - Can be overruled in the `term_start()` options with "term_rows" and
 *   "term_cols".
 *
 * Examples:
 *   "30x0" uses 30 rows and the current window width.
 *   "20*0" uses at least 20 rows and the current window width.
 *   "0*40" uses the current window height and at least 40 columns.
 * Note that the command running in the terminal window may still change
 * the size of the terminal.  In that case the Vim window will be
 * adjusted to that size, if possible.
 *
 * (default "")
 */
export const termwinsize = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "termwinsize") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "termwinsize", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termwinsize");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "termwinsize") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "termwinsize", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "termwinsize");
  },
};

/**
 * Specify the virtual console (pty) used when opening the terminal
 * window.
 *
 * Possible values are:
 *     ""          use ConPTY if it is stable, winpty otherwise
 *     "winpty"    use winpty, fail if not supported
 *     "conpty"    use `ConPTY`, fail if not supported
 *
 * `ConPTY` support depends on the platform.  Windows 10 October 2018
 * Update is the first version that supports ConPTY, however it is still
 * considered unstable.  ConPTY might become stable in the next release
 * of Windows 10.  winpty support needs to be installed.  If neither is
 * supported then you cannot open a terminal window.
 *
 * (default "")
 *
 * *only available when compiled with the `terminal` feature on MS-Windows*
 */
export const termwintype = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "termwintype") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "termwintype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termwintype");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "termwintype") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "termwintype", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termwintype");
  },
};

/**
 * When set: Add 's' flag to 'shortmess' option (this makes the message
 * for a search that hits the start or end of the file not being
 * displayed).  When reset: Remove 's' flag from 'shortmess' option.  *Vi
 * shortens a lot of messages*
 *
 * (default off)
 */
export const terse = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "terse") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "terse", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "terse");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "terse") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "terse", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "terse");
  },
};

/**
 * This option is obsolete.  Use 'fileformats'.
 * For backwards compatibility, when 'textauto' is set, 'fileformats' is
 * set to the default value for the current system.  When 'textauto' is
 * reset, 'fileformats' is made empty.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 *
 * (Vim default: on, Vi default: off)
 */
export const textauto = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "textauto") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "textauto", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "textauto");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "textauto") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "textauto", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "textauto");
  },
};

/**
 * This option is obsolete.  Use 'fileformat'.
 * For backwards compatibility, when 'textmode' is set, 'fileformat' is
 * set to "dos".  When 'textmode' is reset, 'fileformat' is set to
 * "unix".
 *
 * (Win32: default on,
 *  others: default off)
 */
export const textmode = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "textmode") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "textmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "textmode");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "textmode") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "textmode", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "textmode");
  },
};

/**
 * The contents of this option controls various toolbar settings.  The
 * possible values are:
 *         icons           Toolbar buttons are shown with icons.
 *         text            Toolbar buttons shown with text.
 *         horiz           Icon and text of a toolbar button are
 *                         horizontally arranged.  *only in GTK+ 2 GUI*
 *         tooltips        Tooltips are active for toolbar buttons.
 * Tooltips refer to the popup help text which appears after the mouse
 * cursor is placed over a toolbar button for a brief moment.
 *
 * If you want the toolbar to be shown with icons as well as text, do the
 * following:
 *
 *     :set tb=icons,text
 *
 * Motif cannot display icons and text at the same time.  They
 * will show icons if both are requested.
 *
 * If none of the strings specified in 'toolbar' are valid or if
 * 'toolbar' is empty, this option is ignored.  If you want to disable
 * the toolbar, you need to set the 'guioptions' option.  For example:
 *
 *     :set guioptions-=T
 *
 * Also see `gui-toolbar`.
 *
 * (default "icons,tooltips")
 *
 * *only for `+GUI_GTK`, `+GUI_Motif` and `+GUI_Photon`*
 */
export const toolbar = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "toolbar") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "toolbar", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "toolbar");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "toolbar") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "toolbar", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "toolbar");
  },
};

/**
 * Controls the size of toolbar icons.  The possible values are:
 *         tiny            Use tiny icons.
 *         small           Use small icons (default).
 *         medium          Use medium-sized icons.
 *         large           Use large icons.
 *         huge            Use even larger icons.
 *         giant           Use very big icons.
 * The exact dimensions in pixels of the various icon sizes depend on
 * the current theme.  Common dimensions are giant=48x48, huge=32x32,
 * large=24x24, medium=24x24, small=20x20 and tiny=16x16.
 *
 * If 'toolbariconsize' is empty, the global default size as determined
 * by user preferences or the current theme is used.
 *
 * (default "small")
 *
 * *only in the GTK+ GUI*
 */
export const toolbariconsize = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "toolbariconsize") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "toolbariconsize", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "toolbariconsize");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "toolbariconsize") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "toolbariconsize", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "toolbariconsize");
  },
};

/**
 * When on, the builtin termcaps are searched before the external ones.
 * When off the builtin termcaps are searched after the external ones.
 * When this option is changed, you should set the 'term' option next for
 * the change to take effect, for example:
 *
 *     :set notbi term=$TERM
 *
 * See also `termcap`.
 * Rationale: The default for this option is "on", because the builtin
 * termcap entries are generally better (many systems contain faulty
 * xterm entries...).
 *
 * (default on)
 */
export const ttybuiltin = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "ttybuiltin") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ttybuiltin", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttybuiltin");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "ttybuiltin") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ttybuiltin", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttybuiltin");
  },
};

/**
 * Indicates a fast terminal connection.  More characters will be sent to
 * the screen for redrawing, instead of using insert/delete line
 * commands.  Improves smoothness of redrawing when there are multiple
 * windows and the terminal does not support a scrolling region.
 * Also enables the extra writing of characters at the end of each screen
 * line for lines that wrap.  This helps when using copy/paste with the
 * mouse in an xterm and other terminals.
 *
 * (default off, on when 'term' is xterm, hpterm,
 *  sun-cmd, screen, rxvt, dtterm or
 *  iris-ansi; also on when running Vim in
 *  a DOS console)
 */
export const ttyfast = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "ttyfast") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ttyfast", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttyfast");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "ttyfast") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ttyfast", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttyfast");
  },
};

/**
 * Name of the terminal type for which mouse codes are to be recognized.
 * Currently these strings are valid:
 *
 *    xterm        xterm-like mouse handling.  The mouse generates
 *                 `"<Esc>[Mscr"`, where "scr" is three bytes:
 *                         "s"  = button state
 *                         "c"  = column plus 33
 *                         "r"  = row plus 33
 *                 This only works up to 223 columns!  See "dec",
 *                 "urxvt", and "sgr" for solutions.
 *    xterm2       Works like "xterm", but with the xterm reporting the
 *                 mouse position while the mouse is dragged.  This works
 *                 much faster and more precise.  Your xterm must at
 *                 least at patchlevel 88 / XFree 3.3.3 for this to
 *                 work.  See below for how Vim detects this
 *                 automatically.
 *
 *    netterm      NetTerm mouse handling.  A left mouse click generates
 *                 `"<Esc>}r,c<CR>"`, where "r,c" are two decimal numbers
 *                 for the row and column.  No other mouse events are
 *                 supported.
 *
 *    dec          DEC terminal mouse handling.  The mouse generates a
 *                 rather complex sequence, starting with `"<Esc>["`.
 *                 This is also available for an Xterm, if it was
 *                 configured with "--enable-dec-locator".
 *
 *    jsbterm      JSB term mouse handling.
 *
 *    pterm        QNX pterm mouse handling.
 *
 *    urxvt        Mouse handling for the urxvt (rxvt-unicode) terminal.
 *                 The mouse works only if the terminal supports this
 *                 encoding style, but it does not have 223 columns limit
 *                 unlike "xterm" or "xterm2".
 *
 *    sgr          Mouse handling for the terminal that emits SGR-styled
 *                 mouse reporting.  The mouse works even in columns
 *                 beyond 223.  This option is backward compatible with
 *                 "xterm2" because it can also decode "xterm2" style
 *                 mouse codes.
 *
 * The mouse handling must be enabled at compile time `+mouse_xterm`
 * `+mouse_dec` `+mouse_netterm` `+mouse_jsbterm` `+mouse_urxvt`
 * `+mouse_sgr`.
 * Only "xterm"(2) is really recognized.  NetTerm mouse codes are always
 * recognized, if enabled at compile time.  DEC terminal mouse codes
 * are recognized if enabled at compile time, and 'ttymouse' is not
 * "xterm", "xterm2", "urxvt" or "sgr" (because dec mouse codes conflict
 * with them).
 * This option is automatically set to "xterm", when the 'term' option is
 * set to a name that starts with "xterm", "mlterm", "screen", "tmux",
 * "st" (full match only), "st-" or "stterm", and 'ttymouse' is not set
 * already.
 * Additionally, if vim is compiled with the `+termresponse` feature and
 * `t_RV` is set to the escape sequence to request the xterm version
 * number, more intelligent detection is done.
 * The "xterm2" value will be set if the xterm version is reported to be
 * from 95 to 276.  The "sgr" value will be set if Vim detects Mac
 * Terminal.app, iTerm2 or mintty, and when the xterm version is 277 or
 * higher.
 * If you do not want 'ttymouse' to be set to "xterm2" or "sgr"
 * automatically, set t_RV to an empty string:
 *
 *     :set t_RV=
 *
 * (default depends on 'term')
 *
 * *only in Unix and VMS, doesn't work in the GUI; not available when compiled without `+mouse`*
 */
export const ttymouse = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "ttymouse") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "ttymouse", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttymouse");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "ttymouse") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "ttymouse", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttymouse");
  },
};

/**
 * Maximum number of lines to scroll the screen.  If there are more lines
 * to scroll the window is redrawn.  For terminals where scrolling is
 * very slow and redrawing is not slow this can be set to a small number,
 * e.g., 3, to speed up displaying.
 *
 * (default 999)
 */
export const ttyscroll = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "ttyscroll") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "ttyscroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttyscroll");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "ttyscroll") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "ttyscroll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttyscroll");
  },
};

/**
 * Alias for 'term', see above.
 *
 * (default from $TERM)
 */
export const ttytype = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "ttytype") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "ttytype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttytype");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "ttytype") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "ttytype", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttytype");
  },
};

/**
 * When non-empty, the viminfo file is read upon startup and written
 * when exiting Vim (see `viminfo-file`). Except when 'viminfofile' is
 * "NONE".
 * The string should be a comma-separated list of parameters, each
 * consisting of a single character identifying the particular parameter,
 * followed by a number or string which specifies the value of that
 * parameter.  If a particular character is left out, then the default
 * value is used for that parameter.  The following is a list of the
 * identifying characters and the effect of their value.
 * CHAR    VALUE
 *
 * !       When included, save and restore global variables that start
 *         with an uppercase letter, and don't contain a lowercase
 *         letter.  Thus "KEEPTHIS and "K_L_M" are stored, but "KeepThis"
 *         and "_K_L_M" are not.  Nested List and Dict items may not be
 *         read back correctly, you end up with an empty item.
 *
 * "       Maximum number of lines saved for each register.  Old name of
 *         the `'<'` item, with the disadvantage that you need to put a
 *         backslash before the ", otherwise it will be recognized as the
 *         start of a comment!
 *
 * %       When included, save and restore the buffer list.  If Vim is
 *         started with a file name argument, the buffer list is not
 *         restored.  If Vim is started without a file name argument, the
 *         buffer list is restored from the viminfo file.  Quickfix
 *         ('buftype'), unlisted ('buflisted'), unnamed and buffers on
 *         removable media (`viminfo-r`) are not saved.
 *         When followed by a number, the number specifies the maximum
 *         number of buffers that are stored.  Without a number all
 *         buffers are stored.
 *
 * '       Maximum number of previously edited files for which the marks
 *         are remembered.  This parameter must always be included when
 *         'viminfo' is non-empty.
 *         Including this item also means that the `jumplist` and the
 *         `changelist` are stored in the viminfo file.
 *
 * /       Maximum number of items in the search pattern history to be
 *         saved.  If non-zero, then the previous search and substitute
 *         patterns are also saved.  When not included, the value of
 *         'history' is used.
 *
 * :       Maximum number of items in the command-line history to be
 *         saved.  When not included, the value of 'history' is used.
 *
 * <       Maximum number of lines saved for each register.  If zero then
 *         registers are not saved.  When not included, all lines are
 *         saved.  '"' is the old name for this item.
 *         Also see the 's' item below: limit specified in Kbyte.
 *
 * @       Maximum number of items in the input-line history to be
 *         saved.  When not included, the value of 'history' is used.
 *
 * c       When included, convert the text in the viminfo file from the
 *         'encoding' used when writing the file to the current
 *         'encoding'.  See `viminfo-encoding`.
 *
 * f       Whether file marks need to be stored.  If zero, file marks ('0
 *         to '9, 'A to 'Z) are not stored.  When not present or when
 *         non-zero, they are all stored.  '0 is used for the current
 *         cursor position (when exiting or when doing ":wviminfo").
 *
 * h       Disable the effect of 'hlsearch' when loading the viminfo
 *         file.  When not included, it depends on whether ":nohlsearch"
 *         has been used since the last search command.
 *
 * n       Name of the viminfo file.  The name must immediately follow
 *         the 'n'.  Must be at the end of the option!  If the
 *         'viminfofile' option is set, that file name overrides the one
 *         given here with 'viminfo'.  Environment variables are
 *         expanded when opening the file, not when setting the option.
 *
 * r       Removable media.  The argument is a string (up to the next
 *         ',').  This parameter can be given several times.  Each
 *         specifies the start of a path for which no marks will be
 *         stored.  This is to avoid removable media.  For MS-Windows you
 *         could use "ra:,rb:", for Amiga "rdf0:,rdf1:,rdf2:".  You can
 *         also use it for temp files, e.g., for Unix: "r/tmp".  Case is
 *         ignored.  Maximum length of each 'r' argument is 50
 *         characters.
 *
 * s       Maximum size of an item in Kbyte.  If zero then registers are
 *         not saved.  Currently only applies to registers.  The default
 *         "s10" will exclude registers with more than 10 Kbyte of text.
 *         Also see the `'<'` item above: line count limit.
 *
 * Example:
 *
 *     :set viminfo='50,<1000,s100,:0,n~/vim/viminfo
 *
 * '50             Marks will be remembered for the last 50 files you
 *                 edited.
 * <1000           Contents of registers (up to 1000 lines each) will be
 *                 remembered.
 * s100            Registers with more than 100 Kbyte text are skipped.
 * :0              Command-line history will not be saved.
 * `n~/vim/viminfo`  The name of the file to use is `"~/vim/viminfo"`.
 * no /            Since '/' is not specified, the default will be used,
 *                 that is, save all of the search history, and also the
 *                 previous search and substitute patterns.
 * no %            The buffer list will not be saved nor read back.
 * no h            'hlsearch' highlighting will be restored.
 *
 * When setting 'viminfo' from an empty value you can use `:rviminfo` to
 * load the contents of the file, this is not done automatically.
 *
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 * NOTE: This option is set to the Vim default value when 'compatible'
 * is reset.
 *
 * (Vi default: "", Vim default for
 *  MS-Windows: '100,<50,s10,h,rA:,rB:,
 *  for Amiga: '100,<50,s10,h,rdf0:,rdf1:,rdf2:
 *  for others: '100,<50,s10,h)
 *
 * *not available when compiled without the `+viminfo` feature*
 */
export const viminfo = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "viminfo") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "viminfo", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "viminfo");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "viminfo") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "viminfo", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "viminfo");
  },
};

/**
 * When non-empty, overrides the file name used for viminfo.
 * When equal to "NONE" no viminfo file will be read or written.
 * This option can be set with the `-i` command line flag.  The `--clean`
 * command line flag sets it to "NONE".
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: "")
 *
 * *not available when compiled without the `+viminfo` feature*
 */
export const viminfofile = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "viminfofile") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "viminfofile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "viminfofile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "viminfofile") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "viminfofile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "viminfofile");
  },
};

/**
 * This option has the same effect as the 't_xs' terminal option.
 * It is provided for backwards compatibility with version 4.x.
 * Setting 'weirdinvert' has the effect of making 't_xs' non-empty, and
 * vice versa.  Has no effect when the GUI is running.
 *
 * (default off)
 */
export const weirdinvert = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "weirdinvert") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "weirdinvert", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "weirdinvert");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "weirdinvert") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "weirdinvert", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "weirdinvert");
  },
};

/**
 * Highlight group name to use for this window instead of the Normal
 * color `hl-Normal`.
 *
 * (default empty)
 */
export const wincolor = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "wincolor") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wincolor", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wincolor");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "wincolor") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "wincolor", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "wincolor");
  },
};

/**
 * Specifies the name of the winpty shared library, used for the
 * `:terminal` command. The default depends on whether Vim was built as a
 * 32-bit or 64-bit executable.  If not found, "winpty.dll" is tried as
 * a fallback.
 * Environment variables are expanded `:set_env`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "winpty32.dll" or "winpty64.dll")
 *
 * *only available when compiled with the `terminal` feature on MS-Windows*
 */
export const winptydll = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "winptydll") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "winptydll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winptydll");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "winptydll") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "winptydll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winptydll");
  },
};

/**
 * When detecting xterm patchlevel 141 or higher with the termresponse
 * mechanism and this option is set, Vim will request the actual terminal
 * key codes and number of colors from the terminal.  This takes care of
 * various configuration options of the terminal that cannot be obtained
 * from the termlib/terminfo entry, see `xterm-codes`.
 * A side effect may be that t_Co changes and Vim will redraw the
 * display.
 *
 * (default on)
 */
export const xtermcodes = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "xtermcodes") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "xtermcodes", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "xtermcodes");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "xtermcodes") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "xtermcodes", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "xtermcodes");
  },
};
