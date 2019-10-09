function average(scores) {
  var result = 0;
  scores.forEach(score => {
    result += score;
  });
  result = Math.round(result / scores.length);
  return result;
}

console.log("Average Score");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68