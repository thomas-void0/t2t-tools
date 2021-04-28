// 自定义TS工具类型
/**
 * 从类型T中获取一组，以联合类型K为基础的新类型
 * @example
 * 输入：
 * type Example = {a:number,b:string,c:boolean}
 * type example = _Pick<Example,"a"|"b">
 * 输出：
 * type example = {
 *   a: number;
 *   b: string;
 * }
 */
 type _Pick<T, K extends keyof T> = { [O in K]: T[O] }

 /**
  * 将T中所有的属性，转变为readonly
  * @example
  * 输入：
  * type Example = {a:number,b:string,c:boolean}
  * type example = _Readonly<Example>;
  * 输出：
  * type example = {
  *   readonly a: number;
  *   readonly b: string;
  *   readonly c: boolean;
  * }
  */
 type _Readonly<T> = { readonly [K in keyof T]: T[K] }
 
 /**
  * 将T中的所有属性变为可选
  * @example
  * 输入：
  * type Example = {a:number,b:string,c:boolean}
  * type example = _Partial<Example>;
  * 输出
  * type example = {
  *  a?: number | undefined;
  *  b?: string | undefined;
  *  c?: boolean | undefined;
  *}
  */
 type _Partial<T> = { [O in keyof T]?: T[O] }
 
 /**
  * 将T中的所有类型变为必选
  * @example
  * 输入：
  * type Example = {a:number,b:string,c?:boolean}
  * type example = _Required<Example>;
  * 输出：
  * type example = {
  *  a: number;
  *  b: string;
  *  c: boolean;
  *}
  */
 type _Required<T> = { [O in keyof T]-?: T[O] }
 
 /**
  * 返回以联合类型K为属性，以T为属性值类型的新类型
  * @example
  * 输入：
  * type key = "a" | "b"
  * type example = _Record<key,string>;
  * 输出：
  *type example = {
  *  a: string;
  *  b: string;
  *}
  */
 type _Record<K extends keyof any, T> = { [O in K]: T }
 
 /**
  * 从联合类型T中排除与联合类型U相同的部分
  * @example
  * 输入：
  * type example = _Exclude<'a' | 'b' | 'c', 'a'>
  * 输出：
  * type example = "b" | "c"
  */
 type _Exclude<T, U> = T extends U ? never : T
 
 /**
  * 从联合类型T中获取与联合类型U相同的部分
  * @example
  * 输入：
  * type example = _Extract<'a' | 'b' | 'c', 'a'>
  * 输出：
  * type example = "a"
  */
 type _Extract<T, U> = T extends U ? T : never
 
 /**
  * 从类型T中，排除联合类型U中的属性
  * @example
  * 输入：
  * type Example = {a:number,b:string,c?:boolean}
  * type example = _Omit<Example,"c">
  * 输出：
  * type example = {
  *   a: number;
  *   b: string;
  * }
  */
 type _Omit<T, U extends keyof any> = _Pick<T, _Exclude<keyof T, U>>
 
 /**
  * 从联合类型T中排除null类型
  * @example
  * 输入：
  * type example = _NonNullable<"a" | number | null,"c">
  * 输出：
  * type example = number | "a"
  */
 type _NonNullable<T> = T extends null ? never : T
 
 /**
  * 获取一个函数类型中，参数的元祖类型
  * @example
  * 输入：
  * type Example = (a:number,b:string,c?:boolean)=>null
  * type example = _Parameters<Example>
  * 输出：
  * type example = [a: number, b: string, c?: boolean | undefined]
  */
 type _Parameters<T extends (...arg: any) => any> = T extends (...arg: infer P) => any ? P : never
 
 /**
  * 获取函数类型中,返回值的类型
  * @example
  * 输入：
  * type Example = (a:number,b:string,c?:boolean)=>string
  * type example = _ReturnType<Example>
  * 输出：
  * type example = string
  */
 type _ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never
 
 /**
  * 获取一个构造函数的参数类型，返回一个元组
  * @example
  * 输入：
  * class Example{
  *  name: string
  *  age: number
  *  constructor(name: string, age: number) {
  *    this.name = name
  *    this.age = age
  *  }
  * }
  * type example = _ConstructorParameters<typeof Example>
  * 输出：
  * type example = [name: string, age: number]  
  */
 type _ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args:infer P)=>any ? P : never
 
 /**
  * 获取一个构造函数的实例的类型
  * @example
  * 输入：
  * class Example{
  *  name: string
  *  age: number
  *  constructor(name: string, age: number) {
  *    this.name = name
  *    this.age = age
  *  }
  * }
  * type example = _InstanceType<typeof Example>
  * 输出：
  * type example = Example
  */
 type _InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer P ? P : never
 
 /**
  * 将一个字面量类型转化为大写字面量类型
  * @example
  * 输入：
  * type Example = "a" | "b" | "c" | "2"
  * type example =_Uppercase<Example>
  * 输出：
  * type example = "2" | "A" | "B" | "C"
  */
 type _Uppercase<S extends string> = Uppercase<S>
 
 /**
  * 将一个字面量类型转化为小写字面量类型
  * @example
  * 输入：
  * type Example = "a" | "b" | "c" | "2"
  * type example =_Lowercase<Example>
  * 输出：
  * type example = "a" | "b" | "c" | "2"
  */
 type _Lowercase<S extends string> = Lowercase<S>
 
 /**
  * 将字面量类型的首字母变为大写
  * @example
  * 输入：
  * type Example = "abc" | "bcd" | "cdf" | "23"
  * type example = _Capitalize<Example>
  * 输出：
  * type example = "23" | "Abc" | "Bcd" | "Cdf"
  */
 type _Capitalize<S extends string> = Capitalize<S>
 
 /**
  * 将字面量类型的首字母变为小写
  * @example
  * 输入：
  * type Example = "ABC" | "BCD" | "CDF" | "23"
  * type example = _Uncapitalize<Example>
  * 输出：
  * type example = "23" | "aBC" | "bCD" | "cDF"
  */
 type _Uncapitalize<S extends string> = Uncapitalize<S>
 
 /**
  * 获取联合类型T与联合类型U的交叉类型
  * @example
  * 输入：
  * type example = _GetIntersection<"a" | "b" | "23","a">
  * 输出：
  * type example = "a"
  */
 type _GetIntersection<T, U> = T extends U ? T : never
 
 /**
  * 获取联合类型T与联合类型U不同的类型
  * @example
  * 输入：
  * type example = _GetDifference<"a" | "b" | "23","a">
  * 输出：
  * type example = "b" | "23"
  */
 type _GetDifference<T, U> = T extends U ? never : T
 
 /**
  * 获取联合类型T与其子类型中不同的部分
  * @example
  * 输入：
  * type example = _GetComplement<"a" | "b" | "23","a">
  * 输出：
  * type example = "b" | "23"
  */
 type _GetComplement<T, T1 extends T> = T extends T1 ? never : T
 
 /**
  * 获取T类型中与U类型两者中不同的部分
  * SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'> Expect: "1" | "4"
  * @example
  * 输入：
  * type example = _SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>
  * 输出：
  * type example = '1' | '4'
  */
