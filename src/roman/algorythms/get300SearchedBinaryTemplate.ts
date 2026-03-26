import { consoler } from 'yourails_common'

/*
AI Prompt: Context: javascript, typescript, algorithms
Question: Give me a basic example of task/ challenge and its implementation with arrow functions for Binary search: This algorithm works by repeatedly dividing the search interval in half, eliminating half of the remaining elements at each step. It is much faster than linear search, but requires the data to be sorted first.

Coding-interview style task for using arrow functions in TypeScript/JavaScript.

Task (Challenge)

You are given a sorted array of numbers.
Write a function that uses Binary Search to find the index of a target value.

Rules:

If the value exists → return its index

If the value does not exist → return -1

The array is already sorted in ascending order
*/

type Get300SearchedBinaryTemplatePropsType = {
  inputArray: number[]
  target: number
}

type Get300SearchedBinaryTemplateResType = number

const get300SearchedBinaryTemplate = ({
  inputArray,
  target,
}: Get300SearchedBinaryTemplatePropsType): Get300SearchedBinaryTemplateResType => {
  return 4
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get300SearchedBinary03.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: Get300SearchedBinaryTemplatePropsType
      expected: Get300SearchedBinaryTemplateResType
    }
    const examples: ExampleType[] = [
      {
        params: { inputArray: [2, 5, 7, 9, 12, 15, 20], target: 12 },
        expected: 4,
      },
    ]

    const output = await Promise.all(
      examples.map(async (example: ExampleType, index: number) => {
        const { params, expected } = example

        const output = await get300SearchedBinaryTemplate(params)
        console.info(`getTemplateFunc [74-${index}]`, {
          params,
          output,
          tested: JSON.stringify(output) === JSON.stringify(expected),
        })
        return JSON.stringify(output) === JSON.stringify(expected)
      })
    )

    console.info('get213AreasPromise06 [124]', { output })
  })()
}
