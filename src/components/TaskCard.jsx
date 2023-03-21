import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import "../css/TaskCard.css";

function TaskCard({ task }) {
  const [active, setActive] = useState(true);
  const { tasks, removeTask } = useContext(TaskContext);
  const handleButton = () => {
    removeTask(task);
  };
  // ${active ? "" : "done"}
  return (
    <div className="task-container">
      <h3 className={`task-title ${active ? "" : "done"}`}>{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <button className="del-task-button" onClick={handleButton}>Remove Task</button>
      <button className="done-task-button" onClick={() => {
        setActive(!active);
      }}>{active ? "Mark as Done" : "Mark as in process"}</button>
    </div>
  );
}

export default TaskCard;
