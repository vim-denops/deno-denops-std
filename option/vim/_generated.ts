// NOTE: This file is generated. Do NOT modify it manually.
import type {
  BufferLocalOption,
  GlobalOption,
  GlobalOrBufferLocalOption,
  WindowLocalOption,
} from "../types.ts";
import { BooleanOption, NumberOption, StringOption } from "../_utils.ts";

/**
 * The ASCII code for the first letter of the Hebrew alphabet.  The
 * routine that maps the keyboard in Hebrew mode, both in Insert mode
 * (when hkmap is set) and on the command-line (when hitting CTRL-_)
 * outputs the Hebrew characters in the range [aleph..aleph+26].
 * aleph=128 applies to PC code, and aleph=224 applies to ISO 8859-8.
 * See `rileft.txt`.
 *
 * (default 128 for MS-Windows, 224 otherwise)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const aleph: GlobalOption<number> = new NumberOption("aleph");

/**
 * This option was for using Farsi, which has been removed.  See
 * `farsi.txt`.
 *
 * (default off)
 *
 * *only available when compiled with the `+farsi` feature*
 */
export const altkeymap: GlobalOption<boolean> = new BooleanOption("altkeymap");

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
export const antialias: GlobalOption<boolean> = new BooleanOption("antialias");

/**
 * When on, Vim shows a completion menu as you type, similar to using
 * `i_CTRL-N`, but triggered automatically.  See `ins-autocompletion`.
 *
 * (default off)
 *
 * *only available on platforms with timing support*
 */
export const autocomplete: GlobalOption<boolean> = new BooleanOption(
  "autocomplete",
);

/**
 * Delay in milliseconds before the autocomplete menu appears after
 * typing. If you prefer it not to open too quickly, set this value
 * slightly above your typing speed. See `ins-autocompletion`.
 *
 * (default 0)
 */
export const autocompletedelay: GlobalOption<number> = new NumberOption(
  "autocompletedelay",
);

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
export const autoshelldir: GlobalOption<boolean> = new BooleanOption(
  "autoshelldir",
);

/**
 * Delay in milliseconds before a balloon may pop up.  See `balloon-eval`.
 *
 * (default: 600)
 *
 * *only available when compiled with the `+balloon_eval` feature*
 */
export const balloondelay: GlobalOption<number> = new NumberOption(
  "balloondelay",
);

/**
 * Switch on the `balloon-eval` functionality for the GUI.
 *
 * (default off)
 *
 * *only available when compiled with the `+balloon_eval` feature*
 */
export const ballooneval: GlobalOption<boolean> = new BooleanOption(
  "ballooneval",
);

/**
 * Switch on the `balloon-eval` functionality for the terminal.
 *
 * (default off)
 *
 * *only available when compiled with the `+balloon_eval_term` feature*
 */
export const balloonevalterm: GlobalOption<boolean> = new BooleanOption(
  "balloonevalterm",
);

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
 *     set ballooneval balloonevalterm
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
export const balloonexpr: GlobalOrBufferLocalOption<string> = new StringOption(
  "balloonexpr",
);

/**
 * This was for MS-DOS and is no longer supported.
 *
 * (default on)
 *
 * *only for MS-DOS*
 */
export const bioskey: GlobalOption<boolean> = new BooleanOption("bioskey");

/**
 * Which directory to use for the file browser:
 *    last         Use same directory as with last file browser, where a
 *                 file was opened or saved.
 *    buffer       Use the directory of the related buffer.
 *    current      Use the current directory.
 *    **{path}**       Use the specified directory
 *
 * (default: "last")
 *
 * *only for Motif, GTK, Mac and Win32 GUI*
 */
export const browsedir: GlobalOption<string> = new StringOption("browsedir");

/**
 * Number of quickfix lists that should be remembered for the quickfix
 * stack.  Must be between 1 and 100.  If the option is set to a value
 * that is lower than the amount of entries in the quickfix list stack,
 * entries will be removed starting from the oldest one.  If the current
 * quickfix list was removed, then the quickfix list at top of the stack
 * (the most recently created) will be used in its place.  For additional
 * info, see `quickfix-stack`.
 *
 * (default: 10)
 *
 * *only available when compiled with the `+quickfix` feature*
 */
export const chistory: GlobalOption<number> = new NumberOption("chistory");

/**
 * Specifies which method of accessing the system clipboard is used,
 * depending on which method works first or is available.  Supported
 * methods are:
 *         wayland         Wayland selections
 *         x11             X11 selections
 *
 * Note: This option is ignored when either the GUI is running or if Vim
 * is run on a system without Wayland or X11 support, such as Windows or
 * macOS.  The GUI or system way of accessing the clipboard is always
 * used instead.
 *
 * The option value is a list of comma separated items.  The list is
 * parsed left to right in order, and the first method that Vim
 * determines is available or is working is used as the actual method for
 * accessing the clipboard.
 *
 * The current method that is being used can be found in the `v:clipmethod`
 * variable.
 *
 * (default for Unix: "wayland,x11",
 *  for VMS: "x11",
 *  otherwise: "")
 *
 * *only when the `+xterm_clipboard` or `+wayland_clipboard` features are included*
 */
export const clipmethod: GlobalOption<string> = new StringOption("clipmethod");

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
 *                                 this also disables `modifyOtherKeys`
 *                                 and `xterm-bracketed-paste`
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
 * 'softtabstop'   + 0             no soft tab stops
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
export const compatible: GlobalOption<boolean> = new BooleanOption(
  "compatible",
);

/**
 * A comma-separated list of strings to enable fuzzy collection for
 * specific `ins-completion` modes, affecting how matches are gathered
 * during completion.  For specified modes, fuzzy matching is used to
 * find completion candidates instead of the standard prefix-based
 * matching.  This option can contain the following values:
 *
 * keyword         keywords in the current file    `i_CTRL-X_CTRL-N`
 *                 keywords with flags ".", "w",   `i_CTRL-N` `i_CTRL-P`
 *                 "b", "u", "U" and "k**{dict}**" in 'complete'
 *                 keywords in 'dictionary'        `i_CTRL-X_CTRL-K`
 *
 * files           file names                      `i_CTRL-X_CTRL-F`
 *
 * whole_line      whole lines                     `i_CTRL-X_CTRL-L`
 *
 * When using the 'completeopt' "longest" option value, fuzzy collection
 * can identify the longest common string among the best fuzzy matches
 * and insert it automatically.
 *
 * (default: empty)
 */
