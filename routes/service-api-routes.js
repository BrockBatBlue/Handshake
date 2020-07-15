var db = require("../models");

module.exports = function(app) {
  app.get("/api/service", function(req, res) {
    db.Service.findAll({
      include: [db.User]
    }).then(function(dbService) {
      res.json(dbService);
    });
  });

  // app.get("/api/users/:id", function(req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  app.post("/api/service", function(req, res) {
    db.Service.create(req.body).then(function(dbService) {
      res.json(dbService);
    });
  });

  // app.delete("/api/users/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
};
