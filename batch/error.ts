import type { Call } from "@denops/core";

/**
 * Options for creating an {@linkcode AccumulateCancelledError}.
 */
export interface AccumulateCancelledErrorOptions extends ErrorOptions {
  /**
   * Information about the cancelled Vim/Neovim function calls.
   */
  calls?: readonly Call[];
}

/**
 * Error thrown when a Vim/Neovim function call is cancelled due to another
 * error in a parallel execution within the same batch.
 *
 * This error occurs when multiple Vim/Neovim function calls are executed in
 * parallel using `Promise.all()` or similar constructs within an `accumulate()`
 * block, and one of the calls fails, causing the remaining calls in the same
 * batch to be cancelled.
 */
export class AccumulateCancelledError extends Error {
  static {
    this.prototype.name = "AccumulateCancelledError";
  }

  /**
   * Information about the cancelled Vim/Neovim function calls.
   */
  readonly calls?: readonly Call[];

  /**
   * Creates a new {@linkcode AccumulateCancelledError}.
   *
   * @param message - The error message describing why the call was cancelled.
   * @param options - Additional options for the error.
   */
  constructor(message?: string, options: AccumulateCancelledErrorOptions = {}) {
    const { calls, ...errorOptions } = options;
    super(message, errorOptions);
    this.calls = calls;
  }
}
