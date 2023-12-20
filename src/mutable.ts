/**
 * 去除readonly属性
 * @example
 * 输入：
 * type Example = {
 *    a:string
 * }
 * type example = Mutable<Example>
 * 输出：
 * type example = {
 * a: string;
 * }
 */
export type Mutable<T> = {
	-readonly [P in keyof T]: T[P]
}
