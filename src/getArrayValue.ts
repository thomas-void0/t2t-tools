/**
 * 获取数组的元素类型
 * @example
 * 输入：
 * type example = GetArrayValue<string[]>
 * 输出：
 * type example = string
 */
export type GetArrayValue<T extends Array<any>> = T extends Array<infer P> ? P : never
