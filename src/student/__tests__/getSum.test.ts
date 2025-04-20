import { getSum, GetSumParamsType, GetSumOptionsType, GetSumResType } from '../algorythms/getSum'

type GetSumTestType = {
  params: GetSumParamsType
  options: GetSumOptionsType
  expected: GetSumResType
}

const tests: GetSumTestType[] = [{ params: { a: 1, b: 3 }, options: {}, expected: 4 }]

/**
 * @Description Test to challenge function getSum
 * @test yarn jest getSum.test.ts --coverage --collectCoverageFrom="src/student/algorythms/getSum.ts"
 * @test yarn jest getPathNextTask.test.ts --coverage --collectCoverageFrom="src/Shared/getPathNextTask.ts"
 *    In debugging mode:
 *       node --inspect-brk getSum.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getSum.test', ({ params, options, expected }) => {
    let output: GetSumResType = getSum(params, options)
    console.info('getSum.test', { output })

    expect(output).toEqual(expected)
  })
})
