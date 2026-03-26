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
  id: number
  name: string
}

type Get305SearchedHash00PropsType = {
  inputArray: UserType[]
  target: number
}

type Get305SearchedHash00ResType = UserType | undefined

const get305SearchedHash00 = ({ inputArray, target }: Get305SearchedHash00PropsType): Get305SearchedHash00ResType => {
  const HASH_SIZE = 10

  // hash function
  const hash = (key: number): number => key % HASH_SIZE

  // create hash table
  const createHashTable = (): UserType[][] => Array.from({ length: HASH_SIZE }, () => [])

  // insert value
  const insert = (table: UserType[][], user: UserType): void => {
    const hashIndex = hash(user.id)

    consoler('get305SearchedHash00 [35]', { table, hashIndex, user })

    table[hashIndex].push(user) // chaining
  }

  // search value
  const findUser = (table: UserType[][], id: number): UserType | undefined => {
    const hashIndex: number = hash(id)

    return table[hashIndex].find(user => user.id === id)
  }

  const table = createHashTable()

  inputArray.forEach(user => insert(table, user))

  const output = findUser(table, target)

  consoler('get305SearchedHash00 [50]', { output, table, target })

  return output
}

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/algorythms/get305SearchedHash00.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: Get305SearchedHash00PropsType
      expected: Get305SearchedHash00ResType
    }
    const examples: ExampleType[] = [
      {
        params: {
          inputArray: [
            { id: 101, name: 'Alice' },
            { id: 202, name: 'Bob' },
            { id: 303, name: 'Charlie' },
          ],
          target: 202,
        },
        expected: { id: 202, name: 'Bob' },
      },
    ]

    const output = await Promise.all(
      examples.map(async (example: ExampleType, index: number) => {
        const { params, expected } = example

        const output = await get305SearchedHash00(params)
        console.info(`getTemplateFunc [61-${index}]`, {
          params,
          output,
          tested: JSON.stringify(output) === JSON.stringify(expected),
        })
        return JSON.stringify(output) === JSON.stringify(expected)
      })
    )

    console.info('get213AreasPromise06 [100]', { output })
  })()
}
