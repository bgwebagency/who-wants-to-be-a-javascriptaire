function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);

console.log(double(5));
