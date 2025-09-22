// @ts-nocheck

/**
 * @description Abstract Factory Creates an instance of several families of classes
 * @narrative
      The Abstract Factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It involves multiple factory methods, each responsible for creating a different kind of object, forming a family of related objects. Here are some use cases for applying the Abstract Factory pattern:

      GUI Libraries:

      Scenario: In graphical user interface (GUI) libraries where different components (buttons, text fields, windows) need to be created to match the look and feel of a specific operating system.
      Use Case: The Abstract Factory pattern allows the creation of families of GUI components tailored to a particular operating system, ensuring consistency in the appearance and behavior of the components.
      Database Drivers:

      Scenario: In database access libraries where different database drivers need to be created for various database management systems (DBMS).
      Use Case: The Abstract Factory pattern enables the creation of families of database-related objects (connections, queries) specific to each DBMS, ensuring compatibility and optimal performance.
      Operating System Portability:

      Scenario: When developing software that needs to run on multiple operating systems.
      Use Case: The Abstract Factory pattern allows the creation of families of objects (file system access, threading) adapted to the features and requirements of each operating system.
      UI Themes in Web Development:

      Scenario: In web development where different UI themes or styles need to be applied based on user preferences.
      Use Case: The Abstract Factory pattern allows the creation of families of UI elements (buttons, colors, fonts) that collectively form a specific theme, providing a consistent visual experience.
      Vehicle Manufacturing:

      Scenario: In manufacturing systems where different families of vehicles (cars, motorcycles, bicycles) need to be produced.
      Use Case: The Abstract Factory pattern can be applied to create families of objects (engines, wheels, chassis) specific to each type of vehicle, ensuring compatibility and consistency.
      Game Development:

      Scenario: In game development where different game platforms require unique sets of objects (characters, environments, weapons).
      Use Case: The Abstract Factory pattern allows the creation of families of game-related objects tailored to each platform, ensuring optimal performance and compatibility.
      Document Editors:

      Scenario: In document editors where different document types (text documents, spreadsheets) have specific formatting and editing components.
      Use Case: The Abstract Factory pattern can be applied to create families of objects (text formatting tools, data entry components) specific to each document type.
      Meal Ordering System:

      Scenario: In a meal ordering system where different types of meals (breakfast, lunch, dinner) have specific sets of dishes and serving items.
      Use Case: The Abstract Factory pattern allows the creation of families of objects (dishes, utensils, napkins) specific to each type of meal.
      In each of these use cases, the Abstract Factory pattern facilitates the creation of families of related objects, ensuring that the objects within a family are compatible and work seamlessly together. This pattern promotes the principle of providing an interface for creating families of related or dependent objects without specifying their concrete classes, allowing for flexibility and adaptability in the design.
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 01_Abstract_Factory.test`
 */

interface EmployeeType {
  name: string
  report: () => string
}

describe('Creational Patterns', () => {
  it('--  Pattern: Abstract Factory Creates an instance of several families of classes', () => {
    function Employee(this: EmployeeType, name: string): void {
      this.name = name
      this.report = function (): string {
        return `Employee: ${this.name}`
      }
    }

    function Vendor(this: EmployeeType, name): void {
      this.name = name
      this.report = function () {
        return `Vendor: ${this.name}`
      }
    }

    function EmployeeFactory() {
      this.num = 0
      this.create = function (name) {
        this.num += 1
        return new Employee(name)
      }
      this.getNum = function () {
        return this.num
      }
    }

    function VendorFactory() {
      this.num = 0
      this.create = function (name) {
        this.num += 1
        return new Vendor(name)
      }
      this.getNum = function () {
        return this.num
      }
    }

    const employeeFactory = new EmployeeFactory()
    const vendorFactory = new VendorFactory()
    let staff = []

    staff.push(employeeFactory.create('Joan DiSilva'))
    staff.push(employeeFactory.create("Tim O'Neill"))
    staff.push(vendorFactory.create('Gerald Watson'))
    staff.push(vendorFactory.create('Nicole McNight'))

    let report = staff.reduce((res, item, i, arr) => {
      const { name } = item
      return [...res, { name, rep: item.report() }]
    }, [])

    let expected = [
      { name: 'Joan DiSilva', rep: 'Employee: Joan DiSilva' },
      { name: "Tim O'Neill", rep: "Employee: Tim O'Neill" },
      { name: 'Gerald Watson', rep: 'Vendor: Gerald Watson' },
      { name: 'Nicole McNight', rep: 'Vendor: Nicole McNight' },
    ]
    expect(report).toEqual(expected)

    const employeeNum = employeeFactory.getNum()
    expected = 2
    expect(employeeNum).toBe(expected)

    const vendorNum = vendorFactory.getNum()
    expected = 2
    expect(vendorNum).toBe(expected)
  })
})

// Employee
// name
// say

// EmployeeFactory
// create

// Vendor
// name
// say

// VendorFactory
// create

/**
 * @description Class variant
 */
interface EmployeeType {
  name: string
  report: () => string
}

class EmployeeClass implements EmployeeType {
  name: string

  constructor(name: string) {
    this.name = name
  }

  report(): string {
    return `Employee: ${this.name}`
  }
}
