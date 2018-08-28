var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var port = Number(process.env.PORT || 5002);
app.listen(port);
console.log("Server Running on port 5002.")