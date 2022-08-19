function* iterate(array = []) {
  for (let value of array) {
    yield value
  }
}

const it = iterate([1, 3, 1, 131, 554])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())