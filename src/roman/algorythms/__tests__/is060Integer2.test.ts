import { is060Integer2 } from '../is060Integer2'

/**
 * @Description Test to challenge function is060Integer2
 * @test yarn jest src/roman/algorythms/__tests__/is060Integer2.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/is060Integer2.ts"
 *    In debugging mode:
 *       node --inspect-brk is060Integer2.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('is060Integer2 function', () => {
  it('should return true for integer numbers', () => {
    expect(is060Integer2(10)).toBe(true)
    expect(is060Integer2(-10)).toBe(true)
    expect(is060Integer2(0)).toBe(true)
  })

  it('should return false for non-integer numbers', () => {
    expect(is060Integer2(10.5)).toBe(false)
    expect(is060Integer2(-10.5)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(is060Integer2('hello')).toBe(false)
    // @ts-expect-error
    expect(is060Integer2(null)).toBe(false)
    // @ts-expect-error
    expect(is060Integer2(undefined)).toBe(false)
  })
})
