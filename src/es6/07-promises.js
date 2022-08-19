const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (!true) {
      resolve('Promise resolve')
    } else {
      reject('Promise reject')
    }
  })
}

anotherFunction()
  .then((response) => console.log(response))
  .catch((reason) => console.log(reason))