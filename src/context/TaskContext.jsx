import { useState, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data);
  const value = { tasks, setTasks };
  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContext;
