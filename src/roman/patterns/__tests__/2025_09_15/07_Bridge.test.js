/**
 * @description Pattern: Bridge	Separates an object’s interface from its implementation
 * @narrative
      The Bridge Pattern is a structural design pattern that separates the abstraction (interface) from its implementation, allowing them to vary independently. This pattern is useful when you want to avoid a permanent binding between an abstraction and its implementation and to provide a way to extend both without affecting the other. Here are some common use cases for applying the Bridge Pattern:

      Graphic System:

      Scenario: In a graphic system where shapes and rendering methods can vary independently.
      Use Case: The Bridge Pattern can be used to separate the abstraction (e.g., shape) from its implementation (e.g., rendering), allowing for new shapes or rendering methods to be added without modifying existing code.
      Remote Controls and Devices:

      Scenario: When implementing remote controls that can operate different types of electronic devices.
      Use Case: The Bridge Pattern can be applied to separate the abstraction of a remote control from the implementation of the electronic devices, allowing for easy addition of new devices without modifying the remote control code.
      Windowing Systems:

      Scenario: In a windowing system where different platforms have different window controls.
      Use Case: The Bridge Pattern can be used to separate the abstraction of window controls from their platform-specific implementation, enabling the addition of new platforms or window controls without affecting existing code.
      Database Abstraction:

      Scenario: When designing a database abstraction layer that supports multiple database systems.
      Use Case: The Bridge Pattern can be applied to separate the abstraction of database operations from their specific implementations for different database systems, allowing for support of new databases without changing the core database abstraction code.
      Networking Layers:

      Scenario: In a networking system where different communication protocols need to be supported.
      Use Case: The Bridge Pattern can be used to separate the abstraction of networking operations from their specific implementations for different protocols, enabling the addition of new protocols without affecting existing code.
      Audio/Video Players:

      Scenario: When building audio or video players that can support various file formats.
      Use Case: The Bridge Pattern can be applied to separate the abstraction of media players from the specific implementations for different file formats, allowing for the addition of new formats without modifying the player code.
      Printers and Print Implementations:

      Scenario: In a printing system where different printers have different ways of handling print jobs.
      Use Case: The Bridge Pattern can be used to separate the abstraction of printing from its implementation for different printer types, allowing for the addition of new printers without altering existing print code.
      Notification Systems:

      Scenario: When designing a notification system that can send messages through various channels (e.g., email, SMS, push notifications).
      Use Case: The Bridge Pattern can be applied to separate the abstraction of notifications from their implementation for different channels, allowing for the addition of new notification channels without modifying the core notification system.
      Sorting Algorithms:

      Scenario: When implementing sorting algorithms where different algorithms can be applied to different data structures.
      Use Case: The Bridge Pattern can be used to separate the abstraction of sorting from the specific implementations for different data structures, enabling the addition of new sorting algorithms without changing the sorting code.
      In each of these use cases, the Bridge Pattern provides a way to decouple abstraction from implementation, allowing for more flexibility, extensibility, and the ability to add new features without modifying existing code. It helps manage complexity and promotes a modular and scalable design.

      Gestures
      output
      tap
      swipe
      pan
      pinch

      Mouse
      output
      click
      move
      down
      wheel

      Screen
      click
      move
      drag
      zoom

      Audio
      click
      move
      drag
      zoom

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 07_Bridge.test`
 */

describe('Structural Patterns', () => {
  it('-- Pattern: Bridge	Separates an object’s interface from its implementation', () => {
    function Gesture(output) {
      this.output = output
      this.tap = function () {
        this.output.click()
      }
      this.swipe = function () {
        this.output.move()
      }
      this.pan = function () {
        this.output.drag()
      }
      this.pinch = function () {
        this.output.zoom()
      }
    }

    function Mouse(output) {
      this.output = output
      this.click = function () {
        this.output.click()
      }
      this.move = function () {
        this.output.move()
      }
      this.down = function () {
        this.output.drag()
      }
      this.wheel = function () {
        this.output.zoom()
      }
    }

    function Screen() {
      this.result = []
      this.click = function () {
        this.result = [...this.result, 'Screen is selected']
      }
      this.move = function () {
        this.result = [...this.result, 'Screen is moved']
      }
      this.drag = function () {
        this.result = [...this.result, 'Screen is dragged']
      }
      this.zoom = function () {
        this.result = [...this.result, 'Screen is zoomed']
      }
    }

    function Audio() {
      this.result = []
      this.click = function () {
        this.result = [...this.result, 'Sound oink']
      }
      this.move = function () {
        this.result = [...this.result, 'Sound waves']
      }
      this.drag = function () {
        this.result = [...this.result, 'Sound scretch']
      }
      this.zoom = function () {
        this.result = [...this.result, 'Sound volume up']
      }
    }

    const screen = new Screen()
    const audio = new Audio()
    const screen02 = new Screen()
    const audio02 = new Audio()

    const handWithScreen = new Gesture(screen)
    const mouseWithAudio = new Mouse(audio)
    const handWithAudio = new Gesture(audio02)
    const mouseWithScreen = new Mouse(screen02)

    handWithScreen.tap()
    handWithScreen.pinch()

    // console.info('01', {
    //   'screen.result': screen.result,
    //   expected: ['Screen is selected', 'Screen is zoomed'],
    // })
    let expected = ['Screen is selected', 'Screen is zoomed']
    expect(screen.result).toEqual(expected)

    mouseWithAudio.move()
    mouseWithAudio.down()

    // console.info('02', {
    //   'audio.result': audio.result,
    //   expected: ['Sound waves', 'Sound scretch'],
    // })
    expected = ['Sound waves', 'Sound scretch']
    expect(audio.result).toEqual(expected)

    handWithAudio.tap()
    handWithAudio.pan()

    // console.info('[03]', {
    //   'audio02.result': audio02.result,
    //   expected: ['Sound oink', 'Sound scretch'],
    // })
    expected = ['Sound oink', 'Sound scretch']
    expect(audio02.result).toEqual(expected)

    mouseWithScreen.move()
    mouseWithScreen.wheel()

    // console.info('[04]', {
    //   'screen02.result': screen02.result,
    //   expected: ['Screen is moved', 'Screen is zoomed'],
    // })
    expected = ['Screen is moved', 'Screen is zoomed']
    expect(screen02.result).toEqual(expected)
  })
})
