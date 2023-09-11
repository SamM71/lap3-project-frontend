import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { DogCard, DogLevel } from "../../components";

function Profile() {
  const user = {
    profileImage: "https://via.placeholder.com/150",
    firstName: "Tim",
    lastName: "Rowe",
    email: "tim.row@example.com",
  };

  return (
    <div className="profile-container">
      <ProfileCard user={user} />
      <div className="dog-container">
        <h1>Your Dog</h1>
        <DogCard />
        <DogLevel />
      </div>
    </div>
  );
}

export default Profile;
