import { GetDifference } from './getDifference'

/**
 * 获取T类型中与U类型两者中不同的部分
 * SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'> Expect: "1" | "4"
 * @example
 * 输入：
 * type example = SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>
 * 输出：
 * type example = '1' | '4'
 */
export type SymmetricDifference<T, U> = GetDifference<T | U, T & U>
