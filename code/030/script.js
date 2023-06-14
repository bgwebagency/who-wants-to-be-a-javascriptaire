let numbers = [1, 2, 3, undefined, 6, 7, 8, 9]

let [a, , b, c = 2, ...rest] = numbers

console.log(a, b, c, rest)
