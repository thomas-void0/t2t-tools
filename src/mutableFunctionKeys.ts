import { NonUndefined } from './nonUndefined'

/**
 * 获取一个类型中，属性为可选同时属性值的类型为函数的key
 * @example
 * 输入：
 * type Example = {
 *  name: string;
 *  setName: (...args: any) => any | undefined;
 *  someKeys?: string;
 *  someFn?: (...args: any) => any;
 * };
 * type example = MutableFunctionKeys<Example>
 * 输出：
 * type example = "someFn"
 */
export type MutableFunctionKeys<T extends object> = {
	[K in keyof T]-?: undefined extends T[K]
		? NonUndefined<T[K]> extends Function
			? K
			: never
		: never
}[keyof T]
