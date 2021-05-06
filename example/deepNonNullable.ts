import { _NonNullable } from "../baseType";
/**
 * 深度去除null和undefined
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
 *     first?: null | {
 *       second?: null | {
 *         name?: string | null |
 *         undefined;
 *       };
 *    };
 */
export type _DeepNonNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepNonNullableArray<T[number]>
  : T extends object
  ? _DeepNonNullableObject<T>
  : T;

//如果属于数组
export interface _DeepNonNullableArray<T>
  extends Array<_DeepNonNullable<_NonNullable<T>>> {}

//如果属于对象
export type _DeepNonNullableObject<T> = {
  [P in keyof T]-?: _DeepNonNullable<_NonNullable<T[P]>>;
};
