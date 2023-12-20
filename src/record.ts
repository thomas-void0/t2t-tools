/**
 * 返回以联合类型K为属性，以T为属性值类型的新类型
 * @example
 * 输入：
 * type key = "a" | "b"
 * type example = Record<key,string>;
 * 输出：
 *type example = {
 *  a: string;
 *  b: string;
 *}
 */
export type Record<K extends keyof any, T> = { [O in K]: T }
