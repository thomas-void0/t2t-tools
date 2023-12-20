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
 * type C = Merge<A,B>
 * 输出：
 * type C = { a: number; b: number; c: boolean };
 */
export type Merge<T, U, X = Pick<T, Exclude<keyof T, keyof T & keyof U>>> = Pick<
	U & X,
	keyof U | keyof X
>
