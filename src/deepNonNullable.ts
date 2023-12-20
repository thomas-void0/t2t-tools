/**
 * 深度去除null和undefined
 * @example
 * 输入：
 *  type Example = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 * type example = DeepNonNullable<Example>
 * 输出：
 *   type example = {
 *     first?: null | {
 *       second?: null | {
 *         name?: string | null |
 *         undefined;
 *       };
 *    };
 */
export type DeepNonNullable<T> = T extends (...args: any[]) => any
	? T
	: T extends any[]
		? DeepNonNullableArray<T[number]>
		: T extends object
			? DeepNonNullableObject<T>
			: T

//如果属于数组
export interface DeepNonNullableArray<T> extends Array<DeepNonNullable<NonNullable<T>>> {}

//如果属于对象
export type DeepNonNullableObject<T> = {
	[P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>
}
