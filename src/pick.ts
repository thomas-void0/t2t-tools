/**
 * 从类型T中获取一组，以联合类型K为基础的新类型
 * @example
 * 输入：
 * type Example = {a:number,b:string,c:boolean}
 * type example = Pick<Example,"a"|"b">
 * 输出：
 * type example = {
 *   a: number;
 *   b: string;
 * }
 */
export type Pick<T, K extends keyof T> = { [O in K]: T[O] }
