/**
 * @description Pattern: The Singleton Pattern limits the number of instances of a particular object to just one.
 * @narrative
      The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is often used when there is a need to limit the number of instances of a particular object to just one. Here are some common use cases for applying the Singleton Pattern:

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

describe('Creational Patterns: Singleton', () => {
  it('--  2023-09-27 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    const Sum = function (x) {
      return {
        sumX(y) {
          return x + y
        },
      }
    }

    const Singleton = function (func, args) {
      this.instance = undefined
      this.getInstance = () => {
        if (!this.instance) this.instance = func(args)
        return this.instance
      }
    }

    const a = Sum(2)
    const b = Sum(2)
    const s = new Singleton(Sum, 2)
    const c = s.getInstance()
    const d = s.getInstance()
    console.info('05_Singleton.test [35]', { c, d })

    expect(a === b).toBe(false)
    expect(c === d && c !== undefined && d !== undefined && c.toString() === d.toString()).toBe(true)
  })

  it('--  2023-04-07 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    const Sum = function (x) {
      return {
        sumX(y) {
          return x + y
        },
      }
    }

    const Singleton = function (func, value) {
      let instance = undefined

      return {
        getInstance() {
          if (!instance) instance = func(value)
          return instance
        },
      }
    }

    const a = Sum(2)
    const b = Sum(2)
    const s = Singleton(Sum, 2)
    const c = s.getInstance()
    const d = s.getInstance()

    expect(a === b).toBe(false)
    expect(c === d && c !== undefined && d !== undefined && c.toString() === d.toString()).toBe(true)
  })

  it('--  2021-12-25-2 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    class CalcClass {
      mult(x, y) {
        return x * y
      }
    }

    const classCollection = {
      CalcClass,
    }

    const Singleton = function () {
      let instance = Object.keys(classCollection).reduce((reducer, item, i) => ({ ...reducer, [item]: undefined }), {})

      return {
        getInstance(className) {
          return (
            instance[className] ? instance[className] : (instance[className] = new classCollection[className]()),
            instance[className]
          )
        },
      }
    }

    const a = new classCollection['CalcClass']()
    const b = new classCollection['CalcClass']()
    const s = Singleton()
    const c = s.getInstance('CalcClass')
    const d = s.getInstance('CalcClass')

    expect(a === b).toBe(false)
    expect(c === d && c !== undefined && d !== undefined && c.toString() === d.toString()).toBe(true)
  })

  it('--  2021-12-25 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    const Sum = function (x) {
      return {
        sumX(y) {
          return x + y
        },
      }
    }

    const Singleton = function (Func, x2) {
      let instance

      const createInstance = function () {
        instance = Func(x2)
        return instance
      }

      return {
        getInstance() {
          if (!instance) instance = createInstance()
          return instance
        },
      }
    }

    const a = Sum(2)
    const b = Sum(2)
    const s = Singleton(Sum, 2)
    const c = s.getInstance()
    const d = s.getInstance()

    expect(a === b).toBe(false)
    expect(c === d && c !== undefined && d !== undefined && c.toString() === d.toString()).toBe(true)
  })

  it('--  2021-02-01 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    class MyClass {
      obj() {
        return {}
      }
    }

    const classesMap = {
      MyClass,
    }

    // eslint-disable-next-line func-names
    const Singleton = function () {
      this.instance = undefined
    }

    // eslint-disable-next-line func-names
    Singleton.prototype.getInstance = function (className) {
      if (!this.instance) {
        this.instance = new classesMap[className]()
      }
      return this.instance
    }

    const a = new MyClass()
    const b = new MyClass()
    const SingletonInst = new Singleton()
    const c = SingletonInst.getInstance('MyClass')
    const d = SingletonInst.getInstance('MyClass')
    // console.info('Singleton', { a: a.obj(), 'a === b': a === b, c: c.obj(), 'c === d': c === d })

    expect(a === b).toBe(false)
    expect(c === d && c !== undefined && d !== undefined && c.toString() === d.toString()).toBe(true)
  })

  it('--  2020-11-01 Pattern: Singleton. A class/function of which only a single instance can exist', () => {
    function Calculation() {
      return (x, y) => ({ sum: x + y, mult: x * y, div: x / y })
    }

    function Singleton(func) {
      this.instance = null

      this.createInstance = func

      this.getInstance = function () {
        if (this.instance === null) {
          this.instance = this.createInstance()
        }
        return this.instance
      }
    }

    const singleton = new Singleton(Calculation)
    const calc = singleton.getInstance()

    const expected = singleton.getInstance()
    expect(calc).toBe(expected)
    expect(calc(3, 2).sum).toBe(5)
    expect(calc(7, 2).mult).toBe(14)
    expect(calc(9, 4).div).toBe(2.25)
  })
})
