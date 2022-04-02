// NOTE: This file is generated. Do NOT modify it manually.
import type { Denops } from "https://deno.land/x/denops_core@v3.0.0/mod.ts";
import { globalOptions, localOptions, options } from "./../variable/mod.ts";

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * The ASCII code for the first letter of the Hebrew alphabet.  The
 * routine that maps the keyboard in Hebrew mode, both in Insert mode
 * (when hkmap is set) and on the command-line (when hitting CTRL-_)
 * outputs the Hebrew characters in the range [aleph..aleph+26].
 * aleph=128 applies to PC code, and aleph=224 applies to ISO 8859-8.
 * See |rileft.txt|.
 */
export const aleph = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "aleph") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "aleph", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "aleph");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "aleph") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "aleph", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "aleph");
  },
};

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * Allow CTRL-_ in Insert and Command-line mode.  This is default off, to
 * avoid that users that accidentally type CTRL-_ instead of SHIFT-_ get
 * into reverse Insert mode, and don't know how to get out.  See
 * 'revins'.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const allowrevins = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "allowrevins") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "allowrevins", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "allowrevins");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "allowrevins") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "allowrevins", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "allowrevins");
  },
};

/**
 * Only effective when 'encoding' is "utf-8" or another Unicode encoding.
 * Tells Vim what to do with characters with East Asian Width Class
 * Ambiguous (such as Euro, Registered Sign, Copyright Sign, Greek
 * letters, Cyrillic letters).
 */
export const ambiwidth = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "ambiwidth") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "ambiwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ambiwidth");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "ambiwidth") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "ambiwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ambiwidth");
  },
};

/**
 * 		{only available when compiled with it, use
 * 		exists("+autochdir") to check}
 * When on, Vim will change the current working directory whenever you
 * open a file, switch buffers, delete a buffer or open/close a window.
 * It will change to the directory containing the file which was opened
 * or selected.
 * Note: When this option is on some plugins may not work.
 */
export const autochdir = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "autochdir") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autochdir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autochdir");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "autochdir") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autochdir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autochdir");
  },
};

/**
 * 		{only available when compiled with the |+arabic|
 * 		feature}
 * This option can be set to start editing Arabic text.
 * Setting this option will:
 * - Set the 'rightleft' option, unless 'termbidi' is set.
 * - Set the 'arabicshape' option, unless 'termbidi' is set.
 * - Set the 'keymap' option to "arabic"; in Insert mode CTRL-^ toggles
 *   between typing English and Arabic key mapping.
 * - Set the 'delcombine' option
 * Note that 'encoding' must be "utf-8" for working with Arabic text.
 */
export const arabic = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "arabic") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "arabic", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "arabic");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "arabic") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "arabic", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "arabic");
  },
};

/**
 * 		{only available when compiled with the |+arabic|
 * 		feature}
 * When on and 'termbidi' is off, the required visual character
 * corrections that need to take place for displaying the Arabic language
 * take effect.  Shaping, in essence, gets enabled; the term is a broad
 * one which encompasses:
 *   a) the changing/morphing of characters based on their location
 *      within a word (initial, medial, final and stand-alone).
 *   b) the enabling of the ability to compose characters
 *   c) the enabling of the required combining of some characters
 * When disabled the display shows each character's true stand-alone
 * form.
 * Arabic is a complex language which requires other settings, for
 * further details see |arabic.txt|.
 * NOTE: This option is set when 'compatible' is set.
 */
export const arabicshape = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "arabicshape") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "arabicshape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "arabicshape");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "arabicshape") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "arabicshape", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "arabicshape");
  },
};

/**
 * Copy indent from current line when starting a new line (typing <CR>
 * in Insert mode or when using the "o" or "O" command).  If you do not
 * type anything on the new line except <BS> or CTRL-D and then type
 * <Esc>, CTRL-O or <CR>, the indent is deleted again.  Moving the cursor
 * to another line has the same effect, unless the 'I' flag is included
 * in 'cpoptions'.
 * When autoindent is on, formatting (with the "gq" command or when you
 * reach 'textwidth' in Insert mode) uses the indentation of the first
 * line.
 * When 'smartindent' or 'cindent' is on the indent is changed in
 * a different way.
 * The 'autoindent' option is reset when the 'paste' option is set and
 * restored when 'paste' is reset.
 */
export const autoindent = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "autoindent") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autoindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autoindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "autoindent") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "autoindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "autoindent");
  },
};

/**
 * When a file has been detected to have been changed outside of Vim and
 * it has not been changed inside of Vim, automatically read it again.
 * When the file has been deleted this is not done, so you have the text
 * from before it was deleted.  When it appears again then it is read.
 * |timestamp|
 * If this option has a local value, use this command to switch back to
 * using the global value: >
 * 	:set autoread<
 * <
 */
export const autoread = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "autoread") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autoread", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autoread");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "autoread") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autoread", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autoread");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "autoread") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "autoread", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "autoread");
  },
};

/**
 * Write the contents of the file, if it has been modified, on each
 * :next, :rewind, :last, :first, :previous, :stop, :suspend, :tag, :!,
 * :make, CTRL-] and CTRL-^ command; and when a :buffer, CTRL-O, CTRL-I,
 * '{A-Z0-9}, or `{A-Z0-9} command takes one to another file.
 * Note that for some commands the 'autowrite' option is not used, see
 * 'autowriteall' for that.
 * Some buffers will not be written, specifically when 'buftype' is
 * "nowrite", "nofile", "terminal" or "prompt".
 */
export const autowrite = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "autowrite") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autowrite", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autowrite");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "autowrite") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autowrite", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autowrite");
  },
};

/**
 * Like 'autowrite', but also used for commands ":edit", ":enew", ":quit",
 * ":qall", ":exit", ":xit", ":recover" and closing the Vim window.
 * Setting this option also implies that Vim behaves like 'autowrite' has
 * been set.
 */
export const autowriteall = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "autowriteall") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "autowriteall", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "autowriteall");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "autowriteall") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "autowriteall", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "autowriteall");
  },
};

/**
 * When set to "dark", Vim will try to use colors that look good on a
 * dark background.  When set to "light", Vim will try to use colors that
 * look good on a light background.  Any other value is illegal.
 * Vim tries to set the default value according to the terminal used.
 * This will not always be correct.
 * Setting this option does not change the background color, it tells Vim
 * what the background color looks like.  For changing the background
 * color, see |:hi-normal|.
 */
export const background = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "background") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "background", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "background");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "background") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "background", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "background");
  },
};

/**
 * Influences the working of <BS>, <Del>, CTRL-W and CTRL-U in Insert
 * mode.  This is a list of items, separated by commas.  Each item allows
 * a way to backspace over something:
 * value	effect	~
 * indent	allow backspacing over autoindent
 * eol	allow backspacing over line breaks (join lines)
 * start	allow backspacing over the start of insert; CTRL-W and CTRL-U
 * 	stop once at the start of insert.
 * nostop	like start, except CTRL-W and CTRL-U do not stop at the start of
 * 	insert.
 */
export const backspace = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "backspace") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backspace", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backspace");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "backspace") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backspace", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backspace");
  },
};

/**
 * Make a backup before overwriting a file.  Leave it around after the
 * file has been successfully written.  If you do not want to keep the
 * backup file, but you do want a backup while the file is being
 * written, reset this option and set the 'writebackup' option (this is
 * the default).  If you do not want a backup file at all reset both
 * options (use this if your file system is almost full).  See the
 * |backup-table| for more explanations.
 * When the 'backupskip' pattern matches, a backup is not made anyway.
 * When 'patchmode' is set, the backup may be renamed to become the
 * oldest version of a file.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const backup = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "backup") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "backup", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backup");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "backup") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "backup", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backup");
  },
};

/**
 * When writing a file and a backup is made, this option tells how it's
 * done.  This is a comma separated list of words.
 */
export const backupcopy = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "backupcopy") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupcopy", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupcopy");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "backupcopy") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupcopy", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupcopy");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "backupcopy") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "backupcopy", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "backupcopy");
  },
};

/**
 * List of directories for the backup file, separated with commas.
 * - The backup file will be created in the first directory in the list
 *   where this is possible.  The directory must exist, Vim will not
 *   create it for you.
 * - Empty means that no backup file will be created ('patchmode' is
 *   impossible!).  Writing may fail because of this.
 * - A directory "." means to put the backup file in the same directory
 *   as the edited file.
 * - A directory starting with "./" (or ".\" for MS-Windows) means to put
 *   the backup file relative to where the edited file is.  The leading
 *   "." is replaced with the path name of the edited file.
 *   ("." inside a directory name has no special meaning).
 * - Spaces after the comma are ignored, other spaces are considered part
 *   of the directory name.  To have a space at the start of a directory
 *   name, precede it with a backslash.
 * - To include a comma in a directory name precede it with a backslash.
 * - A directory name may end in an '/'.
 * - For Unix and Win32, if a directory ends in two path separators "//",
 *   the backup file name will be built from the complete path to the
 *   file with all path separators changed to percent '%' signs. This
 *   will ensure file name uniqueness in the backup directory.
 *   On Win32, it is also possible to end with "\\".  However, When a
 *   separating comma is following, you must use "//", since "\\" will
 *   include the comma in the file name. Therefore it is recommended to
 *   use '//', instead of '\\'.
 * - Environment variables are expanded |:set_env|.
 * - Careful with '\' characters, type one before a space, type two to
 *   get one in the option (see |option-backslash|), for example: >
 *     :set bdir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces
 * <	- For backwards compatibility with Vim version 3.0 a '>' at the start
 *   of the option is removed.
 * See also 'backup' and 'writebackup' options.
 * If you want to hide your backup files on Unix, consider this value: >
 * 	:set backupdir=./.backup,~/.backup,.,/tmp
 * <	You must create a ".backup" directory in each directory and in your
 * home directory for this to work properly.
 * The use of |:set+=| and |:set-=| is preferred when adding or removing
 * directories from the list.  This avoids problems when a future version
 * uses another default.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const backupdir = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "backupdir") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupdir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupdir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "backupdir") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupdir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupdir");
  },
};

/**
 * String which is appended to a file name to make the name of the
 * backup file.  The default is quite unusual, because this avoids
 * accidentally overwriting existing files with a backup file.  You might
 * prefer using ".bak", but make sure that you don't have files with
 * ".bak" that you want to keep.
 * Only normal file name characters can be used, "/\*?[|<>" are illegal.
 */
export const backupext = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "backupext") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupext", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupext");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "backupext") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupext", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupext");
  },
};

/**
 * 		{not available when compiled without the |+wildignore|
 * 		feature}
 * A list of file patterns.  When one of the patterns matches with the
 * name of the file which is written, no backup file is created.  Both
 * the specified file name and the full path name of the file are used.
 * The pattern is used like with |:autocmd|, see |autocmd-patterns|.
 * Watch out for special characters, see |option-backslash|.
 * When $TMPDIR, $TMP or $TEMP is not defined, it is not used for the
 * default value.  "/tmp/*" is only used for Unix.
 */
export const backupskip = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "backupskip") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "backupskip", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "backupskip");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "backupskip") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "backupskip", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "backupskip");
  },
};

/**
 * 		{only available when compiled with the |+balloon_eval|
 * 		feature}
 * Delay in milliseconds before a balloon may pop up.  See |balloon-eval|.
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
 * 		{only available when compiled with the |+balloon_eval|
 * 		feature}
 * Switch on the |balloon-eval| functionality for the GUI.
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
 * 		{only available when compiled with the |+balloon_eval|
 * 		feature}
 * Expression for text to show in evaluation balloon.  It is only used
 * when 'ballooneval' or 'balloonevalterm' is on.  These variables can be
 * used:
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
 * Specifies for which events the bell will not be rung. It is a comma
 * separated list of items. For each item that is present, the bell
 * will be silenced. This is most useful to specify specific events in
 * insert mode to be silenced.
 */
export const belloff = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "belloff") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "belloff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "belloff");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "belloff") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "belloff", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "belloff");
  },
};

/**
 * This option should be set before editing a binary file.  You can also
 * use the |-b| Vim argument.  When this option is switched on a few
 * options will be changed (also when it already was on):
 * 	'textwidth'  will be set to 0
 * 	'wrapmargin' will be set to 0
 * 	'modeline'   will be off
 * 	'expandtab'  will be off
 * Also, 'fileformat' and 'fileformats' options will not be used, the
 * file is read and written like 'fileformat' was "unix" (a single <NL>
 * separates lines).
 * The 'fileencoding' and 'fileencodings' options will not be used, the
 * file is read without conversion.
 * NOTE: When you start editing a(nother) file while the 'bin' option is
 * on, settings from autocommands may change the settings again (e.g.,
 * 'textwidth'), causing trouble when editing.  You might want to set
 * 'bin' again when the file has been loaded.
 * The previous values of these options are remembered and restored when
 * 'bin' is switched from on to off.  Each buffer has its own set of
 * saved option values.
 * To edit a file with 'binary' set you can use the |++bin| argument.
 * This avoids you have to do ":set bin", which would have effect for all
 * files you edit.
 * When writing a file the <EOL> for the last line is only written if
 * there was one in the original file (normally Vim appends an <EOL> to
 * the last line if there is none; this would make the file longer).  See
 * the 'endofline' option.
 */
export const binary = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "binary") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "binary", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "binary");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "binary") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "binary", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "binary");
  },
};

/**
 * 		{not available when compiled without the |+linebreak|
 * 		feature}
 * This option lets you choose which characters might cause a line
 * break if 'linebreak' is on.  Only works for ASCII and also for 8-bit
 * characters when 'encoding' is an 8-bit encoding.
 */
export const breakat = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "breakat") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "breakat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "breakat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "breakat") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "breakat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "breakat");
  },
};

/**
 * 		{not available when compiled without the |+linebreak|
 * 		feature}
 * Every wrapped line will continue visually indented (same amount of
 * space as the beginning of that line), thus preserving horizontal blocks
 * of text.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const breakindent = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "breakindent") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "breakindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "breakindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "breakindent") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "breakindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "breakindent");
  },
};

/**
 * 		{not available when compiled without the |+linebreak|
 * 		feature}
 * Settings for 'breakindent'. It can consist of the following optional
 * items and must be separated by a comma:
 * 	min:{n}	    Minimum text width that will be kept after
 * 		    applying 'breakindent', even if the resulting
 * 		    text should normally be narrower. This prevents
 * 		    text indented almost to the right window border
 * 		    occupying lot of vertical space when broken.
 * 	shift:{n}   After applying 'breakindent', the wrapped line's
 * 		    beginning will be shifted by the given number of
 * 		    characters.  It permits dynamic French paragraph
 * 		    indentation (negative) or emphasizing the line
 * 		    continuation (positive).
 * 	sbr	    Display the 'showbreak' value before applying the
 * 		    additional indent.
 * The default value for min is 20 and shift is 0.
 */
export const breakindentopt = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "breakindentopt") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "breakindentopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "breakindentopt");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "breakindentopt") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "breakindentopt", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "breakindentopt");
  },
};

/**
 * 		{only for Motif, Athena, GTK, Mac and Win32 GUI}
 * Which directory to use for the file browser:
 *    last		Use same directory as with last file browser, where a
 * 		file was opened or saved.
 *    buffer	Use the directory of the related buffer.
 *    current	Use the current directory.
 *    {path}	Use the specified directory
 */
export const browsedir = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "browsedir") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "browsedir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "browsedir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "browsedir") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "browsedir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "browsedir");
  },
};

/**
 * This option specifies what happens when a buffer is no longer
 * displayed in a window:
 *   <empty>	follow the global 'hidden' option
 *   hide		hide the buffer (don't unload it), also when 'hidden'
 * 		is not set
 *   unload	unload the buffer, also when 'hidden' is set or using
 * 		|:hide|
 *   delete	delete the buffer from the buffer list, also when
 * 		'hidden' is set or using |:hide|, like using
 * 		|:bdelete|
 *   wipe		wipe out the buffer from the buffer list, also when
 * 		'hidden' is set or using |:hide|, like using
 * 		|:bwipeout|
 */
export const bufhidden = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "bufhidden") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "bufhidden", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "bufhidden");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "bufhidden") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "bufhidden", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "bufhidden");
  },
};

/**
 * When this option is set, the buffer shows up in the buffer list.  If
 * it is reset it is not used for ":bnext", "ls", the Buffers menu, etc.
 * This option is reset by Vim for buffers that are only used to remember
 * a file name or marks.  Vim sets it when starting to edit a buffer.
 * But not when moving to a buffer with ":buffer".
 */
export const buflisted = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "buflisted") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "buflisted", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "buflisted");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "buflisted") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "buflisted", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "buflisted");
  },
};

/**
 * The value of this option specifies the type of a buffer:
 *   <empty>	normal buffer
 *   nofile	buffer which is not related to a file and will not be
 * 		written
 *   nowrite	buffer which will not be written
 *   acwrite	buffer which will always be written with BufWriteCmd
 * 		autocommands.
 *   quickfix	quickfix buffer, contains list of errors |:cwindow|
 * 		or list of locations |:lwindow|
 *   help		help buffer (you are not supposed to set this
 * 		manually)
 *   terminal	buffer for a |terminal| (you are not supposed to set
 * 		this manually)
 *   prompt	buffer where only the last line can be edited, meant
 * 		to be used by a plugin, see |prompt-buffer|
 * 		{only when compiled with the |+channel| feature}
 *   popup		buffer used in a popup window, see |popup|.
 * 		{only when compiled with the |+textprop| feature}
 */
export const buftype = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "buftype") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "buftype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "buftype");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "buftype") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "buftype", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "buftype");
  },
};

/**
 * Specifies details about changing the case of letters.  It may contain
 * these words, separated by a comma:
 * internal	Use internal case mapping functions, the current
 * 		locale does not change the case mapping.  This only
 * 		matters when 'encoding' is a Unicode encoding,
 * 		"latin1" or "iso-8859-15".  When "internal" is
 * 		omitted, the towupper() and towlower() system library
 * 		functions are used when available.
 * keepascii	For the ASCII characters (0x00 to 0x7f) use the US
 * 		case mapping, the current locale is not effective.
 * 		This probably only matters for Turkish.
 */
export const casemap = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "casemap") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "casemap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "casemap");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "casemap") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "casemap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "casemap");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+file_in_path| feature}
 * This is a list of directories which will be searched when using the
 * |:cd|, |:tcd| and |:lcd| commands, provided that the directory being
 * searched for has a relative path, not an absolute part starting with
 * "/", "./" or "../", the 'cdpath' option is not used then.
 * The 'cdpath' option's value has the same form and semantics as
 * |'path'|.  Also see |file-searching|.
 * The default value is taken from $CDPATH, with a "," prepended to look
 * in the current directory first.
 * If the default value taken from $CDPATH is not what you want, include
 * a modified version of the following command in your vimrc file to
 * override it: >
 *   :let &cdpath = ',' . substitute(substitute($CDPATH, '[, ]', '\\\0', 'g'), ':', ',', 'g')
 * <	This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 * (parts of 'cdpath' can be passed to the shell to expand file names).
 */
export const cdpath = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cdpath") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cdpath", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cdpath");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "cdpath") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cdpath", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cdpath");
  },
};

/**
 * 		{only available when compiled with the |+eval| feature}
 * An expression that is used for character encoding conversion.  It is
 * evaluated when a file that is to be read or has been written has a
 * different encoding from what is desired.
 * 'charconvert' is not used when the internal iconv() function is
 * supported and is able to do the conversion.  Using iconv() is
 * preferred, because it is much faster.
 * 'charconvert' is not used when reading stdin |--|, because there is no
 * file to convert from.  You will have to save the text in a file first.
 * The expression must return zero or an empty string for success,
 * non-zero for failure.
 * The possible encoding names encountered are in 'encoding'.
 * Additionally, names given in 'fileencodings' and 'fileencoding' are
 * used.
 * Conversion between "latin1", "unicode", "ucs-2", "ucs-4" and "utf-8"
 * is done internally by Vim, 'charconvert' is not used for this.
 * 'charconvert' is also used to convert the viminfo file, if the 'c'
 * flag is present in 'viminfo'.  Also used for Unicode conversion.
 * Example: >
 * 	set charconvert=CharConvert()
 * 	fun CharConvert()
 * 	  system("recode "
 * 		\ . v:charconvert_from . ".." . v:charconvert_to
 * 		\ . " <" . v:fname_in . " >" v:fname_out)
 * 	  return v:shell_error
 * 	endfun
 * <	The related Vim variables are:
 * 	v:charconvert_from	name of the current encoding
 * 	v:charconvert_to	name of the desired encoding
 * 	v:fname_in		name of the input file
 * 	v:fname_out		name of the output file
 * Note that v:fname_in and v:fname_out will never be the same.
 * Note that v:charconvert_from and v:charconvert_to may be different
 * from 'encoding'.  Vim internally uses UTF-8 instead of UCS-2 or UCS-4.
 * Encryption is not done by Vim when using 'charconvert'.  If you want
 * to encrypt the file after conversion, 'charconvert' should take care
 * of this.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const charconvert = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "charconvert") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "charconvert", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "charconvert");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "charconvert") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "charconvert", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "charconvert");
  },
};

/**
 * 		{not available when compiled without the |+cindent|
 * 		feature}
 * Enables automatic C program indenting.  See 'cinkeys' to set the keys
 * that trigger reindenting in insert mode and 'cinoptions' to set your
 * preferred indent style.
 * If 'indentexpr' is not empty, it overrules 'cindent'.
 * If 'lisp' is not on and both 'indentexpr' and 'equalprg' are empty,
 * the "=" operator indents using this algorithm rather than calling an
 * external program.
 * See |C-indenting|.
 * When you don't like the way 'cindent' works, try the 'smartindent'
 * option or 'indentexpr'.
 * This option is not used when 'paste' is set.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const cindent = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cindent") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "cindent") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cindent");
  },
};

/**
 * 		{not available when compiled without the |+cindent|
 * 		feature}
 * A list of keys that, when typed in Insert mode, cause reindenting of
 * the current line.  Only used if 'cindent' is on and 'indentexpr' is
 * empty.
 * For the format of this option see |cinkeys-format|.
 * See |C-indenting|.
 */
export const cinkeys = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cinkeys") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinkeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinkeys");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "cinkeys") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinkeys", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinkeys");
  },
};

/**
 * 		{not available when compiled without the |+cindent|
 * 		feature}
 * The 'cinoptions' affect the way 'cindent' reindents lines in a C
 * program.  See |cinoptions-values| for the values of this option, and
 * |C-indenting| for info on C indenting in general.
 */
export const cinoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cinoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinoptions");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "cinoptions") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinoptions", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinoptions");
  },
};

/**
 * 		{not available when compiled without both the
 * 		|+cindent| and the |+smartindent| features}
 * These keywords start an extra indent in the next line when
 * 'smartindent' or 'cindent' is set.  For 'cindent' this is only done at
 * an appropriate place (inside {}).
 * Note that 'ignorecase' isn't used for 'cinwords'.  If case doesn't
 * matter, include the keyword both the uppercase and lowercase:
 * "if,If,IF".
 */
export const cinwords = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cinwords") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cinwords", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cinwords");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "cinwords") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "cinwords", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cinwords");
  },
};

/**
 * 		{only in GUI versions or when the |+xterm_clipboard|
 * 		feature is included}
 * This option is a list of comma separated names.
 * Note: if one of the items is "exclude:", then you can't add an item
 * after that.  Therefore do append an item with += but use ^= to
 * prepend, e.g.: >
 * 	set clipboard^=unnamed
 * <	These names are recognized:
 */
