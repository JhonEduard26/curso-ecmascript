// ! before es6
function newUser(name, age, country) {
  var name = name || 'Jhon'
  var age = age || 23
  var country = country || 'CO'

  console.log(name)
  console.log(age)
  console.log(country)
}

// newUser()


// * es6
const newAdmin = (name = 'Jhon', age = 23, country = 'CO  ') => {
  console.log(name, age, country)
}

newAdmin()
newAdmin('Ana', 18, 'MX')