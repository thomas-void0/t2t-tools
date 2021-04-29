import { _Pick } from "../baseType";

/**
 * 要求
 * 输入：
 * type Example = { foo?: string; bar: number }
 * type example = _RequiredKeys<Example>
 * 输出；
 * type example = "bar"
 */

//重点是如何判断是否是可选的key。{}可以赋值给可选属性的类型如下所示，但是不能赋值给必须的属性类型
type example1 = {} extends { a?: string } ? 1 : 2; // 1
type example2 = {} extends { a: string } ? 1 : 2; // 2

//所以实现如下：
/**
 * 取出所有必须的key，
 * @example
 * 输入：
 * type Example = { foo?: string; bar: number }
 * type example = _RequiredKeys<Example>
 * 输出；
 * type example = "bar"
 */
export type _RequiredKeys<T> = {
  [K in keyof T]-?: {} extends _Pick<T, K> ? never : K;
}[keyof T];
type Example = { foo?: string; bar: number };
type example = _RequiredKeys<Example>;
