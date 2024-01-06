/**
 * A module to provide helper functions to manage `autocmd`.
 *
 * @module
 */
export type {
  AutocmdEvent,
  DefineOptions,
  EmitOptions,
  ListOptions,
  RemoveOptions,
} from "./types.ts";

export { define, emit, emitAll, list, remove } from "./common.ts";

export type {
  GroupDefineOptions,
  GroupHelper,
  GroupRemoveOptions,
} from "./group.ts";
export { group } from "./group.ts";
