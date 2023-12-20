import { _Pick, _Exclude, _Omit } from "../baseType";

/**
 * 要求：
 * 输入：
 * type A = { name: string; age: number; visible: boolean };
 * type B = { age: number };
 * type C = _Diff<A, B>;
 * 输出：
 * type C = {
 *  name: string;
 *  visible: boolean;
 */

//重点是要找到需要取的key值，
type A = { name: string; age: number; visible: boolean };
type B = { age: number };
//1,获取到A，B类型中相同的属性
type KAB = keyof A & keyof B;
//2,排除KAB
type KA = keyof A;
type Key = _Exclude<KA, KAB>;
//3.获取新的C
type C = _Pick<A, Key>;

//根据以上步骤，书写类型工具
/**
 * 找出T类型中，与U类型不相同的属性
 * @example
 * 输入：
 * type A = { name: string; age: number; visible: boolean };
 * type B = { age: number };
 * type C = _Diff<A, B>;
 * 输出：
 * type C = {
 *  name: string;
 *  visible: boolean;
 * }
 */
export type _Diff<T extends object, U extends object> = _Omit<
  T,
  keyof T & keyof U
>;

/**
 * 获取子集中的差异
 * @example
 * 输入：
 * type A = { name: string; age: number; visible: boolean };
 * type B = { age: number };
 * type C = _Subtract<A, B>;
 * 输出：
 * type C = {
 *  name: string;
 *  visible: boolean;
 * }
 */
export type _Subtract<T extends T1, T1 extends object> = _Diff<T, T1>;
