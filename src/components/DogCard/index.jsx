import React from "react";
import LottiePlayer from "../LottiePlayer";

const DogCard = () => {
  return (
    <>
      <LottiePlayer
        src="https://lottie.host/a45a8085-dab9-4bf7-8aee-35a38ebf4e42/aDFz0w3EDb.json"
        // background="#FFFFFF"
        speed="0.8"
        style={{ width: "auto", height: "400px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />
    </>
  );
};

export default DogCard;
