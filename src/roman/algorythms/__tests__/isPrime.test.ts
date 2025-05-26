import { is070Prime } from '../is070Prime'

/**
 * @Description Test to challenge function is070Prime
 * @test yarn jest src/roman/algorythms/__tests__/is070Prime.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/is070Prime.ts"
 *    In debugging mode:
 *       node --inspect-brk is070Prime.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('is070Prime function', () => {
  it('should return true for prime numbers', () => {
    expect(is070Prime(2)).toBe(true)
    expect(is070Prime(3)).toBe(true)
    expect(is070Prime(5)).toBe(true)
    expect(is070Prime(7)).toBe(true)
    expect(is070Prime(11)).toBe(true)
  })

  it('should return false for non-prime numbers', () => {
    expect(is070Prime(1)).toBe(false)
    expect(is070Prime(4)).toBe(false)
    expect(is070Prime(6)).toBe(false)
    expect(is070Prime(8)).toBe(false)
    expect(is070Prime(9)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(is070Prime('hello')).toBe(false) // This test will fail because of the bug in the is070Prime function
    // @ts-expect-error
    expect(is070Prime(null)).toBe(false)
  })
})
