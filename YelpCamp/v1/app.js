var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){

});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The YelpCamp Server Has Started!");
});