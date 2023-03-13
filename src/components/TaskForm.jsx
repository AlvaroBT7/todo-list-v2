import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        title: title ? title : "untraked task",
        description: description ? description : "untraked task"
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask();
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
