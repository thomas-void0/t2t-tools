import { TrimLeft } from './trimLeft'
import { TrimRight } from './trimRight'
/**
 * 去除字符串两边的空格
 * @example
 * 输入：
 * type example = Trim<" 123 ">
 * 输出：
 * type example = "123"
 */

export type Trim<T extends string> = TrimLeft<TrimRight<T>>
