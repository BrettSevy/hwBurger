const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// static css javascript content
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// listener
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});