export const completefuzzycollect: GlobalOption<string> = new StringOption(
  "completefuzzycollect",
);

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
export const completepopup: GlobalOption<string> = new StringOption(
  "completepopup",
);

/**
 * This was for MS-DOS and is no longer supported.
 *
 * (default off)
 */
export const conskey: GlobalOption<boolean> = new BooleanOption("conskey");

/**
 * Method used for encryption when the buffer is written to a file:
 *
 *    zip          PkZip compatible method.  A weak kind of encryption.
 *                 Backwards compatible with Vim 7.2 and older.
 *                 Only use if you need to be backwards compatible.
 *
 *    blowfish     Blowfish method.  Medium strong encryption but it has
 *                 an implementation flaw.  Requires Vim 7.3 or later,
 *                 files can NOT be read by Vim 7.2 and older.  This adds
 *                 a "seed" to the file, every time you write the file
 *                 the encrypted bytes will be different.
 *                 Obsolete, please do no longer use.
 *
 *    blowfish2    Blowfish method.  Medium strong encryption.  Requires
 *                 Vim 7.4.401 or later, files can NOT be read by Vim 7.3
 *                 and older.  This adds a "seed" to the file, every time
 *                 you write the file the encrypted bytes will be
 *                 different.  The whole undo file is encrypted, not just
 *                 the pieces of text.
 *
 *    xchacha20    XChaCha20 Cipher with Poly1305 Message Authentication
 *                 Code.  Medium strong to strong encryption.
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
 *                 CAREFUL: Files written with this method might have to
 *                 be read back with the same version of Vim if the
 *                 binary format changes later.
 *                 Obsolete, please do no longer use.
 *    xchacha20v2  Same algorithm as with "xchacha20" that correctly
 *                 stores the key derivation parameters together with the
 *                 encrypted file.  Should work better in case the
 *                 parameters in the libsodium library ever change.
 *                 STILL EXPERIMENTAL: Files written with this method
 *                 might have to be read back with the same version of
 *                 Vim if the binary format changes later.
 *
 * You should use "blowfish2", also to re-encrypt older files.  The
 * "xchacha20" method provides better encryption, but it does not work
 * with all versions of Vim.
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
export const cryptmethod: GlobalOrBufferLocalOption<string> = new StringOption(
  "cryptmethod",
);

/**
 * Determines how many components of the path to show in a list of tags.
 * See `cscopepathcomp`.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * (default 0)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopepathcomp: GlobalOption<number> = new NumberOption(
  "cscopepathcomp",
);

/**
 * Specifies the command to execute cscope.  See `cscopeprg`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default "cscope")
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopeprg: GlobalOption<string> = new StringOption("cscopeprg");

/**
 * Specifies whether to use quickfix window to show cscope results.
 * See `cscopequickfix`.
 *
 * (default "")
 *
 * *not available when compiled without the `+cscope` or `+quickfix` features*
 */
export const cscopequickfix: GlobalOption<string> = new StringOption(
  "cscopequickfix",
);

/**
 * In the absence of a prefix (-P) for cscope. setting this option enables
 * to use the basename of cscope.out path as the prefix.
 * See `cscoperelative`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscoperelative: GlobalOption<boolean> = new BooleanOption(
  "cscoperelative",
);

/**
 * Use cscope for tag commands.  See `cscope-options`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopetag: GlobalOption<boolean> = new BooleanOption("cscopetag");

/**
 * Determines the order in which ":cstag" performs a search.  See
 * `cscopetagorder`.
 * NOTE: This option is set to 0 when 'compatible' is set.
 *
 * (default 0)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopetagorder: GlobalOption<number> = new NumberOption(
  "cscopetagorder",
);

/**
 * Give messages when adding a cscope database.  See `cscopeverbose`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *not available when compiled without the `+cscope` feature*
 */
export const cscopeverbose: GlobalOption<boolean> = new BooleanOption(
  "cscopeverbose",
);

/**
 * List of **{address}** in each buffer, separated by commas, that are
 * considered anchors when used for diffing.  It's valid to specify "$+1"
 * for 1 past the last line.  "%" cannot be used for this option.  There
 * can be at most 20 anchors set for each buffer.
 *
 * Each anchor line splits the buffer (the split happens above the
 * anchor), with each part being diff'ed separately before the final
 * result is joined.  When more than one **{address}** are provided, the
 * anchors will be sorted interally by line number.  If using buffer
 * local options, each buffer should have the same number of anchors
 * (extra anchors will be ignored).  This option is only used when
 * 'diffopt' has "anchor" set.  See `diff-anchors` for more details and
 * examples.
 *
 * If some of the **{address}** do not resolve to a line in each buffer (e.g.
 * a pattern search that does not match anything), none of the anchors
 * will be used.
 *
 * Diff anchors can only be used when there are no hidden diff buffers.
 *
 * (default "")
 */
export const diffanchors: GlobalOrBufferLocalOption<string> = new StringOption(
  "diffanchors",
);

/**
 * Makes the 'g' and 'c' flags of the ":substitute" command to be
 * toggled each time the flag is given.  See `complex-change`.  See
 * also 'gdefault' option.
 * Switching this option on may break plugins!
 * This option is not used in `Vim9` script.
 *
 * (default off)
 */
export const edcompatible: GlobalOption<boolean> = new BooleanOption(
  "edcompatible",
);

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
 * NOTE: when this option is off then the `modifyOtherKeys` and
 * `xterm-bracketed-paste` functionality is disabled while in Insert mode
 * to avoid ending Insert mode with any key that has a modifier.
 *
 * (Vim default: on, Vi default: off)
 */
export const esckeys: GlobalOption<boolean> = new BooleanOption("esckeys");

/**
 * This option was for using Farsi, which has been removed.  See
 * `farsi.txt`.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const fkmap: GlobalOption<boolean> = new BooleanOption("fkmap");

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
export const guifontset: GlobalOption<string> = new StringOption("guifontset");

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
export const guiheadroom: GlobalOption<number> = new NumberOption(
  "guiheadroom",
);

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
 * *only for GTK and Win32 GUI*
 */
export const guiligatures: GlobalOption<string> = new StringOption(
  "guiligatures",
);