export const clipboard = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "clipboard") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "clipboard", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "clipboard");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "clipboard") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "clipboard", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "clipboard");
  },
};

/**
 * Number of screen lines to use for the command-line.  Helps avoiding
 * |hit-enter| prompts.
 * The value of this option is stored with the tab page, so that each tab
 * page can have a different value.
 */
export const cmdheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "cmdheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cmdheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cmdheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "cmdheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cmdheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cmdheight");
  },
};

/**
 * Number of screen lines to use for the command-line window. |cmdwin|
 */
export const cmdwinheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "cmdwinheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cmdwinheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cmdwinheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "cmdwinheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cmdwinheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cmdwinheight");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * 'colorcolumn' is a comma separated list of screen columns that are
 * highlighted with ColorColumn |hl-ColorColumn|.  Useful to align
 * text.  Will make screen redrawing slower.
 * The screen column can be an absolute number, or a number preceded with
 * '+' or '-', which is added to or subtracted from 'textwidth'. >
 */
export const colorcolumn = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "colorcolumn") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "colorcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "colorcolumn");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "colorcolumn") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "colorcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "colorcolumn");
  },
};

/**
 * Number of columns of the screen.  Normally this is set by the terminal
 * initialization and does not have to be set by hand.  Also see
 * |posix-screen-size|.
 * When Vim is running in the GUI or in a resizable window, setting this
 * option will cause the window size to be changed.  When you only want
 * to use the size for the GUI, put the command in your |gvimrc| file.
 * When you set this option and Vim is unable to change the physical
 * number of columns of the display, the display may be messed up.  For
 * the GUI it is always possible and Vim limits the number of columns to
 * what fits on the screen.  You can use this command to get the widest
 * window possible: >
 * 	:set columns=9999
 * <	Minimum value is 12, maximum value is 10000.
 */
export const columns = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "columns") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "columns", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "columns");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "columns") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "columns", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "columns");
  },
};

/**
 * A comma separated list of strings that can start a comment line.  See
 * |format-comments|.  See |option-backslash| about using backslashes to
 * insert a space.
 */
export const comments = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "comments") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "comments", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "comments");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "comments") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "comments", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "comments");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * A template for a comment.  The "%s" in the value is replaced with the
 * comment text.  Currently only used to add markers for folding, see
 * |fold-marker|.
 */
export const commentstring = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "commentstring") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "commentstring", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "commentstring");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "commentstring") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "commentstring", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "commentstring");
  },
};

/**
 * This option specifies how keyword completion |ins-completion| works
 * when CTRL-P or CTRL-N are used.  It is also used for whole-line
 * completion |i_CTRL-X_CTRL-L|.  It indicates the type of completion
 * and the places to scan.  It is a comma separated list of flags:
 * .	scan the current buffer ('wrapscan' is ignored)
 * w	scan buffers from other windows
 * b	scan other loaded buffers that are in the buffer list
 * u	scan the unloaded buffers that are in the buffer list
 * U	scan the buffers that are not in the buffer list
 * k	scan the files given with the 'dictionary' option
 * kspell  use the currently active spell checking |spell|
 * k{dict}	scan the file {dict}.  Several "k" flags can be given,
 * 	patterns are valid too.  For example: >
 * 		:set cpt=k/usr/dict/*,k~/spanish
 * <	s	scan the files given with the 'thesaurus' option
 * s{tsr}	scan the file {tsr}.  Several "s" flags can be given, patterns
 * 	are valid too.
 * i	scan current and included files
 * d	scan current and included files for defined name or macro
 * 	|i_CTRL-X_CTRL-D|
 * ]	tag completion
 * t	same as "]"
 */
export const complete = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "complete") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "complete", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "complete");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "complete") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "complete", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "complete");
  },
};

/**
 * 		{not available when compiled without the |+eval|
 * 		feature}
 * This option specifies a function to be used for Insert mode completion
 * with CTRL-X CTRL-U. |i_CTRL-X_CTRL-U|
 * See |complete-functions| for an explanation of how the function is
 * invoked and what it should return.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const completefunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "completefunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completefunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completefunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "completefunc") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "completefunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "completefunc");
  },
};

/**
 * 		{only for MS-Windows}
 * When this option is set it overrules 'shellslash' for completion:
 * - When this option is set to "slash", a forward slash is used for path
 *   completion in insert mode. This is useful when editing HTML tag, or
 *   Makefile with 'noshellslash' on MS-Windows.
 * - When this option is set to "backslash", backslash is used. This is
 *   useful when editing a batch file with 'shellslash' set on MS-Windows.
 * - When this option is empty, same character is used as for
 *   'shellslash'.
 * For Insert mode completion the buffer-local value is used.  For
 * command line completion the global value is used.
 */
export const completeslash = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "completeslash") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completeslash", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completeslash");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "completeslash") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "completeslash", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "completeslash");
  },
};

/**
 * A comma separated list of options for Insert mode completion
 * |ins-completion|.  The supported values are:
 */
export const completeopt = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "completeopt") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "completeopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "completeopt");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "completeopt") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "completeopt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "completeopt");
  },
};

/**
 * 		{not available when compiled without the |+conceal|
 * 		feature}
 * Sets the modes in which text in the cursor line can also be concealed.
 * When the current mode is listed then concealing happens just like in
 * other lines.
 *   n		Normal mode
 *   v		Visual mode
 *   i		Insert mode
 *   c		Command line editing, for 'incsearch'
 */
export const concealcursor = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "concealcursor") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "concealcursor", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "concealcursor");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "concealcursor") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "concealcursor", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "concealcursor");
  },
};

/**
 * 		{not available when compiled without the |+conceal|
 * 		feature}
 * Determine how text with the "conceal" syntax attribute |:syn-conceal|
 * is shown:
 */
export const conceallevel = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "conceallevel") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "conceallevel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "conceallevel");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "conceallevel") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "conceallevel", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "conceallevel");
  },
};

/**
 * When 'confirm' is on, certain operations that would normally
 * fail because of unsaved changes to a buffer, e.g. ":q" and ":e",
 * instead raise a |dialog| asking if you wish to save the current
 * file(s).  You can still use a ! to unconditionally |abandon| a buffer.
 * If 'confirm' is off you can still activate confirmation for one
 * command only (this is most useful in mappings) with the |:confirm|
 * command.
 * Also see the |confirm()| function and the 'v' flag in 'guioptions'.
 */
export const confirm = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "confirm") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "confirm", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "confirm");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "confirm") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "confirm", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "confirm");
  },
};

/**
 * Copy the structure of the existing lines indent when autoindenting a
 * new line.  Normally the new indent is reconstructed by a series of
 * tabs followed by spaces as required (unless |'expandtab'| is enabled,
 * in which case only spaces are used).  Enabling this option makes the
 * new line copy whatever characters were used for indenting on the
 * existing line.  'expandtab' has no effect on these characters, a Tab
 * remains a Tab.  If the new indent is greater than on the existing
 * line, the remaining space is filled in the normal manner.
 * NOTE: This option is reset when 'compatible' is set.
 * Also see 'preserveindent'.
 */
export const copyindent = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "copyindent") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "copyindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "copyindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "copyindent") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "copyindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "copyindent");
  },
};

/**
 * A sequence of single character flags.  When a character is present
 * this indicates Vi-compatible behavior.  This is used for things where
 * not being Vi-compatible is mostly or sometimes preferred.
 * 'cpoptions' stands for "compatible-options".
 * Commas can be added for readability.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" |add-option-flags|.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 * NOTE: This option is set to the POSIX default value at startup when
 * the Vi default value would be used and the $VIM_POSIX environment
 * variable exists |posix|.  This means Vim tries to behave like the
 * POSIX specification.
 */
export const cpoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cpoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cpoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cpoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "cpoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cpoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cpoptions");
  },
};

/**
 * 		{not available when compiled without the |+cscope|
 * 		feature}
 * Determines how many components of the path to show in a list of tags.
 * See |cscopepathcomp|.
 * NOTE: This option is set to 0 when 'compatible' is set.
 */
export const cscopepathcomp = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "cscopepathcomp") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cscopepathcomp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopepathcomp");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "cscopepathcomp") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cscopepathcomp", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopepathcomp");
  },
};

/**
 * 		{not available when compiled without the |+cscope|
 * 		feature}
 * Specifies the command to execute cscope.  See |cscopeprg|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const cscopeprg = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cscopeprg") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cscopeprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopeprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "cscopeprg") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cscopeprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopeprg");
  },
};

/**
 * 		{not available when compiled without the |+cscope|
 * 		or |+quickfix| features}
 * Specifies whether to use quickfix window to show cscope results.
 * See |cscopequickfix|.
 */
export const cscopequickfix = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "cscopequickfix") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "cscopequickfix", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopequickfix");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "cscopequickfix") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "cscopequickfix", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopequickfix");
  },
};

/**
 * 		{not available when compiled without the |+cscope|
 * 		feature}
 * In the absence of a prefix (-P) for cscope. setting this option enables
 * to use the basename of cscope.out path as the prefix.
 * See |cscoperelative|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const cscoperelative = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cscoperelative") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cscoperelative", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscoperelative");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "cscoperelative") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "cscoperelative", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscoperelative");
  },
};

/**
 * 		{not available when compiled without the |+cscope|
 * 		feature}
 * Use cscope for tag commands.  See |cscope-options|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const cscopetag = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cscopetag") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cscopetag", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopetag");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "cscopetag") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "cscopetag", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopetag");
  },
};

/**
 * 		{not available when compiled without the |+cscope|
 * 		feature}
 * Determines the order in which ":cstag" performs a search.  See
 * |cscopetagorder|.
 * NOTE: This option is set to 0 when 'compatible' is set.
 */
export const cscopetagorder = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "cscopetagorder") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "cscopetagorder", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cscopetagorder");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "cscopetagorder") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "cscopetagorder", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "cscopetagorder");
  },
};

/**
 * When this option is set, as the cursor in the current
 * window moves other cursorbound windows (windows that also have
 * this option set) move their cursors to the corresponding line and
 * column.  This option is useful for viewing the
 * differences between two versions of a file (see 'diff'); in diff mode,
 * inserted and deleted lines (though not characters within a line) are
 * taken into account.
 */
export const cursorbind = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cursorbind") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cursorbind", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorbind");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "cursorbind") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cursorbind", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorbind");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Highlight the screen column of the cursor with CursorColumn
 * |hl-CursorColumn|.  Useful to align text.  Will make screen redrawing
 * slower.
 * If you only want the highlighting in the current window you can use
 * these autocommands: >
 * 	au WinLeave * set nocursorline nocursorcolumn
 * 	au WinEnter * set cursorline cursorcolumn
 * <
 */
export const cursorcolumn = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cursorcolumn") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cursorcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorcolumn");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "cursorcolumn") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cursorcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorcolumn");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Highlight the text line of the cursor with CursorLine |hl-CursorLine|.
 * Useful to easily spot the cursor.  Will make screen redrawing slower.
 * When Visual mode is active the highlighting isn't used to make it
 * easier to see the selected text.
 */
export const cursorline = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "cursorline") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "cursorline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "cursorline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "cursorline") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "cursorline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "cursorline");
  },
};

/**
 * Pattern to be used to find a macro definition.  It is a search
 * pattern, just like for the "/" command.  This option is used for the
 * commands like "[i" and "[d" |include-search|.  The 'isident' option is
 * used to recognize the defined name after the match:
 * 	{match with 'define'}{non-ID chars}{defined name}{non-ID char}
 * See |option-backslash| about inserting backslashes to include a space
 * or backslash.
 * The default value is for C programs.  For C++ this value would be
 * useful, to include const type declarations: >
 * 	^\(#\s\s[a-z]*\)
 * <	You can also use "\ze" just before the name and continue the pattern
 * to check what is following.  E.g. for Javascript, if a function is
 * defined with "func_name = function(args)": >
 * 	^\s=\s*function(
 * <	If the function is defined with "func_name : function() {...": >
 *         ^\s[:]\sfunction\s*(
 * <	When using the ":set" command, you need to double the backslashes!
 * To avoid that use `:let` with a single quote string: >
 * 	let &l:define = '^\s=\s*function('
 * <
 */
export const define = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "define") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "define", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "define");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "define") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "define", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "define");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "define") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "define", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "define");
  },
};

/**
 * If editing Unicode and this option is set, backspace and Normal mode
 * "x" delete each combining character on its own.  When it is off (the
 * default) the character along with its combining characters are
 * deleted.
 * Note: When 'delcombine' is set "xx" may work differently from "2x"!
 */
export const delcombine = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "delcombine") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "delcombine", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "delcombine");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "delcombine") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "delcombine", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "delcombine");
  },
};

/**
 * List of file names, separated by commas, that are used to lookup words
 * for keyword completion commands |i_CTRL-X_CTRL-K|.  Each file should
 * contain a list of words.  This can be one word per line, or several
 * words per line, separated by non-keyword characters (white space is
 * preferred).  Maximum line length is 510 bytes.
 */
export const dictionary = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "dictionary") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "dictionary", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "dictionary");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "dictionary") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "dictionary", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "dictionary");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "dictionary") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "dictionary", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "dictionary");
  },
};

/**
 * 		{not available when compiled without the |+diff|
 * 		feature}
 * Expression which is evaluated to obtain a diff file (either ed-style
 * or unified-style) from two versions of a file.  See |diff-diffexpr|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const diffexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "diffexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "diffexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "diffexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "diffexpr") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "diffexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "diffexpr");
  },
};

/**
 * 		{not available when compiled without the |+diff|
 * 		feature}
 * Option settings for diff mode.  It can consist of the following items.
 * All are optional.  Items must be separated by a comma.
 */
export const diffopt = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "diffopt") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "diffopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "diffopt");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "diffopt") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "diffopt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "diffopt");
  },
};

/**
 * 		{not available when compiled without the |+digraphs|
 * 		feature}
 * Enable the entering of digraphs in Insert mode with {char1} <BS>
 * {char2}.  See |digraphs|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const digraph = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "digraph") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "digraph", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "digraph");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "digraph") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "digraph", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "digraph");
  },
};

/**
 * List of directory names for the swap file, separated with commas.
 * Recommended value:  ".,~/vimswap//" - this will put the swap file next
 * to the edited file if possible, and in your personal swap directory
 * otherwise.  Make sure "~/vimswap//" is only readable for you.
 */
export const directory = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "directory") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "directory", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "directory");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "directory") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "directory", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "directory");
  },
};

/**
 * Change the way text is displayed.  This is comma separated list of
 * flags:
 * lastline	When included, as much as possible of the last line
 * 		in a window will be displayed.  "@@@" is put in the
 * 		last columns of the last screen line to indicate the
 * 		rest of the line is not displayed.
 * truncate	Like "lastline", but "@@@" is displayed in the first
 * 		column of the last screen line.  Overrules "lastline".
 * uhex		Show unprintable characters hexadecimal as <xx>
 * 		instead of using ^C and ~C.
 */
export const display = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "display") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "display", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "display");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "display") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "display", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "display");
  },
};

/**
 * Tells when the 'equalalways' option applies:
 * 	ver	vertically, width of windows is not affected
 * 	hor	horizontally, height of windows is not affected
 * 	both	width and height of windows is affected
 */
export const eadirection = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "eadirection") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "eadirection", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "eadirection");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "eadirection") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "eadirection", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "eadirection");
  },
};

/**
 * When on all Unicode emoji characters are considered to be full width.
 * This excludes "text emoji" characters, which are normally displayed as
 * single width.  Unfortunately there is no good specification for this
 * and it has been determined on trial-and-error basis.  Use the
 * |setcellwidths()| function to change the behavior.
 */
export const emoji = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "emoji") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "emoji", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "emoji");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "emoji") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "emoji", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "emoji");
  },
};

/**
 * Sets the character encoding used inside Vim.  It applies to text in
 * the buffers, registers, Strings in expressions, text stored in the
 * viminfo file, etc.  It sets the kind of characters which Vim can work
 * with.  See |encoding-names| for the possible values.
 */
export const encoding = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "encoding") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "encoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "encoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "encoding") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "encoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "encoding");
  },
};

/**
 * When writing a file and this option is off and the 'binary' option
 * is on, or 'fixeol' option is off, no <EOL> will be written for the
 * last line in the file.  This option is automatically set or reset when
 * starting to edit a new file, depending on whether file has an <EOL>
 * for the last line in the file.  Normally you don't have to set or
 * reset this option.
 * When 'binary' is off and 'fixeol' is on the value is not used when
 * writing the file.  When 'binary' is on or 'fixeol' is off it is used
 * to remember the presence of a <EOL> for the last line in the file, so
 * that when you write the file the situation from the original file can
 * be kept.  But you can change it if you want to.
 */
export const endofline = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "endofline") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "endofline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "endofline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "endofline") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "endofline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "endofline");
  },
};

/**
 * When on, all the windows are automatically made the same size after
 * splitting or closing a window.  This also happens the moment the
 * option is switched on.  When off, splitting a window will reduce the
 * size of the current window and leave the other windows the same.  When
 * closing a window the extra lines are given to the window next to it
 * (depending on 'splitbelow' and 'splitright').
 * When mixing vertically and horizontally split windows, a minimal size
 * is computed and some windows may be larger if there is room.  The
 * 'eadirection' option tells in which direction the size is affected.
 * Changing the height and width of a window can be avoided by setting
 * 'winfixheight' and 'winfixwidth', respectively.
 * If a window size is specified when creating a new window sizes are
 * currently not equalized (it's complicated, but may be implemented in
 * the future).
 */
export const equalalways = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "equalalways") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "equalalways", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "equalalways");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "equalalways") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "equalalways", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "equalalways");
  },
};

/**
 * External program to use for "=" command.  When this option is empty
 * the internal formatting functions are used; either 'lisp', 'cindent'
 * or 'indentexpr'.  When Vim was compiled without internal formatting,
 * the "indent" program is used.
 * Environment variables are expanded |:set_env|.  See |option-backslash|
 * about including spaces and backslashes.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const equalprg = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "equalprg") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "equalprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "equalprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "equalprg") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "equalprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "equalprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "equalprg") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "equalprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "equalprg");
  },
};

/**
 * Ring the bell (beep or screen flash) for error messages.  This only
 * makes a difference for error messages, the bell will be used always
 * for a lot of errors without a message (e.g., hitting <Esc> in Normal
 * mode).  See 'visualbell' on how to make the bell behave like a beep,
 * screen flash or do nothing. See 'belloff' to finetune when to ring the
 * bell.
 */
export const errorbells = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "errorbells") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "errorbells", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "errorbells");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "errorbells") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "errorbells", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "errorbells");
  },
};

/**
 * 		{not available when compiled without the |+quickfix|
 * 		feature}
 * Name of the errorfile for the QuickFix mode (see |:cf|).
 * When the "-q" command-line argument is used, 'errorfile' is set to the
 * following argument.  See |-q|.
 * NOT used for the ":make" command.  See 'makeef' for that.
 * Environment variables are expanded |:set_env|.
 * See |option-backslash| about including spaces and backslashes.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const errorfile = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "errorfile") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "errorfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "errorfile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "errorfile") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "errorfile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "errorfile");
  },
};

/**
 * 		{not available when compiled without the |+quickfix|
 * 		feature}
 * Scanf-like description of the format for the lines in the error file
 * (see |errorformat|).
 */
export const errorformat = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "errorformat") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "errorformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "errorformat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "errorformat") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "errorformat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "errorformat");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "errorformat") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "errorformat", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "errorformat");
  },
};

/**
 * A list of autocommand event names, which are to be ignored.
 * When set to "all" or when "all" is one of the items, all autocommand
 * events are ignored, autocommands will not be executed.
 * Otherwise this is a comma separated list of event names.  Example: >
 *     :set ei=WinEnter,WinLeave
 * <
 */
export const eventignore = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "eventignore") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "eventignore", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "eventignore");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "eventignore") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "eventignore", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "eventignore");
  },
};

/**
 * In Insert mode: Use the appropriate number of spaces to insert a
 * <Tab>.  Spaces are used in indents with the '>' and '<' commands and
 * when 'autoindent' is on.  To insert a real tab when 'expandtab' is
 * on, use CTRL-V<Tab>.  See also |:retab| and |ins-expandtab|.
 * This option is reset when the 'paste' option is set and restored when
 * the 'paste' option is reset.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const expandtab = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "expandtab") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "expandtab", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "expandtab");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "expandtab") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "expandtab", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "expandtab");
  },
};

/**
 * Sets the character encoding for the file of this buffer.
 */
export const fileencoding = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "fileencoding") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileencoding");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "fileencoding") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "fileencoding", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fileencoding");
  },
};

/**
 * This is a list of character encodings considered when starting to edit
 * an existing file.  When a file is read, Vim tries to use the first
 * mentioned character encoding.  If an error is detected, the next one
 * in the list is tried.  When an encoding is found that works,
 * 'fileencoding' is set to it.  If all fail, 'fileencoding' is set to
 * an empty string, which means the value of 'encoding' is used.
 * 	WARNING: Conversion can cause loss of information!  When
 * 	'encoding' is "utf-8" (or one of the other Unicode variants)
 * 	conversion is most likely done in a way that the reverse
 * 	conversion results in the same text.  When 'encoding' is not
 * 	"utf-8" some non-ASCII characters may be lost!  You can use
 * 	the |++bad| argument to specify what is done with characters
 * 	that can't be converted.
 * For an empty file or a file with only ASCII characters most encodings
 * will work and the first entry of 'fileencodings' will be used (except
 * "ucs-bom", which requires the BOM to be present).  If you prefer
 * another encoding use an BufReadPost autocommand event to test if your
 * preferred encoding is to be used.  Example: >
 * 	au BufReadPost * if search('\S', 'w') == 0 |
 * 		\ set fenc=iso-2022-jp | endif
 * <	This sets 'fileencoding' to "iso-2022-jp" if the file does not contain
 * non-blank characters.
 * When the |++enc| argument is used then the value of 'fileencodings' is
 * not used.
 * Note that 'fileencodings' is not used for a new file, the global value
 * of 'fileencoding' is used instead.  You can set it with: >
 * 	:setglobal fenc=iso-8859-2
 * <	This means that a non-existing file may get a different encoding than
 * an empty file.
 * The special value "ucs-bom" can be used to check for a Unicode BOM
 * (Byte Order Mark) at the start of the file.  It must not be preceded
 * by "utf-8" or another Unicode encoding for this to work properly.
 * An entry for an 8-bit encoding (e.g., "latin1") should be the last,
 * because Vim cannot detect an error, thus the encoding is always
 * accepted.
 * The special value "default" can be used for the encoding from the
 * environment.  On MS-Windows this is the system encoding.  Otherwise
 * this is the default value for 'encoding'.  It is useful when
 * 'encoding' is set to "utf-8" and your environment uses a non-latin1
 * encoding, such as Russian.
 * When 'encoding' is "utf-8" and a file contains an illegal byte
 * sequence it won't be recognized as UTF-8.  You can use the |8g8|
 * command to find the illegal byte sequence.
 * WRONG VALUES:			WHAT'S WRONG:
 * 	latin1,utf-8		"latin1" will always be used
 * 	utf-8,ucs-bom,latin1	BOM won't be recognized in an utf-8
 * 				file
 * 	cp1250,latin1		"cp1250" will always be used
 * If 'fileencodings' is empty, 'fileencoding' is not modified.
 * See 'fileencoding' for the possible values.
 * Setting this option does not have an effect until the next time a file
 * is read.
 */
