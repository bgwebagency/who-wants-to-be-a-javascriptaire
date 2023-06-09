
const person = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  };

  const { name, age, address: { city } } = person;
  

  console.log(name); 
  console.log(age); 
  console.log(city); 
  