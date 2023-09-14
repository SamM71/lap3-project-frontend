import { Link } from "react-router-dom";
import TaskPopUp from "../TaskPopUp";
import TaskGallery from "../TaskGallery";
import React, { useState, useEffect } from "react";

function ProfileCard({ user, onFlip }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
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
      }}
    >
      <img
        src={user.profileImage}
        alt={`${user.firstName} ${user.lastName}`}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <button
        className="see-completed-tasks"
        style={{ marginTop: "auto" }}
        onClick={onFlip}
      >
        See Completed Tasks
      </button>
      <TaskPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <TaskGallery />
      </TaskPopUp>
    </div>
  );
}

export default ProfileCard;
