/**
 * 将类型T拆解为联合类型
 * @example
 * 输入：
 * type Example = { a: string, b: number, c: boolean }
 * type example = Unionize<Example>
 * 输出：
 * type example = {
 *   a: string;
 * } | {
 *   b: number;
 * } | {
 *   c: boolean;
 * }
 */
export type Unionize<T> = {
	[K in keyof T]-?: { [O in K]: T[K] }
}[keyof T]
