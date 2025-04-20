type GetSumParamsType = {
  a: number
  b: number
}

type GetSumOptionsType = { funcParent?: string }

type GetSumResType = number

interface GetSumType {
  (params: GetSumParamsType, options?: GetSumOptionsType): GetSumResType
}

const optionsDefault: Required<GetSumOptionsType> = {
  funcParent: 'getSum',
}

const resDefault: GetSumResType = 0

/**
 * @description Function to getSum
 * @run ts-node src/Shared/getSum.ts
 * @import import { getSum } from './getSum'
 */

const getSum: GetSumType = (params: GetSumParamsType, options?: GetSumOptionsType) => {
  const { a, b } = params
  return a + b
}

export { getSum }
export type { GetSumParamsType, GetSumOptionsType, GetSumResType, GetSumType }
