var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("<h1>Welcome to the home page!</h1><h2>blah blah</h2>");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});