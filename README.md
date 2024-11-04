## Dsa Project - Optimised Task Scheduling System
#### This repository primarily focus on basic implementation of the task scheduling algorithm using a greedy approach, along with an Express.js API endpoint to handle task submissions.
The greedy solution provided should work efficiently with large inputs since sorting tasks by deadline is O(N log N)  followed by a linear O(N) traversal.This complexity is generally efficient for large input sizes, including up to
10^5 tasks.
### Jest Test Cases
To test the solution effectively, write unit tests with Jest to cover:
- Basic functionality: Ensuring the correct number of tasks are completed on time.
- Edge cases: Empty tasks list, all tasks exceeding deadlines, multiple tasks with overlapping times.
- Performance: For large inputs, test the algorithm’s efficiency with mock data.

### Implementation details
- scheduler.js: Contains the core greedy scheduling function that processes the tasks efficiently. This file is separated from the main server to simplify testing.
- server.js: Sets up the Express API, includes input validation, and sends a clear error message if validation fails.
- scheduler.test.js: Includes a variety of Jest tests:
    - Basic functionality: Tests standard input to confirm correct scheduling.
    - Edge cases: Ensures the function handles empty input and tight deadlines.
    - Performance with large inputs: Verifies the function can handle the upper limit of task count (100,000 tasks) effectively, checking that it meets the problem’s optimization requirements.

### To test the API:

1. Start the server
   ```
   node server.js
   ```
2. Install Jest if you haven’t already:
     ```
       npm install --save-dev jest
    ```
3. Use Postman or curl to send a request to http://localhost:3000/schedule-tasks with a JSON payload of tasks.
