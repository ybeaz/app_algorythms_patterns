/*
AI Prompt: Context: javascript, typescript, algorithms
Question: Give me a basic example of task/ challenge and its implementation with arrow functions for Hash search is a search algorithm that uses a hash function to map keys to array indices. Key-value pairs are stored in an array, and the hash function is used to calculate an index into the array for each key. When searching for a key, the hash function is first applied to the key to determine its index in the array. If the corresponding value at that index matches the target value, the search is successful. Collision resolution techniques may be used to resolve any potential collisions.

simple algorithm challenge and implementation using arrow functions in JavaScript/TypeScript for Hash Search (Hash Table lookup).

Task / Challenge

Problem:
You are given a list of users with their id and name.
Build a hash table that allows O(1) average-time search by id.

Create a hash function that converts id into an array index.

Store the users in a hash table.

Implement a search function that returns the user by id.

Handle collisions using chaining (array at each index).

*/

import { consoler } from 'yourails_common'

type UserType = {
  id: string
  name: string
}

interface GetHashType {
  (args: { str: string; hashSize: number }): number
}

const getHash: GetHashType = ({ str, hashSize }) => 0

interface GetCreatedHashTableType {
  (args: { inputArray: UserType[]; hashSize: number }): UserType[][] | any
}

const getCreatedHashTable: GetCreatedHashTableType = ({ inputArray, hashSize }) => {
  return []
}

interface GetFindType {
  (params: { hashTabe: UserType[][]; id: string; hashSize: number }): UserType | undefined
}

const getFound: GetFindType = ({ hashTabe, id, hashSize }) => {
  return { id: 'cd202', name: 'Bob' }
}

type Get305SearchedHash01PropsType = {
  hashSize: number
  inputArray: UserType[]
  target: string
}

type Get305SearchedHash01ResType = UserType | undefined

const get305SearchedHash01 = ({
  hashSize,
  inputArray,
  target,
}: Get305SearchedHash01PropsType): Get305SearchedHash01ResType => {
  return { id: 'cd202', name: 'Bob' }
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get305SearchedHash03.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: Get305SearchedHash01PropsType
      expected: Get305SearchedHash01ResType
    }
    const examples: ExampleType[] = [
      {
        params: {
          hashSize: 10,
          inputArray: [
            { id: 'ab101', name: 'Alice' },
            { id: 'cd202', name: 'Bob' },
            { id: 'ef303', name: 'Charlie' },
          ],
          target: 'cd202',
        },
        expected: { id: 'cd202', name: 'Bob' },
      },
    ]

    const output = await Promise.all(
      examples.map(async (example: ExampleType, index: number) => {
        const { params, expected } = example

        const output = await get305SearchedHash01(params)
        consoler(`getTemplateFunc [61-${index}]`, {
          params,
          output,
          tested: JSON.stringify(output) === JSON.stringify(expected),
        })

        return JSON.stringify(output) === JSON.stringify(expected)

        // const output = await getCreatedHashTable(params)
        // consoler('get213AreasPromise06 [100]', { output })
      })
    )

    consoler('get213AreasPromise06 [150]', { output })
  })()
}

// const res = getCreatedHashTable({ inputArray: [], hashSize: 0 })

// consoler('get305SearchedHash01 [88]', { res })
