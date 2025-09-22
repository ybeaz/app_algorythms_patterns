/**
 * @description Pattern: Command  Encapsulate a command request as an object
 * @narrative
      The Command Pattern is a behavioral design pattern that encapsulates a request as an object, allowing for parameterization of clients with different requests, queuing of requests, and support for undoable operations. Here are some common use cases for applying the Command Pattern:

      Remote Controls and Buttons:

      Scenario: When designing remote controls or button interfaces that need to trigger various operations.
      Use Case: The Command Pattern can be used to encapsulate each operation as a command object. The remote control holds a collection of command objects, allowing users to associate different commands with buttons.
      Undo and Redo Functionality:

      Scenario: When implementing undo and redo functionality in applications.
      Use Case: The Command Pattern is suitable for creating command objects that represent actions. These command objects are stored in a stack, allowing for easy undo and redo by popping commands from the stack.
      Menu Systems in GUIs:

      Scenario: When designing menu systems in graphical user interfaces.
      Use Case: The Command Pattern can be applied to encapsulate menu actions as command objects. Each menu item holds a command, and users can interact with the menu to execute the associated commands.
      Transactional Systems:

      Scenario: When dealing with systems that require atomic or transactional operations.
      Use Case: The Command Pattern can be used to encapsulate a sequence of operations as a command object. The execution of the command ensures that all operations within it are performed atomically.
      Macro Recording and Playback:

      Scenario: When implementing macro recording and playback functionality.
      Use Case: The Command Pattern allows for creating macro commands that encapsulate a series of individual commands. Users can record a sequence of operations as a macro and later play it back as a single command.
      Multi-Level Undo:

      Scenario: When supporting multi-level undo functionality.
      Use Case: The Command Pattern can be extended to support multiple levels of undo by maintaining a history of executed commands. Each command knows how to undo its operation.
      Thread Pooling:

      Scenario: When managing a thread pool for executing tasks.
      Use Case: The Command Pattern can be applied to encapsulate tasks as command objects. The thread pool can execute these command objects, allowing for flexible and scalable task execution.
      Document Editing:

      Scenario: When implementing document editing functionality.
      Use Case: The Command Pattern is applicable for representing document operations (e.g., cut, copy, paste) as command objects. Users interact with the document through commands, facilitating undo and redo.
      Wizard or Workflow Systems:

      Scenario: When creating wizards or workflow systems with sequential steps.
      Use Case: The Command Pattern can be used to represent each step in the wizard or workflow as a command object. Users move through the steps by executing the corresponding commands.
      Game Controls:

      Scenario: When implementing controls for games with various actions.
      Use Case: The Command Pattern can be applied to represent game actions (e.g., move, attack, jump) as command objects. Players can map these commands to different input controls.
      Smart Home Devices:

      Scenario: When designing systems for smart home devices with different functionalities.
      Use Case: The Command Pattern can be used to represent device actions as command objects. Users can control devices by executing commands associated with specific actions.
      Transactional Database Operations:

      Scenario: When dealing with database operations that need to be executed within a transaction.
      Use Case: The Command Pattern can be applied to encapsulate database operations as command objects. The execution of the command ensures that the operations are performed within a transaction.
      In summary, the Command Pattern is useful in scenarios where you want to decouple the sender and receiver of a request and parameterize objects based on different commands. It provides flexibility, extensibility, and supports features like undo, redo, and macro recording.

      add
      x, y

      sub
      x, y

      mul
      x, y

      div
      x, y

      Command
      execute, undo, value
      execute
      undo
      value

      AddCommand
      value
      Command
      add, sub, value

      SubCommand
      value
      Command
      sub, add, value

      MulCommand
      value
      Command
      mul, div, value

      DivCommand
      value
      Command
      div, mul, value

      Calculator
      current
      commands
      action
      command
      name

      execute
      command
      current
      commands

      undo
      command
      current

      getCurrentValue

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 14_Command.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Command  Encapsulate a command request as an object', () => {
    function add(x, y) {
      return x + y
    }
    function sub(x, y) {
      return x - y
    }
    function mul(x, y) {
      return x * y
    }
    function div(x, y) {
      return x / y
    }

    function Command(execute, undo, value) {
      this.execute = execute
      this.undo = undo
      this.value = value
    }

    function AddCommand(value) {
      this.execute = add
      this.undo = sub
      this.value = value
    }

    function SubCommand(value) {
      this.execute = sub
      this.undo = add
      this.value = value
    }

    function MulCommand(value) {
      this.execute = mul
      this.undo = div
      this.value = value
    }

    function DivCommand(value) {
      this.execute = div
      this.undo = mul
      this.value = value
    }

    function Calculator() {
      let currentValue = 0
      let commands = []
      let actions = []

      const getAction = function (command) {
        const name = command.execute.toString().substr(9, 3)
        return name.charAt(0).toUpperCase() + name.slice(1)
      }
      return {
        execute(command) {
          commands = [...commands, command]
          const action = getAction(command)
          actions = [...actions, action]
          currentValue = command.execute(currentValue, command.value)
        },
        undo() {
          const command = commands.pop()
          const action = getAction(command)
          actions = [...actions, `undo ${action}`]
          currentValue = command.undo(currentValue, command.value)
        },
        getState() {
          return { currentValue, commands, actions }
        },
      }
    }

    const calculator = new Calculator()

    calculator.execute(new AddCommand(100))
    calculator.execute(new SubCommand(24))
    // console.info('[1]', { actions: calculator.getState().actions })
    let expected = ['Add', 'Sub']
    expect(calculator.getState().actions).toEqual(expected)
    expect(calculator.getState().currentValue).toBe(76)

    calculator.execute(new MulCommand(6))
    calculator.execute(new DivCommand(2))
    // console.info('[2]', { actions: calculator.getState().actions })
    expected = ['Add', 'Sub', 'Mul', 'Div']
    expect(calculator.getState().actions).toEqual(expected)
    expect(calculator.getState().currentValue).toBe(228)

    calculator.undo()
    calculator.undo()
    // console.info('[3]', { actions: calculator.getState().actions })
    expected = ['Add', 'Sub', 'Mul', 'Div', 'undo Div', 'undo Mul']
    expect(calculator.getState().actions).toEqual(expected)
    expect(calculator.getState().currentValue).toBe(76)
  })
})
