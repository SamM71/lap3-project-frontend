import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function TaskGallery() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    async function displayTasks() {
      const response = await fetch(takurl);
      const data = await response.json();
      setTasks(data);
    }

    displayTasks();
  }, []);

  return (
    <div className="tasks">
      <Link to={`/task/${task.id}`} key={task.id}>
        <div className="task">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      </Link>
    </div>
  );
}
