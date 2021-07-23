
const db = require("../models");


module.exports = function (app) {

  //show workouts on workouts page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(function (dbWorkout) {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  })

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  //information for range page
  app.get("/api/workouts/range", ({ }, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  //post new workout
  app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
};


