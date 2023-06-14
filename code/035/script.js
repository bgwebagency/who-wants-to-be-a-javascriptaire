function User(username) {
	this.username = username

	this.updateUsername = newName => {
		this.username = newName
	}
}

const user1 = new User('kirandash')
const user2 = new User('bgwebagency')

user1.updateUsername('kirandash-website')
user2.updateUsername('bgwebagency-app')

console.log(user1.username, user2.username)
