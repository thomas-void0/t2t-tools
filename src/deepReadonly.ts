import { Primitive } from './primitive'
/**
 * 深度设置readonly
 * @example
 * 输入：
 *  type Example = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 * type example = DeepReadonly<Example>
 * 输出：
 *   type example = {
 *      readonly first: {
 *        readonly second: {
 *          readonly name: string;
 *        };
 *      };
 *    }
 */
//DeepReadonly
export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
	? T
	: T extends DeepReadonlyArray<infer U>
		? DeepReadonlyArray<U>
		: T extends DeepReadonlyObject<infer V>
			? DeepReadonlyObject<V>
			: T

//是否能够满足深度数组
export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

//是否能够满足深度对象
export type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>
}
