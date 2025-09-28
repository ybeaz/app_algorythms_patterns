/**
 * @description Abstract Factory Creates an instance of several families of classes
 * @narrative
      The Abstract Factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It involves multiple factory methods, each responsible for creating a different kind of object, forming a family of related objects. Here are some use cases for applying the Abstract Factory pattern:

      GUI Libraries:

      Scenario: In graphical user interface (GUI) libraries where different components (buttons, text fields, windows) need to be created to match the look and feel of a specific operating system.
      Use Case: The Abstract Factory pattern allows the creation of families of GUI components tailored to a particular operating system, ensuring consistency in the appearance and behavior of the components.
      Database Drivers:

      Scenario: In database access libraries where different database drivers need to be created for various database management systems (DBMS).
      Use Case: The Abstract Factory pattern enables the creation of families of database-related objects (connections, queries) specific to each DBMS, ensuring compatibility and optimal performance.
      Operating System Portability:

      Scenario: When developing software that needs to run on multiple operating systems.
      Use Case: The Abstract Factory pattern allows the creation of families of objects (file system access, threading) adapted to the features and requirements of each operating system.
      UI Themes in Web Development:

      Scenario: In web development where different UI themes or styles need to be applied based on user preferences.
      Use Case: The Abstract Factory pattern allows the creation of families of UI elements (buttons, colors, fonts) that collectively form a specific theme, providing a consistent visual experience.
      Vehicle Manufacturing:

      Scenario: In manufacturing systems where different families of vehicles (cars, motorcycles, bicycles) need to be produced.
      Use Case: The Abstract Factory pattern can be applied to create families of objects (engines, wheels, chassis) specific to each type of vehicle, ensuring compatibility and consistency.
      Game Development:

      Scenario: In game development where different game platforms require unique sets of objects (characters, environments, weapons).
      Use Case: The Abstract Factory pattern allows the creation of families of game-related objects tailored to each platform, ensuring optimal performance and compatibility.
      Document Editors:

      Scenario: In document editors where different document types (text documents, spreadsheets) have specific formatting and editing components.
      Use Case: The Abstract Factory pattern can be applied to create families of objects (text formatting tools, data entry components) specific to each document type.
      Meal Ordering System:

      Scenario: In a meal ordering system where different types of meals (breakfast, lunch, dinner) have specific sets of dishes and serving items.
      Use Case: The Abstract Factory pattern allows the creation of families of objects (dishes, utensils, napkins) specific to each type of meal.
      In each of these use cases, the Abstract Factory pattern facilitates the creation of families of related objects, ensuring that the objects within a family are compatible and work seamlessly together. This pattern promotes the principle of providing an interface for creating families of related or dependent objects without specifying their concrete classes, allowing for flexibility and adaptability in the design.
 
      Employee
      name
      say

      EmployeeFactory
      create

      Vendor
      name
      say

      VendorFactory
      create

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 01_Abstract_Factory.test`
 */

import { consoler } from 'yourails_common'

type GetEmployeeVendorParamsType = {
  name: string
  type: 'employee' | 'vendor'
}

type GetEmployeeVendorOptionsType = { funcParent?: string }

type GetEmployeeVendorResType = any

interface GetEmployeeVendorType {
  (params: GetEmployeeVendorParamsType, options?: GetEmployeeVendorOptionsType): GetEmployeeVendorResType
}

const optionsDefault: Required<GetEmployeeVendorOptionsType> = {
  funcParent: 'getEmployee',
}

const resDefault: GetEmployeeVendorResType = ''

/**
 * @description Abstract Factory Creates an instance of several families of classes
 * @narrative The Abstract Factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It involves multiple factory methods, each responsible for creating a different kind of object, forming a family of related objects. Here are some use cases for applying the Abstract Factory pattern:
 * @import import {
    getEmployee,
    GetEmployeeVendorParamsType,
    GetEmployeeVendorResType 
  } from './getEmployee'
 */

const getEmployee: GetEmployeeVendorType = (
  params: GetEmployeeVendorParamsType,
  options: GetEmployeeVendorOptionsType = optionsDefault
) => {
  return {
    name: params.name,
    report: () => ({ name: params.name, report: `Employee: ${params.name}` }), //`Employee: ${params.name}`,
  }
}

const getVendor: GetEmployeeVendorType = (
  params: GetEmployeeVendorParamsType,
  options: GetEmployeeVendorOptionsType = optionsDefault
) => {
  return {
    report: () => ({ name: params.name, report: `Vendor: ${params.name}` }),
  }
}

type GetAppliedFactoryParamsType = {
  func: Function
} & GetEmployeeVendorParamsType

const getAppliedFactory = (): any => {
  let num = 0

  const setNum = () => {
    num += 1
    consoler('getAbstractFactory [116]', { num })
    return
  }

  const staff: any[] = []
  consoler('getAbstractFactory [121]', { num })
  return {
    getNum: () => num,
    create: ({ func, ...restParams }: GetAppliedFactoryParamsType) => {
      setNum()
      staff.push(func(restParams).report())
    },
    getRead: () => staff,
  }
}

export { getEmployee }
export type { GetEmployeeVendorParamsType, GetEmployeeVendorResType, GetEmployeeVendorOptionsType, GetEmployeeVendorType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/01_Abstract_Factory/getAbstractFactory.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: any // GetEmployeeVendorParamsType
      options: GetEmployeeVendorOptionsType
      expectedFactoryRead: GetEmployeeVendorResType
      expectedNum: number
    }

    const factory = getAppliedFactory()
    factory.create({
      func: getEmployee,
      name: 'Joan DiSilva',
    })
    factory.create({
      func: getEmployee,
      name: "Tim O'Neill",
    })
    factory.create({
      func: getVendor,
      name: 'Gerald Watson',
    })
    factory.create({
      func: getVendor,
      name: 'Nicole McNight',
    })

    const examples: ExampleType[] = [
      {
        params: {},
        options: {},
        expectedFactoryRead: [
          { name: 'Joan DiSilva', report: 'Employee: Joan DiSilva' },
          { name: "Tim O'Neill", report: "Employee: Tim O'Neill" },
          { name: 'Gerald Watson', report: 'Vendor: Gerald Watson' },
          { name: 'Nicole McNight', report: 'Vendor: Nicole McNight' },
        ],
        expectedNum: 4,
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, expectedFactoryRead, expectedNum } = example

      const factoryRead = await factory.getRead()
      consoler(`getEmployee [61-${index}]`, {
        params,
        expectedFactoryRead,
        factoryRead,
        expectedNum,
        factoryNum: factory.getNum(),
        tested: JSON.stringify(factoryRead) === JSON.stringify(expectedFactoryRead),
        testedNum: JSON.stringify(factory.getNum()) === JSON.stringify(expectedNum),
      })
    })
    await Promise.all(promises)
  })()
}
