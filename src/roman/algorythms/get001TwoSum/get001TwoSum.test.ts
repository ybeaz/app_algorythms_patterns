import { expect, describe, it } from '@jest/globals'
import { consoler } from 'yourails_common'
import { getDateWithTime } from 'yourails_common'
import { withAssignedDate } from 'yourails_common'

import { get001TwoSum } from './get001TwoSum'

type Get001TwoSumTestType = {
  description?: string
  params: Parameters<typeof get001TwoSum>[0]
  paramsWithAssignedDate?: { timestamp: number }
  options: Parameters<typeof get001TwoSum>[1]
  expected: ReturnType<typeof get001TwoSum>
}

/**
 * @prompt Context: Javascript chanllendge
 *         Question: Suggest unit test data to test the function with the description below
 *         Format: Follow the format of the array of test-objects below
 */

const tests: Get001TwoSumTestType[] = [
  {
    description: 'Basic case with one valid pair',
    params: { inputArr: [2, 7, 11, 15], target: 9 },
    options: {},
    expected: [0, 1],
  },
  {
    description: 'Pair in the middle',
    params: { inputArr: [1, 3, 4, 2], target: 6 },
    options: {},
    expected: [2, 3],
  },
  {
    description: 'Pair at the end',
    params: { inputArr: [1, 2, 3, 7, 8], target: 15 },
    options: {},
    expected: [3, 4],
  },
  {
    description: 'Pair at the beginning',
    params: { inputArr: [5, 5, 1, 2], target: 10 },
    options: {},
    expected: [0, 1],
  },
  {
    description: 'Duplicate values forming target',
    params: { inputArr: [3, 3], target: 6 },
    options: {},
    expected: [0, 1],
  },
  {
    description: 'Multiple duplicates, pick first valid pair',
    params: { inputArr: [3, 2, 4, 3], target: 6 },
    options: {},
    expected: [1, 2],
  },
  {
    description: 'Negative numbers',
    params: { inputArr: [-3, 4, 3, 90], target: 0 },
    options: {},
    expected: [0, 2],
  },
  {
    description: 'Mixed positive and negative',
    params: { inputArr: [-1, -2, -3, -4, 5], target: 1 },
    options: {},
    expected: [1, 4],
  },
  {
    description: 'Includes zero values',
    params: { inputArr: [0, 4, 3, 0], target: 0 },
    options: {},
    expected: [0, 3],
  },
  {
    description: 'No valid pair',
    params: { inputArr: [1, 2, 3], target: 10 },
    options: {},
    expected: null,
  },
  {
    description: 'Single element array',
    params: { inputArr: [1], target: 2 },
    options: {},
    expected: null,
  },
  {
    description: 'Empty array',
    params: { inputArr: [], target: 5 },
    options: {},
    expected: null,
  },
  {
    description: 'All elements same, valid pair',
    params: { inputArr: [2, 2, 2], target: 4 },
    options: {},
    expected: [0, 1],
  },
  {
    description: 'All elements same, no valid pair',
    params: { inputArr: [2, 2, 2], target: 5 },
    options: {},
    expected: null,
  },
  {
    description: 'Large numbers',
    params: { inputArr: [10000, 5000, 5000], target: 10000 },
    options: {},
    expected: [1, 2],
  },
  {
    description: 'Pair requires skipping earlier duplicate',
    params: { inputArr: [1, 5, 1, 5], target: 10 },
    options: {},
    expected: [1, 3],
  },
  {
    description: 'Target is zero with negatives and positives',
    params: { inputArr: [-5, -2, 2, 5], target: 0 },
    options: {},
    expected: [1, 2],
  },
  // {
  //   description: 'Large array performance case',
  //   params: { inputArr: Array.from({ length: 100000 }, (_, i) => i), target: 199997 },
  //   options: {},
  //   expected: [99998, 99999],
  // },
  // {
  //   description: 'Large array no solution',
  //   params: { inputArr: Array.from({ length: 100000 }, (_, i) => i), target: 200000 },
  //   options: {},
  //   expected: null,
  // },
]

/**
 * @Description Test to challenge function get001TwoSum: Array Target Sum Coding Challenge
 *              In this challenge we need to find indexes of array elements that can produce the target sum
 * @test yarn jest get001TwoSum.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get001TwoSum/get001TwoSum.ts"
 *    In debugging mode:
 *       node --inspect-brk get001TwoSum.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '$description',
    ({ description, params, options, paramsWithAssignedDate, expected }: Get001TwoSumTestType) => {
      let getWithDate: ReturnType<typeof withAssignedDate> = get001TwoSum
      if (paramsWithAssignedDate && paramsWithAssignedDate.timestamp)
        getWithDate = withAssignedDate(paramsWithAssignedDate)(getWithDate)

      let output: ReturnType<typeof get001TwoSum> = getWithDate(params, options)
      consoler('get001TwoSum.test', { description, params, output })

      expect(output).toEqual(expected)
    }
  )
})
