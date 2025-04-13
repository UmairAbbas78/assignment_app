const db = require("../models");
const Checklist = db.Checklist;
const Task = db.Task;

exports.getAllTasks = async (req, res) => {
  const { id } = req.user;
  try {
    const allTasks = await Checklist.findAll({
      where: { UserId: id },
      include: [
        {
          model: Task,
          required: false,
        },
      ],
    });
    if (allTasks.length === 0) {
      return res.status(404).send({ error: "No tasks found" });
    }
    return res.status(200).send(allTasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.createNewTask = async (req, res) => {
  const { name, status, ChecklistId } = req.body;
  try {
    const task = await Task.create({
      task_name: name,
      task_status: status,
      ChecklistId,
    });
    if (!task) {
      return res.status(304).send({ message: "Failed To Create Task" });
    }
    return res.status(200).send({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.createChecklist = async (req, res) => {
  try {
    const { checklist_name } = req.body;
    const { id } = req.user;

    const checklist = await Checklist.create({ checklist_name, UserId: id });
    if (!checklist) {
      return res.status(304).send({ message: "Failed To Create Checklist" });
    }
    return res.status(200).send({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { task_status } = req.body;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }

    task.task_status = task_status;
    await task.save();

    return res.status(200).send({ message: "Success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
