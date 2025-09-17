const getCommonDivisors = (a: number, b: number): number[] => {
  let commonDivisors: number[] = []

  for (let i = 2; i < b; i += 1) {
    if (b > 2 && a % i === 0 && b % i === 0) commonDivisors.push(i)
  }

  return commonDivisors
}

const getFirstTest = (s: string, t: string) => {
  const res = s.split(t)
  const res2 = res.reduce((accum: boolean, item: string) => {
    if (!item && accum) return true
    else {
      return false
    }
  }, true)

  // console.info('[10]', { res2, res, s, t })
  return res2
}

const getSecondTest = (s: string, t: string, commonDivisors: number[]) => {
  const x = t.split('')

  let accum = ''

  for (let i = 0; i < x.length; i += 1) {
    if (!commonDivisors.includes(accum.length - 1)) {
      console.info('[31]', { len: accum.length - 1, commonDivisors, inc: commonDivisors.includes(accum.length - 1) })
      // continue
    }
    accum = `${accum}${x[i]}`
    const resFirstTest = getFirstTest(s, accum)
    // console.info('[33]', { resFirstTest, len: accum.length - 1, commonDivisors, accum, i, s, t })
    if (resFirstTest) break
  }

  console.info('[37]', { x, s, t, commonDivisors, 'x.length': x.length })
  return accum
}

function findSmallestDivisor(s: string, t: string) {
  const resFirstTest = getFirstTest(s, t)

  if (!resFirstTest) return -1

  const commonDivisors = getCommonDivisors(s.length, t.length)

  console.info('getFoundSmallestDivisor [48]', { commonDivisors, resFirstTest, s, t })

  let resSecondTest = '0'
  resSecondTest = getSecondTest(s, t, commonDivisors)
  return resSecondTest.length
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/algorythms/getFoundSmallestDivisor.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: [string, string]
      expected: number
    }
    const examples: ExampleType[] = [
      {
        params: ['bcdbcdbcdbcd', 'bcdbcd'],
        expected: 3,
      },
      {
        params: ['bcdbcdbcd', 'bcdbcd'],
        expected: -1,
      },
    ]

    const output = await Promise.all(
      examples.map(async (example: ExampleType, index: number) => {
        const { params, expected } = example

        const output = findSmallestDivisor(...params)
        console.info(`getTemplateFunc [61-${index}]`, {
          params,
          output,
          tested: JSON.stringify(output) === JSON.stringify(expected),
        })
        return JSON.stringify(output) === JSON.stringify(expected)
      })
    )

    console.info('get213AreasPromise05 [124]', { output })
  })()
}

/*
Divisibility Of Strings
Given two strings, s and t, create a function that operates per the following rules

Find whether string s is divisible by string t. String s divisible by string t if string t can be concatenated some number of times to obtain the string s.

If s is divisible, find the smallest string, u, such that it can be concatenated some number of times to obtain both s and t.
If it is not divisible, set the return value to -1. Return the length of the string u or -1.
Example 1
Suppose that two strings are

s = "bcdbcdbcdbcd"
t = "bcdbcd"

If string t is concatenated twice, the result is 'bcdbcdbcdbcd' which is exactly equal to the string s. Therefore, string s is divisible by string t.

Since it passes the first test, look for the smallest string, u, that can be concatenated to create both strings s and t.

The string 'bcd' is the smallest string that can be concatenated to create both strings s and t. The length of the string u is 3, which is the integer value to return.
Answer = 3

Example 2
Suppose that two strings are

s = "bcdbcdbcd"
t = "bcdbcd"

If string t is concatenated twice, the result is "bcdbcdbcdbcd" which is greater than string s. There is an extra "bcd" in the concatenated string.

The string s is not divisible by string t, so return -1.
Answer = -1

Constraints
1 ≤ size of s ≤ 2 x 105
1 ≤ size of t ≤ 2 x105
size of t ≤ size of s
*/

/**
 * findSmallestDivisor has the following parameter(s):
   string s: a string
   string t: a string

Returns:
   int: the length of the smallest string,  u , if string  s  is divisble by string  t , or return -1 if not
 */
