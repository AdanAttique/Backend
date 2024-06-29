import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 8000;

app.use(express.json()); // Middleware to parse JSON

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
