/**
 * @description Pattern: Builder Separates object construction from its representation
 * @narrative The Builder pattern is a creational design pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations. Here are some use cases for applying the Builder pattern:

      Complex Object Construction:

      Scenario: When an object needs to be constructed with numerous parts or configurations.
      Use Case: The Builder pattern is suitable when creating complex objects with many optional components or configurations, and when the construction process involves multiple steps.
      Step-by-Step Construction:

      Scenario: In situations where an object is built step by step, and each step may involve different variations.
      Use Case: The Builder pattern helps in constructing objects where different steps or methods are involved, and the order of execution matters.
      Immutable Objects:

      Scenario: When designing immutable objects that cannot be modified after creation.
      Use Case: The Builder pattern is useful for creating immutable objects where each method call on the builder returns a new builder instance with the added configuration, leading to a fluent and expressive API.
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
      Use Case: The Builder pattern offers a cleaner alternative to telescopic constructors by providing a dedicated builder class with fluent methods for configuration.
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

type GetTemplateFuncParamsType = any

type GetTemplateFuncOptionsType = { funcParent?: string }

type GetTemplateFuncResType = any

interface GetTemplateFuncType {
  (params: GetTemplateFuncParamsType, options?: GetTemplateFuncOptionsType): GetTemplateFuncResType
}

const optionsDefault: Required<GetTemplateFuncOptionsType> = {
  funcParent: 'getTemplateFunc',
}

/**
 * @description Function to getTemplateFunc
 * @import import {
    getTemplateFunc,
    GetTemplateFuncParamsType,
    GetTemplateFuncResType 
  } from './getTemplateFunc'
 */

const getTemplateFunc: GetTemplateFuncType = (
  params: GetTemplateFuncParamsType,
  options: GetTemplateFuncOptionsType = optionsDefault
) => {
  return ''
}

export { getTemplateFunc }
export type { GetTemplateFuncParamsType, GetTemplateFuncResType, GetTemplateFuncOptionsType, GetTemplateFuncType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getTemplateFunc.ts
 * @test yarn jest getTemplateFunc.test.ts --coverage --collectCoverageFrom="src/Shared/getTemplateFunc.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: GetTemplateFuncParamsType
      options: GetTemplateFuncOptionsType
      expected: GetTemplateFuncResType
    }
    const examples: ExampleType[] = [{ params: {}, options: {}, expected: '' }]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const output = await getTemplateFunc(params, options)
      consoler(`getTemplateFunc [61-${index}]`, {
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
