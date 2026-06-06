import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(id);

      setTasks(tasks.filter((task) => task._id !== id));

      alert("Task deleted successfully");
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <TaskForm refreshTasks={fetchTasks} />

      <hr />

      {tasks.length === 0 ? (
        <h5>No Tasks Available</h5>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;