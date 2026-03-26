import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get315SearchedBreadthFirst03ParamsType = {
  obj: Record<string, string[]>
  start: string
  target: string
  visited?: Set<string>
}

type Get315SearchedBreadthFirst03OptionsType = { funcParent?: string }

type Get315SearchedBreadthFirst03ResType = {
  visited: Set<string>
  result: boolean
}

interface Get315SearchedBreadthFirst03Type {
  (params: Get315SearchedBreadthFirst03ParamsType): Get315SearchedBreadthFirst03ResType
}

/**
 * @description Function to implement Seach Breadth First > get315SearchedBreadthFirst03
 *              BFS Queue Go level by level
 *              Queue (FIFO), a line at a store: First person in line → first person served
 * @import import { get315SearchedBreadthFirst03 } from './get315SearchedBreadthFirst03'
 */

const get315SearchedBreadthFirst03Unsafe: Get315SearchedBreadthFirst03Type = ({
  obj,
  start,
  target,
  visited = new Set<string>(),
}: Get315SearchedBreadthFirst03ParamsType) => {
  const queue = [start]

  return {
    result: false,
    visited: new Set(),
  }
}

const optionsDefault: Required<Get315SearchedBreadthFirst03OptionsType> = {
  funcParent: 'get315SearchedBreadthFirst03',
}

const resDefault: Get315SearchedBreadthFirst03ResType = { result: false, visited: new Set() }

const get315SearchedBreadthFirst03: Get315SearchedBreadthFirst03Type = withTryCatchFinallyWrapper(
  get315SearchedBreadthFirst03Unsafe,
  {
    optionsDefault,
    resDefault,
    funcMode: FuncModeEnumType.common,
    isFinally: false,
  }
)

export { get315SearchedBreadthFirst03 }
export type {
  Get315SearchedBreadthFirst03ParamsType,
  Get315SearchedBreadthFirst03ResType,
  Get315SearchedBreadthFirst03OptionsType,
  Get315SearchedBreadthFirst03Type,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get315SearchedBreadthFirst03.ts
 * @test yarn jest get315SearchedBreadthFirst03.test.ts --coverage --collectCoverageFrom="src/Shared/get315SearchedBreadthFirst03.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get315SearchedBreadthFirst03ParamsType
      options: Get315SearchedBreadthFirst03OptionsType
      expected: Get315SearchedBreadthFirst03ResType
    }

    const graph: Record<string, string[]> = {
      A: ['B', 'C'],
      B: ['D'],
      C: [],
      D: ['E'],
      F: [],
    }

    const graph2: Record<string, string[]> = {
      A: ['B', 'C'],
      B: ['D'],
      C: ['Q', 'F', 'D'],
      D: [],
      E: ['H'],
      F: ['E'],
    }

    const graph3: Record<string, string[]> = {
      A: ['B', 'C', 'G'],
      B: ['D', 'K'],
      C: [],
      D: ['E'],
      F: [],
      G: ['K'],
    }

    const examples: ExampleType[] = [
      {
        description: 'A → B → D → E',
        params: { obj: graph, start: 'A', target: 'E' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B', 'C', 'D', 'E']) },
      },
      {
        description: 'A → C → F → E',
        params: { obj: graph2, start: 'A', target: 'E' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B', 'D', 'C', 'Q', 'F', 'E']) },
      },
      {
        description: 'A → B → D',
        params: { obj: graph2, start: 'A', target: 'D' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B', 'D']) },
      },
      {
        description: 'A <> H',
        params: { obj: graph2, start: 'A', target: 'H' },
        options: {},
        expected: { result: false, visited: new Set([]) },
      },
      {
        description: 'A → B → D',
        params: { obj: graph3, start: 'A', target: 'E' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B', 'C', 'G', 'D', 'K', 'E']) },
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await get315SearchedBreadthFirst03(params)
      consoler(`get315SearchedBreadthFirst03 [61-${index}]`, {
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
