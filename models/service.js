// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var service = {
  all: function(cb) {
    orm.all("services", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("services", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("services", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("services", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (servicesController.js).
module.exports = service;
