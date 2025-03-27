const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with specific database and collection
const DB_NAME = 'fitness-tracker';
const COLLECTION_NAME = 'workouts';
const MONGODB_URI = `mongodb://127.0.0.1:27017/${DB_NAME}`;

// Connect to MongoDB with specific configuration
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // 30 seconds timeout
    socketTimeoutMS: 45000, // 45 seconds socket timeout
})
.then(() => console.log(`Connected to MongoDB database: ${DB_NAME}`))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Workout Schema
const workoutSchema = new mongoose.Schema({
    date: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    calories: { type: Number, required: true, min: 1 },
    createdAt: { type: Date, default: Date.now }
}, { collection: COLLECTION_NAME }); // Explicit collection name

// Create model with specific collection
const Workout = mongoose.model('Workout', workoutSchema);

// API Routes
app.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1 }); // Newest first
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/workouts', async (req, res) => {
    // Validate request body
    if (!req.body.date || !req.body.type || !req.body.duration || !req.body.calories) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const workout = new Workout({
        date: req.body.date,
        type: req.body.type,
        duration: req.body.duration,
        calories: req.body.calories
    });

    try {
        const newWorkout = await workout.save();
        res.status(201).json(newWorkout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', dbState: mongoose.connection.readyState });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Using MongoDB collection: ${DB_NAME}.${COLLECTION_NAME}`);
});