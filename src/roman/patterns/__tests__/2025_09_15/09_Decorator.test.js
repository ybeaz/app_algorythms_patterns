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

describe('Structural Patterns, Decorator', () => {
  it('-- 2023-04-07-2 Pattern: Decorator for arrow function. Add responsibilities to objects dynamically', () => {
    const sum = (a, b) => {
      return a + b
    }

    const decorator = Func => {
      return function (var1, var2, var3) {
        return Func(var1, var2) + var3
      }
    }

    const funcDecorated = decorator(sum)

    let outputed = sum(1, 2)
    let expected = 3
    expect(outputed).toBe(expected)

    outputed = funcDecorated(1, 2, 4)
    expected = 7
    expect(outputed).toBe(expected)
  })

  it('-- 2023-04-07 Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    const User = function (userName) {
      this.userName = `Name: ${userName}`
      this.index = function () {
        return '94111'
      }
      this.outcome = () => {
        return this.userName
      }
    }

    const decorator = function (Func) {
      return function (userName, address) {
        const funcInstance = new Func(userName, address)
        Object.keys(funcInstance).forEach(prop => (this[prop] = funcInstance[prop]))

        this.address = () => {
          return `Address: ${address}, Index: ${this.index()}`
        }

        this.outcome = () => {
          return `${this.userName}, ${this.address()}`
        }
      }
    }

    const user = new User('Mikhail')

    const UserDecorated = decorator(User)
    const userDecorated = new UserDecorated('Mikhail', '10 Market st., San Bruno')

    let expected = 'Name: Mikhail'
    expect(user.userName).toBe(expected)
    expect(userDecorated.userName).toBe(expected)

    expected = '94111'
    expect(user.index()).toBe(expected)
    expect(userDecorated.index()).toBe(expected)

    expected = 'Name: Mikhail'
    expect(user.outcome()).toBe(expected)
    expected = 'Name: Mikhail, Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.outcome()).toBe(expected)

    expected = undefined
    expect(user.address ? user?.address() : undefined).toBe(expected)
    expected = 'Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.address()).toBe(expected)
  })

  it('-- 2020-11-01 Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    const User = function (name) {
      this.userName = `Name: ${name}`
      this.index = function () {
        return '94111'
      }
      this.outcome = () => {
        return this.userName
      }
    }

    const decorator = function (User2) {
      return function (name, address) {
        const user = new User2(name)

        Object.keys(user).forEach(key => (this[key] = user[key]))

        this.outcome = () => `${this.userName}, ${this.address()}`

        this.address = () => `Address: ${address}, Index: ${this.index()}`
      }
    }

    const user = new User('Mikhail')

    const UserDecorated = decorator(User)
    const userDecorated = new UserDecorated('Mikhail', '10 Market st., San Bruno')

    let expected = 'Name: Mikhail'
    expect(user.userName).toBe(expected)
    expect(userDecorated.userName).toBe(expected)

    expected = '94111'
    expect(user.index()).toBe(expected)
    expect(userDecorated.index()).toBe(expected)

    expected = 'Name: Mikhail'
    expect(user.outcome()).toBe(expected)
    expected = 'Name: Mikhail, Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.outcome()).toBe(expected)

    expected = undefined
    expect(user.address ? user?.address() : undefined).toBe(expected)
    expected = 'Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.address()).toBe(expected)
  })

  it('-- 2021-07-20 Pattern: Decorator   with @ notation', () => {
    function log2(name) {
      return function decorator(t, n, descriptor) {
        const original = descriptor.value
        if (typeof original === 'function') {
          descriptor.value = function (...args) {
            // console.log(`09_Decorator.test [26] Arguments for ${name}: ${args}`)
            try {
              const result = original.apply(this, args)
              // console.log(
              //   `09_Decorator.test [29] Result from ${name}: ${result}`
              // )
              return result
            } catch (e) {
              console.log(`09_Decorator.test [34] Error from ${name}: ${e}`)
              throw e
            }
          }
        }
        return descriptor
      }
    }

    function log(target, name, descriptor) {
      // console.info('09_Decorator.test [44]', { target, name, descriptor })
      const original = descriptor.value
      if (typeof original === 'function') {
        descriptor.value = function (...args) {
          // console.log(`09_Decorator.test [48] Arguments: ${args}`)
          try {
            const result = original.apply(this, args)
            // console.log(`09_Decorator.test [51] Result: ${result}`)
            return result
          } catch (e) {
            // console.log(`09_Decorator.test [54] Error: ${e}`)
            throw e
          }
        }
      }
      return descriptor
    }

    class Example {
      @log
      sum(a, b) {
        return a + b
      }
    }

    const e = new Example()

    // console.info('09_Decorator.test [33]', { sum: e.sum(1, 2) })
  })

  it('-- 2021-07-10 Pattern: Decorator/ HOF  Modify the output adding a function dynamicly', () => {
    const arrTest = [
      {
        input: [2, 3],
        key: 'sum',
        expected: 'result of sum(2, 3) = 5, tested successfully',
      },
      {
        input: [6, 4],
        key: 'sub',
        expected: 'result of sub(6, 4) = 2, tested successfully',
      },
      {
        input: [5, 4],
        key: 'mult',
        expected: 'result of mult(5, 4) = 20, tested successfully',
      },
      {
        input: [15, 3],
        key: 'div',
        expected: 'result of div(15, 3) = 5, tested successfully',
      },
    ]
    const sum = (a, b) => a + b
    const sub = (a, b) => a - b
    const mult = (a, b) => a * b
    const div = (a, b) => a / b

    const funcWithReport = (func, args) => {
      const [a, b] = args
      const startReport = `result of ${func.name}(${a.toString()}, ${b.toString()}) = `

      const res = func(...args)

      const finishReport = ', tested successfully'
      return startReport + res.toString() + finishReport
    }

    const reportTest = {
      sum: (...args) => funcWithReport(sum, args),
      sub: (...args) => funcWithReport(sub, args),
      mult: (...args) => funcWithReport(mult, args),
      div: (...args) => funcWithReport(div, args),
    }

    const res = arrTest.map(item => {
      const { input, key, expected } = item
      return reportTest[key](...input)
    })

    const expected = arrTest.map(item => item.expected)
    expect(res).toEqual(expected)
  })

  it('-- 2020-11-01 Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    const User = function (name) {
      this.userName = `Name: ${name}`
      this.index = function () {
        return '94111'
      }
      this.outcome = function () {
        return this.name
      }
    }

    function decorator(User) {
      return function (name, address) {
        const user = new User(...arguments)

        // We close all existing properties
        Object.keys(user).forEach(item => {
          this[item] = user[item]
        })

        // We modify existing function property
        this.outcome = function () {
          return `${user.userName}, Address: ${address}, Index: ${this.index()}`
        }

        // We add a function property
        this.address = function () {
          return `Address: ${address}, Index: ${this.index()}`
        }
      }
    }

    const UserDecorated = decorator(User)
    const userDecorated = new UserDecorated('Mikhail', '10 Market st., San Bruno')

    let expected = 'Name: Mikhail'
    expect(userDecorated.userName).toBe(expected)

    expected = '94111'
    expect(userDecorated.index()).toBe(expected)

    expected = 'Name: Mikhail, Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.outcome()).toBe(expected)

    expected = 'Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.address()).toBe(expected)
  })
})
