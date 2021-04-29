import { _NonUndefined } from "../baseType";
/**
 * 例子一、获取一个类型中，属性为可选同时属性值的类型为函数的key
 * @example
 * 输入：
 * type Example = {
 *  name: string;
 *  setName: (...args: any) => any | undefined;
 *  someKeys?: string;
 *  someFn?: (...args: any) => any;
 * };
 * type example = _MutableFunctionKeys<Example>
 * 输出：
 * type example = "someFn"
 */

//分析如下：
//1.判断属性值是否为可选
//2.判断去除了undefined的属性值是否是Function的子类型
//3.通过[keyof T]的方式遍历取出新类型中满足条件的key
export type _MutableFunctionKeys<T extends object> = {
  [K in keyof T]-?: undefined extends T[K]
    ? _NonUndefined<T[K]> extends Function
      ? K
      : never
    : never;
}[keyof T];
type Example = {
  name: string | undefined;
  setName: (...args: any) => any | undefined;
  someKeys?: string;
  someFn?: (...args: any) => any;
};
type example = _MutableFunctionKeys<Example>;

//解析：
/**
 * 1.undefined extends T[K] 通过判断undefined这个类型能否与T[K]兼容。类似于let a:undefined | string = undefined
 *
 * 2._NonUndefined<T[K]> 能够去除掉T[K]中所包含的undefined类型，这个时候拿到的类型再去进行下一步判断，
 * extends Function 就能知道该类型是不是属于Function的子类型。
 * 如果以上的条件都能够满足，那么就说明了这个属性是可选的，并且属于Function的子类型。随之返回这个key作为新类型的属性值类型，否则
 * 返回never作为新类型的属性值。
 *
 * 3.当T中所有的属性都执行完以上的流程后，就可以拿到一个新的类型。
 *
 * 4.通过[keyof T]能够遍历这个新类型，将其中不属于never的属性值返回出来。
 */

/**
 * 以上的工具函数有个非常奇怪的特性，就是能够过滤setName这个同样具有undefined的属性。原因是因为，setName和someFn？
 * 实际上是不同的。setName= (...args: any) => any | undefined 但是 someFn = ((...args: any) => any) | undefined
 * 如下的表达式所示：
 */
type s = ((...args: any) => any) | undefined;
type a1 = undefined extends s ? 1 : 2; //1

type s1 = (...args: any) => any | undefined;
type a2 = undefined extends s1 ? 1 : 2; //2
