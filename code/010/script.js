console.log('==== PROBLEM ====')
const user = {
	name: 'John',
	age: 30,
	getName: () => {
		return this.name
	},
	getAge: function () {
		return this.age
	},
}

const getName = user.getName
const getAge = user.getAge

console.log(getName())
console.log(getAge())

console.log('==== SOLUTION ====')
const user2 = {
	name: 'John',
	age: 30,
	getName: function () {
		// change arrow function to regular function
		return this.name
	},
	getAge: function () {
		return this.age
	},
}

// do not assign the function to a variable
console.log(user2.getName())
console.log(user2.getAge())
