var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });
var app = express();
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res){
  res.render("home");
});

app.get("/secret", function(req, res){
  res.render("secret");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("server started");
});