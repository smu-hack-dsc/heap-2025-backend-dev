const supabase = require("./connection");

// Exercise 4: Updating your routes to use DB
// - Use Supabase to fetch and manipulate data instead of hardcoded data

// Completed example
const getAllTasks = async () => {
    return await supabase.from("tasks").select("*");
};

// TODO: Implement createNewTask to add a new task
const createNewTask = async (newTask) => {
};

// TODO: Implement getDoneTasks to fetch done tasks
const getDoneTasks = async () => {
};

// TODO: Implement getToDoTasks to fetch todo tasks
const getToDoTasks = async () => {
};

// TODO: Implement updateTaskStatus to update task done status
const updateTaskStatus = async (id, done) => {
};

// TODO: Implement findTasksByTitle to search tasks by title substring
const findTasksByTitle = async (query) => {
};

module.exports = {
    getAllTasks,
    createNewTask,
    getDoneTasks,
    getToDoTasks,
    updateTaskStatus,
    findTasksByTitle,
};