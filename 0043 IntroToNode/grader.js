function average(scores) {
  var result = 0;
  scores.forEach(score => {
    result += score;
  });
  result = Math.round(result / scores.length);
  console.log(result);
}