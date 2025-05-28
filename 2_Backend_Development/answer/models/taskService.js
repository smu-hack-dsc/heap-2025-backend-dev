const supabase = require("./connection");

const getAllTasks = async () => {
  return await supabase.from("tasks").select("*");
};

const createNewTask = async (newTask) => {
  return await supabase.from("tasks").insert(newTask).select();
};

const findTaskByTitle = async (title) => {
  return await supabase.from("tasks").select("*").eq("title", title).single();
};

const getDoneTasks = async () => {
  return await supabase.from("tasks").select("*").eq("done", true);
};

const getToDoTasks = async () => {
  return await supabase.from("tasks").select("*").eq("done", false);
};

const findTaskById = async (id) => {
  return await supabase.from("tasks").select("*").eq("id", id).single();
};

const updateTaskStatus = async (id, done) => {
  return await supabase.from("tasks").update({ done }).eq("id", id).select();
};

const findTasksByTitle = async (query) => {
  return await supabase.from("tasks").select("*").ilike("title", `%${query}%`);
};

module.exports = {
  getAllTasks,
  createNewTask,
  findTaskByTitle,
  getDoneTasks,
  getToDoTasks,
  findTaskById,
  updateTaskStatus,
  findTasksByTitle,
};