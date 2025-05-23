export const isInteger = (num: number) => typeof num === 'number' && isFinite(num) && num % 1 === 0
