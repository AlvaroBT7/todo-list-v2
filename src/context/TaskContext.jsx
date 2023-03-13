import { useState, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data);
  
  const createTask = ({title, description}) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        title: title ? title : "untraked task",
        description: description ? description : "untraked task"
      },
    ]);
  };
  
  const removeTask = (task) => {
    setTasks(tasks.filter(currentTask => currentTask.id != task.id));
  };

  const value = { tasks, createTask, removeTask };
  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContext;
