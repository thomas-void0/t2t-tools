import { _Primitive } from "../baseType";
/**
 * 深度设置readonly
 * @example
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
export type _DeepReadonly<T> = T extends ((...args: any[]) => any) | _Primitive
  ? T
  : T extends _DeepReadonlyArray<infer U>
  ? _DeepReadonlyArray<U>
  : T extends _DeepReadonlyObject<infer V>
  ? _DeepReadonlyObject<V>
  : T;

//是否能够满足深度数组
export interface _DeepReadonlyArray<T>
  extends ReadonlyArray<_DeepReadonly<T>> {}

//是否能够满足深度对象
export type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: _DeepReadonly<T[P]>;
};
