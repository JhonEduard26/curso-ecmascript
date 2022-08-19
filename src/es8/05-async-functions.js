const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? resolve('Promesa resuelta correctamente')
      : reject(new Error('Error'))
  })
}

const anotherFunction = async () => {
  const response = await fnAsync()
  console.log(response)
  console.log('Hola')
}

console.log('before')
anotherFunction()
console.log('after')