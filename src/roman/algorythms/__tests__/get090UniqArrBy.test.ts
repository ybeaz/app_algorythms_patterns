import { get090UniqArrBy } from '../get090UniqArrBy'

/**
 * @Description Test to challenge function get090UniqArrBy
 * @test yarn jest src/roman/algorythms/__tests__/get090UniqArrBy.test.ts --coverage --collectCoverageFrom="src/roman/algorythms/get090UniqArrBy.ts"
 *    In debugging mode:
 *       node --inspect-brk get090UniqArrBy.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('get090UniqArrBy function', () => {
  it('should return an array with unique objects based on the provided properties', () => {
    const arr = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 10 },
      { class: 'first', fare: 'a', weight: 15 },
      { class: 'first', fare: 'a', weight: 17 },
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'first', fare: 'c', weight: 30 },
      { class: 'second', fare: 'b', weight: 22 },
    ]
    const props = ['class', 'fare']
    const expected = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 10 },
      { class: 'first', fare: 'a', weight: 15 },
      { class: 'first', fare: 'c', weight: 30 },
    ]
    expect(get090UniqArrBy(props, arr)).toEqual(expected)
  })

  it('should return an empty array when the input array is empty', () => {
    const arr: any[] = []
    const props = ['class', 'fare']
    const expected: any[] = []
    expect(get090UniqArrBy(props, arr)).toEqual(expected)
  })

  it('should return an array with unique objects when the properties are nested', () => {
    const arr = [
      { class: 'second', fare: { type: 'a' }, weight: 12 },
      { class: 'second', fare: { type: 'b' }, weight: 10 },
      { class: 'first', fare: { type: 'a' }, weight: 15 },
      { class: 'first', fare: { type: 'a' }, weight: 17 },
      { class: 'second', fare: { type: 'a' }, weight: 12 },
      { class: 'first', fare: { type: 'c' }, weight: 30 },
      { class: 'second', fare: { type: 'b' }, weight: 22 },
    ]
    const props = ['class', 'fare']
    const expected = [
      { class: 'second', fare: { type: 'a' }, weight: 12 },
      { class: 'second', fare: { type: 'b' }, weight: 10 },
      { class: 'first', fare: { type: 'a' }, weight: 15 },
      { class: 'first', fare: { type: 'c' }, weight: 30 },
    ]
    expect(get090UniqArrBy(props, arr)).toEqual(expected)
  })

  it('should throw an error when the input array is not an array', () => {
    const arr = 'not an array'
    const props = ['class', 'fare']
    // @ts-expect-error
    expect(() => get090UniqArrBy(props, arr)).toThrowError()
  })
})
