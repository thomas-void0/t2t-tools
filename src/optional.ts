/**
 * 可配置的设置可选属性
 * @example
 * 输入：
 * type Example = {
 *  name: string;
 *  age: number;
 *  visible: boolean;
 * };
 * type example1 = Optional<Example>;
 * type example2 = Optional<Example,'age' | 'visible'>;
 * 输出：
 * type example1 = { name?: string; age?: number; visible?: boolean; }
 * type example2 = { name: string; age?: number; visible?: boolean; }
 */
export type Optional<
	T extends object,
	K extends keyof T = keyof T,
	I = Omit<T, K> & Partial<Pick<T, K>>
> = Pick<I, keyof I>
