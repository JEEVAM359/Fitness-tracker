import React from "react";

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      
      <h2>Workout History</h2>
      {workouts.length === 0 ? <p>No workouts logged yet.</p> : (
        <table border="1" style={{ margin: "auto", width: "80%" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout Type</th>
              <th>Duration (mins)</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => (
              <tr key={index}>
                <td>{workout.date}</td>
                <td>{workout.type}</td>
                <td>{workout.duration}</td>
                <td>{workout.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WorkoutList;
