import { _Omit, _Partial, _Pick } from "../baseType";
/**
 * 要求：
 * 输入：
 * type Example = {
 *  name: string;
 *  age: number;
 *  visible: boolean;
 * };
 * type example1 = _Optional<Example>;
 * type example2 = _Optional<Example,'age' | 'visible'>;
 * 输出：
 * type example1 = { name?: string; age?: number; visible?: boolean; }
 * type example2 = { name: string; age?: number; visible?: boolean; }
 */
type Example = {
  name: string;
  age: number;
  visible: boolean;
};

/**
 * 可配置的设置可选属性
 * @example
 * 输入：
 * type Example = {
 *  name: string;
 *  age: number;
 *  visible: boolean;
 * };
 * type example1 = _Optional<Example>;
 * type example2 = _Optional<Example,'age' | 'visible'>;
 * 输出：
 * type example1 = { name?: string; age?: number; visible?: boolean; }
 * type example2 = { name: string; age?: number; visible?: boolean; }
 */
export type _Optional<
  T extends object,
  K extends keyof T = keyof T,
  I = _Omit<T, K> & _Partial<_Pick<T, K>>
> = _Pick<I, keyof I>;

//分步解析；
//1.获取需要部分省略的类型
type PartialKey = "age" | "name";
//2. 从Example排除PartialKey
type A = _Omit<Example, PartialKey>;
//3. 得到新的交叉类型
type B = _Pick<Example, PartialKey>;
type C = A & _Partial<B>;
//4.获取新类型
type D = _Pick<C, keyof C>;
/**
 * type D = {
 *  age?: number | undefined;
 *  name?: string | undefined;
 *  visible: boolean;
 *}
 */
