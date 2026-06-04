const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const protect = require("../middleware/authMiddleware");

// Create Task (Protected)
router.post("/", protect, async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Get All Tasks (Public)
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Task (Protected)
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Delete Task (Protected)
router.delete("/:id", protect, async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;