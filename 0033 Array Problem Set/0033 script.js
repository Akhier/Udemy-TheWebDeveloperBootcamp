function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

function isUniform(arr) {
  var first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (first !== arr[i]) {
      return false;
    }
  }
  return true;
}
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a","b","p"]));
console.log(isUniform(["b","b","b"]));

function sumArray(arr) {
  var result = 0;
  arr.forEach(element => {
    result += element;
  });
  return result;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([-5,100]));

function max(arr) {
  var maxNum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));