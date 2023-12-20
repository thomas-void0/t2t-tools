/**
 * 增强的必选，如下所示：
 * @example
 * 输入：
 * type Example = {
 *  name?: string;
 *  age?: number;
 *  visible?: boolean;
 * };
 * type example1 = EnhancedRequired<Example>;
 * type example2 = EnhancedRequired<Example, 'age' | 'visible'>;
 * 输出：
 * type example1 = { name: string; age: number; visible: boolean; }
 * type example2 = { name?: string; age: number; visible: boolean; }
 *
 */
export type EnhancedRequired<
	T,
	K extends keyof T = keyof T,
	I = Omit<T, K> & Required<Pick<T, K>>
> = Pick<I, keyof I>
