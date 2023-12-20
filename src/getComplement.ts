/**
 * 获取联合类型T与其子类型中不同的部分
 * @example
 * 输入：
 * type example = GetComplement<"a" | "b" | "23","a">
 * 输出：
 * type example = "b" | "23"
 */
export type GetComplement<T, T1 extends T> = T extends T1 ? never : T
