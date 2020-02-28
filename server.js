const express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// static html css javascript content
app.use(express.static("public"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// listener
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});