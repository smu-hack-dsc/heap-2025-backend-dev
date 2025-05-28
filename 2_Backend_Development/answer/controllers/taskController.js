const taskService = require("../models/taskService");

const getAllTasks = async (req, res) => {
  const { data, error } = await taskService.getAllTasks();
  if (error) {
    return res.status(500).json({ message: "Error fetching tasks", error });
  }
  return res.status(200).json(data);
};

const createNewTask = async (req, res) => {
  const newTask = req.body;
  const { data, error } = await taskService.createNewTask(newTask);
  if (error) {
    return res.status(500).json({ message: "Error creating task", error });
  }
  return res.status(201).json(data);
};

const getDoneTasks = async (req, res) => {
  const { data, error } = await taskService.getDoneTasks();
  if (error) {
    return res.status(500).json({ message: "Error fetching done tasks", error });
  }
  return res.status(200).json(data);
};

const getToDoTasks = async (req, res) => {
  const { data, error } = await taskService.getToDoTasks();
  if (error) {
    return res.status(500).json({ message: "Error fetching to-do tasks", error });
  }
  return res.status(200).json(data);
};

const updateTaskStatus = async (req, res) => {
  const taskID = req.body.id;
  const done = req.body.done;
  const { data, error } = await taskService.updateTaskStatus(taskID, done);
  if (error) {
    return res.status(500).json({ message: "Error updating task", error });
  }
  return res.status(200).json(data);
};

const findTasksByTitle = async (req, res) => {
  const title = req.body.title;
  const { data, error } = await taskService.findTasksByTitle(title);
  if (error) {
    return res.status(500).json({ message: "Error searching tasks", error });
  }
  return res.status(200).json(data);
};

module.exports = {
  getAllTasks,
  createNewTask,
  getDoneTasks,
  getToDoTasks,
  updateTaskStatus,
  findTasksByTitle,
};