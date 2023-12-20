/**
 * 去除联合类型T中的undefined类型
 * @example
 * 输入：
 * type example = NonUndefined<'1' | '2' | '3' | undefined>
 * 输出：
 * type example = "1" | "2" | "3"
 */
export type NonUndefined<T> = T extends undefined ? never : T
