/**
 * @description Pattern: Adapter	Match interfaces of different classes
 * @narrative
      The Adapter Pattern is a structural design pattern that allows the interfaces of existing classes to be used as another interface. It acts as a bridge between two incompatible interfaces, making them compatible without changing their source code. Here are some common use cases for applying the Adapter Pattern:

      Integration of Legacy Code:

      Scenario: When integrating new components or systems with legacy code that has a different interface.
      Use Case: The Adapter Pattern can be used to create adapters that allow the new components to interact seamlessly with the existing legacy code.
      Library or Framework Integration:

      Scenario: When using a library or framework with an interface that is incompatible with the rest of the application.
      Use Case: The Adapter Pattern can be applied to create adapters that bridge the gap between the library's interface and the expected interface within the application.
      Reusing Existing Classes:

      Scenario: When reusing existing classes that have interfaces incompatible with the rest of the system.
      Use Case: The Adapter Pattern allows the reuse of existing classes by creating adapters that convert their interfaces into the required format.
      Interface Standardization:

      Scenario: When standardizing the interfaces of diverse components in a system.
      Use Case: The Adapter Pattern helps in standardizing interfaces by creating adapters that ensure consistency and conformity across different components.
      Third-Party Component Integration:

      Scenario: When integrating third-party components that have different interfaces.
      Use Case: The Adapter Pattern facilitates the integration of third-party components by creating adapters that make their interfaces compatible with the rest of the system.
      Communication Between Microservices:

      Scenario: In a microservices architecture where services may have different communication protocols or data formats.
      Use Case: The Adapter Pattern can be applied to create adapters that translate messages or data formats, enabling communication between microservices with diverse interfaces.
      Database Integration:

      Scenario: When integrating with databases that have different query languages or data access interfaces.
      Use Case: The Adapter Pattern allows the creation of adapters that translate requests and responses between the application and the database, ensuring compatibility.
      UI Component Integration:

      Scenario: When integrating UI components or widgets with different event handling mechanisms.
      Use Case: The Adapter Pattern can be applied to create adapters that translate events from one UI component to a format expected by another, ensuring seamless integration.
      Mocking and Testing:

      Scenario: When writing unit tests for classes with dependencies that cannot be directly instantiated or used in testing.
      Use Case: The Adapter Pattern allows the creation of mock adapters that mimic the behavior of dependencies, making it possible to isolate and test the target class.
      Cross-Platform Development:

      Scenario: When developing applications for multiple platforms with different APIs.
      Use Case: The Adapter Pattern helps in creating adapters that abstract the platform-specific details, allowing the application to work seamlessly across different platforms.
      In each of these use cases, the Adapter Pattern serves as a bridge between incompatible interfaces, allowing components with different interfaces to work together in a unified way. It promotes flexibility, reusability, and the ability to integrate diverse components within a system.

      Shipping
      request

      AdvancedShipping
      login
      setStart
      setDestination
      calculate

      ShippingAdapter
      shipping
      request
      zipStart, zipEnd, weight

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 06_Adapter.test`
 */
