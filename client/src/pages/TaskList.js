import React from "react";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Complete Project",
      description: "Finish MERN project",
      status: "pending",
    },
    {
      id: 2,
      title: "Submit Report",
      description: "Send internship report",
      status: "completed",
    },
  ];

  return (
    <div className="container mt-4">
      <TaskForm />

      <hr />

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;