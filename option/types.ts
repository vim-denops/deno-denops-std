import type { Denops } from "../mod.ts";

/**
 * An option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export interface Option<T> {
  /**
   * Gets the value of the option.
   * @returns A Promise that resolves to the value of the option.
   */
  get(denops: Denops): Promise<T>;

  /**
   * Sets the value of the option.
   * @param value The new value of the option.
   * @returns A Promise that resolves when the option has been successfully set.
   */
  set(denops: Denops, value: T): Promise<void>;

  /**
   * Resets the value of the option to its default value.
   * @returns A Promise that resolves when the option has been successfully reset.
   */
  reset(denops: Denops): Promise<void>;
}

/**
 * A global option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export interface GlobalOption<T> extends Option<T> {
  /**
   * Gets the global value of the option.
   * @returns A Promise that resolves to the value of the option.
   */
  getGlobal(denops: Denops): Promise<T>;

  /**
   * Sets the global value of the option.
   * @param value The new value of the option.
   * @returns A Promise that resolves when the option has been successfully set.
   */
  setGlobal(denops: Denops, value: T): Promise<void>;

  /**
   * Resets the global value of the option to its default value.
   * @returns A Promise that resolves when the option has been successfully reset.
   */
  resetGlobal(denops: Denops): Promise<void>;
}

/**
 * A local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export interface LocalOption<T> extends Option<T> {
  /**
   * Gets the local value of the option.
   * @returns A Promise that resolves to the value of the option.
   */
  getLocal(denops: Denops): Promise<T>;

  /**
   * Sets the local value of the option.
   * @param value The new value of the option.
   * @returns A Promise that resolves when the option has been successfully set.
   */
  setLocal(denops: Denops, value: T): Promise<void>;

  /**
   * Resets the local value of the option to its default value.
   * @returns A Promise that resolves when the option has been successfully reset.
   */
  resetLocal(denops: Denops): Promise<void>;
}

/**
 * A buffer local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export interface BufferLocalOption<T> extends WindowLocalOption<T> {
  /**
   * Gets the value of the option for the specified buffer.
   * @param bufnr The buffer number.
   * @returns A Promise that resolves to the value of the option.
   */
  getBuffer(denops: Denops, bufnr: number): Promise<T>;

  /**
   * Sets the value of the option for the specified buffer.
   * @param bufnr The buffer number.
   * @param value The new value of the option.
   * @returns A Promise that resolves when the option has been successfully set.
   */
  setBuffer(denops: Denops, bufnr: number, value: T): Promise<void>;
}

/**
 * A tab page local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export interface TabPageLocalOption<T> extends LocalOption<T> {
  // NOTE: `getTabPage()` or `setTabPage()` is not implemented. See https://github.com/vim-denops/deno-denops-std/issues/268#issuecomment-2316587922
}

/**
 * A window local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export interface WindowLocalOption<T> extends LocalOption<T> {
  /**
   * Gets the value of the option for the specified window.
   * @param winnr The window number or `window-ID`.
   * @returns A Promise that resolves to the value of the option.
   */
  getWindow(denops: Denops, winnr: number): Promise<T>;

  /**
   * Sets the value of the option for the specified window.
   * @param winnr The window number or `window-ID`.
   * @param value The new value of the option.
   * @returns A Promise that resolves when the option has been successfully set.
   */
  setWindow(denops: Denops, winnr: number, value: T): Promise<void>;
}

/**
 * A global or buffer local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export type GlobalOrBufferLocalOption<T> =
  & GlobalOption<T>
  & BufferLocalOption<T>;

/**
 * A global or tab page local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export type GlobalOrTabPageLocalOption<T> =
  & GlobalOption<T>
  & TabPageLocalOption<T>;

/**
 * A global or window local option that can be retrieved and modified.
 * @template T The type of the option value.
 */
export type GlobalOrWindowLocalOption<T> =
  & GlobalOption<T>
  & WindowLocalOption<T>;