export const fileencodings = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "fileencodings") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileencodings", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileencodings");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "fileencodings") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "fileencodings", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fileencodings");
  },
};

/**
 * This gives the <EOL> of the current buffer, which is used for
 * reading/writing the buffer from/to a file:
 *     dos	    <CR><NL>
 *     unix    <NL>
 *     mac	    <CR>
 * When "dos" is used, CTRL-Z at the end of a file is ignored.
 * See |file-formats| and |file-read|.
 * For the character encoding of the file see 'fileencoding'.
 * When 'binary' is set, the value of 'fileformat' is ignored, file I/O
 * works like it was set to "unix".
 * This option is set automatically when starting to edit a file and
 * 'fileformats' is not empty and 'binary' is off.
 * When this option is set, after starting to edit a file, the 'modified'
 * option is set, because the file would be different when written.
 * This option can not be changed when 'modifiable' is off.
 * For backwards compatibility: When this option is set to "dos",
 * 'textmode' is set, otherwise 'textmode' is reset.
 */
export const fileformat = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "fileformat") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileformat");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "fileformat") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "fileformat", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fileformat");
  },
};

/**
 * This gives the end-of-line (<EOL>) formats that will be tried when
 * starting to edit a new buffer and when reading a file into an existing
 * buffer:
 * - When empty, the format defined with 'fileformat' will be used
 *   always.  It is not set automatically.
 * - When set to one name, that format will be used whenever a new buffer
 *   is opened.  'fileformat' is set accordingly for that buffer.  The
 *   'fileformats' name will be used when a file is read into an existing
 *   buffer, no matter what 'fileformat' for that buffer is set to.
 * - When more than one name is present, separated by commas, automatic
 *   <EOL> detection will be done when reading a file.  When starting to
 *   edit a file, a check is done for the <EOL>:
 *   1. If all lines end in <CR><NL>, and 'fileformats' includes "dos",
 *      'fileformat' is set to "dos".
 *   2. If a <NL> is found and 'fileformats' includes "unix", 'fileformat'
 *      is set to "unix".  Note that when a <NL> is found without a
 *      preceding <CR>, "unix" is preferred over "dos".
 *   3. If 'fileformat' has not yet been set, and if a <CR> is found, and
 *      if 'fileformats' includes "mac", 'fileformat' is set to "mac".
 *      This means that "mac" is only chosen when:
 *       "unix" is not present or no <NL> is found in the file, and
 *       "dos" is not present or no <CR><NL> is found in the file.
 *      Except: if "unix" was chosen, but there is a <CR> before
 *      the first <NL>, and there appear to be more <CR>s than <NL>s in
 *      the first few lines, "mac" is used.
 *   4. If 'fileformat' is still not set, the first name from
 *      'fileformats' is used.
 *   When reading a file into an existing buffer, the same is done, but
 *   this happens like 'fileformat' has been set appropriately for that
 *   file only, the option is not changed.
 * When 'binary' is set, the value of 'fileformats' is not used.
 */
export const fileformats = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "fileformats") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fileformats", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileformats");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "fileformats") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "fileformats", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fileformats");
  },
};

/**
 * When set case is ignored when using file names and directories.
 * See 'wildignorecase' for only ignoring case when doing completion.
 */
export const fileignorecase = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "fileignorecase") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fileignorecase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fileignorecase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "fileignorecase") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "fileignorecase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fileignorecase");
  },
};

/**
 * When this option is set, the FileType autocommand event is triggered.
 * All autocommands that match with the value of this option will be
 * executed.  Thus the value of 'filetype' is used in place of the file
 * name.
 * Otherwise this option does not always reflect the current file type.
 * This option is normally set when the file type is detected.  To enable
 * this use the ":filetype on" command. |:filetype|
 * Setting this option to a different value is most useful in a modeline,
 * for a file for which the file type is not automatically recognized.
 * Example, for in an IDL file:
 * 	// ~
 * |FileType| |filetypes|
 * When a dot appears in the value then this separates two filetype
 * names.  Example:
 * 	// ~
 * This will use the "c" filetype first, then the "doxygen" filetype.
 * This works both for filetype plugins and for syntax files.  More than
 * one dot may appear.
 * This option is not copied to another buffer, independent of the 's' or
 * 'S' flag in 'cpoptions'.
 * Only normal file name characters can be used, "/\*?[|<>" are illegal.
 */
export const filetype = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "filetype") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "filetype", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "filetype");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "filetype") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "filetype", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "filetype");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Characters to fill the statuslines and vertical separators.
 * It is a comma separated list of items:
 */
export const fillchars = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "fillchars") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "fillchars", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fillchars");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "fillchars") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "fillchars", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fillchars");
  },
};

/**
 * When writing a file and this option is on, <EOL> at the end of file
 * will be restored if missing. Turn this option off if you want to
 * preserve the situation from the original file.
 * When the 'binary' option is set the value of this option doesn't
 * matter.
 * See the 'endofline' option.
 */
export const fixendofline = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "fixendofline") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fixendofline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fixendofline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "fixendofline") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "fixendofline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "fixendofline");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * When set to "all", a fold is closed when the cursor isn't in it and
 * its level is higher than 'foldlevel'.  Useful if you want folds to
 * automatically close when moving out of them.
 */
export const foldclose = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldclose") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldclose", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldclose");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "foldclose") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "foldclose", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "foldclose");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * When non-zero, a column with the specified width is shown at the side
 * of the window which indicates open and closed folds.  The maximum
 * value is 12.
 * See |folding|.
 */
export const foldcolumn = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "foldcolumn") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldcolumn");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "foldcolumn") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldcolumn");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * When off, all folds are open.  This option can be used to quickly
 * switch between showing all text unfolded and viewing the text with
 * folds (including manually opened or closed folds).  It can be toggled
 * with the |zi| command.  The 'foldcolumn' will remain blank when
 * 'foldenable' is off.
 * This option is set by commands that create a new fold or close a fold.
 * See |folding|.
 */
export const foldenable = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "foldenable") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "foldenable", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldenable");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "foldenable") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "foldenable", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldenable");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		or |+eval| features}
 * The expression used for when 'foldmethod' is "expr".  It is evaluated
 * for each line to obtain its fold level.  See |fold-expr|.
 */
export const foldexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "foldexpr") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldexpr");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Used only when 'foldmethod' is "indent".  Lines starting with
 * characters in 'foldignore' will get their fold level from surrounding
 * lines.  White space is skipped before checking for this character.
 * The default "#" works well for C programs.  See |fold-indent|.
 */
export const foldignore = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldignore") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldignore", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldignore");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "foldignore") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldignore", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldignore");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Sets the fold level: Folds with a higher level will be closed.
 * Setting this option to zero will close all folds.  Higher numbers will
 * close fewer folds.
 * This option is set by commands like |zm|, |zM| and |zR|.
 * See |fold-foldlevel|.
 */
export const foldlevel = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "foldlevel") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldlevel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldlevel");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "foldlevel") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldlevel", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldlevel");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Sets 'foldlevel' when starting to edit another buffer in a window.
 * Useful to always start editing with all folds closed (value zero),
 * some folds closed (one) or no folds closed (99).
 * This is done before reading any modeline, thus a setting in a modeline
 * overrules this option.  Starting to edit a file for |diff-mode| also
 * ignores this option and closes all folds.
 * It is also done before BufReadPre autocommands, to allow an autocmd to
 * overrule the 'foldlevel' value for specific files.
 * When the value is negative, it is not used.
 */
export const foldlevelstart = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "foldlevelstart") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldlevelstart", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldlevelstart");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "foldlevelstart") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "foldlevelstart", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "foldlevelstart");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * The start and end marker used when 'foldmethod' is "marker".  There
 * must be one comma, which separates the start and end marker.  The
 * marker is a literal string (a regular expression would be too slow).
 * See |fold-marker|.
 */
export const foldmarker = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldmarker") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldmarker", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldmarker");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "foldmarker") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldmarker", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldmarker");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * The kind of folding used for the current window.  Possible values:
 * |fold-manual|	manual	    Folds are created manually.
 * |fold-indent|	indent	    Lines with equal indent form a fold.
 * |fold-expr|	expr	    'foldexpr' gives the fold level of a line.
 * |fold-marker|	marker	    Markers are used to specify folds.
 * |fold-syntax|	syntax	    Syntax highlighting items specify folds.
 * |fold-diff|	diff	    Fold text that is not changed.
 */
export const foldmethod = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldmethod") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldmethod", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldmethod");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "foldmethod") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldmethod", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldmethod");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Sets the number of screen lines above which a fold can be displayed
 * closed.  Also for manually closed folds.  With the default value of
 * one a fold can only be closed if it takes up two or more screen lines.
 * Set to zero to be able to close folds of just one screen line.
 * Note that this only has an effect on what is displayed.  After using
 * "zc" to close a fold, which is displayed open because it's smaller
 * than 'foldminlines', a following "zc" may close a containing fold.
 */
export const foldminlines = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "foldminlines") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldminlines", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldminlines");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "foldminlines") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldminlines", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldminlines");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Sets the maximum nesting of folds for the "indent" and "syntax"
 * methods.  This avoids that too many folds will be created.  Using more
 * than 20 doesn't work, because the internal limit is 20.
 */
export const foldnestmax = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "foldnestmax") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "foldnestmax", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldnestmax");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "foldnestmax") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "foldnestmax", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldnestmax");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * Specifies for which type of commands folds will be opened, if the
 * command moves the cursor into a closed fold.  It is a comma separated
 * list of items.
 * NOTE: When the command is part of a mapping this option is not used.
 * Add the |zv| command to the mapping to get the same effect.
 * (rationale: the mapping may want to control opening folds itself)
 */
export const foldopen = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldopen") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldopen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldopen");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "foldopen") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "foldopen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "foldopen");
  },
};

/**
 * 		{not available when compiled without the |+folding|
 * 		feature}
 * An expression which is used to specify the text displayed for a closed
 * fold.  See |fold-foldtext|.
 */
export const foldtext = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "foldtext") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "foldtext", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "foldtext");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "foldtext") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "foldtext", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "foldtext");
  },
};

/**
 * 		{not available when compiled without the |+eval|
 * 		feature}
 * Expression which is evaluated to format a range of lines for the |gq|
 * operator or automatic formatting (see 'formatoptions').  When this
 * option is empty 'formatprg' is used.
 */
export const formatexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "formatexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "formatexpr") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatexpr");
  },
};

/**
 * A pattern that is used to recognize a list header.  This is used for
 * the "n" flag in 'formatoptions'.
 * The pattern must match exactly the text that will be the indent for
 * the line below it.  You can use |/\ze| to mark the end of the match
 * while still checking more characters.  There must be a character
 * following the pattern, when it matches the whole line it is handled
 * like there is no match.
 * The default recognizes a number, followed by an optional punctuation
 * character and white space.
 */
export const formatlistpat = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "formatlistpat") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatlistpat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatlistpat");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "formatlistpat") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatlistpat", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatlistpat");
  },
};

/**
 * This is a sequence of letters which describes how automatic
 * formatting is to be done.  See |fo-table|.  When the 'paste' option is
 * on, no formatting is done (like 'formatoptions' is empty).  Commas can
 * be inserted for readability.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" |add-option-flags|.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const formatoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "formatoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatoptions");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "formatoptions") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatoptions", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatoptions");
  },
};

/**
 * The name of an external program that will be used to format the lines
 * selected with the |gq| operator.  The program must take the input on
 * stdin and produce the output on stdout.  The Unix program "fmt" is
 * such a program.
 * If the 'formatexpr' option is not empty it will be used instead.
 * Otherwise, if 'formatprg' option is an empty string, the internal
 * format function will be used |C-indenting|.
 * Environment variables are expanded |:set_env|.  See |option-backslash|
 * about including spaces and backslashes.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const formatprg = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "formatprg") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "formatprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "formatprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "formatprg") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "formatprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "formatprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "formatprg") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "formatprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "formatprg");
  },
};

/**
 * When on, the library function fsync() will be called after writing a
 * file.  This will flush a file to disk, ensuring that it is safely
 * written even on filesystems which do metadata-only journaling.  This
 * will force the harddrive to spin up on Linux systems running in laptop
 * mode, so it may be undesirable in some situations.  Be warned that
 * turning this off increases the chances of data loss after a crash.  On
 * systems without an fsync() implementation, this variable is always
 * off.
 * Also see 'swapsync' for controlling fsync() on swap files.
 * 'fsync' also applies to |writefile()|, unless a flag is used to
 * overrule it.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const fsync = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "fsync") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "fsync", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "fsync");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "fsync") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "fsync", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "fsync");
  },
};

/**
 * When on, the ":substitute" flag 'g' is default on.  This means that
 * all matches in a line are substituted instead of one.  When a 'g' flag
 * is given to a ":substitute" command, this will toggle the substitution
 * of all or one match.  See |complex-change|.
 */
export const gdefault = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "gdefault") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "gdefault", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "gdefault");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "gdefault") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "gdefault", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "gdefault");
  },
};

/**
 * Format to recognize for the ":grep" command output.
 * This is a scanf-like string that uses the same format as the
 * 'errorformat' option: see |errorformat|.
 */
export const grepformat = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "grepformat") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "grepformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "grepformat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "grepformat") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "grepformat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "grepformat");
  },
};

/**
 * Program to use for the |:grep| command.  This option may contain '%'
 * and '#' characters, which are expanded like when used in a command-
 * line.  The placeholder "$*" is allowed to specify where the arguments
 * will be included.  Environment variables are expanded |:set_env|.  See
 * |option-backslash| about including spaces and backslashes.
 * When your "grep" accepts the "-H" argument, use this to make ":grep"
 * also work well with a single file: >
 * 	:set grepprg=grep\ -nH
 * <	Special value: When 'grepprg' is set to "internal" the |:grep| command
 * works like |:vimgrep|, |:lgrep| like |:lvimgrep|, |:grepadd| like
 * |:vimgrepadd| and |:lgrepadd| like |:lvimgrepadd|.
 * See also the section |:make_makeprg|, since most of the comments there
 * apply equally to 'grepprg'.
 * For Win32, the default is "findstr /n" if "findstr.exe" can be found,
 * otherwise it's "grep -n".
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const grepprg = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "grepprg") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "grepprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "grepprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "grepprg") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "grepprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "grepprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "grepprg") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "grepprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "grepprg");
  },
};

/**
 * 		{only available when compiled with GUI enabled, and
 * 		for Win32 console}
 * This option tells Vim what the cursor should look like in different
 * modes.  It fully works in the GUI.  In a Win32 console, only the
 * height of the cursor can be changed.  This can be done by specifying a
 * block cursor, or a percentage for a vertical or horizontal cursor.
 * For a console the 't_SI', 't_SR', and 't_EI' escape sequences are
 * used.
 */
export const guicursor = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guicursor") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guicursor", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guicursor");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guicursor") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guicursor", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guicursor");
  },
};

/**
 * 		{only available when compiled with GUI enabled}
 * This is a list of fonts which will be used for the GUI version of Vim.
 * In its simplest form the value is just one font name.
 * See |gui-font| for the details.
 */
export const guifont = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guifont") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guifont", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guifont");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guifont") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guifont", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guifont");
  },
};

/**
 * 		{only available when compiled with GUI enabled}
 * When not empty, specifies a comma-separated list of fonts to be used
 * for double-width characters.  The first font that can be loaded is
 * used.  See |gui-fontwide|.
 */
export const guifontwide = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guifontwide") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guifontwide", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guifontwide");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guifontwide") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guifontwide", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guifontwide");
  },
};

/**
 * 		{only available when compiled with GUI enabled}
 * This option only has an effect in the GUI version of Vim.  It is a
 * sequence of letters which describes what components and options of the
 * GUI should be used.
 * To avoid problems with flags that are added in the future, use the
 * "+=" and "-=" feature of ":set" |add-option-flags|.
 */
export const guioptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guioptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guioptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guioptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guioptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guioptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guioptions");
  },
};

/**
 * 		{only available when compiled with GUI enabled}
 * When nonempty describes the text to use in a label of the GUI tab
 * pages line.  When empty and when the result is empty Vim will use a
 * default label.  See |setting-guitablabel| for more info.
 */
export const guitablabel = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guitablabel") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guitablabel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guitablabel");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guitablabel") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guitablabel", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guitablabel");
  },
};

/**
 * 		{only available when compiled with GUI enabled}
 * When nonempty describes the text to use in a tooltip for the GUI tab
 * pages line.  When empty Vim will use a default tooltip.
 * This option is otherwise just like 'guitablabel' above.
 * You can include a line break.  Simplest method is to use |:let|: >
 * 	:let &guitabtooltip = "line one\nline two"
 * <
 */
export const guitabtooltip = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "guitabtooltip") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "guitabtooltip", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "guitabtooltip");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "guitabtooltip") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "guitabtooltip", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "guitabtooltip");
  },
};

/**
 * Name of the main help file.  All distributed help files should be
 * placed together in one directory.  Additionally, all "doc" directories
 * in 'runtimepath' will be used.
 * Environment variables are expanded |:set_env|.  For example:
 * "$VIMRUNTIME/doc/help.txt".  If $VIMRUNTIME is not set, $VIM is also
 * tried.  Also see |$VIMRUNTIME| and |option-backslash| about including
 * spaces and backslashes.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const helpfile = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "helpfile") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "helpfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "helpfile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "helpfile") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "helpfile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "helpfile");
  },
};

/**
 * Minimal initial height of the help window when it is opened with the
 * ":help" command.  The initial height of the help window is half of the
 * current window, or (when the 'ea' option is on) the same as other
 * windows.  When the height is less than 'helpheight', the height is
 * set to 'helpheight'.  Set to zero to disable.
 */
export const helpheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "helpheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "helpheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "helpheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "helpheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "helpheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "helpheight");
  },
};

/**
 * 		{only available when compiled with the |+multi_lang|
 * 		feature}
 * Comma separated list of languages.  Vim will use the first language
 * for which the desired help can be found.  The English help will always
 * be used as a last resort.  You can add "en" to prefer English over
 * another language, but that will only find tags that exist in that
 * language and not in the English help.
 * Example: >
 * 	:set helplang=de,it
 * <	This will first search German, then Italian and finally English help
 * files.
 * When using |CTRL-]| and ":help!" in a non-English help file Vim will
 * try to find the tag in the current language before using this option.
 * See |help-translated|.
 */
export const helplang = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "helplang") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "helplang", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "helplang");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "helplang") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "helplang", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "helplang");
  },
};

/**
 * When off a buffer is unloaded when it is |abandon|ed.  When on a
 * buffer becomes hidden when it is |abandon|ed.  If the buffer is still
 * displayed in another window, it does not become hidden, of course.
 * The commands that move through the buffer list sometimes make a buffer
 * hidden although the 'hidden' option is off: When the buffer is
 * modified, 'autowrite' is off or writing is not possible, and the '!'
 * flag was used.  See also |windows.txt|.
 * To only make one buffer hidden use the 'bufhidden' option.
 * This option is set for one command with ":hide {command}" |:hide|.
 * WARNING: It's easy to forget that you have changes in hidden buffers.
 * Think twice when using ":q!" or ":qa!".
 */
export const hidden = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "hidden") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hidden", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hidden");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "hidden") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hidden", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hidden");
  },
};

/**
 * A history of ":" commands, and a history of previous search patterns
 * is remembered.  This option decides how many entries may be stored in
 * each of these histories (see |cmdline-editing|).
 * The maximum value is 10000.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const history = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "history") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "history", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "history");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "history") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "history", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "history");
  },
};

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * When on, the keyboard is mapped for the Hebrew character set.
 * Normally you would set 'allowrevins' and use CTRL-_ in insert mode to
 * toggle this option.  See |rileft.txt|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const hkmap = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "hkmap") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hkmap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hkmap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "hkmap") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hkmap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hkmap");
  },
};

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * When on, phonetic keyboard mapping is used.  'hkmap' must also be on.
 * This is useful if you have a non-Hebrew keyboard.
 * See |rileft.txt|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const hkmapp = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "hkmapp") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hkmapp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hkmapp");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "hkmapp") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hkmapp", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hkmapp");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+extra_search| feature}
 * When there is a previous search pattern, highlight all its matches.
 * The type of highlighting used can be set with the 'l' occasion in the
 * 'highlight' option.  This uses the "Search" highlight group by
 * default.  Note that only the matching text is highlighted, any offsets
 * are not applied.
 * See also: 'incsearch' and |:match|.
 * When you get bored looking at the highlighted matches, you can turn it
 * off with |:nohlsearch|.  This does not change the option value, as
 * soon as you use a search command, the highlighting comes back.
 * 'redrawtime' specifies the maximum time spent on finding matches.
 * When the search pattern can match an end-of-line, Vim will try to
 * highlight all of the matched text.  However, this depends on where the
 * search starts.  This will be the first line in the window or the first
 * line below a closed fold.  A match in a previous line which is not
 * drawn may not continue in a newly drawn line.
 * You can specify whether the highlight status is restored on startup
 * with the 'h' flag in 'viminfo' |viminfo-h|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const hlsearch = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "hlsearch") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "hlsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "hlsearch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "hlsearch") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "hlsearch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "hlsearch");
  },
};

/**
 * Ignore case in search patterns.  Also used when searching in the tags
 * file.
 * Also see 'smartcase' and 'tagcase'.
 * Can be overruled by using "\c" or "\C" in the pattern, see
 * |/ignorecase|.
 */
export const ignorecase = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "ignorecase") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ignorecase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ignorecase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "ignorecase") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ignorecase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ignorecase");
  },
};

/**
 * When set the Input Method is always on when starting to edit a command
 * line, unless entering a search pattern (see 'imsearch' for that).
 * Setting this option is useful when your input method allows entering
 * English characters directly, e.g., when it's used to type accented
 * characters with dead keys.
 */
export const imcmdline = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "imcmdline") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "imcmdline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imcmdline");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "imcmdline") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "imcmdline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imcmdline");
  },
};

/**
 * When set the Input Method is never used.  This is useful to disable
 * the IM when it doesn't work properly.
 * Currently this option is on by default for SGI/IRIX machines.  This
 * may change in later releases.
 */
export const imdisable = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "imdisable") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "imdisable", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imdisable");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "imdisable") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "imdisable", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "imdisable");
  },
};

/**
 * Specifies whether :lmap or an Input Method (IM) is to be used in
 * Insert mode.  Valid values:
 * 	0	:lmap is off and IM is off
 * 	1	:lmap is ON and IM is off
 * 	2	:lmap is off and IM is ON
 * To always reset the option to zero when leaving Insert mode with <Esc>
 * this can be used: >
 * 	:inoremap <ESC> <ESC>:set iminsert=0<CR>
 * <	This makes :lmap and IM turn off automatically when leaving Insert
 * mode.
 * Note that this option changes when using CTRL-^ in Insert mode
 * |i_CTRL-^|.
 * The value is set to 1 when setting 'keymap' to a valid keymap name.
 * It is also used for the argument of commands like "r" and "f".
 * The value 0 may not work correctly with Athena and Motif with some XIM
 * methods.  Use 'imdisable' to disable XIM then.
 */
export const iminsert = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "iminsert") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "iminsert", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "iminsert");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "iminsert") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "iminsert", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "iminsert");
  },
};

