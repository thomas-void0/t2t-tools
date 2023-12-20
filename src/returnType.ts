/**
 * 获取函数类型中,返回值的类型
 * @example
 * 输入：
 * type Example = (a:number,b:string,c?:boolean)=>string
 * type example = ReturnType<Example>
 * 输出：
 * type example = string
 */
export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P
	? P
	: never
