import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../src/TaskGallery.css";

function TaskGallery() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get("http://localhost:8080/tasks");
        setTasks(response.data.task);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="TaskGallery">
        <h2>Your Tasks</h2>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="taskContainer">
              <p>Task: {task.task}</p>
              <p>Description: {task.description}</p>
              <p>Completed at: {task.completed_at}</p>
            </div>
          ))
        ) : (
          <p className="noTasks">No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default TaskGallery;
