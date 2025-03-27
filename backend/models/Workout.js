const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    date: { type: String, required: true },
    workoutType: { type: String, required: true },
    duration: { type: Number, required: true },
    calories: { type: Number, required: true },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
