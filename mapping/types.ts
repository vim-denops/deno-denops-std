export type Mode =
  | "" // Normal, Visual, Select and Operator-pending
  | "n" // Normal
  | "i" // Insert
  | "c" // Command-line
  | "v" // Visual and Select
  | "x" // Visual
  | "s" // Select
  | "o" // Operator-pending
  | "t" // Terminal-Job
  | "l" // ":lmap" mappings for Insert, Command-line and Lang-Arg
  // See https://github.com/vim-denops/deno-denops-std/issues/152 for detail
  | "ov"
  | "nv"
  | "no"
  | "os"
  | "ns"
  | "ox"
  | "nx"
  | "nox"
  | "nos";

export interface Mapping {
  /**
   * Modes for which the mapping is defined
   */
  mode: Mode;
  /**
   * The {lhs} of the mapping
   */
  lhs: string;
  /**
   * The {rhs} of the mapping as typed
   */
  rhs: string;
  /**
   * True if the {rhs} of the mapping is not remappable
   */
  noremap: boolean;
  /**
   * True if mapping was defined with <script>
   */
  script: boolean;
  /**
   * True for a buffer local mapping
   */
  buffer: boolean;

  /**
   * The script local ID, used for <sid> mappings
   * This attribute is missing if the Mapping is returned from `list()`
   */
  sid?: number;
  /**
   * The line number in "sid", zero if unknown
   * This attribute is missing if the Mapping is returned from `list()`
   */
  lnum?: number;
  /**
   * True for an expression mapping
   * This attribute is missing if the Mapping is returned from `list()`
   */
  expr?: boolean;
  /**
   * Do not wait for other, longer mappings
   * This attribute is missing if the Mapping is returned from `list()`
   */
  nowait?: boolean;
  /**
   * True for a :map-silent mapping, else False
   * This attribute is missing if the Mapping is returned from `list()`
   */
  silent?: boolean;
}
