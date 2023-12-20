/**
 * 用类型U中属性覆盖类型T中的同名属性
 * @example
 * 输入：
 * type A = { age: number; name: string;  visible: boolean };
 * type B = { age: string; other: string };
 * type C = OverWrite<A,B>
 * 输出：
 * type C = {
 *  age: string;
 *  name: string;
 *  visible: boolean;
 *}
 */
export type OverWrite<A, B, I = Omit<A, keyof A & keyof B> & Pick<B, keyof A & keyof B>> = Pick<
	I,
	keyof I
>
