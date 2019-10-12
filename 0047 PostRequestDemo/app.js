var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.get("/friends", function(req, res){
  res.render("friends");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});