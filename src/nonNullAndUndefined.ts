/**
 * 去除联合类型T中的undefined和null类型
 * @example
 * 输入：
 * type example = NonNullAndUndefined<'1' | '2' | '3' | undefined ｜ null>
 * 输出：
 * type example = "1" | "2" | "3"
 */
export type NonNullAndUndefined<T> = T extends undefined | null ? never : T
