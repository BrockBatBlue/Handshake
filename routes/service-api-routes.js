var db = require("../models");

module.exports = function(app) {
  app.get("/api/service", function(req, res) {
    db.Service.findAll({
      include: [db.User,db.Categories,db.Reviews]
    }).then(function(dbService) {
      //console.log(dbService);
      res.json(dbService);
    });
  });

  app.get("/api/service/:id", function(req, res) {
    db.Service.findAll({
      where: {
        id: req.params.id
      },
      include: [db.User,db.Categories,db.Reviews]
    }).then(function(dbService) {
      console.log(dbService);
      res.json(dbService);
    });
  });

  app.get("/api/service/:id", function(req, res) {
    db.Service.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User,db.Categories,db.Reviews]
    }).then(function(dbService) {
      res.json(dbService);
    });
  });

  app.get("/api/serviceZip/:zip", function(req, res) {
    db.Service.findAll({
      where: {
        zipCode: req.params.zip
      },
      include: [db.User,db.Categories,db.Reviews]
    }).then(function(dbService) {
      res.json(dbService);
    });
  });

  app.post("/api/service", function(req, res) {
    db.Service.create(req.body).then(function(dbService) {
      res.json(dbService);
    })
    .catch(function(err) {
      res.json(err);
    })
  });

  app.delete("/api/service/:id", function(req, res) {
    db.Service.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbService) {
      res.json(dbService);
    });
  });
};
