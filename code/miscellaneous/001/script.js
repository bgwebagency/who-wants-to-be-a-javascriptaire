function replacer(key, value) {
	if (typeof value === 'Date') {
		return value.toJSON()
	} else if (typeof value === 'RegExp') {
		return value.toString()
	} else {
		return value
	}
}

const object = {
	date: new Date(),
	regex: /some regex/,
}

const jsonString = JSON.stringify(object, replacer)
console.log(jsonString)
