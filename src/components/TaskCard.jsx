import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { tasks, removeTask } = useContext(TaskContext);
  const handleButton = () => {
    removeTask(task);
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
