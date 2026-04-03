import { expect, describe, it } from '@jest/globals'
import { consoler } from 'yourails_common'
import { getDateWithTime } from 'yourails_common'
import { withAssignedDate } from 'yourails_common'

import { get052LongestSubstringNoRepeating } from './get052LongestSubstringNoRepeating'

type Get052LongestSubstringNoRepeatingTestType = {
  description?: string
  params: Parameters<typeof get052LongestSubstringNoRepeating>[0]
  paramsWithAssignedDate?: { timestamp: number }
  options?: Parameters<typeof get052LongestSubstringNoRepeating>[1]
  expected: ReturnType<typeof get052LongestSubstringNoRepeating>
}

/**
 * @prompt Context: Javascript chanllendge
 *         Question: Suggest unit test data to test the function with the description below
 *         Format: Follow the format of the array of test-objects below
 */
const tests: Get052LongestSubstringNoRepeatingTestType[] = [
  {
    description: 'simple repeat pattern',
    params: { inputStr: 'abcabcbb' },
    expected: 'abc',
  },
  {
    description: 'empty string',
    params: { inputStr: '' },
    expected: '',
  },
  {
    description: 'single character',
    params: { inputStr: 'a' },
    expected: 'a',
  },
  {
    description: 'all unique characters',
    params: { inputStr: 'abcd' },
    expected: 'abcd',
  },
  {
    description: 'all same characters',
    params: { inputStr: 'aaaa' },
    expected: 'a',
  },
  {
    description: 'repeat in the middle',
    params: { inputStr: 'abcdcdef' },
    expected: 'abcd',
  },
  {
    description: 'longest substring at the end',
    params: { inputStr: 'ababcd' },
    expected: 'abcd',
  },
  {
    description: 'longest substring at the beginning',
    params: { inputStr: 'abcdab' },
    expected: 'abcd',
  },
  {
    description: 'alternating characters',
    params: { inputStr: 'ababab' },
    expected: 'ab',
  },
  {
    description: 'numbers included',
    params: { inputStr: '1231234' },
    expected: '1234',
  },
  {
    description: 'special characters',
    params: { inputStr: '!@#!$%' },
    expected: '@#!$%',
  },
  {
    description: 'case sensitivity',
    params: { inputStr: 'aAbBa' },
    expected: 'aAbB',
  },
  {
    description: 'long repeating prefix',
    params: { inputStr: 'abcabcdef' },
    expected: 'abcdef',
  },
  {
    description: 'repeat at the very end',
    params: { inputStr: 'abcdea' },
    expected: 'abcde',
  },
  {
    description: 'multiple valid answers (depends on implementation)',
    params: { inputStr: 'abcdbefg' },
    expected: 'cdbefg', // could also be 'dbefg' depending on logic
  },
  // {
  //   description: 'spaces included',
  //   params: { inputStr: 'a b c a b' },
  //   expected: 'a b c',
  // },
  // {
  //   description: 'unicode characters',
  //   params: { inputStr: '🙂🙃🙂🙃😄' },
  //   expected: '🙂🙃😄',
  // },
  {
    description: 'long unique then repeat early char',
    params: { inputStr: 'abcdefga' },
    expected: 'abcdefg',
  },
]

/**
 * @Description Test to challenge function get052LongestSubstringNoRepeating
 *              Longest Substring Without Repeating Characters
 * @test yarn jest get052LongestSubstringNoRepeating.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get052LongestSubstringNoRepeating/get052LongestSubstringNoRepeating.test.ts"
 *    In debugging mode:
 *       node --inspect-brk get052LongestSubstringNoRepeating.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '$description',
    ({ description, params, options, paramsWithAssignedDate, expected }: Get052LongestSubstringNoRepeatingTestType) => {
      let getWithDate: ReturnType<typeof withAssignedDate> = get052LongestSubstringNoRepeating
      if (paramsWithAssignedDate && paramsWithAssignedDate.timestamp)
        getWithDate = withAssignedDate(paramsWithAssignedDate)(getWithDate)

      let output: ReturnType<typeof get052LongestSubstringNoRepeating> = getWithDate(params, options)
      consoler('get052LongestSubstringNoRepeating.test', { description, params, output })

      expect(output).toEqual(expected)
    }
  )
})
