/**
 * @description Pattern: The Decorator pattern extends (decorates) an object’s behavior dynamically
 * @narrative
      The Decorator Pattern is a structural design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. Here are some common use cases for applying the Decorator Pattern:

      Adding Responsibilities to Objects:

      Scenario: When you need to add or augment the behavior of objects without modifying their code.
      Use Case: The Decorator Pattern is ideal for dynamically adding responsibilities to objects, allowing for flexible and modular extension.
      Dynamic Composition of Objects:

      Scenario: In situations where you want to compose objects with different combinations of behaviors at runtime.
      Use Case: The Decorator Pattern enables dynamic composition by allowing objects to be wrapped with decorators that provide additional behavior as needed.
      GUI Component Customization:

      Scenario: In GUI systems where you want to customize the appearance or behavior of components.
      Use Case: The Decorator Pattern is suitable for customizing GUI components dynamically without creating a proliferation of subclasses.
      Input/Output Streams in I/O Libraries:

      Scenario: When working with input and output streams and you want to add functionalities like buffering, encryption, or compression.
      Use Case: The Decorator Pattern is applied in I/O libraries to dynamically extend the behavior of streams by wrapping them with decorators for additional functionalities.
      Text Formatting in Text Editors:

      Scenario: In text editors where you want to dynamically apply formatting options to text.
      Use Case: The Decorator Pattern can be used to create decorators for text formatting, such as bold, italic, or underline, allowing users to apply formatting dynamically.
      Security in Web Applications:

      Scenario: When implementing security features in a web application.
      Use Case: The Decorator Pattern can be applied to dynamically add security checks or logging to specific components or actions within the application.
      Caching in Data Access Layers:

      Scenario: In data access layers where you want to introduce caching for specific database queries.
      Use Case: The Decorator Pattern can be used to dynamically add caching behavior to specific data access components, optimizing performance without affecting the overall architecture.
      Logging in Middleware:

      Scenario: When developing middleware components and you want to log information about requests and responses.
      Use Case: The Decorator Pattern is useful for dynamically adding logging functionality to middleware components without modifying their core logic.
      Dynamic Configuration in Applications:

      Scenario: In applications where you want to dynamically configure and modify behavior at runtime.
      Use Case: The Decorator Pattern can be applied to create decorators that modify the behavior of objects based on runtime configuration or user preferences.
      Dynamic Theme and Styling in UIs:

      Scenario: In user interfaces where you want to apply different themes or styles dynamically.
      Use Case: The Decorator Pattern allows for creating decorators that dynamically apply themes or styles to UI components without altering their core implementation.
      In summary, the Decorator Pattern is a versatile pattern that is useful in scenarios where you want to extend an object's behavior dynamically, without relying on an extensive class hierarchy. It promotes flexibility, maintainability, and the ability to compose objects with different combinations of behaviors.

      User
      name
      say

      DecoratedUser
      user, street, city
      user
      name
      street
      city
      say

 * @link https://www.dofactory.com/javascript/design-patterns/decorator
 * @command to run `yarn 09_Decorator.test`
 */
