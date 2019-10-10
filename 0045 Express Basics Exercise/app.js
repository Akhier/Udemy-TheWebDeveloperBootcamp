var express = require("express");
var app = express();

app.get("/", function(req, res){
  app.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  var line = "the " + animal + " says '";
  if (animal === "pig") {
    line += "Oink'";
  } else if (animal === "cow") {
    line += "Moo'";
  } else if (animal === "dog") {
    line += "Woof Woof!'";
  } else {
    line = "Sorry, page not found...What are you doing with your life?";
  }
  app.send(line);
});

app.get("/repeat/:word/:num", function(req, res){
  var word = req.params.word;
  var num =  Number(req.params.num);
  var line = word;
  for (let i = 0; i < num - 1; i++) {
    line += " " + word;
  }
  app.send(line);
});

app.get("*", function(req, res){
  app.send("Sorry, page not found...What are you doing with your life?");
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});