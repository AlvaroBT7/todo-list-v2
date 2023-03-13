import { createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const number = "sos bobito ?";
  return (
    <TaskContext.Provider value={number}>
      {props.children}
    </TaskContext.Provider>
  );
}
