import { Diff } from './diff'

/**
 * 获取子集中的差异
 * @example
 * 输入：
 * type A = { name: string; age: number; visible: boolean };
 * type B = { age: number };
 * type C = Subtract<A, B>;
 * 输出：
 * type C = {
 *  name: string;
 *  visible: boolean;
 * }
 */
export type Subtract<T extends T1, T1 extends object> = Diff<T, T1>
