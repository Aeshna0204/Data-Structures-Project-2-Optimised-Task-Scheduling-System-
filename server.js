
const express = require('express');
const { scheduleTasks } = require('./scheduler');
const app = express();
app.use(express.json());

// POST endpoint to schedule tasks
app.post('/schedule-tasks', (req, res) => {
    const tasks = req.body.tasks;

    // Input validation
    if (!Array.isArray(tasks) || tasks.some(task => typeof task.duration !== 'number' || typeof task.deadline !== 'number' || task.duration <= 0 || task.deadline <= 0)) {
        return res.status(400).json({ error: "Invalid input. Please provide an array of tasks with positive 'duration' and 'deadline' values." });
    }

    // Run the scheduling algorithm
    const result = scheduleTasks(tasks);

    // Send the response
    res.json(result);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
