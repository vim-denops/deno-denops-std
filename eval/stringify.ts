import { isArray } from "@core/unknownutil/is/array";
import { isBoolean } from "@core/unknownutil/is/boolean";
import { isFunction } from "@core/unknownutil/is/function";
import { isInstanceOf } from "@core/unknownutil/is/instance-of";
import { isNullish } from "@core/unknownutil/is/nullish";
import { isNumber } from "@core/unknownutil/is/number";
import { isRecord } from "@core/unknownutil/is/record";
import { isString } from "@core/unknownutil/is/string";
import { isSymbol } from "@core/unknownutil/is/symbol";
import { isUndefined } from "@core/unknownutil/is/undefined";
import { isExprString } from "../helper/expr_string.ts";
import {
  isVimEvaluatable,
  type VimEvaluatable,
  vimExpressionOf,
} from "./vim_evaluatable.ts";

// Note: Imports only types and is used only in tsdoc.
// deno-lint-ignore no-unused-vars
import type { Expression } from "./expression.ts";
// deno-lint-ignore no-unused-vars
import type { RawString } from "./string.ts";

/**
 * Converts a JavaScript value to a string that can be parsed with Vim `eval()`.
 *
 * JavaScript values and their conversion results:
 * | `value` type       | result                          |
 * | ------------------ | ------------------------------- |
 * | `string`           | 'string'                        |
 * | `number`           | 123 or 123.123456 or 1.123456e8 |
 * | `Infinity`         | (1.0/0)                         |
 * | `-Infinity`        | (-1.0/0)                        |
 * | `NaN`              | (0.0/0)                         |
 * | `bigint`           | * throws `TypeError` *          |
 * | `undefined`        | v:null                          |
 * | `null`             | v:null                          |
 * | `Function`         | v:null                          |
 * | `Symbol`           | v:null                          |
 * | `Array`            | [item,item]                     |
 * | `Object`           | {key:value,key:value}           |
 * | `ArrayBuffer`      | 0z00112233445566778899          |
 * | `Expression`       | 42 + 123                        |
 * | `RawString`        | "\<Cmd>echo 'hello'\<CR>"       |
 *
 * - `Boolean`, `Number`, `String`, and `BigInt` (obtainable via `Object()`) objects are converted to the corresponding primitive values. `Symbol` objects (obtainable via `Object()`) are treated as plain objects.
 * - `undefined`, `Function`, and `Symbol` values are either omitted (when found in an object) or changed to null (when found in an array or a single value).
 * - `Infinity` and `NaN` numbers are converted to the corresponding Vim formula. Note that if they are included in the value returned from Vim, they will be converted to `null`.
 * - The special {@linkcode Expression} or {@linkcode RawString} objects are serialized to Vim's expression.
 * - If `Object` has a `toJSON()` method, it will be invoked and the result will be serialized again. But if the return value of `toJSON()` has a `toJSON()` method, it will **NOT** be invoked again.
 *
 * When a `Array` or `Object` has a circular reference, a `TypeError` will be thrown.
 *
 * ```typescript
 * import type { Denops } from "jsr:@denops/std";
 * import { expr, stringify } from "jsr:@denops/std/eval";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   const value = {
 *     cword: expr`expand('<cword>')`,
 *     lines: ["foo", "bar"],
 *   };
 *   await denops.cmd('echo eval(expr)', { expr: stringify(value) });
 * }
 * ```
 *
 * @throws {TypeError} If the value contains a circular reference or a `bigint`.
 */
export function stringify(value: unknown): string {
  const ref = new WeakSet();
  const addRef = (value: unknown[] | Record<PropertyKey, unknown>) => {
    if (ref.has(value)) {
      throw new TypeError("Converting circular structure to Vim dict");
    }
    ref.add(value);
  };
  const reduce = (value: unknown, key: string | number): string => {
    if (isVimEvaluatable(value)) {
      return toVimExpression(value);
    }
    if (isExprString(value)) {
      return `"${value.replaceAll('"', '\\"')}"`;
    }
    if (isJsonable(value)) {
      value = value.toJSON(key);
      if (isVimEvaluatable(value)) {
        return toVimExpression(value);
      }
      if (isExprString(value)) {
        return `"${value.replaceAll('"', '\\"')}"`;
      }
    }
    if (isNullish(value) || isFunction(value) || isSymbol(value)) {
      return "v:null";
    }
    if (isBoolean(value) || isInstanceOfBoolean(value)) {
      // v:true or v:false
      return `v:${value}`;
    }
    if (isNumber(value) || isInstanceOfNumber(value)) {
      // Replace `5e-10` to `5.0e-10`
      return `${value}`.replace(/^(\d+)e/, "$1.0e");
    }
    if (isString(value) || isInstanceOfString(value)) {
      // Vim literal-string
      return `'${value.replaceAll("'", "''")}'`;
    }
    if (value instanceof ArrayBuffer) {
      // Vim blob
      return toBlobLiteral(value);
    }
    if (isArray(value)) {
      // Vim list
      addRef(value);
      const res = `[${value.map(reduce).join(",")}]`;
      ref.delete(value);
      return res;
    }
    if (isRecord(value)) {
      // Vim dict
      addRef(value);
      const res = `{${
        Object.entries(value)
          .filter(([, value]) => !isIgnoreRecordValue(value))
          .map(([key, value]) =>
            `'${key.replaceAll("'", "''")}':${reduce(value, key)}`
          )
          .join(",")
      }}`;
      ref.delete(value);
      return res;
    }
    const type = Object.prototype.toString.call(value).slice(8, -1);
    throw new TypeError(`${type} value can't be serialized`);
  };
  return reduce(value, "");
}

type Jsonable = {
  /**
   * Returns a JSON value that can be specified to {@linkcode JSON.stringify}.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior|toJSON() behavior}
   */
  toJSON(key: string | number): unknown;
};

function isJsonable(x: unknown): x is Jsonable {
  return x != null && isFunction((x as Jsonable).toJSON);
}

function isIgnoreRecordValue(x: unknown): boolean {
  return isUndefined(x) || isFunction(x) || isSymbol(x);
}

const isInstanceOfBoolean = isInstanceOf(Boolean);
const isInstanceOfNumber = isInstanceOf(Number);
const isInstanceOfString = isInstanceOf(String);

function toVimExpression(expr: VimEvaluatable): string {
  const s = expr[vimExpressionOf]();
  if (!isString(s)) {
    throw new TypeError("@@vimExpressionOf() returns not a string");
  }
  return s;
}

/** Cache of hex strings: 00 01 ... fe ff */
let hex: string[];

function toBlobLiteral(buffer: ArrayBuffer): string {
  hex ??= Array.from(
    { length: 256 },
    (_, i) => i.toString(16).padStart(2, "0"),
  );
  const array = new Uint8Array(buffer);
  const { length } = array;
  let res = "0z";
  for (let i = 0; i < length; ++i) {
    res += hex[array[i]];
  }
  return res;
}
