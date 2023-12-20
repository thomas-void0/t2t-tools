/**
 * 获取一个函数类型中，参数的元祖类型
 * @example
 * 输入：
 * type Example = (a:number,b:string,c?:boolean)=>null
 * type example = Parameters<Example>
 * 输出：
 * type example = [a: number, b: string, c?: boolean | undefined]
 */
export type Parameters<T extends (...arg: any) => any> = T extends (...arg: infer P) => any
	? P
	: never
