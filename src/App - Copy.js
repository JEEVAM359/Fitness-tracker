import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import Workout from "./Workout";
import Food from "./Food";

function App() {
    const [workouts, setWorkouts] = useState([]);

    // Fetch workouts from backend on component mount
    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const response = await fetch("http://localhost:5000/workouts");
            const data = await response.json();
            setWorkouts(data);
        } catch (err) {
            console.error("Error fetching workouts:", err);
        }
    };

    const addWorkout = async (workout) => {
        try {
            const response = await fetch("http://localhost:5000/workouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(workout),
            });

            if (response.ok) {
                const newWorkout = await response.json();
                setWorkouts(prev => [...prev, newWorkout]);
            }
        } catch (err) {
            console.error("Error adding workout:", err);
        }
    };

    // Style object for navigation links
    const navLinkStyle = {
        margin: "10px",
        textDecoration: "none",
        color: "blue",
        transition: "color 0.3s ease",
        ':hover': {
            color: "orange"
        }
    };

    const foodLinkStyle = {
        ...navLinkStyle,
        color: "orange",
        ':hover': {
            color: "blue"
        }
    };

    return (
        <Router>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <nav className="nav">
                    <Link 
                        to="/" 
                        style={navLinkStyle}
                        onMouseEnter={(e) => e.target.style.color = "red"}
                        onMouseLeave={(e) => e.target.style.color = "blue"}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/workout" 
                        style={navLinkStyle}
                        onMouseEnter={(e) => e.target.style.color = "red"}
                        onMouseLeave={(e) => e.target.style.color = "blue"}
                    >
                        Workout
                    </Link>
                    <Link 
                        to="/food" 
                        style={foodLinkStyle}
                        onMouseEnter={(e) => e.target.style.color = "red"}
                        onMouseLeave={(e) => e.target.style.color = "blue"}
                    >
                        Food
                    </Link>
                </nav>
                <div style={{ display: "flex" }}>
                    <img src="fit.jpg" style={{ width: "100px"}} alt="Fitness Logo" />
                    <h1 style={{ margin: "10px" }}>Fitness Tracker</h1>
                </div>
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
                        <Route path="/food" element={<Food />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;