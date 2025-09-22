// @ts-nocheck

/**
 * @description Pattern: Strategy Encapsulates an algorithm inside a class
 * @narrative
      The Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. Here are some common use cases for applying the Strategy Pattern:

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

describe('Behavioral Patterns', () => {
  it('--  2023-09-29, 2022-01-29 Pattern: Strategy Encapsulates an algorithm inside a class', () => {
    type CompanyType = {
      name: string
      calculate: () => string
    }

    type ShippingType = void

    function Shipping(this: any): ShippingType {
      this.company = {}
    }
    Shipping.prototype = {
      setStrategy(company: CompanyType) {
        this.company = company
      },
      delivery() {
        return {
          company: this.company.name,
          fare: this.company.calculate(),
        }
      },
    }

    const UPS = function (this: any): void {
      this.name = 'UPS'
      this.calculate = function () {
        return '$20'
      }
    }

    const USPS = function (this: any): void {
      this.name = 'USPS'
      this.calculate = function () {
        return '$30'
      }
    }

    const Fedex = function (this: any) {
      this.name = 'Fedex'
      this.calculate = function () {
        return '$40'
      }
    }

    const tests = [
      { input: new UPS(), expected: { company: 'UPS', fare: '$20' } },
      { input: new USPS(), expected: { company: 'USPS', fare: '$30' } },
      { input: new Fedex(), expected: { company: 'Fedex', fare: '$40' } },
    ]

    tests.forEach((test: any) => {
      const { input, expected } = test
      const shipping = new Shipping()
      shipping.setStrategy(input)

      console.info('21_Strategy.test [108]', {
        'shipping.delivery()': shipping.delivery(),
      })

      expect(shipping.delivery()).toEqual(expected)
    })
  })
})
