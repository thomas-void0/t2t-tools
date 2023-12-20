/**
 * 获取Promise的resolve的值类型
 * @example
 * 输入：
 * type Example = Promise<string>
 * type example = PromiseType<Example>
 * 输出：
 * type example = string
 */
export type PromiseType<T extends Promise<any>> = T extends Promise<infer P> ? P : never