/**
 * This option only has an effect in the GUI version of Vim.  It is a
 * sequence of letters which describes what components and options of the
 * GUI should be used.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" `add-option-flags`.
 *
 * Valid characters are as follows:
 *
 *   '!'   External commands are executed in a terminal window.  Without
 *         this flag the MS-Windows GUI will open a console window to
 *         execute the command.  The Unix GUI will simulate a dumb
 *         terminal to list the command output.
 *         The terminal window will be positioned at the bottom, and grow
 *         upwards as needed.
 *
 *   'a'   Autoselect:  If present, then whenever VISUAL mode is started,
 *         or the Visual area extended, Vim tries to become the owner of
 *         the windowing system's global selection.  This means that the
 *         Visually highlighted text is available for pasting into other
 *         applications as well as into Vim itself.  When the Visual mode
 *         ends, possibly due to an operation on the text, or when an
 *         application wants to paste the selection, the highlighted text
 *         is automatically yanked into the "* selection register.
 *         Thus the selection is still available for pasting into other
 *         applications after the VISUAL mode has ended.
 *             If not present, then Vim won't become the owner of the
 *         windowing system's global selection unless explicitly told to
 *         by a yank or delete operation for the "* register.
 *         The same applies to the modeless selection.
 *
 *   'P'   Like autoselect but using the "+ register instead of the "*
 *         register.
 *
 *   'A'   Autoselect for the modeless selection.  Like 'a', but only
 *         applies to the modeless selection.
 *
 *             'guioptions'   autoselect Visual  autoselect modeless
 *                  ""              -                       -
 *                  "a"            yes                     yes
 *                  "A"             -                      yes
 *                  "aA"           yes                     yes
 *
 *         When using a terminal see the 'clipboard' option.
 *
 *   'c'   Use console dialogs instead of popup dialogs for simple
 *         choices.
 *
 *   'd'   Use dark theme variant if available. Currently only works for
 *         GTK+ GUI.
 *
 *   'e'   Add tab pages when indicated with 'showtabline'.
 *         'guitablabel' can be used to change the text in the labels.
 *         When 'e' is missing a non-GUI tab pages line may be used.
 *         The GUI tabs are only supported on some systems, currently
 *         GTK, Motif, Mac OS/X, Haiku, and MS-Windows.
 *
 *   'f'   Foreground: Don't use fork() to detach the GUI from the shell
 *         where it was started.  Use this for programs that wait for the
 *         editor to finish (e.g., an e-mail program).  Alternatively you
 *         can use "gvim -f" or ":gui -f" to start the GUI in the
 *         foreground.  `gui-fork`
 *         Note: Set this option in the vimrc file.  The forking may have
 *         happened already when the `gvimrc` file is read.
 *
 *   'i'   Use a Vim icon.  For GTK with KDE it is used in the left-upper
 *         corner of the window.  It's black&white on non-GTK, because of
 *         limitations of X11.  For a color icon, see `X11-icon`.
 *
 *   'm'   Menu bar is present.
 *
 *   'M'   The system menu "$VIMRUNTIME/menu.vim" is not sourced.  Note
 *         that this flag must be added in the .vimrc file, before
 *         switching on syntax or filetype recognition (when the `gvimrc`
 *         file is sourced the system menu has already been loaded; the
 *         `:syntax on` and `:filetype on` commands load the menu too).
 *
 *   'g'   Grey menu items: Make menu items that are not active grey.  If
 *         'g' is not included inactive menu items are not shown at all.
 *
 *   't'   Include tearoff menu items.  Currently only works for Win32,
 *         GTK+, and Motif 1.2 GUI.
 *
 *   'T'   Include Toolbar.  Currently only in Win32, GTK+, Motif and
 *         Photon GUIs.
 *
 *   'r'   Right-hand scrollbar is always present.
 *
 *   'R'   Right-hand scrollbar is present when there is a vertically
 *         split window.
 *
 *   'l'   Left-hand scrollbar is always present.
 *
 *   'L'   Left-hand scrollbar is present when there is a vertically
 *         split window.
 *
 *   'b'   Bottom (horizontal) scrollbar is present.  Its size depends on
 *         the longest visible line, or on the cursor line if the 'h'
 *         flag is included. `gui-horiz-scroll`
 *
 *   'h'   Limit horizontal scrollbar size to the length of the cursor
 *         line.  Reduces computations. `gui-horiz-scroll`
 *
 * And yes, you may even have scrollbars on the left AND the right if
 * you really want to :-).  See `gui-scrollbars` for more information.
 *
 *   'v'   Use a vertical button layout for dialogs.  When not included,
 *         a horizontal layout is preferred, but when it doesn't fit a
 *         vertical layout is used anyway.  Not supported in GTK 3.
 *
 *   'p'   Use Pointer callbacks for X11 GUI.  This is required for some
 *         window managers.  If the cursor is not blinking or hollow at
 *         the right moment, try adding this flag.  This must be done
 *         before starting the GUI.  Set it in your `gvimrc`.  Adding or
 *         removing it after the GUI has started has no effect.
 *
 *   'F'   Add a footer.  Only for Motif.  See `gui-footer`.
 *
 *   'k'   Keep the GUI window size when adding/removing a scrollbar, or
 *         toolbar, tabline, etc.  Instead, the behavior is similar to
 *         when the window is maximized and will adjust 'lines' and
 *         'columns' to fit to the window.  Without the 'k' flag Vim will
 *         try to keep 'lines' and 'columns' the same when adding and
 *         removing GUI components.
 *
 * (default "egmrLtT"   (MS-Windows,
 *  "t" is removed in `defaults.vim`),
 *  "aegimrLtT" (GTK and Motif),
 *  )
 *
 * *only available when compiled with GUI enabled*
 */
export const guioptions: GlobalOption<string> = new StringOption("guioptions");

/**
 * Only in the GUI: If on, an attempt is made to open a pseudo-tty for
 * I/O to/from shell commands.  See `gui-pty`.
 *
 * (default on)
 *
 * *only available when compiled with GUI enabled*
 */
export const guipty: GlobalOption<boolean> = new BooleanOption("guipty");

/**
 * When non-empty describes the text to use in a label of the GUI tab
 * pages line.  When empty and when the result is empty Vim will use a
 * default label.  See `setting-guitablabel` for more info.
 *
 * The format of this option is like that of 'statusline'.
 * 'guitabtooltip' is used for the tooltip, see below.
 * The expression will be evaluated in the `sandbox` when set from a
 * modeline, see `sandbox-option`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * Only used when the GUI tab pages line is displayed.  'e' must be
 * present in 'guioptions'.  For the non-GUI tab pages line 'tabline' is
 * used.
 *
 * (default empty)
 *
 * *only available when compiled with GUI enabled*
 */
export const guitablabel: GlobalOption<string> = new StringOption(
  "guitablabel",
);

