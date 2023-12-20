/**
 * 取出T中的属性，此属性同样存在于U
 * @example
 * 输入：
 * type Example1 = {
 *   name: string
 * }
 * type Example2 = {
 *   age: number
 *    name:string
 * }
 * type example = Intersection<Example1,Example2>
 * 输出：
 * type example = {
 *  name: string;
 * }
 */
export type Intersection<T, U> = Pick<T & U, keyof T & keyof U>
