import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get052LongestSubstringNoRepeatingParamsType = { inputStr: string }

type Get052LongestSubstringNoRepeatingOptionsType = { funcParent?: string }

type Get052LongestSubstringNoRepeatingResType = string

interface Get052LongestSubstringNoRepeatingType {
  (
    params: Get052LongestSubstringNoRepeatingParamsType,
    options?: Get052LongestSubstringNoRepeatingOptionsType
  ): Get052LongestSubstringNoRepeatingResType
}

/**
 * @description Function to get052LongestSubstringNoRepeating
 * @import import { get052LongestSubstringNoRepeating } from './get052LongestSubstringNoRepeating'
 */

const get052LongestSubstringNoRepeatingUnsafe: Get052LongestSubstringNoRepeatingType = ({
  inputStr,
}: Get052LongestSubstringNoRepeatingParamsType) => {
  return ''
}

const optionsDefault: Required<Get052LongestSubstringNoRepeatingOptionsType> = {
  funcParent: 'get052LongestSubstringNoRepeating',
}

const resDefault: Get052LongestSubstringNoRepeatingResType = ''

const get052LongestSubstringNoRepeating: Get052LongestSubstringNoRepeatingType = withTryCatchFinallyWrapper(
  get052LongestSubstringNoRepeatingUnsafe,
  {
    optionsDefault,
    resDefault,
    funcMode: FuncModeEnumType.common,
    isFinally: false,
  }
)

export { get052LongestSubstringNoRepeating }
export type {
  Get052LongestSubstringNoRepeatingParamsType,
  Get052LongestSubstringNoRepeatingResType,
  Get052LongestSubstringNoRepeatingOptionsType,
  Get052LongestSubstringNoRepeatingType,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get052LongestSubstringNoRepeating/get052LongestSubstringNoRepeating.ts
 * @test yarn jest get052LongestSubstringNoRepeating.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get052LongestSubstringNoRepeating/get052LongestSubstringNoRepeating.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get052LongestSubstringNoRepeatingParamsType
      options?: Get052LongestSubstringNoRepeatingOptionsType
      expected: Get052LongestSubstringNoRepeatingResType
    }
    const examples: ExampleType[] = [
      {
        description: 'empty string',
        params: { inputStr: '' },
        expected: '',
      },
      {
        description: 'longest substring at the end',
        params: { inputStr: 'ababcd' },
        expected: 'abcd',
      },
      {
        description: 'all unique characters',
        params: { inputStr: 'abcd' },
        expected: 'abcd',
      },
      {
        description: 'simple repeat pattern',
        params: { inputStr: 'abcabcbb' },
        expected: 'abc',
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await get052LongestSubstringNoRepeating(params, options)
      consoler(`get052LongestSubstringNoRepeating [61-${index}]`, {
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

const get052LongestSubstringNoRepeatingUnsafe: Get052LongestSubstringNoRepeatingType = ({
  inputStr,
}: Get052LongestSubstringNoRepeatingParamsType) => {
  return ''
}


2026-04-02

const get052LongestSubstringNoRepeatingUnsafe: Get052LongestSubstringNoRepeatingType = ({
  inputStr,
}: Get052LongestSubstringNoRepeatingParamsType) => {
  const inputArr = inputStr.split('')

  let left: number = 0
  let right: number = 0
  let outputArr: string[][] = []
  let outputSet: Set<string> = new Set()
  let lenMax = 0

  while (right < inputArr.length) {
    const rightChar = inputArr[right]
    const leftChar = inputArr[left]

    while (outputSet.has(rightChar) && inputArr[left]) {
      outputSet.delete(leftChar)
      left += 1
    }

    outputSet.add(rightChar)
    if (outputSet.size > lenMax) {
      outputArr.unshift([...outputSet])
      lenMax = outputSet.size
    }

    right += 1
  }

  return outputArr[0] ? outputArr[0].join('') : ''
}

2026-04-01

const get052LongestSubstringNoRepeatingUnsafe: Get052LongestSubstringNoRepeatingType = ({
  inputStr,
}: Get052LongestSubstringNoRepeatingParamsType) => {
  const inputArr = inputStr.split('')

  let outputArr: any = []
  let outputSet: Set<string> = new Set()
  let sizeMax = 0

  let left = 0
  let right = 0
  while (right < inputArr.length) {
    while (outputSet.has(inputArr[right])) {
      outputSet.delete(inputArr[left])
      left += 1
    }

    outputSet.add(inputArr[right])

    if (outputSet.size > sizeMax) {
      sizeMax = outputSet.size
      outputArr.push([...outputSet])
    }

    right += 1
  }

  return outputArr.find((item: string[]) => item.length === sizeMax)?.join('') || ''
}

const get052LongestSubstringNoRepeatingUnsafe: Get052LongestSubstringNoRepeatingType = (
  { strInput }: Get052LongestSubstringNoRepeatingParamsType,
  options: Get052LongestSubstringNoRepeatingOptionsType = optionsDefault
) => {
  let outputArray: any = []

  const arrInput = strInput.split('')
  let maxLen = 0

  let count = 0
  while (count <= arrInput.length) {
    const outputSet: Set<string> = new Set()

    let count2 = 0
    while (count2 <= arrInput.length) {
      if (outputSet.has(arrInput[count + count2]) || arrInput.length - count < maxLen) break
      else {
        outputSet.add(arrInput[count + count2])
        maxLen = outputSet.size
      }

      count2 += 1
    }

    outputArray.push(outputSet)
    count += 1
  }

  const output = outputArray.reduce((accum: string, setElem: Set<string>) => {
    const str = [...setElem].join('')
    if (str.length > accum.length) accum = str
    return accum
  }, '')

  return output
}


const get052LongestSubstringNoRepeatingUnsafe: Get052LongestSubstringNoRepeatingType = (
  { strInput }: Get052LongestSubstringNoRepeatingParamsType,
  options: Get052LongestSubstringNoRepeatingOptionsType = optionsDefault
) => {
  let outputArraySets: any = []

  const arrInput = strInput.split('')

  for (const index in arrInput) {
    const arrSliced = arrInput.slice(Number(index), arrInput.length)

    let setCurrent = new Set()
    for (const char of arrSliced) {
      if (!setCurrent.has(char)) setCurrent.add(char)
      else break
    }
    outputArraySets.push(setCurrent)
  }

  const output = outputArraySets.reduce((accum: string, setElem: Set<string>) => {
    const str = [...setElem].join('')
    if (str.length > accum.length) accum = str
    return accum
  }, '')

  return output
}

*/
