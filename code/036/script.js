function greet(name) {
  console.log(`Hello, ${name}! Welcome to ${this.location}.`)
}

const person = {
  location: 'New York',
}

greet.call(person, 'John')
greet.apply(person, ['Alex'])
const greetPerson = greet.bind(person)
greetPerson('Thomas')
