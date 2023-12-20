/**
 * 替换类型中一部分内容
 * @example
 * 输入：
 * type example = Replace<"hello js ~~", "js", "ts">;
 * 输出：
 *type example = "hello ts ~~"
 */
export type Replace<
	Str extends string,
	From extends string,
	To extends string
> = Str extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${Right}` : Str
