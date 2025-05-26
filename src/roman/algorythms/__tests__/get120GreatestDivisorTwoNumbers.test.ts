// src/roman/algorythms/__tests__/get120GreatestDivisorTwoNumbers.test.ts
import { get120GreatestDivisorTwoNumbers } from '../get120GreatestDivisorTwoNumbers'

/**
 * @Description Test to challenge function get120GreatestDivisorTwoNumbers
 * @test yarn jest src/roman/algorythms/__tests__/get120GreatestDivisorTwoNumbers.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get120GreatestDivisorTwoNumbers.ts"
 *    In debugging mode:
 *       node --inspect-brk get120GreatestDivisorTwoNumbers.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('get120GreatestDivisorTwoNumbers function', () => {
  it('should return the greatest common divisor of two numbers', () => {
    expect(get120GreatestDivisorTwoNumbers(12, 18)).toBe(6)
    expect(get120GreatestDivisorTwoNumbers(24, 30)).toBe(6)
    expect(get120GreatestDivisorTwoNumbers(48, 18)).toBe(6)
  })

  it('should return 1 when the two numbers are coprime', () => {
    expect(get120GreatestDivisorTwoNumbers(11, 13)).toBe(1)
    expect(get120GreatestDivisorTwoNumbers(17, 23)).toBe(1)
  })

  it('should return the smaller number when one number is a multiple of the other', () => {
    expect(get120GreatestDivisorTwoNumbers(12, 24)).toBe(12)
    expect(get120GreatestDivisorTwoNumbers(18, 36)).toBe(18)
  })

  it('should return 1 when one of the numbers is 1', () => {
    expect(get120GreatestDivisorTwoNumbers(1, 12)).toBe(1)
    expect(get120GreatestDivisorTwoNumbers(12, 1)).toBe(1)
  })

  it('should return 1 when one of the numbers is 0', () => {
    expect(get120GreatestDivisorTwoNumbers(0, 12)).toBe(1)
    expect(get120GreatestDivisorTwoNumbers(12, 0)).toBe(1)
  })

  it('should throw an error when one of the numbers is not an integer', () => {
    expect(() => get120GreatestDivisorTwoNumbers(12, 3.5)).toThrow()
    expect(() => get120GreatestDivisorTwoNumbers(3.5, 12)).toThrow()
  })

  // it('should throw an error when one of the numbers is not a number', () => {
  //   // @ts-expect-error
  //   expect(() => get120GreatestDivisorTwoNumbers(12, 'hello')).toThrowError();
  //   // @ts-expect-error
  //   expect(() => get120GreatestDivisorTwoNumbers('hello', 12)).toThrowError();
  // });
})
