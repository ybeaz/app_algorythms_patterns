import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get001TwoSumParamsType = {
  inputArr: number[]
  target: number
}

type Get001TwoSumOptionsType = { funcParent?: string }

type Get001TwoSumResType = number[] | null

interface Get001TwoSumType {
  (params: Get001TwoSumParamsType, options?: Get001TwoSumOptionsType): Get001TwoSumResType
}

/**
 * @description Function to get001TwoSum
 *              In this challenge we need to find indexes of array elements that can produce the target sum
 * @import import { get001TwoSum } from './get001TwoSum'
 */

const get001TwoSumUnsafe: Get001TwoSumType = ({ inputArr, target }: Get001TwoSumParamsType) => {
  return null
}

const optionsDefault: Required<Get001TwoSumOptionsType> = {
  funcParent: 'get001TwoSum',
}

const resDefault: Get001TwoSumResType = null

const get001TwoSum: Get001TwoSumType = withTryCatchFinallyWrapper(get001TwoSumUnsafe, {
  optionsDefault,
  resDefault,
  funcMode: FuncModeEnumType.common,
  isFinally: false,
})

export { get001TwoSum }
export type { Get001TwoSumParamsType, Get001TwoSumResType, Get001TwoSumOptionsType, Get001TwoSumType }

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get001TwoSum/get001TwoSum.ts
 * @test yarn jest get001TwoSum.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get001TwoSum/get001TwoSum.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get001TwoSumParamsType
      options: Get001TwoSumOptionsType
      expected: Get001TwoSumResType
    }
    const examples: ExampleType[] = [
      // {
      //   description: 'Basic case with one valid pair',
      //   params: { inputArr: [2, 7, 11, 15], target: 9 },
      //   options: {},
      //   expected: [0, 1],
      // },
      {
        description: 'Pair in the middle',
        params: { inputArr: [1, 3, 4, 2], target: 6 },
        options: {},
        expected: [2, 3],
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await get001TwoSum(params, options)
      consoler(`get001TwoSum [61-${index}]`, {
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

/*


const get001TwoSumUnsafe: Get001TwoSumType = ({ inputArr, target }: Get001TwoSumParamsType) => {
  return null
}

2026-04-02 

const get001TwoSumUnsafe: Get001TwoSumType = ({ inputArr, target }: Get001TwoSumParamsType) => {
  const hashTable: Map<number, number> = new Map(inputArr.map((item: number, index: number) => [item, index]))

  let firstNumIndex: number = 0

  while (firstNumIndex < inputArr.length) {
    const firstNum = inputArr[firstNumIndex]
    const secondNum = target - firstNum
    const secondNumIndex = hashTable.get(secondNum)

    if (secondNumIndex && firstNumIndex !== secondNumIndex) [firstNumIndex, secondNumIndex]

    firstNumIndex += 1
  }

  return null
}

2026-04-01 2

const get001TwoSumUnsafe: Get001TwoSumType = ({ inputArr, target }: Get001TwoSumParamsType) => {
  const hashMap: Map<number, number> = new Map(inputArr.map((item: number, index: number) => [item, index]))

  let left: number = 0

  while (left < inputArr.length) {
    const compliment = target - inputArr[left]

    const index = hashMap.get(compliment)
    if (index !== undefined && index !== left) {
      return [left, index]
    }

    left += 1
  }

  return null
}

2026-04-01

const get001TwoSumUnsafe: Get001TwoSumType = ({ inputArr, target }: Get001TwoSumParamsType) => {

  let left: number = 0

  while (left < inputArr.length) {
    const valLeft = inputArr[left]
    let right: number = left + 1

    while (right < inputArr.length) {
      const valRight = inputArr[right]

      if (valLeft + valRight === target) return [left, right]

      right += 1
    }

    left += 1
  }

  return null
}

*/
