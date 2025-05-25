/**
 * @description Removes duplicate objects from an array by converting each object to a JSON string to ensure uniqueness.
 * @param arr - The array of objects to be filtered for unique entries.
 * @returns A new array containing only unique objects from the input array.
 */

export const getUniqArr = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) throw Error('Input is not an array')
  const arrToObj = arr.reduce((accum: any, item: any) => {
    if (!accum.hasOwnProperty(JSON.stringify(item))) accum[JSON.stringify(item)] = true
    return accum
  }, {})
  return Object.keys(arrToObj).map((item: string) => JSON.parse(item))
}
