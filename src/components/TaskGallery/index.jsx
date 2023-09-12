import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h3>Your Tasks</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task._id}>
            <p>Task: {task.task}</p>
            <p>Description: {task.description}</p>
            <p>Completed at: {task.completed_at}</p>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskGallery;
