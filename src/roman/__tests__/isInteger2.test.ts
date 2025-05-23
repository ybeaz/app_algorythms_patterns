import { isInteger2 } from '../isInteger2'

/**
 * @Description Test to challenge function isInteger2
 * @test yarn jest src/roman/__tests__/isInteger2.test.ts --coverage --collectCoverageFrom="src/roman/isInteger2.ts"
 *    In debugging mode:
 *       node --inspect-brk isInteger2.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('isInteger2 function', () => {
  it('should return true for integer numbers', () => {
    expect(isInteger2(10)).toBe(true)
    expect(isInteger2(-10)).toBe(true)
    expect(isInteger2(0)).toBe(true)
  })

  it('should return false for non-integer numbers', () => {
    expect(isInteger2(10.5)).toBe(false)
    expect(isInteger2(-10.5)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(isInteger2('hello')).toBe(false)
    // @ts-expect-error
    expect(isInteger2(null)).toBe(false)
    // @ts-expect-error
    expect(isInteger2(undefined)).toBe(false)
  })
})
