// Define an object with a custom iterator
const myIterable = {
  values: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        if (i >= this.values.length) {
          return { value: undefined, done: true };
        } else {
          return { value: this.values[i++], done: false };
        }
      },
    };
  },
};

// Use a for...of loop to iterate over the iterable
for (const value of myIterable) {
  console.log(value);
}
