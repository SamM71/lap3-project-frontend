import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { DogCard, DogLevel, TaskGallery } from "../../components";
import pp from "../../assets/pp.jpeg";

function Profile() {
  const user = {
    profileImage: pp,
    firstName: "Tim",
    lastName: "Rowe",
    email: "tim.row@example.com",
  };
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="profile-container">
      <div
        className={`flip-container ${isFlipped ? "flipped" : ""}`}
        style={{ height: "100%" }}
      >
        <div className="flipper">
          <div className="front">
            <ProfileCard user={user} onFlip={() => setIsFlipped(!isFlipped)} />
          </div>
          <div className="back">
            <TaskGallery onFlip={() => setIsFlipped(!isFlipped)} />
          </div>
        </div>
      </div>
      <div className="dog-container">
        <h1>Your Dog</h1>
        <DogCard />
        <DogLevel />
      </div>
    </div>
  );
}

export default Profile;
