import { NonUndefined } from './nonUndefined'

/**
 * 取出没有包含函数类型的参数的联合类型
 * @example
 * 输入：
 * type Example = {
 *  name: string | undefined;
 *  setName: (...args: any) => any | undefined;
 *  someKeys?: string;
 *  someFn?: (...args: any) => any;
 * };
 * type example = NonFunctionKeys<Example>;
 * 输出：
 * type example = "name" | "someKeys"
 */
export type NonFunctionKeys<T extends object> = {
	[K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K
}[keyof T]
