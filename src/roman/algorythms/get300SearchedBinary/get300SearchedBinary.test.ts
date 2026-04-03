import { expect, describe, it } from '@jest/globals'
import { consoler } from 'yourails_common'
import { getDateWithTime } from 'yourails_common'
import { withAssignedDate } from 'yourails_common'

import { get300SearchedBinary04 as get300SearchedBinary } from './get300SearchedBinary04'

type Get300SearchedBinaryTestType = {
  description?: string
  params: Parameters<typeof get300SearchedBinary>[0]
  paramsWithAssignedDate?: { timestamp: number }
  options?: Parameters<typeof get300SearchedBinary>[1]
  expected: ReturnType<typeof get300SearchedBinary>
}

/**
 * @prompt Context: Javascript chanllendge
 *         Question: Suggest unit test data to test the function with the description below
 *         Format: Follow the format of the array of test-objects below
 */

const tests: Get300SearchedBinaryTestType[] = [
  {
    description: 'Find element in the middle of sorted array',
    params: { inputArray: [1, 3, 5, 7, 9], target: 5 },
    options: {},
    expected: 2,
  },
  {
    description: 'Find element at the beginning',
    params: { inputArray: [1, 3, 5, 7, 9], target: 1 },
    options: {},
    expected: 0,
  },
  {
    description: 'Find element at the end',
    params: { inputArray: [1, 3, 5, 7, 9], target: 9 },
    options: {},
    expected: 4,
  },
  {
    description: 'Element not found in array',
    params: { inputArray: [1, 3, 5, 7, 9], target: 4 },
    options: {},
    expected: -1,
  },
  {
    description: 'Empty array',
    params: { inputArray: [], target: 1 },
    options: {},
    expected: -1,
  },
  {
    description: 'Single element array - found',
    params: { inputArray: [10], target: 10 },
    options: {},
    expected: 0,
  },
  {
    description: 'Single element array - not found',
    params: { inputArray: [10], target: 5 },
    options: {},
    expected: -1,
  },
  {
    description: 'Array with negative numbers',
    params: { inputArray: [-10, -5, 0, 5, 10], target: -5 },
    options: {},
    expected: 1,
  },
  {
    description: 'Array with duplicates (should return any valid index)',
    params: { inputArray: [1, 2, 2, 2, 3], target: 2 },
    options: {},
    expected: 1, // or 2 or 3 depending on implementation
  },
  {
    description: 'Large array',
    params: { inputArray: Array.from({ length: 1000 }, (_, i) => i), target: 789 },
    options: {},
    expected: 789,
  },
  {
    description: 'Target smaller than all elements',
    params: { inputArray: [10, 20, 30], target: 5 },
    options: {},
    expected: -1,
  },
  {
    description: 'Target greater than all elements',
    params: { inputArray: [10, 20, 30], target: 40 },
    options: {},
    expected: -1,
  },
  {
    description: 'Array with all identical elements - found',
    params: { inputArray: [7, 7, 7, 7, 7], target: 7 },
    options: {},
    expected: 0, // any index 0-4 is valid
  },
  {
    description: 'Array with all identical elements - not found',
    params: { inputArray: [7, 7, 7, 7, 7], target: 8 },
    options: {},
    expected: -1,
  },
  {
    description: 'Even-length array',
    params: { inputArray: [2, 4, 6, 8], target: 6 },
    options: {},
    expected: 2,
  },
  {
    description: 'Odd-length array',
    params: { inputArray: [1, 3, 5], target: 3 },
    options: {},
    expected: 1,
  },
]

/**
 * @Description Test to challenge function get300SearchedBinary
 *              Binary search: This algorithm works by repeatedly dividing the search interval in half, eliminating half of the remaining elements at each step.
 * @test yarn jest get300SearchedBinary.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get300SearchedBinary/get300SearchedBinary.test.ts"
 *    In debugging mode:
 *       node --inspect-brk get300SearchedBinary.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '$description',
    ({ description, params, options, paramsWithAssignedDate, expected }: Get300SearchedBinaryTestType) => {
      let getWithDate: ReturnType<typeof withAssignedDate> = get300SearchedBinary
      if (paramsWithAssignedDate && paramsWithAssignedDate.timestamp)
        getWithDate = withAssignedDate(paramsWithAssignedDate)(getWithDate)

      let output: ReturnType<typeof get300SearchedBinary> = getWithDate(params, options)
      consoler('get300SearchedBinary.test', { description, params, output })

      expect(output).toEqual(expected)
    }
  )
})
