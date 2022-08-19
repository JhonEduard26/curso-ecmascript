// arrays destructuring
const fruits = ['Apple', 'Banana']
const [a, b] = fruits
console.log(a, b)

//Object destructuring
let user = {
  username: 'Jhon',
  age: 23,
}
let { age, username } = user
console.log(username, age)

// spread operator

let person = {
  name: 'Jhon',
  age: 23
}
let country = 'MX'

let data = {
  ...person,
  country,
}
console.log(data)

function sum(num, ...values) {
  console.log(values)
}

sum(1, 32, 123, 1213, 123, 11, 175, 7878, 78, 787)
