// NOTE: This file is generated. Do NOT modify it manually.
import { Denops } from "../../deps.ts";
import { globalOptions, localOptions, options } from "../../variable/mod.ts";

/**
 * 		{only available when compiled with the |+farsi|
 * 		feature}
 * This option was for using Farsi, which has been removed.  See
 * |farsi.txt|.
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
 * 		{only available when compiled with GUI enabled
 * 		on macOS}
 * This option only has an effect in the GUI version of Vim on macOS
 * v10.2 or later.  When on, Vim will use smooth ("antialiased") fonts,
 * which can be easier to read at certain sizes on certain displays.
 * Setting this option can sometimes cause problems if 'guifont' is set
 * to its default (empty string).
 * NOTE: This option is reset when 'compatible' is set.
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
 * escape sequence will be emitted. For example, on Linux, you can source
 * /etc/profile.d/vte.sh in your shell profile if you use bash or zsh.
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
 * 		{only available when compiled with the
 * 		|+balloon_eval_term| feature}
 * Switch on the |balloon-eval| functionality for the terminal.
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
 * 		{only for MS-DOS}
 * This was for MS-DOS and is no longer supported.
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
 * 		{not available when compiled without the |+textprop|
 * 		or |+quickfix| feature}
 * When 'completeopt' contains "popup" then this option is used for the
 * properties of the info popup when it is created.  If an info popup
 * window already exists it is closed, so that the option value is
 * applied when it is created again.
 * You can also use |popup_findinfo()| and then set properties for an
 * existing info popup with |popup_setoptions()|.  See |complete-popup|.
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
 *    zip		PkZip compatible method.  A weak kind of encryption.
 * 		Backwards compatible with Vim 7.2 and older.
 *    blowfish	Blowfish method.  Medium strong encryption but it has
 * 		an implementation flaw.  Requires Vim 7.3 or later,
 * 		files can NOT be read by Vim 7.2 and older.  This adds
 * 		a "seed" to the file, every time you write the file
 * 		the encrypted bytes will be different.
 *    blowfish2	Blowfish method.  Medium strong encryption.  Requires
 * 		Vim 7.4.401 or later, files can NOT be read by Vim 7.3
 * 		and older.  This adds a "seed" to the file, every time
 * 		you write the file the encrypted bytes will be
 * 		different.  The whole undo file is encrypted, not just
 * 		the pieces of text.
 *    xchacha20	XChaCha20 Cipher with Poly1305 Message Authentication
 * 		Code.  Medium strong till strong encryption.
 * 		Encryption is provided by the libsodium library, it
 * 		requires Vim to be built with |+sodium|
 * 		It adds a seed and a message authentication code (MAC)
 * 		to the file.  This needs at least a Vim 8.2.3022 to
 * 		read the encrypted file.
 * 		Encryption of swap files is not supported, therefore
 * 		no swap file will be used when xchacha20 encryption is
 * 		enabled.
 * 		Encryption of undo files is not yet supported,
 * 		therefore no undo file will currently be written.
 * 		CURRENTLY EXPERIMENTAL: Files written with this method
 * 		might have to be read back with the same version of
 * 		Vim if the binary format changes later.
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
 * 		{not available when compiled without the |+cscope|
 * 		feature}
 * Give messages when adding a cscope database.  See |cscopeverbose|.
 * NOTE: This option is reset when 'compatible' is set.
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
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Comma separated list of settings for how 'cursorline' is displayed.
 * Valid values:
 * "line"		Highlight the text line of the cursor with
 * 		CursorLine |hl-CursorLine|.
 * "screenline"	Highlight only the screen line of the cursor with
 * 		CursorLine |hl-CursorLine|.
 * "number"	Highlight the line number of the cursor with
 * 		CursorLineNr |hl-CursorLineNr|.
 */
export const cursorlineopt = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cursorlineopt") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cursorlineopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorlineopt");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "cursorlineopt") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cursorlineopt", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorlineopt");
  },
};

