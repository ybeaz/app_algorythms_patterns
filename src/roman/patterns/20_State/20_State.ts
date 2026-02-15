/**
 * @description Pattern: The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state
 * @narrative The State Pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. Here are some common use cases for applying the State Pattern:

      Finite State Machines (FSMs):

      Scenario: When modeling systems with different states and transitions between states.
      Use Case: The State Pattern is particularly effective in implementing finite state machines. Each state is represented by a concrete state class, and the context (object) transitions between states by changing its current state.
      Game Development:

      Scenario: When developing games with characters or entities that can be in different states.
      Use Case: The State Pattern is applied to model the behavior of game characters based on their states (e.g., idle, walking, running, attacking). The character's actions and interactions depend on its current state.
      Order Processing Systems:

      Scenario: When implementing systems for order processing with different order states.
      Use Case: The State Pattern is useful for modeling the lifecycle of an order. Each order state (e.g., new, confirmed, shipped, delivered) is represented by a state class, and the order transitions between these states.
      Workflow Management Systems:

      Scenario: When designing systems with complex workflows and processes.
      Use Case: The State Pattern can be applied to represent different stages in a workflow. Each stage is a state, and the system transitions between states as it progresses through the workflow.
      TCP Connection Handling:

      Scenario: When dealing with TCP connection handling where the connection can be in various states.
      Use Case: The State Pattern can be used to model the states of a TCP connection (e.g., connected, closed, waiting for data). The behavior of the connection is defined by its current state.
      Document Editing:

      Scenario: When developing document editing applications with different editing modes.
      Use Case: The State Pattern is applied to represent different editing modes (e.g., insert mode, delete mode, select mode). The behavior of the editor changes based on its current mode.
      Vending Machines:

      Scenario: When modeling the behavior of vending machines.
      Use Case: The State Pattern is useful for representing the different states of a vending machine (e.g., no money inserted, money inserted, item selected, item dispensed). The behavior of the vending machine depends on its current state.
      Traffic Light Control Systems:

      Scenario: When designing traffic light control systems with different light states.
      Use Case: The State Pattern can be applied to model the states of traffic lights (e.g., red, yellow, green). The behavior of the traffic light is determined by its current state.
      Multithreading Applications:

      Scenario: When developing multithreading applications with thread states.
      Use Case: The State Pattern can be used to model the states of threads (e.g., running, blocked, terminated). The behavior and actions of the thread are determined by its current state.
      MediaPlayer Controls:

      Scenario: When implementing controls for media players with playback states.
      Use Case: The State Pattern can be applied to model different playback states (e.g., play, pause, stop) in a media player. The behavior of the player is defined by its current state.
      Chat Applications:

      Scenario: When developing chat applications with different user states.
      Use Case: The State Pattern can be used to model the states of users in a chat application (e.g., online, offline, away). The behavior of the user's interactions depends on their current state.
      Elevator Control Systems:

      Scenario: When designing elevator control systems with different elevator states.
      Use Case: The State Pattern can be applied to model the states of elevators (e.g., idle, moving up, moving down). The behavior of the elevator is determined by its current state.
      In summary, the State Pattern is beneficial in scenarios where an object's behavior varies based on its internal state, and this behavior needs to be encapsulated in a set of state-specific classes. It promotes flexibility and maintainability by allowing objects to change their behavior dynamically as their states change.

      TrafficLight
      CreateStore
      count
      currentState
      change
      start

      Red
      Yellow
      Green
      light
      go

 * @link https://www.dofactory.com/javascript/design-patterns/state
 * @command to run `yarn jest 20_State.test`
 */

import { consoler } from 'yourails_common'

type GetStateParamsType = { LIGHTS: Record<string, any> }

type GetStateOptionsType = { funcParent?: string }

type GetStateResType = any

interface GetStateType {
  (params: GetStateParamsType, options?: GetStateOptionsType): GetStateResType
}

const setRedLight = (stateObj: any) => {
  return {
    go: () => {
      stateObj.change({ stateNow: 'yellow', statePrev: 'red', stateObj })
    },
  }
}

const setYellowLight = (stateObj: any) => {
  return {
    go: (stateNow: string, lightPrev: string) => {
      const stateNext = lightPrev === 'red' ? 'green' : 'red'
      stateObj.change({ stateNow: stateNext, statePrev: stateNow, stateObj })
    },
  }
}

const setGreenLight = (stateObj: any) => {
  return {
    go: () => {
      stateObj.change({ stateNow: 'yellow', statePrev: 'green', stateObj })
    },
  }
}

/**
 * @description Function to getState
 * @import import { getState } from './getState'
 */

const getState: GetStateType = ({ LIGHTS }: GetStateParamsType) => {
  let count = 0
  const store = {
    stateNow: 'red',
    statePrev: 'yellow',
  }
  const log: string[] = []

  return {
    change: ({ stateNow, statePrev, stateObj }: { stateNow: string; statePrev: string; stateObj: any }) => {
      if (count > 10) return
      if (stateNow) {
        store.stateNow = stateNow
        store.statePrev = statePrev
      }
      log.push(stateNow)
      count += 1
      LIGHTS[stateNow](stateObj).go(stateNow, statePrev)
    },
    getLog: () => log,
  }
}

export { getState }
export type { GetStateParamsType, GetStateResType, GetStateOptionsType, GetStateType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/20_State/20_State.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetStateParamsType
      options: GetStateOptionsType
      expected: GetStateResType
    }

    const LIGHTS: Record<string, any> = {
      red: setRedLight,
      yellow: setYellowLight,
      green: setGreenLight,
    }

    const examples: ExampleType[] = [
      {
        description: 'Example of State design pattern',
        params: { LIGHTS },
        options: {},
        expected: ['red', 'yellow', 'green', 'yellow', 'red', 'yellow', 'green', 'yellow', 'red', 'yellow', 'green'],
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const stateObj = await getState(params)
      stateObj.change({ stateNow: 'red', statePrev: 'yellow', stateObj })
      const output = stateObj.getLog()

      consoler(`getState [160-${index}]`, {
        description,
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
