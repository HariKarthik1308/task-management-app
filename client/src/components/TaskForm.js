import React, { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    alert("Task Saved");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
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