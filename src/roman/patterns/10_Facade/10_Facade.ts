/**
 * @description Pattern: The intent of the Façade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.
 * @narrative
      The Facade Pattern is a structural design pattern that provides a simplified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use for clients. Here are some common use cases for applying the Facade Pattern:

      Complex System Simplification:

      Scenario: When working with a complex system with numerous components and interactions.
      Use Case: The Facade Pattern is applied to simplify the usage of the system by providing a unified interface that abstracts away the complexities and intricacies of the underlying subsystem.
      Library or Framework Integration:

      Scenario: When integrating with a library or framework that has a large number of classes and intricate interactions.
      Use Case: The Facade Pattern can be used to create a simplified interface for the library or framework, making it more user-friendly and reducing the learning curve for clients.
      Legacy System Integration:

      Scenario: When integrating with a legacy system that has outdated or complex APIs.
      Use Case: The Facade Pattern provides a modern and simplified interface that shields clients from the complexities of the legacy system, making integration smoother.
      Subsystems Coordination:

      Scenario: In systems where multiple subsystems need to work together to accomplish a task.
      Use Case: The Facade Pattern can coordinate the interactions between subsystems by providing a high-level interface that encapsulates the necessary calls and orchestrations.
      Reducing Dependency on Subsystems:

      Scenario: When you want to reduce the dependency of clients on the details of individual subsystem components.
      Use Case: The Facade Pattern allows clients to interact with a simplified interface, reducing their dependence on the intricacies of individual subsystem components and promoting loose coupling.
      API Design for External Clients:

      Scenario: When designing APIs for external clients and you want to present a clean and intuitive interface.
      Use Case: The Facade Pattern is useful for designing APIs that are user-friendly and shield clients from unnecessary complexities, providing only the features they need.
      Code Refactoring:

      Scenario: When refactoring code and you want to hide the internal structure or reorganize the subsystem.
      Use Case: The Facade Pattern can be applied during refactoring to create a new, simplified interface that hides the changes in the internal structure, minimizing the impact on existing clients.
      Simplified Configuration:

      Scenario: When dealing with complex configuration processes with multiple steps and dependencies.
      Use Case: The Facade Pattern can be used to create a simplified configuration interface that encapsulates the necessary steps and interactions, making it easier for clients to configure the system.
      Testing and Mocking:

      Scenario: When writing tests and you want to isolate the subsystem components for easier testing or mocking.
      Use Case: The Facade Pattern can be applied to create a facade that represents a simplified interface for testing, allowing clients to interact with a mocked or simplified version of the subsystem.
      Cross-Platform Development:

      Scenario: When developing software that needs to run on multiple platforms with different subsystems.
      Use Case: The Facade Pattern can provide a unified interface that abstracts away platform-specific details, making it easier to develop and maintain cross-platform applications.
      In summary, the Facade Pattern is valuable in scenarios where you want to provide a simplified and unified interface to a complex subsystem, making it more accessible and user-friendly for clients. It promotes encapsulation, reduces dependencies, and improves overall system usability.

      Bank
      verify
      name, amount

      Credit
      get

      Background
      check

 * @link https://www.dofactory.com/javascript/design-patterns/facade
 * @command to run `yarn jest patterns/__test__/10_Facade.test.js`
 */