/**
 * Specifies whether :lmap or an Input Method (IM) is to be used when
 * entering a search pattern.  Valid values:
 * 	-1	the value of 'iminsert' is used, makes it look like
 * 		'iminsert' is also used when typing a search pattern
 * 	0	:lmap is off and IM is off
 * 	1	:lmap is ON and IM is off
 * 	2	:lmap is off and IM is ON
 * Note that this option changes when using CTRL-^ in Command-line mode
 * |c_CTRL-^|.
 * The value is set to 1 when it is not -1 and setting the 'keymap'
 * option to a valid keymap name.
 * The value 0 may not work correctly with Athena and Motif with some XIM
 * methods.  Use 'imdisable' to disable XIM then.
 */
export const imsearch = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "imsearch") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "imsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "imsearch");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "imsearch") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "imsearch", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "imsearch");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+find_in_path| feature}
 * Pattern to be used to find an include command.  It is a search
 * pattern, just like for the "/" command (See |pattern|).  The default
 * value is for C programs.  This option is used for the commands "[i",
 * "]I", "[d", etc.
 * Normally the 'isfname' option is used to recognize the file name that
 * comes after the matched pattern.  But if "\zs" appears in the pattern
 * then the text matched from "\zs" to the end, or until "\ze" if it
 * appears, is used as the file name.  Use this to include characters
 * that are not in 'isfname', such as a space.  You can then use
 * 'includeexpr' to process the matched text.
 * See |option-backslash| about including spaces and backslashes.
 */
export const include = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "include") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "include", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "include");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "include") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "include", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "include");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "include") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "include", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "include");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+find_in_path| or |+eval| features}
 * Expression to be used to transform the string found with the 'include'
 * option to a file name.  Mostly useful to change "." to "/" for Java: >
 * 	:set includeexpr=substitute(v:fname,'\\.','/','g')
 * <	The "v:fname" variable will be set to the file name that was detected.
 */
export const includeexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "includeexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "includeexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "includeexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "includeexpr") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "includeexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "includeexpr");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+extra_search| features}
 * While typing a search command, show where the pattern, as it was typed
 * so far, matches.  The matched string is highlighted.  If the pattern
 * is invalid or not found, nothing is shown.  The screen will be updated
 * often, this is only useful on fast terminals.
 * Also applies to the pattern in commands: >
 * 	:global
 * 	:lvimgrep
 * 	:lvimgrepadd
 * 	:smagic
 * 	:snomagic
 * 	:sort
 * 	:substitute
 * 	:vglobal
 * 	:vimgrep
 * 	:vimgrepadd
 * <	Note that the match will be shown, but the cursor will return to its
 * original position when no match is found and when pressing <Esc>.  You
 * still need to finish the search command with <Enter> to move the
 * cursor to the match.
 * You can use the CTRL-G and CTRL-T keys to move to the next and
 * previous match. |c_CTRL-G| |c_CTRL-T|
 * When compiled with the |+reltime| feature Vim only searches for about
 * half a second.  With a complicated pattern and/or a lot of text the
 * match may not be found.  This is to avoid that Vim hangs while you
 * are typing the pattern.
 * The highlighting can be set with the 'i' flag in 'highlight'.
 * When 'hlsearch' is on, all matched strings are highlighted too while
 * typing a search command. See also: 'hlsearch'.
 * If you don't want to turn 'hlsearch' on, but want to highlight all
 * matches while searching, you can turn on and off 'hlsearch' with
 * autocmd.  Example: >
 * 	augroup vimrc-incsearch-highlight
 * 	  autocmd!
 * 	  autocmd CmdlineEnter /,\? :set hlsearch
 * 	  autocmd CmdlineLeave /,\? :set nohlsearch
 * 	augroup END
 * <
 * CTRL-L can be used to add one character from after the current match
 * to the command line.  If 'ignorecase' and 'smartcase' are set and the
 * command line has no uppercase characters, the added character is
 * converted to lowercase.
 * CTRL-R CTRL-W can be used to add the word at the end of the current
 * match, excluding the characters that were already typed.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const incsearch = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "incsearch") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "incsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "incsearch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "incsearch") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "incsearch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "incsearch");
  },
};

/**
 * 		{not available when compiled without the |+cindent|
 * 		or |+eval| features}
 * Expression which is evaluated to obtain the proper indent for a line.
 * It is used when a new line is created, for the |=| operator and
 * in Insert mode as specified with the 'indentkeys' option.
 * When this option is not empty, it overrules the 'cindent' and
 * 'smartindent' indenting.  When 'lisp' is set, this option is
 * overridden by the Lisp indentation algorithm.
 * When 'paste' is set this option is not used for indenting.
 * The expression is evaluated with |v:lnum| set to the line number for
 * which the indent is to be computed.  The cursor is also in this line
 * when the expression is evaluated (but it may be moved around).
 * The expression must return the number of spaces worth of indent.  It
 * can return "-1" to keep the current indent (this means 'autoindent' is
 * used for the indent).
 * Functions useful for computing the indent are |indent()|, |cindent()|
 * and |lispindent()|.
 * The evaluation of the expression must not have side effects!  It must
 * not change the text, jump to another window, etc.  Afterwards the
 * cursor position is always restored, thus the cursor may be moved.
 * Normally this option would be set to call a function: >
 * 	:set indentexpr=GetMyIndent()
 * <	Error messages will be suppressed, unless the 'debug' option contains
 * "msg".
 * See |indent-expression|.
 * NOTE: This option is set to "" when 'compatible' is set.
 */
export const indentexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "indentexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "indentexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "indentexpr");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "indentexpr") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "indentexpr", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "indentexpr");
  },
};

/**
 * 		{not available when compiled without the |+cindent|
 * 		feature}
 * A list of keys that, when typed in Insert mode, cause reindenting of
 * the current line.  Only happens if 'indentexpr' isn't empty.
 * The format is identical to 'cinkeys', see |indentkeys-format|.
 * See |C-indenting| and |indent-expression|.
 */
export const indentkeys = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "indentkeys") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "indentkeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "indentkeys");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "indentkeys") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "indentkeys", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "indentkeys");
  },
};

/**
 * When doing keyword completion in insert mode |ins-completion|, and
 * 'ignorecase' is also on, the case of the match is adjusted depending
 * on the typed text.  If the typed text contains a lowercase letter
 * where the match has an upper case letter, the completed part is made
 * lowercase.  If the typed text has no lowercase letters and the match
 * has a lowercase letter where the typed text has an uppercase letter,
 * and there is a letter before it, the completed part is made uppercase.
 * With 'noinfercase' the match is used as-is.
 */
export const infercase = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "infercase") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "infercase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "infercase");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "infercase") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "infercase", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "infercase");
  },
};

/**
 * Makes Vim work in a way that Insert mode is the default mode.  Useful
 * if you want to use Vim as a modeless editor.  Used for |evim|.
 * These Insert mode commands will be useful:
 * - Use the cursor keys to move around.
 * - Use CTRL-O to execute one Normal mode command |i_CTRL-O|.  When
 *   this is a mapping, it is executed as if 'insertmode' was off.
 *   Normal mode remains active until the mapping is finished.
 * - Use CTRL-L to execute a number of Normal mode commands, then use
 *   <Esc> to get back to Insert mode.  Note that CTRL-L moves the cursor
 *   left, like <Esc> does when 'insertmode' isn't set.  |i_CTRL-L|
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
 * The characters specified by this option are included in file names and
 * path names.  Filenames are used for commands like "gf", "[i" and in
 * the tags file.  It is also used for "\f" in a |pattern|.
 * Multi-byte characters 256 and above are always included, only the
 * characters up to 255 are specified with this option.
 * For UTF-8 the characters 0xa0 to 0xff are included as well.
 * Think twice before adding white space to this option.  Although a
 * space may appear inside a file name, the effect will be that Vim
 * doesn't know where a file name starts or ends when doing completion.
 * It most likely works better without a space in 'isfname'.
 */
export const isfname = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "isfname") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "isfname", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "isfname");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "isfname") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "isfname", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "isfname");
  },
};

/**
 * The characters given by this option are included in identifiers.
 * Identifiers are used in recognizing environment variables and after a
 * match of the 'define' option.  It is also used for "\i" in a
 * |pattern|.  See 'isfname' for a description of the format of this
 * option.  For '@' only characters up to 255 are used.
 * Careful: If you change this option, it might break expanding
 * environment variables.  E.g., when '/' is included and Vim tries to
 * expand "$HOME/.viminfo".  Maybe you should change 'iskeyword' instead.
 */
export const isident = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "isident") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "isident", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "isident");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "isident") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "isident", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "isident");
  },
};

/**
 * Keywords are used in searching and recognizing with many commands:
 * "w", "*", "[i", etc.  It is also used for "\k" in a |pattern|.  See
 * 'isfname' for a description of the format of this option.  For '@'
 * characters above 255 check the "word" character class (any character
 * that is not white space or punctuation).
 * For C programs you could use "a-z,A-Z,48-57,_,.,-,>".
 * For a help file it is set to all non-blank printable characters except
 * '*', '"' and '|' (so that CTRL-] on a command finds the help for that
 * command).
 * When the 'lisp' option is on the '-' character is always included.
 * This option also influences syntax highlighting, unless the syntax
 * uses |:syn-iskeyword|.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const iskeyword = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "iskeyword") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "iskeyword", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "iskeyword");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "iskeyword") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "iskeyword", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "iskeyword");
  },
};

/**
 * The characters given by this option are displayed directly on the
 * screen.  It is also used for "\p" in a |pattern|.  The characters from
 * space (ASCII 32) to '~' (ASCII 126) are always displayed directly,
 * even when they are not included in 'isprint' or excluded.  See
 * 'isfname' for a description of the format of this option.
 */
export const isprint = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "isprint") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "isprint", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "isprint");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "isprint") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "isprint", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "isprint");
  },
};

/**
 * Insert two spaces after a '.', '?' and '!' with a join command.
 * When 'cpoptions' includes the 'j' flag, only do this after a '.'.
 * Otherwise only one space is inserted.
 * NOTE: This option is set when 'compatible' is set.
 */
export const joinspaces = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "joinspaces") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "joinspaces", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "joinspaces");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "joinspaces") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "joinspaces", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "joinspaces");
  },
};

/**
 * 		{only available when compiled with the |+keymap|
 * 		feature}
 * Name of a keyboard mapping.  See |mbyte-keymap|.
 * Setting this option to a valid keymap name has the side effect of
 * setting 'iminsert' to one, so that the keymap becomes effective.
 * 'imsearch' is also set to one, unless it was -1
 * Only normal file name characters can be used, "/\*?[|<>" are illegal.
 */
export const keymap = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "keymap") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "keymap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "keymap");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "keymap") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "keymap", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "keymap");
  },
};

/**
 * List of comma separated words, which enable special things that keys
 * can do.  These values can be used:
 *    startsel	Using a shifted special key starts selection (either
 * 		Select mode or Visual mode, depending on "key" being
 * 		present in 'selectmode').
 *    stopsel	Using a not-shifted special key stops selection.
 * Special keys in this context are the cursor keys, <End>, <Home>,
 * <PageUp> and <PageDown>.
 * The 'keymodel' option is set by the |:behave| command.
 */
export const keymodel = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "keymodel") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "keymodel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "keymodel");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "keymodel") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "keymodel", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "keymodel");
  },
};

/**
 * Program to use for the |K| command.  Environment variables are
 * expanded |:set_env|.  ":help" may be used to access the Vim internal
 * help.  (Note that previously setting the global option to the empty
 * value did this, which is now deprecated.)
 * When the first character is ":", the command is invoked as a Vim
 * Ex command prefixed with [count].
 * When "man", "man -s" or an Ex command is used, Vim will automatically
 * translate a count for the "K" command and pass it as the first
 * argument.  For "man -s" the "-s" is removed when there is no count.
 * See |option-backslash| about including spaces and backslashes.
 * Example: >
 * 	:set keywordprg=man\ -s
 * <	This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const keywordprg = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "keywordprg") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "keywordprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "keywordprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "keywordprg") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "keywordprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "keywordprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "keywordprg") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "keywordprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "keywordprg");
  },
};

/**
 * 		{only available when compiled with the |+langmap|
 * 		feature}
 * This option allows switching your keyboard into a special language
 * mode.  When you are typing text in Insert mode the characters are
 * inserted directly.  When in Normal mode the 'langmap' option takes
 * care of translating these special characters to the original meaning
 * of the key.  This means you don't have to change the keyboard mode to
 * be able to execute Normal mode commands.
 * This is the opposite of the 'keymap' option, where characters are
 * mapped in Insert mode.
 * Also consider setting 'langremap' to off, to prevent 'langmap' from
 * applying to characters resulting from a mapping.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const langmap = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "langmap") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "langmap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langmap");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "langmap") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "langmap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langmap");
  },
};

/**
 * 		{only available when compiled with the |+menu| and
 * 		|+multi_lang| features}
 * Language to use for menu translation.  Tells which file is loaded
 * from the "lang" directory in 'runtimepath': >
 * 	"lang/menu_" . &langmenu . ".vim"
 * <	(without the spaces).  For example, to always use the Dutch menus, no
 * matter what $LANG is set to: >
 * 	:set langmenu=nl_NL.ISO_8859-1
 * <	When 'langmenu' is empty, |v:lang| is used.
 * Only normal file name characters can be used, "/\*?[|<>" are illegal.
 * If your $LANG is set to a non-English language but you do want to use
 * the English menus: >
 * 	:set langmenu=none
 * <	This option must be set before loading menus, switching on filetype
 * detection or syntax highlighting.  Once the menus are defined setting
 * this option has no effect.  But you could do this: >
 * 	:source $VIMRUNTIME/delmenu.vim
 * 	:set langmenu=de_DE.ISO_8859-1
 * 	:source $VIMRUNTIME/menu.vim
 * <	Warning: This deletes all menus that you defined yourself!
 */
export const langmenu = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "langmenu") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "langmenu", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langmenu");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "langmenu") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "langmenu", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langmenu");
  },
};

/**
 * 		{only available when compiled with the |+langmap|
 * 		feature}
 * When off, setting 'langmap' does not apply to characters resulting from
 * a mapping.  This basically means, if you noticed that setting
 * 'langmap' disables some of your mappings, try resetting this option.
 * This option defaults to on for backwards compatibility.  Set it off if
 * that works for you to avoid mappings to break.
 */
export const langremap = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "langremap") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "langremap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "langremap");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "langremap") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "langremap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "langremap");
  },
};

/**
 * The value of this option influences when the last window will have a
 * status line:
 * 	0: never
 * 	1: only if there are at least two windows
 * 	2: always
 * The screen looks nicer with a status line if you have several
 * windows, but it takes another screen line. |status-line|
 */
export const laststatus = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "laststatus") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "laststatus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "laststatus");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "laststatus") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "laststatus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "laststatus");
  },
};

/**
 * When this option is set, the screen will not be redrawn while
 * executing macros, registers and other commands that have not been
 * typed.  Also, updating the window title is postponed.  To force an
 * update use |:redraw|.
 */
export const lazyredraw = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "lazyredraw") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "lazyredraw", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "lazyredraw");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "lazyredraw") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "lazyredraw", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "lazyredraw");
  },
};

/**
 * 		{not available when compiled without the |+linebreak|
 * 		feature}
 * If on, Vim will wrap long lines at a character in 'breakat' rather
 * than at the last character that fits on the screen.  Unlike
 * 'wrapmargin' and 'textwidth', this does not insert <EOL>s in the file,
 * it only affects the way the file is displayed, not its contents.
 * If 'breakindent' is set, line is visually indented. Then, the value
 * of 'showbreak' is used to put in front of wrapped lines. This option
 * is not used when the 'wrap' option is off.
 * Note that <Tab> characters after an <EOL> are mostly not displayed
 * with the right amount of white space.
 */
export const linebreak = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "linebreak") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "linebreak", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "linebreak");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "linebreak") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "linebreak", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "linebreak");
  },
};

/**
 * 		{only in the GUI}
 * Number of pixel lines inserted between characters.  Useful if the font
 * uses the full character cell height, making lines touch each other.
 * When non-zero there is room for underlining.
 * With some fonts there can be too much room between lines (to have
 * space for ascents and descents).  Then it makes sense to set
 * 'linespace' to a negative value.  This may cause display problems
 * though!
 */
export const linespace = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "linespace") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "linespace", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "linespace");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "linespace") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "linespace", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "linespace");
  },
};

/**
 * 		{not available when compiled without the |+lispindent|
 * 		feature}
 * Comma separated list of words that influence the Lisp indenting.
 * |'lisp'|
 */
export const lispwords = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "lispwords") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "lispwords", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "lispwords");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "lispwords") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "lispwords", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "lispwords");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "lispwords") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "lispwords", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "lispwords");
  },
};

/**
 * Strings to use in 'list' mode and for the |:list| command.  It is a
 * comma separated list of string settings.
 *   eol:c		Character to show at the end of each line.  When
 * 		omitted, there is no extra character at the end of the
 * 		line.
 *   tab:xy[z]	Two or three characters to be used to show a tab.
 * 		The third character is optional.
 */
export const listchars = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "listchars") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "listchars", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "listchars");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "listchars") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "listchars", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "listchars");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "listchars") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "listchars", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "listchars");
  },
};

/**
 * When on the plugin scripts are loaded when starting up |load-plugins|.
 * This option can be reset in your |vimrc| file to disable the loading
 * of plugins.
 * Note that using the "-u NONE", "-u DEFAULTS" and "--noplugin" command
 * line arguments reset this option.  See |-u| and |--noplugin|.
 */
export const loadplugins = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "loadplugins") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "loadplugins", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "loadplugins");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "loadplugins") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "loadplugins", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "loadplugins");
  },
};

/**
 * 		{not available when compiled without the |+quickfix|
 * 		feature}
 * Name of the errorfile for the |:make| command (see |:make_makeprg|)
 * and the |:grep| command.
 * When it is empty, an internally generated temp file will be used.
 * When "##" is included, it is replaced by a number to make the name
 * unique.  This makes sure that the ":make" command doesn't overwrite an
 * existing file.
 * NOT used for the ":cf" command.  See 'errorfile' for that.
 * Environment variables are expanded |:set_env|.
 * See |option-backslash| about including spaces and backslashes.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const makeef = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "makeef") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "makeef", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "makeef");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "makeef") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "makeef", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "makeef");
  },
};

/**
 * Encoding used for reading the output of external commands.  When empty,
 * encoding is not converted.
 * This is used for `:make`, `:lmake`, `:grep`, `:lgrep`, `:grepadd`,
 * `:lgrepadd`, `:cfile`, `:cgetfile`, `:caddfile`, `:lfile`, `:lgetfile`,
 * and `:laddfile`.
 */
export const makeencoding = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "makeencoding") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "makeencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "makeencoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "makeencoding") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "makeencoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "makeencoding");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "makeencoding") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "makeencoding", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "makeencoding");
  },
};

/**
 * Program to use for the ":make" command.  See |:make_makeprg|.
 * This option may contain '%' and '#' characters (see  |:_%| and |:_#|),
 * which are expanded to the current and alternate file name.  Use |::S|
 * to escape file names in case they contain special characters.
 * Environment variables are expanded |:set_env|.  See |option-backslash|
 * about including spaces and backslashes.
 * Note that a '|' must be escaped twice: once for ":set" and once for
 * the interpretation of a command.  When you use a filter called
 * "myfilter" do it like this: >
 *     :set makeprg=gmake\ \\\|\ myfilter
 * <	The placeholder "$*" can be given (even multiple times) to specify
 * where the arguments will be included, for example: >
 *     :set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$*}
 * <	This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const makeprg = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "makeprg") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "makeprg", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "makeprg");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "makeprg") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "makeprg", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "makeprg");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "makeprg") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "makeprg", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "makeprg");
  },
};

/**
 * Characters that form pairs.  The |%| command jumps from one to the
 * other.
 * Only character pairs are allowed that are different, thus you cannot
 * jump between two double quotes.
 * The characters must be separated by a colon.
 * The pairs must be separated by a comma.  Example for including '<' and
 * '>' (for HTML): >
 * 	:set mps+=<:>
 */
export const matchpairs = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "matchpairs") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "matchpairs", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "matchpairs");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "matchpairs") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "matchpairs", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "matchpairs");
  },
};

/**
 * Tenths of a second to show the matching paren, when 'showmatch' is
 * set.  Note that this is not in milliseconds, like other options that
 * set a time.  This is to be compatible with Nvi.
 */
export const matchtime = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "matchtime") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "matchtime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "matchtime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "matchtime") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "matchtime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "matchtime");
  },
};

/**
 * The maximum number of combining characters supported for displaying.
 * Only used when 'encoding' is "utf-8".
 * The default is OK for most languages.  Hebrew may require 4.
 * Maximum value is 6.
 * Even when this option is set to 2 you can still edit text with more
 * combining characters, you just can't see them.  Use |g8| or |ga|.
 * See |mbyte-combining|.
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
 * 		{not available when compiled without the |+eval|
 * 		feature}
 * Maximum depth of function calls for user functions.  This normally
 * catches endless recursion.  When using a recursive function with
 * more depth, set 'maxfuncdepth' to a bigger number.  But this will use
 * more memory, there is the danger of failing when memory is exhausted.
 * Increasing this limit above 200 also changes the maximum for Ex
 * command recursion, see |E169|.
 * See also |:function|.
 */
export const maxfuncdepth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "maxfuncdepth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxfuncdepth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxfuncdepth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "maxfuncdepth") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxfuncdepth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxfuncdepth");
  },
};

/**
 * Maximum number of times a mapping is done without resulting in a
 * character to be used.  This normally catches endless mappings, like
 * ":map x y" with ":map y x".  It still does not catch ":map g wg",
 * because the 'w' is used before the next mapping is done.  See also
 * |key-mapping|.
 */
export const maxmapdepth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "maxmapdepth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxmapdepth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxmapdepth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "maxmapdepth") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxmapdepth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxmapdepth");
  },
};

/**
 * Maximum amount of memory (in Kbyte) to use for pattern matching.
 * The maximum value is about 2000000.  Use this to work without a limit.
 * When Vim runs into the limit it gives an error message and mostly
 * behaves like CTRL-C was typed.
 * Running into the limit often means that the pattern is very
 * inefficient or too complex.  This may already happen with the pattern
 * "\(.\)" works much better.
 * Might also happen on redraw, when syntax rules try to match a complex
 * text structure.
 * Vim may run out of memory before hitting the 'maxmempattern' limit, in
 * which case you get an "Out of memory" error instead.
 */
export const maxmempattern = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "maxmempattern") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "maxmempattern", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "maxmempattern");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "maxmempattern") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "maxmempattern", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "maxmempattern");
  },
};

/**
 * 		{not available when compiled without the |+menu|
 * 		feature}
 * Maximum number of items to use in a menu.  Used for menus that are
 * generated from a list of items, e.g., the Buffers menu.  Changing this
 * option has no direct effect, the menu must be refreshed first.
 */
export const menuitems = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "menuitems") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "menuitems", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "menuitems");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "menuitems") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "menuitems", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "menuitems");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Parameters for |:mkspell|.  This tunes when to start compressing the
 * word tree.  Compression can be slow when there are many words, but
 * it's needed to avoid running out of memory.  The amount of memory used
 * per word depends very much on how similar the words are, that's why
 * this tuning is complicated.
 */
export const mkspellmem = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "mkspellmem") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mkspellmem", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mkspellmem");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "mkspellmem") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mkspellmem", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mkspellmem");
  },
};

