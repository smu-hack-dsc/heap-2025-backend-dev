const express = require("express");
const router = express.Router();

// Exercise 1: Building your routes
// Create for 
// - createNewTask
// - getDoneTasks
// - getToDoTasks
// - updateTaskStatus
// - findTasksByTitle

const {
  getAllTasks,
  // TODO: Import other controller functions
} = require("../controllers/taskController");

// TODO: Define routes for:
// - POST new task
// - GET done tasks
// - GET to-do tasks
// - PUT update task status by ID
// - POST search tasks by title
// router.get(...);
// router.post(...);
// ...
// Completed example
router.get("/", getAllTasks);

module.exports = router;