/**
 * 获取联合类型T与联合类型U的交叉类型
 * @example
 * 输入：
 * type example = GetIntersection<"a" | "b" | "23","a">
 * 输出：
 * type example = "a"
 */
export type GetIntersection<T, U> = T extends U ? T : never
