var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
    cat: "I hate you human",
    goldfish: "..."
  };
  var sound = sounds[animal];
  res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:num", function(req, res){
  var word = req.params.word;
  var num =  Number(req.params.num);
  var line = word;
  for (let i = 0; i < num - 1; i++) {
    line += " " + word;
  }
  res.send(line);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});