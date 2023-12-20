/**
 * 通过属性值的类型来排除属性
 * @example
 * 输入：
 * type Example = {a:string,b:number,c:string}
 * type example = OmitByValue<Example, string>
 * 输出：
 * type example = {
 *  b: number;
 * }
 */
export type OmitByValue<T, ValueType> = Pick<
	T,
	{
		[K in keyof T]: T[K] extends ValueType ? never : K
	}[keyof T]
>
