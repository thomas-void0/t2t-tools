/**
 * 从类型T中，排除联合类型U中的属性
 * @example
 * 输入：
 * type Example = {a:number,b:string,c?:boolean}
 * type example = Omit<Example,"c">
 * 输出：
 * type example = {
 *   a: number;
 *   b: string;
 * }
 */
export type Omit<T, U extends keyof any> = Pick<T, Exclude<keyof T, U>>
