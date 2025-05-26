export const is070Prime2 = (num: number): num is number & boolean => {
  if (Number.isNaN(num) || typeof num !== 'number') return false

  if (num <= 1) return false

  for (let i = 2, half = Math.ceil(num / 2); i <= half; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}
