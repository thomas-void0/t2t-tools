/**
 * 取出所有可选的key
 * @example
 * 输入：
 * type Example = { foo?: string; bar: number }
 * type example = OptionalKeys<Example>
 * 输出；
 * type example = "foo"
 */
export type OptionalKeys<T> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]
