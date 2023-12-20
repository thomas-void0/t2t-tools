import { _NonUndefined } from "../baseType";
/**
 * 全部设置为必须
 * @example
 * 输入：
 *   type Example = {
 *     first?: {
 *       second?: {
 *         name?: string;
 *       };
 *     };
 *   };
 * type example = _DeepRequired<NestedProps>;
 * 输出：
 * type example = {
 *     first?: {
 *       second?: {
 *         name?: string;
 *       };
 *     };
 *   };
 */

export type _DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepRequiredArray<T[number]>
  : T extends object
  ? _DeepRequiredObject<T>
  : T;

//如果为数组，则执行
export interface _DeepRequiredArray<T>
  extends Array<_DeepRequired<_NonUndefined<T>>> {}

//如果为对象，则执行
export type _DeepRequiredObject<T> = {
  [P in keyof T]-?: _DeepRequired<_NonUndefined<T[P]>>;
};
