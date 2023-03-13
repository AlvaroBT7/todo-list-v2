import { useState } from "react";
import { tasks } from "../data/tasks";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      title: title ? title : "untraked task",
      description: description ? description : "untraked task",
    };
    createTask(task);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="task-title"
        type="text"
        placeholder="Task title"
        onChange={({ target }) => setTitle(target.value)}
        value={title}
        autoFocus
      />
      <textarea
        id="task-description"
        placeholder="Task description"
        onChange={({ target }) => setDescription(target.value)}
        value={description}
      ></textarea>
      <button>Add New Task</button>
    </form>
  );
}

export default TaskForm;
