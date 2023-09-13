import React from "react";
import { Link } from "react-router-dom";
import TaskPopUp from "../TaskPopUp";
import TaskGallery from "../TaskGallery";
import { useState } from "react";

function ProfileCard({ user, onFlip }) {
  const [buttonPopup, setButtonPopup] = useState(false);
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
        boxSizing: "border-box",
        overflowY: "auto",
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
      <button style={{ marginTop: "auto" }} onClick={onFlip}>
        See Completed Tasks
      </button>
      <TaskPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <TaskGallery />
      </TaskPopUp>
    </div>
  );
}

export default ProfileCard;