/**
 * When non-empty describes the text to use in a tooltip for the GUI tab
 * pages line.  When empty Vim will use a default tooltip.
 * This option is otherwise just like 'guitablabel' above.
 * You can include a line break.  Simplest method is to use `:let`:
 *
 *     :let &guitabtooltip = "line one\nline two"
 *
 * (default empty)
 *
 * *only available when compiled with GUI enabled*
 */
export const guitabtooltip: GlobalOption<string> = new StringOption(
  "guitabtooltip",
);

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
 * `hl-IncSearch`   i  'incsearch' highlighting
 * `hl-CurSearch`   y  current instance of last search pattern
 * `hl-Search`      l  last search pattern highlighting (see 'hlsearch')
 * `hl-MoreMsg`     m  `more-prompt`
 * `hl-ModeMsg`     M  Mode (e.g., "-- INSERT --")
 * `hl-MsgArea`     g  `Command-line` and message area
 * `hl-ComplMatchIns` h  matched text of currently inserted completion
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
 * `hl-VisualNOS`   V  Visual mode when Vim is "Not Owning the
 *                     Selection" Only X11 Gui's `gui-x11`,
 *                     `xterm-clipboard` and `wayland-selections`
 * `hl-WarningMsg`  w  warning messages
 * `hl-WildMenu`    W  wildcard matches displayed for 'wildmenu'
 * `hl-Folded`      f  line used for closed folds
 * `hl-FoldColumn`  F  'foldcolumn'
 * `hl-DiffAdd`     A  added line in diff mode
 * `hl-DiffChange`  C  changed line in diff mode
 * `hl-DiffDelete`  D  deleted line in diff mode
 * `hl-DiffText`    T  changed text in diff mode
 * `hl-DiffTextAdd`   E  inserted text in diff mode
 * `hl-SignColumn`  >  column used for `signs`
 * `hl-Conceal`     -  the placeholders used for concealed characters
 *                     (see 'conceallevel')
 * `hl-SpellBad`    B  misspelled word `spell`
 * `hl-SpellCap`    P  word that should start with capital `spell`
 * `hl-SpellRare`   R  rare word `spell`
 * `hl-SpellLocal`  L  word from other region `spell`
 * `hl-Pmenu`       +  popup menu normal line
 * `hl-PmenuSel`    =  popup menu selected line
 * `hl-PmenuKind`   [  popup menu "kind" normal line
 * `hl-PmenuKindSel`  ]  popup menu "kind" selected line
 * `hl-PmenuExtra`  {  popup menu "extra" normal line
 * `hl-PmenuExtraSel` }  popup menu "extra" selected line
 * `hl-PmenuSbar`   x  popup menu scrollbar
 * `hl-PmenuThumb`  X  popup menu scrollbar thumb
 * `hl-PmenuMatch`  k  popup menu matched text
 * `hl-PmenuMatchSel` <  popup menu matched text in selected line
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
 *  T:DiffText,E:DiffTextAdd,>:SignColumn,
 *  -:Conceal,B:SpellBad,P:SpellCap,
 *  R:SpellRare, L:SpellLocal,+:Pmenu,
 *  =:PmenuSel, k:PmenuMatch,<:PmenuMatchSel,
 *  [:PmenuKind,]:PmenuKindSel,
 *  {:PmenuExtra,}:PmenuExtraSel,
 *  x:PmenuSbar,X:PmenuThumb,*:TabLine,
 *  #:TabLineSel,_:TabLineFill,!:CursorColumn,
 *  .:CursorLine,o:ColorColumn,q:QuickFixLine,
 *  z:StatusLineTerm,Z:StatusLineTermNC,
 *  g:MsgArea,h:ComplMatchIns"`)
 */
export const highlight: GlobalOption<string> = new StringOption("highlight");

/**
 * When on, the keyboard is mapped for the Hebrew character set.
 * Normally you would set 'allowrevins' and use CTRL-_ in insert mode to
 * toggle this option.  See `rileft.txt`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const hkmap: GlobalOption<boolean> = new BooleanOption("hkmap");

/**
 * When on, phonetic keyboard mapping is used.  'hkmap' must also be on.
 * This is useful if you have a non-Hebrew keyboard.
 * See `rileft.txt`.
 * NOTE: This option is reset when 'compatible' is set.
 *
 * (default off)
 *
 * *only available when compiled with the `+rightleft` feature*
 */
export const hkmapp: GlobalOption<boolean> = new BooleanOption("hkmapp");

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
export const imactivatefunc: GlobalOption<string> = new StringOption(
  "imactivatefunc",
);

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
export const imactivatekey: GlobalOption<string> = new StringOption(
  "imactivatekey",
);

/**
 * When set the Input Method is always on when starting to edit a command
 * line, unless entering a search pattern (see 'imsearch' for that).
 * Setting this option is useful when your input method allows entering
 * English characters directly, e.g., when it's used to type accented
 * characters with dead keys.
 *
 * (default off)
 */
export const imcmdline: GlobalOption<boolean> = new BooleanOption("imcmdline");

/**
 * When set the Input Method is never used.  This is useful to disable
 * the IM when it doesn't work properly.
 * Currently this option is on by default for SGI/IRIX machines.  This
 * may change in later releases.
 *
 * (default off, on for some systems (SGI))
 */
export const imdisable: GlobalOption<boolean> = new BooleanOption("imdisable");

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
export const imstatusfunc: GlobalOption<string> = new StringOption(
  "imstatusfunc",
);

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
export const imstyle: GlobalOption<number> = new NumberOption("imstyle");

/**
 * Defines characters and patterns for completion in insert mode.  Used
 * by the `complete_match()` function to determine the starting position
 * for completion.  This is a comma-separated list of triggers.  Each
 * trigger can be:
 * - A single character like "." or "/"
 * - A sequence of characters like "->", "/*", or "/**"
 *
 * Note: Use "\\," to add a literal comma as trigger character, see
 * `option-backslash`.
 *
 * Examples:
 *
 *     set isexpand=.,->,/*,\\,
 *
 * (default: "")
 */
export const isexpand: BufferLocalOption<string> = new StringOption("isexpand");

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
export const insertmode: GlobalOption<boolean> = new BooleanOption(
  "insertmode",
);

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
 * You also cannot use `:set-=`, `:set+=`, `:set^=` on this option to
 * prevent an attacker from guessing substrings in your key.
 * You can use "&key" in an expression to detect whether encryption is
 * enabled.  When 'key' is set it returns "*****" (five stars).
 *
 * (default "")
 *
 * *only available when compiled with the `+cryptv` feature*
 */
export const key: BufferLocalOption<string> = new StringOption("key");

