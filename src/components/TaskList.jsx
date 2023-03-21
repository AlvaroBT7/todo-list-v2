import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import "../css/TaskList.css";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length < 1) {
    return (
      <div className="task-message-container">
        <h3 className="task-message">There is nothing to do at the moment.</h3>
      </div>
    );
  }
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
