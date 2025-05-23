export const isPrime = (num: number): num is number => {
  const half = Math.ceil(num / 2)

  let output = true

  if (Number.isNaN(num) || typeof num !== 'number') return false
  if (num <= 1) return false

  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      output = false
      break
    }
  }

  return output
}
