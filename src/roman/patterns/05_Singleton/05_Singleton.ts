/**
 * @description Pattern: The Singleton Pattern limits the number of instances of a particular object to just one.
 * @narrative The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is often used when there is a need to limit the number of instances of a particular object to just one. Here are some common use cases for applying the Singleton Pattern:

      Database Connection Pooling:

      Scenario: In scenarios where multiple parts of an application require access to a shared database connection pool.
      Use Case: The Singleton Pattern can be used to create a single instance of a database connection pool that can be shared across different components of an application, ensuring efficient use of resources.
      Logging:

      Scenario: In logging frameworks where a single logging instance is used to record log messages throughout the application.
      Use Case: The Singleton Pattern ensures that there is only one logging instance, centralizing log management and preventing unnecessary duplication of loggers.
      Configuration Management:

      Scenario: When there is a need to manage application configuration settings from a single point.
      Use Case: The Singleton Pattern can be applied to create a configuration manager that holds configuration settings for the entire application, providing a centralized point for configuration retrieval and modification.
      Resource Managers:

      Scenario: In scenarios where managing and coordinating access to a shared resource (e.g., a printer, network connection) is required.
      Use Case: The Singleton Pattern can be used to create a resource manager that ensures coordinated access to a shared resource, preventing conflicts and ensuring efficient utilization.
      Caching:

      Scenario: In caching scenarios where a single cache manager is responsible for caching and retrieving data.
      Use Case: The Singleton Pattern can be applied to create a cache manager that maintains a single instance of the cache, ensuring consistent caching behavior across the application.
      Thread Pooling:

      Scenario: When managing a shared pool of worker threads in a multithreaded application.
      Use Case: The Singleton Pattern can be used to create a thread pool manager that maintains a single instance of the thread pool, providing a centralized mechanism for thread allocation and management.
      GUI Components:

      Scenario: In graphical user interfaces where there is a need for a single point of control for managing GUI components.
      Use Case: The Singleton Pattern can be applied to create a GUI manager that oversees the creation and management of GUI components, ensuring consistency in the user interface.
      Device Drivers:

      Scenario: When a single instance of a device driver is sufficient to manage interactions with a hardware device.
      Use Case: The Singleton Pattern can be applied to create a device driver manager that maintains a single instance of the device driver, managing communication with the hardware device.
      Application State Management:

      Scenario: In scenarios where a centralized point for managing the application's state is required.
      Use Case: The Singleton Pattern can be used to create an application state manager that holds and manages the global state of the application, facilitating state access and modification.
      In these use cases, the Singleton Pattern provides a way to ensure that there is only one instance of a particular object, promoting centralized control, coordination, and efficient resource utilization in various scenarios.

      Singleton
      instance
      createInstance
      getInstance

 * @link https://www.dofactory.com/javascript/design-patterns/singleton
 * @command to run `yarn jest 05_Singleton.test`
 */

import { consoler } from 'yourails_common'

const getCreatedInstance = () => {
  return {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3',
  }
}

type GetSingletonParamsType = any

type GetSingletonOptionsType = { funcParent?: string }

type GetSingletonResType = any

interface GetSingletonType {
  (params: GetSingletonParamsType, options?: GetSingletonOptionsType): GetSingletonResType
}

const optionsDefault: Required<GetSingletonOptionsType> = {
  funcParent: 'getSingleton',
}

/**
 * @description Pattern: The Singleton Pattern limits the number of instances of a particular object to just one.
 * @narrative The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance.
 * @import import { getSingleton } from './getSingleton'
 */
const getSingleton: GetSingletonType = () => {
  let instance: any = null
  return {
    getInstance: () => {
      if (!instance) {
        instance = getCreatedInstance()
      }
      return instance
    },
  }
}

export { getSingleton }
export type { GetSingletonParamsType, GetSingletonResType, GetSingletonOptionsType, GetSingletonType }

/**
 * @description Pattern: The Singleton Pattern limits the number of instances of a particular object to just one.
 * @narrative The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance.
 * @run npx tsx src/roman/patterns/05_Singleton/05_Singleton.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetSingletonParamsType
      options: GetSingletonOptionsType
      expected: GetSingletonResType
    }
    const examples: ExampleType[] = [{ description: '', params: {}, options: {}, expected: true }]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await getSingleton(params, options)
      const instance = await output.getInstance()

      new Array(6).fill(true).forEach((_: boolean, index: number) => {
        consoler(`getSingleton [120-${index}]`, {
          output,
          tested: JSON.stringify(instance) === JSON.stringify(output.getInstance()),
        })
      })
    })
    await Promise.all(promises)
  })()
}
