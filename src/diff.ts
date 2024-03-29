/**
 * 找出T类型中，与U类型不相同的属性
 * @example
 * 输入：
 * type A = { name: string; age: number; visible: boolean };
 * type B = { age: number };
 * type C = Diff<A, B>;
 * 输出：
 * type C = {
 *  name: string;
 *  visible: boolean;
 * }
 */
export type Diff<T extends object, U extends object> = Omit<T, keyof T & keyof U>
