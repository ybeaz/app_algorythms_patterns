import { testLogger } from '../../src/Shared/testLogger' // './testLogger'

/**
 * @description Pattern: Mediator  Defines simplified communication between classes
 * @narrative
      The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) that centralizes communication between a set of related objects (colleagues). Here are some common use cases for applying the Mediator Pattern:

      GUI Components Interaction:

      Scenario: When designing graphical user interfaces with multiple components that need to interact.
      Use Case: The Mediator Pattern can be applied to mediate the communication between GUI components. For example, a mediator can handle the interaction between buttons, text fields, and other components, ensuring a coordinated response to user actions.
      Chat Applications:

      Scenario: When implementing chat applications with multiple users.
      Use Case: The Mediator Pattern is useful for managing communication between users in a chat application. The mediator handles message distribution, ensuring that messages from one user are delivered to the appropriate recipients.
      Flight Control Systems:

      Scenario: When developing flight control systems with multiple subsystems.
      Use Case: The Mediator Pattern can be applied to mediate communication between subsystems of a flight control system. The mediator ensures that changes in one subsystem are communicated to others to maintain coordinated control.
      Stock Trading Systems:

      Scenario: When designing stock trading systems with multiple components (e.g., traders, market data feeds).
      Use Case: The Mediator Pattern can be used to mediate communication between components in a stock trading system. The mediator facilitates the exchange of market data and trade requests between traders and other system components.
      Smart Home Systems:

      Scenario: When developing smart home systems with various interconnected devices.
      Use Case: The Mediator Pattern can be applied to mediate communication between smart home devices. The mediator handles requests and notifications between devices, ensuring coordinated actions in response to user commands.
      Multiplayer Games:

      Scenario: When developing multiplayer games with multiple players and entities.
      Use Case: The Mediator Pattern can be used to mediate communication between players and game entities. The mediator manages interactions, such as player movements, attacks, and events within the game world.
      Traffic Management Systems:

      Scenario: When designing traffic management systems with interconnected traffic lights, sensors, and control units.
      Use Case: The Mediator Pattern can be applied to mediate communication between components in a traffic management system. The mediator ensures coordinated traffic control based on inputs from sensors and user commands.
      Collaborative Editing Systems:

      Scenario: When developing collaborative editing systems where multiple users can edit a shared document.
      Use Case: The Mediator Pattern can be used to mediate communication between users and document editing components. The mediator handles synchronization and updates to ensure a consistent document state across users.
      Event Handling Systems:

      Scenario: When implementing systems with event-driven architectures.
      Use Case: The Mediator Pattern can be applied to mediate communication between components in an event-driven system. The mediator handles the distribution of events and ensures that relevant components respond appropriately.
      Workflow Automation:

      Scenario: When designing workflow automation systems with multiple steps and processes.
      Use Case: The Mediator Pattern can be used to mediate communication between workflow steps. The mediator ensures that each step is triggered at the right time and coordinates the flow of data between steps.
      Healthcare Systems:

      Scenario: When developing healthcare systems with interconnected medical devices and information systems.
      Use Case: The Mediator Pattern can be applied to mediate communication between medical devices and information systems. The mediator ensures the exchange of patient data and alerts between different components of the healthcare system.
      Distributed Systems:

      Scenario: When designing distributed systems with multiple nodes or services.
      Use Case: The Mediator Pattern can be used to mediate communication between nodes or services in a distributed system. The mediator facilitates communication and coordination to achieve system-wide goals.
      In summary, the Mediator Pattern is valuable in scenarios where a set of related objects need to communicate in a more centralized and decoupled manner. It promotes flexibility and maintainability by reducing direct dependencies between objects, allowing changes to one object without affecting others.

      Participant
      name
      chatroom

      Participant
      send
      message, to
      receive

      Chatroom
      participants
      register
      send

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 17_Mediator.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Mediator  Defines simplified communication between classes', () => {
    const log = testLogger('arr')

    function Participant(name) {
      this.name = name
      this.chatroom = null
    }

    Participant.prototype = {
      send(message, to) {
        this.chatroom.send(message, this, to)
      },
      receive(message, from) {
        log.add(`${from.name}: ${message}`)
      },
    }

    function Chatroom() {
      this.participants = {}
      this.register = function (participant) {
        this.participants[participant.name] = participant
        participant.chatroom = this
      }
      this.send = function (message, from, to) {
        if (to) to.receive(message, from)
        else {
          for (const key in this.participants) {
            if (this.participants[key] !== from) {
              this.participants[key].receive(message, from)
            }
          }
        }
      }
    }

    var yoko = new Participant('Yoko')
    var john = new Participant('John')
    var paul = new Participant('Paul')
    var ringo = new Participant('Ringo')

    var chatroom = new Chatroom()
    chatroom.register(yoko)
    chatroom.register(john)
    chatroom.register(paul)
    chatroom.register(ringo)

    yoko.send('All you need is love.')
    yoko.send('I love you John.')
    john.send('Hey, no need to broadcast', yoko)
    paul.send('Ha, I heard that!')
    ringo.send('Paul, what do you think?', paul)

    const expected = [
      'Yoko: All you need is love.',
      'Yoko: All you need is love.',
      'Yoko: All you need is love.',
      'Yoko: I love you John.',
      'Yoko: I love you John.',
      'Yoko: I love you John.',
      'John: Hey, no need to broadcast',
      'Paul: Ha, I heard that!',
      'Paul: Ha, I heard that!',
      'Paul: Ha, I heard that!',
      'Ringo: Paul, what do you think?',
    ]

    expect(log.show()).toEqual(expected)
  })
})
