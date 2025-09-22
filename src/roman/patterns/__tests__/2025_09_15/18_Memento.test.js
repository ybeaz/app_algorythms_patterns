/**
 * @description Pattern: Memento Capture and restore an object's internal state
 * @narrative
      The Memento Pattern is a behavioral design pattern that allows an object's internal state to be captured and later restored without exposing its internal structure. Here are some common use cases for applying the Memento Pattern:

      Undo/Redo Functionality:

      Scenario: When implementing undo and redo functionality in applications.
      Use Case: The Memento Pattern is well-suited for capturing and restoring the state of an object, enabling undo and redo operations. Each state change is encapsulated in a memento object, and a caretaker object manages the history of states.
      Version Control Systems:

      Scenario: When developing version control systems for tracking changes in code or documents.
      Use Case: The Memento Pattern can be applied to capture snapshots of the state of a document or codebase at different points in time. These snapshots (mementos) can be stored and later restored if needed.
      Database Rollback:

      Scenario: When managing transactions in a database and supporting rollback operations.
      Use Case: The Memento Pattern can be used to capture the state of a database before a transaction is executed. If the transaction needs to be rolled back, the database can be restored to its previous state using the memento.
      Configuration Management:

      Scenario: When managing configuration settings or options in an application.
      Use Case: The Memento Pattern can be applied to capture and restore the configuration state of an application. This is particularly useful when allowing users to save and load different configurations.
      Collaborative Editing:

      Scenario: When implementing collaborative editing systems where multiple users can edit a shared document.
      Use Case: The Memento Pattern can be used to capture and restore the state of a shared document as users make changes. This facilitates undo and redo operations in a collaborative environment.
      Game State Management:

      Scenario: When developing games with the ability to save and load game states.
      Use Case: The Memento Pattern can be applied to capture the state of the game (e.g., player positions, scores, game progress) at specific points. Players can later load these states to resume gameplay.
      Workflow Management:

      Scenario: When managing workflows or processes with different states.
      Use Case: The Memento Pattern can be used to capture and restore the state of a workflow at various stages. This is beneficial for handling interruptions or resuming workflows from specific points.
      Caching Mechanisms:

      Scenario: When implementing caching mechanisms for improved performance.
      Use Case: The Memento Pattern can be applied to capture and restore cached data or results. This allows systems to revert to a previous cached state if needed.
      Finite State Machines:

      Scenario: When designing systems with finite state machines.
      Use Case: The Memento Pattern can be used to capture and restore the state of a finite state machine. This is useful for scenarios where the system needs to transition between different states and potentially revert to a previous state.
      Session Management in Web Applications:

      Scenario: When managing user sessions in web applications.
      Use Case: The Memento Pattern can be applied to capture and restore the state of a user session. This is useful for scenarios where users can resume sessions after logging out or closing the application.
      Monitoring and Logging:

      Scenario: When monitoring and logging system behavior and events.
      Use Case: The Memento Pattern can be used to capture and store snapshots of system states for later analysis. This is valuable for diagnosing issues and understanding the system's behavior over time.
      Serialization and Deserialization:

      Scenario: When serializing and deserializing objects for data persistence.
      Use Case: The Memento Pattern can be applied during serialization to capture the internal state of an object as a memento. During deserialization, the object can be restored to its previous state using the stored memento.
      In summary, the Memento Pattern is particularly useful in situations where it's necessary to capture and restore the state of an object or system, providing mechanisms for undo, redo, versioning, and managing state transitions.

      Person
      name
      street
      city
      state

      Person
      hydrate
      memento
      dehydrate
      memento
      m
      name
      street
      city
      state

      CareTaker
      mementos
      add
      get

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 18_Memento.test`
 */

describe('Behavioral Patterns', () => {
  it("--  Pattern: Memento Capture and restore an object's internal state", () => {
    function Person(name, street, city, state) {
      this.name = name
      this.street = street
      this.city = city
      this.state = state
    }

    Person.prototype = {
      dehydrate: function (memento) {
        const m = JSON.parse(memento)
        this.name = m.name
        this.street = m.street
        this.city = m.city
        this.state = m.state
      },
      hydrate: function () {
        return JSON.stringify(this)
      },
    }

    const CareTaker = function () {
      this.mementos = {}
      this.add = function (key, memento) {
        this.mementos[key] = memento
      }
      this.get = function (key) {
        return this.mementos[key]
      }
    }

    let mike = new Person('Mike', 'Taraval', 'San Francisco', 'CA')
    let renata = new Person('Renata', 'San Frosty', 'San Paolo', 'PA')

    const careTaker = new CareTaker()
    careTaker.add('mike', mike.hydrate())
    careTaker.add('renata', renata.hydrate())

    mike.name = 'King Kong'
    renata.name = 'Sophia'

    mike.dehydrate(careTaker.get('mike'))
    renata.dehydrate(careTaker.get('renata'))

    expect(mike.name).toBe('Mike')
    expect(renata.name).toBe('Renata')
  })
})
