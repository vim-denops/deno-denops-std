import type { Denops } from "../mod.ts";

/**
 * Represents a getter method for retrieving property value.
 */
export interface Getter {
  /**
   * Gets the value of the specified property, or default value if it doesn't exist.
   * @param prop - The name of the property.
   * @param defaultValue - The default value to be returned if the property doesn't exist.
   * @returns A promise that resolves to the value of the property.
   */
  get<T = unknown>(denops: Denops, prop: string, defaultValue?: T): Promise<T>;

  /**
   * Gets the value of the specified property, or null if it doesn't exist.
   * @param prop - The name of the property.
   * @returns A promise that resolves to the value of the property.
   */
  get<T = unknown>(denops: Denops, prop: string): Promise<T | null>;
}

/**
 * Represents a setter method for setting property value.
 */
export interface Setter {
  /**
   * Sets the value of the specified property.
   * @param prop - The name of the property.
   * @param value - The value to be set.
   * @returns A promise that resolves when the value has been set.
   */
  set<T = unknown>(denops: Denops, prop: string, value: T): Promise<void>;
}

/**
 * Represents a remover method for removing property value.
 */
export interface Remover {
  /**
   * Removes the value of the specified property or resets to its default value.
   * @param prop - The name of the property.
   * @returns A promise that resolves when the value has been removed or reset.
   */
  remove(denops: Denops, prop: string): Promise<void>;
}
