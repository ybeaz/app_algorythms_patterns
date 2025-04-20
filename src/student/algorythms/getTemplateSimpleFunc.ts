type GetTemplateSimpleFuncParamsType = any

type GetTemplateSimpleFuncOptionsType = { funcParent?: string }

type GetTemplateSimpleFuncResType = any

interface GetTemplateSimpleFuncType {
  (
    params: GetTemplateSimpleFuncParamsType,
    options?: GetTemplateSimpleFuncOptionsType
  ): GetTemplateSimpleFuncResType
}

const optionsDefault: Required<GetTemplateSimpleFuncOptionsType> = {
  funcParent: 'getTemplateSimpleFunc',
}

const resDefault: GetTemplateSimpleFuncResType = ''

/**
 * @description Function to getTemplateSimpleFunc
 * @run ts-node src/Shared/getTemplateSimpleFunc.ts
 * @import import { getTemplateSimpleFunc } from './getTemplateSimpleFunc'
 */

const getTemplateSimpleFunc: GetTemplateSimpleFuncType = (
  params: GetTemplateSimpleFuncParamsType,
  options?: GetTemplateSimpleFuncOptionsType
) => {
  return ''
}

export { getTemplateSimpleFunc }
export type {
  GetTemplateSimpleFuncParamsType,
  GetTemplateSimpleFuncOptionsType,
  GetTemplateSimpleFuncResType,
  GetTemplateSimpleFuncType,
}
