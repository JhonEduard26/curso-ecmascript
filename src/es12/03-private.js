class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  #speak() {
    return 'Hello'
  }

  greeting() {
    return `${this.speak()} ${this.name} ${this.age}`
  }

  get #uName() {
    return this.name
  }

  set uName(u) {
    this.name = u
  }

  get #uAge() {
    return this.age
  }

  set uAge(u) {
    this.age = u
  }
}

const user = new User('Jhon', 23)
console.log(user.uAge)
user.uAge = 30
console.log(user.age)
