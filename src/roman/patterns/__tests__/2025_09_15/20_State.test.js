/**
 * @description Pattern: The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state
 * @narrative
      The State Pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. Here are some common use cases for applying the State Pattern:

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

describe('Behavioral Patterns', () => {
  it('-- Pattern: State with getters, setters, fungs example, as I rememeber it, 2022-01-19', () => {
    const GetterSetterFung = function () {
      let fungs = { isFungs: false, numberFungs: 0 }

      this.getStatus = function () {
        return fungs
      }

      this.setStatus = function (numberFungs) {
        fungs = { isFungs: true, numberFungs }
        if (typeof numberFungs !== 'number' || numberFungs <= 0) {
          fungs = { isFungs: false, numberFungs: 0 }
        }
        return fungs
      }
    }

    const input = [0, 10, 12, 0]

    const getterSetterFungInstance = new GetterSetterFung()

    const output = input.map(item => {
      getterSetterFungInstance.setStatus(item)
      return getterSetterFungInstance.getStatus()
    })

    const expected = [
      { isFungs: false, numberFungs: 0 },
      { isFungs: true, numberFungs: 10 },
      { isFungs: true, numberFungs: 12 },
      { isFungs: false, numberFungs: 0 },
    ]

    // console.info('24_GetterSetter.test [41]', { output })

    expect(output).toEqual(expected)
  })

  it("-- Pattern: State  Alter an object's behavior when its state changes, 2021-12-26", () => {
    class CreateStore {
      constructor(props) {
        this.state = [props]
      }

      state = []

      dispatch(lightObj) {
        this.state = [...this.state, lightObj]
      }

      getState() {
        return this.state.slice(-1)[0]
      }

      getStateHistory() {
        return this.state
      }
    }

    const store = new CreateStore({ light: 'red' })

    store.dispatch({ light: 'yellow' })

    store.dispatch({ light: 'green' })

    // console.info('state 2', {
    //   stateHistory: store.getStateHistory(),
    //   getState: store.getState(),
    // })

    const expectStateHistory = [{ light: 'red' }, { light: 'yellow' }, { light: 'green' }]
    const expectState = { light: 'green' }
    expect(store.getStateHistory()).toEqual(expectStateHistory)
    expect(store.getState()).toEqual(expectState)
  })

  it("--  2020=11-01 Pattern: State  Alter an object's behavior when its state changes", () => {
    function CreateStore(initialState) {
      this.state = [initialState]
    }

    CreateStore.prototype = {
      dispatch(state) {
        this.state = [...this.state, state]
      },
      getState() {
        return this.state.length > 0 ? this.state[this.state.length - 1] : {}
      },
      getStateHistory() {
        return this.state
      },
    }

    const store = new CreateStore({ light: 'red' })

    store.dispatch({ light: 'yellow' })
    store.dispatch({ light: 'green' })

    // console.info('state', {
    //   stateHistory: store.getStateHistory(),
    //   getState: store.getState(),
    // })

    const expectStateHistory = [{ light: 'red' }, { light: 'yellow' }, { light: 'green' }]
    const expectState = { light: 'green' }
    expect(store.getStateHistory()).toEqual(expectStateHistory)
    expect(store.getState()).toEqual(expectState)
  })
})
