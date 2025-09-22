/**
 * @description Pattern: Chain of Responsibility.	A way of passing a request between a chain of objects
 * @narrative
      The Chain of Responsibility Pattern is a behavioral design pattern that allows an object to pass a request along a chain of potential handlers. Each handler in the chain decides either to process the request or to pass it to the next handler in the chain. Here are some common use cases for applying the Chain of Responsibility Pattern:

      Event Handling in GUIs:

      Scenario: When handling events in graphical user interfaces where different components may need to process the event.
      Use Case: The Chain of Responsibility Pattern can be used to create a chain of event handlers, allowing each handler to decide whether to process the event or pass it to the next handler in the chain.
      Logging Systems:

      Scenario: When logging information at different levels of granularity (e.g., debug, info, error).
      Use Case: The Chain of Responsibility Pattern can be applied to create a chain of loggers, each responsible for handling logs at a specific level. Log messages are passed through the chain until an appropriate logger is found.
      Authorization and Permissions:

      Scenario: When implementing an authorization system where different levels of access need to be checked.
      Use Case: The Chain of Responsibility Pattern can be used to create a chain of authorization handlers, each responsible for checking a specific aspect of permissions. The request is passed through the chain until a handler grants or denies access.
      Workflow Processing:

      Scenario: When processing a workflow with multiple steps or stages.
      Use Case: The Chain of Responsibility Pattern can be applied to create a chain of workflow processors, each handling a specific step. The request (workflow) is passed through the chain until it is fully processed.
      Validation Frameworks:

      Scenario: When validating input data against multiple validation rules.
      Use Case: The Chain of Responsibility Pattern can be used to create a chain of validators, each responsible for validating a specific aspect of the input data. The data is passed through the chain until all validations are complete.
      Error Handling:

      Scenario: When handling errors or exceptions in a system.
      Use Case: The Chain of Responsibility Pattern can be applied to create a chain of error handlers, each handling a specific type of error. The error is passed through the chain until it is handled or logged appropriately.
      Middleware Components in Web Frameworks:

      Scenario: When processing HTTP requests through middleware components in a web framework.
      Use Case: The Chain of Responsibility Pattern can be used to create a chain of middleware components, each responsible for handling a specific aspect of the request (e.g., authentication, logging, compression).
      Command Processing in Command Pattern:

      Scenario: When implementing a command processing system with different command handlers.
      Use Case: The Chain of Responsibility Pattern can be applied within the Command Pattern, where each command handler in the chain is responsible for handling a specific type of command.
      Request Filtering in Web Servers:

      Scenario: When processing HTTP requests in a web server and applying filters.
      Use Case: The Chain of Responsibility Pattern can be used to create a chain of request filters, each responsible for processing a specific aspect of the request (e.g., security checks, compression, caching).
      Parsing and Lexical Analysis:

      Scenario: When parsing input text and applying different lexical analysis rules.
      Use Case: The Chain of Responsibility Pattern can be applied to create a chain of parsers or lexical analyzers, each responsible for handling a specific type of token or syntax rule.
      In each of these use cases, the Chain of Responsibility Pattern provides a flexible way to decouple the sender of a request from its receivers, allowing multiple handlers to process the request in a dynamic and extensible manner. It promotes the principle of "don't ask one object what another object can do for you.

      Request
      amount

      Request
      get
      bill
      count

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 13_Chain_of_Responsibility.test`
 */

describe('Behavioral Patterns', () => {
  it('-- 2022-01-19 Pattern: Chain of Resp III.	A way of passing a request between a chain of objects', () => {
    const calculator = (initValue = 0) => {
      let res2 = initValue

      const output2 = {
        add(y) {
          res2 = res2 + y
          return output2
        },
        substitute(y) {
          res2 = res2 - y
          return output2
        },
        multiply(y) {
          res2 = res2 * y
          return output2
        },
        divide(y) {
          res2 = res2 / y
          return output2
        },
        exec(func) {
          res2 = func(res2)
          return output2
        },
        done() {
          return res2
        },
      }

      return output2
    }

    const outputed = calculator(5)
      .add(9)
      .substitute(7)
      .multiply(4)
      .divide(2)
      .exec(x => 3 * x)
      .done()

    const expected = 42

    // console.info('13_Chain_of_Responsibility.test [38]', { output })
    expect(outputed).toBe(expected)
  })

  it('-- Pattern: Chain of Resp II.	A way of passing a request between a chain of objects 2021-06-01', () => {
    const chain = arg => {
      const obj = {
        res: arg,
        add(...args) {
          this.res += args.reduce((prev, item, i, arr) => {
            return prev + item
          })
          return this
        },
        substitute(sub) {
          this.res = sub
          return this
        },
        exec(f) {
          this.res = f(this.res)
          return this
        },
        done() {
          return this.res
        },
      }

      return obj
    }

    expect(
      chain(5)
        .add(2, 4)
        .substitute(7)
        .exec(x => 3 * x)
        .done()
    ).toBe(21)
  })

  it('-- Pattern: Chain of Resp.	A way of passing a request between a chain of objects', () => {
    function Request(amount) {
      this.amount = amount
      this.tmp = amount
      this.output = []
      // console.info(`Requested $${amount}`)
    }
    Request.prototype = {
      reqBills(bill) {
        const count = Math.floor(this.tmp / bill)
        this.tmp -= bill * count

        this.output = [...this.output, { bill, count }]
        // console.info(`despence ${count} of ${bill}`)
        return this
      },
      res() {
        return this.output
      },
    }

    const request = new Request(1089)
    request.reqBills(100).reqBills(50).reqBills(20).reqBills(10).reqBills(5).reqBills(2).reqBills(1)

    // console.info('[10]', { 'request.res': request.res() })

    const expected = [
      { bill: 100, count: 10 },
      { bill: 50, count: 1 },
      { bill: 20, count: 1 },
      { bill: 10, count: 1 },
      { bill: 5, count: 1 },
      { bill: 2, count: 2 },
      { bill: 1, count: 0 },
    ]
    expect(request.res()).toEqual(expected)
  })
})
