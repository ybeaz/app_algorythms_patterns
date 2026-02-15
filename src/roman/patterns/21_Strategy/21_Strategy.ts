/**
 * @description Pattern: Strategy Encapsulates an algorithm inside a class
 * @narrative The Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. Here are some common use cases for applying the Strategy Pattern:

      Sorting Algorithms:

      Scenario: When dealing with collections of data that may need to be sorted in different ways.
      Use Case: The Strategy Pattern can be applied to encapsulate sorting algorithms (e.g., quicksort, mergesort) into separate strategy classes. The context object can then use different sorting strategies interchangeably.
      Payment Processing:

      Scenario: When implementing payment processing systems with multiple payment methods.
      Use Case: The Strategy Pattern is useful for encapsulating different payment processing algorithms. Each payment method (e.g., credit card, PayPal) can be implemented as a separate strategy, and the system can switch between strategies.
      Compression Algorithms:

      Scenario: When working with data compression and different compression algorithms.
      Use Case: The Strategy Pattern can be applied to encapsulate compression algorithms (e.g., gzip, zip) into separate strategy classes. The choice of compression algorithm can be dynamically changed.
      Image Processing:

      Scenario: When implementing image processing applications with various filters and transformations.
      Use Case: The Strategy Pattern can be used to encapsulate image processing algorithms (e.g., blur, sharpen, grayscale) into separate strategy classes. The application can switch between different image processing strategies.
      Routing in Navigation Systems:

      Scenario: When designing navigation systems that need to calculate routes based on different criteria.
      Use Case: The Strategy Pattern can be applied to encapsulate route calculation algorithms (e.g., shortest path, fastest route) into separate strategy classes. The navigation system can choose the appropriate strategy based on user preferences.
      Dynamic Pricing in E-commerce:

      Scenario: When implementing dynamic pricing strategies for products in an e-commerce platform.
      Use Case: The Strategy Pattern can be used to encapsulate pricing algorithms (e.g., discount percentage, tiered pricing) into separate strategy classes. The system can switch between pricing strategies based on business rules.
      Authentication Mechanisms:

      Scenario: When developing systems with different authentication mechanisms.
      Use Case: The Strategy Pattern can be applied to encapsulate authentication algorithms (e.g., username/password, OAuth) into separate strategy classes. The system can choose the appropriate authentication strategy.
      Search Algorithms:

      Scenario: When implementing search functionality in applications with different search algorithms.
      Use Case: The Strategy Pattern can be used to encapsulate search algorithms (e.g., linear search, binary search) into separate strategy classes. The application can switch between search strategies based on requirements.
      Data Validation:

      Scenario: When performing data validation with different validation rules.
      Use Case: The Strategy Pattern can be applied to encapsulate validation algorithms (e.g., email validation, length validation) into separate strategy classes. The validation process can dynamically select the appropriate strategy.
      Load Balancing in Networking:

      Scenario: When designing systems with load balancing mechanisms.
      Use Case: The Strategy Pattern can be used to encapsulate load balancing algorithms (e.g., round-robin, least connections) into separate strategy classes. The system can switch between load balancing strategies based on network conditions.
      Simulation Systems:

      Scenario: When building simulation systems that model different scenarios.
      Use Case: The Strategy Pattern can be applied to encapsulate simulation algorithms (e.g., weather simulation, traffic simulation) into separate strategy classes. The system can switch between simulation strategies.
      Text Editors with Formatting Options:

      Scenario: When developing text editors with various formatting options.
      Use Case: The Strategy Pattern can be used to encapsulate text formatting algorithms (e.g., bold, italic, underline) into separate strategy classes. Users can switch between formatting strategies.
      In summary, the Strategy Pattern is beneficial in situations where there are multiple algorithms or behaviors that may need to be applied interchangeably. It allows these algorithms to be encapsulated in separate strategy classes, promoting flexibility and maintainability in the system.

      Shipping
      company

      Shipping
      setStrategy
      company
      calculate

      UPS
      USPS
      Fedex
      calculate

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 21_Strategy.test`
 */

import { consoler } from 'yourails_common'

const getUPS = () => {
  return {
    calculate: () => 45,
  }
}

const getUSPS = () => {
  return {
    calculate: () => 50,
  }
}

const getFedex = () => {
  return {
    calculate: () => 55,
  }
}

type GetStrategyParamsType = any

type GetStrategyOptionsType = { funcParent?: string }

type GetStrategyResType = any

interface GetStrategyType {
  (param?: GetStrategyParamsType, options?: GetStrategyOptionsType): GetStrategyResType
}

const optionsDefault: Required<GetStrategyOptionsType> = {
  funcParent: 'getStrategy',
}

/**
 * @description Function to getStrategy
 * @import import { getStrategy } from './getStrategy'
 */

type StrategyType = {
  calculate: () => number
}

const getStrategy: GetStrategyType = (params?: GetStrategyParamsType, options?: GetStrategyOptionsType) => {
  let strategy: StrategyType = {
    calculate: () => 0,
  }
  return {
    setStrategy: (strategyIn: StrategyType) => {
      strategy = strategyIn
    },
    calculate: () => {
      return strategy.calculate()
    },
  }
}

export { getStrategy }
export type { GetStrategyParamsType, GetStrategyResType, GetStrategyOptionsType, GetStrategyType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/21_Strategy/21_Strategy.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetStrategyParamsType
      options: GetStrategyOptionsType
      expected: GetStrategyResType
    }
    const examples: ExampleType[] = [
      { description: 'stratefy example with UPS', params: { company: getUPS }, options: {}, expected: 45 },
      { description: 'stratefy example with USPS', params: { company: getUSPS }, options: {}, expected: 50 },
      { description: 'stratefy example with Fedex', params: { company: getFedex }, options: {}, expected: 55 },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const {
        description,
        params: { company },
        options,
        expected,
      } = example

      const stategy = await getStrategy()

      stategy.setStrategy(company())
      const output = stategy.calculate()

      consoler(`getStrategy [61-${index}]`, {
        description,
        // params,
        expected,
        // output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
