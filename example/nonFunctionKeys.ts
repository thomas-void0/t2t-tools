import { _NonUndefined, _Pick } from "../src/my-type";
/**
 * 例一、取出没有包含函数类型的参数的联合类型
 * @example
 * 输入：
 * type Example = {
 *  name: string | undefined;
 *  setName: (...args: any) => any | undefined;
 *  someKeys?: string;
 *  someFn?: (...args: any) => any;
 * };
 * type example = _NonFunctionKeys<Example>;
 * 输出：
 * type example = "name" | "someKeys"
 */
export type _NonFunctionKeys<T extends object> = {
  [K in keyof T]-?: _NonUndefined<T[K]> extends Function ? never : K;
}[keyof T];
type Example = {
  name: string | undefined;
  setName: (...args: any) => any | undefined;
  someKeys?: string;
  someFn?: (...args: any) => any;
};
type example = _NonFunctionKeys<Example>;

/**
 * 例二、取出没有包含函数类型的参数组成一个新类型
 * @example
 * 输入：
 * type Example = {
 *  name: string | undefined;
 *  setName: (...args: any) => any | undefined;
 *  someKeys?: string;
 *  someFn?: (...args: any) => any;
 * };
 * type example2 = _NonFunction<Example>;
 * 输出：
 * type example2 = {
 *  name: string | undefined;
 *  someKeys?: string | undefined;
 * }
 */
export type _NonFunction<T extends object> = _Pick<
  T,
  {
    [K in keyof T]-?: _NonUndefined<T[K]> extends Function ? never : K;
  }[keyof T]
>;
type example2 = _NonFunction<Example>;
