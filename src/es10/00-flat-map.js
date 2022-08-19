const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10, 11, 12]
// console.log(array)

const numbers = [1, 2, 4, 8, 16, 32]

const rta = numbers.map(number => [number * 2])
// console.log(rta)

const rta2 = numbers.flatMap(number => [number * 2])
console.log(rta2)