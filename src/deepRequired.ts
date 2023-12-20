import { NonUndefined } from './nonUndefined'

/**
 * 全部设置为必须
 * @example
 * 输入：
 *   type Example = {
 *     first?: {
 *       second?: {
 *         name?: string;
 *       };
 *     };
 *   };
 * type example = DeepRequired<NestedProps>;
 * 输出：
 * type example = {
 *     first?: {
 *       second?: {
 *         name?: string;
 *       };
 *     };
 *   };
 */

export type DeepRequired<T> = T extends (...args: any[]) => any
	? T
	: T extends any[]
		? DeepRequiredArray<T[number]>
		: T extends object
			? DeepRequiredObject<T>
			: T

//如果为数组，则执行
export interface DeepRequiredArray<T> extends Array<DeepRequired<NonUndefined<T>>> {}

//如果为对象，则执行
export type DeepRequiredObject<T> = {
	[P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>
}
