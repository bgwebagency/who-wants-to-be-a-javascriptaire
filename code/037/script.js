class Animal {
	constructor(name) {
		this.name = name
	}
	static makeSound() {
		console.log('Generic animal sound')
	}
	sayName() {
		console.log(`My name is ${this.name}`)
	}
}

const a1 = new Animal('Lion')
const a2 = new Animal('Time')

Animal.makeSound()
a1.makeSound()
a2.makeSound()
