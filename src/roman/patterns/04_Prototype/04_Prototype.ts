/**
 * @description Pattern: PrototypeA fully initialized instance to be copied or cloned
 * @narrative The Prototype pattern is a creational design pattern that involves creating new objects by copying an existing object, known as the prototype. The prototype serves as a blueprint for creating new instances, allowing for the creation of fully initialized copies or clones. Here are some use cases for applying the Prototype pattern:

      Avoiding Costly Object Creation:

      Scenario: When creating a new instance of an object is more expensive than copying an existing instance.
      Use Case: The Prototype pattern helps in situations where object creation involves costly operations, and it's more efficient to clone an existing, fully initialized object.
      Dynamic Object Configuration:

      Scenario: When an object can have various configurations, and these configurations need to be dynamically applied.
      Use Case: The Prototype pattern allows for creating prototype instances with different configurations and dynamically cloning them to obtain instances with specific configurations.
      Immutable Objects:

      Scenario: When designing immutable objects, and the creation of modified instances is needed.
      Use Case: The Prototype pattern supports the creation of modified instances of immutable objects by providing a mechanism to clone an existing instance with some modifications.
      Prototype Registry/Catalog:

      Scenario: When a system maintains a catalog or registry of prototype instances.
      Use Case: The Prototype pattern is beneficial when there is a need to manage and retrieve prototype instances from a registry, facilitating the creation of new instances based on user requests or system requirements.
      Configurable Product Variants:

      Scenario: In scenarios where a product has different variants with shared and variant-specific features.
      Use Case: The Prototype pattern allows for creating prototype instances for each product variant, with shared and variant-specific features, and cloning them to produce specific product instances.
      Undo Mechanism in Applications:

      Scenario: When an application supports an undo mechanism that requires creating snapshots of the application state.
      Use Case: The Prototype pattern can be applied to create snapshots (prototypes) of the application state, and these snapshots can be cloned to restore the application to a previous state.
      Game Development:

      Scenario: In game development, where there is a need to create and manage different instances of game objects.
      Use Case: The Prototype pattern is useful for managing game object instances with different initializations or configurations, allowing for efficient cloning during gameplay.
      Document Copying:

      Scenario: In document editing applications where users can create copies of existing documents.
      Use Case: The Prototype pattern facilitates the creation of fully initialized copies of documents, allowing users to duplicate documents with ease.
      Multithreaded Environments:

      Scenario: In multithreaded environments where creating new objects might lead to race conditions or synchronization issues.
      Use Case: The Prototype pattern can be applied to create prototypes in a controlled, single-threaded environment, and clones of these prototypes can be used in multithreaded scenarios.
      In essence, the Prototype pattern is valuable when you want to create new instances by copying existing, fully initialized instances. It is particularly useful when object creation is resource-intensive or when dynamic configuration and modification of objects are required.

      CustomerPrototype
      proto
      clone

      Customer
      first, last, status

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 04_Prototype.test`
 */

import { consoler } from 'yourails_common'

const getCreatedObject = (nameFirst: string, nameLast: string, status: string) => {
  return {
    first: nameFirst,
    last: nameLast,
    status,
    // getHello: () => `Hello, my name is ${nameFirst} ${nameLast}.`,
  }
}

type GetPrototypeParamsType = { inputObj: any }

type GetPrototypeOptionsType = { funcParent?: string }

type GetPrototypeResType = any

interface GetPrototypeType {
  (inputObj: GetPrototypeParamsType): GetPrototypeResType
}

const optionsDefault: Required<GetPrototypeOptionsType> = {
  funcParent: 'getPrototype',
}

/**
 * @description Function to getPrototype
 * @import import { getPrototype } from './getPrototype'
 */

const getPrototype: GetPrototypeType = ({ inputObj }: GetPrototypeParamsType) => {
  return {
    cloneObj: () => structuredClone(inputObj),
  }
}

export { getPrototype }
export type { GetPrototypeParamsType, GetPrototypeResType, GetPrototypeOptionsType, GetPrototypeType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/04_Prototype/04_Prototype.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: [string, string, string]
      options: GetPrototypeOptionsType
      expected: GetPrototypeResType
    }
    const examples: ExampleType[] = [
      {
        description: 'Arrow function prototype',
        params: ['John', 'Smith', 'n/a'],
        options: {},
        expected: {
          first: 'John',
          last: 'Smith',
          status: 'n/a',
          // getHello: () => `Hello, my name is John Smith`
        },
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const inputObj = getCreatedObject(...params)
      const output = await getPrototype({ inputObj }).cloneObj()
      consoler(`getPrototype [61-${index}]`, {
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
