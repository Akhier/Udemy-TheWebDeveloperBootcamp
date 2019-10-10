var express = require("express");
var app = express();

app.get("/", function(req, res){
  app.send("Hi there, welcome to my assignment!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});