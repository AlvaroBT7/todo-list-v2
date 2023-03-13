import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { tasks, setTasks } = useContext(TaskContext);
  const removeTask = () => {
    setTasks(tasks.filter(currentTask => currentTask.id != task.id));
  };
  const handleButton = () => {
    removeTask();
  };
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleButton}>Remove Task</button>
    </div>
  );
}

export default TaskCard;
