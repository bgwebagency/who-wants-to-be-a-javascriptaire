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
