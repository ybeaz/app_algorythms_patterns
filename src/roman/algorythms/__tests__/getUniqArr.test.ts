import { get080UniqArr } from '../get080UniqArr'

/**
 * @Description Test to challenge function isInteger
 * @test yarn jest src/roman/algorythms/__tests__/get080UniqArr.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get080UniqArr.ts"
 *    In debugging mode:
 *       node --inspect-brk isInteger.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

describe('get080UniqArr function', () => {
  it('should return an empty array when input array is empty', () => {
    const input: any[] = []
    const expected: any[] = []
    expect(get080UniqArr(input)).toEqual(expected)
  })

  it('should return an array with unique objects', () => {
    const input = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Bob' },
    ]
    const expected = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ]
    expect(get080UniqArr(input)).toEqual(expected)
  })

  it('should return an array with unique objects when objects have different properties', () => {
    const input = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 1, name: 'John', age: 30 },
      { id: 3, name: 'Bob', age: 40 },
    ]
    const expected = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 40 },
    ]
    expect(get080UniqArr(input)).toEqual(expected)
  })

  it('should return an array with unique objects when objects have nested properties', () => {
    const input = [
      { id: 1, name: 'John', address: { street: '123 Main St' } },
      { id: 2, name: 'Jane', address: { street: '456 Elm St' } },
      { id: 1, name: 'John', address: { street: '123 Main St' } },
      { id: 3, name: 'Bob', address: { street: '789 Oak St' } },
    ]
    const expected = [
      { id: 1, name: 'John', address: { street: '123 Main St' } },
      { id: 2, name: 'Jane', address: { street: '456 Elm St' } },
      { id: 3, name: 'Bob', address: { street: '789 Oak St' } },
    ]
    expect(get080UniqArr(input)).toEqual(expected)
  })

  it('should throw an error when input is not an array', () => {
    const input = 'not an array'
    // @ts-expect-error
    expect(() => get080UniqArr(input)).toThrowError()
  })

  it('should return unique values for array with numbers and strings', () => {
    const input = [1, 2, 1, 'min', 'max', 'max', 'min']
    const expected = [1, 2, 'min', 'max']
    expect(get080UniqArr(input)).toEqual(expected)
  })

  it('should return unique values for array with numbers, null, and empty strings', () => {
    const input = [0, null, null, 0, -1, '', '', -1]
    const expected = [0, null, -1, '']
    expect(get080UniqArr(input)).toEqual(expected)
  })
})
