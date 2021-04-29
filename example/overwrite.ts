import { _Omit, _Pick } from "../baseType";

/**
 * 用类型U中属性覆盖类型T中的同名属性
 * @example
 * 输入：
 * type A = { age: number; name: string;  visible: boolean };
 * type B = { age: string; other: string };
 * type C = _OverWrite<A,B>
 * 输出：
 * type C = {
 *  age: string;
 *  name: string;
 *  visible: boolean;
 *}
 */
export type _OverWrite<
  A,
  B,
  I = _Omit<A, keyof A & keyof B> & _Pick<B, keyof A & keyof B>
> = _Pick<I, keyof I>;

type A = { age: number; name: string; visible: boolean };
type B = { age: string; other: string };

//解析
//1，获取B类型与A类型的属性的交叉类型
type KA = keyof A;
type KB = keyof B;
type IntersectionKey = KA & KB;
//2，取出B类型中的IntersectionKey
type B2 = _Pick<B, IntersectionKey>;
//3. 从A类型中排除IntersectionKey
type A2 = _Omit<A, IntersectionKey>;
//4. 获取新类型
type C = _Pick<A2 & B2, keyof A>;