/**
 * If 'modeline' is on 'modelines' gives the number of lines that is
 * checked for set commands.  If 'modeline' is off or 'modelines' is zero
 * no lines are checked.  See |modeline|.
 */
export const modeline = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "modeline") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modeline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modeline");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "modeline") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "modeline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "modeline");
  },
};

/**
 * When on allow some options that are an expression to be set in the
 * modeline.  Check the option for whether it is affected by
 * 'modelineexpr'.  Also see |modeline|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const modelineexpr = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "modelineexpr") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modelineexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modelineexpr");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "modelineexpr") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "modelineexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "modelineexpr");
  },
};

/**
 * If 'modeline' is on 'modelines' gives the number of lines that is
 * checked for set commands.  If 'modeline' is off or 'modelines' is zero
 * no lines are checked.  See |modeline|.
 * NOTE: 'modeline' is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const modelines = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "modelines") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "modelines", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modelines");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "modelines") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "modelines", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "modelines");
  },
};

/**
 * When off the buffer contents cannot be changed.  The 'fileformat' and
 * 'fileencoding' options also can't be changed.
 * Can be reset on startup with the |-M| command line argument.
 */
export const modifiable = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "modifiable") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modifiable", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modifiable");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "modifiable") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "modifiable", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "modifiable");
  },
};

/**
 * When on, the buffer is considered to be modified.  This option is set
 * when:
 * 1. A change was made to the text since it was last written.  Using the
 *    |undo| command to go back to the original text will reset the
 *    option.  But undoing changes that were made before writing the
 *    buffer will set the option again, since the text is different from
 *    when it was written.
 * 2. 'fileformat' or 'fileencoding' is different from its original
 *    value.  The original value is set when the buffer is read or
 *    written.  A ":set nomodified" command also resets the original
 *    values to the current values and the 'modified' option will be
 *    reset.
 *    Similarly for 'eol' and 'bomb'.
 * This option is not set when a change is made to the buffer as the
 * result of a BufNewFile, BufRead/BufReadPost, BufWritePost,
 * FileAppendPost or VimLeave autocommand event.  See |gzip-example| for
 * an explanation.
 * When 'buftype' is "nowrite" or "nofile" this option may be set, but
 * will be ignored.
 * Note that the text may actually be the same, e.g. 'modified' is set
 * when using "rA" on an "A".
 */
export const modified = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "modified") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "modified", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "modified");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "modified") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "modified", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "modified");
  },
};

/**
 * 		{only works in the GUI}
 * The window that the mouse pointer is on is automatically activated.
 * When changing the window layout or window focus in another way, the
 * mouse pointer is moved to the window with keyboard focus.  Off is the
 * default because it makes using the pull down menus a little goofy, as
 * a pointer transit may activate a window unintentionally.
 * MS-Windows: Also see 'scrollfocus' for what window is scrolled when
 * using the mouse scroll wheel.
 */
export const mousefocus = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "mousefocus") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "mousefocus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousefocus");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "mousefocus") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "mousefocus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousefocus");
  },
};

/**
 * 		{only works in the GUI}
 * When on, the mouse pointer is hidden when characters are typed.
 * The mouse pointer is restored when the mouse is moved.
 */
export const mousehide = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "mousehide") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "mousehide", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousehide");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "mousehide") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "mousehide", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousehide");
  },
};

/**
 * Sets the model to use for the mouse.  The name mostly specifies what
 * the right mouse button is used for:
 *    extend	Right mouse button extends a selection.  This works
 * 		like in an xterm.
 *    popup	Right mouse button pops up a menu.  The shifted left
 * 		mouse button extends a selection.  This works like
 * 		with Microsoft Windows.
 *    popup_setpos Like "popup", but the cursor will be moved to the
 * 		position where the mouse was clicked, and thus the
 * 		selected operation will act upon the clicked object.
 * 		If clicking inside a selection, that selection will
 * 		be acted upon, i.e. no cursor move.  This implies of
 * 		course, that right clicking outside a selection will
 * 		end Visual mode.
 * Overview of what button does what for each model:
 * mouse		    extend		popup(_setpos) ~
 * left click	    place cursor	place cursor
 * left drag	    start selection	start selection
 * shift-left	    search word		extend selection
 * right click	    extend selection	popup menu (place cursor)
 * right drag	    extend selection	-
 * middle click	    paste		paste
 */
export const mousemodel = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "mousemodel") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mousemodel", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousemodel");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "mousemodel") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mousemodel", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousemodel");
  },
};

/**
 * 		{only available when compiled with the |+mouseshape|
 * 		feature}
 * This option tells Vim what the mouse pointer should look like in
 * different modes.  The option is a comma separated list of parts, much
 * like used for 'guicursor'.  Each part consist of a mode/location-list
 * and an argument-list:
 * 	mode-list:shape,mode-list:shape,..
 * The mode-list is a dash separated list of these modes/locations:
 * 		In a normal window: ~
 * 	n	Normal mode
 * 	v	Visual mode
 * 	ve	Visual mode with 'selection' "exclusive" (same as 'v',
 * 		if not specified)
 * 	o	Operator-pending mode
 * 	i	Insert mode
 * 	r	Replace mode
 */
export const mouseshape = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "mouseshape") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "mouseshape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mouseshape");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "mouseshape") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "mouseshape", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mouseshape");
  },
};

/**
 * Only for GUI, Win32 and Unix with xterm.  Defines the maximum
 * time in msec between two mouse clicks for the second click to be
 * recognized as a multi click.
 */
export const mousetime = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "mousetime") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "mousetime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "mousetime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "mousetime") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "mousetime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "mousetime");
  },
};

/**
 * This defines what bases Vim will consider for numbers when using the
 * CTRL-A and CTRL-X commands for adding to and subtracting from a number
 * respectively; see |CTRL-A| for more info on these commands.
 * alpha	If included, single alphabetical characters will be
 * 	incremented or decremented.  This is useful for a list with a
 * 	letter index a), b), etc.
 * octal	If included, numbers that start with a zero will be considered
 * 	to be octal.  Example: Using CTRL-A on "007" results in "010".
 * hex	If included, numbers starting with "0x" or "0X" will be
 * 	considered to be hexadecimal.  Example: Using CTRL-X on
 * 	"0x100" results in "0x0ff".
 * bin	If included, numbers starting with "0b" or "0B" will be
 * 	considered to be binary.  Example: Using CTRL-X on
 * 	"0b1000" subtracts one, resulting in "0b0111".
 * unsigned    If included, numbers are recognized as unsigned. Thus a
 * 	leading dash or negative sign won't be considered as part of
 * 	the number.  Examples:
 * 	    Using CTRL-X on "2020" in "9-2020" results in "9-2019"
 * 	    (without "unsigned" it would become "9-2021").
 * 	    Using CTRL-A on "2020" in "9-2020" results in "9-2021"
 * 	    (without "unsigned" it would become "9-2019").
 * 	    Using CTRL-X on "0" or CTRL-A on "18446744073709551615"
 * 	    (2^64 - 1) has no effect, overflow is prevented.
 * Numbers which simply begin with a digit in the range 1-9 are always
 * considered decimal.  This also happens for numbers that are not
 * recognized as octal or hex.
 */
export const nrformats = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "nrformats") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "nrformats", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "nrformats");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "nrformats") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "nrformats", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "nrformats");
  },
};

/**
 * Print the line number in front of each line.  When the 'n' option is
 * excluded from 'cpoptions' a wrapped line will not use the column of
 * line numbers (this is the default when 'compatible' isn't set).
 * The 'numberwidth' option can be used to set the room used for the line
 * number.
 * When a long, wrapped line doesn't start with the first character, '-'
 * characters are put before the number.
 * See |hl-LineNr|  and |hl-CursorLineNr| for the highlighting used for
 * the number.
 * The 'relativenumber' option changes the displayed number to be
 * relative to the cursor.  Together with 'number' there are these
 * four combinations (cursor in line 3):
 */
export const number = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "number") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "number", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "number");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "number") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "number", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "number");
  },
};

/**
 * 		{only available when compiled with the |+linebreak|
 * 		feature}
 * Minimal number of columns to use for the line number.  Only relevant
 * when the 'number' or 'relativenumber' option is set or printing lines
 * with a line number. Since one space is always between the number and
 * the text, there is one less character for the number itself.
 * The value is the minimum width.  A bigger width is used when needed to
 * fit the highest line number in the buffer respectively the number of
 * rows in the window, depending on whether 'number' or 'relativenumber'
 * is set. Thus with the Vim default of 4 there is room for a line number
 * up to 999. When the buffer has 1000 lines five columns will be used.
 * The minimum value is 1, the maximum value is 20.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const numberwidth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "numberwidth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "numberwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "numberwidth");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "numberwidth") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "numberwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "numberwidth");
  },
};

/**
 * 		{not available when compiled without the |+eval|
 * 		feature}
 * This option specifies a function to be used for Insert mode omni
 * completion with CTRL-X CTRL-O. |i_CTRL-X_CTRL-O|
 * See |complete-functions| for an explanation of how the function is
 * invoked and what it should return.
 * This option is usually set by a filetype plugin:
 * |:filetype-plugin-on|
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const omnifunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "omnifunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "omnifunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "omnifunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "omnifunc") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "omnifunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "omnifunc");
  },
};

/**
 * 		{only for MS-Windows}
 * Enable reading and writing from devices.  This may get Vim stuck on a
 * device that can be opened but doesn't actually do the I/O.  Therefore
 * it is off by default.
 * Note that on MS-Windows editing "aux.h", "lpt1.txt" and the like also
 * result in editing a device.
 */
export const opendevice = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "opendevice") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "opendevice", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "opendevice");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "opendevice") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "opendevice", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "opendevice");
  },
};

/**
 * This option specifies a function to be called by the |g@| operator.
 * See |:map-operator| for more info and an example.
 */
export const operatorfunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "operatorfunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "operatorfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "operatorfunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "operatorfunc") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "operatorfunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "operatorfunc");
  },
};

/**
 * Directories used to find packages.  See |packages|.
 */
export const packpath = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "packpath") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "packpath", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "packpath");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "packpath") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "packpath", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "packpath");
  },
};

/**
 * Specifies the nroff macros that separate paragraphs.  These are pairs
 * of two letters (see |object-motions|).
 */
export const paragraphs = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "paragraphs") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "paragraphs", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "paragraphs");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "paragraphs") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "paragraphs", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "paragraphs");
  },
};

/**
 * When non-empty, specifies the key sequence that toggles the 'paste'
 * option.  This is like specifying a mapping: >
 *     :map {keys} :set invpaste<CR>
 * <	Where {keys} is the value of 'pastetoggle'.
 * The difference is that it will work even when 'paste' is set.
 * 'pastetoggle' works in Insert mode and Normal mode, but not in
 * Command-line mode.
 * Mappings are checked first, thus overrule 'pastetoggle'.  However,
 * when 'paste' is on mappings are ignored in Insert mode, thus you can do
 * this: >
 *     :map <F10> :set paste<CR>
 *     :map <F11> :set nopaste<CR>
 *     :imap <F10> <C-O>:set paste<CR>
 *     :imap <F11> <nop>
 *     :set pastetoggle=<F11>
 * <	This will make <F10> start paste mode and <F11> stop paste mode.
 * Note that typing <F10> in paste mode inserts "<F10>", since in paste
 * mode everything is inserted literally, except the 'pastetoggle' key
 * sequence.
 * When the value has several bytes 'ttimeoutlen' applies.
 */
export const pastetoggle = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "pastetoggle") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "pastetoggle", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pastetoggle");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "pastetoggle") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "pastetoggle", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pastetoggle");
  },
};

/**
 * 		{not available when compiled without the |+diff|
 * 		feature}
 * Expression which is evaluated to apply a patch to a file and generate
 * the resulting new version of the file.  See |diff-patchexpr|.
 */
export const patchexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "patchexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "patchexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "patchexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "patchexpr") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "patchexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "patchexpr");
  },
};

/**
 * When non-empty the oldest version of a file is kept.  This can be used
 * to keep the original version of a file if you are changing files in a
 * source distribution.  Only the first time that a file is written a
 * copy of the original file will be kept.  The name of the copy is the
 * name of the original file with the string in the 'patchmode' option
 * appended.  This option should start with a dot.  Use a string like
 * ".orig" or ".org".  'backupdir' must not be empty for this to work
 * (Detail: The backup file is renamed to the patchmode file after the
 * new file has been successfully written, that's why it must be possible
 * to write a backup file).  If there was no file to be backed up, an
 * empty file is created.
 * When the 'backupskip' pattern matches, a patchmode file is not made.
 * Using 'patchmode' for compressed files appends the extension at the
 * end (e.g., "file.gz.orig"), thus the resulting name isn't always
 * recognized as a compressed file.
 * Only normal file name characters can be used, "/\*?[|<>" are illegal.
 */
export const patchmode = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "patchmode") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "patchmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "patchmode");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "patchmode") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "patchmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "patchmode");
  },
};

/**
 * This is a list of directories which will be searched when using the
 * |gf|, [f, ]f, ^Wf, |:find|, |:sfind|, |:tabfind| and other commands,
 * provided that the file being searched for has a relative path (not
 * starting with "/", "./" or "../").  The directories in the 'path'
 * option may be relative or absolute.
 * - Use commas to separate directory names: >
 * 	:set path=.,/usr/local/include,/usr/include
 * <	- Spaces can also be used to separate directory names (for backwards
 *   compatibility with version 3.0).  To have a space in a directory
 *   name, precede it with an extra backslash, and escape the space: >
 * 	:set path=.,/dir/with\\\ space
 * <	- To include a comma in a directory name precede it with an extra
 *   backslash: >
 * 	:set path=.,/dir/with\\,comma
 * <	- To search relative to the directory of the current file, use: >
 * 	:set path=.
 * <	- To search in the current directory use an empty string between two
 *   commas: >
 * 	:set path=,,
 * <	- A directory name may end in a ':' or '/'.
 * - Environment variables are expanded |:set_env|.
 * - When using |netrw.vim| URLs can be used.  For example, adding
 *   "http://www.vim.org" will make ":find index.html" work.
 * - Search upwards and downwards in a directory tree using "*" and
 *   ";".  See |file-searching| for info and syntax.
 *   {not available when compiled without the |+path_extra| feature}
 * - Careful with '\' characters, type two to get one in the option: >
 * 	:set path=.,c:\\include
 * <	  Or just use '/' instead: >
 * 	:set path=.,c:/include
 * <	Don't forget "." or files won't even be found in the same directory as
 * the file!
 * The maximum length is limited.  How much depends on the system, mostly
 * it is something like 256 or 1024 characters.
 * You can check if all the include files are found, using the value of
 * 'path', see |:checkpath|.
 * The use of |:set+=| and |:set-=| is preferred when adding or removing
 * directories from the list.  This avoids problems when a future version
 * uses another default.  To remove the current directory use: >
 * 	:set path-=
 * <	To add the current directory use: >
 * 	:set path+=
 * <	To use an environment variable, you probably need to replace the
 * separator.  Here is an example to append $INCL, in which directory
 * names are separated with a semi-colon: >
 * 	:let &path = &path . "," . substitute($INCL, ';', ',', 'g')
 * <	Replace the ';' with a ':' or whatever separator is used.  Note that
 * this doesn't work when $INCL contains a comma or white space.
 */
export const path = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "path") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "path", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "path");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "path") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "path", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "path");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "path") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "path", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "path");
  },
};

/**
 * When changing the indent of the current line, preserve as much of the
 * indent structure as possible.  Normally the indent is replaced by a
 * series of tabs followed by spaces as required (unless |'expandtab'| is
 * enabled, in which case only spaces are used).  Enabling this option
 * means the indent will preserve as many existing characters as possible
 * for indenting, and only add additional tabs or spaces as required.
 * 'expandtab' does not apply to the preserved white space, a Tab remains
 * a Tab.
 * NOTE: When using ">>" multiple times the resulting indent is a mix of
 * tabs and spaces.  You might not like this.
 * NOTE: This option is reset when 'compatible' is set.
 * Also see 'copyindent'.
 * Use |:retab| to clean up white space.
 */
export const preserveindent = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "preserveindent") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "preserveindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "preserveindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "preserveindent") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "preserveindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "preserveindent");
  },
};

/**
 * 		{not available when compiled without the |+quickfix|
 * 		feature}
 * Default height for a preview window.  Used for |:ptag| and associated
 * commands.  Used for |CTRL-W_}| when no count is given.  Not used when
 * 'previewpopup' is set.
 */
export const previewheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "previewheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "previewheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "previewheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "previewheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "previewheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "previewheight");
  },
};

/**
 * 		{not available when compiled without the |+quickfix|
 * 		feature}
 * Identifies the preview window.  Only one window can have this option
 * set.  It's normally not set directly, but by using one of the commands
 * |:ptag|, |:pedit|, etc.
 */
export const previewwindow = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "previewwindow") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "previewwindow", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "previewwindow");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "previewwindow") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "previewwindow", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "previewwindow");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		feature}
 * The name of the printer to be used for |:hardcopy|.
 * See |pdev-option|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const printdevice = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printdevice") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printdevice", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printdevice");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printdevice") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printdevice", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printdevice");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		and |+postscript| features}
 * Sets the character encoding used when printing.
 * See |penc-option|.
 */
export const printencoding = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printencoding") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printencoding", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printencoding");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printencoding") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printencoding", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printencoding");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		and |+postscript| features}
 * Expression used to print the PostScript produced with |:hardcopy|.
 * See |pexpr-option|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const printexpr = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printexpr") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printexpr", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printexpr");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printexpr") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printexpr", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printexpr");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		feature}
 * The name of the font that will be used for |:hardcopy|.
 * See |pfn-option|.
 */
export const printfont = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printfont") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printfont", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printfont");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printfont") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printfont", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printfont");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		feature}
 * The format of the header produced in |:hardcopy| output.
 * See |pheader-option|.
 */
export const printheader = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printheader") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printheader", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printheader");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printheader") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printheader", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printheader");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		and |+postscript| features}
 * The CJK character set to be used for CJK output from |:hardcopy|.
 * See |pmbcs-option|.
 */
export const printmbcharset = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printmbcharset") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printmbcharset", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printmbcharset");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printmbcharset") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printmbcharset", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printmbcharset");
  },
};

/**
 * 		{only available when compiled with the |+printer|
 * 		and |+postscript| features}
 * List of font names to be used for CJK output from |:hardcopy|.
 * See |pmbfn-option|.
 */
export const printmbfont = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printmbfont") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printmbfont", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printmbfont");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printmbfont") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printmbfont", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printmbfont");
  },
};

/**
 * 		{only available when compiled with |+printer| feature}
 * List of items that control the format of the output of |:hardcopy|.
 * See |popt-option|.
 */
export const printoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "printoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "printoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "printoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "printoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "printoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "printoptions");
  },
};

/**
 * Determines the maximum number of items to show in the popup menu for
 * Insert mode completion.  When zero as much space as available is used.
 * |ins-completion-menu|.
 */
export const pumheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "pumheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pumheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pumheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "pumheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pumheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pumheight");
  },
};

/**
 * Determines the minimum width to use for the popup menu for Insert mode
 * completion.  |ins-completion-menu|.
 */
export const pumwidth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "pumwidth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pumwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pumwidth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "pumwidth") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pumwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pumwidth");
  },
};

/**
 * 		{only available when compiled with the |+python| or
 * 		the |+python3| feature}
 * Specifies the python version used for pyx* functions and commands
 * |python_x|.  The default value is as follows:
 */
export const pyxversion = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "pyxversion") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pyxversion", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pyxversion");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "pyxversion") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pyxversion", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pyxversion");
  },
};

/**
 * 		{only available when compiled with the |+quickfix|
 * 		feature}
 * This option specifies a function to be used to get the text to display
 * in the quickfix and location list windows.  This can be used to
 * customize the information displayed in the quickfix or location window
 * for each entry in the corresponding quickfix or location list.  See
 * |quickfix-window-function| for an explanation of how to write the
 * function and an example. The value can be the name of a function or a
 * lambda.
 */
export const quickfixtextfunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "quickfixtextfunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "quickfixtextfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "quickfixtextfunc");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "quickfixtextfunc") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "quickfixtextfunc", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "quickfixtextfunc");
  },
};

/**
 * The characters that are used to escape quotes in a string.  Used for
 * objects like a', a" and a` |a'|.
 * When one of the characters in this option is found inside a string,
 * the following character will be skipped.  The default value makes the
 * text "foo\"bar\\" considered to be one string.
 */
export const quoteescape = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "quoteescape") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "quoteescape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "quoteescape");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "quoteescape") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "quoteescape", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "quoteescape");
  },
};

/**
 * If on, writes fail unless you use a '!'.  Protects you from
 * accidentally overwriting a file.  Default on when Vim is started
 * in read-only mode ("vim -R") or when the executable is called "view".
 * When using ":w!" the 'readonly' option is reset for the current
 * buffer, unless the 'Z' flag is in 'cpoptions'.
 * When using the ":view" command the 'readonly' option is set for the
 * newly edited buffer.
 * See 'modifiable' for disallowing changes to the buffer.
 */
export const readonly = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "readonly") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "readonly", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "readonly");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "readonly") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "readonly", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "readonly");
  },
};

/**
 * 		{only available when compiled with the |+reltime|
 * 		feature}
 * The time in milliseconds for redrawing the display.  This applies to
 * searching for patterns for 'hlsearch', |:match| highlighting and syntax
 * highlighting.
 * When redrawing takes more than this many milliseconds no further
 * matches will be highlighted.
 * For syntax highlighting the time applies per window.  When over the
 * limit syntax highlighting is disabled until |CTRL-L| is used.
 * This is used to avoid that Vim hangs when using a very complicated
 * pattern.
 */
export const redrawtime = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "redrawtime") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "redrawtime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "redrawtime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "redrawtime") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "redrawtime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "redrawtime");
  },
};

/**
 * This selects the default regexp engine. |two-engines|
 * The possible values are:
 * 	0	automatic selection
 * 	1	old engine
 * 	2	NFA engine
 * Note that when using the NFA engine and the pattern contains something
 * that is not supported the pattern will not match.  This is only useful
 * for debugging the regexp engine.
 * Using automatic selection enables Vim to switch the engine, if the
 * default engine becomes too costly.  E.g., when the NFA engine uses too
 * many states.  This should prevent Vim from hanging on a combination of
 * a complex pattern with long text.
 */
export const regexpengine = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "regexpengine") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "regexpengine", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "regexpengine");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "regexpengine") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "regexpengine", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "regexpengine");
  },
};

/**
 * Show the line number relative to the line with the cursor in front of
 * each line. Relative line numbers help you use the |count| you can
 * precede some vertical motion commands (e.g. j k + -) with, without
 * having to calculate it yourself. Especially useful in combination with
 * other commands (e.g. y d c < > gq gw =).
 * When the 'n' option is excluded from 'cpoptions' a wrapped
 * line will not use the column of line numbers (this is the default when
 * 'compatible' isn't set).
 * The 'numberwidth' option can be used to set the room used for the line
 * number.
 * When a long, wrapped line doesn't start with the first character, '-'
 * characters are put before the number.
 * See |hl-LineNr|  and |hl-CursorLineNr| for the highlighting used for
 * the number.
 */
