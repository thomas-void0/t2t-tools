/**
 * 联合类型转交叉类型
 * @see https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type/50375286#50375286
 * @see https://github.com/Microsoft/TypeScript/pull/21496
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
 * @example
 * 输入：
 * type example = _UnionToIntersection<{ name: string } | { age: number } | { visible: boolean }>
 * 输出：
 * type example = { name: string } & { age: number } & { visible: boolean }
 */
export type _UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

//这里涉及到了两个重要的知识点：
//1，分布式条件类型
//2，条件类型中的类型推断

//1，根据分布式条件类型的特点，表达式拆分如下：
type Example = { name: string } | { age: number } | { visible: boolean };
type ConditionType<T> = T extends any ? T : any;
type C = ConditionType<Example>;
//实际上C会被推导为：
// { name: string } extends any ? { name: string } : any |
// { age: number } extends any ? { age: number } : any |
// { visible: boolean } extends any ? { visible: boolean } : any

//2. 根据条件类型中的类型推断特性：多个推断的情况下：协变位置推导为并集 ，逆变位置推导为交集
//2.1 逆变
type ConditionType2<T> = {
  [K in keyof T]: T[K] extends (a: infer P, b: infer P) => any ? P : any;
}[keyof T];
type C2 = ConditionType2<{
  a: (a: string, b: number) => void;
}>;
// C2 ==> string & number ==> never
// 2.2 协变
type ConditionType3<T> = {
  [K in keyof T]: T[K] extends () => infer P ? P : any;
}[keyof T];
type C3 = ConditionType3<{
  a: () => string;
  b: () => number;
}>;
//C3 ==> string | number

//根据上述流程进行实现：
//引用逆变表达式(arg:infer P)=>void,类似于下面表达式的意思：
//根据分布式：左边的条件会变为：
// { name: string } extends any ? (arg: string) => void : never |
// { age: number } extends any ? (arg: number) => void : never |
// { visible: boolean } extends any ? (arg: boolean) => void : never

//实现如下：
type ConditionType5<T> = (T extends any ? (arg: T) => void : never) extends (
  arg: infer I
) => void
  ? I
  : never;
type C5 = ConditionType5<Example>;
