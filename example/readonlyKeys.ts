import { _IfEquals, _Pick } from "../src/my-type";
/**
 * 获取readonly的类型
 * @example
 * 输入：
 * type Example = { readonly foo: string; bar: number };
 * type example = _Readonly<Example>
 * 输出：
 * type example = {
 *   readonly foo: string;
 *}
 */
type _Readonly<T> = _Pick<
  T,
  {
    [K in keyof T]: _IfEquals<
      { [O in K]: T[K] },
      { -readonly [O in K]: T[K] },
      never,
      K
    >;
  }[keyof T]
>;
type Example = { readonly foo: string; bar: number };
type example = _Readonly<Example>;