export const relativenumber = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "relativenumber") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "relativenumber", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "relativenumber");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "relativenumber") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "relativenumber", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "relativenumber");
  },
};

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * Inserting characters in Insert mode will work backwards.  See "typing
 * backwards" |ins-reverse|.  This option can be toggled with the CTRL-_
 * command in Insert mode, when 'allowrevins' is set.
 * NOTE: This option is reset when 'compatible' is set.
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 */
export const revins = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "revins") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "revins", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "revins");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "revins") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "revins", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "revins");
  },
};

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * When on, display orientation becomes right-to-left, i.e., characters
 * that are stored in the file appear from the right to the left.
 * Using this option, it is possible to edit files for languages that
 * are written from the right to the left such as Hebrew and Arabic.
 * This option is per window, so it is possible to edit mixed files
 * simultaneously, or to view the same file in both ways (this is
 * useful whenever you have a mixed text file with both right-to-left
 * and left-to-right strings so that both sets are displayed properly
 * in different windows).  Also see |rileft.txt|.
 */
export const rightleft = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "rightleft") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "rightleft", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rightleft");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "rightleft") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "rightleft", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "rightleft");
  },
};

/**
 * 		{only available when compiled with the |+rightleft|
 * 		feature}
 * Each word in this option enables the command line editing to work in
 * right-to-left mode for a group of commands:
 */
export const rightleftcmd = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "rightleftcmd") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "rightleftcmd", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rightleftcmd");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "rightleftcmd") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "rightleftcmd", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "rightleftcmd");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+cmdline_info| feature}
 * Show the line and column number of the cursor position, separated by a
 * comma.  When there is room, the relative position of the displayed
 * text in the file is shown on the far right:
 * 	Top	first line is visible
 * 	Bot	last line is visible
 * 	All	first and last line are visible
 * 	45%	relative position in the file
 * If 'rulerformat' is set, it will determine the contents of the ruler.
 * Each window has its own ruler.  If a window has a status line, the
 * ruler is shown there.  Otherwise it is shown in the last line of the
 * screen.  If the statusline is given by 'statusline' (i.e. not empty),
 * this option takes precedence over 'ruler' and 'rulerformat'
 * If the number of characters displayed is different from the number of
 * bytes in the text (e.g., for a TAB or a multibyte character), both
 * the text column (byte number) and the screen column are shown,
 * separated with a dash.
 * For an empty line "0-1" is shown.
 * For an empty buffer the line number will also be zero: "0,0-1".
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 * If you don't want to see the ruler all the time but want to know where
 * you are, use "g CTRL-G" |g_CTRL-G|.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const ruler = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "ruler") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "ruler", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ruler");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "ruler") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "ruler", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ruler");
  },
};

/**
 * 		{not available when compiled without the |+statusline|
 * 		feature}
 * When this option is not empty, it determines the content of the ruler
 * string, as displayed for the 'ruler' option.
 * The format of this option is like that of 'statusline'.
 * This option cannot be set in a modeline when 'modelineexpr' is off.
 */
export const rulerformat = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "rulerformat") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "rulerformat", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "rulerformat");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "rulerformat") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "rulerformat", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "rulerformat");
  },
};

/**
 * This is a list of directories which will be searched for runtime
 * files:
 *   filetype.vim	filetypes by file name |new-filetype|
 *   scripts.vim	filetypes by file contents |new-filetype-scripts|
 *   autoload/	automatically loaded scripts |autoload-functions|
 *   colors/	color scheme files |:colorscheme|
 *   compiler/	compiler files |:compiler|
 *   doc/		documentation |write-local-help|
 *   ftplugin/	filetype plugins |write-filetype-plugin|
 *   import/	files that are found by `:import`
 *   indent/	indent scripts |indent-expression|
 *   keymap/	key mapping files |mbyte-keymap|
 *   lang/		menu translations |:menutrans|
 *   menu.vim	GUI menus |menu.vim|
 *   pack/		packages |:packadd|
 *   plugin/	plugin scripts |write-plugin|
 *   print/	files for printing |postscript-print-encoding|
 *   spell/	spell checking files |spell|
 *   syntax/	syntax files |mysyntaxfile|
 *   tutor/	files for vimtutor |tutor|
 */
export const runtimepath = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "runtimepath") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "runtimepath", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "runtimepath");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "runtimepath") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "runtimepath", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "runtimepath");
  },
};

/**
 * Number of lines to scroll with CTRL-U and CTRL-D commands.  Will be
 * set to half the number of lines in the window when the window size
 * changes.  This may happen when enabling the |status-line| or
 * 'tabline' option after setting the 'scroll' option.
 * If you give a count to the CTRL-U or CTRL-D command it will
 * be used as the new value for 'scroll'.  Reset to half the window
 * height with ":set scroll=0".
 */
export const scroll = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "scroll") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scroll");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "scroll") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "scroll", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scroll");
  },
};

/**
 * See also |scroll-binding|.  When this option is set, the current
 * window scrolls as other scrollbind windows (windows that also have
 * this option set) scroll.  This option is useful for viewing the
 * differences between two versions of a file, see 'diff'.
 * See |'scrollopt'| for options that determine how this option should be
 * interpreted.
 * This option is mostly reset when splitting a window to edit another
 * file.  This means that ":split | edit file" results in two windows
 * with scroll-binding, but ":split file" does not.
 */
export const scrollbind = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "scrollbind") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "scrollbind", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrollbind");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "scrollbind") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "scrollbind", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scrollbind");
  },
};

/**
 * Minimal number of lines to scroll when the cursor gets off the
 * screen (e.g., with "j").  Not used for scroll commands (e.g., CTRL-E,
 * CTRL-D).  Useful if your terminal scrolls very slowly.
 * When set to a negative number from -1 to -100 this is used as the
 * percentage of the window height.  Thus -50 scrolls half the window
 * height.
 * NOTE: This option is set to 1 when 'compatible' is set.
 */
export const scrolljump = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "scrolljump") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scrolljump", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrolljump");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "scrolljump") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "scrolljump", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrolljump");
  },
};

/**
 * Minimal number of screen lines to keep above and below the cursor.
 * This will make some context visible around where you are working.  If
 * you set it to a very large value (999) the cursor line will always be
 * in the middle of the window (except at the start or end of the file or
 * when long lines wrap).
 * After using the local value, go back the global value with one of
 * these two: >
 * 	setlocal scrolloff<
 * 	setlocal scrolloff=-1
 * <	For scrolling horizontally see 'sidescrolloff'.
 * NOTE: This option is set to 0 when 'compatible' is set.
 */
export const scrolloff = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "scrolloff") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scrolloff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrolloff");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "scrolloff") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "scrolloff", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrolloff");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "scrolloff") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "scrolloff", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scrolloff");
  },
};

/**
 * This is a comma-separated list of words that specifies how
 * 'scrollbind' windows should behave.  'sbo' stands for ScrollBind
 * Options.
 * The following words are available:
 *     ver		Bind vertical scrolling for 'scrollbind' windows
 *     hor		Bind horizontal scrolling for 'scrollbind' windows
 *     jump	Applies to the offset between two windows for vertical
 * 		scrolling.  This offset is the difference in the first
 * 		displayed line of the bound windows.  When moving
 * 		around in a window, another 'scrollbind' window may
 * 		reach a position before the start or after the end of
 * 		the buffer.  The offset is not changed though, when
 * 		moving back the 'scrollbind' window will try to scroll
 * 		to the desired position when possible.
 * 		When now making that window the current one, two
 * 		things can be done with the relative offset:
 * 		1. When "jump" is not included, the relative offset is
 * 		   adjusted for the scroll position in the new current
 * 		   window.  When going back to the other window, the
 * 		   new relative offset will be used.
 * 		2. When "jump" is included, the other windows are
 * 		   scrolled to keep the same relative offset.  When
 * 		   going back to the other window, it still uses the
 * 		   same relative offset.
 * Also see |scroll-binding|.
 * When 'diff' mode is active there always is vertical scroll binding,
 * even when "ver" isn't there.
 */
export const scrollopt = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "scrollopt") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "scrollopt", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrollopt");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "scrollopt") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "scrollopt", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "scrollopt");
  },
};

/**
 * Specifies the nroff macros that separate sections.  These are pairs of
 * two letters (See |object-motions|).  The default makes a section start
 * at the nroff macros ".SH", ".NH", ".H", ".HU", ".nh" and ".sh".
 */
export const sections = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "sections") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "sections", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sections");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "sections") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "sections", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sections");
  },
};

/**
 * This option defines the behavior of the selection.  It is only used
 * in Visual and Select mode.
 * Possible values:
 *    value	past line     inclusive ~
 *    old		   no		yes
 *    inclusive	   yes		yes
 *    exclusive	   yes		no
 * "past line" means that the cursor is allowed to be positioned one
 * character past the line.
 * "inclusive" means that the last character of the selection is included
 * in an operation.  For example, when "x" is used to delete the
 * selection.
 * When "old" is used and 'virtualedit' allows the cursor to move past
 * the end of line the line break still isn't included.
 * Note that when "exclusive" is used and selecting from the end
 * backwards, you cannot include the last character of a line, when
 * starting in Normal mode and 'virtualedit' empty.
 */
export const selection = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "selection") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "selection", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "selection");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "selection") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "selection", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "selection");
  },
};

/**
 * This is a comma separated list of words, which specifies when to start
 * Select mode instead of Visual mode, when a selection is started.
 * Possible values:
 *    mouse	when using the mouse
 *    key		when using shifted special keys
 *    cmd		when using "v", "V" or CTRL-V
 * See |Select-mode|.
 * The 'selectmode' option is set by the |:behave| command.
 */
export const selectmode = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "selectmode") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "selectmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "selectmode");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "selectmode") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "selectmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "selectmode");
  },
};

/**
 * 		{not available when compiled without the |+mksession|
 * 		feature}
 * Changes the effect of the |:mksession| command.  It is a comma
 * separated list of words.  Each word enables saving and restoring
 * something:
 *    word		save and restore ~
 *    blank	empty windows
 *    buffers	hidden and unloaded buffers, not just those in windows
 *    curdir	the current directory
 *    folds	manually created folds, opened/closed folds and local
 * 		fold options
 *    globals	global variables that start with an uppercase letter
 * 		and contain at least one lowercase letter.  Only
 * 		String and Number types are stored.
 *    help		the help window
 *    localoptions	options and mappings local to a window or buffer (not
 * 		global values for local options)
 *    options	all options and mappings (also global values for local
 * 		options)
 *    skiprtp	exclude 'runtimepath' and 'packpath' from the options
 *    resize	size of the Vim window: 'lines' and 'columns'
 *    sesdir	the directory in which the session file is located
 * 		will become the current directory (useful with
 * 		projects accessed over a network from different
 * 		systems)
 *    slash	backslashes in file names replaced with forward
 * 		slashes
 *    tabpages	all tab pages; without this only the current tab page
 * 		is restored, so that you can make a session for each
 * 		tab page separately
 *    terminal	include terminal windows where the command can be
 * 		restored
 *    unix		with Unix end-of-line format (single <NL>), even when
 * 		on Windows or DOS
 *    winpos	position of the whole Vim window
 *    winsize	window sizes
 */
export const sessionoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "sessionoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "sessionoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sessionoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "sessionoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "sessionoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sessionoptions");
  },
};

/**
 * Name of the shell to use for ! and :! commands.  When changing the
 * value also check these options: 'shelltype', 'shellpipe', 'shellslash'
 * 'shellredir', 'shellquote', 'shellxquote' and 'shellcmdflag'.
 * It is allowed to give an argument to the command, e.g.  "csh -f".
 * See |option-backslash| about including spaces and backslashes.
 * Environment variables are expanded |:set_env|.
 */
export const shell = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shell") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shell", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shell");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shell") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shell", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shell");
  },
};

/**
 * Flag passed to the shell to execute "!" and ":!" commands; e.g.,
 * "bash.exe -c ls", "powershell.exe -Command dir", or "cmd.exe /c dir".
 * For MS-Windows, the default is set according to the value of 'shell',
 * to reduce the need to set this option by the user.
 * On Unix it can have more than one flag.  Each white space separated
 * part is passed as an argument to the shell command.
 * See |option-backslash| about including spaces and backslashes.
 * Also see |dos-shell| and |dos-powershell| for MS-Windows.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const shellcmdflag = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shellcmdflag") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellcmdflag", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellcmdflag");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shellcmdflag") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellcmdflag", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellcmdflag");
  },
};

/**
 * 		{not available when compiled without the |+quickfix|
 * 		feature}
 * String to be used to put the output of the ":make" command in the
 * error file.  See also |:make_makeprg|.  See |option-backslash| about
 * including spaces and backslashes.
 * The name of the temporary file can be represented by "%s" if necessary
 * (the file name is appended automatically if no %s appears in the value
 * of this option).
 * For the Amiga the default is ">".  For MS-Windows using powershell the
 * default is "2>&1 | Out-File -Encoding default", otherwise the default
 * is ">%s 2>&1".  The output is directly saved in a file and not echoed
 * to the screen.
 * For Unix the default is "| tee".  The stdout of the compiler is saved
 * in a file and echoed to the screen.  If the 'shell' option is "csh" or
 * "tcsh" after initializations, the default becomes "|& tee".  If the
 * 'shell' option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
 * "bash", "fish", "ash" or "dash" the default becomes "2>&1| tee".  This
 * means that stderr is also included.  Before using the 'shell' option a
 * path is removed, thus "/bin/sh" uses "sh".
 * For Unix and MS-Windows, when the 'shell' option is "pwsh" the default
 * becomes ">%s 2>&1" and the output is not echoed to the screen.
 * The initialization of this option is done after reading the ".vimrc"
 * and the other initializations, so that when the 'shell' option is set
 * there, the 'shellpipe' option changes automatically, unless it was
 * explicitly set before.
 * When 'shellpipe' is set to an empty string, no redirection of the
 * ":make" output will be done.  This is useful if you use a 'makeprg'
 * that writes to 'makeef' by itself.  If you want no piping, but do
 * want to include the 'makeef', set 'shellpipe' to a single space.
 * Don't forget to precede the space with a backslash: ":set sp=\ ".
 * In the future pipes may be used for filtering and this option will
 * become obsolete (at least for Unix).
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const shellpipe = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shellpipe") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellpipe", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellpipe");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shellpipe") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellpipe", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellpipe");
  },
};

/**
 * Quoting character(s), put around the command passed to the shell, for
 * the "!" and ":!" commands.  The redirection is kept outside of the
 * quoting.  See 'shellxquote' to include the redirection.  It's
 * probably not useful to set both options.
 * This is an empty string by default.  Only known to be useful for
 * third-party shells on MS-Windows-like systems, such as the MKS Korn
 * Shell or bash, where it should be "\"".  See |dos-shell|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const shellquote = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shellquote") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellquote", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellquote");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shellquote") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellquote", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellquote");
  },
};

/**
 * String to be used to put the output of a filter command in a temporary
 * file.  See also |:!|.  See |option-backslash| about including spaces
 * and backslashes.
 * The name of the temporary file can be represented by "%s" if necessary
 * (the file name is appended automatically if no %s appears in the value
 * of this option).
 * The default is ">".  For Unix, if the 'shell' option is "csh" or
 * "tcsh" during initializations, the default becomes ">&".  If the
 * 'shell' option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
 * "bash", "fish", or "pwsh", the default becomes ">%s 2>&1".  This means
 * that stderr is also included.  For Win32, the Unix checks are done and
 * additionally "cmd" is checked for, which makes the default ">%s 2>&1",
 * and "powershell" is checked for which makes the default
 * "2>&1 | Out-File -Encoding default" (see |dos-powershell|).  Also, the
 * same names with ".exe" appended are checked for.
 * The initialization of this option is done after reading the ".vimrc"
 * and the other initializations, so that when the 'shell' option is set
 * there, the 'shellredir' option changes automatically unless it was
 * explicitly set before.
 * In the future pipes may be used for filtering and this option will
 * become obsolete (at least for Unix).
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const shellredir = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shellredir") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellredir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellredir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shellredir") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellredir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellredir");
  },
};

/**
 * 		{only for MS-Windows}
 * When set, a forward slash is used when expanding file names.  This is
 * useful when a Unix-like shell is used instead of cmd.exe, pwsh.exe, or
 * powershell.exe.  Backward slashes can still be typed, but they are
 * changed to forward slashes by Vim.
 * Note that setting or resetting this option has no effect for some
 * existing file names, thus this option needs to be set before opening
 * any file for best results.  This might change in the future.
 * 'shellslash' only works when a backslash can be used as a path
 * separator.  To test if this is so use: >
 * 	if exists('+shellslash')
 * <	Also see 'completeslash'.
 */
export const shellslash = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "shellslash") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shellslash", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellslash");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "shellslash") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "shellslash", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellslash");
  },
};

/**
 * When on, use temp files for shell commands.  When off use a pipe.
 * When using a pipe is not possible temp files are used anyway.
 * Currently a pipe is only supported on Unix and MS-Windows 2K and
 * later.  You can check it with: >
 * 	:if has("filterpipe")
 * <	The advantage of using a pipe is that nobody can read the temp file
 * and the 'shell' command does not need to support redirection.
 * The advantage of using a temp file is that the file type and encoding
 * can be detected.
 * The |FilterReadPre|, |FilterReadPost| and |FilterWritePre|,
 * |FilterWritePost| autocommands event are not triggered when
 * 'shelltemp' is off.
 * The `system()` function does not respect this option and always uses
 * temp files.
 * NOTE: This option is set to the Vim default value when 'compatible'
 * is reset.
 */
export const shelltemp = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "shelltemp") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shelltemp", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shelltemp");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "shelltemp") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "shelltemp", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shelltemp");
  },
};

/**
 * When 'shellxquote' is set to "(" then the characters listed in this
 * option will be escaped with a '^' character.  This makes it possible
 * to execute most external commands with cmd.exe.
 */
export const shellxescape = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shellxescape") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellxescape", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellxescape");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shellxescape") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellxescape", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellxescape");
  },
};

/**
 * Quoting character(s), put around the command passed to the shell, for
 * the "!" and ":!" commands.  Includes the redirection.  See
 * 'shellquote' to exclude the redirection.  It's probably not useful
 * to set both options.
 * When the value is '(' then ')' is appended. When the value is '"('
 * then ')"' is appended.
 * When the value is '(' then also see 'shellxescape'.
 * This is an empty string by default on most systems, but is known to be
 * useful for on Win32 version, either for cmd.exe, powershell.exe, or
 * pwsh.exe which automatically strips off the first and last quote on a
 * command, or 3rd-party shells such as the MKS Korn Shell or bash, where
 * it should be "\"".  The default is adjusted according the value of
 * 'shell', to reduce the need to set this option by the user.  See
 * |dos-shell|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const shellxquote = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shellxquote") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shellxquote", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shellxquote");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shellxquote") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shellxquote", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shellxquote");
  },
};

/**
 * Round indent to multiple of 'shiftwidth'.  Applies to > and <
 * commands.  CTRL-T and CTRL-D in Insert mode always round the indent to
 * a multiple of 'shiftwidth' (this is Vi compatible).
 * NOTE: This option is reset when 'compatible' is set.
 */
export const shiftround = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "shiftround") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "shiftround", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shiftround");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "shiftround") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "shiftround", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shiftround");
  },
};

/**
 * Number of spaces to use for each step of (auto)indent.  Used for
 * |'cindent'|, |>>|, |<<|, etc.
 * When zero the 'ts' value will be used.  Use the |shiftwidth()|
 * function to get the effective shiftwidth value.
 */
export const shiftwidth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "shiftwidth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "shiftwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shiftwidth");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "shiftwidth") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "shiftwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "shiftwidth");
  },
};

/**
 * This option helps to avoid all the |hit-enter| prompts caused by file
 * messages, for example  with CTRL-G, and to avoid some other messages.
 * It is a list of flags:
 *  flag	meaning when present	~
 *   f	use "(3 of 5)" instead of "(file 3 of 5)"
 *   i	use "[noeol]" instead of "[Incomplete last line]"
 *   l	use "999L, 888B" instead of "999 lines, 888 bytes"
 *   m	use "[+]" instead of "[Modified]"
 *   n	use "[New]" instead of "[New File]"
 *   r	use "[RO]" instead of "[readonly]"
 *   w	use "[w]" instead of "written" for file write message
 * 	and "[a]" instead of "appended" for ':w >> file' command
 *   x	use "[dos]" instead of "[dos format]", "[unix]" instead of
 * 	"[unix format]" and "[mac]" instead of "[mac format]".
 *   a	all of the above abbreviations
 */
export const shortmess = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shortmess") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shortmess", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shortmess");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shortmess") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shortmess", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shortmess");
  },
};

/**
 * 		{not available when compiled without the |+linebreak|
 * 		feature}
 * String to put at the start of lines that have been wrapped.  Useful
 * values are "> " or "+++ ": >
 * 	:set showbreak=>\
 * <	Note the backslash to escape the trailing space.  It's easier like
 * this: >
 * 	:let &showbreak = '+++ '
 * <	Only printable single-cell characters are allowed, excluding <Tab> and
 * comma (in a future version the comma might be used to separate the
 * part that is shown at the end and at the start of a line).
 * The characters are highlighted according to the '@' flag in
 * 'highlight'.
 * Note that tabs after the showbreak will be displayed differently.
 * If you want the 'showbreak' to appear in between line numbers, add the
 * "n" flag to 'cpoptions'.
 * A window-local value overrules a global value.  If the global value is
 * set and you want no value in the current window use NONE: >
 * 	:setlocal showbreak=NONE
 * <
 */
export const showbreak = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "showbreak") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "showbreak", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showbreak");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "showbreak") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "showbreak", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showbreak");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "showbreak") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "showbreak", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "showbreak");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+cmdline_info| feature}
 * Show (partial) command in the last line of the screen.  Set this
 * option off if your terminal is slow.
 * In Visual mode the size of the selected area is shown:
 * - When selecting characters within a line, the number of characters.
 *   If the number of bytes is different it is also displayed: "2-6"
 *   means two characters and six bytes.
 * - When selecting more than one line, the number of lines.
 * - When selecting a block, the size in screen characters:
 *   {lines}x{columns}.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const showcmd = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "showcmd") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showcmd", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showcmd");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "showcmd") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showcmd", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showcmd");
  },
};

/**
 * When completing a word in insert mode (see |ins-completion|) from the
 * tags file, show both the tag name and a tidied-up form of the search
 * pattern (if there is one) as possible matches.  Thus, if you have
 * matched a C function, you can see a template for what arguments are
 * required (coding style permitting).
 * Note that this doesn't work well together with having "longest" in
 * 'completeopt', because the completion from the search pattern may not
 * match the typed text.
 */
export const showfulltag = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "showfulltag") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showfulltag", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showfulltag");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "showfulltag") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showfulltag", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showfulltag");
  },
};

/**
 * When a bracket is inserted, briefly jump to the matching one.  The
 * jump is only done if the match can be seen on the screen.  The time to
 * show the match can be set with 'matchtime'.
 * A Beep is given if there is no match (no matter if the match can be
 * seen or not).
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 * When the 'm' flag is not included in 'cpoptions', typing a character
 * will immediately move the cursor back to where it belongs.
 * See the "sm" field in 'guicursor' for setting the cursor shape and
 * blinking when showing the match.
 * The 'matchpairs' option can be used to specify the characters to show
 * matches for.  'rightleft' and 'revins' are used to look for opposite
 * matches.
 * Also see the matchparen plugin for highlighting the match when moving
 * around |pi_paren.txt|.
 * Note: Use of the short form is rated PG.
 */
