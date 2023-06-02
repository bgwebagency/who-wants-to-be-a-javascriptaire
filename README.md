<div align="center">
  
  <h1>Who Wants to be a JavaScriptaire?</h1>

Fun way to learn JavaScript for your coding interviews.
All the questions are answered here in text and also have a video on our YouTube channel.
Click the ▶️ icon next to the questions if you prefer to watch the video explanation.</span>

Feel free to reach us on our social platforms! 😊 <br />
<a href="https://discord.com/invite/62VR3MMCVm">Discord</a> || <a href="https://www.instagram.com/bgwebagency">Instagram</a> || <a href="https://www.twitter.com/kirankdash">Twitter</a> || <a href="https://www.tiktok.com/@bgwebagency">TikTok</a> || <a href="https://www.bgwebagency.in">Blog</a> || <a href="https://www.facebook.com/bgwebagency">Facebook</a>

🙏 Support

Don't forget to leave a star ⭐️

---

</div>

## Table of Contents

[Language Basics](#1-what-will-this-code-output-%EF%B8%8F) - [Arrays](#18-array-and-traversal-in-array-%EF%B8%8F) - [Date and Time](#31-date-in-javascript) - [Object Oriented JavaScript](#34-object-literals-in-javascript)

---

###### 1. What will this code output? [▶️](https://www.youtube.com/shorts/Uysa8_Aa5Sg)

```javascript
console.log(new Date(2023, 1, 31))
```

- A: `Tue Jan 31 2024`
- B: `Tue Jan 31 2023`
- C: `Fri Mar 03 2023`
- D: `Error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

In JavaScript, while constructing dates using Date objects months are 0 based. Which means 0 is for January and 1 is for February.

So, in this case we are asking JavaScript to set a date of 2023 February 31st which does not exist.

But instead of throwing error JavaScript will overflow it to the next month which is March.

And since February in 2023 has only 28 days, the code will overflow by 3 days making the result to be 3rd March 2023.

</p>
</details>

---

###### 2. What will this code output? [▶️](https://www.youtube.com/shorts/s6khiRq6EoE)

```javascript
var username = 'kirandash'
var username = 'bgwebagency'

console.log(username)
```

- A: `bgwebagency`
- B: `kirandash`
- C: `ReferenceError`
- D: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

We can declare the same variable multiple times using the `var` keyword. And the variable will hold the value which it was assigned in the end.

But we can not declare the same variable multiple times using `let` or `const`

</p>
</details>

---

###### 3. What will this code output? [▶️](https://www.youtube.com/shorts/l07LPzBQqTM)

```javascript
const user = {
  username: 'kirandash',
  updateUsername: (newName) => {
    this.username = newName
  },
}

user.updateUsername('bgwebagency')
console.log(user.username)
```

- A: `bgwebagency`
- B: `ReferenceError`
- C: `kirandash`
- D: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Because the `updateUsername` function is not working properly and is failing to update the `username` of the `user`.

The `updateUsername` function in user `object` is an arrow function, and is not bound to the `user` object.

So, the `this` keyword inside updateUsername function is not referring to the `user` object, but refers to the global scope.

To fix this issue, we should change the arrow function to a normal function.

</p>
</details>

---

###### 4. What will this code output? [▶️](https://www.youtube.com/shorts/CL53e5FucAM)

```javascript
const len1 = 'kiran'.length
const len2 = '👻'.length

console.log(len1, len2)
```

- A: `5, 2`
- B: `5, 1`
- C: `5, undefined`
- D: `5, SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

In JavaScript, the string length property returns the number of bytes and not the number of characters like we expect.

An emoji is a unicode character which is encoded in two bytes. Therefore the answer is 2 for this question.

The string length for `kiran` returns `5` because in a string each character is 1 byte.

</p>
</details>

---

###### 5. Difference between undefined and null [▶️](https://www.youtube.com/shorts/tQwec4ELIg8)

```javascript
console.log(undefined == null, undefined === null)
```

- A: `true, true`
- B: `true, false`
- C: `false, false`
- D: `false, true`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

First let me explain the difference between equal and strict equal operator.

The equal operator only checks if both the values are equal. The strict equal operator checks if both value and type are equal.

So in this code, the first statement `undefined == null` returns `true` since both `undefined` and `null` have the same value which is empty.

But the second statement `undefined === null` returns `false`. Since `typeof undefined` is `undefined`, whereas `typeof null` is an `object`.

You might be wondering, why `typeof null` is an `object` when `null` is basically a primitive data type. This basically is a mistake in JavaScript since the beginning.

Now, one more tip for you: when you want to set an empty value for a variable use `null` instead of `undefined`. Since `undefined` is mainly used to check if a variable has no value assigned to it.

</p>
</details>

---

###### 6. Rest Operator [▶️](https://www.youtube.com/shorts/7jLCMwhe2VA)

```javascript
function getFruits(x, ...multi, y) {
  console.log(x, y, multi);
}
getFruits("🍎", "🍌", "🍇", "🍊", "🍍")
```

- A: `🍎 🍍 ["🍌", "🍇", "🍊"]`
- B: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Rest operators were added as a part of ES6 feature.

It takes all the arguments passed to a function and puts it in an array.

If multiple arguments are passed to a function then rest operator must come at the end. That's why this code snippet will throw an error.

To fix this issue, please move the rest operator to the end and then it should work.

</p>
</details>

---

###### 7. Infinity and -Infinity [▶️](https://youtube.com/shorts/J3-ab21VMKA)

```javascript
let x = Number.NEGATIVE_INFINITY
let y = Number.POSITIVE_INFINITY
let z = x + y
console.log(z)
```

- A: `0`
- B: `undefined`
- C: `NaN`
- D: `TypeError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

NEGATIVE_INFINITY and POSITIVE_INFINITY are properties of the Number object in JavaScript that represents the mathematical concept of negative infinity and positive infinity.

When you add Number.NEGATIVE_INFINITY and Number.POSITIVE_INFINITY, the result is NaN.

Adding a positive infinite value to a negative infinite value does not result in a meaningful numerical value.

So in this case, z will be NaN.

Note that the code will not throw a TypeError, as JavaScript is able to perform the addition operation between Number.NEGATIVE_INFINITY and Number.POSITIVE_INFINITY.

</p>
</details>

---

###### 8. isNaN() function [▶️](https://youtube.com/shorts/IyQ5Gr1jtQI)

```javascript
console.log('BG Web Agency' === NaN, isNaN('BG Web Agency'))
```

- A: `true, true`
- B: `false, true`
- C: `true, false`
- D: `false, false`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Using ` === NaN` to check if a value is a number will not work.

In JavaScript, `NaN` (Not a Number) is a special value that represents an invalid number.

NaN is not equal to anything, including itself, so the expression `"BG Web Agency" === NaN` will always return `false`.

To check if a value is a number in JavaScript, you can use the `isNaN()` function. This function returns `true` if the argument passed to it is `NaN`, or if it cannot be converted to a number.

</p>
</details>

---

###### 9. isFinite() function [▶️](https://youtube.com/shorts/8P0VB4DQFWw)

```javascript
console.log(isFinite(Infinity), isNaN(Infinity))
```

- A: `false, false`
- B: `false, true`
- C: `true, false`
- D: `false, false`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `isFinite()` function is used to determine whether a given value is a finite number.

It returns false if the value is NaN, Infinity, or -Infinity, and true if the value is a finite number.

So, in this example `isFinite(Infinity)` will return false because Infinity is not a finite number.

On the other hand, the isNaN() function is used to determine whether a given value is not a number (NaN).

It returns true if the value is NaN, and false if the value is a number or any other data type.

So, in this example `isNaN(Infinity)` will also return false because Infinity is not NaN.

Therefore always use `isFinite` function instead of `isNaN` function when you want to validate if a number is finite

</p>
</details>

---

###### 10. Arrow function [▶️](https://youtube.com/shorts/P8zFS3w-wzw)

```javascript
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
```

- A: undefined, undefined
- B: undefined, 30
- C: SyntaxError
- D: John, 30

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `getName` arrow function uses `this` keyword to refer to the object's name property, but because arrow functions have a lexical `this` binding, the value of `this` keyword inside the arrow function will be the global object which is `window` in a browser, or `global` in Node.js.

Since there is no name property on the `global` object, the function returns `undefined`.

The `getAge` function uses a regular function expression and correctly refers to the age property of the `user` object using `this` keyword.

But when `getAge` is assigned to the `getAge` variable, it loses the reference to the `user` object, so when the function is called using `getAge()`, this will refer to the global object again, and since there is no age property on the global object, the function returns undefined.

</p>
</details>

---

###### 11. Closure [▶️](https://youtube.com/shorts/PCc7icrQw8Y)

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}
```

- A: 0, 1, 2
- B: 3, 3, 3
- C: undefined, undefined, undefined
- D: TypeError: console is not defined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

A closure is a function that retains access to variables in its outer scope, even after the outer function has returned.

In this example, the answer is B, because the setTimeout function is asynchronous and does not execute immediately.

By the time the callback function passed to setTimeout is executed, the loop has already completed and the i variable has a value of 3.

Therefore, each call to console.log(i) inside the callback function will print 3.

To solve this problem and print 0, 1, 2, we can use an IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration of the loop.

This creates a new variable j inside each IIFE, with its own copy of the current value of i at that iteration of the loop.

When the callback function passed to setTimeout is executed, it has access to the j variable in its closure, which has the expected value of 0, 1, or 2 for each iteration of the loop.

</p>
</details>

---

###### 12. Curry (Level: Hard) [▶️](https://youtu.be/KYIJVlbevkg)

```javascript
function add(x) {
  return function (y) {
    if (y !== undefined) {
      x += y
      return arguments.callee
    } else {
      return x
    }
  }
}

console.log(add(1)(2)(3)())
```

- A: 6
- B: undefined
- C: ReferenceError
- D: TypeError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The correct answer is A. The code defines a add function that takes a single argument x and returns another function that takes a single argument y.

This inner function checks if y is defined. If it is defined, it adds y to x and returns a reference to itself using the arguments.callee property, which allows the function to be called recursively with the next argument.

If y is not defined, it returns the current value of x.

Then, the code calls add(1)(2)(3)(). This first calls add(1) with 1 as its argument, which returns a function that takes a single argument y.

Then, it calls this function with 2 as its argument, which adds 2 to 1 and returns a reference to the function.

Finally, it calls this function with 3 as its argument, which adds 3 to 3 and returns a reference to the function.

Since no argument is passed in the last call, it returns the current value of x, which is 6.

This code demonstrates a more complex example of currying in JavaScript, where the curried function returns a reference to itself, allowing it to be called recursively with the next argument.

</p>
</details>

---

###### 13. Curry (Level: Easy) [▶️](https://youtu.be/0FLxIj0TRgU)

```javascript
function multiply(x) {
  return function (y) {
    return x * y
  }
}

const double = multiply(2)

console.log(double(5))
```

- A: 25
- B: 10
- C: undefined
- D: An error will occur

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The correct answer is B. The code defines a multiply function that takes a single argument x and returns another function that takes a single argument y. This inner function multiplies x and y and returns the result.

Then, the code creates a new function double by calling multiply with 2 as its argument. The double function is now a curried function that can be called with a single argument to double its value.

Finally, the code calls double with 5 as its argument, which results in 10 being logged to the console.

This code demonstrates the concept of currying in JavaScript, where a function returns another function that can be partially applied with some arguments.

</p>
</details>

---

###### 14. Iterables and Iterators (Level: Hard) [▶️](https://youtu.be/-yZ53Cmltg0)

Which of the following statements is true about the `next()` method of an iterator in JavaScript?

- A: The next() method returns an object with properties value and done.
- B: The next() method returns a boolean value indicating whether there are more items to iterate over.
- C: The next() method is used to define how to access the next item in the iterable.
- D: The next() method is not used in JavaScript iterators.

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The correct answer is A.

In JavaScript, an iterable is an object that defines a sequence and can be iterated over using a loop.

An iterator is an object that knows how to access the elements of an iterable one at a time.

An iterable object has a method with the key `Symbol.iterator`, which returns an iterator object.

The iterator object has a `next()` method, which returns an object with two properties: `value`, which is the next element in the sequence, and `done`, which is a boolean indicating whether the iterator has reached the end of the sequence.

Iterables are commonly used in many real-time applications while working with large datasets, or while implementing custom data structures

</p>
</details>

---

###### 15. Generator Functions [▶️](https://youtu.be/4fIKcIMo7w4)

```javascript
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
```

What does the above code snippet output?

- A: This code snippet will result in an infinite loop.
- B: 1 2 3
- C: 0 0 0
- D: 0 1 2

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

The correct answer is D.

The `counter` function is a generator function that creates an infinite loop that yields incrementing values of `i`.

The `gen` variable is set to the generator function, and each call to `gen.next()` returns an object with the value property set to the next yielded value.

The `console.log` statements then print the values returned by `gen.next()`.

A generator function is a special type of function that can be used to control the iteration over a sequence of values.

Unlike traditional functions, generator functions allow you to pause and resume their execution, and yield multiple values over time.

</p>
</details>

---

###### 16. Garbage Collection, Mark and Sweep Algorithm [▶️](https://youtu.be/QCmqefzwWlg)

Which of the following scenarios could potentially cause a memory leak in JavaScript?

- A: Using the Array.from() method to convert a large array into a new array.
- B: Creating a circular reference between two objects that are still in use.
- C: Assigning a value of null to a variable that is still in use.
- D: Calling the delete operator on an object property.

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Circular references occur when two or more objects reference each other, creating a loop that prevents the objects from being garbage collected.

This can cause a memory leak if the objects are no longer needed but cannot be freed because of the circular reference.

Options A, C, and D do not typically cause memory leaks in JavaScript.

Garbage collection is the process of automatically freeing up memory that is no longer being used by a program.

In JavaScript, the mark and sweep algorithm is commonly used for garbage collection.

This algorithm works by first marking all objects in memory that are still being referenced by the program, then sweeping through and freeing up any memory that is not marked as in use.

</p>
</details>

---

###### 17. try, catch, finally [▶️](https://youtu.be/uPhf3OjPwSU)

```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data retrieved successfully')
    }, 1000)
  })
}

async function main() {
  try {
    const data = await getData()
    console.log(data)
    throw new Error('Something went wrong')
  } catch (err) {
    console.log('Caught an error:', err.message)
    return 'Error occurred'
  } finally {
    console.log('Finally block executed.')
    return 'Finally block value'
  }
}

;(async () => {
  console.log(await main())
})()
```

What does the above code snippet output?

- A: "Data retrieved successfully",
  "Caught an error: Something went wrong",
  "Finally block executed."
- B: "Data retrieved successfully",
  "Caught an error: Something went wrong".
- C: "Data retrieved successfully",
  "Caught an error: Something went wrong",
  "Finally block executed.",
  "Finally block value"
- D: "Caught an error: Something went wrong", "Finally block executed."
- E: "Finally block executed.", "Finally block value".

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

When the code is executed, the main() function is called, which is an async function that uses await to get data from the `getData()` function.

Once the data is retrieved, the `console.log(data)` statement logs "Data retrieved successfully" to the console.

After that, the `throw new Error("Something went wrong")` statement throws an error.

The `catch` block catches the error and logs `"Caught an error: Something went wrong"` to the console, and then returns the string `"Error occurred"`.

Finally, the finally block is executed and logs `"Finally block executed."` to the console, and then returns the string `"Finally block value"`.

When the `main()` function is called, it returns a promise because it is an async function. Since the `finally` block also returns a value, that value will be the final resolved value of the promise.

Therefore, when `console.log(main())` is called, `"Finally block executed."` and `"Finally block value"` will be logged to the console.

Try, catch, and finally are keywords used in JavaScript to handle runtime errors.

</p>
</details>

---

###### 18. Array and Traversal in array [▶️](https://youtu.be/Mefj0GDslts)

```javascript
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arr) {
  sum += num;
  if(sum >= 6) break;
}
console.log(sum);

const arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;
arr.forEach((num) => {
  sum2 += num;
  if(sum2 >= 6) break;
});
console.log(sum2);
```

What does the above code snippet output?

- A: 6, 15
- B: SyntaxError: Illegal break statement
- C: 15, 15
- D: 15, 15

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Because `break` statement is not valid inside the callback function passed to `forEach`.

`forEach` does not support early termination using the `break` statement. Therefore, an error is thrown: `"Uncaught SyntaxError: Illegal break statement".`

In case of for of loop, `break` statement is allowed.

To fix the issue, remove the `break` statement from forEach and it should work.

In general, `for of` is recommended over `for in` or `forEach`

</p>
</details>

---

###### 19. Array Manipulation: Understanding array.push() Method in JavaScript [▶️](https://www.youtube.com/shorts/ZkaIxib4IxI)

```javascript
let arr = [1, 2, 3, 4]
let result = arr.push(5)
console.log('result: ', result, 'arr: ', arr)
```

What does the above code snippet output?

- A: result: 5 arr: [1, 2, 3, 4, 5]
- B: result: 5 arr: [5, 1, 2, 3, 4]
- C: result: [1, 2, 3, 4, 5] arr: [1, 2, 3, 4, 5]
- D: result: [5, 1, 2, 3, 4] arr: [5, 1, 2, 3, 4]

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `array.push()` method in JavaScript adds one or more elements to the end of an array and returns the new length of the array.

In the given code, `arr` is an array with the values `[1, 2, 3, 4]`. The `push()` method is called with the argument 5, which adds `5` to the end of the `arr` array.

The `push()` method returns the new length of the array after the addition of the element(s). In this case, the new length of arr will be 5 because `5` is added to the end of the array.

</p>
</details>

---

##### 20. Array Manipulation: Understanding array.unshift() Method in JavaScript

```javascript
let arr = [3, 5, 7, 9]
let result = arr.unshift(1, 2)
console.log('result: ', result, 'arr: ', arr)
```

What does the above code snippet output?

- A: result: 6 arr: [3, 5, 7, 9, 1, 2]
- B: result: 6 arr: [1, 2, 3, 5, 7, 9]
- C: result: 4 arr: [1, 2, 3, 5]
- D: result: [1, 2, 3, 5, 7, 9] arr: [1, 2, 3, 5, 7, 9]

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `array.unshift()` method in JavaScript adds one or more elements to the beginning of an array and returns the new length of the array.

In the given code, `arr` is an array with the values `[3, 5, 7, 9]`. The `unshift()` method is called with the arguments 1 and 2, which adds 1 and 2 to the beginning of the `arr` array.

The `unshift()` method returns the new length of the array after the addition of the element(s). In this case, the new length of `arr` will be 6 because 1 and 2 are added to the beginning of the array, shifting the existing elements to the right.

</p>
</details>

---

##### 21. Array Manipulation: Understanding array.pop() Method in JavaScript

```javascript
const myArray = [1, 2, 3, 4, 5]
const poppedValue = myArray.pop()
console.log(poppedValue)
```

What does the above code snippet output?

- A: 1
- B: 5
- C: 'undefined'
- D: An error will occur

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `Array.pop()` method in JavaScript removes the last element from an array and returns that element.

In this case, `myArray` is an array with elements `[1, 2, 3, 4, 5]`, and `myArray.pop()` is called, which removes the element 5 from the array and returns it.

</p>
</details>

---

##### 22. Array Manipulation: Understanding array.shift() Method in JavaScript

```javascript
const arr = [10, 20, 30, 40, 50]
const removedElement = arr.shift()
console.log('removedElement: ', removedElement, 'arr: ', arr)
```

What does the above code snippet output?

- A: removedElement: 10 arr: [20, 30, 40, 50]
- B: removedElement: 50 arr: [10, 20, 30, 40]
- C: removedElement: 10 arr: [10, 20, 30, 40, 50]
- D: removedElement: [20, 30, 40, 50] arr: [20, 30, 40, 50]

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `Array.shift()` method removes the first element from the `arr` array, which is `10`, and returns it. The resulting `arr` array will then be `[20, 30, 40, 50]`.

So, option A is the correct answer as it reflects the correct value of `removedElement` and the updated state of `arr` after `Array.shift()` is called. Option B is incorrect as it states that `removedElement` will be 50, which is not true. Option C is also incorrect as it state that `arr` remains unchanged, which is not accurate. Option D is slightly confusing as it states that `Array.shift()` returns the array, which is not true.

</p>
</details>

---

##### 23. Array Manipulation: Understanding array.splice() Method in JavaScript

```javascript
let arr = [1, 2, 3, 4, 5]
let removed = arr.splice(1, 2, 'a', 'b')
console.log('removed:', removed, 'arr: ', arr)
```

What does the above code snippet output?

- A: removed: [1, 2] arr: [a, b, 3, 4, 5]
- B: removed: [2, 3] arr: [1, 'a', 'b', 4, 5]
- C: removed: [2, 3, 'a', 'b'] arr: [1, 4, 5]
- D: removed: [1, 2] arr: [3, 4, 5]

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `Array.splice()` method is used to modify an array by adding, removing, or replacing elements.

In this case, the code snippet uses `arr.splice(1, 2, 'a', 'b')`, which starts from index 1 (removing 2 elements) and inserts the elements `a` and `b` in their place. The elements that are removed (i.e., 2 and 3) are returned and assigned to the variable removed. After execution, removed will be `[2, 3]` and `arr` will be `[1, 'a', 'b', 4, 5]`. Option C is incorrect as it includes the inserted elements in the removed array, which is not accurate. Option D is also incorrect as it mentions the incorrect elements that are removed from the array.

</p>
</details>

---

##### 24. JavaScript Array Search Methods - Array.indexOf(), Array.lastIndexOf(), and Array.includes()

```javascript
const fruits = ['apple', 'banana', 'orange', 'grape', 'apple', 'kiwi']
const index = fruits.indexOf('orange')
const lastIndex = fruits.lastIndexOf('apple')
const result = fruits.includes('grape')
console.log('index: ', index, 'lastIndex: ', lastIndex, 'result: ', result)
```

What does the above code snippet output?

- A: index: 2, lastIndex: 4, result: true
- B: index: 3, lastIndex: 0, result: false
- C: index: 2, lastIndex: 4, result: false
- D: index: -1, lastIndex: 4, result: true

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `Array.indexOf()` method searches for the index of the first occurrence of the specified value in the array fruits.
In this case, "orange" is found at index 2, so `index` will be 2.

The `Array.lastIndexOf()` method searches for the index of the last occurrence of the specified value in the array fruits.
In this case, "apple" appears twice in the array and its last occurrence is at index 4, so `lastIndex` will be 4.

On the other hand, the `Array.includes()` method checks if the specified value "grape" exists in the array fruits, and since "grape" is present in the array, `result` will be true.

</p>
</details>

---

##### 25. JavaScript Advanced Array Search Methods - Array.find(), Array.findIndex(), and Array.filter()

```javascript
function isDivisibleBy7(num) {
  return num % 7 == 0
}

const nums = [28, 7, 3, 29, 15, 1, 2, 23]
const filterResult = nums.filter(isDivisibleBy7)
const findResult = nums.find((num) => num < 10)
const findIndexResult = nums.findIndex((num) => num / 2 == 14)

console.log(
  'filterResult:',
  filterResult,
  'findResult:',
  findResult,
  'findIndexResult:',
  findIndexResult
)
```

What does the above code snippet output?

- A: filterResult: 28 findResult: 2 findIndexResult: 1
- B: filterResult: [28, 7] findResult: 2 findIndexResult: 28
- C: filterResult: 7 findResult: [1, 2, 3, 7] findIndexResult: 0
- D: filterResult: [28, 7] findResult: 7 findIndexResult: 0

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

The `Array.filter()` method returns an array containing all elements for which the function passed to it returns true.
In this case, the function `isDivisibleBy7` returns true for any number that is divisible by 7. In the `nums` array, 7 and 28 are divisible by 7, so `nums.filter(isDivisibleBy7)` returns [28, 7].

The `Array.find()` method returns the first element in the array for which the function passed to it returns true.
In this case, the function passed to it returns true for any number less than 10. There are multiple numbers in `nums` that are less than 10, but since `Array.find()` only returns the first for which it is true, `nums.find((num) => num < 10)` returns 7.

The `Array.findIndex()` method is similar to the `Array.find()` method, but returns the index of the first element in the array for which the function passed to it returns true, rather than the element itself.
In this case, the function passed to it returns true for 28, since the 28 / 2 == 14. 28 is in the array `nums` and is at index 0, so `nums.find((num) => num / 2 == 14)` returns 0.

</p>
</details>

---

##### 26. Array.map() Method in JavaScript

```javascript
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers)
```

What does the above code snippet output?

- A: [1, 2, 3, 4, 5]
- B: [2, 4, 6, 8, 10]
- C: [2, 4, 6, 8, 10, 12]
- D: [1, 4, 9, 16, 25]

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `Array.map()` method in JavaScript creates a new array by applying a provided function to each element of the original array.

In this case, the provided function `num => num * 2` multiplies each number in the numbers array by 2, resulting in a new array `[2, 4, 6, 8, 10]`.

</p>
</details>

---

##### 27. Array.reduce() Method in JavaScript

```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, val) => acc + val)
console.log(sum)
```

What does the above code snippet output?

- A: 1
- B: 15
- C: NaN
- D: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`Array.reduce()` takes an array and "reduces" it to a single value by repeatedly applying a function to each element and keeping track of the accumulated result. It's commonly used for tasks such as summing up an array of numbers, finding the maximum value, or concatenating an array of strings into a single string.

In this case, the reduce() method takes a callback function that is executed for each element of the array. The callback function takes two parameters, `acc` and `val`, which represent the accumulator and the current value of the array, respectively.

Inside the callback function, the current value of the array is added to the accumulator and the result is returned. The `reduce()` method updates the value of the accumulator with each iteration until it has iterated over all the elements of the array.

Finally, the `reduce()` method returns the final value of the accumulator, which is the sum of all the numbers in the array, that is 15.

</p>
</details>

---

##### 28. Array.reduceRight() Method in JavaScript

```javascript
const arr = [1, 2, 3, 4]
const result = arr.reduceRight((acc, curr) => acc + curr)
console.log(result)
```

What does the above code snippet output?

- A: 10
- B: 11
- C: 12
- D: 13

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `reduceRight()` method is similar to the `reduce()` method, except that it starts reducing the array from the rightmost element to the leftmost element. The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

In the given code snippet, the `arr` array contains the values `[1, 2, 3, 4]`. The `reduceRight()` method is called on this array with a callback function that adds the accumulator `acc` with the current element `curr`.

In the first iteration, the `curr` value will be `4`, and the acc value will be `undefined`, since no initial value is provided. Therefore, the result of the first iteration will be `4`.

In the second iteration, the `curr` value will be `3`, and the `acc` value will be the result of the previous iteration, which is `4`. Therefore, the result of the second iteration will be `7`.

In the third iteration, the `curr` value will be `2`, and the `acc` value will be the result of the previous iteration, which is `7`. Therefore, the result of the third iteration will be `9`.

In the fourth and final iteration, the `curr` value will be `1`, and the `acc` value will be the result of the previous iteration, which is `9`. Therefore, the result of the fourth iteration will be `10`.

Therefore, the final output of the code will be `10`. Hence, the correct option is A.

</p>
</details>

---

##### 29. Array.sort() Method in JavaScript

```javascript
const arr = ['Centauri', 3.14159, 'canine', 11235, undefined]
const result = arr.sort()
console.log(result)
```

What does the above code snippet output?

- A: [ 3.14159, 11235, 'Centauri', 'canine', undefined ]
- B: [ undefined, 11235, 3.14159, 'Centauri', 'canine' ]
- C: [ 11235, 3.14159, 'canine', 'Centauri', undefined ]
- D: [ 11235, 3.14159, 'Centauri', 'canine', undefined ]

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

By default the `sort()` method sorts elements by character so 11235 comes before 3.14159 because 1 comes before 3.

Words and letters are sorted alphabetically by ASCII code so "Centauri" which starts with an uppercase C (ASCII code 67) sorts before "canine" which starts with a lowercase c (ASCII code 99).

Undefined elements always sort to the end of an array.

Thus, the final output of the code will be [ 11235, 3.14159, 'Centauri', 'canine', undefined ] which is option D.

</p>
</details>

---

##### 30. Destructuring an array in JavaScript

```javascript
let numbers = [1, 2, 3, undefined, 6, 7, 8, 9]

let [a, , b, c = 2, ...rest] = numbers

console.log(a, b, c, rest)
```

What does the above code snippet output?

- A. 1 undefined 2 [ 6, 7, 8, 9 ]
- B. 1 3 2 [ 6, 7, 8, 9 ]
- C. 1 undefined 3 [ 6, 7, 8, 9 ]
- D. 1 3 2 undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

With Array Destructuring it is possible to unpack certain values from an array into individual variables. The values we created in the left hand side (`a, b, c, rest`) correspond to the values and the order of the array we assigned in the right hand side (`numbers`).

- The variable `a` corresponds to the first element of the array, which is `1`.

- Since we did not specify a variable for the next value `2`, the value is not taken into account in the evaluation and is skipped.

- The variable `b` corresponds to the third element of the array, which is `3`.

- It is possible to set default values for the variables if the element in the array is `undefined`. Since the fourth element in the array is `undefined`, the variable `c` has the default value `2`.

- With the spread operator (`...`) we can assign the remaining values of the array to a variable. Since the values `[ 6, 7, 8, 9 ]` are the remaining values of the array, they are assigned to the variable `rest`.

Therefore, the final result is: `1 3 2 [ 6, 7, 8, 9 ]`, which is option B.

</p>
</details>

---

##### 31. Date() in JavaScript

```javascript
const date1 = new Date()
const date2 = new Date('1995-12-17T05:10:00')
const date3 = new Date('1995-10-15T08:12:15+02:00')

console.log(date1, '', date2, '', date3)
```

What does the above code snippet output?

- A: current date, 1995-10-17T04:10:00.000Z, 1994-10-15T06:12:15.000Z
- B: current date, 1995-12-17T04:10:00.000Z, 1995-10-15T06:12:15.000Z
- C: current date, 1995-08-17T04:10:00.000Z, 1995-10-15T06:12:15.000Z

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`new Date()` will return the current date and time followed by the two specified dates in the format "YYYY-MM-DDTHH:MM:SS.sssZ", where "Z" represents the UTC time zone offset.

`YYYY-MM-DDTHH:mm:ss.sssZ` is a format used to represent dates and times in the ISO 8601 standard. It consists of the following components:

- `YYYY`: Four-digit year (0000 to 9999), or as an expanded year with + or - followed by six digits. The sign is required for expanded years. -000000 is explicitly disallowed as a valid year.
- `MM`: Two-digit month (01 = January, 02 = February, and so on). It defaults to 01.
- `DD`: Two-digit day of the month (01 to 31)
- `T`: A separator indicating the start of the time component
- `HH`: Two-digit hour of the day in 24-hour format (00 to 23). As a special case, 24:00:00 is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to 00.
- `mm`: Two-digit minute of the hour (00 to 59). Defaults to 00.
- `ss`: Two-digit second of the minute (00 to 59). Defaults to 00.
- `.sss`: Millisecond component (000 to 999). Defaults to 000.
- `Z`: A suffix indicating that the time is in UTC (Coordinated Universal Time), with no offset. It can either be the literal character Z (indicating UTC), or + or - followed by HH:mm, the offset in hours and minutes from UTC.

</p>
</details>

---

##### 32. Date methods in JavaScript

```javascript
const date = new Date('Mart 15, 1975 23:15:30')
date.setMinutes(10)
date.setUTCDate(5)

console.log(
  'Minutes:' + date.getMinutes() + ',',
  '',
  'Year:' + date.getFullYear() + ',',
  '',
  'UTCDate:' + date.getUTCDate()
)
```

What does the above code snippet output?

- A: Minutes:10, Year:1975, UTCDate:5
- B: Minutes:15, Year:1975, UTCDate:5
- C: Minutes:15, Year:1975, UTCDate:15
- D: Minutes:10, Year:1975, UTCDate:15

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The provided code creates a Date object initialized with the date and time of "March 15, 1975 23:15:30".

Then, it modifies the minutes and UTC date of the date object using the `setMinutes()` and `setUTCDate()` methods, respectively.

Finally, it logs the updated values of minutes, year, and UTC date using `console.log()`.

After modifying the minutes to 10 using `setMinutes(10)`, the `getMinutes()` method returns the updated value of 10.

After modifying the UTC date to 5 using `setUTCDate(5)`, the `getUTCDate()` method returns the updated value of 5.

The `getFullYear()` method returns the unchanged year, which is 1975.

</p>
</details>

---

##### 33. Time Methods in Javascript

```javascript
const date1 = new Date('2023-5-1')
const next_us_election = new Date('2024-11-5')
const difference_in_time = next_us_election.getTime() - date1.getTime()
const difference_in_days = difference_in_time / (1000 * 3600 * 24)
console.log(parseInt(difference_in_days, 10) + ' Days')
```

What does the above code snippet output?

- A: 490 Days
- B: 554 Days
- C: 560 Days
- D: 530 Days

<details><summary><b>Answer</b></summary>
<p>

#### ANSWER: B

The code calculates the difference in days between the date "2023-5-1" and the next US election date "2024-11-5". It uses the `Date` object to create two dates: `date1` represents May 1, 2023, and `next_us_election` represents November 5, 2024.

The `getTime()` method is used to get the time value in milliseconds for each date. By subtracting the time value of `date1` from `next_us_election`, we get the time difference in milliseconds.

To convert the time difference from milliseconds to days, we divide it by the number of milliseconds in a day (1000 _ 3600 _ 24). The result is stored in the variable `difference_in_days`.

Finally, the `parseInt()` function is used to convert the difference_in_days value to an integer, and the result is logged to the console along with the "Days" string. The output will be "554 Days".

</p>
</details>

---

##### 34. Object Literals in Javascript

```javascript
let person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling', 'cooking'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  sayHello: function () {
    console.log('Hello, my name is ' + this.name)
  },
}

console.log(person.name)
console.log(person.hobbies[1])
console.log(person.address.city)
person.sayHello()
```

What does the above code snippet output?

- A: John, traveling, New York, Hello my name is John
- B: John, cooking, New York, Hello my name is John
- C: John, reading, New York, Hello my name is John
- D: John, traveling, New York, NY

<details><summary><b>Answer</b></summary>
<p>

#### ANSWER: A

The code defines an object literal `person` with properties such as `name`, `age`, `hobbies`, and `address`, and a method `sayHello`.

The `console.log()` statements print the value of `name`, the second element of the `hobbies` array (which is "traveling"), and the value of the `city` property in the `address` object (which is "New York").

Finally, the method `sayHello` is called on the `person` object using dot notation, which outputs the string "Hello, my name is John" to the console.

</p>
</details>

---

##### 35. this Object

```javascript
function User(username) {
  this.username = username

  this.updateUsername = (newName) => {
    this.username = newName
  }
}

const user1 = new User('kirandash')
const user2 = new User('bgwebagency')

user1.updateUsername('kirandash-website')
user2.updateUsername('bgwebagency-app')

console.log(user1.username, user2.username)
```

What does the above code snippet output?

- A:"kirandash bgwebagency"
- B:"kirandash-website bgwebagency-app"
- C:"kirandash kirandash"
- D:"bgwebagency-app bgwebagency-app"

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The code defines a constructor function `User` that creates `user` objects with a `username` property and an `updateUsername` method. Two `user` objects, `user1` and `user2`, are created with initial usernames 'kirandash' and 'bgwebagency' respectively.

The `updateUsername` method is called on both `user1` and `user2` objects to update their usernames. `user1`'s username is updated to 'kirandash-website', and `user2`'s username is updated to 'bgwebagency-app'.

Finally, the code logs the concatenation of `user1.username` and `user2.username`, which results in the output 'kirandash-website bgwebagency-app'.

</p>
</details>

---

##### 36. call(), apply() and bind() Functions Of Javascript

```javascript
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
```

What does the above code snippet output?

- A: Hello, Thomas! Welcome to New York , Hello, Alex! Welcome to New York , Hello, Alex! Welcome to New York.
- B: Hello, John! Welcome to New York , Hello, Alex! Welcome to New York , Hello, Thomas! Welcome to New York.
- C: Hello, Alex! Welcome to New York , Hello, Thomas! Welcome to New York , Hello, John! Welcome to New York.
- D: None Of The Above

<details><summary><b>Answer</b></summary>
<p>

#### ANSWER: B

The `call` function is used to invoke the `greet` function with the `person` object as the context (the value of `this`) and `'John'` as the argument.

The `apply` function is used to invoke the `greet` function with the `person` object as the context (the value of `this`) and an array ['Alex'] as the arguments.

The `bind` function is used to create a new function `greetPerson` with the `person` object as the bound context (the value of `this`).

In summary, the code demonstrates how `call`, `apply`, and `bind` can be used to invoke a function with a specific context and arguments

</p>
</details>

---

##### 37. class, class expression and static members

```javascript
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
```

What does the above code snippet output?

- A. "Generic animal sound", "TypeError", "TypeError"
- B. "Generic animal sound", "Generic animal sound", "Generic animal sound"
- C. "TypeError", "TypeError", "TypeError"
- D. "TypeError", "Generic animal sound", "Generic animal sound"

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The static method `makeSound()` is defined on the `Animal` class, and is accessible directly through the class itself, i.e., `Animal.makeSound()`. This will output `"Generic animal sound"` to the console.

However, when we try to call `makeSound()` on an instance of the Animal class `(a1.makeSound() and a2.makeSound())`, we get a TypeError, because static methods can only be accessed through the class itself and not through its instances.

</p>
</details>

---

##### 40. JavaScript Modules, Import, and Export in ES6

Consider the following code snippet:

```javascript
// module.mjs
export const PI = 3.14159

export function calculateArea(radius) {
  return PI * radius * radius
}

export default function calculateCircumference(radius) {
  return 2 * PI * radius
}

// script.mjs
import calculateCircumference, { PI, calculateArea } from './module.mjs'

console.log(PI) // Output: ________
console.log(calculateArea(5)) // Output: ________
console.log(calculateCircumference(5)) // Output: ________
```

What will be the output of the console.log statements in the code above?

Options:

- A. Output: `3.14159`, `78.53975`, `31.4159`
- B. Output: `3.14159`, `78.53975`, `62.8318`
- C. Output: `3.14159`, `78.53975`, `NaN`
- D. Output: `3.14159`, `NaN`, `62.8318`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `module.js` file exports three entities:

1. `PI` is a named export, exported using the `export` keyword.
2. `calculateArea` is a named export, exported using the `export` keyword.
3. `calculateCircumference` is the default export, exported using the `export default` syntax.

In the `main.js` file, we import `PI` and `calculateArea` as named exports using the destructuring assignment syntax. We also import `calculateCircumference` as the default export. The import statements reference the `module.js` file using the relative file path `./module.js`.

The outputs of the `console.log` statements will be:

- `console.log(PI)` will output `3.14159` since we imported the named export `PI`.
- `console.log(calculateArea(5))` will output `78.53975` since we imported the named export `calculateArea` and called the function with a radius of 5.
- `console.log(calculateCircumference(5))` will output `62.8318` since we imported the default export `calculateCircumference` and called the function with a radius of 5.
</p>
</details>

---

##### 41. Named Import and Export

Consider the following code snippet:

```javascript
// foo.js
function foo() {
  console.log(`Foo`);
}

export { foo };
```

What is the correct Syntax to import the function `foo`?

Options:

- A. `import foo from "./foo"`
- B. `import foo as FooFunction from "./foo"`
- C. `import { foo } from "./foo"`
- D. `import { foo } from "./bar"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Named exports are imported into different files with braces and must be imported with the name of the object, function or variable that was exported.
In this example, a function with the name `foo` is exported from the file `foo.js`. Accordingly, the correct expression is: `import { foo } from "./foo"`.

</p>
</details>