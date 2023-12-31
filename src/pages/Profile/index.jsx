import React, { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard";
import { DogCard, DogLevel, TaskGallery, Redirect } from "../../components";
import pp from "../../assets/pp.jpeg";

function Profile() {
  const user = {
    profileImage: pp,
    firstName: "Beth",
    lastName: "Wilson",
    username: "beth4444",
    email: "bethwilson@outlook.com",
  };
  const [isFlipped, setIsFlipped] = useState(false);
  const [taskCount, setTaskCount] = useState(0);

  return (
    <>
      <Redirect mustBeLoggedIn={true} />
      <div className="profile-container">
        <div
          className={`flip-container ${isFlipped ? "flipped" : ""}`}
          style={{ height: "100%" }}
        >
          <div className="flipper">
            <div className="front">
              <ProfileCard
                user={user}
                onFlip={() => setIsFlipped(!isFlipped)}
                taskCount={taskCount}
              />
            </div>
            <div className="back">
              <TaskGallery
                setTaskCount={setTaskCount}
                onFlip={() => setIsFlipped(!isFlipped)}
              />
            </div>
          </div>
        </div>
        <div className="dog-container">
          <h1>Your Dog</h1>
          <DogCard />
          <DogLevel taskCount={taskCount} />
        </div>
      </div>
    </>
  );
}

export default Profile;
