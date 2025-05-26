import { get100AddedXTo5 } from '../get100AddedXTo5'

/**
 * @Description Test to challenge function get100AddedXTo5
 * @test yarn jest src/roman/algorythms/__tests__/get100AddedXTo5.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get100AddedXTo5.ts"
 *    In debugging mode:
 *       node --inspect-brk get100AddedXTo5.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('get100AddedXTo5 function', () => {
  it('should return the correct result for positive numbers', () => {
    expect(get100AddedXTo5(1)).toBe(6) // 1 + 5 = 6
    expect(get100AddedXTo5(2)).toBe(7) // 2 + 5 = 7
    expect(get100AddedXTo5(10)).toBe(15) // 10 + 5 = 15
  })

  it('should return the correct result for negative numbers', () => {
    expect(get100AddedXTo5(-1)).toBe(4) // -1 + 5 = 4
    expect(get100AddedXTo5(-2)).toBe(3) // -2 + 5 = 3
    expect(get100AddedXTo5(-10)).toBe(-5) // -10 + 5 = -5
  })

  it('should return the correct result for zero', () => {
    expect(get100AddedXTo5(0)).toBe(5) // 0 + 5 = 5
  })

  // it('should throw an error for non-numeric inputs', () => {
  //   // @ts-expect-error
  //   expect(() => get100AddedXTo5('hello')).toThrowError()
  //   // @ts-expect-error
  //   expect(() => get100AddedXTo5(null)).toThrowError()
  //   // @ts-expect-error
  //   expect(() => get100AddedXTo5(undefined)).toThrowError()
  // })
})
