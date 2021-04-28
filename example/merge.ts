import { _Pick, _Exclude } from "../src/my-type";
/**
 * 合并类型T与类型U
 * @example
 * 输入：
 * type A = {
 * a: string;
 * b: number;
 *};
 *type B = {
 *  a: number;
 *  c: boolean;
 *};
 * type C = _Merge<A,B>
 * 输出：
 * type C = { a: string; b: number; c: boolean };
 */
type A = {
  a: string;
  b: number;
};
type B = {
  a: number;
  c: boolean;
};
//分步解题：
//1，获取到新key的联合类型
type KA = keyof A;
type KB = keyof B;
type Key = KA | KB;
//2，获取到A，B的联合类型，为了避免A，B类型中的同名不同属性值类型的属性影响。所以对B类型先进行处理
//2.1 排除B类型中与A类型同名的属性
type IntersectionKey = KA & KB; //获取A，B类型中相交的key
type ExcludeKey = _Exclude<KB, IntersectionKey>; //获取到B中需要的key
//2.2 根据需要的key，获取到B中对应的类型
type _B = _Pick<B, ExcludeKey>;
//3 合并A和_B得到新的类型
type _AB = A & _B;
//4 根据_AB和Key挑选出最终的C
type C = _Pick<_AB, Key>;
/**
 * type C = {
    a: string;
    c: boolean;
    b: number;
}
 */
//根据上述特性，合并成一个类型工具
type _Merge<T, U, X = _Pick<U, _Exclude<keyof U, keyof T & keyof U>>> = _Pick<
  T & X,
  keyof T | keyof X
>;
type C1 = _Merge<A, B>;
/**
 * type C1 = {
    a: string;
    c: boolean;
    b: number;
}
 */
