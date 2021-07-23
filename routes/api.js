const router = require("express").Router();
const Workout = require("../models");

router.post("/api/exercise", ({ data }, res) => {
  Workout.create(data)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = function (app) {
  app.get("/api/exercise", function (req, res) {
    db.Workout.find({}).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.put("/api/exercise/:id", function (req, res) {
    db.Workout.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });
};



module.exports = router;
