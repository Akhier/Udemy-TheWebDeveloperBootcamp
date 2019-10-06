var secretNumber = 4;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber){
  alert("YOU GOT IT RIGHT!");
}
else if (guess > secretNumber){
  alert("Too high, Guess Again!");
}
else {
  alert("Too low, Guess Again!");
}