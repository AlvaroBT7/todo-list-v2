import { useEffect, useState, useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import "../css/Header.css";

function Header() {
  const { tasks } = useContext(TaskContext);
  const [glow, setGlow] = useState("");
  useEffect(() => {
    setGlow("glow");
    setTimeout(() => {
      setGlow("");
    }, 1000)
  }, [tasks])
  return (
    <header className="header-title-container">
      <h1 className="header-title">Task Manager</h1>
      <p className="header-subtitle">Number of current tasks: <b className={glow}>{tasks.length}</b></p>
    </header>
  );
}

export default Header;
