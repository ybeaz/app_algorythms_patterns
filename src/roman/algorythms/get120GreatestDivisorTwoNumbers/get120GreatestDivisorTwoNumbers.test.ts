// @ts-nocheck

import { consoler } from 'yourails_common'
import { getDateWithTime } from 'yourails_common'
import { withAssignedDate } from 'yourails_common'

import { get120GreatestDivisorTwoNumbers } from './get120GreatestDivisorTwoNumbers'

type Get120GreatestDivisorTwoNumbersTestType = {
  description?: string
  params: Parameters<typeof get120GreatestDivisorTwoNumbers>[0]
  paramsWithAssignedDate?: { timestamp: number }
  options: Parameters<typeof get120GreatestDivisorTwoNumbers>[1]
  expected: ReturnType<typeof get120GreatestDivisorTwoNumbers>
}

/**
 * @prompt Context: Javascript chanllendge
 *         Question: Suggest unit test data to test the function with the description below
 *         Format: Follow the format of the array of test-objects below
 */

const tests: Get120GreatestDivisorTwoNumbersTestType[] = [
  { description: 'both numbers are positive and co-prime', params: { numA: 7, numB: 13 }, options: {}, expected: 1 },

  { description: 'both numbers are equal', params: { numA: 10, numB: 10 }, options: {}, expected: 10 },

  { description: 'one number is zero (A=0)', params: { numA: 0, numB: 5 }, options: {}, expected: 5 },

  { description: 'one number is zero (B=0)', params: { numA: 9, numB: 0 }, options: {}, expected: 9 },

  { description: 'both numbers are zero (edge case)', params: { numA: 0, numB: 0 }, options: {}, expected: 0 },

  { description: 'one number divides the other', params: { numA: 12, numB: 36 }, options: {}, expected: 12 },

  { description: 'common divisor greater than 1', params: { numA: 18, numB: 24 }, options: {}, expected: 6 },

  {
    description: 'large numbers with common divisor',
    params: { numA: 1000000, numB: 500000 },
    options: {},
    expected: 500000,
  },

  { description: 'prime numbers (no common divisor except 1)', params: { numA: 17, numB: 19 }, options: {}, expected: 1 },

  { description: 'negative numbers (both negative)', params: { numA: -8, numB: -12 }, options: {}, expected: 4 },

  { description: 'mixed sign numbers', params: { numA: -15, numB: 20 }, options: {}, expected: 5 },

  {
    description: 'one negative, one positive with no common divisor',
    params: { numA: -7, numB: 3 },
    options: {},
    expected: 1,
  },

  { description: 'small numbers', params: { numA: 2, numB: 4 }, options: {}, expected: 2 },

  { description: 'coprime larger numbers', params: { numA: 35, numB: 64 }, options: {}, expected: 1 },

  { description: 'both numbers are 1', params: { numA: 1, numB: 1 }, options: {}, expected: 1 },
]

/**
 * @Description Test to challenge function get120GreatestDivisorTwoNumbers
 * @test yarn jest get120GreatestDivisorTwoNumbers.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get120GreatestDivisorTwoNumbers/get120GreatestDivisorTwoNumbers.ts"
 *    In debugging mode:
 *       node --inspect-brk get120GreatestDivisorTwoNumbers.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '$description',
    ({ description, params, options, paramsWithAssignedDate, expected }: Get120GreatestDivisorTwoNumbersTestType) => {
      let getWithDate: ReturnType<typeof withAssignedDate> = get120GreatestDivisorTwoNumbers
      if (paramsWithAssignedDate && paramsWithAssignedDate.timestamp)
        getWithDate = withAssignedDate(paramsWithAssignedDate)(getWithDate)

      let output: ReturnType<typeof get120GreatestDivisorTwoNumbers> = getWithDate(params, options)
      consoler('get120GreatestDivisorTwoNumbers.test', { description, params, output })

      expect(output).toEqual(expected)
    }
  )
})
