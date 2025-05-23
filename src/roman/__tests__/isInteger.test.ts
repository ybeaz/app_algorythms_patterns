import { isInteger } from '../isInteger'

/**
 * @Description Test to challenge function isInteger
 * @test yarn jest src/roman/__tests__/isInteger.test.ts --coverage --collectCoverageFrom="src/roman/isInteger.ts"
 *    In debugging mode:
 *       node --inspect-brk isInteger.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('isInteger function', () => {
  it('should return true for integer numbers', () => {
    expect(isInteger(10)).toBe(true)
    expect(isInteger(-10)).toBe(true)
    expect(isInteger(0)).toBe(true)
  })

  it('should return false for non-integer numbers', () => {
    expect(isInteger(10.5)).toBe(false)
    expect(isInteger(-10.5)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(isInteger('hello')).toBe(false)
    // @ts-expect-error
    expect(isInteger(null)).toBe(false)
    // @ts-expect-error
    expect(isInteger(undefined)).toBe(false)
  })
})
