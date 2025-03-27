import React from "react";

const WorkoutList = ({ workouts }) => {
    const tableStyle = {
        margin: "20px auto",
        width: "80%",
        borderCollapse: "collapse",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    };

    const tableHeaderRowStyle = {
        backgroundColor: "orange",
        color: "white",
        fontWeight: "bold",
    };

    const tableHeaderStyle = {
        padding: "12px",
        textAlign: "center",
        border: "1px solid #ddd",
    };

    const tableCellStyle = {
        padding: "10px",
        textAlign: "center",
        border: "1px solid #ddd",
    };

    const rowEvenStyle = {
        backgroundColor: "#f9f9f9",
    };

    const rowOddStyle = {
        backgroundColor: "#fff",
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Workout History</h2>

            {workouts.length === 0 ? (
                <p>No workouts logged yet.</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr style={tableHeaderRowStyle}>
                            <th style={tableHeaderStyle}>Date</th>
                            <th style={tableHeaderStyle}>Workout Type</th>
                            <th style={tableHeaderStyle}>Duration (mins)</th>
                            <th style={tableHeaderStyle}>Calories Burned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workouts.map((workout, index) => (
                            <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
                                <td style={tableCellStyle}>{workout.date || "N/A"}</td>
                                <td style={tableCellStyle}>{workout.type || "No Type"}</td>
                                <td style={tableCellStyle}>{workout.duration || "0"}</td>
                                <td style={tableCellStyle}>{workout.calories || "0"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default WorkoutList;