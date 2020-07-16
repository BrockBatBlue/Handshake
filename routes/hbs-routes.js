// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });

  // add service route goes to the addService template
  app.get("/addService", function(req, res) {
    res.render("addService");
  });

  // create category route goes to the createCategory handlebar template
  app.get("/createCategory", function(req, res) {
    res.render("createCategory");
  });

  // reviews route goes to reviews handlebar template
  app.get("/reviews", function(req, res) {
    res.render("reviews");
  });
  // service details page route with rating goes to serviceDetails handlebar template
  app.get("/serviceDetails", function(req, res) {
    res.render("serviceDetails");
  });
  // service list route goes to serviceList handlebar template
  app.get("/servicesList", function(req, res) {
    res.render("servicesList");
  });

};
