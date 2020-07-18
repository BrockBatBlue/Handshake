var db = require("../models");

module.exports = function(app) {
  app.get("/api/category", function(req, res) {
    db.Categories.findAll({
      include: [db.Service]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.get("/api/category/:id", function(req, res) {
    db.Categories.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Service]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/category", function(req, res) {
    db.Categories.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.delete("/api/category/:id", function(req, res) {
    db.Categories.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};