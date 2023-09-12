import React from "react";
import { Link } from "react-router-dom";
import TaskPopUp from "../TaskPopUp";
import { useState } from "react";

function ProfileCard({ user }) {
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
        style={{ marginTop: "auto" }}
        onClick={() => setButtonPopup(true)}
      >
        See Completed Tasks
      </button>
      <TaskPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Popup content</h3>
        <p> This is where the tasks will be</p>
      </TaskPopUp>
    </div>
  );
}

export default ProfileCard;
