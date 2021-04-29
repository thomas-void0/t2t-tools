import { _Pick } from "../baseType";
/**
 * 取出所有可选的key
 * @example
 * 输入：
 * type Example = { foo?: string; bar: number }
 * type example = _OptionalKeys<Example>
 * 输出；
 * type example = "foo"
 */
export type _OptionalKeys<T> = {
  [K in keyof T]-?: {} extends _Pick<T, K> ? K : never;
}[keyof T];
type Example = { foo?: string; bar: number };
type example = _OptionalKeys<Example>;
