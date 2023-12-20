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
 * type example = ConstructorParameters<typeof Example>
 * 输出：
 * type example = [name: string, age: number]
 */
export type ConstructorParameters<T extends abstract new (...args: any) => any> =
	T extends abstract new (...args: infer P) => any ? P : never
