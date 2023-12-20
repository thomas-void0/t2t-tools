/**
 * 去除字符串左边的空格
 * @example
 * 输入：
 * type example = TrimLeft<" 123">
 * 输出：
 * type example = "123"
 */
export type TrimLeft<Str extends string> = Str extends `${' ' | '\t' | '\n'}${infer Rest}`
	? TrimLeft<Rest>
	: Str
