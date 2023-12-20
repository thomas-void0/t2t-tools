/**
 * 将T中所有的属性，转变为readonly
 * @example
 * 输入：
 * type Example = {a:number,b:string,c:boolean}
 * type example = Readonly<Example>;
 * 输出：
 * type example = {
 *   readonly a: number;
 *   readonly b: string;
 *   readonly c: boolean;
 * }
 */
export type Readonly<T> = { readonly [K in keyof T]: T[K] }
