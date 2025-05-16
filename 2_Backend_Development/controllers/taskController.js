const service = require("../models/taskService");

// Exercise 2: Building your routes 
// Implement the functionalities for each of the following routes
// - GET all tasks
// - POST new task
// - GET done tasks
// - GET to-do tasks
// - PUT update task status by ID
// - POST search tasks by title
// 
// Exercise 4: Updating your routes to use DB
// - Use Supabase to fetch and manipulate data instead of hardcoded data
// - Implement the functions in taskController.js to interact with Supabase
// - Use async/await for asynchronous operations
// - Handle errors appropriately and send responses back to the client

// Completed example
const getAllTasks = async (req, res) => {

    // Fetch all tasks from the database using supabase
    const { data, error } = await service.getAllTasks();
    if (error) {
        // Send a 500 status code if response is not successful from supabase with message
        return res.status(500).json({ message: "Error fetching tasks", error });
    }
    // Return the tasks to the client with a 200 status code
    return res.status(200).json(data);
};

// TODO: Implement createNewTask to add a new task
const createNewTask = async (req, res) => {
};

// TODO: Implement getDoneTasks to fetch tasks where done is true
const getDoneTasks = async (req, res) => {
};

// TODO: Implement getToDoTasks to fetch tasks where done is false
const getToDoTasks = async (req, res) => {
};

// TODO: Implement updateTaskStatus to toggle task done status
const updateTaskStatus = async (req, res) => {
};

// TODO: Implement findTasksByTitle to search tasks by title substring
const findTasksByTitle = async (req, res) => {
};

module.exports = {
    getAllTasks,
    createNewTask,
    getDoneTasks,
    getToDoTasks,
    updateTaskStatus,
    findTasksByTitle,
};