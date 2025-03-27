import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
    const [workout, setWorkout] = useState({
        date: "",
        type: "",
        duration: "",
        calories: "",
    });

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "duration" || name === "calories") {
            value = Math.max(0, Number(value));
        }

        setWorkout(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            workout.date &&
            workout.type.trim() &&
            Number(workout.duration) > 0 &&
            Number(workout.calories) > 0
        ) {
            try {
                await addWorkout(workout);
                setWorkout({ date: "", type: "", duration: "", calories: "" });
            } catch (error) {
                alert("Failed to add workout. Please try again.");
            }
        } else {
            alert("Please enter valid workout details!");
        }
    };

    const formStyle = {
        display: "flex",
        maxWidth: "850px",
        margin: "30px 300px ",
        padding: "20px",
        gap:"20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    };

    const inputStyle = {
        margin: "10px 0",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ddd"
    };

    const buttonStyle = {
        backgroundColor: "orange",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px"
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Track Your Fitness Journey</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input 
                    type="date" 
                    name="date" 
                    value={workout.date} 
                    onChange={handleChange} 
                    style={inputStyle}
                    required 
                />
                <input 
                    type="text" 
                    name="type" 
                    placeholder="Workout Type" 
                    value={workout.type} 
                    onChange={handleChange} 
                    style={inputStyle}
                    required 
                />
                <input 
                    type="number" 
                    name="duration" 
                    placeholder="Duration (mins)" 
                    value={workout.duration} 
                    onChange={handleChange} 
                    style={inputStyle}
                    required 
                    min="1" 
                />
                <input 
                    type="number" 
                    name="calories" 
                    placeholder="Calories Burned" 
                    value={workout.calories} 
                    onChange={handleChange} 
                    style={inputStyle}
                    required 
                    min="1" 
                />
                <button type="submit" style={buttonStyle}>Add Workout</button>
            </form>
        </div>
    );
};

export default WorkoutForm;