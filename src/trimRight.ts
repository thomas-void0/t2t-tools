/**
 * 去除字符串右边的空格
 * @example
 * 输入：
 * type example = TrimRight<"123 ">
 * 输出：
 * type example = "123"
 */
export type TrimRight<Str extends string> = Str extends `${infer Rest}${' ' | '\t' | '\n'}`
	? TrimRight<Rest>
	: Str
