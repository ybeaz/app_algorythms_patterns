import { expect, describe, it } from '@jest/globals'
import { consoler } from 'yourails_common'
import { getDateWithTime } from 'yourails_common'
import { withAssignedDate } from 'yourails_common'

import { get052ShortestSubstringLength } from './get052ShortestSubstringLength'

type Get052ShortestSubstringLengthTestType = {
  description?: string
  params: Parameters<typeof get052ShortestSubstringLength>[0]
  paramsWithAssignedDate?: { timestamp: number }
  options: Parameters<typeof get052ShortestSubstringLength>[1]
  expected: ReturnType<typeof get052ShortestSubstringLength>
}

/**
 * @prompt Context: Javascript chanllendge
 *         Question: Suggest unit test data to test the function with the description below
 *         Format: Follow the format of the array of test-objects below
 */
const tests: Get052ShortestSubstringLengthTestType[] = [
  {
    description: 'Single character string',
    params: { inputStr: 'a' },
    options: {},
    expected: 1,
  },
  {
    description: 'All characters identical',
    params: { inputStr: 'aaaaaa' },
    options: {},
    expected: 1,
  },
  {
    description: 'Two distinct characters minimal case',
    params: { inputStr: 'ab' },
    options: {},
    expected: 2,
  },
  {
    description: 'Sample case: bab',
    params: { inputStr: 'bab' },
    options: {},
    expected: 2,
  },
  {
    description: 'Example case: dabbcabcd',
    params: { inputStr: 'dabbcabcd' },
    options: {},
    expected: 4,
  },
  {
    description: 'All unique characters (entire string required)',
    params: { inputStr: 'abcdef' },
    options: {},
    expected: 6,
  },
  {
    description: 'Shortest substring at the beginning',
    params: { inputStr: 'abcaaaaa' },
    options: {},
    expected: 3,
  },
  {
    description: 'Shortest substring at the end',
    params: { inputStr: 'aaaaabc' },
    options: {},
    expected: 3,
  },
  {
    description: 'Shortest substring in the middle',
    params: { inputStr: 'aaabcbcba' },
    options: {},
    expected: 3,
  },
  {
    description: 'Repeated pattern',
    params: { inputStr: 'abcabcabc' },
    options: {},
    expected: 3,
  },
  {
    description: 'Non-contiguous minimal coverage forces longer window',
    params: { inputStr: 'abac' },
    options: {},
    expected: 3,
  },
  {
    description: 'Characters spread far apart',
    params: { inputStr: 'a' + 'x'.repeat(100) + 'b' + 'x'.repeat(100) + 'c' },
    options: {},
    expected: 203,
  },
  {
    description: 'Large input with only two distinct characters',
    params: { inputStr: 'a'.repeat(50000) + 'b'.repeat(50000) },
    options: {},
    expected: 2,
  },
  {
    description: 'Large input with all distinct characters once',
    params: { inputStr: 'abcdefghijklmnopqrstuvwxyz' },
    options: {},
    expected: 26,
  },
  {
    description: 'Sample case 1',
    params: { inputStr: 'asdfkjeghfalawefhaef' },
    options: {},
    expected: 13,
  },
  {
    description: 'Minimal window appears multiple times, pick shortest',
    params: { inputStr: 'abcaacbbca' },
    options: {},
    expected: 3,
  },
  {
    description: 'String where minimal window equals full string due to distribution',
    params: { inputStr: 'abbbbbbbbbbbbbbbbbc' },
    options: {},
    expected: 18,
  },
  {
    description: 'Alternating characters',
    params: { inputStr: 'ababababab' },
    options: {},
    expected: 2,
  },
  {
    description: 'Three characters but one appears only once',
    params: { inputStr: 'aaabbbbc' },
    options: {},
    expected: 5,
  },
  {
    description: 'Edge: shortest window requires skipping many duplicates',
    params: { inputStr: 'aaaaabbbbbcccccabc' },
    options: {},
    expected: 3,
  },
]

/**
 * @Description Test to challenge function get052ShortestSubstringLength
 * @test yarn jest get052ShortestSubstringLength.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get052ShortestSubstringLength/get052ShortestSubstringLength.ts"
 *    In debugging mode:
 *       node --inspect-brk get052ShortestSubstringLength.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '$description',
    ({ description, params, options, paramsWithAssignedDate, expected }: Get052ShortestSubstringLengthTestType) => {
      let getWithDate: ReturnType<typeof withAssignedDate> = get052ShortestSubstringLength
      if (paramsWithAssignedDate && paramsWithAssignedDate.timestamp)
        getWithDate = withAssignedDate(paramsWithAssignedDate)(getWithDate)

      let output: ReturnType<typeof get052ShortestSubstringLength> = getWithDate(params, options)
      consoler('get052ShortestSubstringLength.test', { description, params, output })

      expect(output).toEqual(expected)
    }
  )
})
