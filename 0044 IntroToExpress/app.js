var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});