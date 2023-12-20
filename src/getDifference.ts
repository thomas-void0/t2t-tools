/**
 * 获取联合类型T与联合类型U不同的类型
 * @example
 * 输入：
 * type example = GetDifference<"a" | "b" | "23","a">
 * 输出：
 * type example = "b" | "23"
 */
export type GetDifference<T, U> = T extends U ? never : T
