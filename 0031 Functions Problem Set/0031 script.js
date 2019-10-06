function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  var result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

function kebabToSnake(str) {
  var result = str.replace(/-/g, "_");
  return result;
}