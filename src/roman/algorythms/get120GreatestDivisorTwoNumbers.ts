export const get120GreatestDivisorTwoNumbers = (a: number, b: number): number => {
  const numMin = Math.min(a, b),
    numMax = Math.max(a, b)
  let output = 1

  for (let i = numMin; i > 0; i -= 1) {
    if (Number.isInteger(numMax / i) && Number.isInteger(numMin / i)) {
      output = i
      break
    }
  }

  return output
}
