/**
 * @description Pattern: Interpreter  A way to include language elements in a program
 * @narrative The Interpreter Pattern is a behavioral design pattern that defines a grammar for interpreting the sentences in a language and provides an interpreter to interpret the sentences. Here are some common use cases for applying the Interpreter Pattern:

      Query Languages:

      Scenario: When dealing with query languages for databases or search engines.
      Use Case: The Interpreter Pattern can be applied to parse and interpret query expressions. Each element of the query language is represented as a non-terminal expression, and the interpreter processes the expression to perform the query.
      Regular Expressions:

      Scenario: When working with regular expressions for pattern matching.
      Use Case: The Interpreter Pattern can be used to implement a regular expression interpreter. Each regular expression pattern is represented as a non-terminal expression, and the interpreter matches input strings against the pattern.
      Mathematical Expressions:

      Scenario: When evaluating mathematical expressions or formulas in a program.
      Use Case: The Interpreter Pattern can be applied to create an interpreter for mathematical expressions. Each mathematical operation or function is represented as a non-terminal expression, and the interpreter evaluates the expression.
      Configuration Languages:

      Scenario: When defining configuration languages for specifying system settings.
      Use Case: The Interpreter Pattern can be used to parse and interpret configuration language expressions. Each configuration setting is represented as a non-terminal expression, and the interpreter applies the settings accordingly.
      Markup Languages:

      Scenario: When working with markup languages like HTML or XML.
      Use Case: The Interpreter Pattern can be applied to create interpreters for markup languages. Elements and attributes in the markup language are represented as non-terminal expressions, and the interpreter processes the markup.
      Domain-Specific Languages (DSLs):

      Scenario: When designing domain-specific languages for specific problem domains.
      Use Case: The Interpreter Pattern is useful for implementing DSLs. Each construct in the DSL is represented as a non-terminal expression, and the interpreter executes the DSL commands.
      Rule-Based Systems:

      Scenario: When implementing rule-based systems or expert systems.
      Use Case: The Interpreter Pattern can be applied to interpret rules in a rule-based system. Each rule is represented as a non-terminal expression, and the interpreter evaluates the rules to make decisions.
      Network Protocols:

      Scenario: When implementing protocols for communication between systems.
      Use Case: The Interpreter Pattern can be used to interpret messages or commands in network protocols. Each protocol command is represented as a non-terminal expression, and the interpreter processes the communication.
      Natural Language Processing (NLP):

      Scenario: When working with natural language processing applications.
      Use Case: The Interpreter Pattern can be applied to create language interpreters for processing natural language inputs. Each language element is represented as a non-terminal expression, and the interpreter extracts meaning from the input.
      Symbolic Computation:

      Scenario: When performing symbolic computations in symbolic mathematics or computer algebra systems.
      Use Case: The Interpreter Pattern can be used to interpret symbolic expressions. Mathematical symbols and operations are represented as non-terminal expressions, and the interpreter performs symbolic computations.
      Template Engines:

      Scenario: When implementing template engines for generating dynamic content.
      Use Case: The Interpreter Pattern can be applied to interpret template expressions. Variables, loops, and conditionals in templates are represented as non-terminal expressions, and the interpreter generates dynamic content.
      AI and Machine Learning:

      Scenario: When designing systems that interpret and execute instructions in AI or machine learning scenarios.
      Use Case: The Interpreter Pattern can be applied to interpret and execute instructions in AI algorithms or machine learning models. Each instruction or algorithmic step is represented as a non-terminal expression, and the interpreter executes the instructions.
      In each of these use cases, the Interpreter Pattern provides a structured way to interpret language elements within a program. It enables the creation of interpreters for specific languages or grammar rules, allowing the program to process and execute instructions written in those languages.

      Context
      input
      output

      Expression
      name, one, four, five, nine, multiplier

      Expression
      startInputWith
      str
      interpret

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 15_Interpreter.test`
 */

import { consoler } from 'yourails_common'

type MapItemType = { name: string; one: string; four: string; five: string; nine: string; multiplier: number }

type GetInterpreterParamsType = {
  map: MapItemType[]
  input: string
  output?: number
}

type GetInterpreterOptionsType = { funcParent?: string }

type GetInterpreterResType = any

interface GetInterpreterType {
  (params: GetInterpreterParamsType, options?: GetInterpreterOptionsType): GetInterpreterResType
}

const optionsDefault: Required<GetInterpreterOptionsType> = {
  funcParent: 'getInterpreter',
}

/**
 * @description Function to getInterpreter
 * @import import { getInterpreter } from './getInterpreter'
 */

const getInterpreter: GetInterpreterType = ({ map, input: inputIn, output: outputIn = 0 }: GetInterpreterParamsType) => {
  let input = inputIn
  let output = outputIn

  map.forEach((mapItem: MapItemType) => {
    if (input.startsWith(mapItem.nine)) {
      input = input.substring(2)
      output += 9 * mapItem.multiplier
    } else if (input.startsWith(mapItem.four)) {
      input = input.substring(2)
      output += 4 * mapItem.multiplier
    } else if (input.startsWith(mapItem.five)) {
      input = input.substring(1)
      output += 5 * mapItem.multiplier
    } else if (input.startsWith(mapItem.one)) {
      input = input.substring(1)
      output += 1 * mapItem.multiplier
    }
  })

  if (input.length) output = getInterpreter({ map, input, output })

  return output
}

export { getInterpreter }
export type { GetInterpreterParamsType, GetInterpreterResType, GetInterpreterOptionsType, GetInterpreterType }

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/patterns/15_Interpreter/15_Interpreter.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetInterpreterParamsType
      options: GetInterpreterOptionsType
      expected: GetInterpreterResType
    }
    const examples: ExampleType[] = [
      {
        description: 'Interpret Rome number',
        params: {
          map: [
            { name: 'thousand', one: 'M', four: ' ', five: ' ', nine: ' ', multiplier: 1000 },
            { name: 'hundred', one: 'C', four: 'CD', five: 'D', nine: 'CM', multiplier: 100 },
            { name: 'ten', one: 'X', four: 'XL', five: 'L', nine: 'XC', multiplier: 10 },
            { name: 'one', one: 'I', four: 'IV', five: 'V', nine: 'IX', multiplier: 1 },
          ],
          input: 'MCMXXVIII',
        },
        options: {},
        expected: 1928,
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const output = await getInterpreter(params, options)
      consoler(`getInterpreter [61-${index}]`, {
        description: '',
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
