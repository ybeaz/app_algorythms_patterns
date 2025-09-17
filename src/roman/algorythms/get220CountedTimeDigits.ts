/*

Given start time and finish time, find how many times each digit appeared on the clock during the period from start time to finish time inclusive.
Note that the time on clocks is shown as follows: HH:MM:SS, so leading zeros are also supposed to be counted.
Example
For startTime = [13, 24, 5] and finishTime = [13, 24, 20], the output should be
solution(startTime, finishTime) = [7, 27, 18, 17, 17, 2, 2, 2, 2, 2].
The time on clocks during the given period will be shown as follows:
13:24:05
13:24:06
13:24:07
13:24:08
13:24:09
13:24:10
13:24:11
13:24:12
13:24:13
13:24:14
13:24:15
13:24:16
13:24:17
13:24:18
13:24:19
13:24:20

*/

const getCounted = () => {
  const countNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  return {
    counter: (num: number) => {
      const index1 = Math.floor(num / 10)
      const index0 = Math.floor(num % 10)

      countNum[index1] += 1
      countNum[index0] += 1
    },
    getRes: countNum,
  }
}

const { counter, getRes } = getCounted()

function solution(startTime: number[], finishTime: number[]) {
  let count = startTime
  while (JSON.stringify(count) !== JSON.stringify(finishTime)) {
    if (count[2] === 60) {
      count[2] = 0
      count[1] += 1
    }
    if (count[1] === 60) {
      count[1] = 0
      count[0] += 1
    }
    count[2] += 1
    counter(count[2])
    counter(count[1])
    counter(count[0])
  }

  return getRes // [7, 27, 18, 17, 17, 2, 2, 2, 2, 2]
}

const startTime = [13, 24, 5]
const finishTime = [13, 24, 20]
const res = solution(startTime, finishTime)

console.info('[52]', { res, expected: [6, 26, 17, 16, 16, 1, 2, 2, 2, 2] })
