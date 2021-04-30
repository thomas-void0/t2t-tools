import { _Omit, _Pick, _Required } from "../baseType";
/**
 * 增强的必选，如下所示：
 * @example
 * 输入：
 * type Example = {
 *  name?: string;
 *  age?: number;
 *  visible?: boolean;
 * };
 * type example1 = _EnhancedRequired<Example>;
 * type example2 = _EnhancedRequired<Example, 'age' | 'visible'>;
 * 输出：
 * type example1 = { name: string; age: number; visible: boolean; }
 * type example2 = { name?: string; age: number; visible: boolean; }
 *
 */
export type _EnhancedRequired<
  T,
  K extends keyof T = keyof T,
  I = _Omit<T, K> & _Required<_Pick<T, K>>
> = _Pick<I, keyof I>;

type Example = {
  name?: string;
  age?: number;
  visible?: boolean;
};
//步骤解析
//1，获取到需要变为必选的key
type RequiredKey = "age" | "visible";
//2，从Example中分离变为必选的key
type A = _Omit<Example, RequiredKey>;
//3，从Example中获取到变为必选的属性
type B = _Pick<Example, RequiredKey>;
//4，根据A，B形成新的类型C
type C = A & _Required<B>;
//5，获取出C类型中的属性
type D = _Pick<C, keyof C>;
/**
 * type D = {
    age: number;
    visible: boolean;
    name?: string | undefined;
}
 */
