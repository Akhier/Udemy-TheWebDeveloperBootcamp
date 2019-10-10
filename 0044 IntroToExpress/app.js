var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

app.get("/dog", function(req, res){
  console.log("Someone made a request to /dog");
  res.send("MEOW!");
});

app.get("/r/:subName", function(req, res){
  var sub = req.params.subName;
  res.send("welcome to the " + sub.toUpperCase() + " sub!");
});

app.get("/r/:subName/comments/:id/:title/", function(req, res){
  res.send("welcome to the comments page");
});

app.get("*", function(req, res){
  res.send("You are a Star!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});