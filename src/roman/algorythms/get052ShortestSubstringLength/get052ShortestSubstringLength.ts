import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get052ShortestSubstringLengthParamsType = { inputStr: string }

type Get052ShortestSubstringLengthOptionsType = { funcParent?: string }

type Get052ShortestSubstringLengthResType = number

interface Get052ShortestSubstringLengthType {
  (
    params: Get052ShortestSubstringLengthParamsType,
    options?: Get052ShortestSubstringLengthOptionsType
  ): Get052ShortestSubstringLengthResType
}

/**
 * @description Function to get052ShortestSubstringLength
 *              'dabbcabcd' > 'abcd' > 4
 * @import import { get052ShortestSubstringLength } from './get052ShortestSubstringLength'
 */
const get052ShortestSubstringLengthUnsafe: Get052ShortestSubstringLengthType = (
  { inputStr }: Get052ShortestSubstringLengthParamsType,
  options: Get052ShortestSubstringLengthOptionsType = optionsDefault
) => {
  let output: number = 0

  return output
}

const optionsDefault: Required<Get052ShortestSubstringLengthOptionsType> = {
  funcParent: 'get052ShortestSubstringLength',
}

const resDefault: Get052ShortestSubstringLengthResType = 0

const get052ShortestSubstringLength: Get052ShortestSubstringLengthType = withTryCatchFinallyWrapper(
  get052ShortestSubstringLengthUnsafe,
  {
    optionsDefault,
    resDefault,
    funcMode: FuncModeEnumType.common,
    isFinally: false,
  }
)

export { get052ShortestSubstringLength }
export type {
  Get052ShortestSubstringLengthParamsType,
  Get052ShortestSubstringLengthResType,
  Get052ShortestSubstringLengthOptionsType,
  Get052ShortestSubstringLengthType,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get052ShortestSubstringLength/get052ShortestSubstringLength.ts
 * @test yarn jest get052ShortestSubstringLength.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get052ShortestSubstringLength/get052ShortestSubstringLength.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get052ShortestSubstringLengthParamsType
      options: Get052ShortestSubstringLengthOptionsType
      expected: Get052ShortestSubstringLengthResType
    }
    const examples: ExampleType[] = [
      {
        description: 'Example case: dabbcabcd',
        params: { inputStr: 'dabbcabcd' },
        options: {},
        expected: 4,
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await get052ShortestSubstringLength(params, options)
      consoler(`get052ShortestSubstringLength [61-${index}]`, {
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

const get052ShortestSubstringLengthUnsafe: Get052ShortestSubstringLengthType = (
  { inputStr }: Get052ShortestSubstringLengthParamsType,
  options: Get052ShortestSubstringLengthOptionsType = optionsDefault
) => {
  let output: number = 0

  return output
}


2026-04-02

const get052ShortestSubstringLengthUnsafe: Get052ShortestSubstringLengthType = (
  { inputStr }: Get052ShortestSubstringLengthParamsType,
  options: Get052ShortestSubstringLengthOptionsType = optionsDefault
) => {
  const inputArr = inputStr.split('')
  let left: number = 0
  let right: number = 0
  let outputArr: string[][] = []
  let outputSet: Set<string> = new Set()
  let lenMax = 0

  while (right < inputArr.length) {
    const charLeft = inputArr[left]
    const charRight = inputArr[right]

    while (outputSet.has(charRight) && inputArr[left]) {
      outputSet.delete(charLeft)
      left += 1
    }

    outputSet.add(charRight)
    const resultCurrent = [...outputSet]

    if (resultCurrent.length > lenMax) {
      outputArr.unshift(resultCurrent)
      lenMax = resultCurrent.length
    }

    right += 1
  }

  return outputArr.length ? outputArr[0].length : 0
}

2026-04-01

const get052ShortestSubstringLengthUnsafe: Get052ShortestSubstringLengthType = (
  { inputStr }: Get052ShortestSubstringLengthParamsType,
  options: Get052ShortestSubstringLengthOptionsType = optionsDefault
) => {
  const inputArr = inputStr.split('')

  let left = 0
  let right = 0
  let outputArr = []
  let outputSet: Set<string> = new Set()

  while (right < inputArr.length) {
    const rightChar = inputArr[right]

    while (outputSet.has(rightChar)) {
      outputSet.delete(inputArr[left])
      left += 1
    }

    outputSet.add(rightChar)

    outputArr.push([...outputSet])
    
    right += 1
  }

  const output = outputArr.reduce(
    (accum: number, elem: string[]) => (accum < elem.length ? (accum = elem.length) : accum),
    0
  )

  return output
}

*/
