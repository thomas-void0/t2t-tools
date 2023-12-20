import { NonUndefined } from './nonUndefined'

/**
 * 取出没有包含函数类型的参数组成一个新类型
 * @example
 * 输入：
 * type Example = {
 *  name: string | undefined;
 *  setName: (...args: any) => any | undefined;
 *  someKeys?: string;
 *  someFn?: (...args: any) => any;
 * };
 * type example2 = NonFunction<Example>;
 * 输出：
 * type example2 = {
 *  name: string | undefined;
 *  someKeys?: string | undefined;
 * }
 */
export type NonFunction<T extends object> = Pick<
	T,
	{
		[K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K
	}[keyof T]
>
