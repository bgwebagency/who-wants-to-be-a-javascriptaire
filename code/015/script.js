function* counter() {
	let i = 0
	while (true) {
		yield i++
	}
}

const gen = counter()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
