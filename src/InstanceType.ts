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
 * type example = InstanceType<typeof Example>
 * 输出：
 * type example = Example
 */
export type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (
	...args: any
) => infer P
	? P
	: never
