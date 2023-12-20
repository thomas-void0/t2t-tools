/**
 * 取出所有必须的key，
 * @example
 * 输入：
 * type Example = { foo?: string; bar: number }
 * type example = RequiredKeys<Example>
 * 输出；
 * type example = "bar"
 */
export type RequiredKeys<T> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]
