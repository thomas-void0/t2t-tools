/**
 * 从联合类型T中获取与联合类型U相同的部分
 * @example
 * 输入：
 * type example = Extract<'a' | 'b' | 'c', 'a'>
 * 输出：
 * type example = "a"
 */
export type Extract<T, U> = T extends U ? T : never
