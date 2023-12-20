/**
 * 通过类型值获取类型
 * @example
 * 输入：
 * type Example = {a:string,b:number,c:string}
 * type example = PickByValue<Example,string>
 * 输出：
 * type example = {
 *  a: string;
 *  c: string;
 * }
 */
export type PickByValue<T, ValueType> = Pick<
	T,
	{
		[K in keyof T]: T[K] extends ValueType ? K : never
	}[keyof T]
>