export const showmatch = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "showmatch") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showmatch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showmatch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "showmatch") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showmatch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showmatch");
  },
};

/**
 * If in Insert, Replace or Visual mode put a message on the last line.
 * Use the 'M' flag in 'highlight' to set the type of highlighting for
 * this message.
 * When |XIM| may be used the message will include "XIM".  But this
 * doesn't mean XIM is really active, especially when 'imactivatekey' is
 * not set.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const showmode = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "showmode") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "showmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showmode");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "showmode") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "showmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showmode");
  },
};

/**
 * The value of this option specifies when the line with tab page labels
 * will be displayed:
 * 	0: never
 * 	1: only if there are at least two tab pages
 * 	2: always
 * This is both for the GUI and non-GUI implementation of the tab pages
 * line.
 * See |tab-page| for more information about tab pages.
 */
export const showtabline = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "showtabline") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "showtabline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "showtabline");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "showtabline") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "showtabline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "showtabline");
  },
};

/**
 * The minimal number of columns to scroll horizontally.  Used only when
 * the 'wrap' option is off and the cursor is moved off of the screen.
 * When it is zero the cursor will be put in the middle of the screen.
 * When using a slow terminal set it to a large number or 0.  When using
 * a fast terminal use a small number or 1.  Not used for "zh" and "zl"
 * commands.
 */
export const sidescroll = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "sidescroll") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "sidescroll", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sidescroll");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "sidescroll") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "sidescroll", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sidescroll");
  },
};

/**
 * The minimal number of screen columns to keep to the left and to the
 * right of the cursor if 'nowrap' is set.  Setting this option to a
 * value greater than 0 while having |'sidescroll'| also at a non-zero
 * value makes some context visible in the line you are scrolling in
 * horizontally (except at beginning of the line).  Setting this option
 * to a large value (like 999) has the effect of keeping the cursor
 * horizontally centered in the window, as long as one does not come too
 * close to the beginning of the line.
 * After using the local value, go back the global value with one of
 * these two: >
 * 	setlocal sidescrolloff<
 * 	setlocal sidescrolloff=-1
 * <	NOTE: This option is set to 0 when 'compatible' is set.
 */
export const sidescrolloff = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "sidescrolloff") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "sidescrolloff", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "sidescrolloff");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "sidescrolloff") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "sidescrolloff", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "sidescrolloff");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "sidescrolloff") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "sidescrolloff", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "sidescrolloff");
  },
};

/**
 * 		{not available when compiled without the |+signs|
 * 		feature}
 * Whether or not to draw the signcolumn. Valid values are:
 *    "auto"   	only when there is a sign to display
 *    "no"	    	never
 *    "yes"    	always
 *    "number"	display signs in the 'number' column. If the number
 * 		column is not present, then behaves like "auto".
 */
export const signcolumn = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "signcolumn") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "signcolumn", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "signcolumn");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "signcolumn") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "signcolumn", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "signcolumn");
  },
};

/**
 * Override the 'ignorecase' option if the search pattern contains upper
 * case characters.  Only used when the search pattern is typed and
 * 'ignorecase' option is on.  Used for the commands "/", "?", "n", "N",
 * ":g" and ":s".  Not used for "*", "#", "gd", tag search, etc.  After
 * "*" and "#" you can make 'smartcase' used by doing a "/" command,
 * recalling the search pattern from history and hitting <Enter>.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const smartcase = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "smartcase") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "smartcase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "smartcase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "smartcase") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "smartcase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "smartcase");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+smartindent| feature}
 * Do smart autoindenting when starting a new line.  Works for C-like
 * programs, but can also be used for other languages.  'cindent' does
 * something like this, works better in most cases, but is more strict,
 * see |C-indenting|.  When 'cindent' is on or 'indentexpr' is set,
 * setting 'si' has no effect.  'indentexpr' is a more advanced
 * alternative.
 * Normally 'autoindent' should also be on when using 'smartindent'.
 * An indent is automatically inserted:
 * - After a line ending in '{'.
 * - After a line starting with a keyword from 'cinwords'.
 * - Before a line starting with '}' (only with the "O" command).
 * When typing '}' as the first character in a new line, that line is
 * given the same indent as the matching '{'.
 * When typing '#' as the first character in a new line, the indent for
 * that line is removed, the '#' is put in the first column.  The indent
 * is restored for the next line.  If you don't want this, use this
 * mapping: ":inoremap # X^H#", where ^H is entered with CTRL-V CTRL-H.
 * When using the ">>" command, lines starting with '#' are not shifted
 * right.
 * NOTE: This option is reset when 'compatible' is set.
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 */
export const smartindent = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "smartindent") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "smartindent", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "smartindent");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "smartindent") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "smartindent", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "smartindent");
  },
};

/**
 * When on, a <Tab> in front of a line inserts blanks according to
 * 'shiftwidth'.  'tabstop' or 'softtabstop' is used in other places.  A
 * <BS> will delete a 'shiftwidth' worth of space at the start of the
 * line.
 * When off, a <Tab> always inserts blanks according to 'tabstop' or
 * 'softtabstop'.  'shiftwidth' is only used for shifting text left or
 * right |shift-left-right|.
 * What gets inserted (a <Tab> or spaces) depends on the 'expandtab'
 * option.  Also see |ins-expandtab|.  When 'expandtab' is not set, the
 * number of spaces is minimized by using <Tab>s.
 * This option is reset when 'paste' is set and restored when 'paste' is
 * reset.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const smarttab = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "smarttab") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "smarttab", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "smarttab");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "smarttab") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "smarttab", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "smarttab");
  },
};

/**
 * Number of spaces that a <Tab> counts for while performing editing
 * operations, like inserting a <Tab> or using <BS>.  It "feels" like
 * <Tab>s are being inserted, while in fact a mix of spaces and <Tab>s is
 * used.  This is useful to keep the 'ts' setting at its standard value
 * of 8, while being able to edit like it is set to 'sts'.  However,
 * commands like "x" still work on the actual characters.
 * When 'sts' is zero, this feature is off.
 * When 'sts' is negative, the value of 'shiftwidth' is used.
 * 'softtabstop' is set to 0 when the 'paste' option is set and restored
 * when 'paste' is reset.
 * See also |ins-expandtab|.  When 'expandtab' is not set, the number of
 * spaces is minimized by using <Tab>s.
 * The 'L' flag in 'cpoptions' changes how tabs are used when 'list' is
 * set.
 * NOTE: This option is set to 0 when 'compatible' is set.
 */
export const softtabstop = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "softtabstop") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "softtabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "softtabstop");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "softtabstop") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "softtabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "softtabstop");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Pattern to locate the end of a sentence.  The following word will be
 * checked to start with a capital letter.  If not then it is highlighted
 * with SpellCap |hl-SpellCap| (unless the word is also badly spelled).
 * When this check is not wanted make this option empty.
 * Only used when 'spell' is set.
 * Be careful with special characters, see |option-backslash| about
 * including spaces and backslashes.
 * To set this option automatically depending on the language, see
 * |set-spc-auto|.
 */
export const spellcapcheck = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "spellcapcheck") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spellcapcheck", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spellcapcheck");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "spellcapcheck") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spellcapcheck", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spellcapcheck");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Name of the word list file where words are added for the |zg| and |zw|
 * commands.  It must end in ".{encoding}.add".  You need to include the
 * path, otherwise the file is placed in the current directory.
 * It may also be a comma separated list of names.  A count before the
 * |zg| and |zw| commands can be used to access each.  This allows using
 * a personal word list file and a project word list file.
 * When a word is added while this option is empty Vim will set it for
 * you: Using the first directory in 'runtimepath' that is writable.  If
 * there is no "spell" directory yet it will be created.  For the file
 * name the first language name that appears in 'spelllang' is used,
 * ignoring the region.
 * The resulting ".spl" file will be used for spell checking, it does not
 * have to appear in 'spelllang'.
 * Normally one file is used for all regions, but you can add the region
 * name if you want to.  However, it will then only be used when
 * 'spellfile' is set to it, for entries in 'spelllang' only files
 * without region name will be found.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const spellfile = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "spellfile") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spellfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spellfile");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "spellfile") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spellfile", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spellfile");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * A comma separated list of word list names.  When the 'spell' option is
 * on spellchecking will be done for these languages.  Example: >
 * 	set spelllang=en_us,nl,medical
 * <	This means US English, Dutch and medical words are recognized.  Words
 * that are not recognized will be highlighted.
 * The word list name must consist of alphanumeric characters, a dash or
 * an underscore.  It should not include a comma or dot.  Using a dash is
 * recommended to separate the two letter language name from a
 * specification.  Thus "en-rare" is used for rare English words.
 * A region name must come last and have the form "_xx", where "xx" is
 * the two-letter, lower case region name.  You can use more than one
 * region by listing them: "en_us,en_ca" supports both US and Canadian
 * English, but not words specific for Australia, New Zealand or Great
 * Britain. (Note: currently en_au and en_nz dictionaries are older than
 * en_ca, en_gb and en_us).
 * If the name "cjk" is included East Asian characters are excluded from
 * spell checking.  This is useful when editing text that also has Asian
 * words.
 * As a special case the name of a .spl file can be given as-is.  The
 * first "_xx" in the name is removed and used as the region name
 * (_xx is an underscore, two letters and followed by a non-letter).
 * This is mainly for testing purposes.  You must make sure the correct
 * encoding is used, Vim doesn't check it.
 * When 'encoding' is set the word lists are reloaded.  Thus it's a good
 * idea to set 'spelllang' after setting 'encoding' to avoid loading the
 * files twice.
 * How the related spell files are found is explained here: |spell-load|.
 */
export const spelllang = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "spelllang") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spelllang", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spelllang");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "spelllang") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spelllang", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spelllang");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * A comma separated list of options for spell checking:
 *    camel	When a word is CamelCased, assume "Cased" is a
 * 		separate word: every upper-case character in a word
 * 		that comes after a lower case character indicates the
 * 		start of a new word.
 */
export const spelloptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "spelloptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spelloptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spelloptions");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "spelloptions") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "spelloptions", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "spelloptions");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Methods used for spelling suggestions.  Both for the |z=| command and
 * the |spellsuggest()| function.  This is a comma-separated list of
 * items:
 */
export const spellsuggest = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "spellsuggest") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "spellsuggest", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "spellsuggest");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "spellsuggest") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "spellsuggest", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "spellsuggest");
  },
};

/**
 * When on, splitting a window will put the new window below the current
 * one. |:split|
 */
export const splitbelow = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "splitbelow") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "splitbelow", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "splitbelow");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "splitbelow") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "splitbelow", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "splitbelow");
  },
};

/**
 * When on, splitting a window will put the new window right of the
 * current one. |:vsplit|
 */
export const splitright = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "splitright") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "splitright", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "splitright");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "splitright") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "splitright", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "splitright");
  },
};

/**
 * When "on" the commands listed below move the cursor to the first
 * non-blank of the line.  When off the cursor is kept in the same column
 * (if possible).  This applies to the commands: CTRL-D, CTRL-U, CTRL-B,
 * CTRL-F, "G", "H", "M", "L", gg, and to the commands "d", "<<" and ">>"
 * with a linewise operator, with "%" with a count and to buffer changing
 * commands (CTRL-^, :bnext, :bNext, etc.).  Also for an Ex command that
 * only has a line number, e.g., ":25" or ":+".
 * In case of buffer changing commands the cursor is placed at the column
 * where it was the last time the buffer was edited.
 * NOTE: This option is set when 'compatible' is set.
 */
export const startofline = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "startofline") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "startofline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "startofline");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "startofline") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "startofline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "startofline");
  },
};

/**
 * 		{not available when compiled without the |+statusline|
 * 		feature}
 * When nonempty, this option determines the content of the status line.
 * Also see |status-line|.
 */
export const statusline = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "statusline") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "statusline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "statusline");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "statusline") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "statusline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "statusline");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "statusline") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "statusline", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "statusline");
  },
};

/**
 * Files with these suffixes get a lower priority when multiple files
 * match a wildcard.  See |suffixes|.  Commas can be used to separate the
 * suffixes.  Spaces after the comma are ignored.  A dot is also seen as
 * the start of a suffix.  To avoid a dot or comma being recognized as a
 * separator, precede it with a backslash (see |option-backslash| about
 * including spaces and backslashes).
 * See 'wildignore' for completely ignoring files.
 * The use of |:set+=| and |:set-=| is preferred when adding or removing
 * suffixes from the list.  This avoids problems when a future version
 * uses another default.
 */
export const suffixes = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "suffixes") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "suffixes", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "suffixes");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "suffixes") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "suffixes", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "suffixes");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+file_in_path| feature}
 * Comma separated list of suffixes, which are used when searching for a
 * file for the "gf", "[I", etc. commands.  Example: >
 * 	:set suffixesadd=.java
 * <
 */
export const suffixesadd = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "suffixesadd") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "suffixesadd", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "suffixesadd");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "suffixesadd") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "suffixesadd", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "suffixesadd");
  },
};

/**
 * Use a swapfile for the buffer.  This option can be reset when a
 * swapfile is not wanted for a specific buffer.  For example, with
 * confidential information that even root must not be able to access.
 * Careful: All text will be in memory:
 * 	- Don't use this for big files.
 * 	- Recovery will be impossible!
 * A swapfile will only be present when |'updatecount'| is non-zero and
 * 'swapfile' is set.
 * When 'swapfile' is reset, the swap file for the current buffer is
 * immediately deleted.  When 'swapfile' is set, and 'updatecount' is
 * non-zero, a swap file is immediately created.
 * Also see |swap-file| and |'swapsync'|.
 * If you want to open a new buffer without creating a swap file for it,
 * use the |:noswapfile| modifier.
 * See 'directory' for where the swap file is created.
 */
export const swapfile = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "swapfile") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "swapfile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "swapfile");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "swapfile") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "swapfile", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "swapfile");
  },
};

/**
 * This option controls the behavior when switching between buffers.
 * Mostly for |quickfix| commands some values are also used for other
 * commands, as mentioned below.
 * Possible values (comma separated list):
 *    useopen	If included, jump to the first open window that
 * 		contains the specified buffer (if there is one).
 * 		Otherwise: Do not examine other windows.
 * 		This setting is checked with |quickfix| commands, when
 * 		jumping to errors (":cc", ":cn", "cp", etc.).  It is
 * 		also used in all buffer related split commands, for
 * 		example ":sbuffer", ":sbnext", or ":sbrewind".
 *    usetab	Like "useopen", but also consider windows in other tab
 * 		pages.
 *    split	If included, split the current window before loading
 * 		a buffer for a |quickfix| command that display errors.
 * 		Otherwise: do not split, use current window (when used
 * 		in the quickfix window: the previously used window or
 * 		split if there is no other window).
 *    vsplit	Just like "split" but split vertically.
 *    newtab	Like "split", but open a new tab page.  Overrules
 * 		"split" when both are present.
 *    uselast	If included, jump to the previously used window when
 * 		jumping to errors with |quickfix| commands.
 */
export const switchbuf = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "switchbuf") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "switchbuf", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "switchbuf");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "switchbuf") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "switchbuf", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "switchbuf");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * Maximum column in which to search for syntax items.  In long lines the
 * text after this column is not highlighted and following lines may not
 * be highlighted correctly, because the syntax state is cleared.
 * This helps to avoid very slow redrawing for an XML file that is one
 * long line.
 * Set to zero to remove the limit.
 */
export const synmaxcol = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "synmaxcol") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "synmaxcol", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "synmaxcol");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "synmaxcol") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "synmaxcol", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "synmaxcol");
  },
};

/**
 * 		{not available when compiled without the |+syntax|
 * 		feature}
 * When this option is set, the syntax with this name is loaded, unless
 * syntax highlighting has been switched off with ":syntax off".
 * Otherwise this option does not always reflect the current syntax (the
 * b:current_syntax variable does).
 * This option is most useful in a modeline, for a file which syntax is
 * not automatically recognized.  Example, in an IDL file:
 * 	// ~
 * When a dot appears in the value then this separates two filetype
 * names.  Example:
 * 	// ~
 * This will use the "c" syntax first, then the "doxygen" syntax.
 * Note that the second one must be prepared to be loaded as an addition,
 * otherwise it will be skipped.  More than one dot may appear.
 * To switch off syntax highlighting for the current file, use: >
 * 	:set syntax=OFF
 * <	To switch syntax highlighting on according to the current value of the
 * 'filetype' option: >
 * 	:set syntax=ON
 * <	What actually happens when setting the 'syntax' option is that the
 * Syntax autocommand event is triggered with the value as argument.
 * This option is not copied to another buffer, independent of the 's' or
 * 'S' flag in 'cpoptions'.
 * Only normal file name characters can be used, "/\*?[|<>" are illegal.
 */
export const syntax = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "syntax") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "syntax", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "syntax");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "syntax") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "syntax", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "syntax");
  },
};

/**
 * When nonempty, this option determines the content of the tab pages
 * line at the top of the Vim window.  When empty Vim will use a default
 * tab pages line.  See |setting-tabline| for more info.
 */
export const tabline = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "tabline") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tabline", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tabline");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "tabline") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tabline", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tabline");
  },
};

/**
 * Maximum number of tab pages to be opened by the |-p| command line
 * argument or the ":tab all" command. |tabpage|
 */
export const tabpagemax = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "tabpagemax") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "tabpagemax", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tabpagemax");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "tabpagemax") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "tabpagemax", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tabpagemax");
  },
};

/**
 * Number of spaces that a <Tab> in the file counts for.  Also see
 * |:retab| command, and 'softtabstop' option.
 */
export const tabstop = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "tabstop") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "tabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tabstop");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "tabstop") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "tabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tabstop");
  },
};

/**
 * When searching for a tag (e.g., for the |:ta| command), Vim can either
 * use a binary search or a linear search in a tags file.  Binary
 * searching makes searching for a tag a LOT faster, but a linear search
 * will find more tags if the tags file wasn't properly sorted.
 * Vim normally assumes that your tags files are sorted, or indicate that
 * they are not sorted.  Only when this is not the case does the
 * 'tagbsearch' option need to be switched off.
 */
export const tagbsearch = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "tagbsearch") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tagbsearch", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagbsearch");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "tagbsearch") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tagbsearch", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagbsearch");
  },
};

/**
 * This option specifies how case is handled when searching the tags
 * file:
 *    followic	Follow the 'ignorecase' option
 *    followscs    Follow the 'smartcase' and 'ignorecase' options
 *    ignore	Ignore case
 *    match	Match case
 *    smart	Ignore case unless an upper case letter is used
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const tagcase = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "tagcase") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tagcase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagcase");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "tagcase") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tagcase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagcase");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "tagcase") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "tagcase", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tagcase");
  },
};

/**
 * 		{not available when compiled without the |+eval|
 * 		feature}
 * This option specifies a function to be used to perform tag searches.
 * The function gets the tag pattern and should return a List of matching
 * tags.  See |tag-function| for an explanation of how to write the
 * function and an example.
 */
export const tagfunc = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "tagfunc") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tagfunc", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagfunc");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "tagfunc") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "tagfunc", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tagfunc");
  },
};

/**
 * If non-zero, tags are significant up to this number of characters.
 */
export const taglength = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "taglength") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "taglength", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "taglength");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "taglength") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "taglength", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "taglength");
  },
};

/**
 * If on and using a tags file in another directory, file names in that
 * tags file are relative to the directory where the tags file is.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const tagrelative = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "tagrelative") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tagrelative", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagrelative");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "tagrelative") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tagrelative", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagrelative");
  },
};

/**
 * Filenames for the tag command, separated by spaces or commas.  To
 * include a space or comma in a file name, precede it with a backslash
 * (see |option-backslash| about including spaces and backslashes).
 * When a file name starts with "./", the '.' is replaced with the path
 * of the current file.  But only when the 'd' flag is not included in
 * 'cpoptions'.  Environment variables are expanded |:set_env|.  Also see
 * |tags-option|.
 * "*" and other wildcards can be used to search for tags files in
 * a directory tree.  See |file-searching|.  E.g., "/lib/** /tags" will
 * find all files named "tags" below "/lib".  The filename itself cannot
 * contain wildcards, it is used as-is.  E.g., "/lib/** /tags?" will find
 * files called "tags?".  {not available when compiled without the
 * |+path_extra| feature}
 * The |tagfiles()| function can be used to get a list of the file names
 * actually used.
 * If Vim was compiled with the |+emacs_tags| feature, Emacs-style tag
 * files are also supported.  They are automatically recognized.  The
 * default value becomes "./tags,./TAGS,tags,TAGS", unless case
 * differences are ignored (MS-Windows).  |emacs-tags|
 * The use of |:set+=| and |:set-=| is preferred when adding or removing
 * file names from the list.  This avoids problems when a future version
 * uses another default.
 */
export const tags = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "tags") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "tags", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tags");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "tags") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "tags", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tags");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "tags") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "tags", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "tags");
  },
};

/**
 * When on, the |tagstack| is used normally.  When off, a ":tag" or
 * ":tselect" command with an argument will not push the tag onto the
 * tagstack.  A following ":tag" without an argument, a ":pop" command or
 * any other command that uses the tagstack will use the unmodified
 * tagstack, but does change the pointer to the active entry.
 * Resetting this option is useful when using a ":tag" command in a
 * mapping which should not change the tagstack.
 */
export const tagstack = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "tagstack") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tagstack", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tagstack");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "tagstack") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tagstack", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tagstack");
  },
};

/**
 * 		{only available when compiled with the |+arabic|
 * 		feature}
 * The terminal is in charge of Bi-directionality of text (as specified
 * by Unicode).  The terminal is also expected to do the required shaping
 * that some languages (such as Arabic) require.
 * Setting this option implies that 'rightleft' will not be set when
 * 'arabic' is set and the value of 'arabicshape' will be ignored.
 * Note that setting 'termbidi' has the immediate effect that
 * 'arabicshape' is ignored, but 'rightleft' isn't changed automatically.
 * This option is reset when the GUI is started.
 * For further details see |arabic.txt|.
 */
export const termbidi = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "termbidi") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "termbidi", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termbidi");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "termbidi") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "termbidi", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termbidi");
  },
};

/**
 * 		{not available when compiled without the
 * 		|+termguicolors| feature}
 * When on, uses |highlight-guifg| and |highlight-guibg| attributes in
 * the terminal (thus using 24-bit color).
 */
export const termguicolors = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "termguicolors") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "termguicolors", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termguicolors");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "termguicolors") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "termguicolors", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termguicolors");
  },
};

/**
 * Maximum width of text that is being inserted.  A longer line will be
 * broken after white space to get this width.  A zero value disables
 * this.
 * 'textwidth' is set to 0 when the 'paste' option is set and restored
 * when 'paste' is reset.
 * When 'textwidth' is zero, 'wrapmargin' may be used.  See also
 * 'formatoptions' and |ins-textwidth|.
 * When 'formatexpr' is set it will be used to break the line.
 * NOTE: This option is set to 0 when 'compatible' is set.
 */
export const textwidth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "textwidth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "textwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "textwidth");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "textwidth") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "textwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "textwidth");
  },
};

/**
 * List of file names, separated by commas, that are used to lookup words
 * for thesaurus completion commands |i_CTRL-X_CTRL-T|.
 */
export const thesaurus = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "thesaurus") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "thesaurus", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "thesaurus");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "thesaurus") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "thesaurus", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "thesaurus");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "thesaurus") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "thesaurus", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "thesaurus");
  },
};

