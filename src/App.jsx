import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(data);

  const createTask = ({ title, description }) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        title,
        description,
      },
    ]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((currenTask) => currenTask.id != task.id));
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </>
  );
}

export default App;
