import { Link } from "react-router-dom";
import TaskPopUp from "../TaskPopUp";
import TaskGallery from "../TaskGallery";
import React, { useState, useEffect } from "react";

function ProfileCard({ user, onFlip, taskCount }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [localTaskCount, setLocalTaskCount] = useState(taskCount);

  useEffect(() => {
    setLocalTaskCount(taskCount);
  }, [taskCount]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "center",
        height: "100%",
        overflowY: "auto",
        borderRadius: "20px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        // s
      }}
    >
      <img
        src={user.profileImage}
        alt={`${user.firstName} ${user.lastName}`}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginTop: "20%",
        }}
      />
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>Tasks completed: {localTaskCount}</p>
      <div style={{ flex: 1 }}></div>

      <button className="see-completed-tasks" onClick={onFlip}>
        See Completed Tasks
      </button>
      <TaskPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <TaskGallery />
      </TaskPopUp>
    </div>
  );
}

export default ProfileCard;
