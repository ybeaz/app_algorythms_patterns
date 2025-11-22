import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type GetCurriedFuncParamsType = any

type GetCurriedFuncOptionsType = { funcParent?: string }

type GetCurriedFuncResType = any

interface GetCurriedFuncType {
  (params: GetCurriedFuncParamsType, options?: GetCurriedFuncOptionsType): GetCurriedFuncResType
}

const optionsDefault: Required<GetCurriedFuncOptionsType> = {
  funcParent: 'getCurriedFunc',
}

const resDefault: GetCurriedFuncResType = ''

/**
 * @description Function to getCurriedFunc
 * @import import {
    getCurriedFunc,
    GetCurriedFuncParamsType,
    GetCurriedFuncResType 
  } from './getCurriedFunc'
 */

const getCurriedFuncUnsafe: GetCurriedFuncType = function (func: GetCurriedFuncParamsType) {
  let argsAcc: number[] = []

  const processArgs = function (...args: number[]) {
    argsAcc.push(...args)

    if (argsAcc.length === func.length) return func(...argsAcc)
    else return processArgs
  }

  return processArgs
}

const getCurriedFunc = withTryCatchFinallyWrapper(getCurriedFuncUnsafe, {
  optionsDefault,
  resDefault,
  funcMode: FuncModeEnumType.common,
  isFinally: false,
})

export { getCurriedFunc }
export type { GetCurriedFuncParamsType, GetCurriedFuncResType, GetCurriedFuncOptionsType, GetCurriedFuncType }

/**
 * @description Here the file is being run directly
    console.log(curry(sum)(1, 2, 3));
    console.log(curry(sum)(1, 2)(3));
    console.log(curry(sum)(1)(2)(3));
    curry(sum)(1, 2, 3); // 6
    curry(sum)(1, 2)(3); // 6
    curry(sum)(1)(2)(3); // 6
 * @run ts-node src/roman/patterns/getCurriedFunc.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: GetCurriedFuncParamsType
      options: GetCurriedFuncOptionsType
      expected: GetCurriedFuncResType
    }

    function sum(a: number, b: number, c: number, ...args: number[]) {
      return a + b + c
    }

    const examples: ExampleType[] = [{ params: sum, options: {}, expected: '' }]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const output = await getCurriedFunc(params)(1, 2, 3)
      const output2 = await getCurriedFunc(params)(1, 2)(3)
      const output3 = await getCurriedFunc(params)(1)(2)(3)

      consoler(`getCurriedFunc [61-${index}]`, {
        params,
        expected,
        'getCurriedFunc(params)(1, 2)': getCurriedFunc(params)(1, 2),
        'getCurriedFunc(params)(1)': getCurriedFunc(params)(1),
        'getCurriedFunc(params)(1)(2)': getCurriedFunc(params)(1)(2),
        'getCurriedFunc(params)(1, 2, 3, 4)': getCurriedFunc(params)(1, 2, 3, 4),
        'getCurriedFunc(params)(1, 2)(3, 4)': getCurriedFunc(params)(1, 2)(3, 4),
        // 'getCurriedFunc(params)(1)(2)(3)(4)': getCurriedFunc(params)(1)(2)(3)(4)(5),
        output,
        output2,
        output3,
        tested: output === 6,
        tested2: output2 === 6,
        tested3: output3 === 6,
      })
    })
    await Promise.all(promises)
  })()
}
