import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList({ tasks, removeTask }) {
  const number = useContext(TaskContext);
  console.log(number);
  if (tasks.length < 1) {
    return <h3>There is nothin to do at the moment.</h3>;
  }
  return (
    <>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} removeTask={removeTask} />;
      })}
    </>
  );
}

export default TaskList;
