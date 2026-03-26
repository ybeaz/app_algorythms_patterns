import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get315SearchedBreadthFirstParamsType = {
  obj: Record<string, string[]>
  start: string
  target: string
  visited?: Set<string>
}

type Get315SearchedBreadthFirstOptionsType = { funcParent?: string }

type Get315SearchedBreadthFirstResType = {
  visited: Set<string>
  result: boolean
}

interface Get315SearchedBreadthFirstType {
  (params: Get315SearchedBreadthFirstParamsType): Get315SearchedBreadthFirstResType
}

/**
 * @description Function to implement Seach Breadth First > get315SearchedBreadthFirst
 *              BFS Queue Go level by level
 *              Queue (FIFO), a line at a store: First person in line → first person served
 * @import import { get315SearchedBreadthFirst } from './get315SearchedBreadthFirst'
 */

const get315SearchedBreadthFirstUnsafe: Get315SearchedBreadthFirstType = ({
  obj,
  start,
  target,
  visited = new Set<string>(),
}: Get315SearchedBreadthFirstParamsType) => {
  const queue = [start]

  visited.add(start)

  while (queue.length > 0) {
    const node: string = queue.shift() || ''
    if (node === target)
      return {
        result: true,
        visited,
      }

    if (!obj[node]) continue

    for (const neighbor of obj[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }

  return {
    result: false,
    visited,
  }
}

const optionsDefault: Required<Get315SearchedBreadthFirstOptionsType> = {
  funcParent: 'get315SearchedBreadthFirst',
}

const resDefault: Get315SearchedBreadthFirstResType = { result: false, visited: new Set() }

const get315SearchedBreadthFirst: Get315SearchedBreadthFirstType = withTryCatchFinallyWrapper(
  get315SearchedBreadthFirstUnsafe,
  {
    optionsDefault,
    resDefault,
    funcMode: FuncModeEnumType.common,
    isFinally: false,
  }
)

export { get315SearchedBreadthFirst }
export type {
  Get315SearchedBreadthFirstParamsType,
  Get315SearchedBreadthFirstResType,
  Get315SearchedBreadthFirstOptionsType,
  Get315SearchedBreadthFirstType,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get315SearchedBreadthFirst.ts
 * @test yarn jest get315SearchedBreadthFirst.test.ts --coverage --collectCoverageFrom="src/Shared/get315SearchedBreadthFirst.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get315SearchedBreadthFirstParamsType
      options: Get315SearchedBreadthFirstOptionsType
      expected: Get315SearchedBreadthFirstResType
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
      C: ['Q', 'F', 'K'],
      D: [],
      E: ['H'],
      F: ['R'],
    }

    const examples: ExampleType[] = [
      {
        description: 'A → B → D',
        params: { obj: graph, start: 'A', target: 'E' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B', 'D']) },
      },
      {
        description: 'A → B → D → C → F',
        params: { obj: graph2, start: 'A', target: 'R' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B', 'D', 'C', 'F']) },
      },
      {
        description: 'A → B',
        params: { obj: graph2, start: 'A', target: 'D' },
        options: {},
        expected: { result: true, visited: new Set(['A', 'B']) },
      },
      {
        description: 'A <> H',
        params: { obj: graph2, start: 'A', target: 'H' },
        options: {},
        expected: { result: false, visited: new Set(['A', 'B', 'D', 'C', 'F']) },
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const output = await get315SearchedBreadthFirst(params)
      consoler(`get315SearchedBreadthFirst [61-${index}]`, {
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
