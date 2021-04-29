import { _Primitive } from "../baseType";
/**
 * 要求：
 * 输入：
 *  type Example = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 * type example = _DeepReadonly<Example>
 * 输出：
 *   type example = {
 *      readonly first: {
 *        readonly second: {
 *          readonly name: string;
 *        };
 *      };
 *    }
 */
