/**
 * 删除元祖中的第一个类型
 * @example
 * 输入：
 * type Example = [1, 2, 3]
 * type example = Shift<Example>
 * 输出：
 * type example = [2，3]
 */
export type Shift<T extends unknown[]> = T extends [infer R, ...infer Rest] ? [...Rest] : never
