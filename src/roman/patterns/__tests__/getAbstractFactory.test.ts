import { consoler } from 'yourails_common'
import { getDateWithTime, GetDateWithTimeParamsType, GetDateWithTimeResType } from 'yourails_common'
import { withAssignedDate, WithAssignedDateParamsType, WithAssignedDateResType } from 'yourails_common'

import {
  getAbstractFactory,
  GetAbstractFactoryParamsType,
  GetAbstractFactoryOptionsType,
  GetAbstractFactoryResType,
} from '../01_Abstract_Factory/getAbstractFactory'

type GetAbstractFactoryTestType = {
  description?: string
  params: GetAbstractFactoryParamsType
  paramsWithAssignedDate?: { timestamp: number }
  options: GetAbstractFactoryOptionsType
  expected: GetAbstractFactoryResType
}

const tests: GetAbstractFactoryTestType[] = [
  {
    description: '',
    params: '',
    options: {},
    paramsWithAssignedDate: {
      timestamp: getDateWithTime({
        timestamp: +new Date('2025-09-21T08:09:11.100Z'),
        hh: 17,
        mm: 10,
        ss: 0,
      } as GetDateWithTimeParamsType),
    },
    expected: [
      { name: 'Joan DiSilva', rep: 'Employee: Joan DiSilva' },
      { name: "Tim O'Neill", rep: "Employee: Tim O'Neill" },
      { name: 'Gerald Watson', rep: 'Vendor: Gerald Watson' },
      { name: 'Nicole McNight', rep: 'Vendor: Nicole McNight' },
    ],
  },
]

/**
 * @Description Test to challenge function getAbstractFactory
 * @test yarn jest getAbstractFactory.test.ts --coverage --collectCoverageFrom="src/Shared/getAbstractFactory.ts"
 *    In debugging mode:
 *       node --inspect-brk getAbstractFactory.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('$description', ({ description, params, options, paramsWithAssignedDate, expected }) => {
    let getWithDate = getAbstractFactory
    if (paramsWithAssignedDate && paramsWithAssignedDate.timestamp) {
      getWithDate = withAssignedDate(paramsWithAssignedDate)(getWithDate)

      let output: GetAbstractFactoryResType = getWithDate(params, options)
      consoler('getAbstractFactory.test', { description, params, output })

      expect(output).toEqual(expected)
    }
  })
})
