import { isPrime2 } from '../isPrime2'

/**
 * @Description Test to challenge function isPrime2
 * @test yarn jest src/roman/__tests__/isPrime2.test.ts --coverage --collectCoverageFrom="src/roman/isPrime2.ts"
 *    In debugging mode:
 *       node --inspect-brk isPrime2.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('isPrime2 function', () => {
  it('should return true for prime numbers', () => {
    expect(isPrime2(2)).toBe(true)
    expect(isPrime2(3)).toBe(true)
    expect(isPrime2(5)).toBe(true)
    expect(isPrime2(7)).toBe(true)
    expect(isPrime2(11)).toBe(true)
  })

  it('should return false for non-prime numbers', () => {
    expect(isPrime2(1)).toBe(false)
    expect(isPrime2(4)).toBe(false)
    expect(isPrime2(6)).toBe(false)
    expect(isPrime2(8)).toBe(false)
    expect(isPrime2(9)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(isPrime2('hello')).toBe(false) // This test will fail because of the bug in the isPrime2 function
    // @ts-expect-error
    expect(isPrime2(null)).toBe(false)
  })
})
