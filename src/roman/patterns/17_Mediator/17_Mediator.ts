/**
 * @description Pattern: Mediator  Defines simplified communication between classes, by making copies of the object in the mediator and then using these objects for the subsequent communicaiton
 * @narrative The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) that centralizes communication between a set of related objects (colleagues). The defining characteristics of the Mediator pattern are: objects do not communicate directly with each other, all communication is routed through a central mediator. Your code clearly follows this structure. Mapping your code to the Mediator pattern: Mediator — const getMediator = ({ chatRoom }: GetMediatorParamsType) => { ... }. Responsibilities: registers participants, controls message routing, handles direct messages and broadcasts, keeps message history (messagesSent, messagesReceived). This is the central communication hub. Here are some common use cases for applying the Mediator Pattern:

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

import { consoler } from 'yourails_common'

type GetParticipantResType = {
  name: string
  sendTo: any
  receiveFrom: any
}

const getParticipant = (name: string): GetParticipantResType => {
  const sendTo = (message: string, toName: string) => {
    return { message, fromName: name, toName }
  }

  const receiveFrom = (message: string, from: any) => {
    return {
      message,
      fromName: from,
      toName: name,
    }
  }

  return {
    name,
    sendTo,
    receiveFrom,
  }
}

type GetMediatorParamsType = {
  chatRoom: string
}

type GetMediatorOptionsType = { funcParent?: string }

type MessageType = {
  message: string
  from: GetParticipantResType
  to?: GetParticipantResType
}

type GetMediatorResType = {
  register: any
  send: any
  getParticipants: () => GetParticipantResType[]
  getMessagesSent: () => MessageType[]
  getMessagesReceived: () => MessageType[]
}

interface GetMediatorType {
  (params: GetMediatorParamsType, options?: GetMediatorOptionsType): GetMediatorResType
}

const optionsDefault: Required<GetMediatorOptionsType> = {
  funcParent: 'getMediator',
}

/**
 * @description Function to getMediator
 * @import import { getMediator } from './getMediator'
 */

const getMediator: GetMediatorType = ({ chatRoom }: GetMediatorParamsType) => {
  const participants: Record<string, GetParticipantResType> = {}
  let messagesSent: MessageType[] = []
  let messagesReceived: MessageType[] = []

  const send = (messageText: string, fromName: string, toName: string) => {
    if (fromName && participants[fromName] && toName && participants[toName]) {
      const messageSent = participants[fromName].sendTo(messageText, toName)
      messagesSent.push(messageSent)
      const messageReceived = participants[toName].receiveFrom(messageText, fromName)
      messagesReceived.push(messageReceived)
    } else if (fromName && participants[fromName]) {
      Object.keys(participants).forEach((toName: string) => {
        if (toName !== fromName) {
          const message = participants[fromName].sendTo(messageText, toName)
          messagesSent.push(message)
          const messageReceived = participants[toName].receiveFrom(messageText, fromName)
          messagesReceived.push(messageReceived)
        }
      })
    }
  }

  const register = (participantName: string) => {
    participants[participantName] = getParticipant(participantName)
  }

  return {
    send,
    register,
    getParticipants: () =>
      Object.keys(participants).reduce((accum: GetParticipantResType[], key: string) => {
        accum.push(participants[key])
        return accum
      }, []),
    getMessagesSent: () => messagesSent,
    getMessagesReceived: () => messagesReceived,
  }
}

export { getMediator }
export type { GetMediatorParamsType, GetMediatorResType, GetMediatorOptionsType, GetMediatorType }

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/patterns/17_Mediator/17_Mediator.ts
 */
if (require.main === module) {
  ;(async () => {
    type MessageInType = {
      message: string
      fromName: string
      toName?: string
    }

    type ExampleType = {
      description?: string
      params: GetMediatorParamsType
      participantsNames: string[]
      messages: MessageInType[]
      options: GetMediatorOptionsType
      expected: MessageInType[]
    }
    const examples: ExampleType[] = [
      {
        description: 'Example of Mediator',
        params: { chatRoom: 'beatlesChat' },
        participantsNames: ['Yoko', 'John', 'Paul', 'Ringo'],
        messages: [
          { fromName: 'Yoko', message: 'All you need is love.' },
          { fromName: 'Yoko', message: 'I love you John.' },
          { fromName: 'John', message: 'Hey, no need to broadcast', toName: 'Yoko' },
          { fromName: 'Paul', message: 'Ha, I heard that!' },
          { fromName: 'Ringo', message: 'Paul, what do you think?', toName: 'Paul' },
        ],
        options: {},
        expected: [
          {
            message: 'All you need is love.',
            fromName: 'Yoko',
            toName: 'John',
          },
          {
            message: 'All you need is love.',
            fromName: 'Yoko',
            toName: 'Paul',
          },
          {
            message: 'All you need is love.',
            fromName: 'Yoko',
            toName: 'Ringo',
          },
          { message: 'I love you John.', fromName: 'Yoko', toName: 'John' },
          { message: 'I love you John.', fromName: 'Yoko', toName: 'Paul' },
          { message: 'I love you John.', fromName: 'Yoko', toName: 'Ringo' },
          {
            message: 'Hey, no need to broadcast',
            fromName: 'John',
            toName: 'Yoko',
          },
          { message: 'Ha, I heard that!', fromName: 'Paul', toName: 'Yoko' },
          { message: 'Ha, I heard that!', fromName: 'Paul', toName: 'John' },
          { message: 'Ha, I heard that!', fromName: 'Paul', toName: 'Ringo' },
          {
            message: 'Paul, what do you think?',
            fromName: 'Ringo',
            toName: 'Paul',
          },
        ],
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, participantsNames, messages: messagesIn, expected } = example

      const chatRoom = await getMediator(params)

      participantsNames.forEach((participantName: string) => chatRoom.register(participantName))
      const participantsOfChat = chatRoom.getParticipants()

      messagesIn.forEach((messageIn: MessageInType) => {
        const { message, fromName, toName } = messageIn
        // consoler('17_Mediator [209]', { message, fromName, toName })
        chatRoom.send(message, fromName, toName)
      })

      const messagesSent: any[] = chatRoom.getMessagesSent()
      const messagesReceived: any[] = chatRoom.getMessagesReceived()

      consoler(`getMediator [215-${index}]`, {
        description: '',
        params,
        participantsOfChat,
        messagesSent,
        messagesReceived,
        expected,
        tested: JSON.stringify(messagesSent) === JSON.stringify(expected),
        tested2: JSON.stringify(messagesReceived) === JSON.stringify(expected),
        tested3: JSON.stringify(messagesSent) === JSON.stringify(messagesReceived),
      })
    })
    await Promise.all(promises)
  })()
}
