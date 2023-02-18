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

.
.
.
.

---

###### 3. What will this code output?

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
So, the `this` keyword is not referring to the `user` object, but refers to the global scope.
To fix this issue, we should change the arrow function to a normal function.

</p>
</details>

.
.
.
.

---
