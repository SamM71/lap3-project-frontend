import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../src/TaskGallery.css";
import DogLevel from "../DogLevel";

function TaskGallery({ onFlip, setTaskCount }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("https://mongo-juice-api.onrender.com/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data.task);
        setTaskCount(response.data.task.length);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    }
    fetchTasks();
  }, [setTaskCount]);

  return (
    <div>
      <div className="TaskGallery">
        <h2>Your Tasks</h2>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="taskContainer">
              <h3>
                <span className="taskLabel">Task: </span>
                {task.name}
              </h3>
              <p>
                <span className="taskLabel">Description: </span>:{" "}
                {task.description}
              </p>
              <p>
                <span className="taskLabel">Mood: </span>
                {task.mood}
              </p>
              <p>
                <span className="taskLabel"></span>Completed on:{" "}
                {task.completed_at}
              </p>
              <button
                className="back-to-profile"
                style={{ position: "absolute", top: "10px", right: "10px" }}
                onClick={onFlip}
              >
                Back to Profile
              </button>
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
