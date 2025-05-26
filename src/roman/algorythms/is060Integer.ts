export const is060Integer = (num: number) => typeof num === 'number' && isFinite(num) && num % 1 === 0
