import { _Primitive } from "../baseType";
/**
 * 要求：
 * 输入：
 *  type Example = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 * type example = _DeepReadonly<Example>
 * 输出：
 *   type example = {
 *      readonly first: {
 *        readonly second: {
 *          readonly name: string;
 *        };
 *      };
 *    }
 */
//_DeepReadonly
export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends _DeepReadonlyArray<infer U>
  ? _DeepReadonlyArray<U>
  : T extends _DeepReadonlyObject<infer V>
  ? _DeepReadonlyObject<V>
  : T;
/** @private */
// tslint:disable-next-line:class-name
export interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}
/** @private */
export type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
