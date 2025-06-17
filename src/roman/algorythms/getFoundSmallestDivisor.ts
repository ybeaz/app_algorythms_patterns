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

const getFirstTest = (s: string, t: string) => {
  const res = s.split(t)
  const res2 = res.reduce((accum: boolean, item: string) => {
    if (!item && accum) return true
    else {
      return false
    }
  }, true)

  // console.info('[21]', {res2, res, s, t})
  return res2
}

const getSmallest = (s: string, t: string) => {
  const minLen = s.length > t.length ? t : s

  const x = minLen.split('')

  let accum = ''

  for (let i = 0; i < x.length; i += 1) {
    accum = `${accum}${x[i]}`
    console.info('[22', { accum })
  }

  console.info('[14]', { x, s, t, 'x.length': x.length })
}

function findSmallestDivisor(s: string, t: string) {
  const output = getFirstTest(s, t)
  return output
}

const s = 'bcdbcdbcdbcd'
const t = 'bcdbcd'

const output = findSmallestDivisor(s, t)

getSmallest(s, t)

console.info('[29', { output })
