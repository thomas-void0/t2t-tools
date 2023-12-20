/**
 * 判断2个类型是否相等
 * @example
 * 输入：
 * type example = Equals<{a:number},{readonly a:number},true,false>
 * 输出：
 * type example = false
 */
export type Equals<A, B, X = A, Y = never> = (<T>() => T extends A ? 1 : 2) extends <
	T
>() => T extends B ? 1 : 2
	? X
	: Y
