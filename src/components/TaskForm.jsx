import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../css/TaskForm.css";

function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <input
        id="task-title"
        type="text"
        placeholder="Task title (max 50 chars)"
        onChange={({ target }) => setTitle(target.value)}
        value={title}
        autoFocus
        className="task-input"
        autoComplete="off"
        maxLength="50"
      />
      <textarea
        id="task-description"
        placeholder="Task description (max 500 chars)"
        onChange={({ target }) => setDescription(target.value)}
        value={description}
        className="task-input"
        autoComplete="off"
        maxLength="500"
      ></textarea>
      <button className="new-task-button">Add New Task</button>
    </form>
  );
}

export default TaskForm;
