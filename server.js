// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var compression = require("compression");
var express = require("express");

require("dotenv").config();

var app = express()
// compress all responses
app.use(compression());

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/hbs-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/service-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/reviews-api-routes.js")(app);
require("./routes/categories-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


