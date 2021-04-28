import { _Pick } from "../src/my-type";
/**
 * 返回非readonly的类型
 * @example
 * 输入：
 * type Example = { readonly foo: string; bar: number };
 * type example = _MutableKeys<Example>
 * 输出：
 * type example = { bar:number }
 */

//这里的难点在于，如何知道一个类型是readonly。
// 这里需要利用的是：在一个值没有被决策时，只有它们的表达式都相等才能认为它们相等：eg.
// type X = A;type Y = never
//(<T>() => T extends A ? 1 : 2) extends
//(<T>()=>T extends B ? 1 : 2 ) ? X : Y

//所以如下写一个类型工具，可以判断A，B两个类型是否相等
export type _IfEquals<A, B, X = A, Y = never> = (<T>() => T extends A
  ? 1
  : 2) extends <T>() => T extends B ? 1 : 2
  ? X
  : Y;
//测试这个相等的工具
type testReadonly = _IfEquals<{ readonly a: string }, { a: string }>; //never
type testMutable = _IfEquals<{ a: string }, { a: string }, true>; //true

//有了以上的成果后，再求解之前的问题。返回非readonly的类型
type _MutableKeys<T> = _Pick<
  T,
  {
    [K in keyof T]: _IfEquals<
      { [O in K]: T[K] },
      { -readonly [O in K]: T[K] },
      K
    >;
  }[keyof T]
>;
type Example = { readonly foo: string; bar: number };
type example = _MutableKeys<Example>;
/**
 type example = {
    bar: number;
}
 */
