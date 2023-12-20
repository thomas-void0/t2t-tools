/**
 * 深度设置为可选
 * @example
 * 输入：
 *   type Example = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type example = DeepPartial<NestedProps>;
 * 输出：
 *  type example = {
 *   first?:{
 *      second?:{
 *          name?:string
 *      }
 *   }
 * }
 */
export type DeepPartial<T> = T extends Function
	? T
	: T extends Array<infer U>
		? DeepPartialArray<U>
		: T extends object
			? DeepPartialObject<T>
			: T | undefined

//如果是数组
export interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

//如果是对象
export type DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> }
