import React, { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;