import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import Workout from "./Workout"; 
import Food from "./Food"; // ✅ Import the Food page

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        {/* ✅ Navigation Bar */}
        <nav className="nav">
          <Link to="/" style={{ margin: "10px" }} className="link">Home</Link>
          <Link to="/workout" style={{ margin: "10px" }} className="link">Workout</Link>
          <Link to="/food" style={{ margin: "10px" }} className="link">Food</Link> {/* ✅ Added Food Link */}
        </nav>

        {/* ✅ Image and Heading aligned to the left */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <img src="fit.jpg" style={{ width: "100px", marginRight: "10px" }} />
          <h1 style={{ textAlign: "left", margin: 0 }}>Fitness Tracker</h1>
        </div>

        {/* ✅ Page Routes */}
        <div className="main">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <WorkoutForm addWorkout={addWorkout} />
                  <WorkoutList workouts={workouts} />
                </>
              } 
            />
            <Route path="/workout" element={<Workout />} />
            <Route path="/food" element={<Food />} /> {/* ✅ Added Food Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;