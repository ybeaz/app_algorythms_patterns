import { isPrime } from '../isPrime'

/**
 * @Description Test to challenge function isPrime
 * @test yarn jest src/roman/__tests__/isPrime.test.ts --coverage --collectCoverageFrom="src/roman/isPrime.ts"
 *    In debugging mode:
 *       node --inspect-brk isPrime.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('isPrime function', () => {
  it('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(7)).toBe(true)
    expect(isPrime(11)).toBe(true)
  })

  it('should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false)
    expect(isPrime(4)).toBe(false)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(8)).toBe(false)
    expect(isPrime(9)).toBe(false)
  })

  it('should return false for non-numeric values', () => {
    // @ts-expect-error
    expect(isPrime('hello')).toBe(false) // This test will fail because of the bug in the isPrime function
    // @ts-expect-error
    expect(isPrime(null)).toBe(false)
  })
})
