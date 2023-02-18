<div align="center">
  
  <h1>Who Wants to be a JavaScriptaire?</h1>

---

Fun way to learn JavaScript for your coding interviews.</span>

Feel free to reach us on our social platforms! 😊 <br />
<a href="https://discord.com/invite/62VR3MMCVm">Discord</a> || <a href="https://www.instagram.com/bgwebagency">Instagram</a> || <a href="https://www.twitter.com/kirankdash">Twitter</a> || <a href="https://www.tiktok.com/@bgwebagency">TikTok</a> || <a href="https://www.bgwebagency.in">Blog</a> || <a href="https://www.facebook.com/bgwebagency">Facebook</a>

</div>

###### 1. What will this code return? [▶️](https://www.youtube.com/shorts/Uysa8_Aa5Sg)

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

In JavaScript, while constructing dates using Date objects months are 0 based. Which means 0 is for January and 1 is for February. So, in this case we are asking JavaScript to set a date of 2023 February 31st. Which does not exist. But instead of throwing error JavaScript will overflow it to the next month which is March. And since February in 2023 has only 28 days, the code will overflow by 3 days making the result to be 3rd March 2023.

</p>
</details>

---
