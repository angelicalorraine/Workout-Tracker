const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please select exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter exercise name"
      },
      distance: {
        type: Number
      },
      duration: {
        type: Number,
        required: "Please enter exercise duration"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
