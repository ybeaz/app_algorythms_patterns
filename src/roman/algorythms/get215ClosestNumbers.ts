/*

getClosestNumbers

Given an array of distinct integers, determine the minimum absolute difference between any two elements. Print all element pairs with that difference in ascending order.

Example
numbers = [6,2,4,10]

The minimum absolute difference is 2 and the pairs with that difference are (2,4) and (4,6). When printing element pairs (i,j), they should be ordered ascending first by i and then by j.

2 4
4 6
 
Function Description 
Complete the function closestNumbers in the editor.

closestNumbers has the following parameter(s):

  int numbers[n]:  an array of integers

Returns 
NONE

Prints 
distinct element pairs that share the minimum absolute difference, displayed in ascending order with each pair separated by one space on a single line

Constraints

2 ≤ n ≤ 105
-109 ≤ numbers[i] ≤ 109


*/

type GetClosestNumbersType = { a: number; b: number }

const getClosestNumbers = (arr: number[]): GetClosestNumbersType[] => {
  // write code here
  // sort [2, 4, 6, 10]
  // reduce number of iteration with i + 1

  let res: GetClosestNumbersType[] = []
  let dif = Math.max(...arr)
  let arrSorted = arr.sort((a, b) => a - b)
  for (let i = 0; i < arrSorted.length; i += 1) {
    if (arrSorted[i + 1] - arrSorted[i] === dif) {
      dif = arrSorted[i + 1] - arrSorted[i]
      res.push({ a: arrSorted[i], b: arrSorted[i + 1] })
    } else if (arrSorted[i + 1] - arrSorted[i] < dif) {
      dif = arrSorted[i + 1] - arrSorted[i]
      res = [{ a: arrSorted[i], b: arrSorted[i + 1] }]
    }
  }
  console.info('[50]', { res, dif, arrSorted })

  res.forEach(item => console.log(`${item.a} ${item.b}`))

  return res
}

const inputArray = [6, 2, 4, 10, -2, -4]
getClosestNumbers(inputArray)
