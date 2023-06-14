const arr = [1, 2, 3, 4, 5]
let sum = 0
for (let num of arr) {
	sum += num
	if (sum >= 6) break
}
console.log(sum)

const arr2 = [1, 2, 3, 4, 5]
let sum2 = 0
arr.forEach(num => {
	sum2 += num
	// if(sum2 >= 6) break;
})
console.log(sum2)
