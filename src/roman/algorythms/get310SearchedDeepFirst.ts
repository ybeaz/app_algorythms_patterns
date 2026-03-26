import { consoler } from 'yourails_common'
import { withTryCatchFinallyWrapper, FuncModeEnumType, WithTryCatchFinallyWrapperOptionsType } from 'yourails_common'

type Get310SearchedDeepFirstParamsType = {
  obj: Record<string, string[]>
  start: string
  target: string
  visited?: Set<string>
}

type Get310SearchedDeepFirstOptionsType = { funcParent?: string }

type Get310SearchedDeepFirstResType = {
  visited: Set<string>
  result: boolean
}

interface Get310SearchedDeepFirstType {
  (params: Get310SearchedDeepFirstParamsType): Get310SearchedDeepFirstResType
}

/**
 * @description Function to implement Seach Deep First > get310SearchedDeepFirst
 *              DFS	Stack / recursion	Go deep first
 *              Stack (LIFO), a stack of plates:Last plate placed → first one taken
 * @import import { get310SearchedDeepFirst } from './get310SearchedDeepFirst'
 */

const get310SearchedDeepFirstUnsafe: Get310SearchedDeepFirstType = ({
  obj,
  start,
  target,
  visited = new Set<string>(),
}: Get310SearchedDeepFirstParamsType) => {
  // consoler('get310SearchedDeepFirst [35]', {
  //   start,
  //   target,
  //   'start === target': start === target,
  //   'visited.has(start)': visited.has(start),
  // })
  if (start === target) return { result: true, visited }
  if (visited.has(start)) return { result: false, visited }
  visited.add(start)

  for (const step of obj[start]) {
    // consoler('get310SearchedDeepFirst [47]', {
    //   start,
    //   target,
    //   step,
    //   'start === target': start === target,
    //   visited,
    //   // 'visited.has(start)': visited.has(start),
    //   '!obj[step]': !obj[step],
    // })

    if (!obj[step] && step !== target) continue

    const res = get310SearchedDeepFirstUnsafe({
      obj,
      start: step,
      target,
      visited,
    })

    if (res.result) return res
  }

  return { result: false, visited }
}

const optionsDefault: Required<Get310SearchedDeepFirstOptionsType> = {
  funcParent: 'get310SearchedDeepFirst',
}

const resDefault: Get310SearchedDeepFirstResType = { result: false, visited: new Set() }

const get310SearchedDeepFirst: Get310SearchedDeepFirstType = withTryCatchFinallyWrapper(get310SearchedDeepFirstUnsafe, {
  optionsDefault,
  resDefault,
  funcMode: FuncModeEnumType.common,
  isFinally: false,
})

export { get310SearchedDeepFirst }
export type {
  Get310SearchedDeepFirstParamsType,
  Get310SearchedDeepFirstResType,
  Get310SearchedDeepFirstOptionsType,
  Get310SearchedDeepFirstType,
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get310SearchedDeepFirst.ts
 * @test yarn jest get310SearchedDeepFirst.test.ts --coverage --collectCoverageFrom="src/Shared/get310SearchedDeepFirst.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: Get310SearchedDeepFirstParamsType
      options: Get310SearchedDeepFirstOptionsType
      expected: Get310SearchedDeepFirstResType
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

      const output = await get310SearchedDeepFirst(params)
      consoler(`get310SearchedDeepFirst [61-${index}]`, {
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
