import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ user }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        maxWidth: "300px",
        margin: "0 auto",
        textAlign: "center",
        height: "100%",
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
        onClick={() => alert("Displaying completed tasks")}
      >
        See Tasks Completed
      </button>
    </div>
  );
}

export default ProfileCard;