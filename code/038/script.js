
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function() {
    console.log(this.name + " is eating.");
  };
  

  function Dog(name) {
    Animal.call(this, name); 
  }
  
  Dog.prototype = Object.create(Animal.prototype); 
  Dog.prototype.constructor = Dog; 
  
  Dog.prototype.bark = function() {
    console.log(this.name + " is barking.");
  };
  

  function CustomArray() {
    Array.call(this);
  }
  
  CustomArray.prototype = Object.create(Array.prototype);
  CustomArray.prototype.constructor = CustomArray;
  
  CustomArray.prototype.sum = function() {
    return this.reduce((acc, val) => acc + val, 0);
  };
  
  var dog = new Dog("Buddy");
  dog.eat();
  dog.bark();
  
  var numbers = new CustomArray();
  numbers.push(1, 2, 3, 4, 5);
  console.log(numbers.sum()); 
  