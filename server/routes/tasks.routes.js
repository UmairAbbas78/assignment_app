const express = require("express");
const authenticateToken = require("../middlewares/auth.middleware");
const router = express.Router();
const taskController = require("../controllers/tasks.controller");

router.post("/create_task", authenticateToken, taskController.createNewTask);
router.post(
  "/create_checklist",
  authenticateToken,
  taskController.createChecklist
);
router.put(
  "/update_task/:taskId",
  authenticateToken,
  taskController.updateTask
);

router.get("/get_all_tasks", authenticateToken, taskController.getAllTasks);

module.exports = router;
