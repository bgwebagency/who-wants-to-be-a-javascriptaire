<div align="center">
  
  <h1>Who Wants to be a JavaScriptaire?</h1>

---

Fun way to learn JavaScript for your coding interviews.
All the questions are answered here in text and also have a video on our YouTube channel.
Click the ▶️ icon next to the questions if you prefer to watch the video explanation.</span>

Feel free to reach us on our social platforms! 😊 <br />
<a href="https://discord.com/invite/62VR3MMCVm">Discord</a> || <a href="https://www.instagram.com/bgwebagency">Instagram</a> || <a href="https://www.twitter.com/kirankdash">Twitter</a> || <a href="https://www.tiktok.com/@bgwebagency">TikTok</a> || <a href="https://www.bgwebagency.in">Blog</a> || <a href="https://www.facebook.com/bgwebagency">Facebook</a>

</div>

###### 1. What will this code output? [▶️](https://www.youtube.com/shorts/Uysa8_Aa5Sg)

```javascript
console.log(new Date(2023, 1, 31));
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
var username = "kirandash";
var username = "bgwebagency";

console.log(username);
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
  username: "kirandash",
  updateUsername: (newName) => {
    this.username = newName;
  },
};

user.updateUsername("bgwebagency");
console.log(user.username);
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
const len1 = "kiran".length;
const len2 = "👻".length;

console.log(len1, len2);
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
console.log(undefined == null, undefined === null);
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
let x = Number.NEGATIVE_INFINITY;
let y = Number.POSITIVE_INFINITY;
let z = x + y;
console.log(z);
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
console.log("BG Web Agency" === NaN, isNaN("BG Web Agency"));
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
console.log(isFinite(Infinity), isNaN(Infinity));
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
  name: "John",
  age: 30,
  getName: () => {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

const getName = user.getName;
const getAge = user.getAge;

console.log(getName());
console.log(getAge());
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
    console.log(i);
  }, 0);
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
      x += y;
      return arguments.callee;
    } else {
      return x;
    }
  };
}

console.log(add(1)(2)(3)());
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
    return x * y;
  };
}

const double = multiply(2);

console.log(double(5));
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
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = counter();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
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

###### 17. try, catch, finally [▶️](https://youtu.be/QCmqefzwWlg)

```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data retrieved successfully");
    }, 1000);
  });
}

async function main() {
  try {
    const data = await getData();
    console.log(data);
    throw new Error("Something went wrong");
  } catch (err) {
    console.log("Caught an error:", err.message);
    return "Error occurred";
  } finally {
    console.log("Finally block executed.");
    return "Finally block value";
  }
}

(async () => {
  console.log(await main());
})();
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

</p>
</details>

---

.
.
.
.
.
