const express = require("express");

const router = express.Router();
const {
  getAllTasks,
  createNewTask,
  getDoneTasks,
  getToDoTasks,
  updateTaskStatus,
  findTasksByTitle,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.post("/createNewTask", createNewTask);
router.get("/getDoneTasks", getDoneTasks);
router.get("/getToDoTasks", getToDoTasks);
router.put("/updateTaskStatus", updateTaskStatus);
router.post("/findTasksByTitle", findTasksByTitle);

module.exports = router;