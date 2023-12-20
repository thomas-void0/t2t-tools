/**
 * 深度设置为可选
 * @example
 * 输入：
 *   type Example = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type example = _DeepPartial<NestedProps>;
 * 输出：
 *  type example = {
 *   first?:{
 *      second?:{
 *          name?:string
 *      }
 *   }
 * }
 */
export type _DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? _DeepPartialArray<U>
  : T extends object
  ? _DeepPartialObject<T>
  : T | undefined;

//如果是数组
export interface _DeepPartialArray<T> extends Array<_DeepPartial<T>> {}

//如果是对象
export type _DeepPartialObject<T> = { [P in keyof T]?: _DeepPartial<T[P]> };
