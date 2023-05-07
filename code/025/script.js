function isDivisibleBy7(num) {
    return num % 7 == 0;
}

const nums = [28, 7, 3, 29, 15, 1, 2, 23];
const filterResult = nums.filter(isDivisibleBy7);
const findResult = nums.find((num) => num < 10);
const findIndexResult = nums.findIndex((num) => num / 2 == 14);

console.log("filterResult:", filterResult, "findResult:", findResult, "findIndexResult:", findIndexResult);