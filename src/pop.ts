/**
 * 删除元祖中的最后一个类型
 * @example
 * 输入：
 * type Example = [1, 2, 3]
 * type example = Pop<Example>
 * 输出：
 * type example = [1, 2]
 */
export type Pop<T extends unknown[]> = T extends [...infer Rest, infer R] ? [...Rest] : never
