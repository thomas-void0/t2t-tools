import { Equals } from './equals'

/**
 * 获取readonly的类型
 * @example
 * 输入：
 * type Example = { readonly foo: string; bar: number };
 * type example = ReadonlyKeys<Example>
 * 输出：
 * type example = {
 *   readonly foo: string;
 *}
 */
export type ReadonlyKeys<T> = Pick<
	T,
	{
		[K in keyof T]: Equals<{ [O in K]: T[K] }, { -readonly [O in K]: T[K] }, never, K>
	}[keyof T]
>
