// @ts-nocheck
import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get120GreatestDivisorTwoNumbersParamsType = any

type Get120GreatestDivisorTwoNumbersOptionsType = { funcParent?: string }

type Get120GreatestDivisorTwoNumbersResType = any

interface Get120GreatestDivisorTwoNumbersType {
  (
    params: Get120GreatestDivisorTwoNumbersParamsType,
    options?: Get120GreatestDivisorTwoNumbersOptionsType
  ): Get120GreatestDivisorTwoNumbersResType
}

/**
 * @description Function to get120GreatestDivisorTwoNumbers
 * @import import { get120GreatestDivisorTwoNumbers } from './get120GreatestDivisorTwoNumbers'
 */

const get120GreatestDivisorTwoNumbersUnsafe: Get120GreatestDivisorTwoNumbersType = (
  { numA: numAIn, numB: numBIn }: Get120GreatestDivisorTwoNumbersParamsType,
  options: Get120GreatestDivisorTwoNumbersOptionsType = optionsDefault
) => {
  const numA = Math.abs(numAIn),
    numB = Math.abs(numBIn)

  const numMax = Math.max(numA, numB)

  if (numA === 0 || numB === 0) return numMax
  else if (numA === numB) return numA

  const numMin = Math.min(numA, numB)

  if (numMax % numMin === 0) return numMin

  const edge = Math.floor(numMin / 2)

  for (let index = edge; index > 0; index -= 1) {
    if (numA % index === 0 && numB % index === 0) return index
  }

  return 1
}

const optionsDefault: Required<Get120GreatestDivisorTwoNumbersOptionsType> = {
  funcParent: 'get120GreatestDivisorTwoNumbers',
}

const resDefault: Get120GreatestDivisorTwoNumbersResType = ''

const get120GreatestDivisorTwoNumbers: Get120GreatestDivisorTwoNumbersType = withTryCatchFinallyWrapper(
  get120GreatestDivisorTwoNumbersUnsafe,
  {
    optionsDefault,
    resDefault,
    funcMode: FuncModeEnumType.common,
    isFinally: false,
  }
)

export { get120GreatestDivisorTwoNumbers }
export type {
  Get120GreatestDivisorTwoNumbersParamsType,
  Get120GreatestDivisorTwoNumbersResType,
  Get120GreatestDivisorTwoNumbersOptionsType,
  Get120GreatestDivisorTwoNumbersType,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get120GreatestDivisorTwoNumbers/get120GreatestDivisorTwoNumbers.ts
 * @test yarn jest get120GreatestDivisorTwoNumbers.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get120GreatestDivisorTwoNumbers/get120GreatestDivisorTwoNumbers.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get120GreatestDivisorTwoNumbersParamsType
      options: Get120GreatestDivisorTwoNumbersOptionsType
      expected: Get120GreatestDivisorTwoNumbersResType
    }
    const examples: ExampleType[] = [
      { description: 'negative numbers (both negative)', params: { numA: -8, numB: -12 }, options: {}, expected: 4 },
      // { description: 'both numbers are equal', params: { numA: 10, numB: 10 }, options: {}, expected: 10 },
      // { description: 'common divisor greater than 1', params: { numA: 18, numB: 24 }, options: {}, expected: 6 },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await get120GreatestDivisorTwoNumbers(params, options)
      consoler(`get120GreatestDivisorTwoNumbers [61-${index}]`, {
        description,
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
