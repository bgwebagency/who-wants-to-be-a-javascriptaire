let person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "traveling", "cooking"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person.name);
console.log(person.hobbies[1]);
console.log(person.address.city);

person.sayHello(); 