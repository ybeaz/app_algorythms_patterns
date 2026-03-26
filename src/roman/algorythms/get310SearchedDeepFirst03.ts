import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get310SearchedDeepFirst03ParamsType = {
  obj: Record<string, string[]>
  start: string
  target: string
  visited?: Set<string>
}

type Get310SearchedDeepFirst03OptionsType = { funcParent?: string }

type Get310SearchedDeepFirst03ResType = {
  visited: Set<string>
  result: boolean
}

interface Get310SearchedDeepFirst03Type {
  (params: Get310SearchedDeepFirst03ParamsType): Get310SearchedDeepFirst03ResType
}

/**
 * @description Function to implement Seach Deep First > get310SearchedDeepFirst03
 *              DFS	Stack / recursion	Go deep first
 *              Stack (LIFO), a stack of plates:Last plate placed → first one taken
 * @import import { get310SearchedDeepFirst03 } from './get310SearchedDeepFirst03'
 */

const get310SearchedDeepFirst03Unsafe: Get310SearchedDeepFirst03Type = ({
  obj,
  start,
  target,
  visited = new Set<string>(),
}: Get310SearchedDeepFirst03ParamsType) => {
  return { result: false, visited: new Set() }
}

const optionsDefault: Required<Get310SearchedDeepFirst03OptionsType> = {
  funcParent: 'get310SearchedDeepFirst03',
}

const resDefault: Get310SearchedDeepFirst03ResType = { result: false, visited: new Set() }

const get310SearchedDeepFirst03: Get310SearchedDeepFirst03Type = withTryCatchFinallyWrapper(
  get310SearchedDeepFirst03Unsafe,
  {
    optionsDefault,
    resDefault,
    funcMode: FuncModeEnumType.common,
    isFinally: false,
  }
)

export { get310SearchedDeepFirst03 }
export type {
  Get310SearchedDeepFirst03ParamsType,
  Get310SearchedDeepFirst03ResType,
  Get310SearchedDeepFirst03OptionsType,
  Get310SearchedDeepFirst03Type,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get310SearchedDeepFirst03.ts
 * @test yarn jest get310SearchedDeepFirst03.test.ts --coverage --collectCoverageFrom="src/Shared/get310SearchedDeepFirst03.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get310SearchedDeepFirst03ParamsType
      options: Get310SearchedDeepFirst03OptionsType
      expected: Get310SearchedDeepFirst03ResType
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

      const output = await get310SearchedDeepFirst03(params)
      consoler(`get310SearchedDeepFirst03 [61-${index}]`, {
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
