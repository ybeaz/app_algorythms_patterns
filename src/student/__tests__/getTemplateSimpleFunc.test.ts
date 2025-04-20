import {
  getTemplateSimpleFunc,
  GetTemplateSimpleFuncParamsType,
  GetTemplateSimpleFuncOptionsType,
  GetTemplateSimpleFuncResType,
} from '../algorythms/getTemplateSimpleFunc'

type GetTemplateSimpleFuncTestType = {
  params: GetTemplateSimpleFuncParamsType
  options: GetTemplateSimpleFuncOptionsType
  expected: GetTemplateSimpleFuncResType
}

const tests: GetTemplateSimpleFuncTestType[] = [{ params: '', options: {}, expected: '' }]

/**
 * @Description Test to challenge function getTemplateSimpleFunc
 * @test yarn jest getTemplateSimpleFunc.test.ts --coverage --collectCoverageFrom="src/student/algorythms/getTemplateSimpleFunc.ts"
 *    In debugging mode:
 *       node --inspect-brk getTemplateSimpleFunc.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getTemplateSimpleFunc.test', ({ params, options, expected }) => {
    let output: GetTemplateSimpleFuncResType = getTemplateSimpleFunc(params, options)
    console.info('getTemplateSimpleFunc.test', { output })

    expect(output).toEqual(expected)
  })
})
