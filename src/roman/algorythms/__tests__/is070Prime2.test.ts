import { is070Prime2 } from '../is070Prime2'

/**
 * @Description Test to challenge function is070Prime2
 * @test yarn jest src/roman/algorythms/__tests__/is070Prime2.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/is070Prime2.ts"
 *    In debugging mode:
 *       node --inspect-brk is070Prime2.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('is070Prime2 function', () => {
  it('should return true for prime numbers', () => {
    expect(is070Prime2(2)).toBe(true)
    expect(is070Prime2(3)).toBe(true)
    expect(is070Prime2(5)).toBe(true)
    expect(is070Prime2(7)).toBe(true)
    expect(is070Prime2(11)).toBe(true)
  })

  it('should return false for non-prime numbers', () => {
    expect(is070Prime2(1)).toBe(false)
    expect(is070Prime2(4)).toBe(false)
    expect(is070Prime2(6)).toBe(false)
    expect(is070Prime2(8)).toBe(false)
    expect(is070Prime2(9)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(is070Prime2('hello')).toBe(false) // This test will fail because of the bug in the is070Prime2 function
    // @ts-expect-error
    expect(is070Prime2(null)).toBe(false)
  })
})
