# t2t-tools [![Publish](https://github.com/thomas-void0/t2t-tools/actions/workflows/publish.yml/badge.svg)](https://github.com/thomas-void0/t2t-tools/actions/workflows/publish.yml) <img src="https://img.shields.io/npm/v/t2t-tools.svg" alt="npm package">

t2t-tools is type conversion tool of typescript.

## Install
```bash
npm install t2t-tools -D
```

## Usage

Add to a d.ts declaration file
```ts
/// <reference types="t2t-tools" />
```

OR

add `t2t-tools` to `compilerOptions.types` inside tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["t2t-tools"]
  }
}
```

## API

|        方法名         |                         解释                          |
| :-------------------: | :---------------------------------------------------: |
| ConstructorParameters |       获取一个构造函数的参数类型，返回一个元组        |
|    DeepNonNullable    |                深度去除null和undefined                |
|      DeepPartial      |                    深度设置为可选                     |
|     DeepReadonly      |                   深度设置readonly                    |
|     DeepRequired      |                    全部设置为必选                     |
|         Diff          |           找出T类型中，与U类型不相同的属性            |
|   EnhancedRequired    |          增强的必选,可以指定哪些key需要必选           |
|        Equals         |                  判断2个类型是否相等                  |
|        Exclude        |        从联合类型T中排除与联合类型U相同的部分         |
|        Extract        |        从联合类型T中获取与联合类型U相同的部分         |
|     GetComplement     |          获取联合类型T与其子类型中不同的部分          |
|     GetDifference     |          获取联合类型T与联合类型U不同的类型           |
|    GetIntersection    |          获取联合类型T与联合类型U的交叉类型           |
|     InstanceType      |             获取一个构造函数的实例的类型              |
|     Intersection      |           取出T中的属性，此属性同样存在于U            |
|         Merge         |                   合并类型T与类型U                    |
|  MutableFunctionKeys  | 获取一个类型中，属性为可选同时属性值的类型为函数的key |
|      MutableKeys      |                 返回非readonly的类型                  |
|      NonFunction      |       取出没有包含函数类型的参数组成一个新类型        |
|    NonFunctionKeys    |         取出没有包含函数类型的参数的联合类型          |
|      NonNullable      |               从联合类型T中排除null类型               |
|  NonNullAndUndefined  |         去除联合类型T中的undefined和null类型          |
|     NonUndefined      |            去除联合类型T中的undefined类型             |
|         Omit          |           从类型T中，排除联合类型U中的属性            |
|      OmitByValue      |              通过属性值的类型来排除属性               |
|   OmitByValueExact    |            通过属性值的类型来精确排除属性             |
|       Optional        |                 可配置的设置可选属性                  |
|     OptionalKeys      |                   取出所有可选的key                   |
|       OverWrite       |                   取出所有可选的key                   |
|      Parameters       |          获取一个函数类型中，参数的元祖类型           |
|        Partial        |                将T中的所有属性变为可选                |
|         Pick          |     从类型T中获取一组，以联合类型K为基础的新类型      |
|      PickByValue      |                  通过类型值获取类型                   |
|          Pop          |               删除元祖中的最后一个类型                |
|       Primitive       |                        原始值                         |
|      PromiseType      |             获取Promise的resolve的值类型              |
|       Readonly        |            将T中所有的属性，转变为readonly            |
|     ReadonlyKeys      |                  获取readonly的类型                   |
|        Record         |    返回以联合类型K为属性，以T为属性值类型的新类型     |
|        Replace        |                 替换类型中一部分内容                  |
|       Required        |                将T中的所有类型变为必选                |
|     RequiredKeys      |                   取出所有必须的key                   |
|      ReturnType       |              获取函数类型中,返回值的类型              |
|         Shift         |                删除元祖中的第一个类型                 |
|       Subtract        |                   获取子集中的差异                    |
|  SymmetricDifference  |          获取T类型中与U类型两者中不同的部分           |
|         Trim          |                 去除字符串两边的空格                  |
|       TrimLeft        |                 去除字符串左边的空格                  |
|       TrimRight       |                 去除字符串右边的空格                  |
|       Unionize        |                 将类型T拆解为联合类型                 |
|  UnionToIntersection  |                  联合类型转交叉类型                   |
|      ValuesType       |    获取对象、数组、类数组中的值的类型组成联合类型     |
