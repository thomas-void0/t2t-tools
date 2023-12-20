/**
 * 从联合类型T中排除null类型
 * @example
 * 输入：
 * type example = NonNullable<"a" | number | null,"c">
 * 输出：
 * type example = number | "a"
 */
export type NonNullable<T> = T extends null ? never : T
