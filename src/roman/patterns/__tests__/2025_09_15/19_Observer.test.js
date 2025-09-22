/**
 * @description Pattern: The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript
 * @narrative
      The Observer Pattern is a behavioral design pattern that offers a subscription model where objects (observers) subscribe to an event, and they get notified when the event occurs. This pattern is fundamental to event-driven programming and is widely used, including in JavaScript. Here are some common use cases for applying the Observer Pattern:

      User Interface (UI) Components:

      Scenario: When developing user interfaces with components that need to react to user actions.
      Use Case: The Observer Pattern is applied to allow UI components to subscribe to user events (e.g., button clicks, mouse movements). When the events occur, the subscribed components are notified and can update their state accordingly.
      Model-View-Controller (MVC) Architecture:

      Scenario: When implementing applications using the MVC architectural pattern.
      Use Case: The Observer Pattern is often used to implement the communication between the model and the view. Views subscribe to changes in the model's state, and when the state changes, the views are notified to update their presentation.
      Event Handling in Web Browsers:

      Scenario: When handling events in web browsers using JavaScript.
      Use Case: The Observer Pattern is a key component in the event-driven model of JavaScript. DOM elements can serve as subjects, and event listeners act as observers. When an event occurs (e.g., a button click), registered event listeners are notified.
      Pub/Sub Systems:

      Scenario: When implementing publish/subscribe systems for communication between different parts of an application.
      Use Case: The Observer Pattern can be extended to create a pub/sub (publish/subscribe) system where publishers emit events, and subscribers receive notifications. This is common in message-based architectures.
      Custom Event Systems:

      Scenario: When creating custom event systems for inter-component communication.
      Use Case: The Observer Pattern can be used to implement custom event systems where objects can subscribe to and publish custom events. This is useful for decoupling components in an application.
      Message Brokers:

      Scenario: When designing systems that use message brokers for communication.
      Use Case: The Observer Pattern is applicable to message broker systems where subscribers (consumers) subscribe to specific message channels. When a message is published on a channel, the subscribers are notified.
      Asynchronous Programming:

      Scenario: When dealing with asynchronous programming and handling asynchronous events.
      Use Case: The Observer Pattern is often used in asynchronous programming to handle callbacks. Callback functions act as observers that get executed when asynchronous operations complete.
      Logging and Monitoring Systems:

      Scenario: When implementing logging or monitoring systems that need to react to specific events.
      Use Case: The Observer Pattern is applied to allow loggers or monitors to subscribe to specific events (e.g., errors, warnings). When these events occur, the subscribed observers can take appropriate actions.
      Data Binding in Frameworks:

      Scenario: When using frameworks that support data binding between different parts of an application.
      Use Case: The Observer Pattern is often used in frameworks that support two-way data binding. Changes in the model are automatically reflected in the views, and vice versa.
      Distributed Systems:

      Scenario: When designing distributed systems with multiple components communicating across a network.
      Use Case: The Observer Pattern can be used to implement communication between distributed components. Observers in different locations can subscribe to events or updates from remote subjects.
      Game Development:

      Scenario: When developing games with events such as player input or game state changes.
      Use Case: The Observer Pattern is applied to allow game entities or systems to subscribe to specific events, such as player actions or changes in the game world.
      Automated Testing:

      Scenario: When writing automated tests that need to react to specific conditions.
      Use Case: The Observer Pattern can be used in testing frameworks to allow test cases to subscribe to events and be notified when certain conditions are met during test execution.
      In summary, the Observer Pattern is versatile and finds application in various domains, especially in scenarios where components need to react to events or changes in a decoupled and flexible manner.

      Click
      handlers

      Click
      subscribe
      fn
      unsubscribe
      handlers

      fire
      o, thisObj
      scope
      handlers

 * @link https://www.dofactory.com/javascript/design-patterns/observer
 * @command to run `yarn jest 19_Observer.test`
 */

describe('Behavioral Patterns', () => {
  it('--  2023-09-25 Pattern: Observer. A way of notifying change to a number of functions with args', () => {
    const GetClicked = function () {
      this.handlers = []

      this.subscribe = func => {
        if (this.handlers.find(handler => handler === func)) return
        this.handlers = [...this.handlers, func]
      }

      this.unsubscribe = func => {
        this.handlers = this.handlers.filter(handler => handler !== func)
      }

      this.fire = params => {
        this.handlers.forEach(handler => handler(params))
      }
    }

    const EventLog = function () {
      this.log = []

      this.setLog = num => {
        this.log = [...this.log, num]
      }

      this.getLog = () => this.log
    }

    const eventLog = new EventLog()
    const fn = eventLog.setLog

    const click = new GetClicked()

    click.subscribe(fn)
    click.fire(1)
    click.fire(2)
    click.unsubscribe(fn)
    click.fire(3)
    click.fire(4)
    click.subscribe(fn)
    click.subscribe(fn)
    click.fire(5)
    click.fire(6)

    const log = eventLog.getLog()
    // console.info('eventLog [67]', { log, eventLog })

    const expected = [1, 2, 5, 6]
    expect(log).toEqual(expected)
  })

  it('--  2020-12-26 Pattern: Observer  A way of notifying change to a number of classes', () => {
    class Click {
      handlers = []

      subscribe(func) {
        this.handlers = [...this.handlers, func]
      }
      unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item !== func)
      }

      fire(num, thisObj) {
        const self = thisObj || window
        this.handlers.forEach(item => {
          item.call(self, num)
        })
      }
    }

    const EventLog = function () {
      this.log = []

      this.setLog = num => {
        this.log = [...this.log, num]
      }

      this.getLog = () => this.log
    }

    const eventLog = new EventLog()
    const fn = eventLog.setLog

    const click = new Click()

    click.subscribe(fn)
    click.fire(1)
    click.fire(2)
    click.unsubscribe(fn)
    click.fire(3)
    click.fire(4)
    click.subscribe(fn)
    click.fire(5)
    click.fire(6)

    const log = eventLog.getLog()
    // console.info('eventLog', { eventLog })

    const expected = [1, 2, 5, 6]
    expect(log).toEqual(expected)
  })

  it('--  2020-11-01 Pattern: Observer  A way of notifying change to a number of classes', () => {
    function Click() {
      this.handlers = []
    }

    Click.prototype = {
      subscribe(fn) {
        this.handlers = [...this.handlers, fn]
      },
      unsubscribe(fn) {
        this.handlers = this.handlers.filter(item => item !== fn)
      },
      fire(num, thisObj) {
        const self = thisObj || window
        this.handlers.forEach(item => {
          item.call(self, num)
        })
      },
    }

    let eventLog = []
    function fn(n) {
      eventLog = [...eventLog, n]
    }

    const click = new Click()

    click.subscribe(fn)
    click.fire(1)
    click.fire(2)
    click.unsubscribe(fn)
    click.fire(3)
    click.fire(4)
    click.subscribe(fn)
    click.fire(5)
    click.fire(6)

    // console.info('eventLog', { eventLog })

    const expected = [1, 2, 5, 6]
    expect(eventLog).toEqual(expected)
  })
})