/**
 * When on: The tilde command "~" behaves like an operator.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const tildeop = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "tildeop") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "tildeop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "tildeop");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "tildeop") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "tildeop", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "tildeop");
  },
};

/**
 * 		global
 */
export const timeout = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "timeout") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "timeout", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "timeout");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "timeout") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "timeout", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "timeout");
  },
};

/**
 * 		global
 */
export const timeoutlen = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "timeoutlen") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "timeoutlen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "timeoutlen");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "timeoutlen") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "timeoutlen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "timeoutlen");
  },
};

/**
 * The time in milliseconds that is waited for a key code or mapped key
 * sequence to complete.  Also used for CTRL-\ CTRL-N and CTRL-\ CTRL-G
 * when part of a command has been typed.
 * Normally only 'timeoutlen' is used and 'ttimeoutlen' is -1.  When a
 * different timeout value for key codes is desired set 'ttimeoutlen' to
 * a non-negative number.
 */
export const ttimeoutlen = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "ttimeoutlen") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "ttimeoutlen", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "ttimeoutlen");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "ttimeoutlen") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "ttimeoutlen", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "ttimeoutlen");
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
 * 		{only when compiled with the |+persistent_undo| feature}
 * List of directory names for undo files, separated with commas.
 * See |'backupdir'| for details of the format.
 * "." means using the directory of the file.  The undo file name for
 * "file.txt" is ".file.txt.un~".
 * For other directories the file name is the full path of the edited
 * file, with path separators replaced with "%".
 * When writing: The first directory that exists is used. "." always
 * works, no directories after "." will be used for writing.
 * When reading all entries are tried to find an undo file.  The first
 * undo file that exists is used.  When it cannot be read an error is
 * given, no further entry is used.
 * See |undo-persistence|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const undodir = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "undodir") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "undodir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undodir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "undodir") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "undodir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "undodir");
  },
};

/**
 * 		{only when compiled with the |+persistent_undo| feature}
 * When on, Vim automatically saves undo history to an undo file when
 * writing a buffer to a file, and restores undo history from the same
 * file on buffer read.
 * The directory where the undo file is stored is specified by 'undodir'.
 * For more information about this feature see |undo-persistence|.
 * The undo file is not read when 'undoreload' causes the buffer from
 * before a reload to be saved for undo.
 * When 'undofile' is turned off the undo file is NOT deleted.
 * NOTE: This option is reset when 'compatible' is set.
 */
export const undofile = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "undofile") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "undofile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undofile");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "undofile") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "undofile", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "undofile");
  },
};

/**
 * Maximum number of changes that can be undone.  Since undo information
 * is kept in memory, higher numbers will cause more memory to be used.
 * Nevertheless, a single change can already use a large amount of memory.
 * Set to 0 for Vi compatibility: One level of undo and "u" undoes
 * itself: >
 * 	set ul=0
 * <	But you can also get Vi compatibility by including the 'u' flag in
 * 'cpoptions', and still be able to use CTRL-R to repeat undo.
 * Also see |undo-two-ways|.
 * Set to -1 for no undo at all.  You might want to do this only for the
 * current buffer: >
 * 	setlocal ul=-1
 * <	This helps when you run out of memory for a single change.
 */
export const undolevels = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "undolevels") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "undolevels", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undolevels");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "undolevels") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "undolevels", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "undolevels");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "undolevels") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "undolevels", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "undolevels");
  },
};

/**
 * Save the whole buffer for undo when reloading it.  This applies to the
 * ":e!" command and reloading for when the buffer changed outside of
 * Vim. |FileChangedShell|
 * The save only happens when this option is negative or when the number
 * of lines is smaller than the value of this option.
 * Set this option to zero to disable undo for a reload.
 */
export const undoreload = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "undoreload") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "undoreload", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "undoreload");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "undoreload") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "undoreload", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "undoreload");
  },
};

/**
 * After typing this many characters the swap file will be written to
 * disk.  When zero, no swap file will be created at all (see chapter on
 * recovery |crash-recovery|).  'updatecount' is set to zero by starting
 * Vim with the "-n" option, see |startup|.  When editing in readonly
 * mode this option will be initialized to 10000.
 * The swapfile can be disabled per buffer with |'swapfile'|.
 * When 'updatecount' is set from zero to non-zero, swap files are
 * created for all buffers that have 'swapfile' set.  When 'updatecount'
 * is set to zero, existing swap files are not deleted.
 * Also see |'swapsync'|.
 * This option has no meaning in buffers where |'buftype'| is "nofile"
 * or "nowrite".
 */
export const updatecount = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "updatecount") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "updatecount", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "updatecount");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "updatecount") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "updatecount", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "updatecount");
  },
};

/**
 * If this many milliseconds nothing is typed the swap file will be
 * written to disk (see |crash-recovery|).  Also used for the
 * |CursorHold| autocommand event.
 */
export const updatetime = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "updatetime") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "updatetime", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "updatetime");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "updatetime") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "updatetime", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "updatetime");
  },
};

/**
 * 		{only available when compiled with the |+vartabs|
 * 		feature}
 * A list of the number of spaces that a <Tab> counts for while editing,
 * such as inserting a <Tab> or using <BS>.  It "feels" like variable-
 * width <Tab>s are being inserted, while in fact a mixture of spaces
 * and <Tab>s is used.  Tab widths are separated with commas, with the
 * final value applying to all subsequent tabs.
 */
export const varsofttabstop = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "varsofttabstop") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "varsofttabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "varsofttabstop");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "varsofttabstop") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "varsofttabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "varsofttabstop");
  },
};

/**
 * 		{only available when compiled with the |+vartabs|
 * 		feature}
 * A list of the number of spaces that a <Tab> in the file counts for,
 * separated by commas.  Each value corresponds to one tab, with the
 * final value applying to all subsequent tabs. For example: >
 * 	:set vartabstop=4,20,10,8
 * <	This will make the first tab 4 spaces wide, the second 20 spaces,
 * the third 10 spaces, and all following tabs 8 spaces.
 */
export const vartabstop = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "vartabstop") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "vartabstop", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "vartabstop");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "vartabstop") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "vartabstop", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "vartabstop");
  },
};

/**
 * When bigger than zero, Vim will give messages about what it is doing.
 * Currently, these messages are given:
 * >= 1	When the viminfo file is read or written.
 * >= 2	When a file is ":source"'ed.
 * >= 4	Shell commands.
 * >= 5	Every searched tags file and include file.
 * >= 8	Files for which a group of autocommands is executed.
 * >= 9	Every executed autocommand.
 * >= 11	Finding items in a path
 * >= 12	Every executed function.
 * >= 13	When an exception is thrown, caught, finished, or discarded.
 * >= 14	Anything pending in a ":finally" clause.
 * >= 15	Every executed Ex command from a script (truncated at 200
 * 	characters).
 * >= 16	Every executed Ex command.
 */
export const verbose = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "verbose") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "verbose", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "verbose");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "verbose") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "verbose", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "verbose");
  },
};

/**
 * When not empty all messages are written in a file with this name.
 * When the file exists messages are appended.
 * Writing to the file ends when Vim exits or when 'verbosefile' is made
 * empty.  Writes are buffered, thus may not show up for some time.
 * Setting 'verbosefile' to a new value is like making it empty first.
 * The difference with |:redir| is that verbose messages are not
 * displayed when 'verbosefile' is set.
 */
export const verbosefile = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "verbosefile") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "verbosefile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "verbosefile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "verbosefile") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "verbosefile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "verbosefile");
  },
};

/**
 * 		{not available when compiled without the |+mksession|
 * 		feature}
 * Name of the directory where to store files for |:mkview|.
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const viewdir = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "viewdir") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "viewdir", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "viewdir");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "viewdir") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "viewdir", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "viewdir");
  },
};

/**
 * 		{not available when compiled without the |+mksession|
 * 		feature}
 * Changes the effect of the |:mkview| command.  It is a comma separated
 * list of words.  Each word enables saving and restoring something:
 *    word		save and restore ~
 *    cursor	cursor position in file and in window
 *    folds	manually created folds, opened/closed folds and local
 * 		fold options
 *    options	options and mappings local to a window or buffer (not
 * 		global values for local options)
 *    localoptions same as "options"
 *    slash	backslashes in file names replaced with forward
 * 		slashes
 *    unix		with Unix end-of-line format (single <NL>), even when
 * 		on MS-Windows
 *    curdir	the window-local directory, if set with `:lcd`
 */
export const viewoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "viewoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "viewoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "viewoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "viewoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "viewoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "viewoptions");
  },
};

/**
 * A comma separated list of these words:
 *     block	Allow virtual editing in Visual block mode.
 *     insert	Allow virtual editing in Insert mode.
 *     all		Allow virtual editing in all modes.
 *     onemore	Allow the cursor to move just past the end of the line
 */
export const virtualedit = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "virtualedit") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "virtualedit", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "virtualedit");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "virtualedit") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "virtualedit", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "virtualedit");
  },
};

/**
 * Use a visual bell instead of beeping.  The terminal code to display the
 * visual bell is given with 't_vb'.  When no beep or flash is wanted,
 * use: >
 * 	:set vb t_vb=
 * <	If you want a short flash, you can use this on many terminals: >
 * 	:set vb t_vb=[?5h$<100>[?5l
 * <	Here $<100> specifies the time, you can use a smaller or bigger value
 * to get a shorter or longer flash.
 */
export const visualbell = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "visualbell") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "visualbell", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "visualbell");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "visualbell") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "visualbell", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "visualbell");
  },
};

/**
 * Allow specified keys that move the cursor left/right to move to the
 * previous/next line when the cursor is on the first/last character in
 * the line.  Concatenate characters to allow this for these keys:
 * 	char   key	  mode	~
 * 	 b    <BS>	 Normal and Visual
 * 	 s    <Space>	 Normal and Visual
 * 	 h    "h"	 Normal and Visual (not recommended)
 * 	 l    "l"	 Normal and Visual (not recommended)
 * 	 <    <Left>	 Normal and Visual
 * 	 >    <Right>	 Normal and Visual
 * 	 ~    "~"	 Normal
 * 	 [    <Left>	 Insert and Replace
 * 	 ]    <Right>	 Insert and Replace
 * For example: >
 * 	:set ww=<,>,[,]
 * <	allows wrap only when cursor keys are used.
 * When the movement keys are used in combination with a delete or change
 * operator, the <EOL> also counts for a character.  This makes "3h"
 * different from "3dh" when the cursor crosses the end of a line.  This
 * is also true for "x" and "X", because they do the same as "dl" and
 * "dh".  If you use this, you may also want to use the mapping
 * ":map <BS> X" to make backspace delete the character in front of the
 * cursor.
 * When 'l' is included and it is used after an operator at the end of a
 * line (not an empty line) then it will not move to the next line.  This
 * makes "dl", "cl", "yl" etc. work normally.
 * NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const whichwrap = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "whichwrap") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "whichwrap", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "whichwrap");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "whichwrap") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "whichwrap", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "whichwrap");
  },
};

/**
 * Character you have to type to start wildcard expansion in the
 * command-line, as specified with 'wildmode'.
 * More info here: |cmdline-completion|.
 * The character is not recognized when used inside a macro.  See
 * 'wildcharm' for that.
 * Although 'wc' is a number option, you can set it to a special key: >
 * 	:set wc=<Esc>
 * <	NOTE: This option is set to the Vi default value when 'compatible' is
 * set and to the Vim default value when 'compatible' is reset.
 */
export const wildchar = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "wildchar") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "wildchar", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildchar");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "wildchar") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "wildchar", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildchar");
  },
};

/**
 * 'wildcharm' works exactly like 'wildchar', except that it is
 * recognized when used inside a macro.  You can find "spare" command-line
 * keys suitable for this option by looking at |ex-edit-index|.  Normally
 * you'll never actually type 'wildcharm', just use it in mappings that
 * automatically invoke completion mode, e.g.: >
 * 	:set wcm=<C-Z>
 * 	:cnoremap ss so $vim/sessions/*.vim<C-Z>
 * <	Then after typing :ss you can use CTRL-P & CTRL-N.
 */
export const wildcharm = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "wildcharm") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "wildcharm", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildcharm");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "wildcharm") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "wildcharm", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildcharm");
  },
};

/**
 * 		{not available when compiled without the |+wildignore|
 * 		feature}
 * A list of file patterns.  A file that matches with one of these
 * patterns is ignored when expanding |wildcards|, completing file or
 * directory names, and influences the result of |expand()|, |glob()| and
 * |globpath()| unless a flag is passed to disable this.
 * The pattern is used like with |:autocmd|, see |autocmd-patterns|.
 * Also see 'suffixes'.
 * Example: >
 * 	:set wildignore=.obj
 * <	The use of |:set+=| and |:set-=| is preferred when adding or removing
 * a pattern from the list.  This avoids problems when a future version
 * uses another default.
 */
export const wildignore = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "wildignore") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wildignore", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildignore");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "wildignore") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "wildignore", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildignore");
  },
};

/**
 * When set case is ignored when completing file names and directories.
 * Has no effect when 'fileignorecase' is set.
 * Does not apply when the shell is used to expand wildcards, which
 * happens when there are special characters.
 */
export const wildignorecase = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "wildignorecase") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wildignorecase", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildignorecase");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "wildignorecase") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "wildignorecase", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildignorecase");
  },
};

/**
 * 		{not available if compiled without the |+wildmenu|
 * 		feature}
 * When 'wildmenu' is on, command-line completion operates in an enhanced
 * mode.  On pressing 'wildchar' (usually <Tab>) to invoke completion,
 * the possible matches are shown just above the command line, with the
 * first match highlighted (overwriting the status line, if there is
 * one).  Keys that show the previous/next match, such as <Tab> or
 * CTRL-P/CTRL-N, cause the highlight to move to the appropriate match.
 * When 'wildmode' is used, "wildmenu" mode is used where "full" is
 * specified.  "longest" and "list" do not start "wildmenu" mode.
 * You can check the current mode with |wildmenumode()|.
 * If there are more matches than can fit in the line, a ">" is shown on
 * the right and/or a "<" is shown on the left.  The status line scrolls
 * as needed.
 * The "wildmenu" mode is abandoned when a key is hit that is not used
 * for selecting a completion.
 * While the "wildmenu" is active the following keys have special
 * meanings:
 */
export const wildmenu = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "wildmenu") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wildmenu", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildmenu");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "wildmenu") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "wildmenu", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildmenu");
  },
};

/**
 * Completion mode that is used for the character specified with
 * 'wildchar'.  It is a comma separated list of up to four parts.  Each
 * part specifies what to do for each consecutive use of 'wildchar'.  The
 * first part specifies the behavior for the first use of 'wildchar',
 * The second part for the second use, etc.
 */
export const wildmode = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "wildmode") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wildmode", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildmode");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "wildmode") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "wildmode", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildmode");
  },
};

/**
 * 		{not available when compiled without the |+wildignore|
 * 		feature}
 * A list of words that change how command line completion is done.
 * Currently only one word is allowed:
 *   tagfile	When using CTRL-D to list matching tags, the kind of
 * 		tag and the file of the tag is listed.	Only one match
 * 		is displayed per line.  Often used tag kinds are:
 * 			d	#define
 * 			f	function
 * Also see |cmdline-completion|.
 */
export const wildoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "wildoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "wildoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wildoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "wildoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "wildoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wildoptions");
  },
};

/**
 * 		{only used in Win32, Motif, GTK and Photon GUI}
 * Some GUI versions allow the access to menu entries by using the ALT
 * key in combination with a character that appears underlined in the
 * menu.  This conflicts with the use of the ALT key for mappings and
 * entering special characters.  This option tells what to do:
 *   no	Don't use ALT keys for menus.  ALT key combinations can be
 * 	mapped, but there is no automatic handling.  This can then be
 * 	done with the |:simalt| command.
 *   yes	ALT key handling is done by the windowing system.  ALT key
 * 	combinations cannot be mapped.
 *   menu	Using ALT in combination with a character that is a menu
 * 	shortcut key, will be handled by the windowing system.  Other
 * 	keys can be mapped.
 * If the menu is disabled by excluding 'm' from 'guioptions', the ALT
 * key is never used for the menu.
 * This option is not used for <F10>; on Win32 and with GTK <F10> will
 * select the menu, unless it has been mapped.
 */
export const winaltkeys = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "winaltkeys") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "winaltkeys", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winaltkeys");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "winaltkeys") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "winaltkeys", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winaltkeys");
  },
};

/**
 * Window height used for |CTRL-F| and |CTRL-B| when there is only one
 * window and the value is smaller than 'lines' minus one.  The screen
 * will scroll 'window' minus two lines, with a minimum of one.
 * When 'window' is equal to 'lines' minus one CTRL-F and CTRL-B scroll
 * in a much smarter way, taking care of wrapping lines.
 * When resizing the Vim window, the value is smaller than 1 or more than
 * or equal to 'lines' it will be set to 'lines' minus 1.
 * Note: Do not confuse this with the height of the Vim window, use
 * 'lines' for that.
 */
export const window = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "window") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "window", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "window");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "window") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "window", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "window");
  },
};

/**
 * Minimal number of lines for the current window.  This is not a hard
 * minimum, Vim will use fewer lines if there is not enough room.  If the
 * focus goes to a window that is smaller, its size is increased, at the
 * cost of the height of other windows.
 * Set 'winheight' to a small number for normal editing.
 * Set it to 999 to make the current window fill most of the screen.
 * Other windows will be only 'winminheight' high.  This has the drawback
 * that ":all" will create only two windows.  To avoid "vim -o 1 2 3 4"
 * to create only two windows, set the option after startup is done,
 * using the |VimEnter| event: >
 * 	au VimEnter * set winheight=999
 * <	Minimum value is 1.
 * The height is not adjusted after one of the commands that change the
 * height of the current window.
 * 'winheight' applies to the current window.  Use 'winminheight' to set
 * the minimal height for other windows.
 */
export const winheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "winheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "winheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winheight");
  },
};

/**
 * Keep the window height when windows are opened or closed and
 * 'equalalways' is set.  Also for |CTRL-W_=|.  Set by default for the
 * |preview-window| and |quickfix-window|.
 * The height may be changed anyway when running out of room.
 */
export const winfixheight = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "winfixheight") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "winfixheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winfixheight");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "winfixheight") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "winfixheight", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winfixheight");
  },
};

/**
 * Keep the window width when windows are opened or closed and
 * 'equalalways' is set.  Also for |CTRL-W_=|.
 * The width may be changed anyway when running out of room.
 */
export const winfixwidth = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "winfixwidth") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "winfixwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winfixwidth");
  },
  async getLocal(denops: Denops): Promise<boolean> {
    return await localOptions.get(denops, "winfixwidth") ?? false;
  },
  setLocal(denops: Denops, value: boolean): Promise<void> {
    return localOptions.set(denops, "winfixwidth", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winfixwidth");
  },
};

/**
 * The minimal height of a window, when it's not the current window.
 * This is a hard minimum, windows will never become smaller.
 * When set to zero, windows may be "squashed" to zero lines (i.e. just a
 * status bar) if necessary.  They will return to at least one line when
 * they become active (since the cursor has to have somewhere to go.)
 * Use 'winheight' to set the minimal height of the current window.
 * This option is only checked when making a window smaller.  Don't use a
 * large number, it will cause errors when opening more than a few
 * windows.  A value of 0 to 3 is reasonable.
 */
export const winminheight = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "winminheight") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winminheight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winminheight");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "winminheight") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winminheight", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winminheight");
  },
};

/**
 * The minimal width of a window, when it's not the current window.
 * This is a hard minimum, windows will never become smaller.
 * When set to zero, windows may be "squashed" to zero columns (i.e. just
 * a vertical separator) if necessary.  They will return to at least one
 * line when they become active (since the cursor has to have somewhere
 * to go.)
 * Use 'winwidth' to set the minimal width of the current window.
 * This option is only checked when making a window smaller.  Don't use a
 * large number, it will cause errors when opening more than a few
 * windows.  A value of 0 to 12 is reasonable.
 */
export const winminwidth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "winminwidth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winminwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winminwidth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "winminwidth") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winminwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winminwidth");
  },
};

/**
 * Minimal number of columns for the current window.  This is not a hard
 * minimum, Vim will use fewer columns if there is not enough room.  If
 * the current window is smaller, its size is increased, at the cost of
 * the width of other windows.  Set it to 999 to make the current window
 * always fill the screen.  Set it to a small number for normal editing.
 * The width is not adjusted after one of the commands to change the
 * width of the current window.
 * 'winwidth' applies to the current window.  Use 'winminwidth' to set
 * the minimal width for other windows.
 */
export const winwidth = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "winwidth") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winwidth", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winwidth");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "winwidth") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "winwidth", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winwidth");
  },
};

/**
 * Number of characters from the right window border where wrapping
 * starts.  When typing text beyond this limit, an <EOL> will be inserted
 * and inserting continues on the next line.
 * Options that add a margin, such as 'number' and 'foldcolumn', cause
 * the text width to be further reduced.  This is Vi compatible.
 * When 'textwidth' is non-zero, this option is not used.
 * This option is set to 0 when 'paste' is set and restored when 'paste'
 * is reset.
 * See also 'formatoptions' and |ins-textwidth|.
 */
export const wrapmargin = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "wrapmargin") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "wrapmargin", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wrapmargin");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "wrapmargin") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "wrapmargin", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "wrapmargin");
  },
};

/**
 * Searches wrap around the end of the file.  Also applies to |]s| and
 * |[s|, searching for spelling mistakes.
 */
export const wrapscan = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "wrapscan") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "wrapscan", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "wrapscan");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "wrapscan") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "wrapscan", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "wrapscan");
  },
};

/**
 * Allows writing to any file with no need for "!" override.
 */
export const writeany = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "writeany") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "writeany", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "writeany");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "writeany") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "writeany", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "writeany");
  },
};

/**
 * Make a backup before overwriting a file.  The backup is removed after
 * the file was successfully written, unless the 'backup' option is
 * also on.
 * WARNING: Switching this option off means that when Vim fails to write
 * your buffer correctly and then, for whatever reason, Vim exits, you
 * lose both the original file and what you were writing.  Only reset
 * this option if your file system is almost full and it makes the write
 * fail (and make sure not to exit Vim until the write was successful).
 * See |backup-table| for another explanation.
 * When the 'backupskip' pattern matches, a backup is not made anyway.
 * Depending on 'backupcopy' the backup is a new file or the original
 * file renamed (and a new file is written).
 * NOTE: This option is set to the default value when 'compatible' is
 * set.
 */
export const writebackup = {
  async get(denops: Denops): Promise<boolean> {
    return await options.get(denops, "writebackup") ?? false;
  },
  set(denops: Denops, value: boolean): Promise<void> {
    return options.set(denops, "writebackup", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "writebackup");
  },
  async getGlobal(denops: Denops): Promise<boolean> {
    return await globalOptions.get(denops, "writebackup") ?? false;
  },
  setGlobal(denops: Denops, value: boolean): Promise<void> {
    return globalOptions.set(denops, "writebackup", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "writebackup");
  },
};

/**
 * The number of milliseconds to wait for each character sent to the
 * screen.  When non-zero, characters are sent to the terminal one by
 * one.  For debugging purposes.
 */
export const writedelay = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "writedelay") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "writedelay", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "writedelay");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "writedelay") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "writedelay", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "writedelay");
  },
};
