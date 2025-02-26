import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [workout, setWorkout] = useState({
    date: "",
    type: "",
    duration: "",
    calories: "",
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workout.date && workout.type && workout.duration && workout.calories) {
      addWorkout(workout);
      setWorkout({ date: "", type: "", duration: "", calories: "" });
    }
  };

  return (
    
    <div>
       <h2 style={{textAlign:"center"}}>Track Your Fitness Journey</h2>
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="date" name="date" value={workout.date} onChange={handleChange} required />
      <input type="text" name="type" placeholder="Workout Type" value={workout.type} onChange={handleChange} required />
      <input type="number" name="duration" placeholder="Duration (mins)" value={workout.duration} onChange={handleChange} required />
      <input type="number" name="calories" placeholder="Calories Burned" value={workout.calories} onChange={handleChange} required />
      <button type="submit">Add Workout</button>
    </form>
    </div>
  );
};

export default WorkoutForm;
