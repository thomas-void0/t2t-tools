import { _Pick, _Exclude, _Omit } from "../baseType";
/**
 * 找出T类型中，与U类型不相同的属性
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
export type _Diff<T extends object, U extends object> = _Omit<
  T,
  keyof T & keyof U
>;
