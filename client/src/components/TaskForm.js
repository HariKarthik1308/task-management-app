import React, { useState } from "react";
import { addTask } from "../services/taskService";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    try {
      await addTask({
        title,
        description,
        status: "pending",
      });

      setTitle("");
      setDescription("");

      alert("Task Added Successfully");

      refreshTasks();
    } catch (error) {
      alert("Failed to add task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Save Task
      </button>
    </form>
  );
}

export default TaskForm;