/**
 * Specifies what keyboard protocol to use depending on the value of
 * 'term'.  The supported keyboard protocols names are:
 *         none    whatever the terminal uses
 *         mok2    modifyOtherKeys level 2, as supported by xterm
 *         kitty   Kitty keyboard protocol, as supported by Kitty
 *
 * The option value is a list of comma separated items.  Each item has
 * a pattern that is matched against the 'term' option, a colon and the
 * protocol name to be used.  To illustrate this, the default value would
 * be set with:
 *
 *     set keyprotocol=kitty:kitty,foot:kitty,ghostty:kitty,wezterm:kitty
 *     set keyprotocol+=xterm:mok2
 *
 * This means that when 'term' contains "kitty, "foot", "ghostty" or
 * "wezterm" somewhere, then the "kitty" protocol is used.  When 'term'
 * contains "xterm" somewhere, then the "mok2" protocol is used.
 *
 * The first match is used, thus if you want to have "kitty" use the
 * kitty protocol, but "badkitty" not, then you should match "badkitty"
 * first and use the "none" value:
 *
 *     set keyprotocol=badkitty:none,kitty:kitty
 *
 * The option is used after 'term' has been changed.  First the termcap
 * entries are set, possibly using the builtin list, see `builtin-terms`.
 * Then this option is inspected and if there is a match and a protocol
 * is specified the following happens:
 *         none    Nothing, the regular t_TE and t_TI values remain
 *
 *         mok2    The t_TE value is changed to:
 *                     CSI >4;m    disables modifyOtherKeys
 *                 The t_TI value is changed to:
 *                     CSI >4;2m   enables modifyOtherKeys
 *                     CSI ?4m     request the modifyOtherKeys state
 *
 *         kitty   The t_TE value is changed to:
 *                     CSI >4;m    disables modifyOtherKeys
 *                     CSI =0;1u   disables the kitty keyboard protocol
 *                 The t_TI value is changed to:
 *                     CSI =1;1u   enables the kitty keyboard protocol
 *                     CSI ?u      request kitty keyboard protocol state
 *                     CSI >c      request the termresponse
 *
 * If you notice problems, such as characters being displayed that
 * disappear after `CTRL-L`, you might want to try making this option
 * empty.  Then set the 'term' option to have it take effect:
 *
 *     set keyprotocol=
 *     let &term = &term
 *
 * (default: see below)
 */
export const keyprotocol: GlobalOption<string> = new StringOption(
  "keyprotocol",
);

/**
 * This is just like 'langremap' but with the value inverted.  It only
 * exists for backwards compatibility.  When setting 'langremap' then
 * 'langnoremap' is set to the inverted value, and the other way around.
 *
 * (default off, set in `defaults.vim`)
 *
 * *only available when compiled with the `+langmap` feature*
 */
export const langnoremap: GlobalOption<boolean> = new BooleanOption(
  "langnoremap",
);

/**
 * Like 'chistory', but for the location list stack associated with a
 * window.  If the option is changed in either the location list window
 * itself or the window that is associated with the location list stack,
 * the new value will also be applied to the other one.  This means this
 * value will always be the same for a given location list window and its
 * corresponding window.  See `quickfix-stack` for additional info.
 *
 * (default: 10)
 *
 * *only available when compiled with the `+quickfix` feature*
 */
export const lhistory: WindowLocalOption<number> = new NumberOption("lhistory");

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
export const luadll: GlobalOption<string> = new StringOption("luadll");

/**
 * No longer supported, as the Mac OS X GUI code was removed.
 *
 * (default on)
 *
 * *not supported*
 */
export const macatsui: GlobalOption<boolean> = new BooleanOption("macatsui");

/**
 * The maximum number of combining characters supported for displaying.
 * Only used when 'encoding' is "utf-8".
 * The default is OK for most languages.  Hebrew may require 4.
 * Maximum value is 6.
 * Even when this option is set to 2 you can still edit text with more
 * combining characters, you just can't see them.  Use `g8` or `ga`.
 * When set to 0, you will not be able to see any combining characters.
 * See `mbyte-combining`.
 *
 * (default 2)
 */
export const maxcombine: GlobalOption<number> = new NumberOption("maxcombine");

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
export const maxmem: GlobalOption<number> = new NumberOption("maxmem");

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
export const maxmemtot: GlobalOption<number> = new NumberOption("maxmemtot");

/**
 * Maximum number of matches shown for the search count status `shm-S`
 * When the number of matches exceeds this value, Vim shows ">" instead
 * of the exact count to keep searching fast.
 * Note: larger values may impact performance.
 * The value must be between 1 and 9999.
 *
 * (default 99)
 */
export const maxsearchcount: GlobalOption<number> = new NumberOption(
  "maxsearchcount",
);

/**
 * When on, mouse move events are delivered to the input queue and are
 * available for mapping. The default, off, avoids the mouse movement
 * overhead except when needed. See `gui-mouse-mapping`.
 * Warning: Setting this option can make pending mappings to be aborted
 * when the mouse is moved.
 * Currently only works in the GUI, may be made to work in a terminal
 * later.
 *
 * (default off)
 *
 * *only works in the GUI*
 */
export const mousemoveevent: GlobalOption<boolean> = new BooleanOption(
  "mousemoveevent",
);

