var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan");

// var routes = require("./controllers/burgers_controller.js");

var app = express();
app.use(logger("dev"));

var PORT = process.env.PORT || 3000;
app.use(logger("dev"));
//app.use(express.static("public"));
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 mongoose.connect("mongodb://localhost/scrapeIT");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "db error connection"));
db.once("open", function() {
  console.log("Connect to Mongoose!");
});
// app.use(routes);

app.listen(PORT, function() {
  console.log("Server Listening on: http://localhost:" + PORT);
});

