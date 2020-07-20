// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
let db = require("../models/index.js");
//var router = express.Router();
var express = require("express");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Categories.findAll({}).then((data)=>{
      //console.log("LIST OF CATEGORIES",data);
      console.log("LIST OF CATEGORIES",data);
      //console.log("LIST OF CATEGORIES",data.dataValues);
      //console.log("LIST OF CATEGORIES",data[0].dataValues.categoryName);
      //console.log(data[0].Categories);
      res.render("index", {data});
    });
  });

  app.get("/api/servicesList", function(req, res) {
    db.Categories.findAll({}).then((data)=>{
      //console.log("LIST OF CATEGORIES",data);
      console.log("LIST OF CATEGORIES",data);
      //console.log("LIST OF CATEGORIES",data.dataValues);
      //console.log("LIST OF CATEGORIES",data[0].dataValues.categoryName);
      //console.log(data[0].Categories);
      res.render("navBar", {data});
    });
  });

  // add service route goes to the addService template
  app.get("/addService", function(req, res) {
    db.Categories.findAll({}).then((data)=>{
      db.User.findAll({}).then((user)=>{
        console.log("LIST OF USERS",user);
      res.render("addService",{user,data});
    });
    });
});

  // create category route goes to the createCategory handlebar template
  app.get("/createCategory", function(req, res) {
    res.render("createCategory");
  });

  // reviews route goes to reviews handlebar template
  app.get("/reviews", function(req, res) {
    db.User.findAll({}).then((userRev)=>{
    res.render("reviews",{userRev});
    });
  });

  // service details page route with rating goes to serviceDetails handlebar template
  app.get("/serviceDetails", function(req, res) {
    res.render("serviceDetails");
  });

  // service list route goes to serviceList handlebar template
  app.get("/servicesList", function(req, res) {
    res.render("servicesList");
  });
  
  app.get("/users", function(req, res) {
    res.render("userForm");
  });

  app.get("/management", function(req, res) {
    res.render("manager");
  });
}
