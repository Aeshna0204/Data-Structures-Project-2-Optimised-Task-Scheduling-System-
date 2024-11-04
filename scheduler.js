

// Greedy Scheduling Function
function scheduleTasks(tasks) {
    // Sort tasks by deadline in ascending order
    tasks.sort((a, b) => a.deadline - b.deadline);

    let currentTime = 0;
    let completedTasks = 0;

    // Loop through each task in the sorted list
    for (const task of tasks) {
        // Check if we can complete this task by its deadline
        if (currentTime + task.duration <= task.deadline) {
            completedTasks += 1;
            currentTime += task.duration;
        }
    }

    return {
        count: completedTasks,
    };
}

module.exports = { scheduleTasks };
