/**
 * 将T中的所有属性变为可选
 * @example
 * 输入：
 * type Example = {a:number,b:string,c:boolean}
 * type example = Partial<Example>;
 * 输出
 * type example = {
 *  a?: number | undefined;
 *  b?: string | undefined;
 *  c?: boolean | undefined;
 *}
 */
export type Partial<T> = { [O in keyof T]?: T[O] }
