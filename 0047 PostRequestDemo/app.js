var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addfriend", function(req, res){
  console.log(req.body);
  res.send("You Have Reached the Post Route");
});

app.get("/friends", function(req, res){
  var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
  res.render("friends", {friends: friends});
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});