/**
 * This option tells Vim what the mouse pointer should look like in
 * different modes.  The option is a comma-separated list of parts, much
 * like used for 'guicursor'.  Each part consists of a mode/location-list
 * and an argument-list:
 *         mode-list:shape,mode-list:shape,..
 * The mode-list is a dash separated list of these modes/locations:
 *                 In a normal window:
 *         n       Normal mode
 *         v       Visual mode
 *         ve      Visual mode with 'selection' "exclusive" (same as 'v',
 *                 if not specified)
 *         o       Operator-pending mode
 *         i       Insert mode
 *         r       Replace mode
 *
 *                 Others:
 *         c       appending to the command-line
 *         ci      inserting in the command-line
 *         cr      replacing in the command-line
 *         m       at the 'Hit ENTER' or 'More' prompts
 *         ml      idem, but cursor in the last line
 *         e       any mode, pointer below last window
 *         s       any mode, pointer on a status line
 *         sd      any mode, while dragging a status line
 *         vs      any mode, pointer on a vertical separator line
 *         vd      any mode, while dragging a vertical separator line
 *         a       everywhere
 *
 * The shape is one of the following:
 * avail   name            looks like
 * w x g   arrow           Normal mouse pointer
 * w x     blank           no pointer at all (use with care!)
 * w x g   beam            I-beam
 * w x g   updown          up-down sizing arrows
 * w x g   leftright       left-right sizing arrows
 * w x g   busy            The system's usual busy pointer
 * w x g   no              The system's usual 'no input' pointer
 *   x g   udsizing        indicates up-down resizing
 *   x g   lrsizing        indicates left-right resizing
 *   x g   crosshair       like a big thin +
 *   x g   hand1           black hand
 *   x g   hand2           white hand
 *   x     pencil          what you write with
 *   x g   question        big ?
 *   x     rightup-arrow   arrow pointing right-up
 * w x     up-arrow        arrow pointing up
 *   x     `<number>`        any X11 pointer number (see X11/cursorfont.h)
 *
 * The "avail" column contains a 'w' if the shape is available for Win32,
 * x for X11 (including GTK+ 2), g for GTK+ 3.
 * Any modes not specified or shapes not available use the normal mouse
 * pointer.
 *
 * Example:
 *
 *     :set mouseshape=s:udsizing,m:no
 *
 * will make the mouse turn to a sizing arrow over the status lines and
 * indicate no input when the hit-enter prompt is displayed (since
 * clicking the mouse has no effect in this state.)
 *
 * (default "i-r:beam,s:updown,sd:udsizing,
 *  vs:leftright,vd:lrsizing,m:no,
 *  ml:up-arrow,v:rightup-arrow")
 *
 * *only available when compiled with the `+mouseshape` feature*
 */
export const mouseshape: GlobalOption<string> = new StringOption("mouseshape");

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
export const mzquantum: GlobalOption<number> = new NumberOption("mzquantum");

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
export const mzschemedll: GlobalOption<string> = new StringOption(
  "mzschemedll",
);

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
export const mzschemegcdll: GlobalOption<string> = new StringOption(
  "mzschemegcdll",
);

/**
 * *only for MS-Windows*
 *         Enable reading and writing from devices.  This may get Vim stuck on a
 *         device that can be opened but doesn't actually do the I/O.  Therefore
 *         it is off by default.
 *         Note that on MS-Windows editing "aux.h", "lpt1.txt" and the like also
 *         result in editing a device.
 *
 * (default off)
 */
export const opendevice: GlobalOption<boolean> = new BooleanOption(
  "opendevice",
);

/**
 * This option was supported on RISC OS, which has been removed.
 *
 * (default: "")
 */
export const osfiletype: BufferLocalOption<string> = new StringOption(
  "osfiletype",
);

/**
 * Put Vim in Paste mode.  This is useful if you want to cut or copy
 * some text from one window and paste it in Vim.  This will avoid
 * unexpected effects.
 * Setting this option is useful when using Vim in a terminal, where Vim
 * cannot distinguish between typed text and pasted text.  In the GUI, Vim
 * knows about pasting and will mostly do the right thing without 'paste'
 * being set.  The same is true for a terminal where Vim handles the
 * mouse clicks itself.
 * This option is reset when starting the GUI.  Thus if you set it in
 * your .vimrc it will work in a terminal, but not in the GUI.  Setting
 * 'paste' in the GUI has side effects: e.g., the Paste toolbar button
 * will no longer work in Insert mode, because it uses a mapping.
 * When the 'paste' option is switched on (also when it was already on):
 *         - mapping in Insert mode and Command-line mode is disabled
 *         - abbreviations are disabled
 *         - 'autoindent' is reset
 *         - 'expandtab' is reset
 *         - 'hkmap' is reset
 *         - 'revins' is reset
 *         - 'ruler' is reset
 *         - 'showmatch' is reset
 *         - 'smarttab' is reset
 *         - 'softtabstop' is set to 0
 *         - 'textwidth' is set to 0
 *         - 'wrapmargin' is set to 0
 *         - 'varsofttabstop' is made empty
 * These options keep their value, but their effect is disabled:
 *         - 'cindent'
 *         - 'formatoptions' is used like it is empty
 *         - 'indentexpr'
 *         - 'lisp'
 *         - 'smartindent'
 * NOTE: When you start editing another file while the 'paste' option is
 * on, settings from the modelines or autocommands may change the
 * settings again, causing trouble when pasting text.  You might want to
 * set the 'paste' option again.
 * When the 'paste' option is reset the mentioned options are restored to
 * the value before the moment 'paste' was switched from off to on.
 * Resetting 'paste' before ever setting it does not have any effect.
 * Since mapping doesn't work while 'paste' is active, you need to use
 * the 'pastetoggle' option to toggle the 'paste' option with some key.
 *
 * (default off)
 */
export const paste: GlobalOption<boolean> = new BooleanOption("paste");

/**
 * When non-empty, specifies the key sequence that toggles the 'paste'
 * option.  This is like specifying a mapping:
 *
 *     :map {keys} :set invpaste<CR>
 *
 * Where **{keys}** is the value of 'pastetoggle'.
 * The difference is that it will work even when 'paste' is set.
 * 'pastetoggle' works in Insert mode and Normal mode, but not in
 * Command-line mode.
 * Mappings are checked first, thus overrule 'pastetoggle'.  However,
 * when 'paste' is on mappings are ignored in Insert mode, thus you can do
 * this:
 *
 *     :map <F10> :set paste<CR>
 *     :map <F11> :set nopaste<CR>
 *     :imap <F10> <C-O>:set paste<CR>
 *     :imap <F11> <nop>
 *     :set pastetoggle=<F11>
 *
 * This will make `<F10>` start paste mode and `<F11>` stop paste mode.
 * Note that typing `<F10>` in paste mode inserts `"<F10>"`, since in paste
 * mode everything is inserted literally, except the 'pastetoggle' key
 * sequence.
 * When the value has several bytes 'ttimeoutlen' applies.
 *
 * (default "")
 */
export const pastetoggle: GlobalOption<string> = new StringOption(
  "pastetoggle",
);

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
export const perldll: GlobalOption<string> = new StringOption("perldll");

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
export const previewpopup: GlobalOption<string> = new StringOption(
  "previewpopup",
);

/**
 * The name of the printer to be used for `:hardcopy`.
 * See `pdev-option`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default empty)
 *
 * *only available when compiled with the `+printer` feature*
 */
export const printdevice: GlobalOption<string> = new StringOption(
  "printdevice",
);

/**
 * Sets the character encoding used when printing.
 * See `penc-option`.
 *
 * (default empty, except for some systems)
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printencoding: GlobalOption<string> = new StringOption(
  "printencoding",
);

/**
 * Expression used to print the PostScript produced with `:hardcopy`.
 * See `pexpr-option`.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default: see below)
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printexpr: GlobalOption<string> = new StringOption("printexpr");

/**
 * The name of the font that will be used for `:hardcopy`.
 * See `pfn-option`.
 *
 * (default "courier")
 *
 * *only available when compiled with the `+printer` feature*
 */
