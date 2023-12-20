/**
 * 通过属性值的类型来精确排除属性
 * @example
 * 输入：
 * type Example = {a:string,b:number,c:string | undefined}
 * type example = OmitByValueExact<Example, string | undefined>
 * 输出：
 * type example = {
 *  a: string;
 *  b: number;
 * }
 */
export type OmitByValueExact<T, ValueType> = Pick<
	T,
	{
		[K in keyof T]: [T[K]] extends [ValueType] ? ([ValueType] extends [T[K]] ? never : K) : K
	}[keyof T]
>
