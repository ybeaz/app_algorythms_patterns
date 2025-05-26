import { is060Integer } from '../is060Integer'

/**
 * @Description Test to challenge function is060Integer
 * @test yarn jest src/roman/algorythms/__tests__/is060Integer.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/is060Integer.ts"
 *    In debugging mode:
 *       node --inspect-brk is060Integer.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('is060Integer function', () => {
  it('should return true for integer numbers', () => {
    expect(is060Integer(10)).toBe(true)
    expect(is060Integer(-10)).toBe(true)
    expect(is060Integer(0)).toBe(true)
  })

  it('should return false for non-integer numbers', () => {
    expect(is060Integer(10.5)).toBe(false)
    expect(is060Integer(-10.5)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(is060Integer('hello')).toBe(false)
    // @ts-expect-error
    expect(is060Integer(null)).toBe(false)
    // @ts-expect-error
    expect(is060Integer(undefined)).toBe(false)
  })
})
