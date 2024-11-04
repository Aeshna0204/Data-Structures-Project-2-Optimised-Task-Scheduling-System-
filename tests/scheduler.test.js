
const { scheduleTasks } = require('../scheduler');

describe("Task Scheduling Tests", () => {
    test("Schedules tasks correctly for basic input", () => {
        const tasks = [
            { duration: 2, deadline: 4 },
            { duration: 1, deadline: 3 },
            { duration: 3, deadline: 5 },
            { duration: 2, deadline: 6 }
        ];
        const result = scheduleTasks(tasks);
        expect(result.count).toBe(3);
    });

    test("Handles empty task list", () => {
        const tasks = [];
        const result = scheduleTasks(tasks);
        expect(result.count).toBe(0);
    });

    test("Handles tasks with no possible completion due to tight deadlines", () => {
        const tasks = [
            { duration: 5, deadline: 3 },
            { duration: 3, deadline: 2 }
        ];
        const result = scheduleTasks(tasks);
        expect(result.count).toBe(0);
    });

    test("Handles large input sizes efficiently", () => {
        const tasks = Array.from({ length: 100000 }, (_, i) => ({
            duration: 1,
            deadline: i + 1
        }));
        const result = scheduleTasks(tasks);
        expect(result.count).toBe(100000);
    });
});