/**
 * Makes the 'g' and 'c' flags of the ":substitute" command to be
 * toggled each time the flag is given.  See |complex-change|.  See
 * also 'gdefault' option.
 * Switching this option on may break plugins!
 * This option is not used in |Vim9| script.
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
 * Function keys that start with an <Esc> are recognized in Insert
 * mode.  When this option is off, the cursor and function keys cannot be
 * used in Insert mode if they start with an <Esc>.  The advantage of
 * this is that the single <Esc> is recognized immediately, instead of
 * after one second.  Instead of resetting this option, you might want to
 * try changing the values for 'timeoutlen' and 'ttimeoutlen'.  Note that
 * when 'esckeys' is off, you can still map anything, but the cursor keys
 * won't work by default.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 * NOTE: when this option is off then the |modifyOtherKeys| functionality
 * is disabled while in Insert mode to avoid ending Insert mode with any
 * key that has a modifier.
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
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * This option was for using Farsi, which has been removed.  See
 * |farsi.txt|.
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
 * 		{only available when compiled with GUI enabled and
 * 		with the |+xfontset| feature}
 * 		{not available in the GTK+ GUI}
 * When not empty, specifies two (or more) fonts to be used.  The first
 * one for normal English, the second one for your special language.  See
 * |xfontset|.
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
 * 		{only for GTK and X11 GUI}
 * The number of pixels subtracted from the screen height when fitting
 * the GUI window on the screen.  Set this before the GUI is started,
 * e.g., in your |gvimrc| file.  When zero, the whole screen height will
 * be used by the window.  When positive, the specified number of pixel
 * lines will be left for window decorations and other items on the
 * screen.  Set it to a negative value to allow windows taller than the
 * screen.
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
 * This option can be used to set highlighting mode for various
 * occasions.  It is a comma separated list of character pairs.  The
 * first character in a pair gives the occasion, the second the mode to
 * use for that occasion.  The occasions are:
 * |hl-SpecialKey|	 8  Meta and special keys listed with ":map"
 * |hl-EndOfBuffer|   ~  lines after the last line in the buffer
 * |hl-NonText|	 @  '@' at the end of the window and
 * 		    characters from 'showbreak'
 * |hl-Directory|	 d  directories in CTRL-D listing and other special
 * 		    things in listings
 * |hl-ErrorMsg|	 e  error messages
 * 		 h  (obsolete, ignored)
 * |hl-IncSearch|	 i  'incsearch' highlighting
 * |hl-Search|	 l  last search pattern highlighting (see 'hlsearch')
 * |hl-MoreMsg|	 m  |more-prompt|
 * |hl-ModeMsg|	 M  Mode (e.g., "-- INSERT --")
 * |hl-LineNr|	 n  line number for ":number" and ":#" commands, and
 * 		    when 'number' or 'relativenumber' option is set.
 * |hl-LineNrAbove|   a  line number above the cursor for when the
 * 		    'relativenumber' option is set.
 * |hl-LineNrBelow|   b  line number below the cursor for when the
 * 		    'relativenumber' option is set.
 * |hl-CursorLineNr|  N like n for when 'cursorline' or 'relativenumber' is
 * 		    set.
 * |hl-Question|	 r  |hit-enter| prompt and yes/no questions
 * |hl-StatusLine|	 s  status line of current window |status-line|
 * |hl-StatusLineNC|  S  status lines of not-current windows
 * |hl-Title|	 t  Titles for output from ":set all", ":autocmd" etc.
 * |hl-VertSplit|	 c  column used to separate vertically split windows
 * |hl-Visual|	 v  Visual mode
 * |hl-VisualNOS|	 V  Visual mode when Vim does is "Not Owning the
 * 		    Selection" Only X11 Gui's |gui-x11| and
 * 		    |xterm-clipboard|.
 * |hl-WarningMsg|	 w  warning messages
 * |hl-WildMenu|	 W  wildcard matches displayed for 'wildmenu'
 * |hl-Folded|	 f  line used for closed folds
 * |hl-FoldColumn|	 F  'foldcolumn'
 * |hl-DiffAdd|	 A  added line in diff mode
 * |hl-DiffChange|	 C  changed line in diff mode
 * |hl-DiffDelete|	 D  deleted line in diff mode
 * |hl-DiffText|	 T  inserted text in diff mode
 * |hl-SignColumn|	 >  column used for |signs|
 * |hl-Conceal|	 -  the placeholders used for concealed characters
 * 		    (see 'conceallevel')
 * |hl-SpellBad|	 B  misspelled word |spell|
 * |hl-SpellCap|	 P  word that should start with capital |spell|
 * |hl-SpellRare|	 R  rare word |spell|
 * |hl-SpellLocal|	 L  word from other region |spell|
 * |hl-Pmenu|	 +  popup menu normal line
 * |hl-PmenuSel|	 =  popup menu selected line
 * |hl-PmenuSbar|	 x  popup menu scrollbar
 * |hl-PmenuThumb|	 X  popup menu scrollbar thumb
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
 * activate or deactivate the Input Method.
 * It is not used in the MS-Windows GUI version.
 * The expression will be evaluated in the |sandbox| when set from a
 * modeline, see |sandbox-option|.
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
 * 		{only available when compiled with |+xim| and
 * 		|+GUI_GTK|}
 * Specifies the key that your Input Method in X-Windows uses for
 * activation.  When this is specified correctly, vim can fully control
 * IM with 'imcmdline', 'iminsert' and 'imsearch'.
 * You can't use this option to change the activation key, the option
 * tells Vim what the key is.
 * Format:
 * 	[MODIFIER_FLAG-]KEY_STRING
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
 * It is not used in the MS-Windows GUI version.
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
 * 		{only available when compiled with |+xim| and
 * 		|+GUI_GTK|}
 * This option specifies the input style of Input Method:
 * 0   use on-the-spot style
 * 1   over-the-spot style
 * See: |xim-input-style|
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
 * 		{only available when compiled with the |+langmap|
 * 		feature}
 * This is just like 'langremap' but with the value inverted.  It only
 * exists for backwards compatibility.  When setting 'langremap' then
 * 'langnoremap' is set to the inverted value, and the other way around.
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
 * Maximum amount of memory (in Kbyte) to use for one buffer.  When this
 * limit is reached allocating extra memory for a buffer will cause
 * other memory to be freed.
 * The maximum usable value is about 2000000.  Use this to work without a
 * limit.
 * The value is ignored when 'swapfile' is off.
 * Also see 'maxmemtot'.
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
 * 		{not available when compiled without the |+mzscheme|
 * 		feature}
 * The number of milliseconds between polls for MzScheme threads.
 * Negative or zero value means no thread scheduling.
 * NOTE: This option is set to the Vim default value when 'compatible'
 * is reset.
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
 * 		{not available when compiled without the |+textprop|
 * 		or |+quickfix| feature}
 * When not empty a popup window is used for commands that would open a
 * preview window.  See |preview-popup|.
 * Not used for the insert completion info, add "popup" to
 * 'completeopt' for that.
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
 * 		{only available when compiled with GUI and DIRECTX on
 * 		MS-Windows}
 * Select a text renderer and set its options.  The options depend on the
 * renderer.
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
 * 		{only in MS-Windows console version}
 * When set, the screen contents is restored when exiting Vim.  This also
 * happens when executing external commands.
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
 * 		{only for MS-Windows GUI}
 * When using the scroll wheel and this option is set, the window under
 * the mouse pointer is scrolled.  With this option off the current
 * window is scrolled.
 * Systems other than MS-Windows always behave like this option is on.
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
 * 		{only for the Amiga}
 * On the Amiga this option influences the way how the commands work
 * which use a shell.
 * 0 and 1: always use the shell
 * 2 and 3: use the shell only to filter lines
 * 4 and 5: use shell only for ':sh' command
 * When not using the shell, the command is executed directly.
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
 * adding an extension (".~" or ".swp").  This option is useful
 * when editing files on an MS-DOS compatible filesystem, e.g., messydos
 * or crossdos.
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
 * Encoding used for the terminal.  This specifies what character
 * encoding the keyboard produces and the display will understand.  For
 * the GUI it only applies to the keyboard ('encoding' is used for the
 * display).
 * Note: This does not apply to the GTK+ GUI.  After the GUI has been
 * successfully initialized, 'termencoding' is forcibly set to "utf-8".
 * Any attempts to set a different value will be rejected, and an error
 * message is shown.
 * For the Win32 GUI and console versions 'termencoding' is not used,
 * because the Win32 system always passes Unicode characters.
 * When empty, the same encoding is used as for the 'encoding' option.
 * This is the normal value.
 * Not all combinations for 'termencoding' and 'encoding' are valid.  See
 * |encoding-table|.
 * The value for this option must be supported by internal conversions or
 * iconv().  When this is not possible no conversion will be done and you
 * will probably experience problems with non-ASCII characters.
 * Example: You are working with the locale set to euc-jp (Japanese) and
 * want to edit a UTF-8 file: >
 * 	:let &termencoding = &encoding
 * 	:set encoding=utf-8
 * <	You need to do this when your system has no locale support for UTF-8.
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
 * The <> notation can be used, e.g.: >
 * 	:set termwinkey=<C-L>
 * <	The string must be one key stroke but can be multiple bytes.
 * When not set CTRL-W is used, so that CTRL-W : gets you to the command
 * line.  If 'termwinkey' is set to CTRL-L then CTRL-L : gets you to the
 * command line.
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
 * 		{not available when compiled without the
 * 		|+terminal| feature}
 * Number of scrollback lines to keep.  When going over this limit the
 * first 10% of the scrollback lines are deleted.  This is just to reduce
 * the memory usage.  See |Terminal-Normal|.
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
 * Size used when opening the |terminal| window.  Format:
 * 	{rows}x{columns} or {rows}*{columns}.
 * - When empty the terminal gets the size from the window.
 * - When set with a "x" (e.g., "24x80") the terminal size is not
 *   adjusted to the window size.  If the window is smaller only the
 *   top-left part is displayed.
 * - When set with a "50") the terminal size follows the
 *   window size, but will not be smaller than the specified rows and/or
 *   columns.
 * - When rows is zero then use the height of the window.
 * - When columns is zero then use the width of the window.
 * - Using "0x0" or "0*0" is the same as empty.
 * - Can be overruled in the |term_start()| options with "term_rows" and
 *   "term_cols".
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
 * 		{only available when compiled with the |terminal|
 * 		feature on MS-Windows}
 * Specify the virtual console (pty) used when opening the terminal
 * window.
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
 * This option is obsolete.  Use 'fileformats'.
 * For backwards compatibility, when 'textauto' is set, 'fileformats' is
 * set to the default value for the current system.  When 'textauto' is
 * reset, 'fileformats' is made empty.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
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
 * 		{only for |+GUI_GTK|, |+GUI_Athena|, |+GUI_Motif| and
 * 		|+GUI_Photon|}
 * The contents of this option controls various toolbar settings.  The
 * possible values are:
 * 	icons		Toolbar buttons are shown with icons.
 * 	text		Toolbar buttons shown with text.
 * 	horiz		Icon and text of a toolbar button are
 * 			horizontally arranged.  {only in GTK+ 2 GUI}
 * 	tooltips	Tooltips are active for toolbar buttons.
 * Tooltips refer to the popup help text which appears after the mouse
 * cursor is placed over a toolbar button for a brief moment.
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
 * 			global
 * 			{only in the GTK+ GUI}
 * Controls the size of toolbar icons.  The possible values are:
 * 	tiny		Use tiny icons.
 * 	small		Use small icons (default).
 * 	medium		Use medium-sized icons.
 * 	large		Use large icons.
 * 	huge		Use even larger icons.
 * 	giant		Use very big icons.
 * The exact dimensions in pixels of the various icon sizes depend on
 * the current theme.  Common dimensions are giant=48x48, huge=32x32,
 * large=24x24, medium=24x24, small=20x20 and tiny=16x16.
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
 * the change to take effect, for example: >
 * 	:set notbi term=$TERM
 * <	See also |termcap|.
 * Rationale: The default for this option is "on", because the builtin
 * termcap entries are generally better (many systems contain faulty
 * xterm entries...).
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
 * 		{only in Unix and VMS, doesn't work in the GUI; not
 * 		available when compiled without |+mouse|}
 * Name of the terminal type for which mouse codes are to be recognized.
 * Currently these strings are valid:
 *    xterm	xterm-like mouse handling.  The mouse generates
 * 		"<Esc>[Mscr", where "scr" is three bytes:
 * 			"s"  = button state
 * 			"c"  = column plus 33
 * 			"r"  = row plus 33
 * 		This only works up to 223 columns!  See "dec",
 * 		"urxvt", and "sgr" for solutions.
 *    xterm2	Works like "xterm", but with the xterm reporting the
 * 		mouse position while the mouse is dragged.  This works
 * 		much faster and more precise.  Your xterm must at
 * 		least at patchlevel 88 / XFree 3.3.3 for this to
 * 		work.  See below for how Vim detects this
 * 		automatically.
 *    netterm	NetTerm mouse handling.  A left mouse click generates
 * 		"<Esc>}r,c<CR>", where "r,c" are two decimal numbers
 * 		for the row and column.  No other mouse events are
 * 		supported.
 *    dec		DEC terminal mouse handling.  The mouse generates a
 * 		rather complex sequence, starting with "<Esc>[".
 * 		This is also available for an Xterm, if it was
 * 		configured with "--enable-dec-locator".
 *    jsbterm	JSB term mouse handling.
 *    pterm	QNX pterm mouse handling.
 *    urxvt	Mouse handling for the urxvt (rxvt-unicode) terminal.
 * 		The mouse works only if the terminal supports this
 * 		encoding style, but it does not have 223 columns limit
 * 		unlike "xterm" or "xterm2".
 *    sgr		Mouse handling for the terminal that emits SGR-styled
 * 		mouse reporting.  The mouse works even in columns
 * 		beyond 223.  This option is backward compatible with
 * 		"xterm2" because it can also decode "xterm2" style
 * 		mouse codes.
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
 * 		{not available when compiled without the |+viminfo|
 * 		feature}
 * When non-empty, the viminfo file is read upon startup and written
 * when exiting Vim (see |viminfo-file|). Except when 'viminfofile' is
 * "NONE".
 * The string should be a comma separated list of parameters, each
 * consisting of a single character identifying the particular parameter,
 * followed by a number or string which specifies the value of that
 * parameter.  If a particular character is left out, then the default
 * value is used for that parameter.  The following is a list of the
 * identifying characters and the effect of their value.
 * CHAR	VALUE	~
 * !	When included, save and restore global variables that start
 * 	with an uppercase letter, and don't contain a lowercase
 * 	letter.  Thus "KEEPTHIS and "K_L_M" are stored, but "KeepThis"
 * 	and "_K_L_M" are not.  Nested List and Dict items may not be
 * 	read back correctly, you end up with an empty item.
 * "	Maximum number of lines saved for each register.  Old name of
 * 	the '<' item, with the disadvantage that you need to put a
 * 	backslash before the ", otherwise it will be recognized as the
 * 	start of a comment!
 * %	When included, save and restore the buffer list.  If Vim is
 * 	started with a file name argument, the buffer list is not
 * 	restored.  If Vim is started without a file name argument, the
 * 	buffer list is restored from the viminfo file.  Quickfix
 * 	('buftype'), unlisted ('buflisted'), unnamed and buffers on
 * 	removable media (|viminfo-r|) are not saved.
 * 	When followed by a number, the number specifies the maximum
 * 	number of buffers that are stored.  Without a number all
 * 	buffers are stored.
 * '	Maximum number of previously edited files for which the marks
 * 	are remembered.  This parameter must always be included when
 * 	'viminfo' is non-empty.
 * 	Including this item also means that the |jumplist| and the
 * 	|changelist| are stored in the viminfo file.
 * /	Maximum number of items in the search pattern history to be
 * 	saved.  If non-zero, then the previous search and substitute
 * 	patterns are also saved.  When not included, the value of
 * 	'history' is used.
 * :	Maximum number of items in the command-line history to be
 * 	saved.  When not included, the value of 'history' is used.
 * <	Maximum number of lines saved for each register.  If zero then
 * 	registers are not saved.  When not included, all lines are
 * 	saved.  '"' is the old name for this item.
 * 	Also see the 's' item below: limit specified in Kbyte.
 * @	Maximum number of items in the input-line history to be
 * 	saved.  When not included, the value of 'history' is used.
 * c	When included, convert the text in the viminfo file from the
 * 	'encoding' used when writing the file to the current
 * 	'encoding'.  See |viminfo-encoding|.
 * f	Whether file marks need to be stored.  If zero, file marks ('0
 * 	to '9, 'A to 'Z) are not stored.  When not present or when
 * 	non-zero, they are all stored.  '0 is used for the current
 * 	cursor position (when exiting or when doing ":wviminfo").
 * h	Disable the effect of 'hlsearch' when loading the viminfo
 * 	file.  When not included, it depends on whether ":nohlsearch"
 * 	has been used since the last search command.
 * n	Name of the viminfo file.  The name must immediately follow
 * 	the 'n'.  Must be at the end of the option!  If the
 * 	'viminfofile' option is set, that file name overrides the one
 * 	given here with 'viminfo'.  Environment variables are
 * 	expanded when opening the file, not when setting the option.
 * r	Removable media.  The argument is a string (up to the next
 * 	',').  This parameter can be given several times.  Each
 * 	specifies the start of a path for which no marks will be
 * 	stored.  This is to avoid removable media.  For MS-Windows you
 * 	could use "ra:,rb:", for Amiga "rdf0:,rdf1:,rdf2:".  You can
 * 	also use it for temp files, e.g., for Unix: "r/tmp".  Case is
 * 	ignored.  Maximum length of each 'r' argument is 50
 * 	characters.
 * s	Maximum size of an item in Kbyte.  If zero then registers are
 * 	not saved.  Currently only applies to registers.  The default
 * 	"s10" will exclude registers with more than 10 Kbyte of text.
 * 	Also see the '<' item above: line count limit.
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
 * 		{not available when compiled without the |+viminfo|
 * 		feature}
 * When non-empty, overrides the file name used for viminfo.
 * When equal to "NONE" no viminfo file will be read or written.
 * This option can be set with the |-i| command line flag.  The |--clean|
 * command line flag sets it to "NONE".
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
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
 * color |hl-Normal|.
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
