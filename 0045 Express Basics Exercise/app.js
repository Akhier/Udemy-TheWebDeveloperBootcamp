var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
    cat: "I hate you human",
    goldfish: "...",
    cashier: "Hello, do you have a bonus card?"
  };
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res){
  var message = req.params.message;
  var times =  Number(req.params.times);
  var result = message;
  for (let i = 0; i < times - 1; i++) {
    result += " " + message;
  }
  res.send(result);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});