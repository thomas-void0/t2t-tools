import { Equals } from './Equals'

/**
 * 返回非readonly的类型
 * @example
 * 输入：
 * type Example = { readonly foo: string; bar: number };
 * type example = MutableKeys<Example>
 * 输出：
 * type example = { bar:number }
 */

export type MutableKeys<T> = Pick<
	T,
	{
		[K in keyof T]: Equals<{ [O in K]: T[K] }, { -readonly [O in K]: T[K] }, K>
	}[keyof T]
>
