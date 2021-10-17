import { useState } from "react";
import "./styles.css";



import { initialTasks } from "./tasks";

export const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="app">
      <h1>Tecnologías utilizadas</h1>
      <ul className="task-container"></ul>
      {tasks.map((task) => (
        <li className="task-item" key={task.id}>{task.text}</li>
      ))}
    </div>
  );
};
