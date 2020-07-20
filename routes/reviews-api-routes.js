var db = require("../models");
module.exports = function(app) {
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({
      include: [db.Service]
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });
  app.get("/api/reviews/:id", function(req, res) {
    db.Reviews.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Reviews]
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });
  app.post("/api/reviews", function(req, res) {
    db.Reviews.create(req.body).then(function(dbReviews) {
      res.json(dbReviews);
    })
    .catch(function(err) {
      res.json(err);
    });
  });
  app.delete("/api/reviews/:id", function(req, res) {
    db.Reviews.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });
};