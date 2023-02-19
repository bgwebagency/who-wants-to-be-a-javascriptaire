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
