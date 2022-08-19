class User {
  greeting() {
    return 'Hello'
  }
}

const newUser = new User()
// console.log(newUser.greeting())

class Usuario {

  constructor() {
    console.log('Nuevo usuario')
  }

  greeting() {
    return 'Hola'
  }
}

const david = new Usuario()

class NewUser {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  speak() {
    return 'Hello'
  }

  greeting() {
    return `${this.speak()} ${this.name}`
  }
}

const myUser = new NewUser('Jhon', 23)
console.log(myUser.greeting())

class GetSetUser {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  speak() {
    return 'Hello'
  }

  greeting() {
    return `${this.speak()} ${this.name} ${this.age}`
  }

  get uName() {
    return this.name
  }

  set uName(u) {
    this.name = u
  }

  get uAge() {
    return this.age
  }

  set uAge(u) {
    this.age = u
  }
}

const newGetSetUser = new GetSetUser('Jhon', 23)
console.log(newGetSetUser.uAge)
console.log(newGetSetUser.greeting())