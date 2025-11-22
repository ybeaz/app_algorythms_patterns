/**
 * @description Pattern: Builder Separates object construction from its representation by specifying construction steps
 * @narrative The Builder pattern is a creational design pattern that provides contruction steps and separates a complex object from its representation, allowing the same construction process to create different representations. Here are some use cases for applying the Builder pattern:

      Complex Object Construction:

      Scenario: When an object needs to be constructed with numerous parts or configurations.
      Use Case: The Builder pattern is suitable when creating complex objects with many optional components or configurations, and when the construction process involves multiple steps.
      Step-by-Step Construction:

      Scenario: In situations where an object is built step by step, and each step may involve different variations.
      Use Case: The Builder pattern helps in constructing objects where different steps or methods are involved, and the order of execution matters.
      Immutable Objects:

      Scenario: When designing immutable objects that cannot be modified after creation.
      Use Case: The Builder pattern is useful for creating immutable objects where each method call on the getBuilder returns a new getBuilder instance with the added configuration, leading to a fluent and expressive API.
      Configuration with Defaults:

      Scenario: When configuring an object with many optional parameters, and default values are applicable.
      Use Case: The Builder pattern allows setting only the desired parameters, relying on default values for the rest, resulting in cleaner and more readable code.
      Variability in Object Representation:

      Scenario: When there are multiple ways to represent or configure an object.
      Use Case: The Builder pattern accommodates different representations of an object by providing specific builders for each representation, enhancing flexibility and maintainability.
      Product Variants:

      Scenario: In scenarios where there are multiple product variants with shared and variant-specific features.
      Use Case: The Builder pattern can be used to create builders for each product variant, with shared building steps and variant-specific steps, providing a consistent way to construct different product variants.
      Dynamic Object Construction:

      Scenario: When the construction of an object needs to be determined dynamically based on certain conditions.
      Use Case: The Builder pattern allows for dynamic selection of builders based on runtime conditions, providing flexibility in object construction.
      Telescopic Constructor Anti-Pattern:

      Scenario: When there is a risk of creating constructors with numerous parameters (telescopic constructors) leading to readability and maintenance issues.
      Use Case: The Builder pattern offers a cleaner alternative to telescopic constructors by providing a dedicated getBuilder class with fluent methods for configuration.
      Test Data Generation:

      Scenario: In testing scenarios where different instances of an object need to be created with varying configurations.
      Use Case: The Builder pattern is valuable for creating test data with different configurations without the need for multiple constructors or complex setup methods.
      In summary, the Builder pattern is useful in scenarios where the construction of an object involves multiple steps, optional configurations, and different representations. It promotes separation of concerns and encapsulates the construction process, resulting in more maintainable and flexible code.

      Shop
      construct

      CarBuilder
      car
      step1
      step2
      get

      TruckBuilder
      truck
      step1
      step2
      get

      Car
      doors
      addParts
      say

      Truck
      doors
      addParts
      say

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 02_Builder.test`
 */

import { consoler } from 'yourails_common'

type GetCarBuilderParamsType = any

type GetCarBuilderOptionsType = { funcParent?: string }

type GetCarBuilderResType = any

interface GetCarBuilderType {
  (params: GetCarBuilderParamsType, options?: GetCarBuilderOptionsType): GetCarBuilderResType
}

const optionsDefault: Required<GetCarBuilderOptionsType> = {
  funcParent: 'getCarBuilder',
}

/**
 * @description Pattern: Builder Separates object construction from its representation by specifying construction steps
 * @narrative The Builder pattern is a creational design pattern that provides contruction steps and separates a complex object from its representation, allowing the same construction process to create different representations.
 * @import import { getCarBuilder, getTruckBuilder, CONSTRUCTOR, getBuilder } from './02_Builder'
 */

const getCarBuilder: GetCarBuilderType = (
  { name }: GetCarBuilderParamsType,
  options: GetCarBuilderOptionsType = optionsDefault
) => {
  const car = {
    name,
    cabin: 0,
    trunk: 0,
    wheels: 0,
  }

  const step1 = () => {
    car.cabin = 1
  }

  const step2 = (n: number) => {
    car.trunk = n
  }

  const step3 = (n: number) => {
    car.wheels = n
  }

  const get = () => car

  return {
    name,
    step1,
    step2,
    step3,
    get,
  }
}

const getTruckBuilder: GetCarBuilderType = (
  { name }: GetCarBuilderParamsType,
  options: GetCarBuilderOptionsType = optionsDefault
) => {
  const car = {
    name,
    body: 0,
    trunk: 0,
    doors: 0,
    wheels: 0,
  }

  const step1 = () => {
    car.body = 1
    car.trunk = 1
  }

  const step2 = (n: number) => {
    car.doors = n
  }

  const step3 = (n: number) => {
    car.wheels = n
  }

  const get = () => car

  return {
    step1,
    step2,
    step3,
    get,
  }
}

const CONSTRUCTOR = {
  carBuilder: getCarBuilder,
  truckBuilder: getTruckBuilder,
}

type BuilderParamsType = {
  builderType: keyof typeof CONSTRUCTOR
  name: string
  step1Num: number
  step2Num: number
  step3Num: number
}

const getBuilder = ({ builderType, name, step1Num, step2Num, step3Num }: BuilderParamsType) => {
  const build = CONSTRUCTOR[builderType]({ name })
  build.step1(step1Num)
  build.step2(step2Num)
  build.step3(step3Num)

  return build.get()
}

export { getCarBuilder, getTruckBuilder, CONSTRUCTOR, getBuilder }
export type { GetCarBuilderParamsType, GetCarBuilderResType, GetCarBuilderOptionsType, GetCarBuilderType }

/**
 * @description Pattern: Builder Separates object construction from its representation by specifying construction steps
 * @narrative The Builder pattern is a creational design pattern that provides contruction steps and separates a complex object from its representation, allowing the same construction process to create different representations.
 * @run ts-node src/roman/patterns/02_Builder/02_Builder.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetCarBuilderParamsType
      options?: GetCarBuilderOptionsType
      expected: GetCarBuilderResType
    }
    const examples: ExampleType[] = [
      {
        description: 'carBuilder',
        params: {
          builderType: 'carBuilder',
          name: 'Chevrolet',
          step1Num: 1,
          step2Num: 4,
          step3Num: 4,
        },
        expected: { name: 'Chevrolet', cabin: 1, trunk: 4, wheels: 4 },
      },
      {
        description: 'truckBuilder',
        params: {
          builderType: 'truckBuilder',
          name: 'Scania',
          step1Num: 1,
          step2Num: 2,
          step3Num: 6,
        },
        expected: { name: 'Scania', body: 1, trunk: 1, doors: 2, wheels: 6 },
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, expected } = example

      const output = await getBuilder(params)
      consoler(`getCarBuilder [61-${index}]`, {
        description: '',
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
