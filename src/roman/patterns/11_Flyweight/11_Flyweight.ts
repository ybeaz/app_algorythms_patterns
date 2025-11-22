/**
 * @description A fine-grained instance used for efficient sharing
 * @narrative Flyweight pattern is a structural design pattern that aims to minimize memory usage or computational expenses by sharing as much as possible with related objects. The key idea is to use a shared object to represent multiple similar objects, rather than creating a new instance for each occurrence. The use cases for applying the Flyweight pattern often involve scenarios where there are a large number of similar objects, and memory or performance optimization is crucial. Here are some use cases for applying the Flyweight pattern:

      Text Editors and Word Processors:

      Scenario: In text editors or word processors, characters, fonts, and formatting attributes can be represented as flyweights.
      Use Case: Instead of creating a separate object for each character in a document, shared flyweights for common characters, fonts, and styles can be used to save memory.
      Graphics and GUI Systems:

      Scenario: In graphical applications, graphical elements like buttons, icons, and shapes often share common attributes.
      Use Case: Flyweights can be used to represent shared properties (e.g., color, size) across multiple graphical elements, reducing the memory footprint.
      Game Development:

      Scenario: In game development, objects like bullets, enemies, or particles may have common properties that can be shared.
      Use Case: Flyweights can be applied to represent shared properties of game objects, improving performance and reducing memory usage.
      Databases and Caching:

      Scenario: In scenarios where there are many instances of similar data, and memory optimization is crucial.
      Use Case: Flyweights can be used to represent shared data in a database or caching system, reducing the storage requirements and improving retrieval times.
      Network Protocol Implementation:

      Scenario: In cases where network protocol headers or structures have common fields.
      Use Case: Flyweights can be employed to represent shared information in protocol structures, optimizing memory usage in network-related operations.
      Resource Pooling:

      Scenario: When there is a need to manage and reuse a limited set of resources efficiently.
      Use Case: Flyweights can be used to represent reusable resources, such as database connections, threads, or other objects, in a resource pool.
      Document Object Model (DOM) in Web Development:

      Scenario: In web development, elements in the DOM tree often share properties such as styles.
      Use Case: Flyweights can be applied to represent shared styles or attributes across multiple DOM elements, optimizing the rendering process.
      In these use cases, the Flyweight pattern helps in achieving efficiency by minimizing the number of distinct objects created and shared commonalities among multiple instances. It is particularly useful in situations where the number of objects is large, and optimizing memory usage or performance is a priority.

      Flyweight
      make, model, processor

      FlyWeightFactory
      flyweights
      get
      getCount

      ComputerCollection
      computers
      count
      add
      get

      Computer
      make, model, processor, memory, tag

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 11_Flyweight.test` 
 */

import { consoler } from 'yourails_common'

type GetFlyweightParamsType = any

type GetFlyweightOptionsType = { funcParent?: string }

type GetFlyweightResType = any

interface GetFlyweightType {
  (params: GetFlyweightParamsType, options?: GetFlyweightOptionsType): GetFlyweightResType
}

const optionsDefault: Required<GetFlyweightOptionsType> = {
  funcParent: 'getFlyweight',
}

/**
 * @description Function to getFlyweight
 * @import import { getFlyweight } from './getFlyweight'
 */

const getFlyweight: GetFlyweightType = (
  params: GetFlyweightParamsType,
  options: GetFlyweightOptionsType = optionsDefault
) => {
  return ''
}

export { getFlyweight }
export type { GetFlyweightParamsType, GetFlyweightResType, GetFlyweightOptionsType, GetFlyweightType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/11_Flyweight/11_Flyweight.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetFlyweightParamsType
      options: GetFlyweightOptionsType
      expected: GetFlyweightResType
    }
    const examples: ExampleType[] = [{ description: '', params: {}, options: {}, expected: '' }]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const output = await getFlyweight(params, options)
      consoler(`getFlyweight [61-${index}]`, {
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