export const printfont: GlobalOption<string> = new StringOption("printfont");

/**
 * The format of the header produced in `:hardcopy` output.
 * See `pheader-option`.
 *
 * (default `"%<%f%h%m%=Page %N"`)
 *
 * *only available when compiled with the `+printer` feature*
 */
export const printheader: GlobalOption<string> = new StringOption(
  "printheader",
);

/**
 * The CJK character set to be used for CJK output from `:hardcopy`.
 * See `pmbcs-option`.
 *
 * (default "")
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printmbcharset: GlobalOption<string> = new StringOption(
  "printmbcharset",
);

/**
 * List of font names to be used for CJK output from `:hardcopy`.
 * See `pmbfn-option`.
 *
 * (default "")
 *
 * *only available when compiled with the `+printer` and `+postscript` features*
 */
export const printmbfont: GlobalOption<string> = new StringOption(
  "printmbfont",
);

/**
 * List of items that control the format of the output of `:hardcopy`.
 * See `popt-option`.
 *
 * (default "")
 *
 * *only available when compiled with `+printer` feature*
 */
export const printoptions: GlobalOption<string> = new StringOption(
  "printoptions",
);

/**
 * When on a ":" prompt is used in Ex mode.
 *
 * (default on)
 */
export const prompt: GlobalOption<boolean> = new BooleanOption("prompt");

/**
 * Determines the maximum width to use for the popup menu for completion.
 * When zero, there is no maximum width limit, otherwise the popup menu
 * will never be wider than this value.  Truncated text will be indicated
 * by "trunc" value of 'fillchars' option.
 *
 * This option takes precedence over 'pumwidth'.
 * `ins-completion-menu`.
 *
 * (default 0)
 */
export const pummaxwidth: GlobalOption<number> = new NumberOption(
  "pummaxwidth",
);

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
export const pythondll: GlobalOption<string> = new StringOption("pythondll");

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
export const pythonhome: GlobalOption<string> = new StringOption("pythonhome");

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
export const pythonthreedll: GlobalOption<string> = new StringOption(
  "pythonthreedll",
);

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
export const pythonthreehome: GlobalOption<string> = new StringOption(
  "pythonthreehome",
);

/**
 * Allows for mappings to work recursively.  If you do not want this for
 * a single entry, use the :noremap[!] command.
 * NOTE: To avoid portability problems with Vim scripts, always keep
 * this option at the default "on".  Only switch it off when working with
 * old Vi scripts.
 *
 * (default on)
 */
export const remap: GlobalOption<boolean> = new BooleanOption("remap");

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
export const renderoptions: GlobalOption<string> = new StringOption(
  "renderoptions",
);

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
export const restorescreen: GlobalOption<boolean> = new BooleanOption(
  "restorescreen",
);

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
export const rubydll: GlobalOption<string> = new StringOption("rubydll");

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
export const scrollfocus: GlobalOption<boolean> = new BooleanOption(
  "scrollfocus",
);

/**
 * When on, ":autocmd", shell and write commands are not allowed in
 * ".vimrc" and ".exrc" in the current directory and map commands are
 * displayed.  Switch it off only if you know that you will not run into
 * problems, or when the 'exrc' option is off.  On Unix this option is
 * only used if the ".vimrc" or ".exrc" is not owned by you.  This can be
 * dangerous if the systems allows users to do a "chown".  You better set
 * 'secure' at the end of your `~/.vimrc` then.
 * This option cannot be set from a `modeline` or in the `sandbox`, for
 * security reasons.
 *
 * (default off)
 */
export const secure: GlobalOption<boolean> = new BooleanOption("secure");

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
export const shelltype: GlobalOption<number> = new NumberOption("shelltype");

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
export const shortname: BufferLocalOption<boolean> = new BooleanOption(
  "shortname",
);

/**
 * The value of this option specifies when the `tabpanel` with tab page
 * labels will be displayed:
 *         0: never
 *         1: only if there are at least two tab pages
 *         2: always
 * See `tab-page` for more information about tab page labels.
 *
 * (default 0)
 *
 * *not available when compiled without the `+tabpanel` feature*
 */
export const showtabpanel: GlobalOption<number> = new NumberOption(
  "showtabpanel",
);

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
export const swapsync: GlobalOption<string> = new StringOption("swapsync");

/**
 * When non-empty, this option determines the content of the `tabpanel`.
 * The option consists of printf style '%' items interspersed with
 * normal text, similar to the 'statusline' or 'tabline'.
 *
 * When changing something that is used in 'tabpanel' that does not
 * trigger it to be updated, use `:redrawtabpanel`.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 *
 * You can use `g:actual_curtabpage` within a function assigned to
 * tabpanel. `g:actual_curtabpage` represents current tab's label number.
 * The option value can contain line breaks:
 *
 *     set tabpanel=%!TabPanel()
 *     function! TabPanel() abort
 *       return printf("(%2d)\n  %%f", g:actual_curtabpage)
 *     endfunction
 *
 * The result is:
 *
 *     +-----------+---------------------------------
 *     |(1)        |
 *     |  ~/aaa.txt|
 *     |(2)        |
 *     |  ~/.vimrc |
 *     |           |
 *     |           |
 *     |           |
 *
 * (default empty)
 */
export const tabpanel: GlobalOption<string> = new StringOption("tabpanel");

/**
 * Optional settings for the `tabpanel`,  It can consist of the following
 * items.  Items must be separated by a comma.
 *
 *         align:**{text}**    Specifies the position of the tabpanel.
 *                         Currently supported positions are:
 *
 *                         left    left-side
 *                         right   right-side
 *
 *                         (default "left")
 *
 *         columns:**{n}**     Number of columns of the tabpanel.
 *                         If this value is 0 or less than 'columns', the
 *                         tab panel will not be displayed.
 *                         (default 20)
 *
 *         vert            Use a vertical separator for tabpanel.
 *                         The vertical separator character is taken from
 *                         "tpl_vert" in 'fillchars'.
 *                         (default off)
 *
 * Examples:
 *
 *     :set tabpanelopt=columns:16,align:right
 *     :set tabpanelopt=
 *     :set tabpanelopt=vert,align:right
 *     :set tabpanelopt=columns:16
 *
 * (default "")
 */
