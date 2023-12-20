/**
 * 将T中的所有类型变为必选
 * @example
 * 输入：
 * type Example = {a:number,b:string,c?:boolean}
 * type example = Required<Example>;
 * 输出：
 * type example = {
 *  a: number;
 *  b: string;
 *  c: boolean;
 *}
 */
export type Required<T> = { [O in keyof T]-?: T[O] }