type _SymmetricDifference<T, U> = _GetDifference<T | U, T & U>
 
/**
 * 去除联合类型T中的undefined类型
 * @example
 * 输入：
 * type example = _NonUndefined<'1' | '2' | '3' | undefined>
 * 输出：
 * type example = "1" | "2" | "3"
 */
 type _NonUndefined<T> = T extends undefined ? never : T
 
/**
 * 去除联合类型T中的undefined和null类型
 * @example
 * 输入：
 * type example = _NonNullAndUndefined<'1' | '2' | '3' | undefined ｜ null>
 * 输出：
 * type example = "1" | "2" | "3"
 */
 type _NonNullAndUndefined<T> = T extends undefined | null ? never : T

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
 * type example = _Intersection<Example1,Example2>
 * 输出：
 * type example = {
 *  name: string;
 * }
 */
type _Intersection<T, U> = _Pick<T & U, keyof T & keyof U>

export {
   _Pick,
   _Readonly,
   _Partial,
   _Required,
   _Record,
   _Exclude,
   _Extract,
   _Omit,
   _NonNullable,
   _Parameters,
   _ReturnType,
   _ConstructorParameters,
   _InstanceType,
   _Uppercase,
   _Lowercase,
   _Capitalize,
   _Uncapitalize,
   _GetIntersection,
   _GetDifference,
   _GetComplement,
   _SymmetricDifference,
   _NonUndefined,
   _NonNullAndUndefined,
   _Intersection
}