export const tabpanelopt: GlobalOption<string> = new StringOption(
  "tabpanelopt",
);

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
export const tcldll: GlobalOption<string> = new StringOption("tcldll");

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
export const term: GlobalOption<string> = new StringOption("term");

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
export const termencoding: GlobalOption<string> = new StringOption(
  "termencoding",
);

/**
 * The key that starts a CTRL-W command in a terminal window.  Other keys
 * are sent to the job running in the window.
 * The key can be specified as a single character, a `key-notation` (e.g.
 * `<Up>`, `<C-F>`) or a letter preceded with a caret (e.g. `^F` is CTRL-F):
 *
 *     :set twk=X
 *     :set twk=^I
 *     :set twk=<C-L>
 *
 * The string must be one key stroke but can be multiple bytes.
 * When not set CTRL-W is used, so that CTRL-W : gets you to the command
 * line.  If 'termwinkey' is set to CTRL-L then CTRL-L : gets you to the
 * command line.
 *
 * (default "")
 */
export const termwinkey: WindowLocalOption<string> = new StringOption(
  "termwinkey",
);

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
export const termwinscroll: BufferLocalOption<number> = new NumberOption(
  "termwinscroll",
);

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
export const termwinsize: WindowLocalOption<string> = new StringOption(
  "termwinsize",
);

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
export const termwintype: GlobalOption<string> = new StringOption(
  "termwintype",
);

/**
 * When set: Add 's' flag to 'shortmess' option (this makes the message
 * for a search that hits the start or end of the file not being
 * displayed).  When reset: Remove 's' flag from 'shortmess' option.  *Vi
 * shortens a lot of messages*
 *
 * (default off)
 */
export const terse: GlobalOption<boolean> = new BooleanOption("terse");

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
export const textauto: GlobalOption<boolean> = new BooleanOption("textauto");

/**
 * This option is obsolete.  Use 'fileformat'.
 * For backwards compatibility, when 'textmode' is set, 'fileformat' is
 * set to "dos".  When 'textmode' is reset, 'fileformat' is set to
 * "unix".
 *
 * (Win32: default on,
 *  others: default off)
 */
export const textmode: BufferLocalOption<boolean> = new BooleanOption(
  "textmode",
);

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
export const toolbar: GlobalOption<string> = new StringOption("toolbar");

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
export const toolbariconsize: GlobalOption<string> = new StringOption(
  "toolbariconsize",
);

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
export const ttybuiltin: GlobalOption<boolean> = new BooleanOption(
  "ttybuiltin",
);

/**
 * Indicates a fast terminal connection.  More characters will be sent to
 * the screen for redrawing, instead of using insert/delete line
 * commands.  Improves smoothness of redrawing when there are multiple
 * windows and the terminal does not support a scrolling region.
 * Also enables the extra writing of characters at the end of each screen
 * line for lines that wrap.  This helps when using copy/paste with the
 * mouse in an xterm and other terminals.
 *
 * The default used to be set only for some terminal names, but these
 * days nearly all terminals are fast, therefore the default is now "on".
 * If you have a slow connection you may want to set this option off,
 * e.g. depending on the host name:
 *
 *     if hostname() =~ 'faraway'
 *        set nottyfast
 *     endif
 *
 * (default on)
 */
export const ttyfast: GlobalOption<boolean> = new BooleanOption("ttyfast");

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
 * If the terminfo/termcap entry "XM" exists and the first number is
 * "1006" then 'ttymouse' will be set to "sgr".  This works for many
 * modern terminals.
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
export const ttymouse: GlobalOption<string> = new StringOption("ttymouse");

/**
 * Maximum number of lines to scroll the screen.  If there are more lines
 * to scroll the window is redrawn.  For terminals where scrolling is
 * very slow and redrawing is not slow this can be set to a small number,
 * e.g., 3, to speed up displaying.
 *
 * (default 999)
 */
export const ttyscroll: GlobalOption<number> = new NumberOption("ttyscroll");

/**
 * Alias for 'term', see above.
 *
 * (default from $TERM)
 */
export const ttytype: GlobalOption<string> = new StringOption("ttytype");

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
export const viminfo: GlobalOption<string> = new StringOption("viminfo");

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
export const viminfofile: GlobalOption<string> = new StringOption(
  "viminfofile",
);

/**
 * This option has the same effect as the 't_xs' terminal option.
 * It is provided for backwards compatibility with version 4.x.
 * Setting 'weirdinvert' has the effect of making 't_xs' non-empty, and
 * vice versa.  Has no effect when the GUI is running.
 *
 * (default off)
 */
export const weirdinvert: GlobalOption<boolean> = new BooleanOption(
  "weirdinvert",
);

/**
 * Highlight group name to use for this window instead of the Normal
 * color `hl-Normal`.
 *
 * (default empty)
 */
export const wincolor: WindowLocalOption<string> = new StringOption("wincolor");

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
export const winptydll: GlobalOption<string> = new StringOption("winptydll");

/**
 * Specifies the Wayland seat to use for Wayland functionality,
 * specifically the clipboard.  If the seat does not exist, then the
 * option will still be set to the new value, with the Wayland clipboard
 * being unavailable as a result.  If an empty value is passed then Vim
 * will attempt to use the first seat found available.  Updating this
 * option will also update `v:clipmethod`.
 *
 * (default "")
 *
 * *only when the `+wayland` feature is included*
 */
export const wlseat: GlobalOption<string> = new StringOption("wlseat");

/**
 * When enabled, then allow Vim to steal focus by creating a temporary
 * surface, in order to access the clipboard.  For more information see
 * `wayland-focus-steal`.
 *
 * (default off)
 *
 * *only when the `+wayland_clipboard` feature is included*
 */
export const wlsteal: GlobalOption<boolean> = new BooleanOption("wlsteal");

/**
 * The timeout in milliseconds before Vim gives up on waiting for the
 * Wayland compositor.  While Vim waits on the compositor, it is
 * unresponsive to input and does not update the screen.  Therefore
 * setting this to a lower value may make Vim feel more responsive in
 * some cases.  On the other hand, it may also mean you receive errors
 * when the compositor takes more time to respond than usual.
 *
 * Additionally, this option is also used as the maximum timeout when
 * waiting for a surface to gain focus, see `wayland-focus-steal`.
 *
 * (default 500)
 *
 * *only when the `+wayland` feature is included*
 */
export const wltimeoutlen: GlobalOption<number> = new NumberOption(
  "wltimeoutlen",
);

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
export const xtermcodes: GlobalOption<boolean> = new BooleanOption(
  "xtermcodes",
);
