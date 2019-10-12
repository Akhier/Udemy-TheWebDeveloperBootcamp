var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Welcome to the home page!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});